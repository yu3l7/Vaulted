import { NextResponse } from "next/server";
import { findProduct } from "@/lib/content";

export const runtime = "nodejs";

const VALID_PAYMENTS = new Set([
  "stripe",
  "paypal",
  "apple_pay",
  "ltc",
  "btc",
]);

const PAYMENT_LABELS: Record<string, string> = {
  stripe: "Stripe",
  paypal: "PayPal",
  apple_pay: "Apple Pay",
  ltc: "LTC · Litecoin",
  btc: "BTC · Bitcoin",
};

function paymentLabel(id: string): string {
  return PAYMENT_LABELS[id] ?? id;
}

function makeOrderId() {
  // VLT-XXXXX (5 alphanumeric, uppercase, ambiguous chars excluded)
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 5; i++) {
    s += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `VLT-${s}`;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { productSlug, variantId, payment, discord, email, region, notes } = body as {
    productSlug?: string;
    variantId?: string | null;
    payment?: string;
    discord?: string;
    email?: string;
    region?: string;
    notes?: string;
  };

  // Validate
  if (!productSlug || typeof productSlug !== "string") {
    return NextResponse.json({ error: "Missing productSlug" }, { status: 400 });
  }
  const product = findProduct(productSlug);
  if (!product) {
    return NextResponse.json({ error: "Unknown product" }, { status: 404 });
  }

  if (!discord || typeof discord !== "string" || !discord.trim()) {
    return NextResponse.json({ error: "Discord username is required" }, { status: 400 });
  }

  if (!email || typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  if (!payment || !VALID_PAYMENTS.has(payment)) {
    return NextResponse.json({ error: "Invalid payment method" }, { status: 400 });
  }

  if (variantId && product.variants && !product.variants.find((v) => v.id === variantId)) {
    return NextResponse.json({ error: "Unknown variant" }, { status: 400 });
  }

  const variant = product.variants?.find((v) => v.id === variantId);
  const price = variant?.price ?? product.price;
  const orderId = makeOrderId();
  const createdAt = new Date().toISOString();

  // Fire-and-forget Discord webhook if configured
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const fields: { name: string; value: string; inline: boolean }[] = [
        { name: "Order", value: orderId, inline: true },
        { name: "Product", value: product.name, inline: true },
      ];
      if (variant) {
        fields.push({
          name: "Variant",
          value: `${variant.name} (${variant.price})`,
          inline: true,
        });
      } else {
        fields.push({ name: "Price", value: price, inline: true });
      }
      fields.push(
        { name: "Payment", value: paymentLabel(payment), inline: true },
        { name: "Discord", value: `\`${discord.trim()}\``, inline: true },
        { name: "Email", value: email.trim(), inline: true },
        { name: "Region", value: region?.trim() || "—", inline: true },
      );
      if (notes && typeof notes === "string" && notes.trim()) {
        fields.push({ name: "Notes", value: notes.trim().slice(0, 500), inline: false });
      }
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "VAULTED.SYS",
          embeds: [
            {
              title: `New order · ${orderId}`,
              color: 0x00f0f0,
              fields,
              timestamp: createdAt,
              footer: { text: product.id },
            },
          ],
        }),
      });
    } catch (err) {
      // Log but don't fail the request
      console.error("[order] Discord webhook failed:", err);
    }
  } else {
    // No webhook configured — log to server console for dev visibility
    console.log("[order] new ticket", {
      orderId,
      product: product.id,
      variant: variant?.id ?? null,
      payment,
      discord,
      email,
      region,
      notes,
      createdAt,
    });
  }

  return NextResponse.json({ orderId });
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "@/components/icons";
import { cn } from "@/lib/cn";

type Variant = { id: string; name: string; price: string; description?: string };

type Props = {
  productSlug: string;
  productName: string;
  productCategory: string;
  productPrice: string;
  variants?: Variant[];
};

const PAYMENT_METHODS = [
  { id: "stripe", label: "stripe", note: "card · apple pay · google pay" },
  { id: "paypal", label: "paypal", note: "instant" },
  { id: "usdt", label: "usdt", note: "erc20 · trc20" },
  { id: "eth", label: "eth", note: "ethereum mainnet" },
  { id: "cashapp", label: "cashapp", note: "$cashtag" },
  { id: "discord", label: "discord_only", note: "settle in ticket" },
] as const;

type PaymentMethod = (typeof PAYMENT_METHODS)[number]["id"];

export function OrderForm({
  productSlug,
  productName,
  productCategory,
  productPrice,
  variants,
}: Props) {
  const router = useRouter();

  const [variantId, setVariantId] = useState<string>(variants?.[0]?.id ?? "");
  const [payment, setPayment] = useState<PaymentMethod>("stripe");
  const [discord, setDiscord] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("NA");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedVariant = variants?.find((v) => v.id === variantId);
  const displayPrice = selectedVariant?.price ?? productPrice.replace("from ", "");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!discord.trim()) {
      setError("Discord username is required.");
      return;
    }
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("A valid email is required.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug,
          variantId: variantId || null,
          payment,
          discord,
          email,
          region,
          notes,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to create order. Please try again.");
      }

      const { orderId } = await res.json();
      router.push(`/order/${orderId}/confirmed`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      {/* Left: form steps */}
      <div className="space-y-12">
        {/* Step 1: Variant */}
        {variants && variants.length > 0 && (
          <fieldset>
            <legend className="mono flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted">
              <span className="text-accent">[ 01 ]</span> choose_variant
            </legend>
            <h2 className="display mt-3 text-2xl tracking-tight md:text-3xl">
              Pick a tier.
            </h2>
            <div className="mt-6 space-y-2">
              {variants.map((v) => (
                <label
                  key={v.id}
                  className={cn(
                    "mono group flex cursor-pointer items-center justify-between gap-4 border bg-surface px-5 py-4 text-xs uppercase tracking-wider transition-colors",
                    variantId === v.id
                      ? "border-accent bg-accent/5"
                      : "border-border-bright hover:border-fg/40",
                  )}
                >
                  <input
                    type="radio"
                    name="variant"
                    value={v.id}
                    checked={variantId === v.id}
                    onChange={() => setVariantId(v.id)}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex size-4 shrink-0 items-center justify-center border",
                        variantId === v.id
                          ? "border-accent bg-accent"
                          : "border-border-bright",
                      )}
                    >
                      {variantId === v.id && (
                        <Check className="size-3 text-bg" strokeWidth={3} />
                      )}
                    </span>
                    <span className="text-fg">{v.name}</span>
                    {v.description && (
                      <span className="hidden text-muted sm:inline">
                        · {v.description}
                      </span>
                    )}
                  </div>
                  <span
                    className={cn(
                      "shrink-0 text-sm",
                      variantId === v.id ? "text-accent" : "text-muted",
                    )}
                  >
                    {v.price}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {/* Step 2: Info */}
        <fieldset>
          <legend className="mono flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted">
            <span className="text-accent">[ 02 ]</span> your_info
          </legend>
          <h2 className="display mt-3 text-2xl tracking-tight md:text-3xl">
            How we reach you.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="discord_username *" htmlFor="discord">
              <input
                id="discord"
                type="text"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                placeholder="username"
                required
                className="mono w-full border border-border-bright bg-bg px-4 py-3 text-sm uppercase tracking-wider text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </Field>
            <Field label="email *" htmlFor="email">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="mono w-full border border-border-bright bg-bg px-4 py-3 text-sm text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </Field>
            <Field label="region *" htmlFor="region">
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="mono w-full border border-border-bright bg-bg px-4 py-3 text-sm uppercase tracking-wider text-fg focus:border-accent focus:outline-none"
              >
                <option value="NA">NA · North America</option>
                <option value="EU">EU · Europe</option>
                <option value="APAC">APAC · Asia-Pacific</option>
                <option value="SA">SA · South America</option>
                <option value="OCE">OCE · Oceania</option>
              </select>
            </Field>
            <Field label="notes (optional)" htmlFor="notes" className="sm:col-span-2">
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="special requests, scheduling, etc."
                className="mono w-full border border-border-bright bg-bg px-4 py-3 text-sm text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </Field>
          </div>
        </fieldset>

        {/* Step 3: Payment */}
        <fieldset>
          <legend className="mono flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted">
            <span className="text-accent">[ 03 ]</span> payment_method
          </legend>
          <h2 className="display mt-3 text-2xl tracking-tight md:text-3xl">
            How you'll pay.
          </h2>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {PAYMENT_METHODS.map((m) => (
              <label
                key={m.id}
                className={cn(
                  "mono flex cursor-pointer items-center justify-between gap-3 border bg-surface px-4 py-3 text-xs uppercase tracking-wider transition-colors",
                  payment === m.id
                    ? "border-accent bg-accent/5"
                    : "border-border-bright hover:border-fg/40",
                )}
              >
                <input
                  type="radio"
                  name="payment"
                  value={m.id}
                  checked={payment === m.id}
                  onChange={() => setPayment(m.id)}
                  className="sr-only"
                />
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-4 shrink-0 items-center justify-center border",
                      payment === m.id
                        ? "border-accent bg-accent"
                        : "border-border-bright",
                    )}
                  >
                    {payment === m.id && (
                      <Check className="size-3 text-bg" strokeWidth={3} />
                    )}
                  </span>
                  <div>
                    <p className="text-fg">{m.label}</p>
                    <p className="mt-0.5 text-[9px] text-muted">{m.note}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Error */}
        {error && (
          <p
            role="alert"
            className="mono border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs uppercase tracking-wider text-red-400"
          >
            ⚠ {error}
          </p>
        )}

        {/* Submit */}
        <div className="border-t border-border-bright pt-8">
          <button
            type="submit"
            disabled={submitting}
            className="mono inline-flex h-14 w-full items-center justify-center gap-2 border border-accent bg-accent/10 px-7 text-xs uppercase tracking-wider text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_24px_rgb(0_240_240/0.35)] disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
          >
            {submitting ? "[ submitting... ]" : "[ create_ticket → ]"}
          </button>
          <p className="mono mt-4 text-[10px] uppercase tracking-wider text-muted">
            By submitting you agree to our terms. We never ask for passwords.
            <br />
            <Link
              href="https://discord.gg/vaulted"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              [ open_discord_first ] ↗
            </Link>
          </p>
        </div>
      </div>

      {/* Right: sticky summary */}
      <aside className="lg:sticky lg:top-24">
        <div className="border border-border-bright bg-surface">
          <div className="flex items-center justify-between border-b border-border-bright bg-bg px-5 py-2.5">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" />
              <p className="mono text-[10px] uppercase tracking-wider text-muted">
                order.summary
              </p>
            </div>
            <p className="mono text-[10px] uppercase tracking-wider text-accent">
              ● draft
            </p>
          </div>
          <div className="space-y-4 p-6">
            <div>
              <p className="label text-muted">product</p>
              <p className="display mt-1 text-2xl tracking-tight">
                {productName}
              </p>
              <p className="mono mt-1 text-[10px] uppercase tracking-wider text-muted">
                {productCategory.toLowerCase()} · {productSlug}
              </p>
            </div>
            {selectedVariant && (
              <div>
                <p className="label text-muted">variant</p>
                <p className="mono mt-1 text-sm uppercase tracking-wider text-fg">
                  {selectedVariant.name}
                </p>
              </div>
            )}
            <div className="border-t border-border-bright pt-4">
              <div className="flex items-baseline justify-between">
                <p className="label text-muted">total</p>
                <p className="display text-3xl tracking-tight text-accent">
                  {displayPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mono mt-4 text-[10px] uppercase tracking-wider text-muted">
          Order expires in 30 min after creation.
        </p>
      </aside>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mono block text-[10px] uppercase tracking-wider text-muted"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

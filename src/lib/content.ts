import type { ComponentType, SVGProps } from "react";
import {
  Bolt,
  Chat,
  Check,
  Clock,
  Controller,
  CreditCard,
  Crown,
  Lock,
  Refresh,
  Shield,
  Sparkle,
  Star,
  Target,
  Users,
} from "@/components/icons";

export type Variant = {
  id: string;
  name: string;
  price: string;
  description?: string;
};

export type ProductFaq = {
  q: string;
  a: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "Accounts" | "V-Bucks" | "Skins" | "Boosting" | "Coaching" | "Configs";
  price: string;
  badge?: "Popular" | "New" | "Best value" | "Limited";
  highlights: string[];
  includes: string[];
  variants?: Variant[];
  faqs?: ProductFaq[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const products: Product[] = [
  {
    id: "stacked-account",
    slug: "stacked-account",
    name: "Stacked Account",
    tagline: "OG skins, Battle Pass, and 200+ cosmetics ready to load in.",
    description:
      "A pre-loaded Fortnite account with the rarest OG skins — Renegade Raider, Black Knight, Aerial Assault Trooper, and Glow — plus every Battle Pass season 1 through current. Comes with full email access so you own it permanently. Region-locked to NA / EU; alternative regions on request. We hand-verify every account before listing: no bans, no chargebacks, no compromised credentials.",
    category: "Accounts",
    price: "from $89",
    badge: "Popular",
    highlights: [
      "Renegade Raider + Black Knight",
      "Aerial + Glow included",
      "Battle Pass seasons 1–current",
      "Full email access",
      "Region: NA / EU",
    ],
    includes: [
      "Account login + email access",
      "Original purchase receipt (where available)",
      "7-day replacement guarantee",
      "Free region transfer assistance",
    ],
    faqs: [
      {
        q: "Is the account safe?",
        a: "Yes. We never ask for your password to deliver. Each account is verified against the original Epic email before listing.",
      },
      {
        q: "Can I change the email?",
        a: "Yes — full email access means you can swap it to your own within minutes.",
      },
      {
        q: "What if something goes wrong?",
        a: "7-day replacement guarantee. If anything stops working, we replace the account free of charge.",
      },
    ],
    Icon: Crown,
  },
  {
    id: "vbucks-13500",
    slug: "vbucks-13500",
    name: "V-Bucks 13,500",
    tagline: "Direct top-up. No account transfer. Keep your saves.",
    description:
      "13,500 V-Bucks delivered as a direct top-up to your existing Epic account — no login required, no third-party tools. V-Bucks land in 5–60 minutes via code or official top-up, depending on your region. Eligible for the current Battle Pass and item shop. Safest way to buy V-Bucks without exposing your account.",
    category: "V-Bucks",
    price: "$89.99",
    highlights: [
      "Same-day delivery",
      "Code or direct top-up",
      "Eligible for current Battle Pass",
      "Safe — no third-party login",
    ],
    includes: [
      "13,500 V-Bucks on your account",
      "Receipt + delivery confirmation",
      "Battle Pass-eligible",
      "5–60 min delivery",
    ],
    variants: [
      { id: "1k", name: "1,000 V-Bucks", price: "$8.99" },
      { id: "2800", name: "2,800 V-Bucks", price: "$22.99" },
      { id: "5000", name: "5,000 V-Bucks", price: "$39.99" },
      { id: "13500", name: "13,500 V-Bucks", price: "$89.99" },
    ],
    faqs: [
      {
        q: "How fast is delivery?",
        a: "5–60 minutes during business hours. We send a Discord DM with the code or top-up confirmation.",
      },
      {
        q: "Do I need to share my password?",
        a: "No. Direct top-up uses your Epic gamertag only.",
      },
    ],
    Icon: Bolt,
  },
  {
    id: "rare-skin-bundle",
    slug: "rare-skin-bundle",
    name: "Rare Skin Bundle",
    tagline: "Pick 3 vaulted skins from a curated rotating catalog.",
    description:
      "Three vaulted or seasonal skins from our rotating inventory, gifted directly to your account. Each bundle is curated weekly based on what's currently tradeable. Includes Glow, Aerial, and one rotating rare. Lifetime cosmetics — no expiry, no region lock.",
    category: "Skins",
    price: "from $49",
    badge: "Limited",
    highlights: [
      "Pick 3 from rotating catalog",
      "Includes Glow + Aerial",
      "Direct gift to your account",
      "Lifetime cosmetics — no expiry",
    ],
    includes: [
      "3 vaulted/seasonal skins",
      "Direct gift delivery",
      "Rarity tier selection",
      "Lifetime ownership",
    ],
    variants: [
      { id: "common", name: "Common tier", price: "$49", description: "3 seasonal skins, no OGs" },
      { id: "rare", name: "Rare tier", price: "$89", description: "3 vaulted skins, includes Glow" },
      { id: "og", name: "OG tier", price: "$189", description: "3 OGs incl. Renegade or Black Knight" },
    ],
    faqs: [
      {
        q: "Which skins are in the catalog this week?",
        a: "DM us on Discord for the current week's pick list — it changes as inventory moves.",
      },
      {
        q: "Can I choose specific skins?",
        a: "Yes for Rare and OG tiers. Common tier is curated by us.",
      },
    ],
    Icon: Sparkle,
  },
  {
    id: "boost-battle-pass",
    slug: "boost-battle-pass",
    name: "Battle Pass Boost",
    tagline: "Reach tier 100 by your deadline. Solo queue or team.",
    description:
      "Battle Pass completed to tier 100 by a top-tier booster — solo queue (you play, we coach) or piloted (we play). Average turnaround 48 hours. Daily progress updates on Discord with screenshots. VPN-safe — your account stays secure throughout.",
    category: "Boosting",
    price: "$35",
    highlights: [
      "Average 48h turnaround",
      "Self-play or piloted",
      "Daily progress updates on Discord",
      "VPN-safe",
    ],
    includes: [
      "Tier 0 → 100 completion",
      "Daily screenshot updates",
      "All seasonal challenges",
      "Style bonuses included",
    ],
    variants: [
      { id: "self-play", name: "Self-play (coached)", price: "$35" },
      { id: "piloted", name: "Piloted (we play)", price: "$55" },
      { id: "express", name: "Express (24h)", price: "$85" },
    ],
    faqs: [
      {
        q: "Will my account get flagged?",
        a: "No. We use VPN matching and human play — not bots. 4,200+ orders completed without a single ban.",
      },
      {
        q: "Can I watch the boost happen?",
        a: "Yes — we stream every session on Discord for transparency.",
      },
    ],
    Icon: Target,
  },
  {
    id: "coaching-1on1",
    slug: "coaching-1on1",
    name: "1-on-1 Coaching",
    tagline: "Build edits, rotations, and aim with a top 1% player.",
    description:
      "Live 1-on-1 session with a top-1% Fortnite player. VOD review, custom practice routine, and a recorded session you keep forever. Available for K&M and controller. Booking via Discord.",
    category: "Coaching",
    price: "$60 / hr",
    badge: "New",
    highlights: [
      "Live VOD review",
      "Custom practice routine",
      "Controller or K&M",
      "Recorded session included",
    ],
    includes: [
      "1-hour live session",
      "Custom practice routine PDF",
      "Recorded VOD (yours to keep)",
      "Follow-up Discord support",
    ],
    faqs: [
      {
        q: "What's your rank?",
        a: "All coaches are Champion+ with verified tournament history.",
      },
      {
        q: "Can I book recurring sessions?",
        a: "Yes — 4-session and 8-session bundles are available at a discount.",
      },
    ],
    Icon: Users,
  },
  {
    id: "creative-config",
    slug: "creative-config",
    name: "Creative Config Drop",
    tagline: "Hand-tuned sensitivity + keybinds for your setup.",
    description:
      "Sensitivity, keybinds, and edit settings tuned by a top-tier player for your exact setup (K&M, controller, linear vs standard, etc.). Delivered as a downloadable config file + setup guide. Lifetime updates — if we tune ours, you get the new one free.",
    category: "Configs",
    price: "$15",
    highlights: [
      "Per-weapon sensitivity",
      "Edit-on-release binds",
      "Tested on linear + standard",
      "Lifetime updates",
    ],
    includes: [
      "Custom config file",
      "Setup guide PDF",
      "Lifetime free updates",
      "K&M or controller",
    ],
    variants: [
      { id: "km-linear", name: "K&M · Linear", price: "$15" },
      { id: "km-standard", name: "K&M · Standard", price: "$15" },
      { id: "controller-linear", name: "Controller · Linear", price: "$15" },
      { id: "controller-standard", name: "Controller · Standard", price: "$15" },
    ],
    faqs: [
      {
        q: "Will this work on my setup?",
        a: "Yes — every config is tuned for a specific input + curve combo. Pick the matching variant.",
      },
      {
        q: "Can I get a refund?",
        a: "Yes within 7 days if the config doesn't improve your gameplay.",
      },
    ],
    Icon: Controller,
  },
];

export function findProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export type Tier = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
  productSlug?: string;
};

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$25",
    description: "Quick wins for new players or one-off purchases.",
    features: [
      "1,000 V-Bucks top-up",
      "Single rare skin pick",
      "Sensitivity config file",
      "Discord support",
    ],
    cta: "Get started",
    productSlug: "vbucks-13500",
  },
  {
    id: "standard",
    name: "Standard",
    price: "$75",
    description: "Most popular. A complete loadout refresh in one go.",
    features: [
      "3-skin rare bundle",
      "Battle Pass boost to tier 100",
      "Coaching intro session (30 min)",
      "Priority Discord support",
    ],
    featured: true,
    cta: "Go standard",
    productSlug: "rare-skin-bundle",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$220",
    description: "Full vault. Accounts, skins, and a season's worth of coaching.",
    features: [
      "Stacked account (OG skins)",
      "5-skin rare bundle",
      "4× 1-hour coaching sessions",
      "Custom creative config",
      "VIP Discord channel",
    ],
    cta: "Go pro",
    productSlug: "stacked-account",
  },
];

export type Step = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
};

export const steps: Step[] = [
  {
    Icon: Sparkle,
    title: "Pick your product",
    body: "Browse the catalog, choose a tier, or open a ticket for something custom.",
  },
  {
    Icon: CreditCard,
    title: "Pay & confirm on Discord",
    body: "Stripe, PayPal, or crypto. Confirm details in a private ticket.",
  },
  {
    Icon: Clock,
    title: "Delivered in 5–60 min",
    body: "V-Bucks and skins land same-day. Accounts and coaching booked instantly.",
  },
];

export type Vouch = {
  body: string;
  author: string;
  meta: string;
  handle: string;
  product: string;
  orderId: string;
};

export const vouches: Vouch[] = [
  {
    body: "Got the stacked account in 20 minutes. Skins were exactly as advertised. Already on my second order.",
    author: "@kevinn_b",
    meta: "Stacked Account · verified",
    handle: "kevinn.discord.gg",
    product: "Stacked Account",
    orderId: "0x9af1 · 4f31",
  },
  {
    body: "Coach broke down my build edits in a way no YouTube video ever did. Hit Champion next split.",
    author: "@maddie.q",
    meta: "Coaching 4× · verified",
    handle: "maddie.q.psn",
    product: "Coaching · 4 sessions",
    orderId: "0x6c0d · 2b1a",
  },
  {
    body: "Battle Pass to tier 100 in two days, no sketchy logins. They sent clips of every milestone.",
    author: "@toasted__",
    meta: "Boosting · verified",
    handle: "toasted__",
    product: "Battle Pass Boost",
    orderId: "0x4218 · 9d77",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "How fast is delivery?",
    a: "V-Bucks, skins, and configs deliver within 5–60 minutes. Boosting services start within 12 hours. Coaching is booked on your schedule.",
  },
  {
    q: "Do you take custom orders?",
    a: "Yes. Open a Discord ticket with your wishlist and we'll quote a custom bundle within an hour.",
  },
  {
    q: "What if something goes wrong?",
    a: "Every order includes a 7-day replacement guarantee on digital goods and a free redo on coaching and boosting.",
  },
  {
    q: "Is my account safe?",
    a: "We never ask for your password. V-Bucks and skins are delivered via code or official top-up. Boosting is VPN-safe.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Stripe (card), PayPal, Apple Pay, and USDT/ETH on Ethereum. Invoices issued automatically.",
  },
];

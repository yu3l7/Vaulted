import type { ComponentType, SVGProps } from "react";
import {
  Check,
  Clock,
  CreditCard,
  Sparkle,
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
  image?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export const products: Product[] = [
  {
    id: "50-skins-account",
    slug: "50-skins-account",
    name: "50 Skins Account",
    tagline: "50 hand-verified skins across rarities, loaded and ready.",
    description:
      "A pre-loaded Fortnite account carrying 50 skins spanning seasonal, vaulted, and rare tiers — sourced from active inventory, hand-checked for ban status, ownership legitimacy, and cosmetic authenticity. Full email access so the account is yours permanently. Region-locked to NA/EU on standard listings; alternate regions available on request. Every account is verified by our team before listing — no compromised credentials, no chargebacks, no flagged Epic IDs.",
    category: "Accounts",
    price: "from $89",
    badge: "Popular",
    image: "/product-placeholder.jpg",
    highlights: [
      "50 verified skins across rarities",
      "Includes seasonal + vaulted picks",
      "Full email access",
      "Region: NA / EU (other regions on request)",
      "Ban-free, chargeback-free",
    ],
    includes: [
      "Account login + email access",
      "7-day replacement guarantee",
      "Original purchase receipt (where available)",
      "Free region transfer assistance",
    ],
    faqs: [
      {
        q: "Which skins are included?",
        a: "The 50 are picked from current inventory — DM us on Discord for this week's roster before purchasing.",
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
  },
  {
    id: "vbucks-loaded-account",
    slug: "vbucks-loaded-account",
    name: "V-Bucks Loaded Account",
    tagline: "Pre-loaded V-Bucks balance ready to spend on the item shop.",
    description:
      "Fortnite account with a V-Bucks balance already loaded — spend instantly on the current Battle Pass, item shop, or save for a future season. Standard listings ship with 13,500 V-Bucks (the Battle Pass tier); larger balances up to 50,000 are available on request. Full email access included. We hand-verify every account: no third-party top-up services, no Epic-flagged IDs, no compromised credentials.",
    category: "Accounts",
    price: "from $65",
    badge: "Best value",
    image: "/product-placeholder.jpg",
    highlights: [
      "13,500 V-Bucks pre-loaded (standard)",
      "Battle Pass-eligible on day one",
      "Up to 50,000 V-Bucks on request",
      "Full email access",
      "No third-party top-up services",
    ],
    includes: [
      "Account login + email access",
      "13,500 V-Bucks balance (or requested amount)",
      "7-day replacement guarantee",
      "Battle Pass-ready on delivery",
    ],
    faqs: [
      {
        q: "How much V-Bucks is loaded?",
        a: "Standard listings have 13,500 V-Bucks. We can source larger balances — DM us on Discord for a quote.",
      },
      {
        q: "Can I spend the V-Bucks immediately?",
        a: "Yes — the balance is yours the moment you log in. No cooldown, no transfer delay.",
      },
      {
        q: "Do I keep the V-Bucks if I change the email?",
        a: "Yes. V-Bucks are tied to the Epic account, not the email — changing the email keeps the balance intact.",
      },
    ],
  },
  {
    id: "pickaxe-account",
    slug: "pickaxe-account",
    name: "Pickaxe Account",
    tagline: "Rare pickaxes collected across seasons, ready to harvest.",
    description:
      "Fortnite account loaded with a curated collection of rare pickaxes — including seasonal exclusives, vaulted harvest tools, and a few tournament-reward blades. Standard listings ship with 8–12 rare pickaxes; the full list rotates with current inventory. Full email access included. Every account is verified by our team before listing.",
    category: "Accounts",
    price: "from $49",
    image: "/product-placeholder.jpg",
    highlights: [
      "8–12 rare pickaxes (standard)",
      "Includes seasonal + vaulted picks",
      "Full email access",
      "Region: NA / EU",
    ],
    includes: [
      "Account login + email access",
      "Curated rare pickaxe loadout",
      "7-day replacement guarantee",
    ],
    faqs: [
      {
        q: "Which pickaxes are included?",
        a: "DM us on Discord for the current week's pickaxe list — it rotates as inventory moves.",
      },
      {
        q: "Are these account-bound or tradeable?",
        a: "Pickaxes are account-bound. You receive them on the listed account — full email access means you can swap to your own Epic ID.",
      },
    ],
  },
  {
    id: "glider-account",
    slug: "glider-account",
    name: "Glider Account",
    tagline: "Rare gliders from vaulted and current seasons, ready to deploy.",
    description:
      "Fortnite account loaded with a curated collection of rare gliders — including seasonal deploys, vaulted contrails, and tournament-reward wings. Standard listings ship with 8–12 rare gliders; the full list rotates with current inventory. Full email access included. Every account is verified by our team before listing.",
    category: "Accounts",
    price: "from $49",
    image: "/product-placeholder.jpg",
    highlights: [
      "8–12 rare gliders (standard)",
      "Includes seasonal + vaulted picks",
      "Full email access",
      "Region: NA / EU",
    ],
    includes: [
      "Account login + email access",
      "Curated rare glider loadout",
      "7-day replacement guarantee",
    ],
    faqs: [
      {
        q: "Which gliders are included?",
        a: "DM us on Discord for the current week's glider list — it rotates as inventory moves.",
      },
      {
        q: "Can I get both gliders and pickaxes on the same account?",
        a: "Not on standard listings. Open a custom ticket if you want a combined loadout — we can usually source it within 48 hours.",
      },
    ],
  },
  {
    id: "og-account",
    slug: "og-account",
    name: "OG Account",
    tagline: "Original season cosmetics — the rarest loadout in the game.",
    description:
      "Top-tier Fortnite account loaded with original-season items — Season 1 through Season 3 cosmetics including the legendary Renegade Raider, Black Knight, Aerial Assault Trooper, and Glow. These accounts are sourced carefully and priced accordingly; supply is limited. Full email access included. Every OG account is verified by our team before listing: no Epic flags, no compromised credentials, no chargebacks.",
    category: "Accounts",
    price: "from $149",
    badge: "Limited",
    image: "/product-placeholder.jpg",
    highlights: [
      "Renegade Raider + Black Knight",
      "Aerial Assault Trooper + Glow",
      "Season 1–3 OG items",
      "Full email access",
      "Limited inventory",
    ],
    includes: [
      "Account login + email access",
      "Curated OG-season loadout",
      "7-day replacement guarantee",
      "Original purchase receipt (where available)",
    ],
    faqs: [
      {
        q: "What's the rarest item on a standard OG account?",
        a: "Renegade Raider or Black Knight on most listings. Some carry both — DM us for the current inventory.",
      },
      {
        q: "Why is pricing 'from' instead of fixed?",
        a: "OG inventory varies week to week. The 'from' price reflects a base OG loadout; accounts with both Renegade and Black Knight list higher.",
      },
      {
        q: "Can I upgrade an OG account to stacked later?",
        a: "Yes — open a custom ticket. We can usually source a stacked OG (Renegade + Black Knight + every Battle Pass skin) within 72 hours.",
      },
    ],
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
    price: "$49",
    description: "Entry loadout — a curated single-slot account.",
    features: [
      "Pickaxe or Glider Account",
      "8–12 rare cosmetics",
      "Full email access",
      "Discord support",
    ],
    cta: "Get started",
    productSlug: "pickaxe-account",
  },
  {
    id: "standard",
    name: "Standard",
    price: "$89",
    description: "Most popular. A complete loadout refresh in one go.",
    features: [
      "50 Skins Account",
      "Curated mix of rarities",
      "Full email access",
      "Priority Discord support",
    ],
    featured: true,
    cta: "Go standard",
    productSlug: "50-skins-account",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$149",
    description: "Full OG vault. The rarest loadout in the game.",
    features: [
      "OG Account (Renegade + Black Knight)",
      "V-Bucks Loaded Account bundle",
      "Custom cosmetic requests",
      "VIP Discord channel",
      "Lifetime loadout support",
    ],
    cta: "Go pro",
    productSlug: "og-account",
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
    body: "Accounts ship same-day with full email access and a 7-day replacement guarantee.",
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
    body: "Picked up the OG account — Renegade + Black Knight both loaded, email swapped in 5 minutes. Smooth.",
    author: "@kevinn_b",
    meta: "OG Account · verified",
    handle: "kevinn.discord.gg",
    product: "OG Account",
    orderId: "0x9af1 · 4f31",
  },
  {
    body: "50 Skins Account had exactly what I wanted. Verification was thorough, no issues since.",
    author: "@maddie.q",
    meta: "50 Skins Account · verified",
    handle: "maddie.q.psn",
    product: "50 Skins Account",
    orderId: "0x6c0d · 2b1a",
  },
  {
    body: "V-Bucks Loaded Account was the fastest delivery I've ever gotten. Logged in and the balance was there.",
    author: "@toasted__",
    meta: "V-Bucks Loaded · verified",
    handle: "toasted__",
    product: "V-Bucks Loaded Account",
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
    a: "Every account type ships same-day — typically within 5–60 minutes of purchase confirmation.",
  },
  {
    q: "Do you take custom orders?",
    a: "Yes. Open a Discord ticket with your wishlist and we'll quote a custom bundle within an hour.",
  },
  {
    q: "What if something goes wrong?",
    a: "Every order includes a 7-day replacement guarantee. If an account stops working for any reason, we replace it free of charge.",
  },
  {
    q: "Is my account safe?",
    a: "Every account is hand-verified by our team — no Epic flags, no chargebacks, no compromised credentials. You receive full email access so you can swap the account to your own Epic ID within minutes.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Stripe (card), PayPal, Apple Pay, and USDT/ETH on Ethereum. Invoices issued automatically.",
  },
];

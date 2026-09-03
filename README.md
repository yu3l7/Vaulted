# Vaulted

Single-page portfolio for a Fortnite digital-products shop. Built with Next.js 16 + Tailwind v4 + TypeScript. Minimalist, zero-bloat, Discord-first.

## Stack

- **Next.js 16** App Router
- **TypeScript** (strict)
- **Tailwind CSS v4** with `@theme inline` tokens
- **next/font** (Inter, one family, two weights)
- **one client component** — `MobileNav` (the only `use client` island)
- **prefers-color-scheme** for light/dark — no toggle, no flash

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Edit content

All copy, prices, product names, vouches, and FAQ live in **`src/lib/content.ts`**. Edit one file to rebrand the whole site.

Discord invite placeholder: search for `discord.gg/vaulted` and replace with the real invite.

## File layout

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, viewport
│   ├── page.tsx          # Single-page composition
│   ├── globals.css       # Tailwind v4 import + design tokens
│   ├── not-found.tsx     # Custom 404
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/               # Container, Section, Button (all Server)
│   ├── sections/         # Header, Hero, Products, Pricing, Process,
│   │                     # Vouches, Faq, Contact, Footer
│   │                     # MobileNav is the only client component
│   └── icons/            # Inline SVG components
└── lib/
    ├── cn.ts             # class joiner (4 lines)
    └── content.ts        # All product / tier / vouch / faq data
```

## Design tokens

Defined in `src/app/globals.css` via Tailwind v4 `@theme inline`. Five color tokens (`bg`, `fg`, `muted`, `accent`, `accent-fg`, `border`, `surface`), one font family, one spacing scale. Both light and dark schemes included.

## Performance budget

- Fully prerendered (Static)
- Single client island (mobile drawer)
- One font family
- No images
- No third-party scripts

## Deploy

Vercel (zero-config):

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import at https://vercel.com/new.

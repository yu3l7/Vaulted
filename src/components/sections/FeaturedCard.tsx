import Link from "next/link";
import { ArrowRight, Crown, Star } from "@/components/icons";
import type { Product } from "@/lib/content";
import { products } from "@/lib/content";

export function FeaturedCard({
  product = products.find((p) => p.id === "stacked-account")!,
}: {
  product?: Product;
}) {
  const Icon = product.Icon;

  return (
    <aside className="relative">
      <div className="relative border border-border-bright bg-surface">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border-bright bg-bg px-5 py-2.5">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent pulse-cyan"
            />
            <span className="mono text-[10px] uppercase tracking-wider text-muted">
              product.featured
            </span>
          </div>
          <span className="mono text-[10px] uppercase tracking-wider text-accent">
            [ popular ]
          </span>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center border border-accent bg-accent/10 text-accent">
              <Icon className="size-5" />
            </div>
            <div>
              <p className="mono text-[10px] uppercase tracking-wider text-muted">
                {product.category}
              </p>
              <h3 className="display text-2xl tracking-tight md:text-3xl">
                {product.name}
              </h3>
            </div>
          </div>

          <p className="mt-4 text-pretty text-sm text-muted md:text-base">
            {product.tagline}
          </p>

          {/* Skin grid mockup */}
          <div className="mt-6 grid grid-cols-5 gap-1">
            {[
              { name: "RENG", tint: "oklch(0.62 0.22 270)" },
              { name: "AERL", tint: "oklch(0.7 0.18 210)" },
              { name: "BLK", tint: "oklch(0.35 0.02 270)" },
              { name: "GLOW", tint: "oklch(0.72 0.2 140)" },
              { name: "SPRK", tint: "oklch(0.78 0.15 60)" },
            ].map((skin) => (
              <div
                key={skin.name}
                className="relative aspect-square overflow-hidden border border-border-bright"
                style={{
                  background: `linear-gradient(135deg, ${skin.tint} 0%, color-mix(in oklch, ${skin.tint} 35%, var(--bg)) 100%)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10" />
                <span className="mono absolute inset-x-1 bottom-1 text-center text-[9px] font-medium leading-tight text-white/95 drop-shadow-sm">
                  {skin.name}
                </span>
              </div>
            ))}
          </div>

          <ul className="mono mt-6 space-y-1.5 text-[11px] uppercase tracking-wider text-muted">
            {product.highlights.slice(0, 3).map((h) => (
              <li key={h}>
                <span className="text-accent">▸</span> {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-end justify-between border-t border-border-bright pt-5">
            <div>
              <p className="mono text-[10px] uppercase tracking-wider text-muted">
                starting_at
              </p>
              <p className="display mt-1 text-3xl tracking-tight md:text-4xl">
                {product.price.replace("from ", "")}
              </p>
            </div>
            <div className="text-right">
              <div
                aria-label="Rated 4.9 out of 5"
                className="flex items-center justify-end gap-0.5"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-3.5 text-accent md:size-4" />
                ))}
              </div>
              <p className="mono mt-1 text-[9px] uppercase tracking-wider text-muted">
                4.9 · 612 vouches
              </p>
            </div>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="mono mt-6 inline-flex h-12 w-full items-center justify-center gap-2 border border-accent bg-accent/10 px-6 text-xs uppercase tracking-wider text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_24px_rgb(0_240_240/0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            [ view_product <ArrowRight className="size-3.5" /> ]
          </Link>
          <Link
            href={`/order/${product.slug}`}
            className="mono mt-2 inline-flex h-10 w-full items-center justify-center gap-2 border border-border-bright bg-fg/5 text-[11px] uppercase tracking-wider text-fg transition-colors hover:border-accent hover:text-accent"
          >
            [ buy_now ]
          </Link>
        </div>
      </div>
    </aside>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, Check } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { products, type Product } from "@/lib/content";
import { ProductVisual } from "@/components/product-visuals";
import { cn } from "@/lib/cn";

const VARIANTS: Record<string, string> = {
  "50-skins-account": "Hand-verified · Full email access",
  "vbucks-loaded-account": "13,500+ V-Bucks · Battle Pass ready",
  "pickaxe-account": "8–12 rare pickaxes · Curated",
  "glider-account": "8–12 rare gliders · Curated",
  "og-account": "Season 1–3 OG items · Limited",
};

const DELIVERY: Record<string, string> = {
  "50-skins-account": "Same-day delivery",
  "vbucks-loaded-account": "5–60 min delivery",
  "pickaxe-account": "Same-day delivery",
  "glider-account": "Same-day delivery",
  "og-account": "Same-day delivery · Limited stock",
};

function PriceLine({ price }: { price: string }) {
  const isFrom = price.startsWith("from ");
  const value = price.replace("from ", "");
  return (
    <p className="text-xs text-muted">
      {isFrom ? "From " : ""}
      <span className="display text-xl tracking-tight text-fg">{value}</span>
    </p>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      style={{ "--card-index": index } as CSSProperties}
      className="group card-transition relative flex flex-col overflow-hidden border border-border bg-surface hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/* Visual */}
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <ProductVisual
            id={product.id}
            className="absolute inset-0 size-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        )}
        {product.badge && (
          <span
            className={cn(
              "absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
              product.badge === "Popular"
                ? "bg-accent text-accent-fg"
                : "border border-accent-2 bg-accent-2/10 text-accent-2",
            )}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {product.category}
        </p>
        <h3 className="display mt-2 text-xl tracking-tight md:text-2xl">
          {product.name}
        </h3>
        <p className="mono mt-1.5 text-[10px] uppercase tracking-wider text-muted">
          {VARIANTS[product.id] ?? product.category}
        </p>
        <p className="mt-3 text-sm text-muted">{product.tagline}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-fg">
          {product.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2">
              <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div className="space-y-0.5">
            <PriceLine price={product.price} />
            <p className="text-[11px] text-muted">
              {DELIVERY[product.id] ?? "Same-day delivery"}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 border border-border-bright bg-fg/5 px-3 py-2 text-xs font-medium text-fg transition-colors group-hover:border-accent group-hover:text-accent">
            View
            <ArrowRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function Products() {
  return (
    <section
      id="products"
      className="relative border-b border-border bg-bg py-20 md:py-28"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="label text-accent">
              <span className="text-accent-2">▸</span> 02 / products
            </p>
            <h2 className="display mt-3 text-balance text-4xl md:text-5xl">
              Everything you need.
              <br />
              <span className="text-accent">Nothing you don&apos;t.</span>
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted">
              Six categories, hand-curated. Every item is verified before it
              goes live and replaced if it doesn&apos;t match the listing.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:text-accent"
          >
            View all products
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Grid — uniform layout */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

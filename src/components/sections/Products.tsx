import Link from "next/link";
import { ArrowRight, Check } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { products, type Product } from "@/lib/content";
import { ProductVisual } from "@/components/product-visuals";
import { cn } from "@/lib/cn";

const VARIANTS: Record<string, string> = {
  "stacked-account": "NA / EU · Full access",
  "vbucks-13500": "Direct top-up · No transfer",
  "rare-skin-bundle": "Pick 3 · Lifetime cosmetics",
  "boost-battle-pass": "Self-play or piloted · 48h avg",
  "coaching-1on1": "Live VOD · Recorded session",
  "creative-config": "K&M + controller · Lifetime updates",
};

const DELIVERY: Record<string, string> = {
  "stacked-account": "Same-day delivery",
  "vbucks-13500": "5–60 min delivery",
  "rare-skin-bundle": "Same-day delivery",
  "boost-battle-pass": "Starts within 12 hours",
  "coaching-1on1": "Booked on your schedule",
  "creative-config": "Instant download",
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

function FeaturedCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden border border-accent bg-surface lg:col-span-2 lg:flex-row"
    >
      {/* Visual */}
      <div className="relative aspect-[4/5] overflow-hidden bg-bg lg:aspect-auto lg:w-1/2">
        <ProductVisual
          id={product.id}
          className="absolute inset-0 size-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, transparent 60%, var(--surface) 100%)",
          }}
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-fg">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7 md:p-10 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {product.category}
        </p>
        <h3 className="display mt-3 text-balance text-3xl tracking-tight md:text-4xl lg:text-5xl">
          {product.name}
        </h3>
        <p className="mono mt-2 text-[10px] uppercase tracking-wider text-muted">
          {VARIANTS[product.id] ?? product.category}
        </p>
        <p className="mt-5 max-w-xl text-pretty text-base text-muted md:text-lg">
          {product.tagline}
        </p>
        <ul className="mt-6 grid gap-2.5 text-sm text-fg sm:grid-cols-2">
          {product.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-6 pt-8">
          <div className="space-y-1">
            <p className="text-xs text-muted">
              {product.price.startsWith("from ") ? "From " : ""}
              <span className="display text-3xl tracking-tight text-fg md:text-4xl">
                {product.price.replace("from ", "")}
              </span>
            </p>
            <p className="text-xs text-muted">
              {DELIVERY[product.id] ?? "Same-day delivery"}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-opacity group-hover:opacity-90">
            View details
            <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden border border-border bg-surface transition-colors hover:border-accent"
    >
      {/* Visual */}
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        <ProductVisual
          id={product.id}
          className="absolute inset-0 size-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
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
  const [featured, ...rest] = products;

  return (
    <section id="products" className="relative border-b border-border bg-bg py-20 md:py-28">
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
              <span className="text-accent">Nothing you don't.</span>
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted">
              Six categories, hand-curated. Every item is verified before it
              goes live and replaced if it doesn't match the listing.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            View all products
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured && <FeaturedCard product={featured} />}
          {rest.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

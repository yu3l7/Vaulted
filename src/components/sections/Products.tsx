import Link from "next/link";
import { ArrowRight } from "@/components/icons";
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

function FeaturedCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group glow-cyan relative flex flex-col overflow-hidden border border-accent bg-surface lg:col-span-2 lg:flex-row"
    >
      {/* Visual */}
      <div className="relative aspect-[4/5] overflow-hidden bg-bg lg:aspect-auto lg:w-1/2">
        <ProductVisual
          id={product.id}
          className="absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
          <span className="mono absolute left-4 top-4 border border-accent bg-accent/15 px-2 py-1 text-[10px] uppercase tracking-wider text-accent backdrop-blur-sm">
            [ {product.badge.toLowerCase()} ]
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7 md:p-10 lg:p-12">
        <p className="label text-accent">
          <span className="text-accent-2">▸</span> {product.category.toLowerCase()} · featured
        </p>
        <h3 className="display mt-4 text-balance text-3xl tracking-tight md:text-4xl lg:text-5xl">
          {product.name}
        </h3>
        <p className="mono mt-2 text-[10px] uppercase tracking-wider text-muted">
          {VARIANTS[product.id] ?? product.category}
        </p>
        <p className="mt-5 max-w-xl text-pretty text-base text-muted md:text-lg">
          {product.tagline}
        </p>
        <ul className="mono mt-6 grid gap-2 text-[11px] uppercase tracking-wider text-muted sm:grid-cols-2">
          {product.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="text-accent">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <div>
            <p className="label text-muted">starting_at</p>
            <p className="display mt-1 text-3xl tracking-tight md:text-4xl">
              {product.price.replace("from ", "")}
            </p>
          </div>
          <span className="mono inline-flex items-center gap-2 border border-accent bg-accent/10 px-5 py-3 text-xs uppercase tracking-wider text-accent transition-all group-hover:bg-accent/20 group-hover:shadow-[0_0_24px_rgb(0_240_240/0.35)]">
            [ view_product <ArrowRight className="size-3.5" /> ]
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
      className="group relative flex flex-col overflow-hidden border border-border-bright bg-surface transition-colors hover:border-accent"
    >
      {/* Visual */}
      <div className="relative aspect-[4/5] overflow-hidden bg-bg">
        <ProductVisual
          id={product.id}
          className="absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span
            className={cn(
              "mono absolute right-3 top-3 px-2 py-1 text-[10px] uppercase tracking-wider backdrop-blur-sm",
              product.badge === "Popular"
                ? "border border-accent bg-accent/15 text-accent"
                : "border border-accent-2 bg-accent-2/15 text-accent-2",
            )}
          >
            [ {product.badge.toLowerCase()} ]
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="label text-accent">
          <span className="text-accent-2">▸</span> {product.category.toLowerCase()}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <h3 className="display text-xl tracking-tight md:text-2xl">
            {product.name}
          </h3>
        </div>
        <p className="mono mt-2 text-[10px] uppercase tracking-wider text-muted">
          {VARIANTS[product.id] ?? product.category}
        </p>
        <p className="mt-3 text-sm text-muted">{product.tagline}</p>
        <ul className="mono mt-4 space-y-1.5 text-[11px] uppercase tracking-wider text-muted">
          {product.highlights.slice(0, 3).map((h) => (
            <li key={h}>
              <span className="text-accent">▸</span> {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="label text-muted">starting_at</p>
            <p className="display mt-1 text-2xl tracking-tight">
              {product.price.replace("from ", "")}
            </p>
          </div>
          <span className="mono inline-flex items-center gap-1 border border-border-bright bg-fg/5 px-3 py-2 text-[11px] uppercase tracking-wider text-fg transition-all group-hover:border-accent group-hover:text-accent">
            [ view ]
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
            className="mono group inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
          >
            view_all
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-px bg-border-bright md:grid-cols-2 lg:grid-cols-3">
          {featured && <FeaturedCard product={featured} />}
          {rest.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

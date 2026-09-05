import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Shield, Zap, Clock, Lock } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { findProduct, products } from "@/lib/content";
import Image from "next/image";
import { ProductVisual } from "@/components/product-visuals";
import { Footer } from "@/components/sections/Footer";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) notFound();

  return (
    <>
      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-bright bg-surface/95 p-4 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="label text-muted">starting_at</p>
            <p className="display text-2xl tracking-tight">
              {product.price.replace("from ", "")}
            </p>
          </div>
          <Link
            href={`/order/${product.slug}`}
            className="mono inline-flex h-12 items-center gap-2 border border-accent bg-accent/10 px-6 text-xs uppercase tracking-wider text-accent"
          >
            [ buy_now <ArrowRight className="size-3.5" /> ]
          </Link>
        </div>
      </div>

      <main className="flex-1 pb-32 lg:pb-0">
        {/* Hero */}
        <section className="relative border-b border-border bg-bg pb-12 pt-8 md:pb-16 md:pt-12">
          <Container>
            {/* Breadcrumb */}
            <nav className="mono mb-8 flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted">
              <Link href="/" className="hover:text-accent">
                home
              </Link>
              <span className="text-border-bright">/</span>
              <Link href="/#products" className="hover:text-accent">
                products
              </Link>
              <span className="text-border-bright">/</span>
              <span className="text-fg">{product.id}</span>
            </nav>

            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              {/* Visual */}
              <div className="relative aspect-[4/5] overflow-hidden border border-border-bright bg-surface">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <ProductVisual id={product.id} className="absolute inset-0 size-full" />
                )}
                {product.badge && (
                  <span className="mono absolute left-4 top-4 border border-accent bg-accent/15 px-2 py-1 text-[10px] uppercase tracking-wider text-accent backdrop-blur-sm">
                    [ {product.badge.toLowerCase()} ]
                  </span>
                )}
              </div>

              {/* Buy block */}
              <div className="lg:sticky lg:top-24">
                <p className="label text-accent">
                  <span className="text-accent-2">▸</span>{" "}
                  {product.category.toLowerCase()}
                </p>
                <h1 className="display mt-4 text-balance text-4xl tracking-tight md:text-5xl">
                  {product.name}
                </h1>
                <p className="mono mt-3 text-[10px] uppercase tracking-wider text-muted">
                  {product.id} · verified · hand-curated
                </p>
                <p className="mt-6 text-pretty text-lg text-muted">
                  {product.tagline}
                </p>

                {/* Status pills */}
                <div className="mono mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5 border border-accent-2 bg-accent-2/10 px-2 py-1 text-accent-2">
                    <span className="size-1.5 rounded-full bg-accent-2" />
                    in_stock
                  </span>
                  <span className="inline-flex items-center gap-1.5 border border-border-bright bg-fg/5 px-2 py-1 text-fg">
                    <Shield className="size-3" /> verified
                  </span>
                  <span className="inline-flex items-center gap-1.5 border border-border-bright bg-fg/5 px-2 py-1 text-fg">
                    <Zap className="size-3" /> instant_delivery
                  </span>
                  <span className="inline-flex items-center gap-1.5 border border-border-bright bg-fg/5 px-2 py-1 text-fg">
                    <Clock className="size-3" /> 5–60_min
                  </span>
                </div>

                {/* Highlights */}
                <ul className="mono mt-8 space-y-2 text-[11px] uppercase tracking-wider text-muted">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="text-accent">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="mt-10 flex items-end justify-between gap-4 border-t border-border-bright pt-6">
                  <div>
                    <p className="label text-muted">starting_at</p>
                    <p className="display mt-1 text-3xl tracking-tight md:text-4xl">
                      {product.price.replace("from ", "")}
                    </p>
                  </div>
                  <Link
                    href={`/order/${product.slug}`}
                    className="mono inline-flex h-12 items-center gap-2 border border-accent bg-accent/10 px-7 text-xs uppercase tracking-wider text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_24px_rgb(167_139_250/0.4)]"
                  >
                    [ buy_now <ArrowRight className="size-3.5" /> ]
                  </Link>
                </div>

                {/* Alt CTA */}
                <Link
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mono mt-3 inline-flex h-10 items-center gap-2 text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-accent"
                >
                  [ ask_on_discord ]
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Description + Includes */}
        <section className="relative border-b border-border bg-surface py-16 md:py-20">
          <Container>
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <p className="label text-accent">
                  <span className="text-accent-2">▸</span> description
                </p>
                <h2 className="display mt-3 text-3xl tracking-tight md:text-4xl">
                  What&apos;s in the box.
                </h2>
                <div className="mt-6 space-y-4 text-pretty text-muted">
                  {product.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="label text-accent">
                  <span className="text-accent-2">▸</span> includes
                </p>
                <h2 className="display mt-3 text-3xl tracking-tight md:text-4xl">
                  Everything you get.
                </h2>
                <ul className="mono mt-6 divide-y divide-border-bright border border-border-bright">
                  {product.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 px-4 py-3 text-[11px] uppercase tracking-wider"
                    >
                      <span className="text-accent">▸</span>
                      <span className="text-fg">{item}</span>
                    </li>
                  ))}
                </ul>

                {product.variants && (
                  <div className="mt-8">
                    <p className="label text-accent">
                      <span className="text-accent-2">▸</span> variants
                    </p>
                    <ul className="mono mt-3 space-y-2 text-xs">
                      {product.variants.map((v) => (
                        <li
                          key={v.id}
                          className="flex items-center justify-between border border-border-bright bg-bg px-4 py-2.5"
                        >
                          <span className="uppercase tracking-wider text-fg">
                            {v.name}
                          </span>
                          <span className="text-accent">{v.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Trust signals */}
        <section className="relative border-b border-border bg-bg py-12">
          <Container>
            <ul className="mono grid gap-4 text-[11px] uppercase tracking-wider text-muted md:grid-cols-4">
              <li className="flex items-start gap-3 border border-border-bright bg-surface p-5">
                <Shield className="size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-fg">verified</p>
                  <p className="mt-1 normal-case tracking-normal text-muted">
                    Hand-checked before listing
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 border border-border-bright bg-surface p-5">
                <Zap className="size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-fg">instant_delivery</p>
                  <p className="mt-1 normal-case tracking-normal text-muted">
                    5–60 min via Discord
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 border border-border-bright bg-surface p-5">
                <Lock className="size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-fg">no_password</p>
                  <p className="mt-1 normal-case tracking-normal text-muted">
                    We never ask for credentials
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 border border-border-bright bg-surface p-5">
                <Clock className="size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-fg">7-day_guarantee</p>
                  <p className="mt-1 normal-case tracking-normal text-muted">
                    Free replacement or refund
                  </p>
                </div>
              </li>
            </ul>
          </Container>
        </section>

        {/* FAQ */}
        {product.faqs && product.faqs.length > 0 && (
          <section className="relative border-b border-border bg-bg py-16 md:py-20">
            <Container>
              <div className="max-w-3xl">
                <p className="label text-accent">
                  <span className="text-accent-2">▸</span> faq
                </p>
                <h2 className="display mt-3 text-3xl tracking-tight md:text-4xl">
                  Questions about {product.name}.
                </h2>
                <dl className="mono mt-10 divide-y divide-border-bright border-y border-border-bright">
                  {product.faqs.map((f) => (
                    <details
                      key={f.q}
                      className="group py-5 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="faq-summary flex cursor-pointer items-center justify-between gap-4 text-sm uppercase tracking-wider text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                        <span className="flex items-center gap-3">
                          <span className="faq-summary__bullet text-accent">[ ? ]</span>
                          {f.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-xl leading-none text-accent transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 max-w-2xl pl-10 text-pretty text-muted">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </dl>
              </div>
            </Container>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}

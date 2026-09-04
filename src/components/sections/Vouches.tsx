import { Container } from "@/components/ui/Container";
import { vouches } from "@/lib/content";
import { Star } from "@/components/icons";

function formatOrderId(raw: string): string {
  // raw looks like "0x9af1 · 4f31" — already friendly; just trim.
  return raw.replace(/\s+/g, "");
}

function displayOrderId(raw: string): string {
  return raw;
}

export function Vouches() {
  return (
    <section
      id="vouches"
      className="relative border-b border-border bg-surface py-20 md:py-28"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="label text-accent">
              <span className="text-accent-2">▸</span> 05 / vouches
            </p>
            <h2 className="display mt-3 text-balance text-4xl md:text-5xl">
              4,200+ orders.
              <br />
              <span className="text-accent">Most of them come back.</span>
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted">
              Real buyers from our public Discord. Every vouch is verified
              against a completed order ID before it shows up here.
            </p>
          </div>

          <div
            aria-label="Average rating 4.9 out of 5"
            className="mono flex items-center gap-2 text-xs uppercase tracking-wider text-muted"
          >
            <div className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-3.5 text-accent" />
              ))}
            </div>
            <span className="text-fg">4.9</span>
            <span>/ 5 · 612 vouches</span>
          </div>
        </div>

        <div
          role="table"
          aria-label="Verified vouches ledger"
          className="vouch-ledger mt-14"
        >
          <div className="vouch-ledger__head mono" role="row">
            <span role="columnheader">verified vouch</span>
            <span role="columnheader">author</span>
            <span role="columnheader" className="vouch-ledger__col-product">
              product
            </span>
            <span role="columnheader">order id</span>
          </div>

          {vouches.map((v) => (
            <article
              key={v.orderId}
              role="row"
              className="vouch-ledger__row"
            >
              <blockquote role="cell" className="vouch-ledger__quote">
                <p className="text-pretty text-base text-fg/90">
                  &ldquo;{v.body}&rdquo;
                </p>
                <p className="mono mt-3 text-[10px] uppercase tracking-wider text-accent">
                  vouch.verified · {v.meta}
                </p>
              </blockquote>

              <div role="cell" className="vouch-ledger__author">
                <span className="vouch-ledger__avatar" aria-hidden="true">
                  {v.author.replace(/[^a-z0-9]/gi, "").slice(0, 2).toUpperCase()}
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="mono truncate text-sm text-fg">
                    {v.author}
                  </span>
                  <span className="mono truncate text-[10px] uppercase tracking-wider text-muted">
                    {v.handle}
                  </span>
                </span>
              </div>

              <p role="cell" className="vouch-ledger__product mono">
                {v.product}
              </p>

              <p role="cell" className="vouch-ledger__order mono">
                <span className="vouch-ledger__order-id" title={formatOrderId(v.orderId)}>
                  {displayOrderId(v.orderId)}
                </span>
                <span className="vouch-ledger__order-mark mono" aria-hidden="true">
                  verified
                </span>
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

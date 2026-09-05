import { Container } from "@/components/ui/Container";
import { vouches } from "@/lib/content";
import { Star, Check } from "@/components/icons";

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

        <div className="vouch-cards mt-14">
          {vouches.map((v, i) => (
            <figure
              key={v.orderId}
              className="vouch-card"
              aria-posinset={i + 1}
              aria-setsize={vouches.length}
            >
              <div className="vouch-card__mark" aria-hidden="true">
                <Check className="size-3" strokeWidth={3} />
              </div>

              <div className="vouch-card__quote-mark" aria-hidden="true">
                &ldquo;
              </div>

              <blockquote className="vouch-card__quote">
                <p className="text-pretty text-lg leading-relaxed text-fg md:text-xl">
                  {v.body}
                </p>
              </blockquote>

              <figcaption className="vouch-card__foot">
                <div className="vouch-card__author">
                  <span className="vouch-card__avatar" aria-hidden="true">
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

                <div className="vouch-card__meta">
                  <span className="vouch-card__product">{v.product}</span>
                  <span className="vouch-card__verified mono">
                    vouch.verified · {v.meta.replace(/ · verified$/i, "")}
                  </span>
                  <span className="vouch-card__order mono">
                    order · {v.orderId}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

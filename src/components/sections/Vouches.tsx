import { Container } from "@/components/ui/Container";
import { vouches } from "@/lib/content";
import { Star } from "@/components/icons";

export function Vouches() {
  return (
    <section id="vouches" className="relative border-b border-border bg-surface py-20 md:py-28">
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

        <div className="mt-14 grid gap-px bg-border-bright md:grid-cols-3">
          {vouches.map((v) => (
            <article
              key={v.author}
              className="flex flex-col bg-bg p-7"
            >
              <p className="mono text-[10px] uppercase tracking-wider text-accent">
                vouch.verified
              </p>
              <p className="mt-4 text-pretty text-base text-fg/90">
                &ldquo;{v.body}&rdquo;
              </p>
              <footer className="mt-6 flex items-center justify-between border-t border-border-bright pt-4 text-xs">
                <span className="mono uppercase tracking-wider text-fg">
                  {v.author}
                </span>
                <span className="mono text-[10px] uppercase tracking-wider text-muted">
                  {v.meta}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

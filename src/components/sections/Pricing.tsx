import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { tiers } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <section
      id="pricing"
     
      className="relative border-b border-border bg-surface py-20 md:py-28"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="label text-accent">
            <span className="text-accent-2">▸</span> 03 / pricing
          </p>
          <h2 className="display mt-3 text-balance text-4xl md:text-5xl">
            Three tiers.
            <br />
            <span className="text-accent">Pick a level,</span> or build your own.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-lg text-muted">
            Bundle pricing on the most-requested combos. Need something
            different? Open a ticket on Discord.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border-bright md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "glow-cyan relative flex flex-col bg-bg p-7 md:p-8",
                tier.featured &&
                  "bg-surface shadow-[inset_0_0_0_1px_var(--accent)]",
              )}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="display text-xl tracking-tight">
                  {tier.name.toLowerCase()}
                </h3>
                {tier.featured && (
                  <span className="mono text-[10px] uppercase tracking-wider text-accent">
                    [ popular ]
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-muted">{tier.description}</p>

              <p className="display mt-6 text-5xl tracking-tight">
                {tier.price}
                <span className="mono ml-1 text-xs text-muted">/mo</span>
              </p>

              <ul className="mono mt-7 flex-1 space-y-1.5 text-[11px] uppercase tracking-wider text-muted">
                {tier.features.map((f) => (
                  <li key={f}>
                    <span className="text-accent">▸</span> {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.productSlug ? `/order/${tier.productSlug}` : "https://discord.gg/vaulted"}
                className={cn(
                  "mono mt-8 inline-flex h-12 items-center justify-center px-6 text-xs uppercase tracking-wider transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  tier.featured
                    ? "border border-accent bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-[0_0_24px_rgb(0_240_240/0.35)]"
                    : "border border-border-bright bg-fg/5 text-fg hover:border-accent hover:text-accent",
                )}
              >
                [ {tier.cta.toLowerCase()} ]
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { FeaturedCard } from "@/components/sections/FeaturedCard";
import { MeshOverlay } from "@/components/sections/MeshOverlay";
import { HeroFx } from "@/components/sections/HeroFx";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Drives scroll parallax + mouse mesh reactivity (writes CSS vars) */}
      <HeroFx />

      {/* Background layer — parallax sink rate (~60% of scroll) */}
      <div
        aria-hidden="true"
        className="hero-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <MeshOverlay />
      </div>

      <Container className="relative py-12 md:py-20">
        {/* Terminal window chrome — fades & drifts up */}
        <div className="hero-chrome mono mb-10 flex items-center justify-between border border-border-bright bg-surface px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="size-2.5 border border-accent" />
            <span aria-hidden="true" className="size-2.5 border border-muted" />
            <span aria-hidden="true" className="size-2.5 border border-muted" />
          </div>
          <p className="text-[10px] uppercase tracking-wider text-muted">
            vaulted.sys · /usr/local/bin/vaulted — 80×24
          </p>
          <p className="mono hidden text-[10px] uppercase tracking-wider text-accent md:block">
            ● ONLINE
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left column — text content */}
          <div className="hero-text relative">
            <p className="label text-accent">
              <span className="text-accent-2">▸</span> last_updated 14:55 utc ·
              orders.live
            </p>

            <h1 className="display glitch mt-8 text-balance text-5xl md:text-7xl lg:text-8xl">
              Fortnite
              <br />
              <span className="text-accent">supply,</span>
              <br />
              verified<span className="cursor-blink text-accent">_</span>
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-base text-muted md:text-lg">
              V-Bucks top-ups from 1k to 13,500, OG accounts with Renegade
              Raider and Black Knight, rare skin bundles, Battle Pass boosts,
              1-on-1 coaching, and loadout configs — verified by hand,
              delivered to your Discord in minutes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="#products" size="lg">
                [ browse products <ArrowRight className="size-3.5" /> ]
              </Button>
              <Button
                href="https://discord.gg/vaulted"
                external
                variant="bracket"
                size="lg"
              >
                [ open discord ]
              </Button>
            </div>

            {/* Stats — HUD style */}
            <dl className="mono mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-border-bright pt-6">
              {[
                { label: "delivered", value: "4,200+", tag: "ORDERS" },
                { label: "avg. delivery", value: "18 min", tag: "MEDIAN" },
                { label: "rating", value: "4.9★", tag: "612 VOUCHES" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border-l border-border-bright pl-3"
                >
                  <dt className="text-[10px] uppercase tracking-wider text-muted">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                    {s.value}
                  </dd>
                  <p className="text-[9px] uppercase tracking-wider text-accent">
                    {s.tag}
                  </p>
                </div>
              ))}
            </dl>

            <ul className="mono mt-10 space-y-1.5 text-[11px] uppercase tracking-wider text-muted">
              <li>
                <span className="text-accent">▸</span> 7-day replacement guarantee
              </li>
              <li>
                <span className="text-accent">▸</span> No password required
              </li>
            </ul>
          </div>

          {/* Right column — featured product card */}
          <div className="hero-card relative">
            <FeaturedCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

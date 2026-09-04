import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { ProductStage } from "@/components/sections/ProductStage";
import { MeshOverlay } from "@/components/sections/MeshOverlay";
import { HeroFx } from "@/components/sections/HeroFx";
import { StatCounter } from "@/components/sections/StatCounter";

const STATS = [
  { label: "delivered", value: "4,200+", tag: "ORDERS" },
  { label: "avg. delivery", value: "18 min", tag: "MEDIAN" },
  { label: "rating", value: "4.9★", tag: "612 VOUCHES" },
];

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
              Hand-verified Fortnite supply: accounts, V-Bucks, skins, boosts,
              coaching, and configs — delivered to your Discord in minutes.
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

            {/* Stats — HUD style with count-up animation */}
            <StatCounter stats={STATS} />

            <ul className="mono mt-10 space-y-1.5 text-[11px] uppercase tracking-wider text-muted">
              <li>
                <span className="text-accent">▸</span> 7-day replacement guarantee
              </li>
              <li>
                <span className="text-accent">▸</span> No password required
              </li>
            </ul>
          </div>

          {/* Right column — curated product previews */}
          <div className="hero-card relative">
            <ProductStage />
          </div>
        </div>
      </Container>
    </section>
  );
}

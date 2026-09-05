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
            <p className="label text-accent" aria-live="polite">
              <span className="text-accent-2">▸</span> 01 / supply
            </p>

            <h1 className="display glitch mt-8 text-balance text-5xl md:text-7xl lg:text-8xl">
              Fortnite
              <br />
              <span className="text-accent">supply,</span>
              <br />
              verified<span className="cursor-blink text-accent">_</span>
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-base text-muted md:text-lg">
              Hand-verified Fortnite accounts: 50-skin loadouts, V-Bucks-loaded,
              rare pickaxes/gliders, OG items — Discord-direct.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="#products" size="lg">
                [ browse products <ArrowRight className="size-3.5" /> ]
              </Button>
              <Button
                href="https://discord.com"
                external
                variant="bracket"
                size="lg"
              >
                [ open discord ]
              </Button>
            </div>

            {/* Stats — HUD style with count-up animation */}
            <StatCounter stats={STATS} />
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

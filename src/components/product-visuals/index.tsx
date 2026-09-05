import type { SVGProps } from "react";

/**
 * StackedAccountVisual — 5 horizontal "skin bars" mirroring the
 * existing FeaturedCard grid, scaled up and given its own moment.
 */
export function StackedAccountVisual(props: SVGProps<SVGSVGElement>) {
  const bars = [
    { label: "RENG", tint: "oklch(0.62 0.22 270)" },
    { label: "AERL", tint: "oklch(0.7 0.18 210)" },
    { label: "BLK", tint: "oklch(0.35 0.02 270)" },
    { label: "GLOW", tint: "oklch(0.72 0.2 140)" },
    { label: "SPRK", tint: "oklch(0.78 0.15 60)" },
  ];

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stacked Account visual: 5 OG skins"
      {...props}
    >
      <defs>
        <linearGradient id="stacked-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--bg)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--bg)" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Stack of skin bars */}
      <g transform="translate(40 60)">
        {bars.map((b, i) => (
          <g key={b.label} transform={`translate(0 ${i * 60})`}>
            <rect
              x="0"
              y="0"
              width="320"
              height="48"
              fill={b.tint}
              stroke="var(--border-bright)"
              strokeWidth="1"
            />
            <rect
              x="0"
              y="0"
              width="320"
              height="48"
              fill="url(#stacked-sheen)"
              opacity="0.3"
            />
            <text
              x="14"
              y="32"
              fill="white"
              fontFamily="var(--font-commit-mono, monospace)"
              fontSize="13"
              fontWeight="500"
              letterSpacing="0.05em"
              style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.4))" }}
            >
              {b.label}
            </text>
            {i === 0 && (
              <rect
                x="-2"
                y="-2"
                width="324"
                height="52"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
              />
            )}
          </g>
        ))}
      </g>

      {/* Status label */}
      <g transform="translate(40 410)">
        <rect x="0" y="0" width="6" height="6" fill="var(--accent-2)" />
        <text
          x="14"
          y="6"
          fill="var(--accent-2)"
          fontFamily="var(--font-commit-mono, monospace)"
          fontSize="10"
          letterSpacing="0.1em"
        >
          200+ COSMETICS · LOADED
        </text>
      </g>

      <rect width="400" height="500" fill="url(#stacked-fade)" />
    </svg>
  );
}

/**
 * VbucksVisual — vertical coin stack with the 13,500 number prominent.
 */
export function VbucksVisual(props: SVGProps<SVGSVGElement>) {
  const coins = Array.from({ length: 8 }, (_, i) => i);

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="V-Bucks 13,500 visual: stacked coins"
      {...props}
    >
      <defs>
        <linearGradient id="vbucks-coin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.85 0.18 200)" />
          <stop offset="100%" stopColor="oklch(0.55 0.2 220)" />
        </linearGradient>
        <radialGradient id="vbucks-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle cx="200" cy="260" r="180" fill="url(#vbucks-glow)" />

      {/* Coin stack */}
      <g transform="translate(200 100)">
        {coins.map((i) => {
          const offset = i * 22;
          const xJitter = (i % 2) * 4 - 2;
          return (
            <g key={i} transform={`translate(${xJitter} ${offset})`}>
              <ellipse
                cx="0"
                cy="0"
                rx="80"
                ry="18"
                fill="url(#vbucks-coin)"
                stroke="var(--accent)"
                strokeWidth="1"
                opacity={1 - i * 0.05}
              />
              <ellipse
                cx="0"
                cy="-2"
                rx="80"
                ry="18"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </g>
          );
        })}
      </g>

      {/* Big number */}
      <text
        x="200"
        y="430"
        textAnchor="middle"
        fill="var(--accent)"
        fontFamily="var(--font-space-grotesk, sans-serif)"
        fontSize="64"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        13,500
      </text>
      <text
        x="200"
        y="460"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-commit-mono, monospace)"
        fontSize="11"
        letterSpacing="0.2em"
      >
        V-BUCKS · DIRECT TOP-UP
      </text>
    </svg>
  );
}

/**
 * BundleVisual — 3×3 grid of mini-tiles with rarity gradient.
 * One tile (top-left) marked "PICK 1" as the user-curated pick.
 */
export function BundleVisual(props: SVGProps<SVGSVGElement>) {
  const tiles = [
    { tint: "oklch(0.72 0.2 140)", label: "GLOW" },
    { tint: "oklch(0.7 0.18 210)", label: "AERL" },
    { tint: "oklch(0.78 0.15 60)", label: "SPRK" },
    { tint: "oklch(0.62 0.22 270)", label: "RENG" },
    { tint: "oklch(0.35 0.02 270)", label: "BLK" },
    { tint: "oklch(0.65 0.18 30)", label: "DRGN" },
    { tint: "oklch(0.7 0.16 320)", label: "MYST" },
    { tint: "oklch(0.55 0.2 250)", label: "VOID" },
    { tint: "oklch(0.75 0.18 100)", label: "GLD" },
  ];

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Rare Skin Bundle visual: 3x3 skin grid"
      {...props}
    >
      <g transform="translate(60 80)">
        {tiles.map((t, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          return (
            <g key={t.label} transform={`translate(${col * 100} ${row * 100})`}>
              <rect
                x="2"
                y="2"
                width="92"
                height="92"
                fill={t.tint}
                stroke="var(--border-bright)"
                strokeWidth="1"
              />
              {/* Sheen */}
              <rect
                x="2"
                y="2"
                width="92"
                height="92"
                fill="url(#bundle-sheen)"
                opacity="0.3"
              />
              <text
                x="48"
                y="86"
                textAnchor="middle"
                fill="white"
                fontFamily="var(--font-commit-mono, monospace)"
                fontSize="10"
                fontWeight="500"
                letterSpacing="0.05em"
                style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.5))" }}
              >
                {t.label}
              </text>
              {/* Highlight first tile */}
              {i === 0 && (
                <rect
                  x="0"
                  y="0"
                  width="96"
                  height="96"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
              )}
            </g>
          );
        })}
      </g>

      {/* Pick indicator */}
      <g transform="translate(60 410)">
        <rect x="0" y="0" width="6" height="6" fill="var(--accent)" />
        <text
          x="14"
          y="6"
          fill="var(--accent)"
          fontFamily="var(--font-commit-mono, monospace)"
          fontSize="10"
          letterSpacing="0.1em"
        >
          PICK 3 · ROTATING WEEKLY
        </text>
      </g>

      <defs>
        <linearGradient id="bundle-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="black" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * BoostVisual — ascending bar chart from tier 0 → 100.
 */
export function BoostVisual(props: SVGProps<SVGSVGElement>) {
  const tiers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Battle Pass Boost visual: tier 0 to 100"
      {...props}
    >
      {/* Background grid lines */}
      <g stroke="var(--border-bright)" strokeWidth="0.5" opacity="0.4">
        <line x1="40" y1="100" x2="360" y2="100" />
        <line x1="40" y1="180" x2="360" y2="180" />
        <line x1="40" y1="260" x2="360" y2="260" />
        <line x1="40" y1="340" x2="360" y2="340" />
      </g>

      {/* Axis labels */}
      <text
        x="40"
        y="80"
        fill="var(--muted)"
        fontFamily="var(--font-commit-mono, monospace)"
        fontSize="9"
        letterSpacing="0.1em"
      >
        TIER
      </text>

      {/* Bars */}
      <g transform="translate(50 380)">
        {tiers.map((tier) => {
          const height = (tier / 20) * 260;
          const x = (tier - 1) * 15.5;
          const isLast = tier === 20;
          return (
            <rect
              key={tier}
              x={x}
              y={-height}
              width="10"
              height={height}
              fill={isLast ? "var(--accent)" : "var(--border-bright)"}
              stroke={isLast ? "var(--accent)" : "var(--border-bright)"}
              strokeWidth="1"
            />
          );
        })}
      </g>

      {/* 100 marker */}
      <g transform="translate(330 110)">
        <line
          x1="0"
          y1="0"
          x2="20"
          y2="0"
          stroke="var(--accent)"
          strokeWidth="2"
        />
        <text
          x="0"
          y="-8"
          fill="var(--accent)"
          fontFamily="var(--font-space-grotesk, sans-serif)"
          fontSize="22"
          fontWeight="700"
        >
          100
        </text>
      </g>

      {/* Status */}
      <g transform="translate(40 440)">
        <rect x="0" y="0" width="6" height="6" fill="var(--accent-2)" />
        <text
          x="14"
          y="6"
          fill="var(--accent-2)"
          fontFamily="var(--font-commit-mono, monospace)"
          fontSize="10"
          letterSpacing="0.1em"
        >
          BOOST · 48H AVG · VPN-SAFE
        </text>
      </g>
    </svg>
  );
}

/**
 * CoachingVisual — speech bubble + waveform, "live" indicator.
 */
export function CoachingVisual(props: SVGProps<SVGSVGElement>) {
  const waveHeights = [12, 28, 18, 40, 22, 35, 15, 30, 20, 38, 25, 32, 18, 28, 22];

  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="1-on-1 Coaching visual: live session"
      {...props}
    >
      <defs>
        <linearGradient id="coach-frame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.18 0.02 270)" />
          <stop offset="100%" stopColor="oklch(0.08 0.01 270)" />
        </linearGradient>
      </defs>

      {/* Session window */}
      <g transform="translate(40 100)">
        <rect
          x="0"
          y="0"
          width="320"
          height="240"
          fill="url(#coach-frame)"
          stroke="var(--accent)"
          strokeWidth="2"
        />
        {/* Window chrome */}
        <line
          x1="0"
          y1="36"
          x2="320"
          y2="36"
          stroke="var(--border-bright)"
          strokeWidth="1"
        />
        <circle cx="14" cy="18" r="4" fill="var(--accent)" />
        <text
          x="28"
          y="22"
          fill="var(--muted)"
          fontFamily="var(--font-commit-mono, monospace)"
          fontSize="10"
          letterSpacing="0.1em"
        >
          SESSION.LIVE
        </text>
        <text
          x="306"
          y="22"
          textAnchor="end"
          fill="var(--accent)"
          fontFamily="var(--font-commit-mono, monospace)"
          fontSize="10"
          letterSpacing="0.1em"
        >
          60:00
        </text>

        {/* Waveform */}
        <g transform="translate(30 130)">
          {waveHeights.map((h, i) => (
            <rect
              key={i}
              x={i * 18}
              y={-h / 2}
              width="10"
              height={h}
              fill="var(--accent)"
              opacity={0.5 + (i % 3) * 0.2}
            />
          ))}
        </g>

        {/* Avatar placeholder blocks */}
        <g transform="translate(30 180)">
          <rect x="0" y="0" width="60" height="30" fill="var(--border-bright)" />
          <rect x="70" y="0" width="60" height="30" fill="var(--accent)" opacity="0.3" />
          <rect x="140" y="0" width="60" height="30" fill="var(--border-bright)" />
        </g>
      </g>

      {/* Big label */}
      <text
        x="200"
        y="400"
        textAnchor="middle"
        fill="var(--fg)"
        fontFamily="var(--font-space-grotesk, sans-serif)"
        fontSize="48"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        1:1
      </text>
      <text
        x="200"
        y="430"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-commit-mono, monospace)"
        fontSize="11"
        letterSpacing="0.2em"
      >
        LIVE COACHING
      </text>
    </svg>
  );
}

/**
 * ConfigVisual — keymap layout + sensitivity dial.
 */
export function ConfigVisual(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Creative Config visual: keymap and sensitivity"
      {...props}
    >
      {/* Keymap layout */}
      <g transform="translate(60 80)">
        {/* WASD block */}
        <g>
          <rect x="20" y="0" width="40" height="40" fill="var(--surface)" stroke="var(--border-bright)" />
          <text x="40" y="26" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-commit-mono, monospace)" fontSize="14" fontWeight="600">W</text>
          <rect x="0" y="44" width="40" height="40" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
          <text x="20" y="70" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-commit-mono, monospace)" fontSize="14" fontWeight="600">A</text>
          <rect x="44" y="44" width="40" height="40" fill="var(--surface)" stroke="var(--border-bright)" />
          <text x="64" y="70" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-commit-mono, monospace)" fontSize="14" fontWeight="600">S</text>
          <rect x="88" y="44" width="40" height="40" fill="var(--surface)" stroke="var(--border-bright)" />
          <text x="108" y="70" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-commit-mono, monospace)" fontSize="14" fontWeight="600">D</text>
        </g>

        {/* Mouse button */}
        <g transform="translate(160 0)">
          <rect x="0" y="0" width="60" height="84" rx="30" fill="var(--surface)" stroke="var(--border-bright)" strokeWidth="1" />
          <line x1="0" y1="42" x2="60" y2="42" stroke="var(--border-bright)" />
          <text x="30" y="28" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-commit-mono, monospace)" fontSize="9">LMB</text>
          <text x="30" y="62" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-commit-mono, monospace)" fontSize="9">RMB</text>
        </g>
      </g>

      {/* Sensitivity dial */}
      <g transform="translate(200 270)">
        <circle cx="0" cy="0" r="70" fill="none" stroke="var(--border-bright)" strokeWidth="1" />
        <circle cx="0" cy="0" r="70" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="220 220" strokeDashoffset="55" transform="rotate(-90)" />
        <text x="0" y="6" textAnchor="middle" fill="var(--accent)" fontFamily="var(--font-space-grotesk, sans-serif)" fontSize="28" fontWeight="700">7.5</text>
        <text x="0" y="26" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-commit-mono, monospace)" fontSize="9" letterSpacing="0.15em">SENS</text>
      </g>

      {/* Settings list */}
      <g transform="translate(40 380)">
        <text x="0" y="0" fill="var(--muted)" fontFamily="var(--font-commit-mono, monospace)" fontSize="9" letterSpacing="0.1em">EDIT_ON_RELEASE</text>
        <text x="200" y="0" fill="var(--accent)" fontFamily="var(--font-commit-mono, monospace)" fontSize="9" letterSpacing="0.1em">ON</text>
        <text x="0" y="20" fill="var(--muted)" fontFamily="var(--font-commit-mono, monospace)" fontSize="9" letterSpacing="0.1em">PER_WEAPON_SENS</text>
        <text x="200" y="20" fill="var(--accent)" fontFamily="var(--font-commit-mono, monospace)" fontSize="9" letterSpacing="0.1em">TUNED</text>
        <text x="0" y="40" fill="var(--muted)" fontFamily="var(--font-commit-mono, monospace)" fontSize="9" letterSpacing="0.1em">CURVE</text>
        <text x="200" y="40" fill="var(--accent)" fontFamily="var(--font-commit-mono, monospace)" fontSize="9" letterSpacing="0.1em">LINEAR</text>
      </g>
    </svg>
  );
}

const VISUAL_MAP = {
  "stacked-account": StackedAccountVisual,
  "vbucks-13500": VbucksVisual,
  "rare-skin-bundle": BundleVisual,
  "boost-battle-pass": BoostVisual,
  "coaching-1on1": CoachingVisual,
  "creative-config": ConfigVisual,
} as const;

export type ProductVisualId = keyof typeof VISUAL_MAP;

export function ProductVisual({
  id,
  ...props
}: { id: string } & SVGProps<SVGSVGElement>) {
  const Component =
    VISUAL_MAP[id as ProductVisualId] ?? StackedAccountVisual;
  return <Component {...props} />;
}

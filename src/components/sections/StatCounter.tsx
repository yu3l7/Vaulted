"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: string;
  tag: string;
};

const DURATION = 1200;
const SUFFIX_FADE_START = 0.85;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function parseValue(value: string): {
  numeric: number;
  suffix: string;
  decimals: number;
  useGrouping: boolean;
} {
  const match = value.match(/^([\d,]+)(\.\d+)?(.*)$/);
  if (!match) {
    return { numeric: 0, suffix: value, decimals: 0, useGrouping: false };
  }
  const intPart = match[1].replace(/,/g, "");
  const decPart = match[2] || "";
  const numeric = parseFloat(intPart + decPart);
  const decimals = decPart ? decPart.length - 1 : 0;
  const useGrouping = match[1].includes(",");
  return {
    numeric,
    suffix: match[3] || "",
    decimals,
    useGrouping,
  };
}

function formatValue(
  value: number,
  decimals: number,
  useGrouping: boolean,
): string {
  if (useGrouping) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }
  if (decimals === 0) return Math.round(value).toString();
  return value.toFixed(decimals);
}

function StatCell({
  stat,
  delay,
  runToken,
}: {
  stat: Stat;
  delay: number;
  runToken: number;
}) {
  const parsed = parseValue(stat.value);
  const [display, setDisplay] = useState(() =>
    formatValue(0, parsed.decimals, parsed.useGrouping),
  );
  const [suffixOpacity, setSuffixOpacity] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (runToken === 0) return; // wait for IntersectionObserver to fire
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      /* eslint-disable react-hooks/set-state-in-effect */
      setDisplay(
        formatValue(parsed.numeric, parsed.decimals, parsed.useGrouping),
      );
      setSuffixOpacity(1);
      return;
      /* eslint-enable react-hooks/set-state-in-effect */
    }

    let raf = 0;
    const startAt = performance.now() + delay;
    const tick = (now: number) => {
      if (now < startAt) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startAt;
      const t = Math.min(elapsed / DURATION, 1);
      const eased = easeOutExpo(t);
      setDisplay(
        formatValue(
          parsed.numeric * eased,
          parsed.decimals,
          parsed.useGrouping,
        ),
      );
      const suffixT = Math.max(
        0,
        (t - SUFFIX_FADE_START) / (1 - SUFFIX_FADE_START),
      );
      setSuffixOpacity(suffixT);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // parsed is recomputed from stable props each render; intentional dep list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runToken, delay]);

  return (
    <div className="border-l border-border-bright pl-3">
      <dt className="text-[10px] uppercase tracking-wider text-muted">
        {stat.label}
      </dt>
      <dd
        className="mt-1 text-2xl font-semibold tracking-tight text-fg md:text-3xl"
        style={{ fontFamily: "var(--font-stats)" }}
      >
        <span aria-live="polite" aria-atomic="true">
          {display}
        </span>
        {parsed.suffix && (
          <span style={{ opacity: suffixOpacity }} aria-hidden="true">
            {parsed.suffix}
          </span>
        )}
      </dd>
      <p className="text-[9px] uppercase tracking-wider text-accent">
        {stat.tag}
      </p>
    </div>
  );
}

export function StatCounter({ stats }: { stats: Stat[] }) {
  const containerRef = useRef<HTMLDListElement>(null);
  const [runToken, setRunToken] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    let prevIntersecting = false;
    const obs = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        // Trigger only on enter (not on exit); re-enters re-trigger
        if (isIntersecting && !prevIntersecting) {
          setRunToken((n) => n + 1);
        }
        prevIntersecting = isIntersecting;
      },
      { threshold: 0.3 },
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <dl
      ref={containerRef}
      className="mono mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-border-bright pt-6"
    >
      {stats.map((s, i) => (
        <StatCell key={s.label} stat={s} delay={i * 80} runToken={runToken} />
      ))}
    </dl>
  );
}

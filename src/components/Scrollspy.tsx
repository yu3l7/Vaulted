"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const SECTIONS = [
  { id: "top", num: "01", label: "hero" },
  { id: "products", num: "02", label: "products" },
  { id: "pricing", num: "03", label: "pricing" },
  { id: "process", num: "04", label: "process" },
  { id: "vouches", num: "05", label: "vouches" },
  { id: "faq", num: "06", label: "faq" },
  { id: "contact", num: "07", label: "contact" },
];

/**
 * Scrollspy — fixed right-side section nav.
 *
 * - Pure scroll listener (cheap on a single page). Active section = the
 *   last section whose top edge has crossed 30% of viewport height.
 * - On active-change: briefly applies `.scrollspy-glitch-flash` to the
 *   newly active row (450ms RGB-shift + jitter), then auto-removes.
 * - Hidden on mobile (< lg). Clicking jumps via the section's id anchor.
 */
export function Scrollspy() {
  const [active, setActive] = useState<string>("top");
  const [flashingId, setFlashingId] = useState<string | null>(null);
  const prevActive = useRef(active);

  // Scroll → active section
  useEffect(() => {
    const compute = () => {
      const threshold = window.innerHeight * 0.3;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold) {
          current = s.id;
        }
      }
      setActive(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Active change → glitch flash on the newly active item
  useEffect(() => {
    if (prevActive.current === active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      prevActive.current = active;
      return;
    }
    setFlashingId(active);
    prevActive.current = active;
    const t = window.setTimeout(() => setFlashingId(null), 500);
    return () => window.clearTimeout(t);
  }, [active]);

  return (
    <nav
      aria-label="Section navigation"
      className="mono fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1.5 lg:flex"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        const isFlashing = flashingId === s.id && isActive;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "group flex items-center justify-end gap-3 py-1.5 text-[10px] uppercase tracking-wider transition-colors",
              isActive ? "text-accent" : "text-muted hover:text-fg",
              isFlashing && "scrollspy-glitch-flash",
            )}
          >
            <span
              className={cn(
                "text-right transition-opacity",
                isActive
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100",
              )}
            >
              [{s.num}] {s.label}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "h-px transition-all",
                isActive
                  ? "w-10 bg-accent shadow-[0_0_8px_rgb(0_240_240/0.6)]"
                  : "w-4 bg-border-bright group-hover:w-7 group-hover:bg-fg",
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}

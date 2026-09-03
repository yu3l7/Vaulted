"use client";

import { useEffect } from "react";

/**
 * HeroFx — drives both:
 *   1. Parallax scroll: writes `--hero-scroll` (0 → 1) on the hero
 *      section as the user scrolls through it. CSS uses it to recede
 *      the background mesh and fade out foreground content.
 *   2. Mouse-reactive mesh: listens for mousemove on the section and
 *      writes `--mx` / `--my` (-50px → +50px) on the inner `.mesh-wrapper`,
 *      which the existing MeshOverlay translates by.
 *
 * Single component, single set of rAF-throttled listeners, no
 * React re-renders — pure DOM/CSS variable writes.
 *
 * Touch / hover-none devices: only the parallax layer applies (mouse
 * reactivity is skipped because there's no cursor).
 *
 * Respects prefers-reduced-motion: skips both layers.
 */
export function HeroFx({ targetId = "top" }: { targetId?: string }) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hoverNone = window.matchMedia("(hover: none)").matches;

    const wrapper = el.querySelector(".mesh-wrapper") as HTMLElement | null;

    let scrollRaf = 0;
    let mouseRaf = 0;
    let lastMouse: MouseEvent | null = null;

    const updateScroll = () => {
      scrollRaf = 0;
      const rect = el.getBoundingClientRect();
      const h = el.offsetHeight || rect.height || 1;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / h);
      el.style.setProperty("--hero-scroll", progress.toFixed(4));
    };

    const updateMouse = () => {
      mouseRaf = 0;
      if (!wrapper || !lastMouse) return;
      const rect = wrapper.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = ((lastMouse.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((lastMouse.clientY - rect.top) / rect.height) * 2 - 1;
      wrapper.style.setProperty("--mx", `${x * 50}px`);
      wrapper.style.setProperty("--my", `${y * 50}px`);
    };

    const onScroll = () => {
      if (!scrollRaf) scrollRaf = requestAnimationFrame(updateScroll);
    };

    const onMouseMove = (e: MouseEvent) => {
      lastMouse = e;
      if (!mouseRaf) mouseRaf = requestAnimationFrame(updateMouse);
    };

    const onMouseLeave = () => {
      lastMouse = null;
      if (wrapper) {
        wrapper.style.setProperty("--mx", "0px");
        wrapper.style.setProperty("--my", "0px");
      }
    };

    updateScroll();

    if (!reducedMotion) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);

      // Listen on the section (not the wrapper) so cursor over content
      // also triggers reactivity — events bubble up to the section.
      if (!hoverNone) {
        el.addEventListener("mousemove", onMouseMove);
        el.addEventListener("mouseleave", onMouseLeave);
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      if (mouseRaf) cancelAnimationFrame(mouseRaf);
    };
  }, [targetId]);

  return null;
}

"use client";

import { useEffect } from "react";

/**
 * ProcessRail — measures the first and last node in the trace and
 * writes --rail-top / --rail-bottom on the parent .process-trace so
 * the ::after rail line spans exactly between the two node centers.
 *
 * Re-measures on resize. No re-renders. Server-rendered markup is
 * identical to before — this only sets two CSS variables.
 */
export function ProcessRail({ targetId = "process" }: { targetId?: string }) {
  useEffect(() => {
    const section = document.getElementById(targetId);
    if (!section) return;
    const trace = section.querySelector(".process-trace");
    if (!trace) return;
    const nodes = trace.querySelectorAll<HTMLElement>("[data-node='true']");
    if (nodes.length === 0) return;

    const update = () => {
      const traceRect = (trace as HTMLElement).getBoundingClientRect();
      const first = (nodes[0] as HTMLElement).getBoundingClientRect();
      const last = (nodes[nodes.length - 1] as HTMLElement).getBoundingClientRect();
      const firstCenter = first.top - traceRect.top + first.height / 2;
      const lastCenter = last.top - traceRect.top + last.height / 2;
      (trace as HTMLElement).style.setProperty("--rail-top", `${firstCenter}px`);
      (trace as HTMLElement).style.setProperty("--rail-bottom", `${traceRect.height - lastCenter}px`);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(trace);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [targetId]);

  return null;
}

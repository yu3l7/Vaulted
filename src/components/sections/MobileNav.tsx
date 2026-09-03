"use client";

import { useEffect, useState } from "react";
import { Close, Menu } from "@/components/icons";
import { cn } from "@/lib/cn";

type Link = { href: string; label: string };

export function MobileNav({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(true)}
        className="mono inline-flex h-10 items-center justify-center border border-border-bright px-3 text-[11px] uppercase tracking-wider text-fg hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
      >
        <Menu className="size-4" />
      </button>

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-30 bg-bg/95 backdrop-blur transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-border px-6">
          <span className="mono text-sm font-medium uppercase tracking-wider">
            <span className="text-accent">[</span>VAULTED.SYS<span className="text-accent">]</span>
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center text-fg hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Close className="size-5" />
          </button>
        </div>

        <nav
          aria-label="Mobile primary"
          className="flex flex-col gap-2 px-6 py-8"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display block border-l-2 border-transparent py-3 text-3xl tracking-tight text-fg hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://discord.gg/vaulted"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mono mt-6 inline-flex h-12 items-center justify-center border border-accent bg-accent/10 px-6 text-xs uppercase tracking-wider text-accent"
          >
            [DISCORD]
          </a>
        </nav>
      </div>
    </>
  );
}

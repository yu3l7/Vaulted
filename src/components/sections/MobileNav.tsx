"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
      <MobileNavTrigger open={open} onToggle={() => setOpen((v) => !v)} />
      <MobileNavDrawer
        open={open}
        onClose={() => setOpen(false)}
        links={links}
      />
    </>
  );
}

function MobileNavTrigger({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-nav"
      onClick={onToggle}
      className="mono inline-flex h-10 items-center justify-center gap-2 border border-border-bright px-3 text-[11px] uppercase tracking-wider text-fg hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
    >
      <Menu className={cn("size-4 transition-opacity", open && "opacity-0")} />
      <Close
        className={cn(
          "size-4 -ml-6 transition-opacity",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />
    </button>
  );
}

function MobileNavDrawer({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: Link[];
}) {
  const [portalNode] = useState<HTMLElement | null>(() =>
    typeof document === "undefined" ? null : document.body,
  );

  const drawer = (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      className={cn(
        "mobile-nav fixed inset-0 md:hidden",
        open ? "mobile-nav--open" : "mobile-nav--closed",
      )}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={cn(
          "mobile-nav__scrim absolute inset-0 h-full w-full cursor-default border-0 bg-transparent p-0",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        )}
      />

      <aside className="mobile-nav__panel" aria-label="Mobile primary">
        <div className="mobile-nav__header">
          <span className="mono text-sm font-medium uppercase tracking-wider">
            <span className="text-accent">[</span>VAULTED.SYS<span className="text-accent">]</span>
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center text-fg hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Close className="size-5" />
          </button>
        </div>

        <nav className="mobile-nav__body" aria-label="Mobile primary">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              style={{ "--stagger-index": index } as React.CSSProperties}
              className="mobile-nav__link display block py-3 text-3xl tracking-tight text-fg hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="mobile-nav__link-bullet" aria-hidden="true">▸</span>
              <span className="mobile-nav__link-label">{link.label}</span>
              <span className="mobile-nav__link-tail" aria-hidden="true">
                0{index + 1}
              </span>
            </a>
          ))}
          <a
            href="https://discord.gg/vaulted"
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            style={{ "--stagger-index": links.length } as React.CSSProperties}
            className="mobile-nav__cta mono inline-flex h-12 items-center justify-center border border-accent bg-accent/10 px-6 text-xs uppercase tracking-wider text-accent"
          >
            [DISCORD]
          </a>
        </nav>
      </aside>
    </div>
  );

  if (!portalNode) return null;
  return createPortal(drawer, portalNode);
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";

const CONTACT_LINKS = [
  {
    href: "https://discord.com",
    label: "discord ↗",
    external: true,
  },
  {
    href: "https://gmail.com",
    label: "email",
    external: false,
  },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border-bright bg-bg">
      <Container className="relative">
        <div className="footer-zones grid grid-cols-1 items-center divide-y divide-dashed divide-border-bright py-6 md:grid-cols-[auto_1fr_auto] md:divide-x md:divide-y-0 md:gap-x-12">
          {/* Zone 1 — brand mark */}
          <div className="flex items-center justify-start py-5 md:py-0">
            <span className="font-display text-[22px] font-semibold leading-none tracking-[-0.04em] lowercase text-fg">
              <span className="text-accent">[</span>vaulted.sys
              <span className="text-accent">]</span>
            </span>
          </div>

          {/* Zone 2 — copyright */}
          <div className="flex items-center justify-start py-5 md:justify-center md:py-0">
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Copyright 2026 ©{" "}
              <span className="font-medium text-fg">Vaulted.sys</span>
            </p>
          </div>

          {/* Zone 3 — contact links */}
          <nav
            aria-label="Contact"
            className="flex flex-wrap items-center gap-x-7 gap-y-3 py-5 md:justify-end md:py-0"
          >
            {CONTACT_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className="footer-link mono border-b border-transparent pb-0.5 text-[11px] uppercase tracking-[0.16em] text-accent transition-colors duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                [ {l.label} ]
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

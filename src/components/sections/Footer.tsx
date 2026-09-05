import Link from "next/link";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "/#products", label: "products" },
  { href: "/#pricing", label: "pricing" },
  { href: "/#process", label: "process" },
  { href: "/#vouches", label: "vouches" },
  { href: "/#faq", label: "faq" },
  { href: "/#contact", label: "contact" },
];

const SOCIAL_LINKS = [
  { href: "https://discord.gg/vaulted", label: "discord", external: true },
  { href: "mailto:hello@vaulted.example.com", label: "email", external: false },
];

export function Footer() {
  const buildHash = "c7a2f1"; // placeholder short git hash
  return (
    <footer className="relative border-t border-border-bright bg-bg py-10">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {/* Col 1 — brand */}
        <div className="flex flex-col gap-2">
          <span className="mono text-xs uppercase tracking-wider">
            <span className="text-accent">[</span>VAULTED.SYS
            <span className="text-accent">]</span>
          </span>
          <span className="mono text-[10px] uppercase tracking-wider text-muted">
            est.2026 · curates fn supply
          </span>
          <span className="mono mt-3 text-[10px] uppercase tracking-wider text-muted">
            build · [{buildHash}]
          </span>
        </div>

        {/* Col 2 — sitemap */}
        <nav aria-label="Sitemap" className="flex flex-col gap-1.5">
          <span className="mono text-[10px] uppercase tracking-wider text-muted">
            · sitemap
          </span>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-accent"
            >
              [ {l.label} ]
            </Link>
          ))}
        </nav>

        {/* Col 3 — social / legal */}
        <div className="flex flex-col gap-1.5 md:items-end md:text-right">
          <span className="mono text-[10px] uppercase tracking-wider text-muted">
            · contact
          </span>
          {SOCIAL_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-accent"
            >
              [ {l.label} ]
            </Link>
          ))}
          <span className="mono mt-3 text-[10px] uppercase tracking-wider text-muted">
            disclaimed · not_affiliated · epic_games
          </span>
        </div>
      </Container>
    </footer>
  );
}

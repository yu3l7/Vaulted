import Link from "next/link";
import { Container } from "@/components/ui/Container";

const INLINE_LINKS = [
  { href: "https://discord.gg/vaulted", label: "discord", external: true },
  { href: "mailto:hello@vaulted.example.com", label: "email", external: false },
  { href: "/#faq", label: "faq", external: false },
  { href: "/sitemap.xml", label: "sitemap", external: false },
];

const BUILD_HASH = "c7a2f1";

export function Footer() {
  return (
    <footer className="relative border-t border-border-bright bg-bg py-6">
      <Container>
        <div className="footer-strip mono flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-wider text-muted">
          <span className="text-fg">
            <span className="text-accent">[</span>VAULTED.SYS
            <span className="text-accent">]</span>
          </span>

          <span aria-hidden="true" className="text-border-bright">·</span>

          {INLINE_LINKS.map((l, i) => (
            <span key={l.href} className="inline-flex items-center gap-2">
              <Link
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className="text-fg transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
              {i < INLINE_LINKS.length - 1 && (
                <span aria-hidden="true" className="text-border-bright">·</span>
              )}
            </span>
          ))}

          <span aria-hidden="true" className="text-border-bright">·</span>

          <span>
            build <span className="text-accent-2">[{BUILD_HASH}]</span>
          </span>

          <span aria-hidden="true" className="text-border-bright">·</span>

          <span>not_affiliated · epic_games</span>
        </div>
      </Container>
    </footer>
  );
}

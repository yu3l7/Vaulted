import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative border-t border-border-bright bg-bg py-10">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="mono text-xs uppercase tracking-wider">
            <span className="text-accent">[</span>VAULTED.SYS
            <span className="text-accent">]</span>
          </span>
          <span className="mono text-[10px] uppercase tracking-wider text-muted">
            · est.2026
          </span>
        </div>

        <nav
          aria-label="Footer"
          className="mono flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider text-muted"
        >
          <a
            href="https://discord.gg/vaulted"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            discord
          </a>
          <a href="mailto:hello@vaulted.example.com" className="hover:text-accent">
            hello@vaulted.example.com
          </a>
          <a href="#faq" className="hover:text-accent">
            faq
          </a>
          <span className="text-muted">·</span>
          <span className="text-muted">build 2026.09</span>
        </nav>

        <p className="mono text-[10px] uppercase tracking-wider text-muted">
          not affiliated with epic games
        </p>
      </Container>
    </footer>
  );
}

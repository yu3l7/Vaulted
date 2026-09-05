import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/sections/MobileNav";

const links = [
  { href: "#products", label: "PRODUCTS" },
  { href: "#pricing", label: "PRICING" },
  { href: "#process", label: "PROCESS" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#top"
          className="font-display text-sm font-medium uppercase tracking-wider text-fg hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span className="text-accent">[</span>
          VAULTED<span className="text-accent">.</span>SYS
          <span className="text-accent">]</span>
        </a>

        <nav
          aria-label="Primary"
          className="mono hidden items-center gap-7 text-[11px] uppercase tracking-wider md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="https://discord.com"
            external
            variant="bracket"
            size="sm"
            className="hidden md:inline-flex"
          >
            [DISCORD]
          </Button>
          <MobileNav links={links} />
        </div>
      </Container>
    </header>
  );
}

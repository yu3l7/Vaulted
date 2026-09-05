import { Container } from "@/components/ui/Container";

export function Contact() {
  return (
    <section id="contact" className="relative bg-bg py-20 md:py-28">
      <div aria-hidden="true" className="ascii-grid absolute inset-0 opacity-50" />

      <Container className="relative">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <h2 className="display max-w-xl text-balance text-4xl md:text-5xl">
            Reach the{" "}
            <span className="text-accent">vault.</span>
          </h2>

          <p className="mono text-sm leading-relaxed text-muted md:max-w-sm md:text-right">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              discord_direct
            </a>
            <span className="mx-2 text-border-bright">·</span>
            <a
              href="https://gmail.com"
              className="text-accent underline-offset-4 hover:underline"
            >
              email
            </a>
            <span className="mx-2 text-border-bright">·</span>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              tickets
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { ArrowRight, Chat, Clock, Shield } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="relative bg-bg py-20 md:py-28">
      <div aria-hidden="true" className="ascii-grid absolute inset-0 opacity-50" />

      <Container className="relative max-w-4xl">
        <div className="border border-border-bright bg-surface">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-border-bright bg-bg px-5 py-2.5">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent pulse-cyan"
              />
              <span className="mono text-[10px] uppercase tracking-wider text-muted">
                contact.terminal
              </span>
            </div>
            <span className="mono text-[10px] uppercase tracking-wider text-accent">
              ● online
            </span>
          </div>

          <div className="p-8 md:p-14">
            <p className="label text-accent">
              <span className="text-accent-2">▸</span> 07 / contact
            </p>
            <h2 className="display mt-3 text-balance text-4xl md:text-5xl">
              Open a ticket.
              <br />
              <span className="text-accent">Get your goods.</span>
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted">
              Discord is the fastest way to reach us. Tickets usually get a
              reply in under five minutes during business hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://discord.gg/vaulted"
                target="_blank"
                rel="noreferrer"
                className="mono inline-flex h-12 items-center justify-center border border-accent bg-accent/10 px-7 text-xs uppercase tracking-wider text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_24px_rgb(0_240_240/0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                [ open discord <ArrowRight className="size-3.5" /> ]
              </a>
              <a
                href="mailto:hello@vaulted.example.com"
                className="mono inline-flex h-12 items-center justify-center border border-border-bright bg-fg/5 px-7 text-xs uppercase tracking-wider text-fg transition-all hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                [ email instead ]
              </a>
            </div>

            <dl className="mono mt-12 grid gap-6 border-t border-border-bright pt-10 text-xs uppercase tracking-wider sm:grid-cols-3">
              {[
                {
                  Icon: Chat,
                  title: "discord_support",
                  body: "< 5 min during business hours",
                },
                {
                  Icon: Clock,
                  title: "hours",
                  body: "09:00–22:00 utc · 7 days/week",
                },
                {
                  Icon: Shield,
                  title: "guarantee",
                  body: "7-day replacement on digital goods",
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-fg">{title}</dt>
                    <dd className="mt-1 text-muted normal-case">{body}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className="mono mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted">
              <span className="text-accent-2">▸</span> refunds & replacements
              processed same-day.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

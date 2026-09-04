import { Container } from "@/components/ui/Container";
import { ArrowRight, Bolt, Chat, Lock, Shield } from "@/components/icons";

type Channel = {
  id: string;
  label: string;
  description: string;
  latency: string;
  status: "online" | "fast" | "monitored";
  cta: { label: string; href: string; external?: boolean };
  Icon: typeof Chat;
};

const CHANNELS: Channel[] = [
  {
    id: "discord",
    label: "discord_direct",
    description: "live chat · our team replies in < 5 min during business hours",
    latency: "~2m median",
    status: "online",
    cta: { label: "[ open_discord ↗ ]", href: "https://discord.gg/vaulted", external: true },
    Icon: Chat,
  },
  {
    id: "tickets",
    label: "ticket_system",
    description: "structured orders · auto-assigned to the operator on shift",
    latency: "~5m median",
    status: "fast",
    cta: { label: "[ start_ticket ↗ ]", href: "https://discord.gg/vaulted", external: true },
    Icon: Bolt,
  },
  {
    id: "email",
    label: "email",
    description: "for invoices, bulk orders, B2B inquiries, press",
    latency: "~3h median",
    status: "monitored",
    cta: { label: "[ email_us ↗ ]", href: "mailto:hello@vaulted.example.com" },
    Icon: Lock,
  },
  {
    id: "guarantee",
    label: "guarantee",
    description: "7-day replacement on digital goods, no questions asked",
    latency: "same-day",
    status: "online",
    cta: { label: "[ read_terms ↗ ]", href: "/#faq" },
    Icon: Shield,
  },
];

const STATUS_DOT: Record<Channel["status"], string> = {
  online: "bg-accent",
  fast: "bg-accent-2",
  monitored: "bg-muted",
};

const STATUS_LABEL: Record<Channel["status"], string> = {
  online: "online",
  fast: "fast",
  monitored: "monitored",
};

export function Contact() {
  return (
    <section id="contact" className="relative bg-bg py-20 md:py-28">
      <div aria-hidden="true" className="ascii-grid absolute inset-0 opacity-50" />

      <Container className="relative">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="label text-accent">
            <span className="text-accent-2">▸</span> 07 / contact
          </p>
          <h2 className="display mt-3 text-balance text-4xl md:text-5xl">
            Four ways to{" "}
            <span className="text-accent">reach the vault.</span>
          </h2>
        </div>

        {/* Split: prompt left, channels right */}
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          {/* Left: prompt + headline + primary CTA */}
          <aside className="border border-border-bright bg-surface">
            <div className="flex items-center justify-between border-b border-border-bright bg-bg px-5 py-2.5">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent pulse-cyan" />
                <span className="mono text-[10px] uppercase tracking-wider text-muted">
                  contact.terminal
                </span>
              </div>
              <span className="mono text-[10px] uppercase tracking-wider text-accent">
                ● ready
              </span>
            </div>

            <div className="p-8 md:p-10">
              <p className="mono text-xs uppercase tracking-wider text-accent-2">
                ▸ awaiting_input
              </p>
              <p className="mt-3 max-w-md text-pretty text-lg text-muted">
                Pick the channel that fits how you want to talk. We&apos;re
                <span className="text-fg"> online</span>,
                <span className="text-fg"> fast</span>, and
                <span className="text-fg"> verified</span> across every one of
                them.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://discord.gg/vaulted"
                  target="_blank"
                  rel="noreferrer"
                  className="mono inline-flex h-12 items-center justify-center gap-2 border border-accent bg-accent/10 px-7 text-xs uppercase tracking-wider text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_24px_rgb(0_240_240/0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  [ open_discord <ArrowRight className="size-3.5" /> ]
                </a>
              </div>

              <p className="mono mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted">
                <span className="text-accent-2">▸</span> hours ·{" "}
                <span className="text-fg">09:00–22:00 utc</span> · 7 days/week
              </p>
            </div>
          </aside>

          {/* Right: channel config rows */}
          <div className="border border-border-bright bg-bg">
            <div className="flex items-center justify-between border-b border-border-bright px-5 py-2.5">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                <span className="mono text-[10px] uppercase tracking-wider text-muted">
                  channels.json
                </span>
              </div>
              <span className="mono text-[10px] uppercase tracking-wider text-muted">
                {CHANNELS.length} channels · live
              </span>
            </div>

            <ul className="divide-y divide-border-bright">
              {CHANNELS.map((channel, index) => {
                const rowNumber = String(index + 1).padStart(2, "0");
                return (
                  <li
                    key={channel.id}
                    className="group transition-colors hover:bg-surface"
                  >
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-5 py-4 md:grid-cols-[60px_auto_1fr_auto] md:gap-5 md:px-7 md:py-5">
                      {/* Row index */}
                      <span className="mono hidden text-[10px] uppercase tracking-wider text-muted md:block">
                        [{rowNumber}]
                      </span>

                      {/* Icon + label */}
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center border border-accent/40 bg-bg text-accent transition-colors group-hover:border-accent">
                          <channel.Icon className="size-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="mono text-xs uppercase tracking-wider text-fg">
                            {channel.label}
                          </p>
                          <p className="mt-0.5 text-[11px] normal-case text-muted md:hidden">
                            {channel.latency}
                          </p>
                        </div>
                      </div>

                      {/* Description + latency */}
                      <div className="col-span-2 min-w-0 md:col-span-1">
                        <p className="hidden text-[13px] normal-case text-muted md:block">
                          {channel.description}
                        </p>
                      </div>

                      {/* Status + CTA */}
                      <div className="col-span-3 flex items-center justify-between gap-3 md:col-span-1 md:justify-end">
                        <span className="mono hidden items-center gap-2 text-[10px] uppercase tracking-wider text-muted md:inline-flex">
                          <span
                            aria-hidden="true"
                            className={`size-1.5 rounded-full ${STATUS_DOT[channel.status]} ${
                              channel.status === "online" ? "pulse-cyan" : ""
                            }`}
                          />
                          {STATUS_LABEL[channel.status]} ·{" "}
                          <span className="text-fg">{channel.latency}</span>
                        </span>
                        <a
                          href={channel.cta.href}
                          target={channel.cta.external ? "_blank" : undefined}
                          rel={channel.cta.external ? "noreferrer" : undefined}
                          className="mono inline-flex h-9 items-center justify-center border border-border-bright bg-fg/5 px-3 text-[10px] uppercase tracking-wider text-fg transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:h-10 md:px-4"
                        >
                          {channel.cta.label}
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

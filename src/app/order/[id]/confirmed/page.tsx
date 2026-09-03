import Link from "next/link";
import { Check } from "@/components/icons";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ id: string }> };

export default async function ConfirmedPage({ params }: Props) {
  const { id } = await params;
  // `id` here is the generated order ID (e.g. VLT-A8K2P)
  return (
    <main className="flex flex-1 items-center justify-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mono mx-auto inline-flex size-16 items-center justify-center border-2 border-accent bg-accent/10 text-accent">
            <Check className="size-8" strokeWidth={3} />
          </div>
          <p className="label mt-8 text-accent">
            <span className="text-accent-2">▸</span> /order/{id}/confirmed
          </p>
          <h1 className="display mt-4 text-balance text-4xl tracking-tight md:text-5xl">
            Ticket created.
          </h1>
          <p className="mt-3 mono text-sm uppercase tracking-wider text-accent">
            {id}
          </p>
          <p className="mt-6 text-pretty text-lg text-muted">
            We&apos;ll send a Discord DM within 5 minutes to confirm payment
            details and schedule delivery. Check your email for a copy of this
            confirmation.
          </p>

          {/* What happens next */}
          <div className="mt-12 border border-border-bright bg-surface p-8 text-left">
            <p className="label text-accent">
              <span className="text-accent-2">▸</span> what_happens_next
            </p>
            <ol className="mono mt-4 space-y-3 text-sm text-fg">
              <li className="flex gap-3">
                <span className="text-accent">[ 01 ]</span>
                <span>
                  Open your Discord DMs — our team will reach out with payment
                  instructions based on the method you selected.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">[ 02 ]</span>
                <span>
                  Confirm payment + delivery details in the private ticket.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">[ 03 ]</span>
                <span>
                  Goods land in 5–60 minutes for digital items, scheduled for
                  coaching and boosting.
                </span>
              </li>
            </ol>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="https://discord.gg/vaulted"
              target="_blank"
              rel="noreferrer"
              className="mono inline-flex h-12 items-center border border-accent bg-accent/10 px-7 text-xs uppercase tracking-wider text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_24px_rgb(0_240_240/0.35)]"
            >
              [ open_discord ↗ ]
            </Link>
            <Link
              href="/#products"
              className="mono inline-flex h-12 items-center border border-border-bright bg-fg/5 px-7 text-xs uppercase tracking-wider text-fg transition-colors hover:border-accent hover:text-accent"
            >
              [ back_to_products ]
            </Link>
          </div>

          <p className="mono mt-12 text-[10px] uppercase tracking-wider text-muted">
            order_id: {id} · expires in 30:00 · saved to email
          </p>
        </div>
      </Container>
    </main>
  );
}

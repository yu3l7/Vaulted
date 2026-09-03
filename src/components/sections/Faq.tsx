import { Container } from "@/components/ui/Container";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="relative border-b border-border bg-bg py-20 md:py-28">
      <Container className="max-w-3xl">
        <p className="label text-accent">
          <span className="text-accent-2">▸</span> 06 / faq
        </p>
        <h2 className="display mt-3 text-balance text-4xl md:text-5xl">
          Things people ask
          <br />
          <span className="text-accent">before they buy.</span>
        </h2>

        <div className="mt-12 divide-y divide-border-bright border-y border-border-bright">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="mono flex cursor-pointer items-center justify-between gap-4 text-sm uppercase tracking-wider text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                <span className="flex items-center gap-3">
                  <span className="text-accent">[{String(i + 1).padStart(2, "0")}]</span>
                  {f.q}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl leading-none text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl pl-10 text-pretty text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

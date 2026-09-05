import { Container } from "@/components/ui/Container";
import { steps } from "@/lib/content";

const TRACE_PROMPTS = ["awaiting_input", "tx_confirmed", "live_drop"] as const;

export function Process() {
  return (
    <section
      id="process"

      className="relative border-b border-border bg-bg py-20 md:py-28"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="label text-accent">
            <span className="text-accent-2">▸</span> 04 / process
          </p>
          <h2 className="display mt-3 text-balance text-4xl md:text-5xl">
            Three steps.
            <br />
            <span className="text-accent">No drama.</span>
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-lg text-muted">
            Open a ticket, pay, and get your goods. Most orders complete before
            you finish your coffee.
          </p>
        </div>

        <ol className="process-ladder mt-14" role="list">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            const stepNumber = String(index + 1).padStart(2, "0");
            const prompt = TRACE_PROMPTS[index];
            return (
              <li
                key={step.title}
                className="process-ladder__row"
                aria-posinset={index + 1}
                aria-setsize={steps.length}
              >
                <div className="process-ladder__number" aria-hidden="true">
                  <span className="process-ladder__number-glyph">
                    {stepNumber}
                  </span>
                </div>

                <article
                  className="process-ladder__card"
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  <header className="process-ladder__head">
                    <span className="process-ladder__prompt mono">
                      step_{stepNumber} · {prompt}
                    </span>
                    <span className="process-ladder__latency mono">
                      ~{5 + index * 12}m · median
                    </span>
                  </header>

                  <div className="process-ladder__body">
                    <div className="process-ladder__icon" aria-hidden="true">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="process-ladder__title">{step.title}</h3>
                      <p className="process-ladder__description">{step.body}</p>
                    </div>
                  </div>

                  <footer className="process-ladder__foot">
                    <span className="mono">path: discord / vaulted / ticket</span>
                    <span className="mono text-accent-2">● ready</span>
                  </footer>
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

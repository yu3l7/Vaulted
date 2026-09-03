import { Container } from "@/components/ui/Container";
import { steps } from "@/lib/content";

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

        <ol className="mt-14 grid gap-px bg-border-bright md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.Icon;
            return (
              <li
                key={s.title}
                className="relative flex flex-col bg-surface p-7"
              >
                <span className="mono absolute right-5 top-5 text-[10px] uppercase tracking-wider text-accent">
                  [ step_{String(i + 1).padStart(2, "0")} ]
                </span>

                <div className="flex size-11 items-center justify-center border border-accent bg-bg text-accent">
                  <Icon className="size-5" />
                </div>

                <h3 className="display mt-5 text-xl tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

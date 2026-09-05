import { Container } from "@/components/ui/Container";

const ITEMS = [
  "50_SKINS",
  "VBUCKS_LOADED",
  "PICKAXE",
  "GLIDER",
  "OG_ACCOUNTS",
  "SAME_DAY",
  "DISCORD_DIRECT",
  "VERIFIED",
];

export function CategoryMarquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <section
     
      aria-label="Categories"
      className="relative overflow-hidden border-y border-border-bright bg-bg py-5"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to right, var(--bg) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to left, var(--bg) 0%, transparent 100%)",
        }}
      />

      <Container className="overflow-hidden p-0">
        <ul
          className="marquee-track mono flex w-max items-center gap-10 whitespace-nowrap text-xs uppercase tracking-wider"
          aria-hidden="true"
        >
          {track.map((item, i) => (
            <li key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="text-fg">{item}</span>
              <span aria-hidden="true" className="text-accent">
                +
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

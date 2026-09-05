import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="mono max-w-md text-center">
        <p className="label text-accent">
          <span className="text-accent-2">▸</span> 404 / product_not_found
        </p>
        <h1 className="display mt-4 text-4xl tracking-tight md:text-5xl">
          That product doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-pretty text-muted">
          The slug you followed doesn&apos;t match any product in our catalog.
          Browse all products or open a Discord ticket.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/#products"
            className="mono inline-flex h-11 items-center border border-accent bg-accent/10 px-6 text-xs uppercase tracking-wider text-accent"
          >
            [ browse_products ]
          </Link>
          <Link
            href="https://discord.gg/vaulted"
            target="_blank"
            rel="noreferrer"
            className="mono inline-flex h-11 items-center border border-border-bright bg-fg/5 px-6 text-xs uppercase tracking-wider text-fg"
          >
            [ discord ]
          </Link>
        </div>
      </div>
    </main>
  );
}

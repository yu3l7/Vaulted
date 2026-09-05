import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-bg px-6 text-center">
      <div>
        <p className="text-sm text-muted">404</p>
        <h1 className="display mt-2 text-balance text-5xl md:text-6xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist — or got vaulted.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-fg/10 px-5 text-sm font-medium text-fg hover:bg-fg/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}

/**
 * MeshOverlay — pure markup for the hero backdrop.
 *
 * Reads `--mx` / `--my` CSS variables written by <HeroFx /> and
 * translates by them, with a 600ms return-to-center transition.
 * The 4 mesh-blob keyframes animate inside this wrapper's
 * transformed coordinate space.
 *
 * Server Component — no client JS.
 */
export function MeshOverlay() {
  return (
    <div
      aria-hidden="true"
      className="mesh-wrapper absolute inset-0 overflow-hidden"
    >
      <div className="ascii-grid absolute inset-0" />
      <div className="scanlines absolute inset-0" />
      <div className="mesh-blob mesh-blob-1" />
      <div className="mesh-blob mesh-blob-2" />
      <div className="mesh-blob mesh-blob-3" />
      <div className="mesh-blob mesh-blob-4" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, color-mix(in oklch, var(--bg) 60%, transparent) 100%)",
        }}
      />
    </div>
  );
}

import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Vaulted — Curated Fortnite supply";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <span style={{ color: "#a78bfa" }}>◆</span> Vaulted
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            fontSize: 84,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          <div>Curated Fortnite</div>
          <div style={{ color: "#a3a3a3" }}>supply.</div>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#a3a3a3",
          }}
        >
          Stacked accounts · V-Bucks · Rare skins · Coaching
        </div>
      </div>
    ),
    { ...size },
  );
}

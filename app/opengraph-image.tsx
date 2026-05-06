import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "T&J Nails — Family-owned nail salon in Katy, TX 77493";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background:
            "radial-gradient(circle at 18% 12%, rgba(221,227,215,0.55), transparent 60%), linear-gradient(135deg, #FAF8F3 0%, #F6EFE7 52%, #F1F3EE 100%)",
          color: "#1A1A1A",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
            color: "#A65F4E",
          }}
        >
          <span>Katy, TX 77493</span>
          <span style={{ width: 6, height: 6, background: "#C9A961", borderRadius: 999 }} />
          <span>Family-owned since 2001</span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 124, lineHeight: 0.95, letterSpacing: "-0.02em", fontWeight: 500 }}>
            Katy&apos;s family-owned
          </div>
          <div
            style={{
              fontSize: 124,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              color: "#69382F",
              fontStyle: "italic",
            }}
          >
            nail salon since 2001.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Georgia, serif",
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: "-0.03em",
            }}
          >
            T<span style={{ color: "#A65F4E", margin: "0 4px" }}>&amp;</span>J Nails
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <div style={{ fontSize: 22, color: "#6B6258", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
              4.9 ★ · 280+ reviews
            </div>
            <div style={{ fontSize: 28, color: "#1A1A1A", fontWeight: 600 }}>(281) 391-1411</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

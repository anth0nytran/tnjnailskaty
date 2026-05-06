import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1A1A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAF8F3",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1 }}>
          T<span style={{ color: "#C9A961", margin: "0 4px" }}>&amp;</span>J
        </div>
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.24em",
            color: "#C9A961",
            marginTop: 10,
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
          }}
        >
          Nails Katy
        </div>
      </div>
    ),
    { ...size }
  );
}

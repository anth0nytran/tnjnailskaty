import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "#1A1A1A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAF8F3",
          fontFamily: "Georgia, serif",
          fontWeight: 600,
          letterSpacing: "-0.04em",
        }}
      >
        T<span style={{ color: "#C9A961", margin: "0 1px" }}>&amp;</span>J
      </div>
    ),
    { ...size }
  );
}

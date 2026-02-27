import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        {/* Hexagon via clip-path */}
        <div
          style={{
            width: 28,
            height: 28,
            background: "#5b5bd6",
            clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "sans-serif",
              letterSpacing: "-0.5px",
              lineHeight: 1,
              marginTop: 1,
            }}
          >
            Q
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}

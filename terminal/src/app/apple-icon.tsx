import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#18181b",
          borderRadius: 40,
        }}
      >
        {/* Hexagon via clip-path */}
        <div
          style={{
            width: 130,
            height: 130,
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
              fontSize: 64,
              fontWeight: 700,
              fontFamily: "sans-serif",
              letterSpacing: "-2px",
              lineHeight: 1,
              marginTop: 4,
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

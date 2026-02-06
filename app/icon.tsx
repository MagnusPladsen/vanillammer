import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FBF2D6",
          color: "#E7B51F",
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 64 64"
          fill="none"
          style={{ display: "block", transform: "translateY(-1px)" }}
        >
          <g stroke="#E7B51F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 44L30 32L24 26L12 38L18 44Z" />
            <path d="M32 24H46L48 30L44 34H30L28 30L32 24Z" />
            <path d="M16 40L12 44" />
            <path d="M44 22L50 28" />
            <path d="M10 46H54" />
            <path d="M10 46L22 34L30 42L42 30L54 40" />
          </g>
        </svg>
      </div>
    ),
    size
  );
}

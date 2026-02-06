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
          background: "#c7a86a",
          color: "#1c1b19",
          fontSize: 36,
          fontFamily: "serif",
        }}
      >
        V
      </div>
    ),
    size
  );
}

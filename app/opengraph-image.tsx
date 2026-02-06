import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f7f4ef 0%, #efe6d5 100%)",
          color: "#1c1b19",
          fontSize: 64,
          fontFamily: "serif",
          letterSpacing: "0.06em",
        }}
      >
        Vanillammer
      </div>
    ),
    size
  );
}

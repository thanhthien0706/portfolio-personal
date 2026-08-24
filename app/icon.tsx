import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon: monogram NT trong ô vuông viền màu nhấn (logo 1a)
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#161826",
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #9184d9",
            borderRadius: 10,
            color: "#9184d9",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-1.5px",
          }}
        >
          NT
        </div>
      </div>
    ),
    size
  );
}

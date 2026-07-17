import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#001a33",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00CC99",
          }}
        >
          <span
            style={{
              color: "#001a33",
              fontSize: 72,
              fontWeight: 700,
            }}
          >
            N
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

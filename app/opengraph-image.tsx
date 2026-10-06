import { ImageResponse } from "next/og";
export const alt = "Boost360Pro — Complete E-Commerce Growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#062D71",
        color: "white",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#15DC7A",
          marginBottom: 35,
        }}
      >
        Boost360Pro · Complete E-Commerce Growth
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        Your marketplace.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: -4,
          color: "#15DC7A",
        }}
      >
        Growth, connected.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 25,
          marginTop: 45,
          color: "#bed1e8",
        }}
      >
        Listing optimization · Store setup · Marketplace support
      </div>
    </div>,
    size,
  );
}

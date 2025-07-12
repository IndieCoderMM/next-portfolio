import { profile } from "@/config/profile";
import { loadGoogleFont } from "@/utils/font";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(ellipse at center, #0d0d0d 0%, #050505 100%)",
          color: "white",
          width: "100%",
          height: "100%",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          fontFamily: "Poppins",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, #ffffff20 0%, transparent 100%)," +
              "radial-gradient(1px 1px at 70% 40%, #ffffff15 0%, transparent 100%)," +
              "radial-gradient(2px 2px at 50% 80%, #ffffff10 0%, transparent 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.2,
              margin: 0,
              color: "#fff",
              textShadow: "0 0 10px #2bc57855",
            }}
          >
            {title}
          </h1>
        </div>

        <div style={{ position: "relative", zIndex: 1, opacity: 0.9 }}>
          <p style={{ fontSize: 28, margin: 0, color: "#aaa" }}>
            {profile.name}
          </p>
          <p style={{ fontSize: 22, margin: 0, color: "#2bc578" }}>
            {profile.title}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Poppins",
          data: await loadGoogleFont("Poppins"),
          style: "normal",
        },
      ],
    },
  );
}

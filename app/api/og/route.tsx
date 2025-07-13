import { siteUrl } from "@/config";
import { profile } from "@/config/profile";
import { loadGoogleFont } from "@/utils/font";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Portfolio";

  try {
    return new ImageResponse(
      (
        <div
          style={{
            background:
              "radial-gradient(circle at left, #0d0d0d 0%, #050505 100%)",
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
              display: "flex",
              position: "relative",
            }}
          >
            <h1
              style={{
                fontSize: 88,
                fontWeight: 900,
                lineHeight: 1.2,
                margin: 0,
                color: "#fff",
                textShadow: "0 0 10px rgba(255, 255,255, 0.2)",
              }}
            >
              {title}
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
                color: "#2bc578",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
              <p
                style={{
                  fontSize: 25,
                  margin: 0,
                  color: "#2bc578",
                }}
              >
                {siteUrl}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                position: "relative",
                opacity: 0.9,
              }}
            >
              <p style={{ fontSize: 48, margin: 0, color: "#aaa" }}>
                {profile.name}
              </p>
              <p style={{ fontSize: 33, margin: 0, color: "#999" }}>
                {profile.title}
              </p>
            </div>
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
  } catch (error) {
    console.error("Error generating Open Graph image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}

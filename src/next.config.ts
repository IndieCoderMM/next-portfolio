import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "api.microlink.io",
      },
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "aceternity.com",
      },
    ],
  },
};

export default nextConfig;

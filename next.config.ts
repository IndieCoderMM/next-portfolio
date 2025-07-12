import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "api.microlink.io",
      },
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;

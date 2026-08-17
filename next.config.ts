import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.simpleicons.org" }],
  },
  async redirects() {
    return [
      { source: "/experience", destination: "/work", permanent: true },
      { source: "/skills", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;

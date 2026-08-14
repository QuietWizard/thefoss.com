import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/experience", destination: "/work", permanent: true },
      { source: "/skills", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;

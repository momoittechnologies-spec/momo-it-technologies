import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/industries",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

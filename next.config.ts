import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },

      {
        protocol: "http",
        hostname: "api.hotel.hamroyouthit.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.hotel.hamroyouthit.com",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.hotel.hamroyouthit.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;
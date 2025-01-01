import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dailydev.gameful.dev',
      },
    ],
  },
};

export default nextConfig;

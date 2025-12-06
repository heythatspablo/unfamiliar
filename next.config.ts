import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/unfamiliar',
  assetPrefix: '/unfamiliar/',
};

export default nextConfig;

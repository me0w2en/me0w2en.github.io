import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images:{
    unoptimized:true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://me0w2en.github.io/"
      : "",
};

export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/smart-start-2026" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

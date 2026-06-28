import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(`${process.env.NEXT_PUBLIC_STORE_ID}/**`),
    ],
  },
};

export default nextConfig;

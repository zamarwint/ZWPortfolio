import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/**',
        search: ''
      }
    ],
    remotePatterns: [
      new URL(`${process.env.NEXT_PUBLIC_STORE_ID}/**`),
      new URL('https://picsum.photos/**')
    ],
  },
};

export default nextConfig;

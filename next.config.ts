import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/videos/wardpass-intro",
        destination: "/projects/wardpass?tab=videos",
        permanent: true,
      },
      { source: "/photos", destination: "/projects", permanent: true },
      { source: "/photos/:path*", destination: "/projects", permanent: true },
      { source: "/documents", destination: "/projects", permanent: true },
      { source: "/documents/:path*", destination: "/projects", permanent: true },
      { source: "/videos", destination: "/projects", permanent: true },
      { source: "/videos/:path*", destination: "/projects", permanent: true },
    ];
  },
  images: {
    localPatterns: [
      {
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;

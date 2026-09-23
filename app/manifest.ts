import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zamar Wint Portfolio",
    short_name: "ZW Portfolio",
    description: "Portfolio website of software engineer Zamar Wint",
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    theme_color: "#8E1616",
    icons: [
      {
        src: "/icon.png",
        sizes: "500x500",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}

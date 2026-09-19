import localFont from "next/font/local";
import { Funnel_Display, JetBrains_Mono } from "next/font/google";

export const editorialNew = localFont({
  src: [
    {
      path: "./fonts/EditorialNew-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/EditorialNew-Medium.woff2",
      weight: "500",
      style: "medium",
    },
  ],
  display: "swap",
  variable: "--font-editorial-new",
});

export const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel-display",
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

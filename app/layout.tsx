import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "@/components/ui/sonner";
import { editorialNew, funnelDisplay, dmMono } from "./fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    template: "%s | ZW",
    default: "Zamar Wint — Cybersecurity Engineer & Software Developer",
  },
  description:
    "Portfolio for Zamar Wint - A cybersecurity engineer and software developer based in the Caribbean.",
  icons: [
    {
      rel: "icon",
      url: "/logo-light.svg",
      media: "(prefers-color-scheme: light)"
    },
    {
      rel: "icon",
      url: "/logo-dark.svg",
      media: "(prefers-color-scheme: dark)"
    }
  ],
  keywords: [
    "zamar wint",
    "zamar",
    "wint",
    "zwint",
    "zamar wint portfolio",
    "developer portfolio",
    "cybersecurity",
    "cybersecurity engineer",
    "software engineer",
    "software developer",
    "caribbean",
    "caribbean engineers"
  ],
  creator: "Zamar Wint",
  publisher: "Zamar Wint",
  openGraph: {
    title: "Zamar Wint — Cybersecurity Engineer & Software Developer",
    description:
      "Portfolio for Zamar Wint - A cybersecurity engineer and software developer based in the Caribbean.",
    url: "https://zamarwint.xyz",
    siteName: "ZW",
    images: [
      {
        url: "https://zamarwint.xyz/open-graph.png",
        width: 200,
        height: 200,
        alt: "Zamar Wint - Cybersecurity Engineer & Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@zwbless",
    title: "Zamar Wint — Cybersecurity Engineer & Software Developer",
    description:
      "Portfolio for Zamar Wint - A cybersecurity engineer and software developer based in the Caribbean.",
    images: "https://zamarwint.xyz/open-graph.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", funnelDisplay.variable, editorialNew.variable, dmMono.variable)}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}

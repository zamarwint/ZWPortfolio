import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Loading from "./loading";
import { editorialNew, funnelDisplay, jetBrainsMono } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Zamar Wint Portfolio",
    default: "Zamar Wint — Cybersecurity Engineer & Software Developer",
  },
  description:
    "Portfolio for Zamar Wint - A cybersecurity engineer and software developer based in the Caribbean.",
  keywords: [
    "Zamar Wint",
    "Cybersecurity Engineer",
    "Software Developer",
    "Caribbean",
  ],
  authors: [{ name: "Zamar Wint" }],
  creator: "Zamar Wint",
  publisher: "Zamar Wint",
  openGraph: {
    title: "Zamar Wint — Cybersecurity Engineer & Software Developer",
    description:
      "Portfolio for Zamar Wint - A cybersecurity engineer and software developer based in the Caribbean.",
    url: "https://zamarwint.xyz",
    siteName: "Zamar Wint",
    images: [
      {
        url: "https://zamarwint.xyz/open-graph.png",
        width: 500,
        height: 500,
        alt: "Zamar Wint - Cybersecurity Engineer & Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zamar Wint — Cybersecurity Engineer & Software Developer",
    description:
      "Portfolio for Zamar Wint - A cybersecurity engineer and software developer based in the Caribbean.",
    images: "https://zamarwint.xyz/open-graph.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${funnelDisplay.variable} ${editorialNew.variable} ${jetBrainsMono.variable} h-full antialiased`}
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
      </body>
    </html>
  );
}

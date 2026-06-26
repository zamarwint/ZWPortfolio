import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const seasonsSerif = localFont({
  src: [
    {
      path: './fonts/Demo_Fonts/Fontspring-DEMO-theseasons-bd.otf',
      weight: '700',
      style: 'bold'
    },
    {
      path: './fonts/Demo_Fonts/Fontspring-DEMO-theseasons-bdit.otf',
      weight: '700',
      style: 'italic'
    },
    {
      path: './fonts/Demo_Fonts/Fontspring-DEMO-theseasons-it.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/Demo_Fonts/Fontspring-DEMO-theseasons-lt.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Demo_Fonts/Fontspring-DEMO-theseasons-ltit.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/Demo_Fonts/Fontspring-DEMO-theseasons-reg.otf',
      weight: '400',
      style: 'normal'
    },
  ]
})

const ttHovesSans = localFont({
  src: [
    { path: "./fonts/tt-hoves-pro-trial/TT\ Hoves\ Pro\ Trial\ Bold\ Italic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/tt-hoves-pro-trial/TT\ Hoves\ Pro\ Trial\ Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/tt-hoves-pro-trial/TT\ Hoves\ Pro\ Trial\ DemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/tt-hoves-pro-trial/TT\ Hoves\ Pro\ Trial\ Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/tt-hoves-pro-trial/TT\ Hoves\ Pro\ Trial\ Light\ Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/tt-hoves-pro-trial/TT\ Hoves\ Pro\ Trial\ Light.ttf", weight: "400", style: "normal" },
    { path: "./fonts/tt-hoves-pro-trial/TT\ Hoves\ Pro\ Trial\ Regular.ttf", weight: "400", style: "normal" }
  ]
})

export const metadata: Metadata = {
  title: "Zamar Wint",
  description: "Portfolio for Zamar Wint - A computer engineer based in the Caribbean.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${seasonsSerif.className} ${ttHovesSans.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}</ThemeProvider></body>
    </html>
  );
}

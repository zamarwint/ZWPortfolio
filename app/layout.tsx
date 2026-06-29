import type { Metadata } from "next";
import "./globals.css";
import { seasonsSerif, ttHovesSans } from "./fonts";
import { ThemeProvider } from "./_components/theme-provider";

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
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full min-w-full flex flex-col items-center justify-center overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}</ThemeProvider></body>
    </html>
  );
}

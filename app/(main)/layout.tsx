import SiteShell from "@/components/SiteShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of Zamar Wint's portfolio. Welcome to my website!",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell>{children}</SiteShell>;
}

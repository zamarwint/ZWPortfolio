import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Zamar Wint Portfolio",
  description: "Gallery videos of Zamar Wint's portfolio.",
};

export default function VideosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

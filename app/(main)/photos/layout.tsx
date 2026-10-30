import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photos of Zamar Wint's portfolio.",
};

export default function PhotosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

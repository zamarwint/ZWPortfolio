import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents",
  description: "Documents of Zamar Wint's portfolio.",
};

export default function DocumentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

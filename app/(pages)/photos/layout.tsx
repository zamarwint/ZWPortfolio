import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos | Zamar Wint Portfolio",
  description: "Photos of Zamar Wint's portfolio.",
};

export default function PhotosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="size-full flex flex-col justify-items-center overflow-auto no-scrollbar">
      {children}
    </div>
  );
}

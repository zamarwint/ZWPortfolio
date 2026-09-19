import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents | Zamar Wint Portfolio",
  description: "Documents of Zamar Wint's portfolio.",
};

export default function DocumentsLayout({
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

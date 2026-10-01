import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat with ZW",
  description: "Chat with Zamar Wint's Agent.",
};

export default function ChatLayout({
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

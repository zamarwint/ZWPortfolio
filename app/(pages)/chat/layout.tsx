import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chat | Zamar Wint Portfolio",
    description: "Chat with Zamar Wint's portfolio.",
};

export default function ChatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full flex flex-col">
            {children}
        </div>
    );
}
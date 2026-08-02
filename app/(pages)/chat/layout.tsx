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
        <div className="size-full flex flex-col items-center justify-center">
            {children}
        </div>
    );
}
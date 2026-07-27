import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | Zamar Wint Portfolio",
    description: "Gallery of Zamar Wint's portfolio.",
};

export default function GalleryLayout({
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
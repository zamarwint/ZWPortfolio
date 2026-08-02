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
        <div className="size-full flex flex-col items-center justify-center">
            {children}
        </div>
    );
}
"use client";

import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
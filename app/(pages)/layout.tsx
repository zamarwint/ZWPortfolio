"use client";

import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-full flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
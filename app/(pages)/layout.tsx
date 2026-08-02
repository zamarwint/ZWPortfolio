import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home | Zamar Wint Portfolio",
    description: "Home page of Zamar Wint's portfolio.",
};

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <main className="flex-1 size-full flex items-center justify-center flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
}
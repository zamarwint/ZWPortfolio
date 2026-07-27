import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
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
        <div className="w-full flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
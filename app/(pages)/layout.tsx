import Footer from "@/components/landing/Footer";
import Nav from "@/components/landing/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of Zamar Wint's portfolio.",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col size-full justify-items-center md:flex-row overflow-hidden">
      <Nav />
      <div className="flex-1 pt-14 md:pt-0 overflow-y-scroll no-scrollbar">
        {children}
        <Footer />
      </div>
    </div>
  );
}

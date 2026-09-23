"use client";

import { useRef } from "react";
import Footer from "@/components/landing/Footer";
import Nav from "@/components/landing/Nav";
import { useKeyboardShortcuts } from "@/lib/functions";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useKeyboardShortcuts();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col size-full justify-items-center md:flex-row overflow-hidden">
      <Nav scrollContainerRef={scrollContainerRef} />
      <div ref={scrollContainerRef} className="flex-1 pt-14 md:pt-0 overflow-y-scroll no-scrollbar">
        {children}
        <Footer />
      </div>
    </div>
  );
}

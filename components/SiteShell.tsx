"use client";

import { useRef } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useKeyboardShortcuts } from "@/lib/functions";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  useKeyboardShortcuts();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex size-full min-h-0 flex-col overflow-hidden">
      <Nav scrollContainerRef={scrollContainerRef} />
      <div
        ref={scrollContainerRef}
        className="site-scroll-region min-h-0 flex-1 overflow-y-auto no-scrollbar"
      >
        <div className="site-frame mx-auto w-full max-w-[1440px]">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

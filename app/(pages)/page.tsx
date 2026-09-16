"use client";

import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Background from "@/components/landing/Background";
import Work from "@/components/landing/Work";
import Recognition from "@/components/landing/Recognition";
import QuoteBreak from "@/components/landing/QuoteBreak";
import Contact from "@/components/landing/Contact";
import TopBar from "@/components/landing/TopBar";
import { useKeyboardShortcuts } from "@/lib/functions";

export default function Home() {
  useKeyboardShortcuts();
  return (
    <main className="flex flex-col justify-items-center text-foreground text-wrap">
      <TopBar />
      <Hero />
      <About />
      <Background />
      <Work />
      <Recognition />
      <QuoteBreak />
      <Contact />
    </main>
  );
}

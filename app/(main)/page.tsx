import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Background from "@/components/landing/Background";
import Work from "@/components/landing/Work";
import Recognition from "@/components/landing/Recognition";
import QuoteBreak from "@/components/landing/QuoteBreak";
import Contact from "@/components/landing/Contact";
import TopBar from "@/components/landing/TopBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of Zamar Wint's portfolio.",
};

export default function Home() {
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

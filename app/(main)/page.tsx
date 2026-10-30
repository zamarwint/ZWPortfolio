import Hero from "@/components/landing/Hero";
import Strengths from "@/components/landing/Strengths";
import Work from "@/components/landing/Work";
import About from "@/components/landing/About";
import ExploreMore from "@/components/landing/ExploreMore";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden text-foreground">
      <Hero />
      <Strengths />
      <Work />
      <About />
      <ExploreMore />
      <Contact />
    </main>
  );
}

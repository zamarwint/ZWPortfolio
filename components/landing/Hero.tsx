import TypewriterEffect from "@/app/_components/typewriter";
import { media } from "@/lib/data";
import { Download, MoveDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className="grid max-w-full grid-cols-1 items-center gap-14 px-[4vw] pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24 font-funnel-display"
    >
      <div>
        <p className="mb-4 flex items-center gap-2 text-xs">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse" />
          <span className="text-rotate">
            <span>
              <span>Open to new opportunities</span>
              <span>Willing to adapt and learn</span>
              <span>Always ready for a challenge</span>
              <span>Fluent in English</span>
              <span>Always ready to network</span>
            </span>
          </span>
        </p>
        <h1 className="font-display text-[clamp(2.75rem,6vw,4.4rem)] font-medium leading-[1.03] tracking-tight">
          Zamar Wint
        </h1>
        <p className="space-x-1.5 mb-6 mt-2 text-[clamp(1.1rem,2vw,1.35rem)] font-medium text-primary">
          <TypewriterEffect
            words={[
              "a Cybersecurity Engineer",
              "a Network Engineer",
              "a Security Engineer",
              "a Junior Software Engineer",
              "a Project Manager",
              "a Problem Solver",
              "an Entrepreneur",
              "a Leader",
              "a Researcher",
              "a Communicator",
            ]}
            cursor={false}
            cursorBlink={false}
          />
          <span className="animate-blink inline-flex size-1.5 bg-primary"></span>
        </p>
        <p className="mb-9 max-w-136">
          I build software that businesses and consumers can trust with their
          money and time. Currently completing a STEM degree in Jamaica while
          building tools and services to automate workflows, enhance
          productivity, and bridge digital divides.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#work"
            className="flex items-center gap-2 bg-primary text-background px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 group"
          >
            <span>View my work</span>
            <MoveDown className="size-3 group-hover:translate-y-0.5 transition-transform duration-300" />
          </Link>
          <Link
            href="/Zamar-Wint-Resume.pdf"
            className="flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-background px-6 py-3 text-sm font-medium transition-colors"
          >
            <Download className="size-3" />
            <span>Download CV / résumé</span>
          </Link>
        </div>
      </div>

      <div className="relative aspect-4/5 overflow-hidden border-6 border-border bg-border rounded-xs">
        <Image
          src={media.pictures[1].image}
          alt={media.pictures[1].title}
          fill
          sizes="(min-width: 768px) 40vw, 90vw"
          className="object-cover grayscale contrast-[1.07] brightness-[0.92] rounded-xs"
          priority
        />
        <div className="absolute inset-0 opacity-[0.24] mix-blend-multiply" />
      </div>
    </motion.section>
  );
}

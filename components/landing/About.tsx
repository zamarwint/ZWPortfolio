"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const rise = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const skills = ["Cybersecurity", "Web development", "Networking", "Product design", "Community"];

export default function About() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-14 md:py-28">
        <motion.div {...rise} className="relative mx-auto w-full max-w-[400px]">
          <div className="absolute -left-3 top-8 z-10 rounded-full bg-secondary px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-secondary-foreground">Curiosity keeps me moving</div>
          <div className="relative aspect-[0.95] overflow-hidden rounded-[12px_12px_42%_42%] bg-primary-foreground/10"><Image src="/pictures/eac-cam-picture.png" alt="Zamar working behind a camera during a community broadcast" fill sizes="(min-width: 768px) 34vw, 90vw" className="object-cover" /></div>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-primary-foreground/55">Community work · Live broadcast</p>
        </motion.div>
        <motion.div {...rise} id="about" className="scroll-mt-12">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">02 / A little about me</p>
          <h2 className="max-w-2xl font-editorial-new text-5xl leading-[1.03] tracking-tight sm:text-6xl">Curious by nature.<br /><span className="italic text-secondary">Grounded in purpose.</span></h2>
          <div className="mt-7 max-w-xl space-y-4 text-sm leading-7 text-primary-foreground/75">
            <p>I grew up in the Caribbean with a computer close by and a growing desire to understand how things work. That curiosity has led me through cybersecurity, software engineering, live broadcast work, tutoring, and community service.</p>
            <p>I enjoy taking complicated problems apart, finding the useful center, and building something people can trust. I&apos;m completing a STEM degree while developing practical products that make everyday digital life a little better.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-primary-foreground/20 px-3 py-1.5 text-[10px] text-primary-foreground/85">{skill}</span>)}</div>
          <Link href="/videos" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary-foreground">See how I work <ArrowRight className="size-4" /></Link>
        </motion.div>
      </div>
    </section>
  );
}

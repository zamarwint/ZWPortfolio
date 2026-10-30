"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

const rise = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1440px] scroll-mt-8 px-5 py-24 sm:px-8 md:px-14 md:py-32">
      <motion.div {...rise} className="relative overflow-hidden rounded-[28px] bg-secondary px-6 py-12 sm:px-12 sm:py-16 md:px-16">
        <div className="pointer-events-none absolute -right-16 -top-28 size-80 rounded-full border border-secondary-foreground/10" />
        <div className="pointer-events-none absolute -right-6 -top-16 size-60 rounded-full border border-secondary-foreground/10" />
        <div className="relative max-w-3xl">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-secondary-foreground/70">03 / Start a conversation</p>
          <h2 className="font-editorial-new text-5xl leading-[1.02] tracking-tight text-secondary-foreground sm:text-6xl md:text-7xl">Have a good<br /><span className="italic">problem to solve?</span></h2>
          <p className="mt-6 max-w-lg text-sm leading-6 text-secondary-foreground/75">I&apos;m open to thoughtful opportunities, collaborations, and conversations about building better technology.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:wintzamar@gmail.com" className="glossy-button inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground">Email Zamar <ArrowUpRight className="size-4" /></a>
            <Link href="https://www.linkedin.com/in/zamarwint" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-5 py-3.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary-foreground/5">Connect on LinkedIn <ArrowUpRight className="size-4" /></Link>
          </div>
          <p className="mt-8 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-secondary-foreground/65"><Check className="size-3.5" /> Usually replies within a day</p>
        </div>
      </motion.div>
    </section>
  );
}

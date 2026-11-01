"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-center justify-center overflow-hidden px-5 py-20 text-center sm:px-8 md:min-h-[720px] md:px-14 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/30 via-background/10 to-secondary/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-[-14rem] size-[32rem] rounded-full bg-secondary/35 blur-[100px] sm:size-[40rem]"
      />
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/75 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-primary shadow-sm sm:text-[11px]">
          <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-35" /><span className="relative inline-flex size-2 rounded-full bg-primary" /></span>
          Open to opportunities &amp; collaborations
        </p>
        <h1 className="font-editorial-new text-[clamp(3.25rem,10vw,8rem)] leading-[0.92] tracking-[-0.055em] text-primary">
          Thoughtful tech.<br /><span className="italic text-foreground">Built with care.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
          I&apos;m <strong className="font-medium text-foreground">Zamar Wint</strong>, a Caribbean-based engineer building secure, useful digital products for people and businesses.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="#work" className="glossy-button group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground">
            Explore selected work <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
          <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors hover:bg-primary/5">
            Get in touch <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-primary/10 px-2 pt-6 sm:gap-x-12">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Based in</p>
            <p className="mt-1.5 text-sm font-medium">The Caribbean</p>
          </div>
          <span className="hidden h-8 w-px bg-primary/10 sm:block" aria-hidden="true" />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Currently focused on</p>
            <p className="mt-1.5 text-sm font-medium">Safer, simpler software</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-mono text-[9px] uppercase tracking-[0.12em] text-foreground/55 sm:gap-x-7 sm:text-[10px]">
          <span>Cybersecurity</span><span className="size-1 rounded-full bg-secondary-foreground/50" /><span>Software engineering</span><span className="size-1 rounded-full bg-secondary-foreground/50" /><span>Product thinking</span>
        </div>
      </motion.div>
    </section>
  );
}

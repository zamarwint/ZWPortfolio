"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[660px] max-w-[1440px] items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:min-h-[720px] md:grid-cols-[1.08fr_0.92fr] md:px-14 md:pb-24 md:pt-20">
      <div className="pointer-events-none absolute -left-40 top-24 size-[360px] rounded-full bg-accent/45 blur-3xl" />
      <motion.div className="relative z-10 max-w-3xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
        <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/60 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-primary sm:text-[11px]">
          <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-35" /><span className="relative inline-flex size-2 rounded-full bg-primary" /></span>
          Open to opportunities &amp; collaborations
        </p>
        <h1 className="font-editorial-new text-[clamp(3.25rem,8vw,7.25rem)] leading-[0.92] tracking-[-0.055em] text-primary">
          Thoughtful tech.<br /><span className="italic text-foreground">Built with care.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
          I&apos;m <strong className="font-medium text-foreground">Zamar Wint</strong>, a Caribbean-based engineer building secure, useful digital products for people and businesses.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link href="#work" className="glossy-button group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground">
            Explore selected work <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
          <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors hover:bg-primary/5">
            Get in touch <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-primary/10 pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/55 sm:text-[11px]">
          <span>Cybersecurity</span><span className="size-1 rounded-full bg-secondary-foreground/50" /><span>Software engineering</span><span className="size-1 rounded-full bg-secondary-foreground/50" /><span>Product thinking</span>
        </div>
      </motion.div>

      <motion.div className="relative mx-auto w-full max-w-[460px] md:ml-auto" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}>
        <div className="absolute -right-3 -top-4 z-10 rounded-full bg-secondary px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-foreground shadow-sm sm:-right-5 sm:top-8">Based in the Caribbean</div>
        <div className="relative aspect-[0.9] overflow-hidden rounded-[46%_46%_12px_12px] bg-secondary/70">
          <Image src="/pictures/no-bg-picture.png" alt="Portrait of Zamar Wint" fill priority sizes="(min-width: 768px) 40vw, 90vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-5 -left-2 rounded-2xl border border-primary/10 bg-card/90 px-4 py-3 shadow-lg backdrop-blur sm:-left-8 sm:px-5 sm:py-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Currently focused on</p>
          <p className="mt-1 text-sm font-medium">Safer, simpler software</p>
        </div>
        <span className="absolute -bottom-12 right-0 font-editorial-new text-6xl italic text-secondary-foreground/20">ZW</span>
      </motion.div>
    </section>
  );
}

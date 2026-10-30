"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, FileText, Image as ImageIcon, MessageCircle, Video } from "lucide-react";

const rise = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const pages = [
  { href: "/photos", number: "01", title: "Photos", description: "A visual archive of projects, milestones, and behind-the-scenes moments.", icon: ImageIcon },
  { href: "/videos", number: "02", title: "Videos", description: "Walkthroughs, progress reports, and stories from the work in motion.", icon: Video },
  { href: "/chat", number: "03", title: "Chat with Zamar", description: "Ask about my work, skills, experience, or how we might work together.", icon: MessageCircle },
  { href: "/documents", number: "04", title: "Documents", description: "Project plans, design notes, and technical documentation.", icon: FileText },
];

export default function ExploreMore() {
  return (
    <section className="border-y border-primary/10 bg-card/55">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:px-14 md:py-24">
        <motion.div {...rise} className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Explore more</p><h2 className="font-editorial-new text-4xl tracking-tight sm:text-5xl">A little more to <span className="italic">discover.</span></h2></div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Take a closer look at the process, the details, and the person behind the projects.</p>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pages.map(({ href, number, title, description, icon: Icon }, index) => (
            <motion.div key={href} {...rise} transition={{ ...rise.transition, delay: index * 0.06 }}>
              <Link href={href} className="group flex h-full min-h-[220px] flex-col rounded-2xl border border-primary/10 bg-background/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6">
                <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">{number} / 04</span><span className="grid size-10 place-items-center rounded-full bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-4" /></span></div>
                <h3 className="mt-7 font-editorial-new text-2xl tracking-tight">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{description}</p>
                <span className="mt-auto flex items-center gap-1 pt-5 text-xs font-medium text-primary">Explore <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

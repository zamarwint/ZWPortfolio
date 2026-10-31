"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness, MessageCircle, ScrollText } from "lucide-react";

const rise = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const pages = [
  { href: "/projects", number: "01", title: "Projects", description: "Explore the full collection, with project stories, imagery, videos, and documents.", icon: BriefcaseBusiness },
  { href: "/chat", number: "02", title: "Chat with Zamar", description: "Ask about my work, skills, experience, or how we might work together.", icon: MessageCircle },
  { href: "#", number: "03", title: "Blog", description: "Come and visit the place where I share my thoughts and ideas and relevant updates in the tech industry. Coming Soon!", icon: ScrollText },
];

export default function ExploreMore() {
  return (
    <section className="border-y border-primary/10 bg-card/55">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:px-14 md:py-24">
        <motion.div {...rise} className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Explore more</p><h2 className="font-editorial-new text-4xl tracking-tight sm:text-5xl">A little more to <span className="italic">discover.</span></h2></div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Take a closer look at the process, the details, and the person behind the projects.</p>
        </motion.div>
        <div className="grid max-w-4xl lg:max-w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map(({ href, number, title, description, icon: Icon }, index) => (
            <motion.div key={href} {...rise} transition={{ ...rise.transition, delay: index * 0.06 }}>
              <Link href={href} className="group flex h-full min-h-[220px] flex-col rounded-2xl border border-primary/10 bg-background/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6">
                <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">{number} / 03</span><span className="grid size-10 place-items-center rounded-full bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-4" /></span></div>
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

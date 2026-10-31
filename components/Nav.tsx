"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type RefObject } from "react";
import { motion, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#work", label: "Selected work" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/chat", label: "Chat with Zamar" },
];

export default function Nav({
  scrollContainerRef,
}: {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  return (
    <header className="relative z-40 w-full border-b border-primary/10 bg-background/95 font-funnel-display backdrop-blur-md">
      <div className="site-nav-frame mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link href="/" className="group text-sm font-medium tracking-tight transition-colors hover:text-primary sm:text-base" onClick={() => setOpen(false)}>
          Zamar Wint<span className="ml-1 text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-foreground/75 transition-colors hover:text-primary">{link.label}</Link>
          ))}
          <Link href="/#contact" className="glossy-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-primary-foreground">
            Let&apos;s talk <ArrowUpRight className="size-3.5" />
          </Link>
        </nav>

        <button aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} className="grid size-10 place-items-center rounded-full border border-primary/15 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && <nav className="absolute left-0 top-full flex w-full flex-col border-b border-primary/10 bg-background px-6 pb-5 pt-2 shadow-lg md:hidden" aria-label="Mobile navigation">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={cn("border-b border-primary/10 py-4 text-sm", path === link.href && "text-primary")}>{link.label}</Link>)}
        <Link href="/#contact" onClick={() => setOpen(false)} className="glossy-button mt-4 inline-flex items-center gap-2 self-start rounded-full px-5 py-3 text-sm text-primary-foreground">Let&apos;s talk <ArrowUpRight className="size-3.5" /></Link>
      </nav>}

      <motion.div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary" style={{ scaleX: scrollYProgress }} />
    </header>
  );
}

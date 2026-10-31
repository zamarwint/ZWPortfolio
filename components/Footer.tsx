"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PageLink {
  href: string,
  label: string
}

const pageLinks: PageLink[] = [
  { href: "/projects", label: "Projects" },
  { href: "/chat", label: "Chat" },
  { href: "#", label: "Blog" },
  { href: "/zwint-cv.pdf", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

const socials: PageLink[] = [
  { href: "https://github.com/zamarwint", label: "GitHub" },
  { href: "https://www.youtube.com/@zacodez", label: "YouTube" },
  { href: "https://www.linkedin.com/in/zamarwint", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-primary/10 bg-background font-funnel-display">
      <div className="px-5 pb-4 pt-8 sm:px-8 md:px-14 md:pt-10">
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {pageLinks.map((link) => <Link key={link.href} href={link.href} className="w-fit text-foreground/80 transition-colors hover:text-primary">{link.label}</Link>)}
        </nav>

        <div className="mt-7 flex flex-col justify-between gap-3 border-t border-primary/10 pt-4 text-[10px] text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Zamar Wint</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((social) => <Link key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-primary">{social.label}<ArrowUpRight className="size-2.5" /></Link>)}
          </div>
          <Link href="#top" onClick={(event) => { event.preventDefault(); document.querySelector(".site-scroll-region")?.scrollTo({ top: 0, behavior: "smooth" }); }} className="w-fit transition-colors hover:text-primary">Back to top ↑</Link>
        </div>
      </div>

      <div aria-label="Zamar Wint" className="select-none overflow-hidden px-3 pt-2 text-center font-funnel-display text-[clamp(4.2rem,17vw,15.5rem)] font-semibold leading-[0.72] tracking-[-0.085em] text-primary opacity-[0.085] sm:pt-3">
        <span className="block translate-y-[0.11em] whitespace-nowrap">Zamar Wint</span>
      </div>
    </footer>
  );
}

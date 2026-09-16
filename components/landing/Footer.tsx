"use client";

import { motion } from "motion/react";
import { underlineDraw } from "@/app/_components/UnderlineDraw";
import Link from "next/link";
import { MoveUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToTop } from "@/lib/functions";
import { usePathname } from "next/navigation";

const SOCIALS = [
  { href: "https://github.com/zamarwint", label: "Github" },
  { href: "https://x.com/zwbless", label: "X" },
  { href: "https://youtube.com/@blsdcode", label: "Dev YouTube" },
  { href: "https://www.instagram.com/zwbless", label: "Instagram" },
  { href: "https://www.linkedin.com/in/zamarwint", label: "LinkedIn" },
];

export default function Footer() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <motion.footer
      className="flex max-w-full flex-wrap items-center justify-between gap-4 border-t border-border px-[4vw] py-9 font-funnel-display"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 1,
      }}
    >
      <span className="text-sm">Designed &amp; developed by Zamar Wint</span>
      <div className="flex gap-6">
        {SOCIALS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm hover:text-primary ${underlineDraw()}`}
          >
            {s.label}
          </Link>
        ))}
      </div>
      <Link
        href={`${scrollToTop({ path: pathname })}`}
        className={cn(
          "w-fit text-sm hover:text-primary flex justify-between items-center gap-1 cursor-pointer",
          underlineDraw(),
        )}
      >
        <span>Back to top</span>
        <MoveUp className="size-3" />
      </Link>
    </motion.footer>
  );
}

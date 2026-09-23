"use client";

import { RefObject, useEffect, useState } from "react";
import { ModeToggle } from "../ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const PAGELINKS = [
  { href: "/", label: "Home" },
  { href: "/photos", label: "Photos of Work" },
  { href: "/videos", label: "Progress Report Videos" },
  { href: "/documents", label: "Documents of Projects" },
  { href: "/chat", label: "Chat with ZW" },
];

const SOCIALS = [
  { href: "https://github.com/zamarwint", label: "GH" },
  { href: "https://x.com/zwbless", label: "X" },
  { href: "https://youtube.com/@blsdcode", label: "DEV YT" },
  { href: "https://www.instagram.com/zwbless", label: "IG" },
  { href: "https://www.linkedin.com/in/zamarwint", label: "IN" },
];

export default function Nav({
  scrollContainerRef,
}: {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}) {
  // const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  // useEffect(() => {
  //   const sections = LINKS.map((l) =>
  //     document.getElementById(l.href.slice(1)),
  //   ).filter((el): el is HTMLElement => el !== null);

  //   if (!sections.length) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) setActive(`#${entry.target.id}`);
  //       });
  //     },
  //     { rootMargin: "-40% 0px -50% 0px" },
  //   );

  //   sections.forEach((s) => observer.observe(s));
  //   return () => observer.disconnect();
  // }, []);

  // PREVENT USER FROM SCROLLING WHEN MOBILE MENU IS ACTIVE
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 1,
      }}
      className="font-funnel-display lg:w-62 lg:shrink-0"
    >
      <div className="top-0 z-12 flex w-full items-center justify-between border-b border-border bg-background px-5 py-4 lg:hidden fixed">
        <span className="font-medium">ZW</span>

        {/* MOBILE NAV */}
        {/* MOBILE MENU ICON */}
        <div className="lg:hidden flex items-center justify-center gap-4">
          <ModeToggle />
          <div onClick={() => setOpen(!open)} className="cursor-pointer">
            {open ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={
            open
              ? "lg:hidden bg-background/90 backdrop-blur-md flex flex-col w-screen h-screen items-center justify-start fixed top-17 left-0"
              : "hidden"
          }
        >
          <motion.nav className="flex flex-col items-start justify-start w-full border-y border-border">
            {open &&
              PAGELINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "block transition w-full p-5",
                    (path === link.href ||
                      (path.startsWith("/videos") &&
                        link.href.startsWith("/videos"))) &&
                      "block text-background transition bg-primary w-full p-5",
                  )}
                >
                  {link.label}
                </Link>
              ))}
          </motion.nav>
        </div>
      </div>

      <div className="top-0 hidden h-screen w-62 shrink-0 flex-col border-r border-border px-7 py-9 lg:flex sticky">
        <Link href="/" className="font-medium hover:opacity-80">
          ZW
        </Link>

        <motion.nav className="mt-12 flex flex-col gap-1">
          {PAGELINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "border-l-2 py-2 pl-3 text-sm transition-colors",
                path === link.href ||
                  (path.startsWith("/videos") &&
                    link.href.startsWith("/videos"))
                  ? "border-primary"
                  : "border-transparent hover:opacity-70 hover:border-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>

        <div className="mt-auto flex flex-col gap-5">
          <div className="flex items-center justify-start gap-2">
            <ModeToggle />
            <Separator orientation="vertical" />
            <span className="text-xs text-muted-foreground">
              Alt + T &nbsp; — &nbsp; Change Theme
            </span>
          </div>
          <div className="flex gap-4">
            {SOCIALS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-primary"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        id="scroll-indicator"
        className="fixed top-0 left-0 right-0 h-0.5 w-screen bg-primary origin-left z-50"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </motion.header>
  );
}

import { motion } from "motion/react";
import Link from "next/link";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#background", label: "Background" },
  { href: "#work", label: "Work" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

export default function TopBar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className="hidden md:flex flex-col md:flex-row justify-center items-center font-funnel-display border-b border-border sticky"
    >
      {LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`px-4 py-3 text-sm text-center transition-colors hover:opacity-70 ${
            index === 0 ? "border-l border-border" : ""
          } border-r border-border`}
        >
          {link.label}
        </Link>
      ))}
    </motion.nav>
  );
}

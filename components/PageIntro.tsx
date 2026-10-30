"use client";

import { motion } from "motion/react";

export default function PageIntro({
  eyebrow,
  title,
  description,
  index,
}: {
  eyebrow: string;
  title: string;
  description: string;
  index: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-10 border-b border-primary/10 pb-8 sm:mb-12 sm:pb-10"
    >
      <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
        <span className="size-1.5 rounded-full bg-primary" />
        {index} / {eyebrow}
      </p>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h1 className="font-editorial-new text-5xl leading-[0.95] tracking-[-0.04em] text-primary sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="max-w-md text-sm leading-6 text-muted-foreground md:pb-1">
          {description}
        </p>
      </div>
    </motion.header>
  );
}

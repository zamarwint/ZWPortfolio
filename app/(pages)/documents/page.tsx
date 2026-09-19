"use client";

import { motion } from "motion/react";
import { useKeyboardShortcuts } from "@/lib/functions";
import DisplayDocuments from "@/components/gallery/Documents";

export default function Documents() {
  useKeyboardShortcuts();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 2,
      }}
      id="gallery"
      className="size-full flex flex-col items-center justify-start pt-[10vh] font-funnel-display"
    >
      <h1 className="text-6xl md:text-8xl font-editorial-new italic">
        Documents
      </h1>
      <p className="text-muted-foreground pt-4 text-center">
        Deep-dives into processes and technical documentation of projects
        I&apos;ve worked on.
      </p>
      <div className="container w-full mx-auto pt-5 pb-10">
        <div className="w-full flex flex-col items-center justify-center">
          <DisplayDocuments />
        </div>
      </div>
    </motion.div>
  );
}

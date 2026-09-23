"use client";

import { motion } from "motion/react";
import DisplayVideos from "@/components/gallery/Videos";

export default function Videos() {
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
      <h1 className="text-6xl md:text-8xl font-editorial-new italic">Videos</h1>
      <p className="text-muted-foreground pt-4 px-4 md:px-0 text-center">
        Evidence of my experience and projects.
      </p>
      <div className="container w-full mx-auto pt-5 pb-10">
        <div className="w-full flex flex-col items-center justify-center">
          <DisplayVideos />
        </div>
      </div>
    </motion.div>
  );
}

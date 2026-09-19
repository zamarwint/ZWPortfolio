"use client";

import { motion } from "motion/react";
import DisplayImages from "@/components/gallery/Images";
import { useKeyboardShortcuts } from "@/lib/functions";

export default function Photos() {
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
      <h1 className="text-6xl md:text-8xl font-editorial-new italic">Photos</h1>
      <p className="text-muted-foreground pt-4 text-center">
        A collection of photos and screenshots of my work.
      </p>
      <div className="container w-full mx-auto pt-5 pb-10">
        {/* <div className="container w-full flex items-center justify-center pt-10 overflow-auto">
          <ToggleGroup
            type="single"
            value={selectedContent}
            onValueChange={(value) =>
              setSelectedContent(value as GalleryContentType)
            }
          >
            <ToggleGroupItem
              size="sm"
              value={GalleryContentType.IMAGE}
              className="text-lg p-6 rounded-none"
            >
              Images
            </ToggleGroupItem>
            <ToggleGroupItem
              size="sm"
              value={GalleryContentType.VIDEO}
              className="text-lg p-6 rounded-none"
            >
              Videos
            </ToggleGroupItem>
          </ToggleGroup>
        </div> */}
        <div className="w-full flex flex-col items-center justify-center">
          <DisplayImages />
        </div>
      </div>
    </motion.div>
  );
}

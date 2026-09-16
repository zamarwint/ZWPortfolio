"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { GalleryContentType } from "@/lib/data";
import DisplayImages from "@/components/gallery/Images";
import DisplayVideos from "@/components/gallery/Videos";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useKeyboardShortcuts } from "@/lib/functions";

export default function Gallery() {
  const [selectedContent, setSelectedContent] = useState<GalleryContentType>(
    GalleryContentType.IMAGE,
  );

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
        Gallery
      </h1>
      <p className="text-muted-foreground pt-4">The library of my work.</p>
      <div className="container w-full mx-auto pt-5 pb-10">
        <div className="container w-full flex items-center justify-center pt-10 overflow-auto">
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
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          {selectedContent === GalleryContentType.IMAGE ? (
            <DisplayImages />
          ) : (
            <DisplayVideos />
          )}
        </div>
      </div>
    </motion.div>
  );
}

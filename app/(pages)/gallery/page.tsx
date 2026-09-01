"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { GalleryContentType } from "@/lib/data";
import DisplayImages from "./_components/Images";
import DisplayVideos from "./_components/Videos";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Gallery() {
  const [selectedContent, setSelectedContent] = useState<GalleryContentType>(
    GalleryContentType.IMAGE,
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 2,
      }}
      id="gallery"
      className="w-[90%] lg:w-[80%] flex flex-col items-center justify-center border-x border-foreground/10 pb-150 pt-[20vh]"
    >
      <h1 className="text-6xl md:text-8xl font-bold">Gallery</h1>
      <p className="text-muted-foreground font-hoves-regular py-4">
        The library of my work.
      </p>
      <div className="container w-full mx-auto p-4 md:p-10">
        <div className="container w-full flex items-center justify-center py-[2vh]">
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
              className="text-lg p-6"
            >
              Images
            </ToggleGroupItem>
            <ToggleGroupItem
              size="sm"
              value={GalleryContentType.VIDEO}
              className="text-lg p-6"
            >
              Videos
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        {selectedContent === GalleryContentType.IMAGE ? (
          <DisplayImages />
        ) : (
          <DisplayVideos />
        )}
      </div>
    </motion.div>
  );
}

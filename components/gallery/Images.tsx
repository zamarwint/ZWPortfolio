"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { galleryImages, GalleryImageType } from "@/lib/data";
import DisplayImageCarousel from "@/components/gallery/ImageCarousel";

export default function DisplayImages() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageTitle, setImageTitle] = useState<string>("");
  const [imageDesc, setImageDesc] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>("");

  const showContent = (image: GalleryImageType) => {
    setIsOpen(true);
    setImageTitle(image.title);
    setImageDesc(image.description || "");
    setImageSrc(image.src);
  };

  return (
    <>
      <DisplayImageCarousel />
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            type="button"
            aria-label={`View ${image.title}`}
            className="group overflow-hidden rounded-2xl border border-primary/10 bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => showContent(image)}
          >
            <div className="relative aspect-[1.15] overflow-hidden bg-secondary/30">
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/45 to-transparent opacity-70" />
            </div>
            <span className="flex items-center justify-between gap-3 px-4 py-3.5">
              <span className="truncate text-sm font-medium">{image.title}</span>
              <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">View</span>
            </span>
          </button>
        ))}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="z-999 max-w-4xl overflow-hidden rounded-2xl border-primary/10 bg-background p-0 font-funnel-display">
            <DialogHeader>
              <DialogTitle className="px-6 pt-6 font-editorial-new text-2xl">
                {imageTitle}
              </DialogTitle>
              {imageDesc && <DialogDescription>{imageDesc}</DialogDescription>}
            </DialogHeader>
            <div className="flex items-center justify-center">
                <Image
                  src={imageSrc}
                  draggable="false"
                  alt={imageTitle}
                  width={1200}
                  height={900}
                  className="max-h-[72vh] w-auto rounded-lg object-contain"
                />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

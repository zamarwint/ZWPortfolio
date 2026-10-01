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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-10">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden shadow-sm bg-transparent flex items-center justify-center"
          >
            <Image
              src={image.src}
              alt={image.title}
              width={1000}
              height={1000}
              className="w-full h-full aspect-square object-cover hover:scale-105 transition-transform cursor-pointer"
              onClick={() => showContent(image)}
              loading="eager"
            />
          </div>
        ))}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="z-999 font-funnel-display">
            <DialogHeader>
              <DialogTitle className="font-funnel-display">
                {imageTitle}
              </DialogTitle>
              {imageDesc && <DialogDescription>{imageDesc}</DialogDescription>}
            </DialogHeader>
            <div className="flex items-center justify-center">
              <Image
                src={imageSrc}
                draggable="false"
                alt={imageTitle}
                width={400}
                height={400}
                className="rounded-lg pointer-events-none select-none w-auto h-auto aspect-auto"
                loading="eager"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

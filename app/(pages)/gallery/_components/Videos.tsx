import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryVideos, GalleryVideoType } from "@/lib/data";
import { useIsMobile } from "@/hooks/use-mobile";

export default function DisplayVideos() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [video, setVideo] = useState<string>("");
  const [videoTitle, setVideoTitle] = useState<string>("");
  const [videoDesc, setVideoDesc] = useState<string>("");
  const [videoPage, setVideoPage] = useState<string>("");

  const isMobile = useIsMobile();

  const showContent = (video: GalleryVideoType) => {
    setIsOpen(true);
    setVideo(video.src);
    setVideoTitle(video.title);
    setVideoDesc(video.description || "");
    setVideoPage(video.videoPage);
  };

  return (
    <div className="w-full flex gap-5 flex-col items-center justify-center">
      {galleryVideos.map((video, key) => (
        <div
          key={key}
          className="w-full flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start border border-foreground/10 p-5 gap-5 cursor-pointer"
          onClick={() => showContent(video)}
        >
          <div>
            <Image
              src={video.imgPrwSrcForVideo as string}
              alt={video.title}
              width={isMobile ? 200 : 150}
              height={isMobile ? 200 : 150}
              className="w-auto h-auto aspect-square object-cover hover:scale-105 transition-transform cursor-pointer"
              loading="eager"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start justify-center gap-2">
            <h1 className="text-2xl text-center lg:text-left">{video.title}</h1>
            <p className="text-muted-foreground text-center lg:text-left">
              {video.description}
            </p>
          </div>
        </div>
      ))}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="z-999">
          <DialogHeader>
            <DialogTitle>{videoTitle}</DialogTitle>
            {videoDesc && <DialogDescription>{videoDesc}</DialogDescription>}
          </DialogHeader>
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4">
              <video
                src={`${video}#t=0,5`}
                draggable="false"
                autoPlay
                className="rounded-lg select-none"
              />
              <Link href={videoPage}>
                <Button
                  variant="default"
                  size="lg"
                  className="cursor-pointer rounded-full w-full font-semibold"
                >
                  Watch full video
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

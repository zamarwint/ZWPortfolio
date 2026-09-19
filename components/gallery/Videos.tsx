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
    <div className="w-full flex gap-4 flex-col items-center justify-center px-10 mt-5">
      {galleryVideos.map((video, key) => (
        <div
          key={key}
          className="w-full flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start border border-border p-4 gap-4 cursor-pointer"
          onClick={() => showContent(video)}
        >
          <div className="size-fit flex items-center justify-center">
            <Image
              src={video.imgPrwSrcForVideo as string}
              alt={video.title}
              width={isMobile ? 200 : 150}
              height={isMobile ? 200 : 150}
              className="w-auto h-auto aspect-square object-cover hover:scale-105 transition-transform cursor-pointer"
              loading="eager"
            />
          </div>
          <div className="w-full flex flex-col flex-1 items-center lg:items-start justify-center gap-2">
            <h1 className="text-2xl text-center lg:text-left">{video.title}</h1>
            <p className="text-muted-foreground text-center lg:text-left line-clamp-1">
              {video.description}
            </p>
          </div>
        </div>
      ))}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="z-999 font-funnel-display">
          <DialogHeader>
            <DialogTitle className="font-funnel-display">
              {videoTitle}
            </DialogTitle>
            {videoDesc && (
              <DialogDescription className="line-clamp-1">
                {videoDesc}
              </DialogDescription>
            )}
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

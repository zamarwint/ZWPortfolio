"use client";

import { media } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MoveLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useKeyboardShortcuts } from "@/lib/functions";

export default function VideosPage() {
  const params = useParams<{ slug: string }>();
  useKeyboardShortcuts();

  const videoFile = media.videos.find((file) => {
    if (file.videoPage.includes(params.slug)) {
      return file.video;
    }
  });

  const getAspectRatio = (): number => {
    if (videoFile?.videoAspectRatio === "9/16") {
      return 9 / 16;
    }
    return 16 / 9;
  };

  return (
    <div
      id="video"
      className="w-[90%] lg:w-[80%] h-screen flex flex-col items-center justify-center text-center border-x border-border font-funnel-display"
    >
      <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center p-5 border-y border-border">
        <Button
          variant="outline"
          size="lg"
          className="w-fit rounded-sm p-2"
          asChild
        >
          <Link
            href="/gallery"
            className="flex items-center justify-center gap-2"
          >
            <MoveLeft className="size-5" />
            <span className="text-md">Back</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-semibold">{videoFile?.title}</h1>
        <h2 className="text-md text-muted-foreground">Zamar Wint</h2>
      </div>
      <div
        className={cn(
          "container w-full p-5 flex flex-col items-center justify-center border-b border-border",
          videoFile?.videoAspectRatio === "9/16" ? "max-w-96" : "",
        )}
      >
        <AspectRatio ratio={getAspectRatio()} className="rounded-lg bg-muted">
          <video
            src={videoFile?.video}
            autoPlay
            controls
            draggable="false"
            className="rounded-lg object-cover object-center size-full"
          ></video>
        </AspectRatio>
      </div>
    </div>
  );
}

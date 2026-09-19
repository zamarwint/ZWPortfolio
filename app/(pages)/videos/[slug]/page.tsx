"use client";

import { media } from "@/lib/data";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MoveLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useKeyboardShortcuts } from "@/lib/functions";
import { Separator } from "@/components/ui/separator";

export default function VideosPage() {
  const params = useParams<{ slug: string }>();
  useKeyboardShortcuts();

  const router = useRouter();

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
      className="size-full flex flex-col items-start justify-start font-funnel-display p-8"
    >
      <div className="w-full flex flex-col justify-center items-start">
        <Button
          variant="outline"
          size="lg"
          className="w-fit p-2 flex items-center justify-center gap-2"
          onClick={() => router.back()}
        >
          <MoveLeft className="size-5" />
          <span className="text-md">Back</span>
        </Button>
      </div>
      <div
        className={cn(
          "container w-full flex flex-col items-center justify-center py-8",
          videoFile?.videoAspectRatio === "9/16"
            ? "max-w-96"
            : "max-w-full md:max-w-[80%]",
        )}
      >
        <AspectRatio ratio={getAspectRatio()} className="bg-muted">
          <video
            src={videoFile?.video}
            autoPlay
            controls
            draggable="false"
            className="object-cover object-center size-full"
          ></video>
        </AspectRatio>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-2 pb-8">
        <h1 className="text-4xl font-bold">{videoFile?.title}</h1>
        <h2 className="text-lg font-semibold">Zamar Wint</h2>
        <Separator className="my-2" />
        <p className="text-md text-muted-foreground">
          {videoFile?.description}
        </p>
      </div>
    </div>
  );
}

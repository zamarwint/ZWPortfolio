import { media } from "@/lib/data";
import { Button } from "@/components/ui/button";

import { MoveLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import type { Metadata } from "next";
import getVideo from "@/actions/getVideo";
import VideoJsPlayer from "@/app/_components/videojs-player";

const findVideo = (slug: string) =>
  media.videos.find((file) => {
    if (file.videoPage.includes(slug)) {
      return file.slug;
    }
  });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: findVideo(slug)?.title + " | Videos | ZW",
    description: findVideo(slug)?.description,
  };
}

export default async function VideosPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const videoFile = findVideo(slug);

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
          asChild
        >
          <Link href="/videos">
            <MoveLeft className="size-5" />
            <span className="text-md">Back</span>
          </Link>
        </Button>
      </div>

      {/* Video Player and Description */}
      <div
        className={cn(
          "flex",
          videoFile?.videoAspectRatio === "9/16"
            ? "flex-col lg:flex-row lg:gap-10 items-center justify-center"
            : "flex-col items-start justify-start",
        )}
      >
        {/* Video Player */}
        <div
          className={cn(
            "container w-full flex flex-col items-center justify-center py-8",
            videoFile?.videoAspectRatio === "9/16"
              ? "max-w-96"
              : "max-w-full md:max-w-[80%]",
          )}
        >
          <VideoJsPlayer
            src={(await getVideo(slug)) as string}
            aspectRatio={getAspectRatio().toString()}
            width="100%"
          />
        </div>

        {/* Video Description */}
        <div
          className={cn(
            "flex flex-col items-start justify-center gap-2 pb-8",
            videoFile?.videoAspectRatio === "9/16" ? "w-[80%]" : "w-full",
          )}
        >
          <h1 className="text-4xl font-bold">{videoFile?.title}</h1>
          <h2 className="text-lg font-semibold">Zamar Wint</h2>
          <Separator className="my-2" />
          <p className="text-md text-muted-foreground">
            {videoFile?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

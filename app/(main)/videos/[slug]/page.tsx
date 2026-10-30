import { media } from "@/lib/data";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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
    <main id="video" className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-10 font-funnel-display sm:px-8 md:px-14 md:pt-14">
      <Link href="/videos" className="glossy-button mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-primary-foreground"><ArrowLeft className="size-4" /> All videos</Link>
      <div className={cn("grid items-center gap-8 rounded-3xl border border-primary/10 bg-card p-4 shadow-lg shadow-primary/5 sm:p-6 md:p-8", videoFile?.videoAspectRatio === "9/16" ? "lg:grid-cols-[0.8fr_1.2fr]" : "lg:grid-cols-[1.3fr_0.7fr]")}>
        <div className={cn("mx-auto w-full", videoFile?.videoAspectRatio === "9/16" ? "max-w-[360px]" : "max-w-5xl")}>
          <VideoJsPlayer
            src={(await getVideo(slug)) as string}
            aspectRatio={getAspectRatio().toString()}
            width="100%"
          />
        </div>
        <div className="flex flex-col items-start justify-center py-2 lg:py-8">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Video / {videoFile?.videoAspectRatio}</p>
          <h1 className="font-editorial-new text-4xl leading-tight tracking-tight sm:text-5xl">{videoFile?.title}</h1>
          <p className="mt-3 text-sm font-medium">Zamar Wint</p>
          <Separator className="my-5 bg-primary/10" />
          <p className="text-sm leading-7 text-muted-foreground">{videoFile?.description}</p>
          <Link href="/videos" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">More videos <ArrowUpRight className="size-4" /></Link>
        </div>
      </div>
    </main>
  );
}

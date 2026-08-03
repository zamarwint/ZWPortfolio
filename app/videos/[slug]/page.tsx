import { media } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MoveLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Videos | Zamar Wint Portfolio",
    description: "Gallery videos of Zamar Wint's portfolio.",
};

export default async function VideosPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    console.log(slug)

    const videoFileLink = media.videos.find((file) => {
        if (file.videoPage.includes(slug)) {
            return file.link;
        }
    })

    const getAspectRatio = (): number => {
        if (videoFileLink?.videoAspectRatio === "9/16") {
            return 9 / 16;
        }
        return 16 / 9;
    }

    return (
        <div
            id="video"
            className="w-[90%] lg:w-[80%] h-screen flex flex-col items-center justify-center gap-10 text-center border-x border-foreground/10"
        >
            <Button variant="outline" size="lg" className="cursor-pointer rounded-sm p-2 absolute top-5 left-[calc(50%-10rem)] md:left-[calc(50%-20rem)] lg:left-[calc(50%-36rem)]" asChild>
                <Link href="/gallery" className="flex items-center justify-center gap-2">
                    <MoveLeft className='size-5' />
                    <span className="text-md">Back</span>
                </Link>
            </Button>
            <div className="space-y-1">
                <h1 className="text-3xl font-semibold">{videoFileLink?.title}</h1>
            </div>
            <div className={cn("px-10 container flex flex-col items-center justify-center", videoFileLink?.videoAspectRatio === "9/16" ? "w-full max-w-96" : "")}>
                <AspectRatio ratio={getAspectRatio()} className="rounded-lg bg-muted">
                    <video
                        src={videoFileLink?.link}
                        autoPlay
                        controls
                        draggable="false"
                        className="rounded-lg object-cover object-center size-full"
                    ></video>
                </AspectRatio>
            </div>
        </div>
    )
}
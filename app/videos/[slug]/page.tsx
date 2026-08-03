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
            className="w-[90%] lg:w-[80%] h-screen flex flex-col items-center justify-center text-center border-x border-foreground/10"
        >
            <div className="w-full flex justify-between items-center p-5 border-y border-foreground/10">
                <Button variant="outline" size="lg" className="w-fit rounded-sm p-2" asChild>
                    <Link href="/gallery" className="flex items-center justify-center gap-2">
                        <MoveLeft className='size-5' />
                        <span className="text-md">Back</span>
                    </Link>
                </Button>
                <h1 className="text-3xl font-semibold">{videoFileLink?.title}</h1>
                <h2 className="text-md text-muted-foreground">Zamar Wint</h2>
            </div>
            <div className={cn("container w-full p-5 flex flex-col items-center justify-center border-b border-foreground/10", videoFileLink?.videoAspectRatio === "9/16" ? "max-w-96" : "")}>
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
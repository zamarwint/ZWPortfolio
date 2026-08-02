import { media } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
            id="gallery"
            className="flex flex-col items-center justify-center py-10 text-center"
        >
            <h1 className="text-5xl font-bold">{videoFileLink?.title}</h1>
            <p className="text-neutral-500 dark:text-neutral-400 font-hoves-regular py-2">
                Full video
            </p>
            <div className="container flex flex-col items-center justify-center p-4">
                <AspectRatio ratio={getAspectRatio()} className="w-full rounded-lg bg-muted">
                    <video
                        src={videoFileLink?.link}
                        autoPlay
                        controls
                        draggable="false"
                        className="rounded-lg object-cover object-center size-full"
                    ></video>
                </AspectRatio>
            </div>
            <Link href="/gallery">
                <Button variant="default" size="lg" className="cursor-pointer rounded-full w-full font-semibold px-30 mt-3">
                    Back to Gallery
                </Button>
            </Link>
        </div>
    )
}
"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { GalleryContentType, galleryImages, GalleryImageType, galleryVideos, GalleryVideoType } from "@/lib/data";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";

const DisplayImages = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [image, setImage] = useState<string>("");
    const [imageTitle, setImageTitle] = useState<string>("");
    const [imageDesc, setImageDesc] = useState<string>("");

    const showContent = (image: GalleryImageType) => {
        setIsOpen(true);
        setImage(image.src);
        setImageTitle(image.title);
        setImageDesc(image.description || "");
    };

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 border border-foreground/10">
            {galleryImages.map((image) => (
                <div
                    key={image.id}
                    className="overflow-hidden rounded-xs shadow-sm bg-transparent flex items-center justify-center"
                >
                    <Image
                        src={image.src}
                        alt={image.title}
                        width={1000}
                        height={1000}
                        className={cn("w-auto h-auto aspect-square object-cover hover:scale-105 transition-transform cursor-pointer",
                            image.title.toLowerCase().includes('college') || image.title.toLowerCase().includes('university') || image.title.toLowerCase().includes('emmanuel') ? 'invert dark:invert-0' : '')}
                        onClick={() => showContent(image)}
                        loading="eager"
                    />
                </div>
            ))}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="z-999">
                    <DialogHeader>
                        <DialogTitle>{imageTitle}</DialogTitle>
                        {imageDesc && <DialogDescription>{imageDesc}</DialogDescription>}
                    </DialogHeader>
                    <div className="flex items-center justify-center">
                        <Image src={image} draggable="false" alt={imageTitle} width={400} height={400} className={cn("rounded-lg pointer-events-none select-none w-auto h-auto aspect-auto",
                            imageTitle.toLowerCase().includes('college') || imageTitle.toLowerCase().includes('university') || imageTitle.toLowerCase().includes('emmanuel') ? 'invert dark:invert-0' : '')} loading="eager" />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

const DisplayVideos = () => {
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
                <div key={key} className="w-full flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start border border-foreground/10 p-5 gap-5 cursor-pointer" onClick={() => showContent(video)}>
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
                        <p className="text-muted-foreground text-center lg:text-left">{video.description}</p>
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
                            <video src={`${video}#t=0,5`} draggable="false" autoPlay className="rounded-lg select-none" />
                            <Link href={videoPage}>
                                <Button variant="default" size="lg" className="cursor-pointer rounded-full w-full font-semibold">
                                    Watch full video
                                </Button>
                            </Link>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default function Gallery() {
    const [selectedContent, setSelectedContent] = useState<GalleryContentType>(GalleryContentType.IMAGE);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 2,
            }}
            id="gallery"
            className="w-[90%] lg:w-[80%] flex flex-col items-center justify-center border-x border-foreground/10 pb-150 pt-[20vh]"
        >
            <h1 className="text-6xl md:text-8xl font-bold">Gallery</h1>
            <p className="text-muted-foreground font-hoves-regular py-4">
                The library of my work.
            </p>
            <div className="container w-full mx-auto p-4 md:p-10">
                <div className="container w-full flex items-center justify-center py-[2vh]">
                    <ToggleGroup type="single" value={selectedContent} onValueChange={(value) => setSelectedContent(value as GalleryContentType)}>
                        <ToggleGroupItem size="sm" value={GalleryContentType.IMAGE} className="text-lg p-6">
                            Images
                        </ToggleGroupItem>
                        <ToggleGroupItem size="sm" value={GalleryContentType.VIDEO} className="text-lg p-6">
                            Videos
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
                {selectedContent === GalleryContentType.IMAGE ? <DisplayImages /> : <DisplayVideos />}
            </div>
        </motion.div>
    );
};
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { galleryImages } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { LayoutDashboardIcon, X } from "lucide-react";

export default function DisplayImageCarousel() {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-5">
      <Button onClick={() => setOpen((prev) => !prev)}>
        <LayoutDashboardIcon className="size-4" />
        <span>Open Carousel</span>
      </Button>
      {open && (
        <div className="w-screen h-screen fixed inset-0 bg-background/20 backdrop-blur-md z-50 flex flex-col items-center justify-center">
          <Button onClick={() => setOpen(false)}>
            <X className="size-4" />
            <span>Close Carousel</span>
          </Button>
          <ImageCarousel />
        </div>
      )}
    </div>
  );
}

function ImageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  // Derive current slide and count from api during render — no effect needed for initial values
  const count = api?.scrollSnapList().length ?? 0;
  const initialSlide = api ? api.selectedScrollSnap() + 1 : 0;

  const [current, setCurrent] = React.useState(initialSlide);

  // Sync state when api becomes available (initialSlide changes from 0 → real value)
  if (current === 0 && initialSlide !== 0) {
    setCurrent(initialSlide);
  }

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Subscribe to slide changes — setState in a callback is the correct pattern
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };
    api.on("select", onSelect);

    // Cleanup the subscription on unmount or when api changes
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel className="mx-auto max-w-xs md:max-w-lg h-fit" setApi={setApi}>
      <CarouselContent>
        {galleryImages.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center"
          >
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold font-funnel-display">
                  {image.title}
                </CardTitle>
                {image.description && (
                  <CardDescription>{image.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={300}
                  height={300}
                  loading="eager"
                  className={cn(
                    "w-auto h-auto object-cover aspect-auto rounded-md",
                    (image.title.toLowerCase().includes("college") ||
                      image.title.toLowerCase().includes("university") ||
                      image.title.toLowerCase().includes("emmanuel")) &&
                      image.src.toLowerCase().endsWith(".svg")
                      ? "invert dark:invert-0"
                      : "",
                  )}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className="w-full text-center">
        Slide {current} / {count}
      </div>
    </Carousel>
  );
}

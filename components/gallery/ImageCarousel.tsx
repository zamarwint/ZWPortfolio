"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { galleryImages } from "@/lib/data";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { LayoutDashboardIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DisplayImageCarousel() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mb-6 flex w-full justify-end">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="glossy-button rounded-full px-5 text-primary-foreground">
            <LayoutDashboardIcon className="size-4" />
            <span>Browse as carousel</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[calc(100%-2rem)] max-w-2xl min-w-0 overflow-x-hidden rounded-2xl border-primary/10 bg-background font-funnel-display">
          <DialogHeader>
            <DialogTitle className="text-center font-editorial-new text-2xl">
              Photo carousel
            </DialogTitle>
          </DialogHeader>
          <ImageCarousel />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ImageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const count = api?.scrollSnapList().length ?? 0;
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="mx-auto w-full min-w-0 max-w-xl">
      <Carousel
        className="relative mx-auto w-full min-w-0 px-10"
        setApi={setApi}
      >
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex min-w-0 items-center justify-center"
            >
              <Card className="mx-auto flex w-full max-w-md flex-col items-center text-center bg-transparent ring-0 outline-0 select-none">
                <CardHeader className="w-full items-center text-center">
                  <CardTitle className="font-editorial-new italic text-2xl">
                    {image.title}
                  </CardTitle>
                  {image.description && (
                    <CardDescription>{image.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex w-full min-w-0 items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={300}
                    height={300}
                    loading="eager"
                    className="h-auto max-h-[55vh] max-w-full rounded-md object-contain select-none"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-primary/15 bg-background" />
        <CarouselNext className="right-0 border-primary/15 bg-background" />
      </Carousel>
      <div className="mt-3 w-full text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Slide {current} / {count}
      </div>
    </div>
  );
}

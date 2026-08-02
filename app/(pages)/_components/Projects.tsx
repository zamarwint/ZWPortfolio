import { motion } from "motion/react";
import { media } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";
import { type CarouselApi } from "@/components/ui/carousel"

export function ProjectsSet1() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 2,
            }}
            id="projects-1"
            className="size-full flex flex-col items-center justify-around"
        >
            <div className='w-fit flex flex-col items-center justify-center gap-20'>
                <h1 className="text-6xl md:text-8xl text-center font-semibold w-md md:w-full">
                    My Projects
                </h1>
                <div className='w-fit flex flex-col lg:flex-row gap-10 items-center justify-center'>
                    <Carousel className="w-full max-w-[70%] mx-auto px-2" setApi={setApi}>
                        <CarouselContent>
                            {media.projects.map((app, index) => (
                                <CarouselItem key={index} className="md:basis-1/2">
                                    <div className="w-full max-h-full flex flex-col gap-10 items-center justify-center">
                                        <h1 className="text-2xl font-semibold">{app.title}</h1>
                                        <div>
                                            <Image src={app.image} alt="App image" width={800} height={800} loading="eager" className='w-auto h-auto object-cover aspect-auto' />
                                        </div>
                                        <p className="text-2xl text-center w-xs md:w-md">
                                            {app.description}
                                        </p>
                                        <Button className="rounded-lg py-8 px-15" size="lg" asChild>
                                            <Link
                                                href={app.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center justify-center gap-2'
                                            >
                                                <span className='text-xl'>View Project</span>
                                                <ExternalLink className='size-5' />
                                            </Link>
                                        </Button>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <div className="absolute w-full mt-10 z-10 text-muted-foreground text-center">
                            Slide {current} / {count}
                        </div>
                    </Carousel>
                </div>
            </div>
        </motion.section>
    )
}

export function ProjectsSet2() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 2,
            }}
            id="projects-2"
            className="size-full flex flex-col justify-around items-center"
        >
            <div className='w-fit flex flex-col items-center justify-center gap-20'>
                <h1 className="text-6xl md:text-8xl text-center font-semibold w-md md:w-full">
                    More of my Work
                </h1>
                <div className="w-fit flex flex-col lg:flex-row gap-5 items-center justify-center">
                    <Carousel className="w-full max-w-[50%] mx-auto px-2" setApi={setApi}>
                        <CarouselContent>
                            {media.comingSoon.map((app, index) => (
                                <CarouselItem key={index} className="md:basis-1/2">
                                    <div className="w-full max-h-full flex flex-col gap-10 items-center justify-center">
                                        <h1 className="text-2xl font-semibold">{app.title}</h1>
                                        <div>
                                            <Image src={app.image} alt="App image" width={800} height={800} loading="eager" className='w-auto h-auto object-cover aspect-auto' />
                                        </div>
                                        <p className="text-2xl text-center w-xs md:w-md">
                                            {app.description}
                                        </p>
                                        <Button className="rounded-lg py-8 px-15" size="lg" asChild>
                                            <Link
                                                href="/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center justify-center gap-2'
                                            >
                                                <span className='text-xl'>View Project</span>
                                                <ExternalLink className='size-5' />
                                            </Link>
                                        </Button>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <div className="absolute w-full mt-10 z-10 text-muted-foreground text-center">
                            Slide {current} / {count}
                        </div>
                    </Carousel>
                </div>
            </div>
        </motion.section>
    )
}
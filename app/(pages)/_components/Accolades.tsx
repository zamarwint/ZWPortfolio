import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { accoladeImages, media } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Accolades() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentAccolade, setCurrentAccolade] = useState<string>("");
    const [currentAccoladeDescription, setCurrentAccoladeDescription] = useState<string>("");

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                }}
                className='size-full flex flex-col items-center justify-around'
            >
                <div className='w-fit flex flex-col items-center justify-center gap-20'>
                    <h1 className="text-6xl md:text-8xl text-center md:text-left font-semibold">
                        Accolades
                    </h1>
                    <div className="w-[90%] h-full flex flex-col gap-10 items-center justify-center">
                        {media.accolades.map((accolade, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setCurrentAccolade(accolade.title)
                                    setCurrentAccoladeDescription(accolade.description)
                                    setIsOpen(true)
                                }}
                                className={cn('w-full h-full flex flex-col md:flex-row gap-10 items-center justify-center cursor-pointer',
                                    'p-10 bg-foreground/3 rounded-xs hover:scale-105 transition-transform duration-200')}
                            >
                                <div>
                                    <Image src={accolade.image} alt="Accolade image" width={300} height={300} className='w-auto h-auto aspect-auto invert dark:invert-0' loading="eager" />
                                </div>
                                <h1 className='text-2xl text-center md:text-left w-md'>
                                    {accolade.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="z-999">
                    <DialogHeader>
                        <DialogTitle>{currentAccolade}</DialogTitle>
                        <DialogDescription>{currentAccoladeDescription}</DialogDescription>
                    </DialogHeader>
                    <div>
                        {currentAccolade.includes("Emmanuel") && (
                            <Image src={accoladeImages.eacPortmore.image} draggable="false" alt={currentAccolade} width={500} height={500} className="rounded-lg pointer-events-none select-none w-auto h-auto aspect-auto" loading="eager" />
                        )}
                        {currentAccolade.includes("Kingston") && (
                            <Image src={accoladeImages.kingstonCollege.image} draggable="false" alt={currentAccolade} width={500} height={500} className="rounded-lg pointer-events-none select-none w-auto h-auto aspect-auto" loading="eager" />
                        )}
                        {currentAccolade.includes("University") && (
                            <Image src={accoladeImages.ucc.image} draggable="false" alt={currentAccolade} width={600} height={600} className="rounded-lg pointer-events-none select-none w-auto h-auto aspect-auto" loading="eager" />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
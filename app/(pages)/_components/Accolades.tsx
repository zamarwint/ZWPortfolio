import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { accoladeImages, media } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from "lucide-react"

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
                <div className='w-full flex flex-col items-center justify-center gap-20'>
                    <div className="w-[80%] lg:w-[60%] flex flex-col items-center justify-center gap-5">
                        <h1 className="text-6xl lg:text-8xl text-center lg:text-left font-semibold">
                            Accolades
                        </h1>
                        <p className="text-muted-foreground text-center text-wrap">Here are some of my awards, certificates, and other achievements.</p>
                    </div>
                    <div className="w-[80%] lg:w-[60%] h-full flex flex-col gap-10 items-center justify-center">
                        {media.accolades.map((accolade, index) => (
                            <Card key={index} className="mx-auto w-full">
                                <CardContent>
                                    <Collapsible className="rounded-lg data-open:bg-muted w-full">
                                        <CollapsibleTrigger asChild>
                                            <Button variant="ghost" className="w-full">
                                                <h1 className="font-semibold lg:text-lg text-wrap text-left">{accolade.title}</h1>
                                                <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                                            </Button>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                                            <CardDescription className="text-center">
                                                {accolade.description}
                                            </CardDescription>
                                            <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={() => {
                                                setCurrentAccolade(accolade.title);
                                                setCurrentAccoladeDescription(accolade.description);
                                                setIsOpen(true);
                                            }}>
                                                <Image src={accolade.image} alt="Accolade image" width={300} height={300} className='w-auto h-auto aspect-auto invert dark:invert-0' loading="eager" />
                                            </div>
                                        </CollapsibleContent>
                                    </Collapsible>
                                </CardContent>
                            </Card>
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
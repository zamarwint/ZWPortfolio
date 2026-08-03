import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { MoveLeft } from "lucide-react";

const NotFound = () => {
    return (
        <div className="w-[90%] lg:w-[80%] h-full lg:h-screen bg-background border-x border-foreground/10 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-20 p-10 border-y border-foreground/10">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-8xl max-w-3xl">
                            You&apos;re a little lost, aren&apos;t you?
                        </h1>
                        <p className="text-2xl max-w-3xl text-muted-foreground">It happens to the best of us.</p>
                    </div>
                    <Button className="rounded-md w-fit p-6" size="lg" asChild>
                        <Link href="/" className="flex items-center justify-center gap-2">
                            <MoveLeft className="size-4" />
                            <span className="text-xl">Take me back to the beginning</span>
                        </Link>
                    </Button>
                </div>
                <div className="w-fit">
                    <Image
                        src="/Not-Found.svg"
                        className="w-auto h-auto rounded-lg object-cover object-center"
                        alt="Not Found Page Image"
                        width={320}
                        height={400}
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFound;

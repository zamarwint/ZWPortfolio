import Link from "next/link";
import { notFoundPageContent } from "../lib/data";
import { Button } from "@/components/ui/button"

const NotFound = () => {
    return (
        <div className="bg-background flex flex-col p-10 lg:p-0 gap-50 md:gap-5 lg:flex-row items-center justify-around">
            <div className="flex flex-col gap-10">
                <div className="text-8xl max-w-3xl">
                    You're a little lost, aren't you?
                </div>
                <div className="text-4xl max-w-3xl">It happens to the best of us.</div>
                <Button className="rounded-full w-fit p-6 text-xl" variant="secondary" size="sm">
                    <Link href="/">
                        Take me back to the beginning
                    </Link>
                </Button>
            </div>
            <video
                src={notFoundPageContent[0].src}
                autoPlay
                loop
                muted
                className="w-300 md:w-150 h-150 object-cover"
            />
        </div>
    );
};

export default NotFound;

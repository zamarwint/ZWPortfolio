import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="bg-background flex flex-col p-10 lg:p-0 gap-50 md:gap-5 lg:flex-row items-center justify-around">
            <div className="flex flex-col gap-10">
                <div className="text-8xl max-w-3xl">
                    You&apos;re a little lost, aren&apos;t you?
                </div>
                <div className="text-4xl max-w-3xl">It happens to the best of us.</div>
                <Button className="rounded-full w-fit p-6 text-xl" variant="secondary" size="sm">
                    <Link href="/">
                        Take me back to the beginning
                    </Link>
                </Button>
            </div>
            <Image
                src="/Not-Found.svg"
                className="w-auto h-auto object-cover"
                alt="Not Found Page Image"
                width={320}
                height={400}
                loading="eager"
            />
        </div>
    );
};

export default NotFound;

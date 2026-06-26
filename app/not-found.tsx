// import NotFoundVideo from "../assets/NotFound.mp4";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="font-hoves-regular dark:bg-black dark:text-white flex flex-col gap-50 md:gap-0 lg:flex-row items-center justify-center px-40 py-30">
            <div className="flex flex-col gap-10">
                <div className="font-hoves-medium text-8xl w-2/3">
                    You're a little lost, aren't you?
                </div>
                <div className="text-4xl w-2/3">It happens to the best of us.</div>
                <Link
                    href="/"
                    className="text-2xl border border-black dark:border-white rounded-full text-center w-full md:w-1/2 p-2 cursor-pointer hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black hover:dark:border-white"
                >
                    Take me back to the beginning
                </Link>
            </div>
            <div className="w-full h-full">
                <video
                    src=""
                    autoPlay
                    loop
                    muted
                    className="w-300 md:w-150 h-150 object-cover"
                />
            </div>
        </div>
    );
};

export default NotFound;

import Image from "next/image";
import { galleryVideos } from "@/lib/data";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRouter } from "next/navigation";

export default function DisplayVideos() {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <div className="w-full flex gap-4 flex-col items-center justify-center px-10 mt-5">
      {galleryVideos.map((video, key) => (
        <div
          key={key}
          className="w-full flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start border border-border p-4 gap-4 cursor-pointer hover:scale-102 transition-transform hover:shadow-md"
          onClick={() => {
            router.push(`/videos/${video.slug}`);
          }}
        >
          <div className="size-fit flex items-center justify-center">
            <Image
              src={video.imgPrwSrcForVideo as string}
              alt={video.title}
              width={isMobile ? 200 : 150}
              height={isMobile ? 200 : 150}
              className="w-auto h-auto aspect-square object-cover cursor-pointer"
              loading="eager"
            />
          </div>
          <div className="w-full flex flex-col flex-1 items-center lg:items-start justify-center gap-2">
            <h1 className="text-2xl text-center lg:text-left">{video.title}</h1>
            <p className="text-muted-foreground text-center lg:text-left line-clamp-1">
              {video.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

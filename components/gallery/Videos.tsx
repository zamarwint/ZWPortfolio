import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { galleryVideos } from "@/lib/data";

const thumbnails: Record<string, string> = {
  "math-revision-outreach": "/pictures/eac-cam-picture.png",
  "wardpass-intro": "/works/wardpass-hero.png",
};

export default function DisplayVideos() {
  return (
    <div className="grid w-full gap-5 md:grid-cols-2">
      {galleryVideos.map((video, index) => (
        <Link
          key={video.slug}
          href={`/videos/${video.slug}`}
          className="group overflow-hidden rounded-2xl border border-primary/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="relative aspect-[1.45] overflow-hidden bg-secondary/30">
            <Image
              src={thumbnails[video.slug] ?? "/works/portfolio-hero.png"}
              alt={video.title}
              fill
              sizes="(min-width: 768px) 48vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/5 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-background/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-primary backdrop-blur">{index === 0 ? "Community" : "Product"} · {video.videoAspectRatio}</span>
            <span className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-full border border-white/45 bg-background/90 text-primary shadow-lg transition-transform group-hover:scale-110"><Play className="ml-0.5 size-4 fill-current" /></span>
            <span className="absolute bottom-5 right-5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/90">Play video</span>
          </div>
          <div className="p-5 sm:p-6">
            <div className="mb-3 flex items-center justify-between gap-3"><span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">VIDEO 0{index + 1}</span><ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
            <h2 className="font-editorial-new text-2xl tracking-tight sm:text-3xl">{video.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">{video.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, Play } from "lucide-react";
import VideoJsPlayer from "@/app/_components/videojs-player";
import type { Project } from "@/lib/projects";

export type ProjectTab = "overview" | "videos" | "documents";

const tabs: { id: ProjectTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "videos", label: "Videos" },
  { id: "documents", label: "Documents" },
];

export default function ProjectTabs({
  project,
  activeTab,
  videoUrl,
}: {
  project: Project;
  activeTab: ProjectTab;
  videoUrl?: string;
}) {
  const selectedVideo = project.videos[0];

  return (
    <section className="mt-10">
      <nav
        aria-label={`${project.title} details`}
        role="tablist"
        className="flex gap-1 overflow-x-auto border-b border-primary/10"
      >
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`/projects/${project.id}?tab=${tab.id}`}
            role="tab"
            id={`project-${project.id}-tab-${tab.id}`}
            aria-controls={`project-${project.id}-panel`}
            aria-selected={activeTab === tab.id}
            className={`shrink-0 border-b-2 px-4 py-3 text-sm transition-colors ${
              activeTab === tab.id
                ? "border-primary font-medium text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      <div
        id={`project-${project.id}-panel`}
        role="tabpanel"
        aria-labelledby={`project-${project.id}-tab-${activeTab}`}
        className="min-h-72 py-8 sm:py-10"
      >
        {activeTab === "overview" && (
          <div className="space-y-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr]">
              <div className="max-w-3xl space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="space-y-6">
                {project.skills.length > 0 && (
                  <div>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      Skills applied / services
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-primary/15 bg-card px-3 py-1.5 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.tools.length > 0 && (
                  <div>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      Tools used
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-primary/15 bg-card px-3 py-1.5 text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {project.images.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2">
                {project.images.map((image, index) => (
                  <figure
                    key={image.src}
                    className={`overflow-hidden rounded-2xl border border-primary/10 bg-card ${
                      index === 0 && project.images.length > 2
                        ? "sm:col-span-2"
                        : ""
                    }`}
                  >
                    <div
                      className={`relative bg-secondary/25 ${
                        index === 0 && project.images.length > 2
                          ? "aspect-[1.9]"
                          : "aspect-[1.4]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes={
                          index === 0 && project.images.length > 2
                            ? "(min-width: 768px) 80vw, 100vw"
                            : "(min-width: 640px) 45vw, 100vw"
                        }
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="px-4 py-3">
                      <h3 className="text-sm font-medium">{image.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {image.caption}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" &&
          (selectedVideo ? (
            <article className="grid gap-6 rounded-2xl border border-primary/10 bg-card p-4 sm:p-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
              <div className="overflow-hidden rounded-xl bg-black">
                {videoUrl ? (
                  <VideoJsPlayer
                    src={videoUrl}
                    aspectRatio={selectedVideo.aspectRatio === "9/16" ? "0.5625" : "1.7778"}
                    width="100%"
                  />
                ) : (
                  <div className="grid aspect-video place-items-center p-6 text-center text-sm text-white/75">
                    This video is temporarily unavailable. Please try again
                    later.
                  </div>
                )}
              </div>
              <div>
                <p className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  <Play className="size-3" /> Project video
                </p>
                <h2 className="font-editorial-new text-3xl tracking-tight">
                  {selectedVideo.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {selectedVideo.description}
                </p>
              </div>
            </article>
          ) : (
            <EmptyMedia kind="videos" />
          ))}

        {activeTab === "documents" &&
          (project.documents.length > 0 ? (
            <div className="grid gap-3 md:grid-cols-2">
              {project.documents.map((document, index) => (
                <a
                  key={document.src}
                  href={document.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-40 gap-4 rounded-2xl border border-primary/10 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary/70 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <FileText className="size-5" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="mb-2 flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                      Document 0{index + 1}
                      <ArrowUpRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="font-editorial-new text-xl leading-tight">
                      {document.title}
                    </span>
                    <span className="mt-2 text-sm leading-5 text-muted-foreground">
                      {document.description}
                    </span>
                    <span className="mt-auto pt-4 text-xs font-medium text-primary">
                      Open document
                    </span>
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <EmptyMedia kind="documents" />
          ))}
      </div>
    </section>
  );
}

function EmptyMedia({ kind }: { kind: "videos" | "documents" }) {
  const label = kind === "videos" ? "videos" : "documents";
  return (
    <div className="grid min-h-72 place-items-center rounded-2xl border border-dashed border-primary/15 bg-card/40 px-6 text-center">
      <div>
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-secondary/70 text-primary">
          {kind === "videos" ? <Play className="size-5" /> : <FileText className="size-5" />}
        </span>
        <h2 className="mt-4 font-editorial-new text-2xl">No {label} yet</h2>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
          Project {label} will appear here when they are available.
        </p>
      </div>
    </div>
  );
}

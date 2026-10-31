import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  number,
}: {
  project: Project;
  number?: string;
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-card transition-colors hover:border-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[1.45] overflow-hidden bg-secondary/30">
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-secondary/80 via-background to-card">
            <span className="grid size-16 place-items-center rounded-full border border-primary/15 bg-background/70 text-primary">
              <Layers3 className="size-6" />
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-background/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-primary backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {number ? `Project ${number}` : "Project"}
          </span>
          <span className="rounded-full bg-primary/7 px-3 py-1 text-[10px] text-primary">
            {project.status}
          </span>
        </div>
        <h2 className="font-editorial-new text-3xl tracking-tight">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {project.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-primary">
          Explore project
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

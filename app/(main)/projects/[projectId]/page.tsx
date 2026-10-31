import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import getVideo from "@/actions/getVideo";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectTabs, {
  type ProjectTab,
} from "@/components/projects/ProjectTabs";
import { getProjectById, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ projectId: string }>;
  searchParams: Promise<{ tab?: string | string[] }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return { title: "Project not found | Zamar Wint" };
  }

  return {
    title: `${project.title} | Projects | Zamar Wint`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
  searchParams,
}: ProjectPageProps) {
  const [{ projectId }, query] = await Promise.all([params, searchParams]);
  const project = getProjectById(projectId);

  if (!project) notFound();

  const requestedTab = Array.isArray(query.tab) ? query.tab[0] : query.tab;
  const activeTab: ProjectTab =
    requestedTab === "videos" || requestedTab === "documents"
      ? requestedTab
      : "overview";
  const video = project.videos[0];
  const videoUrl =
    activeTab === "videos" && video ? await getVideo(video.slug) : undefined;

  const otherProjects = projects.filter((item) => item.id !== project.id);

  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-10 font-funnel-display sm:px-8 md:px-14 md:pt-14">
      <Link
        href="/projects"
        className="glossy-button mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-primary-foreground"
      >
        <ArrowLeft className="size-4" /> All projects
      </Link>
      <PageIntro
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        index={String(projects.indexOf(project) + 1).padStart(2, "0")}
      />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="rounded-full bg-primary/8 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
          {project.status}
        </span>
        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Visit live project <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>

      <ProjectTabs
        project={project}
        activeTab={activeTab}
        videoUrl={videoUrl}
      />

      <section className="mt-16 border-t border-primary/10 pt-10 sm:mt-20 sm:pt-12">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              Keep exploring
            </p>
            <h2 className="font-editorial-new text-4xl tracking-tight sm:text-5xl">
              More projects.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            All projects <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((otherProject, index) => (
            <ProjectCard
              key={otherProject.id}
              project={otherProject}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

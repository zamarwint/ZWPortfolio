import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import { galleryDocuments } from "@/lib/data";

export default function DisplayDocuments() {
  return (
    <div className="grid w-full gap-3 md:grid-cols-2">
      {galleryDocuments.map((document, index) => (
        <Link
          key={document.id}
          href={document.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-44 gap-4 rounded-2xl border border-primary/10 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-5 sm:p-6"
        >
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary/70 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><FileText className="size-5" /></span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="mb-2 flex items-center justify-between gap-3"><span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">DOCUMENT 0{index + 1}</span><ArrowUpRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
            <span className="font-editorial-new text-xl leading-tight tracking-tight sm:text-2xl">{document.title}</span>
            <span className="mt-2 text-sm leading-5 text-muted-foreground">{document.description}</span>
            <span className="mt-auto pt-4 text-xs font-medium text-primary">Open PDF</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

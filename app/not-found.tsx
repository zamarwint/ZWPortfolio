import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteShell from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="flex min-h-[70vh] items-center px-5 py-16 font-funnel-display sm:px-8 md:px-14">
        <div className="grid w-full items-center gap-10 border-y border-primary/10 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:py-16">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">404 / Page not found</p>
            <h1 className="max-w-3xl font-editorial-new text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">A little off the map.</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">The page you&apos;re looking for may have moved. Let&apos;s get you back to the work.</p>
            <Link href="/" className="glossy-button mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground"><ArrowLeft className="size-4" /> Back to the portfolio</Link>
          </div>
          <div className="mx-auto w-full max-w-[300px] rounded-3xl border border-primary/10 bg-card/70 p-5 sm:max-w-[360px] md:p-8">
            <Image src="/vectors/not-found.svg" className="h-auto w-full" alt="Illustration for the not found page" width={360} height={400} priority />
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

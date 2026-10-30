import PageIntro from "@/components/PageIntro";
import DisplayDocuments from "@/components/gallery/Documents";

export default function Documents() {
  return (
    <main id="gallery" className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-14 font-funnel-display sm:px-8 md:px-14 md:pt-20">
      <PageIntro eyebrow="Project notes" title="Plans & documentation." description="Explore the thinking, design systems, and technical notes behind selected projects." index="03" />
      <DisplayDocuments />
    </main>
  );
}

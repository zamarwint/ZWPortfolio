import PageIntro from "@/components/PageIntro";
import DisplayVideos from "@/components/gallery/Videos";

export default function Videos() {
  return (
    <main id="gallery" className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-14 font-funnel-display sm:px-8 md:px-14 md:pt-20">
      <PageIntro eyebrow="In motion" title="Stories in motion." description="Walkthroughs, progress reports, and a few moments of learning through the work." index="02" />
      <DisplayVideos />
    </main>
  );
}

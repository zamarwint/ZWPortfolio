import PageIntro from "@/components/PageIntro";
import DisplayImages from "@/components/gallery/Images";

export default function Photos() {
  return (
    <main id="gallery" className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-14 font-funnel-display sm:px-8 md:px-14 md:pt-20">
      <PageIntro eyebrow="Visual archive" title="Photos & process." description="A closer look at the projects, people, and moments behind the work." index="01" />
      <DisplayImages />
    </main>
  );
}

import StrengthIcon, { type StrengthKind } from "./StrengthIcon";

const strengths: { icon: StrengthKind; title: string; text: string }[] = [
  { icon: "security", title: "Security-minded", text: "Building with privacy and trust at the core, from the first sketch to the final release." },
  { icon: "systems", title: "Systems thinking", text: "Connecting the product, its people, and the technology into a thoughtful whole." },
  { icon: "clarity", title: "Made to feel clear", text: "Turning complex ideas into approachable tools and experiences people enjoy using." },
];

export default function Strengths() {
  return (
    <section className="border-y border-primary/10 bg-card/45">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-9 sm:px-8 md:grid-cols-[0.65fr_1.35fr] md:items-center md:px-14 md:py-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">A few things I bring</p>
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {strengths.map(({ icon, title, text }) => (
            <div key={title} className="flex gap-3">
              <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-primary/8 text-primary"><StrengthIcon kind={icon} /></span>
              <div><h2 className="text-sm font-medium">{title}</h2><p className="mt-1.5 text-xs leading-5 text-muted-foreground">{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

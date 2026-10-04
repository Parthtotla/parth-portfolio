import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-4xl px-5 py-28 sm:px-8">
      <SectionHeading index="05" label="Journey" title="My journey so far." />
      <ol className="relative ml-3 border-l border-white/15">
        {TIMELINE.map((t) => (
          <Reveal key={t.title} delay={0.05}>
            <li className="relative pb-12 pl-8 last:pb-0">
              <span aria-hidden className={`absolute -left-[7px] top-3 h-3.5 w-3.5 rounded-full border-2 border-ink ${"current" in t ? "bg-accent shadow-[0_0_20px_4px_rgba(124,92,255,.7)]" : "bg-zinc-500"}`} />
              <p className="text-sm text-zinc-500">{t.year}</p>
              <h3 className={`font-display mt-1 font-semibold ${"current" in t ? "gradient-text text-4xl sm:text-5xl" : "text-2xl"}`}>{t.title}</h3>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

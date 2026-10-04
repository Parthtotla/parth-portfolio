import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { HOW_STEPS } from "@/lib/data";

export default function HowIBuild() {
  return (
    <section id="how-i-build" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading index="03" label="How I build" title="AI is part of my workflow." />
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">I don&apos;t type one prompt and accept whatever comes back. I use AI throughout the process: to research, question assumptions, explore solutions, write and understand code, debug problems, compare approaches, learn unfamiliar concepts, and iterate faster.</p>
      </Reveal>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_STEPS.map(([title, note], i) => (
          <Reveal key={title} delay={(i % 4) * 0.08}>
            <li className={`card h-full list-none p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 ${title === "AI-assisted build" ? "border-accent/40 shadow-[0_0_40px_-12px_rgba(124,92,255,.6)]" : ""}`}>
              <span className="font-display text-sm text-accent-soft">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{note}</p>
            </li>
          </Reveal>
        ))}
      </ol>
      <Reveal><p className="font-display mt-14 text-3xl font-semibold sm:text-4xl">AI doesn&apos;t replace my thinking. <span className="gradient-text">It amplifies it.</span></p></Reveal>
    </section>
  );
}

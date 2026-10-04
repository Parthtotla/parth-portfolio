import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import ElvarasFlow from "./ElvarasFlow";
import { ELVARAS_TAGS } from "@/lib/data";

export function PhoneMock({ label = "Screenshot placeholder" }: { label?: string }) {
  return (
    <div role="img" aria-label="Placeholder device frame for an Elvaras app screenshot" className="mx-auto w-44 rounded-[2.2rem] border border-white/15 bg-black p-2 shadow-[0_30px_80px_-20px_rgba(124,92,255,.5)] sm:w-52">
      <div className="flex aspect-[9/19] flex-col gap-2 rounded-[1.7rem] bg-gradient-to-b from-white/[0.06] to-transparent p-3">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-white/15" />
        <div className="mt-3 h-3 w-1/2 rounded bg-white/15" />
        {[0, 1, 2, 3].map((i) => <div key={i} className="h-10 rounded-xl border border-white/10 bg-white/[0.04]" />)}
        <p className="mt-auto text-center text-[10px] text-zinc-500">{label}</p>
      </div>
    </div>
  );
}

export default function Featured() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 pt-16 sm:px-8">
      <Reveal>
        <article className="card relative overflow-hidden p-6 sm:p-10 lg:p-14">
          <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-[110px]" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="flex flex-wrap gap-2"><span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent-soft">FEATURED PROJECT</span><span className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300">Built hands-on. AI-assisted.</span></div>
              <h2 className="font-display mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">Elvaras</h2>
              <p className="font-display mt-3 text-xl text-zinc-300 sm:text-2xl">Your timetable organizes your notes.</p>
              <p className="mt-6 max-w-lg leading-relaxed text-zinc-400">Student notes are often disconnected from the actual structure of college life. I designed Elvaras around the student&apos;s timetable, connecting subjects, chapters, lectures and notes into one workflow.</p>
              <p className="mt-4 max-w-lg leading-relaxed text-zinc-400">I worked hands-on across the product, from the idea and structure to UI/UX, feature thinking, development, debugging and iteration. AI acted as a multiplier throughout: helping me research, reason through problems, explore implementation approaches and move faster. I didn&apos;t just prompt it. I built it.</p>
              <ul className="mt-6 flex flex-wrap gap-2">{ELVARAS_TAGS.map((t) => <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">{t}</li>)}</ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton href="/work/elvaras">View Case Study</MagneticButton>
                <MagneticButton variant="ghost" disabled note="link coming soon">View Project</MagneticButton>
              </div>
            </div>
            <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <PhoneMock />
              <ElvarasFlow />
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PILLARS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading index="01" label="About" title="A little about me." />
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-6">
          <p className="font-display text-2xl leading-snug text-white sm:text-3xl">I&apos;m a BBA with AI student interested in business, technology, AI and product building. I enjoy taking an idea, understanding the problem behind it, and figuring out how it can become something useful.</p>
          <p className="max-w-lg leading-relaxed text-zinc-400">What makes the way I work different is how I use AI. I don&apos;t treat it as a shortcut for random outputs. I use it as a development and problem-solving partner, helping me research, explore ideas, build, debug, test, learn and iterate faster.</p>
          <p className="max-w-lg leading-relaxed text-zinc-400">I&apos;m especially interested in the space where business meets technology: product thinking, AI, entrepreneurship, marketing and design. I don&apos;t need to know everything before I start. I know how to figure things out.</p>
        </Reveal>
        <ul className="grid grid-cols-2 gap-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <li className="card group h-full list-none p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50">
                <span className="font-display text-sm text-accent-soft">{p.n}</span>
                <h3 className="font-display mt-10 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{p.note}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

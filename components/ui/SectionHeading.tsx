import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
export default function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal className="flex items-center gap-4 text-xs text-zinc-400">
        <span className="font-display text-accent-soft">{index}</span>
        <span className="h-px w-16 bg-white/15" />
        <span>{label}</span>
      </Reveal>
      <AnimatedText as="h2" text={title} className="font-display mt-6 block text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl" />
    </div>
  );
}

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading index="02" label="Work" title="Things I've been building." />
      <ul className="grid gap-5 md:grid-cols-3">
        {PROJECTS.map((p, i) => <Reveal key={p.title} delay={i * 0.1}><li className="h-full list-none"><ProjectCard p={p} /></li></Reveal>)}
      </ul>
    </section>
  );
}

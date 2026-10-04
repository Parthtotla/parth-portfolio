import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  const body = (
    <>
      <div className="flex items-start justify-between">
        <span className="font-display text-sm text-accent-soft">{p.n}</span>
        <ArrowUpRight className="text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" aria-hidden />
      </div>
      <p className="mt-10 text-xs text-zinc-500">{p.category}</p>
      <h3 className="font-display mt-2 text-2xl font-semibold">{p.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">{t}</li>)}</ul>
    </>
  );
  const cls = "card group block h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-accent/60 hover:shadow-[0_0_40px_-10px_rgba(124,92,255,.5)]";
  return p.href ? <Link href={p.href} className={cls}>{body}</Link> : <div className={cls}>{body}</div>;
}

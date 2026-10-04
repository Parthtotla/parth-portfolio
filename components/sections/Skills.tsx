"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  const cats = Object.keys(SKILLS);
  const [cat, setCat] = useState(cats[0]);
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <SectionHeading index="04" label="Skills" title="What I work with." />
      <div role="tablist" aria-label="Skill categories" className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${cat === c ? "border-accent bg-accent/20 text-white" : "border-white/10 text-zinc-400 hover:text-white"}`}>{c}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.ul key={cat} role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS[cat].map((s) => (
            <li key={s.name} className="card flex items-center justify-between gap-4 p-5">
              <span className="font-display text-lg">{s.name}</span>
              <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">{s.level}</span>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </section>
  );
}

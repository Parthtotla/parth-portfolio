"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { FLOW } from "@/lib/data";

export default function ElvarasFlow({ horizontal = false }: { horizontal?: boolean }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % FLOW.length), 1800);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <ol className={`flex ${horizontal ? "flex-col items-stretch gap-2 md:flex-row md:items-center" : "flex-col items-stretch gap-2"}`} aria-label="Elvaras product flow">
      {FLOW.map((s, i) => (
        <li key={s} className={`flex ${horizontal ? "flex-col items-center gap-2 md:flex-1 md:flex-row" : "flex-col items-center gap-2"}`}>
          <button onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} aria-pressed={active === i}
            className={`relative w-full rounded-2xl border px-5 py-3 text-left text-sm transition-colors ${active === i ? "border-accent bg-accent/15 text-white" : "border-white/10 text-zinc-400"}`}>
            {active === i && <motion.span layoutId={horizontal ? "flow-h" : "flow-v"} className="absolute inset-0 -z-10 rounded-2xl bg-accent/10 shadow-[0_0_30px_rgba(124,92,255,.35)]" />}
            {s}
          </button>
          {i < FLOW.length - 1 && <ArrowDown size={14} className="shrink-0 text-zinc-600 md:-rotate-90" aria-hidden />}
        </li>
      ))}
    </ol>
  );
}

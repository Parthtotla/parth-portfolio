"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import MagneticButton from "@/components/ui/MagneticButton";

const words = "I turn ideas into products.".split(" ");
const chips = [["Business", "top-[8%] left-[6%]"], ["Technology", "top-[34%] right-[2%]"], ["AI", "bottom-[26%] left-[0%]"], ["Product", "bottom-[4%] right-[14%]"]] as const;

export default function Hero() {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 }), sy = useSpring(my, { stiffness: 60, damping: 20 });
  const orbX = useTransform(sx, [-1, 1], [-60, 60]), orbY = useTransform(sy, [-1, 1], [-40, 40]);
  const chipX = useTransform(sx, [-1, 1], [14, -14]), chipY = useTransform(sy, [-1, 1], [10, -10]);
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-32 sm:px-8"
      onMouseMove={(e) => { mx.set((e.clientX / window.innerWidth) * 2 - 1); my.set((e.clientY / window.innerHeight) * 2 - 1); }}>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-6 text-xs tracking-[0.3em] text-accent-soft">HELLO, I&apos;M PARTH</motion.p>
          <h1 className="font-display text-[clamp(2.9rem,9vw,7.2rem)] font-semibold leading-[0.95] tracking-tight" aria-label="I turn ideas into products.">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom" aria-hidden>
                <motion.span className={`inline-block ${i >= 3 ? "gradient-text" : ""}`} initial={{ y: "115%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            BBA with AI student exploring the intersection of business, AI, technology and product design.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.8 }} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#work">Explore My Work</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">Let&apos;s Connect</MagneticButton>
          </motion.div>
        </div>
        <div aria-hidden className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
          <motion.div style={{ x: orbX, y: orbY }} className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_30%_30%,#a594ff,#7c5cff_40%,#1b1445_75%)] opacity-80 blur-[2px] shadow-[0_0_120px_20px_rgba(124,92,255,.35)]" />
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[-8%] rounded-full border border-dashed border-white/10" />
          {chips.map(([t, pos]) => (
            <motion.span key={t} style={{ x: chipX, y: chipY }} className={`absolute ${pos} rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm backdrop-blur-md`}>{t}</motion.span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-zinc-500">SCROLL TO EXPLORE ↓</div>
    </section>
  );
}

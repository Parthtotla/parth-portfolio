"use client";
import { motion } from "motion/react";
export default function AnimatedText({ text, className = "", delay = 0, as: Tag = "span" }: { text: string; className?: string; delay?: number; as?: "span" | "h1" | "h2" | "p" }) {
  const M = motion[Tag] as typeof motion.span;
  return (
    <M className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em]" aria-hidden>
          <motion.span className="inline-block" initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}>{w}&nbsp;</motion.span>
        </span>
      ))}
    </M>
  );
}

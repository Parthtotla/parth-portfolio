"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0, 1, 1, 0.3]);
  return (
    <section ref={ref} className="relative px-5 py-36 sm:px-8 md:py-52">
      <motion.div style={{ y, opacity }} className="mx-auto max-w-6xl">
        <blockquote>
          <p className="font-display text-[clamp(2.8rem,10vw,8.5rem)] font-semibold leading-[0.95] tracking-tight">&ldquo;Don&apos;t just have ideas. <span className="gradient-text">Build them.</span>&rdquo;</p>
        </blockquote>
        <p className="mt-10 max-w-md text-lg text-zinc-400">I believe the best way to learn is to turn curiosity into something tangible.</p>
      </motion.div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
export default function Cursor() {
  const [on, setOn] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 28 }), sy = useSpring(y, { stiffness: 300, damping: 28 });
  useEffect(() => {
    const ok = window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ok) return;
    setOn(true);
    const m = (e: MouseEvent) => { x.set(e.clientX - 16); y.set(e.clientY - 16); };
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, [x, y]);
  if (!on) return null;
  return <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border border-accent-soft/60 mix-blend-screen" />;
}

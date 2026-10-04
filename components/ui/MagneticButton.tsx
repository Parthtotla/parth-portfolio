"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Props { children: React.ReactNode; href?: string; variant?: "solid" | "ghost"; disabled?: boolean; note?: string }
export default function MagneticButton({ children, href, variant = "solid", disabled, note }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const move = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect(); if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25); y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const reset = () => { x.set(0); y.set(0); };
  const base = "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300";
  const style = variant === "solid" ? "bg-white text-black hover:bg-accent-soft" : "border border-white/15 text-white hover:bg-white/10";
  const inner = <>{children}<ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden /></>;
  return (
    <motion.span ref={ref} style={{ x, y }} onMouseMove={move} onMouseLeave={reset} className="inline-block">
      {disabled || !href ? (
        <span role="link" aria-disabled="true" title={note} className={`${base} ${style} cursor-not-allowed opacity-50`}>{children}{note && <span className="text-xs opacity-70">({note})</span>}</span>
      ) : href.startsWith("/") ? (
        <Link href={href} className={`${base} ${style}`}>{inner}</Link>
      ) : (
        <a href={href} className={`${base} ${style}`}>{inner}</a>
      )}
    </motion.span>
  );
}

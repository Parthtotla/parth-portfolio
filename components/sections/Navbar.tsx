"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";

export default function Navbar({ home = "#top" }: { home?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const prefix = home === "#top" ? "" : "/";
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav aria-label="Main" className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled || open ? "border border-white/10 bg-black/50 backdrop-blur-xl" : "border border-transparent"}`}>
        <a href={prefix || "#top"} className="font-display text-sm font-semibold tracking-[0.18em]">PARTH TOTLA</a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => <a key={n.href} href={prefix + n.href} className="text-sm text-zinc-400 transition-colors hover:text-white">{n.label}</a>)}
        </div>
        <span className="hidden items-center gap-2 text-xs text-zinc-300 lg:flex"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden />Available for opportunities</span>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl md:hidden">
            <ul className="space-y-1">{NAV.map((n) => <li key={n.href}><a onClick={() => setOpen(false)} href={prefix + n.href} className="font-display block py-3 text-2xl">{n.label}</a></li>)}</ul>
            <p className="mt-4 flex items-center gap-2 text-xs text-zinc-400"><span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />Available for opportunities</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

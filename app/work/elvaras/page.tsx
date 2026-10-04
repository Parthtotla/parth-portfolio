import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GradientBackground from "@/components/ui/GradientBackground";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ElvarasFlow from "@/components/sections/ElvarasFlow";
import { PhoneMock } from "@/components/sections/Featured";
import Reveal from "@/components/ui/Reveal";
import { ELVARAS, ELVARAS_TAGS } from "@/lib/data";

export const metadata: Metadata = { title: "Elvaras — Case Study | Parth Totla", description: "Case study: Elvaras, a student notes and timetable platform where your timetable organizes your notes." };

function Block({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="grid gap-6 border-t border-white/10 py-14 md:grid-cols-[220px_1fr]">
        <p className="text-sm text-accent-soft">{label}</p>
        <div><h2 className="font-display mb-5 text-3xl font-semibold sm:text-4xl">{title}</h2>{children}</div>
      </section>
    </Reveal>
  );
}
const Chips = ({ items }: { items: string[] }) => <ul className="flex flex-wrap gap-2">{items.map((t) => <li key={t} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">{t}</li>)}</ul>;

export default function ElvarasPage() {
  return (
    <>
      <GradientBackground /><Navbar home="/" />
      <main className="mx-auto max-w-5xl px-5 pb-10 pt-36 sm:px-8">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"><ArrowLeft size={16} aria-hidden />Back to work</Link>
        <header className="mt-10 grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent-soft">CASE STUDY</span>
            <h1 className="font-display mt-6 text-6xl font-semibold tracking-tight sm:text-8xl">Elvaras</h1>
            <p className="font-display mt-4 text-2xl text-zinc-300">Your timetable organizes your notes.</p>
          </div>
          <PhoneMock />
        </header>
        <Block label="Overview" title="What is Elvaras?"><p className="max-w-2xl leading-relaxed text-zinc-400">Elvaras is a student-focused notes and timetable platform. I worked hands-on across the product, from the idea and structure to UI/UX, feature thinking, development, debugging and iteration. AI acted as a multiplier throughout, helping me research, reason through problems, explore implementation approaches and move faster. I didn&apos;t just prompt it. I built it.</p><p className="mt-4 text-sm text-accent-soft">The product is mine. AI is the multiplier.</p><div className="mt-6"><Chips items={ELVARAS_TAGS} /></div></Block>
        <Block label="The Problem" title="Scattered by default"><p className="max-w-2xl leading-relaxed text-zinc-400">{ELVARAS.problem}</p></Block>
        <Block label="The Idea" title={ELVARAS.idea}><p className="max-w-2xl text-zinc-400">Use the structure students already follow every week as the backbone for everything they write down.</p></Block>
        <Block label="Product Flow" title="From timetable to notes"><ElvarasFlow horizontal /></Block>
        <Block label="Features" title="Product features"><ul className="grid gap-3 sm:grid-cols-2">{ELVARAS.features.map((f) => <li key={f} className="card px-5 py-4 text-zinc-300">{f}</li>)}</ul></Block>
        <Block label="Technology" title="What Elvaras is built with"><Chips items={ELVARAS.tech} /></Block>
        <Block label="My Role" title="What I did"><Chips items={ELVARAS.role} /></Block>
        <Block label="Business Model" title="Free + Pro">
          <p className="mb-5 text-sm text-zinc-500">Planned / proposed pricing concept. Not current revenue.</p>
          <ul className="grid gap-4 sm:grid-cols-2">{ELVARAS.pricing.map((p) => <li key={p.plan} className="card p-6"><p className="text-sm text-zinc-500">{p.plan} (proposed)</p><p className="font-display mt-2 text-3xl">{p.price}</p></li>)}</ul>
        </Block>
        <Block label="Roadmap" title="Where it could go"><Chips items={ELVARAS.roadmap} /></Block>
        <Reveal><p className="font-display border-t border-white/10 py-24 text-3xl font-semibold leading-tight sm:text-5xl">Built from a simple question: what if your timetable could organize everything you learn?</p></Reveal>
      </main>
      <Footer prefix="/" />
    </>
  );
}

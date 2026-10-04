import { EXPLORING } from "@/lib/data";
export default function Exploring() {
  const row = [...EXPLORING, ...EXPLORING];
  return (
    <section aria-labelledby="exploring" className="overflow-hidden border-y border-white/10 py-16">
      <h2 id="exploring" className="font-display mb-10 px-5 text-center text-3xl font-semibold sm:text-4xl">Currently exploring</h2>
      <div className="marquee">
        <ul className="marquee-track flex gap-4">
          {row.map((t, i) => <li key={i} aria-hidden={i >= EXPLORING.length} className="font-display whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-7 py-3 text-xl text-zinc-300 sm:text-2xl">{t}</li>)}
        </ul>
      </div>
    </section>
  );
}

export default function Footer({ prefix = "" }: { prefix?: string }) {
  const links = ["About", "Work", "Skills", "Contact"];
  return (
    <footer className="mx-auto max-w-6xl border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div><p className="font-display font-semibold tracking-[0.18em]">PARTH TOTLA</p><p className="mt-2 text-sm text-zinc-500">Building. Learning. Exploring.</p></div>
        <nav aria-label="Footer"><ul className="flex gap-6 text-sm text-zinc-400">{links.map((l) => <li key={l}><a className="hover:text-white" href={`${prefix}#${l.toLowerCase()}`}>{l}</a></li>)}</ul></nav>
      </div>
      <div className="mt-10 flex flex-col justify-between gap-2 text-xs text-zinc-600 sm:flex-row"><p>© 2026 Parth Totla</p><p>Made with curiosity + code.</p></div>
    </footer>
  );
}

import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { LINKS, isPlaceholder } from "@/lib/data";

export default function Contact() {
  const email = isPlaceholder(LINKS.email) ? undefined : `mailto:${LINKS.email}`;
  const items = [
    { label: "Email Me", href: email, variant: "solid" as const },
    { label: "LinkedIn", href: isPlaceholder(LINKS.linkedin) ? undefined : LINKS.linkedin, variant: "ghost" as const },
    { label: "GitHub", href: isPlaceholder(LINKS.github) ? undefined : LINKS.github, variant: "ghost" as const },
  ];
  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 px-6 py-20 text-center sm:px-12 md:py-28">
          <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#1b1445,#3a2a9c,#14306b,#1b1445)] bg-[length:300%_300%] opacity-70 [animation:shift_14s_ease-in-out_infinite_alternate]" />
          <p className="text-xs tracking-[0.3em] text-accent-soft">CONTACT</p>
          <h2 className="font-display mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">Let&apos;s build something.</h2>
          <p className="mx-auto mt-6 max-w-lg text-zinc-300">Have an idea, project, opportunity, or just want to talk about technology and startups?</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {items.map((i) => <MagneticButton key={i.label} href={i.href} variant={i.variant} disabled={!i.href} note={i.href ? undefined : "link not added yet"}>{i.label}</MagneticButton>)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

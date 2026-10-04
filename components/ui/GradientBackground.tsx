export default function GradientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/25 blur-[140px]" />
      <div className="blob absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-500/15 blur-[140px]" style={{ animationDelay: "-6s" }} />
      <div className="blob absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-[140px]" style={{ animationDelay: "-12s" }} />
    </div>
  );
}

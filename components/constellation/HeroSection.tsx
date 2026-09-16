export function HeroSection() {
  return (
    <section id="hero" className="pointer-events-none relative z-10 min-h-[100svh]">
      <div
        className="pointer-events-auto absolute inset-x-0 bottom-0 z-0 h-[16vh]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-5 pb-8 pt-24 sm:px-8">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.42em] text-glow/90">
            Agency constellation
          </p>
          <h1 className="font-display mt-3 text-5xl font-semibold tracking-[0.18em] text-white sm:text-7xl">
            ASTRIVO
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Drag to orbit. Hover a node. Click to talk.
          </p>
        </div>
        <a
          href="#fleet"
          className="pointer-events-auto mx-auto flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted transition hover:text-glow"
        >
          <span>Scroll</span>
          <span
            aria-hidden="true"
            className="block h-8 w-px bg-linear-to-b from-magenta to-transparent"
          />
        </a>
      </div>
    </section>
  );
}

const NAV = [
  { href: "#fleet", label: "Meet the Fleet", short: "Fleet" },
  { href: "#about", label: "About", short: "About" },
];

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <a
        href="#fleet"
        className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-3 focus:z-50 focus:rounded-full focus:bg-magenta focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:tracking-[0.18em] focus:text-white focus:uppercase"
      >
        Skip to Meet the Fleet
      </a>
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#hero"
          className="font-display text-sm font-semibold tracking-[0.32em] text-white"
        >
          ASTRIVO
        </a>
        <nav aria-label="Page" className="flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-muted">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-glow"
            >
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

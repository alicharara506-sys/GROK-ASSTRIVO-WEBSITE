const NAV = [
  { href: "#fleet", label: "Meet the Fleet" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
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
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

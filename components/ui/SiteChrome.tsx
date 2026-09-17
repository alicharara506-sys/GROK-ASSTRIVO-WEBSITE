import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_MAILTO, SITE_NAME } from "@/lib/constants";

const NAV = [
  { href: "/#fleet", label: "Meet the Fleet", short: "Fleet" },
  { href: "/#about", label: "About", short: "About" },
];

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 bg-linear-to-b from-black/55 via-black/20 to-transparent">
      <Link
        href="/#fleet"
        className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-3 focus:z-50 focus:rounded-full focus:bg-magenta focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:tracking-[0.18em] focus:text-white focus:uppercase"
      >
        Skip to Meet the Fleet
      </Link>
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-[0.32em] text-white"
        >
          {SITE_NAME.toUpperCase()}
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-muted"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-glow"
            >
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/8 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted/80">
          Attention is earned, never bought.
        </p>
        <p className="text-xs tracking-[0.16em] text-muted/80">
          © {new Date().getFullYear()} {SITE_NAME} Agency
        </p>
        <a
          href={CONTACT_MAILTO}
          className="text-xs tracking-[0.14em] text-fog/80 underline-offset-4 transition hover:text-white hover:underline"
        >
          Contact {SITE_NAME} · {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}

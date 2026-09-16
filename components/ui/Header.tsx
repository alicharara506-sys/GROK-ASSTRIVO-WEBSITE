import { Logo } from "@/components/ui/Logo";

const links = [
  { href: "#fleet", label: "Fleet" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="pointer-events-auto rounded-full focus-visible:outline-none"
        >
          <Logo />
        </a>
        <nav aria-label="Primary" className="pointer-events-auto flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium tracking-[0.18em] text-white/70 uppercase transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

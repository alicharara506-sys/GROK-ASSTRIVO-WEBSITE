import { AboutCta } from "@/components/about/AboutCta";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
        <div>
          <p className="text-[0.7rem] tracking-[0.42em] text-[#ff4ec8] uppercase">
            About
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Growth, built end to end.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-white/72 sm:text-lg">
          <p>
            Astrivo is a full-stack growth agency. Branding, digital marketing,
            software, analytics, and AI — one team, one spine: outcomes you can
            feel in the business, not noise you can buy.
          </p>
          <p>
            We shape how you’re seen, how you’re found, what you ship, and what
            the numbers say next. Attention is earned, never bought — so every
            brief starts with who you’re for, and ends with work that moves
            them.
          </p>
          <p>
            Behind the work is a fleet of specialists (and the AI that backs
            them) built to move fast without getting sloppy. You bring the
            ambition. We bring the system.
          </p>
          <AboutCta />
        </div>
      </div>
    </section>
  );
}

"use client";

import { getAgent } from "@/lib/agents";
import { useAgentUi } from "@/components/ui/AgentUiProvider";

const HEADLINE = "Growth, built end to end.";

const BODY = [
  "Astrivo is a full-stack growth agency. Branding, digital marketing, software, analytics, and AI — one team, one spine: outcomes you can feel in the business, not noise you can buy.",
  "We shape how you’re seen, how you’re found, what you ship, and what the numbers say next. Attention is earned, never bought — so every brief starts with who you’re for, and ends with work that moves them.",
  "Behind the work is a fleet of specialists (and the AI that backs them) built to move fast without getting sloppy. You bring the ambition. We bring the system.",
];

const CTA = "Talk to the fleet — let’s put Astrivo to work on yours.";

export function AboutSection() {
  const { select } = useAgentUi();
  const astro = getAgent("astro");

  return (
    <section id="about" className="relative z-10 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.42em] text-glow/90">
            About
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {HEADLINE}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {BODY.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="panel-glass rounded-3xl p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-glow/80">
            {astro.name}
          </p>
          <p className="mt-3 font-display text-xl text-white">{astro.role}</p>
          <button
            type="button"
            onClick={() => select("astro")}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-magenta to-violet px-5 py-3.5 text-left text-sm font-semibold leading-snug tracking-wide text-white shadow-[0_0_32px_rgba(255,43,214,0.35)] transition hover:brightness-110"
          >
            {CTA}
          </button>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import Link from "next/link";
import { CONTACT_EMAIL, CREED } from "@/lib/constants";

const STORY = [
  "Astrivo was built for founders who were tired of buying noise. Agencies sold clicks, logos, and dashboards in separate boxes — and called the pieces a “stack.” Growth doesn’t work that way.",
  "So we built a fleet: one spine, ten specialists, and a master agent who routes the work. Branding, marketing, software, analytics, AI, communications, delivery, and the money layer — not as silos, but as one story told with precision. Attention is earned, never bought. Every brief starts with who you’re for, and ends with work that moves them.",
];

const VISION =
  "A world where every ambitious brand has a full-stack growth system — human judgment, specialist craft, and AI that works like a teammate — so attention compounds into revenue without the circus.";

const MISSION =
  "Help businesses earn attention and turn it into outcomes: clearer brands, sharper funnels, software that scales, numbers you can trust, and AI that saves real hours — delivered by a coordinated fleet under one creed.";

const CRAFT = [
  {
    title: "Belief before beauty",
    body: "We dig for creation story, audience, and the space only you can own.",
  },
  {
    title: "Narrative in every channel",
    body: "From brand foundation to ad creative to product UI to the email that closes the loop.",
  },
  {
    title: "Proof in the plot",
    body: "DATO’s numbers and QUANTO’s score keep the story honest; if it can’t be defended, it doesn’t ship.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <p
        aria-hidden="true"
        className="creed-watermark pointer-events-none absolute -right-4 top-16 hidden max-w-[14rem] text-right font-editorial text-5xl leading-none text-white/6 sm:block lg:text-7xl"
      >
        {CREED}
      </p>
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.7rem] uppercase tracking-[0.42em] text-violet">
          About
        </p>
        <h2 className="font-display mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.12]">
          Stories that earn attention. Systems that grow businesses.
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-10">
            <AboutBlock kicker="The story" title="Built as a fleet, not a stack">
              {STORY.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </AboutBlock>
            <AboutBlock kicker="Vision" title="Attention that compounds">
              <p>{VISION}</p>
            </AboutBlock>
            <AboutBlock kicker="Mission" title="Earn it. Turn it into outcomes.">
              <p>{MISSION}</p>
            </AboutBlock>
          </div>

          <div className="panel-glass relative rounded-3xl p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-violet">
              Our craft
            </p>
            <h3 className="font-display mt-2 text-2xl text-white">
              Storytelling
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Storytelling is not decoration at Astrivo. It is the craft that
              holds the stack together. We don’t sell “content.” We build belief
              systems customers can feel — and businesses can measure.
            </p>
            <ul className="mt-8 space-y-5">
              {CRAFT.map((item) => (
                <li key={item.title}>
                  <p className="font-display text-sm tracking-wide text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3">
              <Link
                href="#fleet"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-magenta to-violet px-5 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_32px_rgba(255,43,214,0.35)] transition hover:brightness-110"
              >
                Explore the Fleet
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold tracking-wide text-fog transition hover:border-magenta/50 hover:text-white"
              >
                Contact Astrivo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBlock({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-magenta/80">
        {kicker}
      </p>
      <h3 className="font-display mt-2 text-xl text-white sm:text-2xl">
        {title}
      </h3>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
        {children}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ABOUT, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/constants";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.7rem] uppercase tracking-[0.42em] text-glow/90">
          About Astrivo
        </p>
        <h2 className="font-display mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.12]">
          {ABOUT.headline}
        </h2>
        <p className="mt-5 font-serif text-lg italic text-fog/70 sm:text-xl">
          {ABOUT.creed}
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <article>
            <h3 className="text-[0.7rem] uppercase tracking-[0.32em] text-magenta">
              The story
            </h3>
            <div className="mt-4 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {ABOUT.story.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="grid gap-5">
            <article className="panel-glass rounded-3xl p-7 sm:p-8">
              <h3 className="text-[0.7rem] uppercase tracking-[0.32em] text-glow/85">
                Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-fog/90">
                {ABOUT.vision}
              </p>
            </article>
            <article className="panel-glass rounded-3xl p-7 sm:p-8">
              <h3 className="text-[0.7rem] uppercase tracking-[0.32em] text-glow/85">
                Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-fog/90">
                {ABOUT.mission}
              </p>
            </article>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Our craft: storytelling
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {ABOUT.craftIntro}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ABOUT.craft.map((item) => (
              <article key={item.title} className="panel-glass rounded-3xl p-6 sm:p-7">
                <h4 className="font-display text-lg text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-fog/85">
            {ABOUT.craftClose}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/#fleet"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-magenta to-violet px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_32px_rgba(255,43,214,0.35)] transition hover:brightness-110"
          >
            Explore the fleet
          </Link>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:border-magenta/50"
          >
            Contact Astrivo · {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

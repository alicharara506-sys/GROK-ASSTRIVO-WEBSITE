"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { adjacentMembers, FLEET, type FleetMember } from "@/lib/fleet";
import { AgentIcon } from "@/components/ui/AgentIcon";
import { usePrefersReducedMotion } from "@/lib/motion";

const BotRevealLoader = dynamic(
  () =>
    import("@/components/bot/BotRevealCanvas").then((mod) => mod.BotRevealLoader),
  { ssr: false },
);

const FONT_CLASS: Record<FleetMember["font"], string> = {
  display: "font-display",
  serif: "font-serif",
  mono: "font-mono",
  geo: "font-geo",
  sans: "font-sans",
};

export function BotPage({ member }: { member: FleetMember }) {
  const reduced = usePrefersReducedMotion();
  const { prev, next } = adjacentMembers(member.slug);
  const vars = {
    "--bot-primary": member.theme.primary,
    "--bot-secondary": member.theme.secondary,
    "--bot-accent": member.theme.accent,
  } as CSSProperties;

  return (
    <div
      data-bot={member.slug}
      className={`bot-shell ${FONT_CLASS[member.font]}`}
      style={vars}
    >
      <div className="relative isolate min-h-[72svh] overflow-hidden">
        <BotRevealLoader member={member} />
        <div className="bot-motif-wash pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 sm:px-8">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/#hero"
              className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
            >
              <span aria-hidden="true">←</span> Back to constellation
            </Link>
            <p
              className="mt-6 text-[0.7rem] uppercase tracking-[0.42em]"
              style={{ color: member.theme.accent }}
            >
              {member.mood}
            </p>
            <h1 className="mt-3 text-5xl font-semibold tracking-wide text-white sm:text-7xl">
              {member.name}
            </h1>
            <p className="mt-3 text-lg text-white/80 sm:text-xl">{member.role}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {member.creed}
            </p>
            <nav
              aria-label="On this page"
              className="mt-8 flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.22em]"
            >
              {[
                { href: "#overview", label: "Overview" },
                { href: "#services", label: "Services" },
                { href: "#work", label: "Work" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-white/50 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <section id="overview" className="scroll-mt-28 border-t border-white/10 pt-16">
          <p className="text-[0.7rem] uppercase tracking-[0.32em]" style={{ color: member.theme.accent }}>
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What they own</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            {member.owns}
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/55">
            Motif: {member.motif}
          </p>
        </section>

        <section id="services" className="scroll-mt-28 pt-20">
          <p className="text-[0.7rem] uppercase tracking-[0.32em]" style={{ color: member.theme.accent }}>
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            How {member.name} works
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {member.services.map((service, index) => (
              <li
                key={service}
                className="rounded-2xl border border-white/12 bg-black/20 px-5 py-5 backdrop-blur-md"
              >
                <span
                  className="font-mono text-[0.65rem] tracking-[0.18em] text-white/45"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base leading-relaxed text-white/90">{service}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="scroll-mt-28 pt-20">
          <p className="text-[0.7rem] uppercase tracking-[0.32em]" style={{ color: member.theme.accent }}>
            Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Example scenarios
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {member.work.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-3xl border border-white/12 bg-black/25 p-6 backdrop-blur-md"
              >
                <span
                  className="self-start rounded-full px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.2em]"
                  style={{
                    color: member.theme.primary,
                    background: member.theme.accent,
                  }}
                >
                  {item.label}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">
          <Link
            href={`/fleet/${prev.slug}`}
            className="rounded-2xl border border-white/12 bg-black/20 px-5 py-5 transition hover:border-white/35"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/50">Previous</p>
            <p className="mt-2 font-semibold text-white">{prev.name}</p>
            <p className="mt-1 text-sm text-white/60">{prev.role}</p>
          </Link>
          <Link
            href="/#fleet"
            className="rounded-2xl border border-white/12 bg-black/20 px-5 py-5 text-center transition hover:border-white/35"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/50">
              Fleet map
            </p>
            <p className="mt-2 font-semibold text-white">Meet the Fleet</p>
            <p className="mt-1 text-sm text-white/60">Return to the constellation</p>
          </Link>
          <Link
            href={`/fleet/${next.slug}`}
            className="rounded-2xl border border-white/12 bg-black/20 px-5 py-5 text-right transition hover:border-white/35 sm:text-right"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/50">Next</p>
            <p className="mt-2 font-semibold text-white">{next.name}</p>
            <p className="mt-1 text-sm text-white/60">{next.role}</p>
          </Link>
        </section>

        <nav aria-label="All specialists" className="mt-12 flex flex-wrap gap-2">
          {FLEET.map((bot) => {
            const current = bot.slug === member.slug;
            return (
              <Link
                key={bot.slug}
                href={`/fleet/${bot.slug}`}
                aria-current={current ? "page" : undefined}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.16em] transition"
                style={{
                  borderColor: current ? member.theme.accent : "rgba(255,255,255,0.16)",
                  color: current ? member.theme.accent : "rgba(255,255,255,0.7)",
                }}
              >
                <AgentIcon src={bot.icon} alt="" size={12} />
                {bot.name}
              </Link>
            );
          })}
        </nav>
      </main>
    </div>
  );
}

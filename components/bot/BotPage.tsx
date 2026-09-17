"use client";

import type { CSSProperties, ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, CREED } from "@/lib/constants";
import { FLEET, type FleetMember } from "@/lib/fleet";
import { botDisplayClass } from "@/lib/bot-style";
import { AgentIcon } from "@/components/ui/AgentIcon";
import { BotMotif2D } from "@/components/bot/BotMotif2D";

const BotCanvas = dynamic(() => import("@/components/bot/BotCanvas"), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden="true" />,
});

const NAV = [
  { href: "#overview", label: "Overview" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
];

export function BotPage({ member }: { member: FleetMember }) {
  const display = botDisplayClass(member.slug);
  const adjacent = member.adjacent
    .map((slug) => FLEET.find((item) => item.slug === slug))
    .filter((item): item is FleetMember => Boolean(item));

  return (
    <div
      className="bot-page min-h-full"
      style={
        {
          "--bot-primary": member.theme.primary,
          "--bot-secondary": member.theme.secondary,
          "--bot-accent": member.theme.accent,
          background: `radial-gradient(900px 500px at 80% -10%, ${member.theme.secondary}33, transparent 55%), ${member.theme.primary}`,
        } as CSSProperties
      }
    >
      <section className="relative overflow-hidden pt-24">
        {member.slug === "brando" ? (
          <p
            aria-hidden="true"
            className="creed-watermark absolute bottom-6 left-6 max-w-xs font-editorial text-4xl leading-none text-white/8 sm:text-6xl"
          >
            {CREED}
          </p>
        ) : null}
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Link
              href="/#hero"
              className="text-[0.65rem] uppercase tracking-[0.28em] text-white/60 transition hover:text-white"
            >
              ← Back to constellation
            </Link>
            <p
              className="mt-6 text-[0.7rem] uppercase tracking-[0.32em]"
              style={{ color: member.theme.accent }}
            >
              {member.title}
            </p>
            <h1 className={`${display} mt-3 text-5xl font-semibold text-white sm:text-7xl`}>
              {member.name}
            </h1>
            <p className="mt-3 text-lg text-white/70">{member.role}</p>
            <p
              className={`${display} mt-6 max-w-xl text-xl leading-snug text-white sm:text-2xl`}
            >
              {member.creed}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {member.theme.mood.map((mood) => (
                <span
                  key={mood}
                  className="rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-white/80"
                  style={{ borderColor: `${member.theme.secondary}66` }}
                >
                  {mood}
                </span>
              ))}
            </div>
            <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-3">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="relative">
            <div
              className="aspect-square overflow-hidden rounded-[2rem] border"
              style={{ borderColor: `${member.theme.secondary}44` }}
            >
              <BotCanvas member={member} />
            </div>
            <div className="pointer-events-none absolute -bottom-4 -left-2 h-24 w-40 opacity-70 sm:h-28 sm:w-52">
              <BotMotif2D member={member} />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-5 pb-24 sm:px-8">
        <motion.section
          id="overview"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <Kicker color={member.theme.accent}>Overview</Kicker>
          <h2 className={`${display} mt-2 text-3xl text-white`}>What they own</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            {member.overview}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/60">
            {member.owns}
          </p>
          <p className="mt-6 text-sm italic text-white/45">{member.theme.motif}</p>
        </motion.section>

        <motion.section
          id="services"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <Kicker color={member.theme.accent}>Services</Kicker>
          <h2 className={`${display} mt-2 text-3xl text-white`}>How the work lands</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {member.services.map((service) => (
              <li
                key={service}
                className="rounded-2xl border bg-black/20 px-5 py-4 text-sm leading-relaxed text-white/85 sm:text-base"
                style={{ borderColor: `${member.theme.secondary}33` }}
              >
                {service}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="work"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <Kicker color={member.theme.accent}>Work</Kicker>
          <h2 className={`${display} mt-2 text-3xl text-white`}>Example scenarios</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {member.work.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border bg-black/25 p-5"
                style={{ borderColor: `${member.theme.accent}33` }}
              >
                <p
                  className="text-[0.6rem] uppercase tracking-[0.22em]"
                  style={{ color: member.theme.accent }}
                >
                  {item.kind}
                </p>
                <h3 className={`${display} mt-2 text-xl text-white`}>{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </motion.section>

        <section className="border-t border-white/10 pt-12">
          <Kicker color={member.theme.accent}>Adjacent specialists</Kicker>
          <h2 className={`${display} mt-2 text-2xl text-white`}>Continue the spine</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {adjacent.map((item) => (
              <Link
                key={item.slug}
                href={`/fleet/${item.slug}`}
                className="flex items-center gap-3 rounded-2xl border bg-black/20 px-4 py-3 transition hover:border-white/30"
                style={{ borderColor: `${item.theme.secondary}44` }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <AgentIcon src={item.icon} alt="" size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold tracking-[0.14em] text-white">
                    {item.name}
                  </span>
                  <span className="text-xs text-white/60">{item.role}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#fleet"
              className="rounded-full px-5 py-3 text-sm font-semibold text-white"
              style={{ background: member.theme.secondary }}
            >
              View fleet
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85"
            >
              Contact Astrivo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function Kicker({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <p className="text-[0.65rem] uppercase tracking-[0.32em]" style={{ color }}>
      {children}
    </p>
  );
}

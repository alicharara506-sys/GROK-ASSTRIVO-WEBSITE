"use client";

import Link from "next/link";
import { CORE_AGENT, FLEET_SPECIALISTS, type FleetMember } from "@/lib/fleet";
import { AgentIcon } from "@/components/ui/AgentIcon";
import { useFleetHover } from "@/components/ui/FleetHoverProvider";

function polar(index: number, total: number, radius: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    left: `${50 + Math.cos(angle) * radius}%`,
    top: `${50 + Math.sin(angle) * radius}%`,
    angle,
  };
}

export function FleetMap() {
  const { hover, hoveredId } = useFleetHover();

  return (
    <section
      id="fleet"
      className="relative z-10 scroll-mt-24 px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-36"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.7rem] uppercase tracking-[0.42em] text-glow/90">
          The fleet
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Meet the Fleet
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          One core. Ten specialists. One spine. Explore a visual kit — overview,
          services, and work — for every member of the fleet.
        </p>

        <div className="mt-14 flex flex-col gap-3 sm:hidden">
          <AgentCard
            member={CORE_AGENT}
            featured
            active={hoveredId === CORE_AGENT.slug}
            onHover={(on) => hover(on ? CORE_AGENT.slug : null)}
          />
          {FLEET_SPECIALISTS.map((member) => (
            <AgentCard
              key={member.slug}
              member={member}
              active={hoveredId === member.slug}
              onHover={(on) => hover(on ? member.slug : null)}
            />
          ))}
        </div>

        <div className="relative mx-auto mt-14 hidden aspect-square w-full max-w-[44rem] sm:block">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[8%] rounded-full border border-magenta/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[18%] rounded-full border border-violet/15"
          />
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
          >
            {FLEET_SPECIALISTS.map((member, index) => {
              const { angle } = polar(index, FLEET_SPECIALISTS.length, 40);
              const x = 50 + Math.cos(angle) * 40;
              const y = 50 + Math.sin(angle) * 40;
              return (
                <line
                  key={member.slug}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke={member.theme.secondary}
                  strokeWidth="0.28"
                  opacity="0.55"
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 w-[min(44%,12.5rem)] -translate-x-1/2 -translate-y-1/2">
            <AgentCard
              member={CORE_AGENT}
              featured
              active={hoveredId === CORE_AGENT.slug}
              onHover={(on) => hover(on ? CORE_AGENT.slug : null)}
            />
          </div>

          {FLEET_SPECIALISTS.map((member, index) => {
            const { left, top } = polar(index, FLEET_SPECIALISTS.length, 40);
            return (
              <div
                key={member.slug}
                className="absolute z-10 w-[min(31%,10.25rem)] -translate-x-1/2 -translate-y-1/2"
                style={{ left, top }}
              >
                <AgentCard
                  member={member}
                  active={hoveredId === member.slug}
                  onHover={(on) => hover(on ? member.slug : null)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AgentCard({
  member,
  featured = false,
  active,
  onHover,
}: {
  member: FleetMember;
  featured?: boolean;
  active: boolean;
  onHover: (on: boolean) => void;
}) {
  return (
    <h3 className="m-0 font-normal">
      <Link
        href={`/fleet/${member.slug}`}
        aria-label={`Explore ${member.name}, ${member.role}`}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        onFocus={() => onHover(true)}
        onBlur={() => onHover(false)}
        className={`panel-glass flex w-full rounded-2xl px-2.5 py-3 text-left transition duration-200 sm:px-3 sm:py-3.5 ${
          featured ? "shadow-[0_0_40px_rgba(255,43,214,0.28)]" : ""
        } ${active ? "ring-1" : ""}`}
        style={{
          borderColor: active ? `${member.theme.accent}aa` : undefined,
          boxShadow: active
            ? `0 0 28px ${member.theme.secondary}55`
            : featured
              ? undefined
              : undefined,
        }}
      >
        <span className="flex items-center gap-2">
          <span
            className={`flex shrink-0 items-center justify-center rounded-xl border bg-white/5 ${
              featured ? "h-10 w-10" : "h-8 w-8"
            }`}
            style={{ borderColor: `${member.theme.secondary}66` }}
          >
            <AgentIcon src={member.icon} alt="" size={featured ? 22 : 18} />
          </span>
          <span className="min-w-0">
            <span
              className="font-display block text-[0.7rem] font-semibold tracking-[0.14em] text-white sm:text-xs"
              style={{ color: featured ? member.theme.accent : undefined }}
            >
              {member.name}
            </span>
            <span
              className={`mt-0.5 block text-[0.62rem] leading-snug text-muted sm:text-[0.7rem] ${
                featured ? "line-clamp-3" : "line-clamp-2"
              }`}
            >
              {member.role}
            </span>
          </span>
        </span>
      </Link>
    </h3>
  );
}

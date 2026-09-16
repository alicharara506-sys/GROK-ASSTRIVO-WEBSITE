"use client";

import { CORE_AGENT, FLEET_AGENTS, type Agent } from "@/lib/agents";
import { AgentIcon } from "@/components/ui/AgentIcon";
import { useAgentUi } from "@/components/ui/AgentUiProvider";

function polar(index: number, total: number, radius: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    left: `${50 + Math.cos(angle) * radius}%`,
    top: `${50 + Math.sin(angle) * radius}%`,
    angle,
  };
}

export function FleetMap() {
  const { select, hover, hoveredId, selectedId } = useAgentUi();

  return (
    <section id="fleet" className="relative z-10 scroll-mt-24 px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.7rem] uppercase tracking-[0.42em] text-glow/90">
          The fleet
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Meet the Fleet
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Eleven specialists. One spine. Click any agent to open a briefing —
          the same panel as the constellation — and talk to them on Grok.
        </p>

        <div className="relative mx-auto mt-14 aspect-square w-full max-w-[44rem]">
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
            {FLEET_AGENTS.map((agent, index) => {
              const { angle } = polar(index, FLEET_AGENTS.length, 40);
              const x = 50 + Math.cos(angle) * 40;
              const y = 50 + Math.sin(angle) * 40;
              return (
                <line
                  key={agent.id}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke="url(#fleet-line)"
                  strokeWidth="0.25"
                  opacity="0.7"
                />
              );
            })}
            <defs>
              <linearGradient id="fleet-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ff2bd6" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 w-[min(38%,10.5rem)] -translate-x-1/2 -translate-y-1/2">
            <AgentCard
              agent={CORE_AGENT}
              featured
              active={hoveredId === CORE_AGENT.id || selectedId === CORE_AGENT.id}
              onSelect={() => select(CORE_AGENT.id)}
              onHover={(on) => hover(on ? CORE_AGENT.id : null)}
            />
          </div>

          {FLEET_AGENTS.map((agent, index) => {
            const { left, top } = polar(index, FLEET_AGENTS.length, 40);
            return (
              <div
                key={agent.id}
                className="absolute z-10 w-[min(31%,10.25rem)] -translate-x-1/2 -translate-y-1/2"
                style={{ left, top }}
              >
                <AgentCard
                  agent={agent}
                  active={hoveredId === agent.id || selectedId === agent.id}
                  onSelect={() => select(agent.id)}
                  onHover={(on) => hover(on ? agent.id : null)}
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
  agent,
  featured = false,
  active,
  onSelect,
  onHover,
}: {
  agent: Agent;
  featured?: boolean;
  active: boolean;
  onSelect: () => void;
  onHover: (on: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onFocus={() => onHover(true)}
      onBlur={() => onHover(false)}
      className={`panel-glass w-full rounded-2xl px-2.5 py-3 text-left transition duration-200 sm:px-3 sm:py-3.5 ${
        featured ? "shadow-[0_0_40px_rgba(255,43,214,0.28)]" : ""
      } ${active ? "border-magenta/70 ring-1 ring-magenta/40" : ""}`}
    >
      <span className="flex items-center gap-2">
        <span
          className={`flex shrink-0 items-center justify-center rounded-xl border border-magenta/25 bg-white/5 ${
            featured ? "h-10 w-10" : "h-8 w-8"
          }`}
        >
          <AgentIcon src={agent.icon} alt="" size={featured ? 22 : 18} />
        </span>
        <span className="min-w-0">
          <h3 className="font-display truncate text-[0.7rem] font-semibold tracking-[0.14em] text-white sm:text-xs">
            {agent.name}
          </h3>
          <p className="mt-0.5 line-clamp-2 text-[0.62rem] leading-snug text-muted sm:text-[0.7rem]">
            {agent.role}
          </p>
        </span>
      </span>
    </button>
  );
}

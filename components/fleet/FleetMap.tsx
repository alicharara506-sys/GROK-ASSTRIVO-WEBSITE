"use client";

import type { CSSProperties } from "react";
import { AGENTS, CORE_AGENT, SATELLITE_AGENTS } from "@/lib/agents";
import { useAgentSelection } from "@/components/ui/agent-context";

export function FleetMap() {
  const { select, selected, hovered } = useAgentSelection();

  return (
    <section
      id="fleet"
      className="relative z-10 scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.7rem] tracking-[0.42em] text-[#ff4ec8] uppercase">
          The fleet
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Meet the Fleet
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
          Eleven specialists around one core. The same constellation as the
          hero, laid out for reading, search, and a tap on any screen.
        </p>

        <div className="relative mx-auto mt-16 aspect-square w-full max-w-[680px]">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="rgba(255,78,200,0.18)"
              strokeWidth="0.25"
            />
            <circle
              cx="50"
              cy="50"
              r="24"
              fill="none"
              stroke="rgba(155,92,255,0.14)"
              strokeWidth="0.2"
            />
            {SATELLITE_AGENTS.map((agent) => {
              const x = 50 + Math.cos(agent.angle) * 38;
              const y = 50 + Math.sin(agent.angle) * 38;
              return (
                <line
                  key={agent.id}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke="rgba(196,107,255,0.28)"
                  strokeWidth="0.22"
                />
              );
            })}
          </svg>

          <AgentCard
            className="absolute top-1/2 left-1/2 z-10 w-[28%] -translate-x-1/2 -translate-y-1/2 sm:w-[22%]"
            active={
              selected?.id === CORE_AGENT.id || hovered?.id === CORE_AGENT.id
            }
            onSelect={() => select(CORE_AGENT)}
            name={CORE_AGENT.name}
            role={CORE_AGENT.role}
            icon={CORE_AGENT.icon}
            core
          />

          {SATELLITE_AGENTS.map((agent) => {
            const x = 50 + Math.cos(agent.angle) * 38;
            const y = 50 + Math.sin(agent.angle) * 38;
            return (
              <AgentCard
                key={agent.id}
                className="absolute w-[27%] -translate-x-1/2 -translate-y-1/2 sm:w-[20%]"
                style={{ left: `${x}%`, top: `${y}%` }}
                active={selected?.id === agent.id || hovered?.id === agent.id}
                onSelect={() => select(agent)}
                name={agent.name}
                role={agent.role}
                icon={agent.icon}
              />
            );
          })}
        </div>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((agent) => (
            <li key={`list-${agent.id}`}>
              <button
                type="button"
                onClick={() => select(agent)}
                className="fleet-list-card w-full text-left"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={agent.icon} alt="" width={20} height={20} />
                </span>
                <span>
                  <span className="block font-display text-sm tracking-[0.16em] text-white">
                    {agent.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-white/60">
                    {agent.role}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AgentCard({
  name,
  role,
  icon,
  onSelect,
  active,
  className,
  style,
  core = false,
}: {
  name: string;
  role: string;
  icon: string;
  onSelect: () => void;
  active: boolean;
  className?: string;
  style?: CSSProperties;
  core?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={style}
      className={`fleet-node ${active ? "fleet-node-active" : ""} ${core ? "fleet-node-core" : ""} cursor-pointer ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" width={28} height={28} className="size-6 sm:size-7" />
      <span className="font-display text-[0.65rem] tracking-[0.18em] text-white sm:text-xs">
        {name}
      </span>
      <span className="max-sm:sr-only line-clamp-2 text-center text-[0.6rem] leading-tight text-white/55">
        {role}
      </span>
    </button>
  );
}

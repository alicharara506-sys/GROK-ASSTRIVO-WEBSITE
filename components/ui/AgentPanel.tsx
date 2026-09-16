"use client";

import { useEffect, useRef } from "react";
import { CORE_AGENT } from "@/lib/agents";
import { TalkButton } from "@/components/ui/TalkButton";
import { useAgentSelection } from "@/components/ui/agent-context";

export function AgentPanel() {
  const { selected, clearSelection } = useAgentSelection();
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = Boolean(selected);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") clearSelection();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, clearSelection]);

  return (
    <aside
      className={`agent-panel ${open ? "agent-panel-open" : ""}`}
      role="dialog"
      aria-modal="false"
      aria-hidden={!open}
      aria-labelledby="agent-panel-title"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.65rem] tracking-[0.28em] text-white/45 uppercase">
          Agent
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={clearSelection}
          className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-[0.16em] text-white/80 uppercase transition hover:border-white/40 hover:text-white"
        >
          Close
        </button>
      </div>

      {selected ? (
        <div className="mt-8 flex flex-1 flex-col">
          <div className="mb-6 flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.icon}
                alt=""
                width={32}
                height={32}
                className="size-8"
              />
            </span>
            <div>
              <h2
                id="agent-panel-title"
                className="font-display text-3xl font-semibold tracking-[0.12em] text-white"
              >
                {selected.name}
              </h2>
              {selected.isCore ? (
                <p className="mt-1 text-xs tracking-[0.2em] text-[#ff4ec8] uppercase">
                  {CORE_AGENT.name} core
                </p>
              ) : null}
            </div>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-white/75">
            {selected.role}
          </p>
          <div className="mt-auto pt-10">
            <TalkButton agent={selected} className="w-full" />
          </div>
        </div>
      ) : null}
    </aside>
  );
}

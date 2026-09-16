"use client";

import { useEffect, useRef } from "react";
import { getAgent } from "@/lib/agents";
import { useAgentUi } from "@/components/ui/AgentUiProvider";

const FOCUSABLE = "a[href], button:not([disabled])";

export function AgentPanel() {
  const { selectedId, select } = useAgentUi();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const agent = selectedId ? getAgent(selectedId) : null;

  useEffect(() => {
    if (!agent) return;

    restoreFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        select(null);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const nodes = [
        ...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ].filter((node) => !node.hasAttribute("disabled"));
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      restoreFocusRef.current?.focus();
    };
  }, [agent, select]);

  if (!agent) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close agent panel"
        className="pointer-events-auto absolute inset-0 bg-black/25"
        onClick={() => select(null)}
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="agent-panel-title"
        aria-describedby="agent-panel-role"
        className="panel-glass pointer-events-auto absolute inset-x-0 bottom-0 max-h-[78vh] overflow-y-auto p-6 sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:w-[min(100%,24rem)] sm:max-h-none sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-magenta/35 bg-white/5 shadow-[0_0_24px_rgba(255,43,214,0.25)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={agent.icon} alt="" width={28} height={28} />
            </span>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-glow/80">
                Agent
              </p>
              <h2
                id="agent-panel-title"
                className="font-display text-2xl font-semibold tracking-wide text-white"
              >
                {agent.name}
              </h2>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={() => select(null)}
            className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted transition hover:border-magenta/50 hover:text-white"
          >
            Close
          </button>
        </div>
        <p id="agent-panel-role" className="mt-6 text-base leading-relaxed text-muted">
          {agent.role}
        </p>
        <a
          href={agent.grokDeepLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-magenta to-violet px-5 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_0_32px_rgba(255,43,214,0.35)] transition hover:brightness-110"
        >
          Talk to {agent.name}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <p className="mt-4 text-xs leading-relaxed text-muted/70">
          Opens a placeholder Grok conversation. Close this panel to keep
          orbiting the constellation.
        </p>
      </aside>
    </div>
  );
}

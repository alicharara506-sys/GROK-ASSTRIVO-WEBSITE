"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Agent } from "@/lib/agents";

type AgentContextValue = {
  selected: Agent | null;
  hovered: Agent | null;
  select: (agent: Agent) => void;
  clearSelection: () => void;
  setHovered: (agent: Agent | null) => void;
};

const AgentContext = createContext<AgentContextValue | null>(null);

export function AgentProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Agent | null>(null);
  const [hovered, setHovered] = useState<Agent | null>(null);

  const select = useCallback((agent: Agent) => {
    setSelected(agent);
    setHovered(agent);
  }, []);

  const clearSelection = useCallback(() => {
    setSelected(null);
  }, []);

  const value = useMemo(
    () => ({ selected, hovered, select, clearSelection, setHovered }),
    [selected, hovered, select, clearSelection],
  );

  return (
    <AgentContext.Provider value={value}>{children}</AgentContext.Provider>
  );
}

export function useAgentSelection() {
  const ctx = useContext(AgentContext);
  if (!ctx) {
    throw new Error("useAgentSelection must be used within AgentProvider");
  }
  return ctx;
}

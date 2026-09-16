"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { AgentId } from "@/lib/agents";

type AgentUiValue = {
  selectedId: AgentId | null;
  hoveredId: AgentId | null;
  select: (id: AgentId | null) => void;
  hover: (id: AgentId | null) => void;
};

const AgentUiContext = createContext<AgentUiValue | null>(null);

export function AgentUiProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<AgentId | null>(null);
  const [hoveredId, setHoveredId] = useState<AgentId | null>(null);

  const select = useCallback((id: AgentId | null) => {
    setSelectedId(id);
  }, []);

  const hover = useCallback((id: AgentId | null) => {
    setHoveredId(id);
  }, []);

  const value = useMemo(
    () => ({ selectedId, hoveredId, select, hover }),
    [selectedId, hoveredId, select, hover],
  );

  return <AgentUiContext.Provider value={value}>{children}</AgentUiContext.Provider>;
}

export function useAgentUi() {
  const ctx = useContext(AgentUiContext);
  if (!ctx) {
    throw new Error("useAgentUi must be used within AgentUiProvider");
  }
  return ctx;
}

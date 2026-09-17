"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { FleetId } from "@/lib/fleet";

type FleetUiValue = {
  hoveredId: FleetId | null;
  hover: (id: FleetId | null) => void;
};

const FleetUiContext = createContext<FleetUiValue | null>(null);

export function FleetUiProvider({ children }: { children: ReactNode }) {
  const [hoveredId, setHoveredId] = useState<FleetId | null>(null);

  const hover = useCallback((id: FleetId | null) => {
    setHoveredId(id);
  }, []);

  const value = useMemo(() => ({ hoveredId, hover }), [hoveredId, hover]);

  return (
    <FleetUiContext.Provider value={value}>{children}</FleetUiContext.Provider>
  );
}

export function useFleetUi() {
  const ctx = useContext(FleetUiContext);
  if (!ctx) {
    throw new Error("useFleetUi must be used within FleetUiProvider");
  }
  return ctx;
}

export function useOptionalFleetUi() {
  return useContext(FleetUiContext);
}

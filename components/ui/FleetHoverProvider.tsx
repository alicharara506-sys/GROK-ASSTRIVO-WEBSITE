"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { FleetSlug } from "@/lib/fleet";

type FleetHoverValue = {
  hoveredId: FleetSlug | null;
  hover: (id: FleetSlug | null) => void;
};

const FleetHoverContext = createContext<FleetHoverValue | null>(null);

export function FleetHoverProvider({ children }: { children: ReactNode }) {
  const [hoveredId, setHoveredId] = useState<FleetSlug | null>(null);

  const hover = useCallback((id: FleetSlug | null) => {
    setHoveredId(id);
  }, []);

  const value = useMemo(() => ({ hoveredId, hover }), [hoveredId, hover]);

  return (
    <FleetHoverContext.Provider value={value}>{children}</FleetHoverContext.Provider>
  );
}

export function useFleetHover() {
  const ctx = useContext(FleetHoverContext);
  if (!ctx) {
    throw new Error("useFleetHover must be used within FleetHoverProvider");
  }
  return ctx;
}

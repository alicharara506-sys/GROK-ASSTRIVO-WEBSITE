"use client";

import { useMemo } from "react";
import { Line } from "@react-three/drei";
import {
  AGENTS,
  CONSTELLATION_EDGES,
  type AgentId,
} from "@/lib/agents";

export function Connections({
  hoveredId,
  selectedId,
}: {
  hoveredId: AgentId | null;
  selectedId: AgentId | null;
}) {
  const positions = useMemo(() => {
    const map = new Map(AGENTS.map((agent) => [agent.id, agent.position]));
    return map;
  }, []);

  return (
    <group>
      {CONSTELLATION_EDGES.map(([from, to]) => {
        const a = positions.get(from);
        const b = positions.get(to);
        if (!a || !b) return null;
        const active =
          hoveredId === from ||
          hoveredId === to ||
          selectedId === from ||
          selectedId === to;
        const spoke = from === "astro" || to === "astro";
        return (
          <Line
            key={`${from}-${to}`}
            points={[a, b]}
            color={active ? "#ff2bd6" : "#a855f7"}
            transparent
            opacity={active ? 0.85 : spoke ? 0.32 : 0.16}
            lineWidth={active ? 1.8 : spoke ? 1.15 : 0.8}
          />
        );
      })}
    </group>
  );
}

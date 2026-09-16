"use client";

import { Line } from "@react-three/drei";
import { useMemo } from "react";
import { SATELLITE_AGENTS } from "@/lib/agents";

export function Connections() {
  const neighbors = useMemo(() => {
    const edges: [number, number][] = [];
    const seen = new Set<string>();
    SATELLITE_AGENTS.forEach((agent, i) => {
      const ranked = SATELLITE_AGENTS.map((other, j) => {
        const dx = agent.position[0] - other.position[0];
        const dy = agent.position[1] - other.position[1];
        const dz = agent.position[2] - other.position[2];
        return { j, d: i === j ? Infinity : dx * dx + dy * dy + dz * dz };
      }).sort((a, b) => a.d - b.d);
      ranked.slice(0, 2).forEach(({ j }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!seen.has(key)) {
          seen.add(key);
          edges.push([i, j]);
        }
      });
    });
    return edges;
  }, []);

  return (
    <group>
      {SATELLITE_AGENTS.map((agent) => (
        <Line
          key={`spoke-${agent.id}`}
          points={[
            [0, 0, 0],
            agent.position,
          ]}
          color="#c46bff"
          transparent
          opacity={0.3}
          lineWidth={1.15}
          raycast={() => {}}
        />
      ))}
      {neighbors.map(([i, j]) => (
        <Line
          key={`edge-${SATELLITE_AGENTS[i].id}-${SATELLITE_AGENTS[j].id}`}
          points={[SATELLITE_AGENTS[i].position, SATELLITE_AGENTS[j].position]}
          color="#7a4dff"
          transparent
          opacity={0.16}
          lineWidth={0.9}
          raycast={() => {}}
        />
      ))}
    </group>
  );
}

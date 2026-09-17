"use client";

import { useMemo, useRef } from "react";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  CONSTELLATION_EDGES,
  FLEET,
  type FleetSlug,
  type Vec3,
} from "@/lib/fleet";

export function Connections({
  hoveredId,
  reducedMotion,
}: {
  hoveredId: FleetSlug | null;
  reducedMotion: boolean;
}) {
  const members = useMemo(() => {
    return new Map(FLEET.map((member) => [member.slug, member]));
  }, []);

  return (
    <group>
      {CONSTELLATION_EDGES.map(([from, to], index) => {
        const a = members.get(from);
        const b = members.get(to);
        if (!a || !b) return null;
        const active = hoveredId === from || hoveredId === to;
        const spoke = from === "astro" || to === "astro";
        const specialist = from === "astro" ? b : to === "astro" ? a : b;
        const color = active ? specialist.theme.accent : specialist.theme.secondary;
        return (
          <group key={`${from}-${to}`}>
            <Line
              points={[a.position, b.position]}
              color={color}
              transparent
              opacity={active ? 0.92 : spoke ? 0.38 : 0.16}
              lineWidth={active ? 2.1 : spoke ? 1.2 : 0.85}
            />
            {!reducedMotion ? (
              <ConnectionPulse
                a={a.position}
                b={b.position}
                color={specialist.theme.accent}
                speed={0.12 + (index % 5) * 0.03}
                delay={index * 0.11}
                active={active}
              />
            ) : null}
          </group>
        );
      })}
    </group>
  );
}

function ConnectionPulse({
  a,
  b,
  color,
  speed,
  delay,
  active,
}: {
  a: Vec3;
  b: Vec3;
  color: string;
  speed: number;
  delay: number;
  active: boolean;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const node = mesh.current;
    if (!node) return;
    const t = (clock.elapsedTime * speed + delay) % 1;
    node.position.set(
      a[0] + (b[0] - a[0]) * t,
      a[1] + (b[1] - a[1]) * t,
      a[2] + (b[2] - a[2]) * t,
    );
    const scale = active ? 1.6 : 1;
    node.scale.setScalar(scale);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.032, 10, 10]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

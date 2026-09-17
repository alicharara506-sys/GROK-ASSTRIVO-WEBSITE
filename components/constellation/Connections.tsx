"use client";

import { useMemo, useRef } from "react";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CONSTELLATION_EDGES, FLEET, type FleetId } from "@/lib/fleet";

const from = new THREE.Vector3();
const to = new THREE.Vector3();
const pos = new THREE.Vector3();

export function Connections({ hoveredId }: { hoveredId: FleetId | null }) {
  const positions = useMemo(() => {
    return new Map(FLEET.map((member) => [member.slug, member.position]));
  }, []);

  return (
    <group>
      {CONSTELLATION_EDGES.map(([a, b], index) => {
        const start = positions.get(a);
        const end = positions.get(b);
        if (!start || !end) return null;
        const active = hoveredId === a || hoveredId === b;
        const spoke = a === "astro" || b === "astro";
        return (
          <group key={`${a}-${b}`}>
            <Line
              points={[start, end]}
              color={active ? "#FF2BD6" : "#7B5CFF"}
              transparent
              opacity={active ? 0.9 : spoke ? 0.38 : 0.18}
              lineWidth={active ? 1.9 : spoke ? 1.2 : 0.85}
            />
            <PulseDot a={start} b={end} delay={index * 0.17} active={active} />
          </group>
        );
      })}
    </group>
  );
}

function PulseDot({
  a,
  b,
  delay,
  active,
}: {
  a: [number, number, number];
  b: [number, number, number];
  delay: number;
  active: boolean;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const node = mesh.current;
    if (!node) return;
    const t = (clock.elapsedTime * 0.22 + delay) % 1;
    from.set(a[0], a[1], a[2]);
    to.set(b[0], b[1], b[2]);
    pos.lerpVectors(from, to, t);
    node.position.copy(pos);
    node.scale.setScalar(active ? 1.35 : 0.85);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.045, 10, 10]} />
      <meshBasicMaterial
        color={active ? "#FF2BD6" : "#7B5CFF"}
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

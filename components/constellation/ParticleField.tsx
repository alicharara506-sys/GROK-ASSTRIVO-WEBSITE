"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function frac(index: number, salt: number) {
  const n = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

export function ParticleField({
  count,
  color,
  radius = 12,
}: {
  count: number;
  color: string;
  radius?: number;
}) {
  const points = useRef<THREE.Points>(null);
  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      const theta = frac(i, 1) * Math.PI * 2;
      const phi = Math.acos(2 * frac(i, 2) - 1);
      const r = radius * (0.35 + frac(i, 3) * 0.65);
      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      positions[i3 + 2] = r * Math.cos(phi);
      speeds[i] = 0.15 + frac(i, 4) * 0.35;
    }
    return { positions, speeds };
  }, [count, radius]);

  useFrame((_, dt) => {
    const node = points.current;
    if (!node) return;
    node.rotation.y += dt * 0.018;
    const attr = node.geometry.getAttribute("position") as THREE.BufferAttribute;
    const array = attr.array as Float32Array;
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      array[i3 + 1] += Math.sin((array[i3] + array[i3 + 2]) * 0.2) * dt * 0.04 * speeds[i];
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={color}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

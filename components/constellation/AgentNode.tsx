"use client";

import { useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Agent } from "@/lib/agents";
import { constellationScroll } from "@/lib/scroll-state";
import { useAgentUi } from "@/components/ui/AgentUiProvider";

type AgentNodeProps = {
  agent: Agent;
  index: number;
};

export function AgentNode({ agent, index }: AgentNodeProps) {
  const group = useRef<THREE.Group>(null);
  const glow = useRef<THREE.Mesh>(null);
  const { hoveredId, selectedId, hover, select } = useAgentUi();
  const isCore = agent.id === "astro";
  const active = hoveredId === agent.id || selectedId === agent.id;
  const radius = isCore ? 0.42 : 0.18;
  const base = agent.position;
  const phase = index * 0.73;
  const drag = useRef({ x: 0, y: 0 });

  useFrame(({ clock }, dt) => {
    const node = group.current;
    if (!node) return;
    const t = clock.elapsedTime;
    const bob = isCore ? 0 : Math.sin(t * 0.7 + phase) * 0.07;
    node.position.set(base[0], base[1] + bob, base[2]);
    const target = active ? 1.28 : 1;
    const s = THREE.MathUtils.damp(node.scale.x, target, 8, dt);
    node.scale.setScalar(s);
    if (glow.current) {
      const mat = glow.current.material as THREE.MeshBasicMaterial;
      mat.opacity = THREE.MathUtils.damp(
        mat.opacity,
        active ? 0.28 : isCore ? 0.14 : 0.08,
        8,
        dt,
      );
    }
  });

  return (
    <group
      ref={group}
      position={base}
      onPointerOver={(event) => {
        event.stopPropagation();
        hover(agent.id);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        hover(null);
        document.body.style.cursor = "grab";
      }}
      onPointerDown={(event) => {
        event.stopPropagation();
        drag.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => {
        const dx = event.clientX - drag.current.x;
        const dy = event.clientY - drag.current.y;
        if (dx * dx + dy * dy < 25) {
          event.stopPropagation();
          select(agent.id);
        }
      }}
    >
      <mesh ref={glow} scale={2.15} renderOrder={0}>
        <sphereGeometry args={[radius, 16, 16]} />
        <meshBasicMaterial
          color={isCore ? "#ff2bd6" : "#c026d3"}
          transparent
          opacity={0.08}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh renderOrder={1}>
        <sphereGeometry args={[radius, isCore ? 48 : 28, isCore ? 48 : 28]} />
        <meshPhysicalMaterial
          color={isCore ? "#2a0830" : "#14061c"}
          roughness={0.12}
          metalness={0.18}
          transmission={0.62}
          thickness={0.55}
          ior={1.42}
          transparent
          opacity={0.92}
          emissive={isCore ? "#ff2bd6" : "#7c3aed"}
          emissiveIntensity={active ? 1.15 : isCore ? 0.55 : 0.32}
        />
      </mesh>
      {isCore ? <CoreRings /> : null}
      {hoveredId === agent.id && constellationScroll.progress < 0.35 ? (
        <Html
          center
          sprite
          distanceFactor={7.5}
          style={{ pointerEvents: "none" }}
          zIndexRange={[5, 0]}
        >
          <div className="flex items-center gap-2 rounded-full border border-magenta/40 bg-[#05010a]/80 px-3 py-1.5 shadow-[0_0_24px_rgba(255,43,214,0.35)] backdrop-blur-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={agent.icon} alt="" width={16} height={16} />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-white">
              {agent.name}
            </span>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

function CoreRings() {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    if (a.current) a.current.rotation.y += dt * 0.45;
    if (b.current) b.current.rotation.x += dt * 0.32;
  });

  return (
    <group>
      <mesh ref={a} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[0.72, 0.012, 12, 96]} />
        <meshBasicMaterial color="#ff2bd6" transparent opacity={0.7} />
      </mesh>
      <mesh ref={b} rotation={[0.4, 0.6, 0.2]}>
        <torusGeometry args={[0.9, 0.008, 12, 96]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

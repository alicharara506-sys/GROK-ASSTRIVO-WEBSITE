"use client";

import { Html, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { Agent } from "@/lib/agents";
import { CONSTELLATION } from "@/lib/constants";
import { useAgentSelection } from "@/components/ui/agent-context";
import { getGlowTexture } from "@/components/constellation/glow-texture";
import { usePrefersReducedMotion } from "@/lib/hooks";

const pointer = { x: 0, y: 0 };
const noRaycast = () => {};

export function AgentNode({ agent }: { agent: Agent }) {
  const group = useRef<THREE.Group>(null);
  const visual = useRef<THREE.Mesh>(null);
  const { hovered, selected, setHovered, select } = useAgentSelection();
  const reduce = usePrefersReducedMotion();
  const glow = useMemo(() => getGlowTexture(), []);

  const isHovered = hovered?.id === agent.id;
  const isSelected = selected?.id === agent.id;
  const active = isHovered || isSelected;
  useCursor(isHovered);

  const radius = agent.isCore ? 0.38 : 0.155;

  useFrame(({ clock }) => {
    if (!group.current || !visual.current) return;
    const t = clock.elapsedTime;
    const floatY = reduce
      ? 0
      : Math.sin(t * CONSTELLATION.floatSpeed + agent.phase) *
        CONSTELLATION.floatAmplitude;
    group.current.position.set(
      agent.position[0],
      agent.position[1] + floatY,
      agent.position[2],
    );

    const target = active ? 1.22 : 1;
    const current = visual.current.scale.x;
    const next = THREE.MathUtils.lerp(current, target, 0.12);
    visual.current.scale.setScalar(next);
  });

  return (
    <group ref={group} position={agent.position}>
      <sprite
        raycast={noRaycast}
        scale={agent.isCore ? [2.6, 2.6, 1] : active ? [1.45, 1.45, 1] : [0.95, 0.95, 1]}
      >
        <spriteMaterial
          map={glow}
          color={agent.accent}
          transparent
          opacity={active ? 0.95 : 0.72}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>

      <mesh ref={visual} raycast={noRaycast}>
        <sphereGeometry args={[radius, 48, 48]} />
        <meshPhysicalMaterial
          color={agent.isCore ? "#ffe6ff" : "#f0d4ff"}
          emissive={agent.accent}
          emissiveIntensity={active ? 1.15 : agent.isCore ? 0.7 : 0.38}
          roughness={0.14}
          metalness={0.18}
          transmission={agent.isCore ? 0.55 : 0.35}
          thickness={0.55}
          ior={1.35}
          transparent
          opacity={0.96}
          clearcoat={1}
          clearcoatRoughness={0.12}
          toneMapped={false}
        />
      </mesh>

      {agent.isCore ? <CoreRings /> : null}

      <mesh
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(agent);
        }}
        onPointerOut={() => {
          if (selected?.id !== agent.id) setHovered(null);
        }}
        onPointerDown={(event) => {
          event.stopPropagation();
          pointer.x = event.nativeEvent.clientX;
          pointer.y = event.nativeEvent.clientY;
        }}
        onClick={(event) => {
          event.stopPropagation();
          const dx = event.nativeEvent.clientX - pointer.x;
          const dy = event.nativeEvent.clientY - pointer.y;
          if (Math.hypot(dx, dy) > 8) return;
          select(agent);
        }}
      >
        <sphereGeometry args={[agent.isCore ? 0.58 : 0.36, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {active ? (
        <Html
          center
          sprite
          position={[0, radius + 0.38, 0]}
          style={{ pointerEvents: "none" }}
          zIndexRange={[20, 0]}
        >
          <div className="agent-hover-chip">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={agent.icon} alt="" width={16} height={16} />
            <span>{agent.name}</span>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

function CoreRings() {
  const inner = useRef<THREE.Mesh>(null);
  const outer = useRef<THREE.Mesh>(null);
  const reduce = usePrefersReducedMotion();

  useFrame((_, delta) => {
    if (reduce) return;
    if (inner.current) inner.current.rotation.z += delta * 0.18;
    if (outer.current) outer.current.rotation.z -= delta * 0.12;
  });

  return (
    <group raycast={noRaycast}>
      <mesh ref={inner} raycast={noRaycast} rotation={[Math.PI / 2.15, 0.18, 0]}>
        <torusGeometry args={[0.62, 0.007, 12, 96]} />
        <meshBasicMaterial color="#ff4ec8" transparent opacity={0.8} />
      </mesh>
      <mesh ref={outer} raycast={noRaycast} rotation={[Math.PI / 3.1, 0.55, 0.35]}>
        <torusGeometry args={[0.82, 0.005, 12, 96]} />
        <meshBasicMaterial color="#9b5cff" transparent opacity={0.55} />
      </mesh>
      <mesh raycast={noRaycast}>
        <icosahedronGeometry args={[0.95, 0]} />
        <meshBasicMaterial
          color="#ff2ea6"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

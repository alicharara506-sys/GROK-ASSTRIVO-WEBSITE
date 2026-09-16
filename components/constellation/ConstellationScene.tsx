"use client";

import { useRef, useState } from "react";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { AGENTS } from "@/lib/agents";
import { COLORS } from "@/lib/constants";
import { constellationScroll } from "@/lib/scroll-state";
import { useAgentUi } from "@/components/ui/AgentUiProvider";
import { AgentNode } from "@/components/constellation/AgentNode";
import { Connections } from "@/components/constellation/Connections";

export function ConstellationScene() {
  const group = useRef<THREE.Group>(null);
  const { hoveredId, selectedId } = useAgentUi();
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useFrame((_, dt) => {
    const t = constellationScroll.progress;
    const node = group.current;
    if (!node) return;
    const z = THREE.MathUtils.lerp(0, -7.5, t);
    const scale = THREE.MathUtils.lerp(1, 0.62, t);
    node.position.z = THREE.MathUtils.damp(node.position.z, z, 4, dt);
    const s = THREE.MathUtils.damp(node.scale.x, scale, 4, dt);
    node.scale.setScalar(s);
  });

  return (
    <>
      <color attach="background" args={[COLORS.space]} />
      <fog attach="fog" args={[COLORS.space, 10, 36]} />
      <ambientLight intensity={0.28} color="#c4b5fd" />
      <pointLight
        position={[0, 0, 0]}
        intensity={2.4}
        color={COLORS.magenta}
        distance={9}
      />
      <pointLight position={[5, 3.5, 4]} intensity={0.55} color={COLORS.violet} />
      <pointLight position={[-5, -2, -3]} intensity={0.28} color="#67e8f9" />
      <Stars
        radius={70}
        depth={36}
        count={1800}
        factor={2.8}
        saturation={0}
        fade
        speed={reducedMotion ? 0 : 0.45}
      />
      <Sparkles
        count={70}
        scale={11}
        size={2.2}
        speed={reducedMotion ? 0 : 0.28}
        color={COLORS.glow}
        opacity={0.55}
      />
      <group ref={group}>
        <Connections hoveredId={hoveredId} selectedId={selectedId} />
        {AGENTS.map((agent, index) => (
          <AgentNode key={agent.id} agent={agent} index={index} />
        ))}
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.38}
        rotateSpeed={0.55}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.8}
      />
    </>
  );
}

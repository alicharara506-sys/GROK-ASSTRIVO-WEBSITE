"use client";

import { useRef, useState } from "react";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FLEET } from "@/lib/fleet";
import { COLORS } from "@/lib/constants";
import { constellationScroll } from "@/lib/scroll-state";
import { useFleetUi } from "@/components/ui/FleetUiProvider";
import { FleetNode } from "@/components/constellation/FleetNode";
import { Connections } from "@/components/constellation/Connections";
import { ParticleField } from "@/components/constellation/ParticleField";

export function ConstellationScene({ lite = false }: { lite?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { hoveredId } = useFleetUi();
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
      <color attach="background" args={[COLORS.void]} />
      <fog attach="fog" args={[COLORS.void, 14, 48]} />
      <ambientLight intensity={0.3} color="#c4b5fd" />
      <pointLight
        position={[0, 0, 0]}
        intensity={2.6}
        color={COLORS.magenta}
        distance={10}
      />
      <pointLight position={[5, 3.5, 4]} intensity={0.62} color={COLORS.violet} />
      <pointLight position={[-5, -2, -3]} intensity={0.32} color="#67e8f9" />
      <pointLight position={[0, 4, -2]} intensity={0.35} color="#F5C542" />
      <Stars
        radius={70}
        depth={36}
        count={lite ? 700 : 2200}
        factor={2.8}
        saturation={0}
        fade
        speed={reducedMotion ? 0 : 0.45}
      />
      {!lite ? (
        <ParticleField count={reducedMotion ? 80 : 220} color={COLORS.violet} />
      ) : null}
      <Sparkles
        count={lite ? 28 : 90}
        scale={12}
        size={2.3}
        speed={reducedMotion ? 0 : 0.32}
        color={COLORS.magenta}
        opacity={0.58}
      />
      <group ref={group}>
        <Connections hoveredId={hoveredId} />
        {FLEET.map((member, index) => (
          <FleetNode
            key={member.slug}
            member={member}
            index={index}
            reducedMotion={reducedMotion}
            lite={lite}
          />
        ))}
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.42}
        rotateSpeed={0.55}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.8}
      />
    </>
  );
}

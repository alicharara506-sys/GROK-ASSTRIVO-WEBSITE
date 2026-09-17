"use client";

import { useRef } from "react";
import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FLEET } from "@/lib/fleet";
import { COLORS } from "@/lib/constants";
import { constellationScroll } from "@/lib/scroll-state";
import { useFleetHover } from "@/components/ui/FleetHoverProvider";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/motion";
import { AgentNode } from "@/components/constellation/AgentNode";
import { Connections } from "@/components/constellation/Connections";
import { ParticleField } from "@/components/constellation/ParticleField";

export function ConstellationScene() {
  const group = useRef<THREE.Group>(null);
  const light = useRef<THREE.PointLight>(null);
  const { hoveredId } = useFleetHover();
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const starCount = reducedMotion ? 400 : isMobile ? 700 : 1800;
  const sparkleCount = reducedMotion ? 18 : isMobile ? 36 : 88;
  const particleCount = reducedMotion ? 0 : isMobile ? 360 : 1100;

  useFrame(({ clock }, dt) => {
    const t = constellationScroll.progress;
    const node = group.current;
    if (node) {
      const z = THREE.MathUtils.lerp(0, -7.8, t);
      const scale = THREE.MathUtils.lerp(1, 0.6, t);
      node.position.z = THREE.MathUtils.damp(node.position.z, z, 4, dt);
      const s = THREE.MathUtils.damp(node.scale.x, scale, 4, dt);
      node.scale.setScalar(s);
    }
    if (light.current && !reducedMotion) {
      const spin = clock.elapsedTime * 0.16;
      light.current.position.set(Math.cos(spin) * 5.2, 2.2, Math.sin(spin) * 5.2);
    }
  });

  return (
    <>
      <color attach="background" args={[COLORS.space]} />
      <fog attach="fog" args={[COLORS.space, 9, 34]} />
      <ambientLight intensity={0.26} color="#c4b5fd" />
      <pointLight
        position={[0, 0, 0]}
        intensity={2.6}
        color={COLORS.magenta}
        distance={10}
      />
      <pointLight ref={light} intensity={0.7} color={COLORS.violet} distance={16} />
      <pointLight position={[-5, -2, -3]} intensity={0.32} color="#67e8f9" />
      <pointLight position={[4.5, 3.2, 3]} intensity={0.28} color="#F5C542" />
      <Stars
        radius={70}
        depth={36}
        count={starCount}
        factor={2.8}
        saturation={0}
        fade
        speed={reducedMotion ? 0 : 0.42}
      />
      <Sparkles
        count={sparkleCount}
        scale={12}
        size={2.4}
        speed={reducedMotion ? 0 : 0.3}
        color="#e879f9"
        opacity={0.55}
      />
      <ParticleField count={particleCount} reducedMotion={reducedMotion} />
      <group ref={group}>
        <Connections hoveredId={hoveredId} reducedMotion={reducedMotion} />
        {FLEET.map((member, index) => (
          <AgentNode
            key={member.slug}
            member={member}
            index={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.36}
        rotateSpeed={0.55}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.8}
      />
    </>
  );
}

"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { AGENTS } from "@/lib/agents";
import { CAMERA, CONSTELLATION } from "@/lib/constants";
import { AgentNode } from "@/components/constellation/AgentNode";
import { Connections } from "@/components/constellation/Connections";
import { Starfield } from "@/components/constellation/Starfield";
import { useAgentSelection } from "@/components/ui/agent-context";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function ConstellationScene({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  const fleet = useRef<THREE.Group>(null);
  const { selected } = useAgentSelection();
  const reduce = usePrefersReducedMotion();

  useFrame(({ camera }, delta) => {
    const p = scrollProgress;
    if (fleet.current) {
      fleet.current.position.z = THREE.MathUtils.damp(
        fleet.current.position.z,
        p * CONSTELLATION.recedeZ,
        4,
        delta,
      );
      const scale = THREE.MathUtils.damp(
        fleet.current.scale.x,
        1 - p * (1 - CONSTELLATION.recedeScale),
        4,
        delta,
      );
      fleet.current.scale.setScalar(scale);
    }

    const cam = camera as THREE.PerspectiveCamera;
    cam.fov = THREE.MathUtils.damp(
      cam.fov,
      CAMERA.fov + p * (CAMERA.recedeFov - CAMERA.fov),
      4,
      delta,
    );
    cam.updateProjectionMatrix();
  });

  return (
    <>
      <fog attach="fog" args={["#05010b", 10, 26]} />
      <ambientLight intensity={0.32} color="#5a2a78" />
      <pointLight
        position={[0, 0, 0]}
        intensity={2.4}
        color="#ff4ec8"
        distance={10}
      />
      <pointLight
        position={[4, 3, 5]}
        intensity={1.1}
        color="#9b5cff"
        distance={16}
      />
      <Starfield />
      <group ref={fleet}>
        <Connections />
        {AGENTS.map((agent) => (
          <AgentNode key={agent.id} agent={agent} />
        ))}
      </group>
      <OrbitControls
        makeDefault
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate={!selected && !reduce}
        autoRotateSpeed={CONSTELLATION.autoRotateSpeed}
        minPolarAngle={Math.PI * 0.22}
        maxPolarAngle={Math.PI * 0.8}
        minDistance={5}
        maxDistance={12}
        rotateSpeed={0.7}
        touches={{
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_ROTATE,
        }}
      />
    </>
  );
}

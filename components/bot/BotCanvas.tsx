"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { FleetMember } from "@/lib/fleet";

export default function BotCanvas({ member }: { member: FleetMember }) {
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const lite =
    typeof window !== "undefined" &&
    (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);

  return (
    <Canvas
      camera={{ position: [0, 0.2, 4.2], fov: 42 }}
      dpr={lite ? [1, 1.25] : [1, 1.6]}
      gl={{ antialias: !lite, alpha: true, powerPreference: "high-performance", failIfMajorPerformanceCaveat: false }}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[2.4, 2, 3]} intensity={1.4} color={member.theme.secondary} />
      <pointLight position={[-2, -1.4, 2]} intensity={0.7} color={member.theme.accent} />
      <Float
        speed={reducedMotion ? 0 : 1.1}
        rotationIntensity={reducedMotion ? 0 : 0.35}
        floatIntensity={reducedMotion ? 0 : 0.45}
      >
        <BotMotif member={member} reducedMotion={reducedMotion} />
      </Float>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.55}
        enableDamping
      />
    </Canvas>
  );
}

function BotMotif({
  member,
  reducedMotion,
}: {
  member: FleetMember;
  reducedMotion: boolean;
}) {
  switch (member.slug) {
    case "astro":
      return <AstroMotif member={member} reducedMotion={reducedMotion} />;
    case "brando":
      return <PrismMotif member={member} />;
    case "marko":
      return <FunnelMotif member={member} />;
    case "devo":
      return <BlocksMotif member={member} />;
    case "dato":
      return <BarsMotif member={member} />;
    case "aivo":
      return <NeuralMotif member={member} />;
    case "como":
      return <BubblesMotif member={member} />;
    case "pomo":
      return <TimelineMotif member={member} />;
    case "fino":
      return <LedgerMotif member={member} />;
    case "rovo":
      return <LabMotif member={member} reducedMotion={reducedMotion} />;
    case "quanto":
      return <ScoreMotif member={member} />;
  }
}

function AstroMotif({
  member,
  reducedMotion,
}: {
  member: FleetMember;
  reducedMotion: boolean;
}) {
  const rings = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (reducedMotion || !rings.current) return;
    rings.current.rotation.y += dt * 0.4;
    rings.current.rotation.z += dt * 0.12;
  });
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.55, 48, 48]} />
        <meshStandardMaterial
          color={member.theme.primary}
          emissive={member.theme.accent}
          emissiveIntensity={0.85}
          roughness={0.22}
          metalness={0.35}
        />
      </mesh>
      <group ref={rings}>
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <torusGeometry args={[0.95, 0.018, 12, 80]} />
          <meshBasicMaterial color={member.theme.secondary} />
        </mesh>
        <mesh rotation={[0.5, 0.8, 0.2]}>
          <torusGeometry args={[1.2, 0.01, 12, 80]} />
          <meshBasicMaterial color={member.theme.accent} transparent opacity={0.7} />
        </mesh>
      </group>
    </group>
  );
}

function PrismMotif({ member }: { member: FleetMember }) {
  return (
    <group>
      <mesh rotation={[0.4, 0.6, 0.1]}>
        <octahedronGeometry args={[0.95, 0]} />
        <meshStandardMaterial
          color={member.theme.primary}
          emissive={member.theme.secondary}
          emissiveIntensity={0.55}
          roughness={0.18}
          metalness={0.25}
        />
      </mesh>
      {[ -1.1, 0, 1.1 ].map((x) => (
        <mesh key={x} position={[x * 0.55, -1.15, 0]}>
          <boxGeometry args={[0.28, 0.7, 0.28]} />
          <meshStandardMaterial color={member.theme.accent} emissive={member.theme.accent} emissiveIntensity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function FunnelMotif({ member }: { member: FleetMember }) {
  return (
    <group rotation={[0.3, 0, 0]}>
      {[0.9, 0.62, 0.38].map((r, i) => (
        <mesh key={r} position={[0, 0.7 - i * 0.55, 0]}>
          <cylinderGeometry args={[r, r * 0.72, 0.16, 32, 1, true]} />
          <meshStandardMaterial
            color={i === 0 ? member.theme.secondary : member.theme.accent}
            emissive={member.theme.secondary}
            emissiveIntensity={0.25}
            side={THREE.DoubleSide}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      ))}
      <mesh position={[0, -0.95, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={member.theme.accent} />
      </mesh>
    </group>
  );
}

function BlocksMotif({ member }: { member: FleetMember }) {
  const offsets: [number, number, number][] = [
    [-0.55, 0.35, 0.2],
    [0.15, 0.55, -0.15],
    [0.55, -0.15, 0.25],
    [-0.2, -0.45, -0.2],
    [0.05, 0.05, 0.55],
  ];
  return (
    <group>
      {offsets.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.42, 0.42, 0.42]} />
          <meshStandardMaterial
            color={i % 2 ? member.theme.secondary : member.theme.primary}
            emissive={member.theme.accent}
            emissiveIntensity={0.15}
            metalness={0.35}
            roughness={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

function BarsMotif({ member }: { member: FleetMember }) {
  const heights = [0.5, 0.9, 0.65, 1.2, 0.8];
  return (
    <group position={[0, -0.5, 0]}>
      {heights.map((h, i) => (
        <mesh key={i} position={[(i - 2) * 0.38, h / 2, 0]}>
          <boxGeometry args={[0.22, h, 0.22]} />
          <meshStandardMaterial
            color={member.theme.secondary}
            emissive={member.theme.accent}
            emissiveIntensity={0.2 + i * 0.05}
          />
        </mesh>
      ))}
    </group>
  );
}

function NeuralMotif({ member }: { member: FleetMember }) {
  const nodes = useMemo(
    () =>
      [
        [0, 0.2, 0],
        [0.9, 0.55, 0.2],
        [-0.85, 0.4, 0.15],
        [0.55, -0.7, 0.3],
        [-0.5, -0.65, -0.2],
        [0.1, 0.9, -0.4],
      ] as [number, number, number][],
    [],
  );
  return (
    <group>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i === 0 ? 0.22 : 0.12, 16, 16]} />
          <meshStandardMaterial
            color={member.theme.primary}
            emissive={i === 0 ? member.theme.accent : member.theme.secondary}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      {nodes.slice(1).map((p, i) => (
        <mesh key={`l-${i}`} position={[p[0] / 2, p[1] / 2 + 0.1, p[2] / 2]}>
          <boxGeometry args={[0.03, Math.hypot(p[0], p[1]) * 0.7, 0.03]} />
          <meshBasicMaterial color={member.theme.secondary} transparent opacity={0.45} />
        </mesh>
      ))}
    </group>
  );
}

function BubblesMotif({ member }: { member: FleetMember }) {
  const bubbles: [number, number, number, number][] = [
    [-0.7, 0.35, 0, 0.42],
    [0.55, 0.15, 0.2, 0.32],
    [0.1, -0.55, -0.1, 0.28],
    [0.85, -0.45, 0.15, 0.18],
  ];
  return (
    <group>
      {bubbles.map(([x, y, z, r], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[r, 24, 24]} />
          <meshStandardMaterial
            color={member.theme.secondary}
            roughness={0.25}
            transparent
            opacity={0.9}
            emissive={member.theme.accent}
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function TimelineMotif({ member }: { member: FleetMember }) {
  const widths = [1.8, 1.2, 1.5];
  return (
    <group>
      {widths.map((w, i) => (
        <mesh key={i} position={[w / 2 - 0.9, 0.55 - i * 0.5, 0]}>
          <boxGeometry args={[w, 0.18, 0.18]} />
          <meshStandardMaterial
            color={i === 1 ? member.theme.accent : member.theme.secondary}
            emissive={member.theme.secondary}
            emissiveIntensity={0.18}
          />
        </mesh>
      ))}
    </group>
  );
}

function LedgerMotif({ member }: { member: FleetMember }) {
  return (
    <group rotation={[-0.25, 0.4, 0.1]}>
      <mesh>
        <boxGeometry args={[1.6, 1.05, 0.06]} />
        <meshStandardMaterial color={member.theme.primary} metalness={0.3} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.38, 0.04]}>
        <boxGeometry args={[1.35, 0.03, 0.02]} />
        <meshBasicMaterial color={member.theme.accent} />
      </mesh>
      <mesh position={[0.45, -0.28, 0.05]}>
        <cylinderGeometry args={[0.16, 0.16, 0.04, 24]} />
        <meshStandardMaterial color={member.theme.secondary} emissive={member.theme.accent} emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function LabMotif({
  member,
  reducedMotion,
}: {
  member: FleetMember;
  reducedMotion: boolean;
}) {
  const scan = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!scan.current || reducedMotion) return;
    scan.current.position.y = Math.sin(clock.elapsedTime) * 0.45;
  });
  return (
    <group>
      <mesh rotation={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.42, 0.55, 1.3, 24, 1, true]} />
        <meshStandardMaterial
          color={member.theme.primary}
          roughness={0.2}
          metalness={0.2}
          transparent
          opacity={0.88}
          emissive={member.theme.secondary}
          emissiveIntensity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={scan}>
        <torusGeometry args={[0.48, 0.02, 8, 40]} />
        <meshBasicMaterial color={member.theme.accent} />
      </mesh>
    </group>
  );
}

function ScoreMotif({ member }: { member: FleetMember }) {
  return (
    <group>
      <mesh>
        <torusGeometry args={[0.85, 0.08, 16, 80, Math.PI * 1.7]} />
        <meshStandardMaterial
          color={member.theme.secondary}
          emissive={member.theme.secondary}
          emissiveIntensity={0.45}
        />
      </mesh>
      <mesh rotation={[0, 0, 0.4]}>
        <torusGeometry args={[0.85, 0.04, 12, 40, Math.PI * 0.28]} />
        <meshBasicMaterial color={member.theme.accent} />
      </mesh>
    </group>
  );
}

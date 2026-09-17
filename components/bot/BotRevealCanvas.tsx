"use client";

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import type { FleetMember, FleetSlug } from "@/lib/fleet";
import { usePrefersReducedMotion } from "@/lib/motion";

const subscribe = () => () => {};

export function BotRevealLoader({ member }: { member: FleetMember }) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  if (!mounted) {
    return (
      <div
        className="absolute inset-0"
        style={{ background: member.theme.primary }}
        aria-hidden="true"
      />
    );
  }
  return <BotRevealCanvas member={member} />;
}

export function BotRevealCanvas({ member }: { member: FleetMember }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.2, 4.6], fov: 40, near: 0.1, far: 40 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={[member.theme.primary]} />
        <fog attach="fog" args={[member.theme.primary, 6, 16]} />
        <ambientLight intensity={0.35} color={member.theme.secondary} />
        <pointLight position={[0, 0, 2]} intensity={1.8} color={member.theme.accent} distance={10} />
        <pointLight position={[3, 2, 2]} intensity={0.6} color={member.theme.secondary} />
        <Float
          speed={reducedMotion ? 0 : 1.1}
          rotationIntensity={reducedMotion ? 0 : 0.35}
          floatIntensity={reducedMotion ? 0 : 0.45}
        >
          <BotMotif member={member} reducedMotion={reducedMotion} />
        </Float>
      </Canvas>
    </div>
  );
}

function BotMotif({
  member,
  reducedMotion,
}: {
  member: FleetMember;
  reducedMotion: boolean;
}) {
  switch (member.slug as FleetSlug) {
    case "astro":
      return <AstroMotif member={member} reducedMotion={reducedMotion} />;
    case "brando":
      return <BrandoMotif member={member} />;
    case "marko":
      return <MarkoMotif member={member} />;
    case "devo":
      return <DevoMotif member={member} />;
    case "dato":
      return <DatoMotif member={member} reducedMotion={reducedMotion} />;
    case "aivo":
      return <AivoMotif member={member} reducedMotion={reducedMotion} />;
    case "como":
      return <ComoMotif member={member} />;
    case "pomo":
      return <PomoMotif member={member} />;
    case "fino":
      return <FinoMotif member={member} />;
    case "rovo":
      return <RovoMotif member={member} />;
    case "quanto":
      return <QuantoMotif member={member} reducedMotion={reducedMotion} />;
    default:
      return <AstroMotif member={member} reducedMotion={reducedMotion} />;
  }
}

function Glass({
  color,
  emissive,
  children,
}: {
  color: string;
  emissive: string;
  children: ReactNode;
}) {
  return (
    <mesh>
      {children}
      <meshPhysicalMaterial
        color={color}
        roughness={0.12}
        metalness={0.2}
        transmission={0.45}
        thickness={0.6}
        transparent
        opacity={0.95}
        emissive={emissive}
        emissiveIntensity={0.55}
      />
    </mesh>
  );
}

function AstroMotif({
  member,
  reducedMotion,
}: {
  member: FleetMember;
  reducedMotion: boolean;
}) {
  const a = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (reducedMotion || !a.current) return;
    a.current.rotation.y += dt * 0.35;
    a.current.rotation.z += dt * 0.12;
  });
  return (
    <group ref={a}>
      <Glass color={member.theme.primary} emissive={member.theme.secondary}>
        <sphereGeometry args={[0.55, 48, 48]} />
      </Glass>
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[0.9, 0.018, 12, 96]} />
        <meshBasicMaterial color={member.theme.accent} />
      </mesh>
      <mesh rotation={[0.5, 0.8, 0.2]}>
        <torusGeometry args={[1.15, 0.012, 12, 96]} />
        <meshBasicMaterial color={member.theme.secondary} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

function BrandoMotif({ member }: { member: FleetMember }) {
  return (
    <group>
      <mesh rotation={[0.4, 0.6, 0.2]}>
        <icosahedronGeometry args={[0.95, 0]} />
        <meshPhysicalMaterial
          color={member.theme.primary}
          roughness={0.08}
          metalness={0.15}
          transmission={0.55}
          thickness={0.8}
          emissive={member.theme.secondary}
          emissiveIntensity={0.45}
        />
      </mesh>
      <mesh position={[0.7, 0.55, 0.3]} rotation={[0.2, 0.4, 0]}>
        <octahedronGeometry args={[0.28, 0]} />
        <meshBasicMaterial color={member.theme.accent} transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

function MarkoMotif({ member }: { member: FleetMember }) {
  return (
    <group rotation={[-0.4, 0.3, 0]}>
      {[0.9, 0.62, 0.38].map((r, i) => (
        <mesh key={r} position={[0, 0.55 - i * 0.42, 0]}>
          <coneGeometry args={[r, 0.38, 4, 1, true]} />
          <meshPhysicalMaterial
            color={member.theme.primary}
            emissive={i === 0 ? member.theme.secondary : member.theme.accent}
            emissiveIntensity={0.5}
            roughness={0.2}
            transparent
            opacity={0.9}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function DevoMotif({ member }: { member: FleetMember }) {
  const cubes: [number, number, number][] = [
    [-0.55, 0.2, 0],
    [0, 0.45, 0.2],
    [0.55, 0.1, -0.1],
    [0.15, -0.4, 0.15],
    [-0.3, -0.25, -0.25],
  ];
  return (
    <group>
      {cubes.map((pos) => (
        <mesh key={pos.join(",")} position={pos}>
          <boxGeometry args={[0.42, 0.42, 0.42]} />
          <meshPhysicalMaterial
            color={member.theme.primary}
            emissive={member.theme.secondary}
            emissiveIntensity={0.4}
            roughness={0.18}
            metalness={0.35}
            wireframe={false}
          />
        </mesh>
      ))}
      <mesh>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshBasicMaterial
          color={member.theme.accent}
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

function DatoMotif({
  member,
  reducedMotion,
}: {
  member: FleetMember;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const heights = [0.5, 0.95, 0.7, 1.25, 0.85, 1.1];
  useFrame(({ clock }) => {
    if (reducedMotion || !group.current) return;
    group.current.children.forEach((child, i) => {
      const base = heights[i] ?? 0.6;
      child.scale.y = base + Math.sin(clock.elapsedTime * 1.4 + i) * 0.12;
    });
  });
  return (
    <group ref={group} position={[-0.9, -0.4, 0]}>
      {heights.map((h, i) => (
        <mesh key={h} position={[i * 0.36, h / 2, 0]}>
          <boxGeometry args={[0.22, 1, 0.22]} />
          <meshStandardMaterial
            color={member.theme.primary}
            emissive={i % 2 ? member.theme.accent : member.theme.secondary}
            emissiveIntensity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function AivoMotif({
  member,
  reducedMotion,
}: {
  member: FleetMember;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (reducedMotion || !group.current) return;
    group.current.rotation.y += dt * 0.25;
  });
  const nodes: [number, number, number][] = [
    [0, 0, 0],
    [0.9, 0.4, 0.2],
    [-0.8, 0.5, -0.2],
    [0.3, -0.7, 0.5],
    [-0.4, -0.5, -0.6],
    [0.7, 0.1, -0.7],
  ];
  return (
    <group ref={group}>
      {nodes.map((pos) => (
        <mesh key={pos.join(",")} position={pos}>
          <sphereGeometry args={[pos[0] === 0 && pos[1] === 0 ? 0.28 : 0.12, 20, 20]} />
          <meshStandardMaterial
            color={member.theme.primary}
            emissive={member.theme.accent}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function ComoMotif({ member }: { member: FleetMember }) {
  const bubbles: [number, number, number, number][] = [
    [-0.55, 0.15, 0, 0.55],
    [0.45, 0.45, 0.2, 0.4],
    [0.15, -0.45, -0.15, 0.32],
  ];
  return (
    <group>
      {bubbles.map(([x, y, z, r]) => (
        <mesh key={`${x}${y}`} position={[x, y, z]}>
          <sphereGeometry args={[r, 28, 28]} />
          <meshPhysicalMaterial
            color={member.theme.primary}
            transmission={0.4}
            roughness={0.15}
            emissive={member.theme.secondary}
            emissiveIntensity={0.45}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

function PomoMotif({ member }: { member: FleetMember }) {
  const bars = [1.8, 1.35, 2.1, 0.95];
  return (
    <group position={[-1, 0.4, 0]}>
      {bars.map((w, i) => (
        <mesh key={w} position={[w / 2, -i * 0.32, 0]}>
          <boxGeometry args={[w, 0.18, 0.18]} />
          <meshStandardMaterial
            color={member.theme.primary}
            emissive={i === 2 ? member.theme.accent : member.theme.secondary}
            emissiveIntensity={0.65}
          />
        </mesh>
      ))}
    </group>
  );
}

function FinoMotif({ member }: { member: FleetMember }) {
  return (
    <group rotation={[0.25, -0.4, 0]}>
      <mesh>
        <boxGeometry args={[1.8, 1.15, 0.08]} />
        <meshPhysicalMaterial
          color={member.theme.primary}
          metalness={0.3}
          roughness={0.2}
          emissive={member.theme.secondary}
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh position={[0, 0.38, 0.05]}>
        <boxGeometry args={[1.4, 0.04, 0.02]} />
        <meshBasicMaterial color={member.theme.accent} />
      </mesh>
      <mesh position={[0.45, -0.28, 0.05]}>
        <circleGeometry args={[0.16, 24]} />
        <meshBasicMaterial color={member.theme.accent} />
      </mesh>
    </group>
  );
}

function RovoMotif({ member }: { member: FleetMember }) {
  return (
    <group>
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.42, 0.55, 1.15, 28]} />
        <meshPhysicalMaterial
          color={member.theme.primary}
          transmission={0.5}
          roughness={0.08}
          thickness={0.5}
          emissive={member.theme.secondary}
          emissiveIntensity={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.28, 20]} />
        <meshStandardMaterial color={member.theme.accent} emissive={member.theme.accent} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.15, 0.05, 0.1]}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshBasicMaterial color={member.theme.accent} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

function QuantoMotif({
  member,
  reducedMotion,
}: {
  member: FleetMember;
  reducedMotion: boolean;
}) {
  const ring = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (reducedMotion || !ring.current) return;
    ring.current.rotation.z -= dt * 0.4;
  });
  return (
    <group>
      <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.85, 0.08, 16, 64, Math.PI * 1.55]} />
        <meshStandardMaterial
          color={member.theme.secondary}
          emissive={member.theme.secondary}
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh>
        <circleGeometry args={[0.55, 40]} />
        <meshBasicMaterial color={member.theme.primary} />
      </mesh>
    </group>
  );
}

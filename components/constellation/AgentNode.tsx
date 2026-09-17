"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { FleetMember } from "@/lib/fleet";
import { constellationScroll } from "@/lib/scroll-state";
import { useFleetHover } from "@/components/ui/FleetHoverProvider";

type AgentNodeProps = {
  member: FleetMember;
  index: number;
  reducedMotion?: boolean;
};

export function AgentNode({
  member,
  index,
  reducedMotion = false,
}: AgentNodeProps) {
  const router = useRouter();
  const group = useRef<THREE.Group>(null);
  const glow = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);
  const { hoveredId, hover } = useFleetHover();
  const isCore = member.slug === "astro";
  const active = hoveredId === member.slug;
  const radius = isCore ? 0.44 : 0.185;
  const base = member.position;
  const phase = index * 0.73;
  const drag = useRef({ x: 0, y: 0 });
  const color = member.theme.secondary;
  const accent = member.theme.accent;

  useFrame(({ clock }, dt) => {
    const node = group.current;
    if (!node) return;
    const t = clock.elapsedTime;
    const bob =
      reducedMotion || isCore ? 0 : Math.sin(t * 0.7 + phase) * 0.08;
    node.position.set(base[0], base[1] + bob, base[2]);
    const target = active ? 1.32 : 1;
    const s = THREE.MathUtils.damp(node.scale.x, target, 8, dt);
    node.scale.setScalar(s);
    if (glow.current) {
      const mat = glow.current.material as THREE.MeshBasicMaterial;
      mat.opacity = THREE.MathUtils.damp(
        mat.opacity,
        active ? 0.34 : isCore ? 0.16 : 0.1,
        8,
        dt,
      );
    }
    if (core.current) {
      const mat = core.current.material as THREE.MeshPhysicalMaterial;
      mat.emissiveIntensity = THREE.MathUtils.damp(
        mat.emissiveIntensity,
        active ? 1.25 : isCore ? 0.62 : 0.38,
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
        hover(member.slug);
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
          router.push(`/fleet/${member.slug}`);
        }
      }}
    >
      <mesh scale={2.4} visible={false}>
        <sphereGeometry args={[radius, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <mesh ref={glow} scale={2.2} renderOrder={0}>
        <sphereGeometry args={[radius, 16, 16]} />
        <meshBasicMaterial
          color={accent}
          transparent
          opacity={0.1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={core} renderOrder={1}>
        <sphereGeometry args={[radius, isCore ? 48 : 28, isCore ? 48 : 28]} />
        <meshPhysicalMaterial
          color={member.theme.primary}
          roughness={0.1}
          metalness={0.22}
          transmission={0.58}
          thickness={0.55}
          ior={1.42}
          transparent
          opacity={0.94}
          emissive={color}
          emissiveIntensity={isCore ? 0.62 : 0.38}
        />
      </mesh>
      {isCore ? <CoreRings reducedMotion={reducedMotion} /> : null}
      {hoveredId === member.slug && constellationScroll.progress < 0.35 ? (
        <Html
          center
          sprite
          distanceFactor={8.2}
          style={{ pointerEvents: "none" }}
          zIndexRange={[5, 0]}
        >
          <div
            className="min-w-[9.5rem] rounded-2xl border bg-[#07010F]/82 px-3 py-2 shadow-[0_0_28px_rgba(123,92,255,0.35)] backdrop-blur-md"
            style={{ borderColor: `${accent}99` }}
          >
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.icon} alt="" width={16} height={16} />
              <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-white">
                {member.name}
              </span>
            </div>
            <p className="mt-1 text-[10px] leading-snug tracking-wide text-fog/85">
              {member.role}
            </p>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

function CoreRings({ reducedMotion }: { reducedMotion: boolean }) {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  const c = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    if (reducedMotion) return;
    if (a.current) a.current.rotation.y += dt * 0.42;
    if (b.current) b.current.rotation.x += dt * 0.28;
    if (c.current) c.current.rotation.z += dt * 0.18;
  });

  return (
    <group>
      <mesh ref={a} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[0.72, 0.012, 12, 96]} />
        <meshBasicMaterial color="#F5C542" transparent opacity={0.78} />
      </mesh>
      <mesh ref={b} rotation={[0.4, 0.6, 0.2]}>
        <torusGeometry args={[0.92, 0.008, 12, 96]} />
        <meshBasicMaterial color="#7B5CFF" transparent opacity={0.5} />
      </mesh>
      <mesh ref={c} rotation={[1.1, 0.2, 0.8]}>
        <torusGeometry args={[1.12, 0.006, 12, 96]} />
        <meshBasicMaterial color="#FF2BD6" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

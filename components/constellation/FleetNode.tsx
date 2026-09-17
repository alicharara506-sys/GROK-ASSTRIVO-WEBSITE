"use client";

import { useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import type { FleetMember } from "@/lib/fleet";
import { constellationScroll } from "@/lib/scroll-state";
import { useFleetUi } from "@/components/ui/FleetUiProvider";

type FleetNodeProps = {
  member: FleetMember;
  index: number;
  reducedMotion?: boolean;
  lite?: boolean;
};

export function FleetNode({
  member,
  index,
  reducedMotion = false,
  lite = false,
}: FleetNodeProps) {
  const group = useRef<THREE.Group>(null);
  const glow = useRef<THREE.Mesh>(null);
  const { hoveredId, hover } = useFleetUi();
  const router = useRouter();
  const isCore = member.slug === "astro";
  const active = hoveredId === member.slug;
  const radius = isCore ? 0.5 : 0.22;
  const base = member.position;
  const phase = index * 0.73;
  const drag = useRef({ x: 0, y: 0 });
  const color = isCore ? member.theme.accent : member.theme.secondary;

  useFrame(({ clock }, dt) => {
    const node = group.current;
    if (!node) return;
    const t = clock.elapsedTime;
    const bob =
      reducedMotion || isCore ? 0 : Math.sin(t * 0.7 + phase) * 0.07;
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
  });

  const detail = lite ? 16 : isCore ? 48 : 28;

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
      <mesh ref={glow} scale={2.25} renderOrder={0}>
        <sphereGeometry args={[radius, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh renderOrder={1}>
        <sphereGeometry args={[radius, detail, detail]} />
        <meshStandardMaterial
          color={isCore ? "#2a1848" : "#1a1228"}
          roughness={0.22}
          metalness={0.28}
          emissive={color}
          emissiveIntensity={active ? 1.35 : isCore ? 0.85 : 0.55}
        />
      </mesh>
      {isCore ? <CoreRings reducedMotion={reducedMotion} /> : null}
      {active && constellationScroll.progress < 0.35 ? (
        <Html
          center
          sprite
          distanceFactor={7.2}
          style={{ pointerEvents: "none" }}
          zIndexRange={[5, 0]}
          position={[0, radius + 0.55, 0]}
        >
          <div
            className="min-w-[10.5rem] rounded-2xl border px-3 py-2 shadow-[0_0_28px_rgba(255,43,214,0.28)] backdrop-blur-md"
            style={{
              borderColor: `${color}88`,
              background: "rgba(11, 11, 18, 0.82)",
            }}
          >
            <p
              className="font-display text-[11px] font-semibold tracking-[0.2em] text-white"
              style={{ color }}
            >
              {member.name}
            </p>
            <p className="mt-0.5 text-[10px] leading-snug text-[#E8E6F0]/80">
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
    if (a.current) a.current.rotation.y += dt * 0.45;
    if (b.current) b.current.rotation.x += dt * 0.32;
    if (c.current) c.current.rotation.z += dt * 0.22;
  });

  return (
    <group>
      <mesh ref={a} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[0.72, 0.012, 12, 96]} />
        <meshBasicMaterial color="#FF2BD6" transparent opacity={0.75} />
      </mesh>
      <mesh ref={b} rotation={[0.4, 0.6, 0.2]}>
        <torusGeometry args={[0.92, 0.008, 12, 96]} />
        <meshBasicMaterial color="#7B5CFF" transparent opacity={0.5} />
      </mesh>
      <mesh ref={c} rotation={[1.1, 0.2, 0.8]}>
        <torusGeometry args={[1.12, 0.006, 12, 80]} />
        <meshBasicMaterial color="#F5C542" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

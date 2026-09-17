"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ConstellationScene } from "@/components/constellation/ConstellationScene";
import { useConstellationFade } from "@/components/constellation/useConstellationFade";
import { COLORS } from "@/lib/constants";

function detectLite() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.innerWidth < 768 ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function ConstellationCanvas({ nested = false }: { nested?: boolean }) {
  const wrap = useConstellationFade();
  const [lite] = useState(detectLite);
  const layer = (
    <Canvas
      camera={{ position: [0, 0.35, 8.4], fov: 42, near: 0.1, far: 80 }}
      dpr={lite ? [1, 1.25] : [1, 1.75]}
      gl={{
        antialias: !lite,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(COLORS.void, nested ? 0 : 1);
      }}
      onPointerMissed={() => {
        document.body.style.cursor = "grab";
      }}
      className="h-full w-full"
    >
      <ConstellationScene lite={lite} />
    </Canvas>
  );

  if (nested) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
      >
        {layer}
      </div>
    );
  }

  return (
    <div
      ref={wrap}
      aria-hidden="true"
      className="fixed inset-0 z-0 cursor-grab active:cursor-grabbing"
    >
      {layer}
    </div>
  );
}

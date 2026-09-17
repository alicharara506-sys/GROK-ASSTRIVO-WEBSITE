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

export default function ConstellationCanvas() {
  const wrap = useConstellationFade();
  const [lite] = useState(detectLite);

  return (
    <div
      ref={wrap}
      aria-hidden="true"
      className="fixed inset-0 z-0 cursor-grab active:cursor-grabbing"
    >
      <Canvas
        camera={{ position: [0, 0.35, 8.4], fov: 42, near: 0.1, far: 80 }}
        dpr={lite ? [1, 1.25] : [1, 1.75]}
        gl={{
          antialias: !lite,
          alpha: false,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(COLORS.void, 1);
        }}
        onPointerMissed={() => {
          document.body.style.cursor = "grab";
        }}
      >
        <ConstellationScene lite={lite} />
      </Canvas>
    </div>
  );
}

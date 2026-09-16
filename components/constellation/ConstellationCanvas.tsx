"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CAMERA, CONSTELLATION } from "@/lib/constants";
import { ConstellationScene } from "@/components/constellation/ConstellationScene";
import { useHeroScroll } from "@/lib/hooks";

export default function ConstellationCanvas() {
  const progress = useHeroScroll();
  const opacity = 1 - progress * (1 - CONSTELLATION.fadeOpacity);
  const interactive = progress < 0.72;

  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        opacity,
        pointerEvents: interactive ? "auto" : "none",
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: CAMERA.position, fov: CAMERA.fov }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#05010b", 0);
        }}
      >
        <Suspense fallback={null}>
          <ConstellationScene scrollProgress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
}

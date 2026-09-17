"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ConstellationScene } from "@/components/constellation/ConstellationScene";
import { useFleetUi } from "@/components/ui/FleetUiProvider";
import { COLORS, CONSTELLATION_AMBIENT_OPACITY } from "@/lib/constants";
import { constellationScroll } from "@/lib/scroll-state";

function detectLite() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.innerWidth < 768 ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function ConstellationCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const { hover } = useFleetUi();
  const [lite] = useState(detectLite);

  useEffect(() => {
    const el = wrap.current;
    const onScroll = () => {
      const t = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
      constellationScroll.progress = t;
      if (t > 0.35) hover(null);
      if (!el) return;
      const opacity = 1 - t * (1 - CONSTELLATION_AMBIENT_OPACITY);
      el.style.opacity = String(opacity);
      el.style.pointerEvents = t < 0.72 ? "auto" : "none";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hover]);

  return (
    <div
      ref={wrap}
      aria-hidden="true"
      className="fixed inset-0 z-0 cursor-grab active:cursor-grabbing"
    >
      <Canvas
        camera={{ position: [0, 0.35, 8.4], fov: 42, near: 0.1, far: 80 }}
        dpr={lite ? [1, 1.25] : [1, 1.75]}
        gl={{ antialias: !lite, alpha: false, powerPreference: "high-performance" }}
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

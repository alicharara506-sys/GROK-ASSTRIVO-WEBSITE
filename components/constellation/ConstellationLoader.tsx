"use client";

import { useSyncExternalStore } from "react";
import ConstellationCanvas from "@/components/constellation/ConstellationCanvas";
import { CanvasGuard } from "@/components/constellation/CanvasGuard";
import { FallbackConstellation } from "@/components/constellation/FallbackConstellation";
import { useConstellationFade } from "@/components/constellation/useConstellationFade";
import { hasWebGL } from "@/lib/webgl";

const subscribe = () => () => {};

function FallbackLayer() {
  const wrap = useConstellationFade();
  return (
    <div ref={wrap} className="fixed inset-0 z-0">
      <FallbackConstellation />
    </div>
  );
}

export function ConstellationLoader() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const webgl = useSyncExternalStore(subscribe, hasWebGL, () => false);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 bg-void" aria-hidden="true" />;
  }

  if (!webgl) {
    return <FallbackLayer />;
  }

  return (
    <CanvasGuard fallback={<FallbackLayer />}>
      <ConstellationCanvas />
    </CanvasGuard>
  );
}

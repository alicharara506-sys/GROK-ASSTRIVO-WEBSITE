"use client";

import { useSyncExternalStore } from "react";
import ConstellationCanvas from "@/components/constellation/ConstellationCanvas";
import { CanvasGuard } from "@/components/constellation/CanvasGuard";
import { useConstellationFade } from "@/components/constellation/useConstellationFade";
import { canRenderWebGLScene } from "@/lib/webgl";

const subscribe = () => () => {};

export function ConstellationLoader() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const webgl = useSyncExternalStore(subscribe, canRenderWebGLScene, () => false);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 bg-void" aria-hidden="true" />;
  }

  if (!webgl) {
    return null;
  }

  return (
    <CanvasGuard fallback={null}>
      <FadingCanvas />
    </CanvasGuard>
  );
}

function FadingCanvas() {
  const wrap = useConstellationFade();
  return (
    <div ref={wrap} className="fixed inset-0 z-0">
      <ConstellationCanvas nested />
    </div>
  );
}

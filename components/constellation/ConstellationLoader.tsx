"use client";

import { useSyncExternalStore } from "react";
import ConstellationCanvas from "@/components/constellation/ConstellationCanvas";
import { CanvasGuard } from "@/components/constellation/CanvasGuard";
import { FallbackConstellation } from "@/components/constellation/FallbackConstellation";
import { useConstellationFade } from "@/components/constellation/useConstellationFade";
import { hasWebGL } from "@/lib/webgl";

const subscribe = () => () => {};

function HybridLayer() {
  const wrap = useConstellationFade();
  const webgl = useSyncExternalStore(subscribe, hasWebGL, () => false);

  return (
    <div ref={wrap} className="fixed inset-0 z-0">
      {webgl ? (
        <CanvasGuard fallback={null}>
          <ConstellationCanvas nested />
        </CanvasGuard>
      ) : null}
      <FallbackConstellation />
    </div>
  );
}

export function ConstellationLoader() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 bg-void" aria-hidden="true" />;
  }

  return <HybridLayer />;
}

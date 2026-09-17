"use client";

import { useSyncExternalStore } from "react";
import ConstellationCanvas from "@/components/constellation/ConstellationCanvas";

const subscribe = () => () => {};

export function ConstellationLoader() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 bg-void" aria-hidden="true" />;
  }

  return <ConstellationCanvas />;
}

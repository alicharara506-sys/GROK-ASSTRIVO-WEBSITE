"use client";

import dynamic from "next/dynamic";

const ConstellationCanvas = dynamic(
  () => import("@/components/constellation/ConstellationCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-0 bg-space" aria-hidden="true" />
    ),
  },
);

export function ConstellationLoader() {
  return <ConstellationCanvas />;
}

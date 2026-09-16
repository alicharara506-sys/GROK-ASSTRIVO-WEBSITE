"use client";

import dynamic from "next/dynamic";

const ConstellationCanvas = dynamic(
  () => import("@/components/constellation/ConstellationCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-0" aria-hidden="true" />
    ),
  },
);

export function ConstellationMount() {
  return <ConstellationCanvas />;
}

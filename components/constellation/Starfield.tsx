"use client";

import { Stars } from "@react-three/drei";
import { useIsCoarsePointer } from "@/lib/hooks";

export function Starfield() {
  const coarse = useIsCoarsePointer();
  return (
    <Stars
      radius={90}
      depth={50}
      count={coarse ? 1400 : 3200}
      factor={3.2}
      saturation={0.15}
      fade
      speed={0.35}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";
import { CONSTELLATION_AMBIENT_OPACITY } from "@/lib/constants";
import { constellationScroll } from "@/lib/scroll-state";
import { useOptionalFleetUi } from "@/components/ui/FleetUiProvider";

/** Fades the constellation layer as the hero scrolls away. No scroll hijack. */
export function useConstellationFade() {
  const wrap = useRef<HTMLDivElement>(null);
  const ui = useOptionalFleetUi();

  useEffect(() => {
    const el = wrap.current;
    const onScroll = () => {
      const t = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
      constellationScroll.progress = t;
      if (t > 0.35) ui?.hover(null);
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
  }, [ui]);

  return wrap;
}

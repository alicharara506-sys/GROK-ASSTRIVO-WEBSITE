"use client";

import { COLORS } from "@/lib/constants";
import { FLEET } from "@/lib/fleet";
import { useFleetUi } from "@/components/ui/FleetUiProvider";

export function HeroSection() {
  const { hoveredId } = useFleetUi();
  const hovered = FLEET.find((member) => member.slug === hoveredId);

  return (
    <section id="hero" className="pointer-events-none relative z-10 min-h-[100svh]">
      <div
        className="pointer-events-auto absolute inset-x-0 bottom-0 z-0 h-[16vh]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-5 pb-8 pt-24 sm:px-8">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.42em] text-violet">
            Agency constellation
          </p>
          <h1 className="font-display mt-3 text-5xl font-semibold tracking-[0.18em] text-white sm:text-7xl">
            ASTRIVO
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            One spine. Ten specialists. Drag to orbit, hover a node, click to
            open that specialist — not a conversation.
          </p>
          <p className="mt-5 min-h-[2.75rem] text-sm text-fog/80">
            {hovered ? (
              <span>
                <span
                  className="font-display tracking-[0.18em]"
                  style={{ color: hovered.theme.secondary }}
                >
                  {hovered.name}
                </span>
                <span className="text-muted"> — {hovered.role}</span>
              </span>
            ) : (
              <span className="text-muted">Explore a node to reveal the fleet.</span>
            )}
          </p>
        </div>
        <a
          href="#fleet"
          className="pointer-events-auto mx-auto flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted transition hover:text-fog"
        >
          <span>Meet the Fleet</span>
          <span
            aria-hidden="true"
            className="block h-8 w-px bg-linear-to-b from-magenta to-transparent"
            style={{ background: `linear-gradient(${COLORS.magenta}, transparent)` }}
          />
        </a>
      </div>
    </section>
  );
}

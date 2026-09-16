"use client";

import { useHeroScroll } from "@/lib/hooks";

export function HeroOverlay() {
  const progress = useHeroScroll();
  const opacity = Math.max(0, 1 - progress * 1.35);

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-svh pointer-events-none flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20"
    >
      <div
        className="mx-auto w-full max-w-6xl"
        style={{ opacity, transform: `translateY(${progress * 24}px)` }}
      >
        <p className="mb-3 text-[0.7rem] tracking-[0.42em] text-[#ff4ec8] uppercase">
          Astrivo Agency
        </p>
        <h1 className="font-display max-w-xl text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl">
          The constellation that grows companies.
        </h1>
        <p className="sr-only">
          Interactive 3D constellation of eleven Astrivo agents around ASTRO.
          Drag to orbit, hover for an agent name and icon, click to open
          details. A static map of the same fleet follows.
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
          Drag to orbit. Hover an agent. Click to talk. Eleven specialists, one
          spine — ASTRO at the core.
        </p>
        <a
          href="#fleet"
          className="pointer-events-auto mt-8 inline-flex items-center gap-2 text-xs tracking-[0.22em] text-white/70 uppercase transition hover:text-white"
        >
          Meet the fleet
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

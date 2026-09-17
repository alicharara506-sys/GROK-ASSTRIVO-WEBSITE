"use client";

import Link from "next/link";
import { FLEET } from "@/lib/fleet";
import { useOptionalFleetUi } from "@/components/ui/FleetUiProvider";

function nodeStyle(index: number, total: number, radius: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    left: `${50 + Math.cos(angle) * radius}%`,
    top: `${50 + Math.sin(angle) * radius}%`,
  };
}

export function FallbackConstellation() {
  const ui = useOptionalFleetUi();
  const specialists = FLEET.filter((member) => member.slug !== "astro");
  const core = FLEET[0];

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center pt-16 sm:pt-10">
      <div className="relative aspect-square w-[min(92vw,38rem)]">
        <div
          aria-hidden="true"
          className="fallback-orbit absolute inset-[6%] rounded-full border border-magenta/20"
        />
        <div
          aria-hidden="true"
          className="fallback-orbit-slow absolute inset-[18%] rounded-full border border-violet/20"
        />
        {specialists.map((member, index) => {
          const pos = nodeStyle(index, specialists.length, 38);
          const active = ui?.hoveredId === member.slug;
          return (
            <Link
              key={member.slug}
              href={`/fleet/${member.slug}`}
              aria-label={`Explore ${member.name}, ${member.role}`}
              onMouseEnter={() => ui?.hover(member.slug)}
              onMouseLeave={() => ui?.hover(null)}
              onFocus={() => ui?.hover(member.slug)}
              onBlur={() => ui?.hover(null)}
            className="absolute z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-[#0B0B12]/80 shadow-[0_0_24px_rgba(123,92,255,0.35)] transition hover:scale-110 pointer-events-auto"
              style={{
                ...pos,
                borderColor: member.theme.secondary,
                boxShadow: active
                  ? `0 0 28px ${member.theme.secondary}`
                  : undefined,
              }}
            >
              <span
                className="block h-2.5 w-2.5 rounded-full"
                style={{ background: member.theme.secondary, boxShadow: `0 0 12px ${member.theme.secondary}` }}
              />
              <span
                className="absolute top-[calc(100%+0.3rem)] whitespace-nowrap font-display text-[0.55rem] tracking-[0.14em] text-white/80"
                style={{ color: member.theme.accent }}
              >
                {member.name}
              </span>
            </Link>
          );
        })}
        <Link
          href="/fleet/astro"
          aria-label={`Explore ${core.name}, ${core.role}`}
          onMouseEnter={() => ui?.hover(core.slug)}
          onMouseLeave={() => ui?.hover(null)}
          onFocus={() => ui?.hover(core.slug)}
          onBlur={() => ui?.hover(null)}
          className="pointer-events-auto absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-magenta bg-[#1A1033] shadow-[0_0_48px_rgba(255,43,214,0.45)]"
        >
          <span className="font-display text-sm tracking-[0.2em] text-white">
            ASTRO
          </span>
        </Link>
      </div>
    </div>
  );
}

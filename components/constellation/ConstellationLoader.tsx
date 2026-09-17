"use client";

import { Component, useSyncExternalStore, type ReactNode } from "react";
import ConstellationCanvas from "@/components/constellation/ConstellationCanvas";
import { FLEET } from "@/lib/fleet";

const subscribe = () => () => {};

export function ConstellationLoader() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 bg-space" aria-hidden="true" />;
  }

  return (
    <WebGLGuard fallback={<RadialFallback />}>
      <ConstellationCanvas />
    </WebGLGuard>
  );
}

class WebGLGuard extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

function RadialFallback() {
  return (
    <div className="fixed inset-0 z-0 bg-space" aria-hidden="true">
      <div className="absolute left-1/2 top-[42%] h-[min(70vw,28rem)] w-[min(70vw,28rem)] -translate-x-1/2 -translate-y-1/2 opacity-70">
        <div className="absolute inset-[12%] rounded-full border border-magenta/20" />
        <div className="absolute inset-[28%] rounded-full border border-violet/25" />
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-magenta shadow-[0_0_24px_#FF2BD6]" />
        {FLEET.filter((member) => member.slug !== "astro").map((member, index) => {
          const angle = (index / 10) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 38;
          const y = 50 + Math.sin(angle) * 38;
          return (
            <span
              key={member.slug}
              className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                background: member.theme.secondary,
                boxShadow: `0 0 12px ${member.theme.accent}`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

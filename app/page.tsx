"use client";

import dynamic from "next/dynamic";
import { AgentPanel } from "@/components/ui/AgentPanel";
import { AgentUiProvider } from "@/components/ui/AgentUiProvider";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { HeroSection } from "@/components/constellation/HeroSection";
import { FleetMap } from "@/components/fleet/FleetMap";
import { AboutSection } from "@/components/about/AboutSection";

const ConstellationCanvas = dynamic(
  () => import("@/components/constellation/ConstellationCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-0 bg-space" aria-hidden="true" />
    ),
  },
);

export default function HomePage() {
  return (
    <AgentUiProvider>
      <ConstellationCanvas />
      <SiteHeader />
      <main>
        <HeroSection />
        <FleetMap />
        <AboutSection />
      </main>
      <SiteFooter />
      <AgentPanel />
    </AgentUiProvider>
  );
}

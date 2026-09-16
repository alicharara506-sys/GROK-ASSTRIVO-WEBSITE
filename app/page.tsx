import { AboutSection } from "@/components/about/AboutSection";
import { ConstellationLoader } from "@/components/constellation/ConstellationLoader";
import { HeroSection } from "@/components/constellation/HeroSection";
import { FleetMap } from "@/components/fleet/FleetMap";
import { AgentPanel } from "@/components/ui/AgentPanel";
import { AgentUiProvider } from "@/components/ui/AgentUiProvider";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export default function HomePage() {
  return (
    <AgentUiProvider>
      <ConstellationLoader />
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

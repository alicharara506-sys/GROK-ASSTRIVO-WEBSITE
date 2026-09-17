import { AboutSection } from "@/components/about/AboutSection";
import { ConstellationLoader } from "@/components/constellation/ConstellationLoader";
import { HeroSection } from "@/components/constellation/HeroSection";
import { FleetMap } from "@/components/fleet/FleetMap";
import { FleetHoverProvider } from "@/components/ui/FleetHoverProvider";

export default function HomePage() {
  return (
    <FleetHoverProvider>
      <ConstellationLoader />
      <main>
        <HeroSection />
        <FleetMap />
        <AboutSection />
      </main>
    </FleetHoverProvider>
  );
}

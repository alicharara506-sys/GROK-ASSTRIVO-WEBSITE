import { AboutSection } from "@/components/about/AboutSection";
import { ConstellationLoader } from "@/components/constellation/ConstellationLoader";
import { HeroSection } from "@/components/constellation/HeroSection";
import { FleetMap } from "@/components/fleet/FleetMap";
import { FleetUiProvider } from "@/components/ui/FleetUiProvider";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export default function HomePage() {
  return (
    <FleetUiProvider>
      <ConstellationLoader />
      <SiteHeader />
      <main>
        <HeroSection />
        <FleetMap />
        <AboutSection />
      </main>
      <SiteFooter />
    </FleetUiProvider>
  );
}

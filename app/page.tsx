import { About } from "@/components/about/About";
import { ConstellationMount } from "@/components/constellation/ConstellationMount";
import { HeroOverlay } from "@/components/constellation/HeroOverlay";
import { FleetMap } from "@/components/fleet/FleetMap";
import { AgentPanel } from "@/components/ui/AgentPanel";
import { AgentProvider } from "@/components/ui/agent-context";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

export default function Home() {
  return (
    <AgentProvider>
      <a
        href="#fleet"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to fleet
      </a>
      <ConstellationMount />
      <Header />
      <main>
        <HeroOverlay />
        <FleetMap />
        <About />
      </main>
      <Footer />
      <AgentPanel />
    </AgentProvider>
  );
}

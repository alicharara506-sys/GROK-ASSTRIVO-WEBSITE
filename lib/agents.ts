import { GROK_PLACEHOLDER_ORIGIN } from "@/lib/constants";

export type AgentId =
  | "astro"
  | "brando"
  | "marko"
  | "devo"
  | "dato"
  | "aivo"
  | "como"
  | "pomo"
  | "fino"
  | "rovo"
  | "quanto";

export type Vec3 = [number, number, number];

export type Agent = {
  id: AgentId;
  name: string;
  role: string;
  icon: string;
  grokDeepLink: string;
  /** Local constellation position; ASTRO sits at the origin. */
  position: Vec3;
};

/**
 * Build a placeholder Grok deep-link for an agent.
 * Replace `GROK_PLACEHOLDER_ORIGIN` in `lib/constants.ts`, this helper,
 * or each agent's `grokDeepLink` field below.
 */
export function grokDeepLinkFor(agentId: AgentId, name: string): string {
  const params = new URLSearchParams({
    agent: agentId,
    src: "astrivo",
    q: `Talk to ${name} from Astrivo Agency`,
  });
  return `${GROK_PLACEHOLDER_ORIGIN}/?${params.toString()}`;
}

export const AGENTS: Agent[] = [
  {
    id: "astro",
    name: "ASTRO",
    role: "Master orchestrator of the Astrivo fleet",
    icon: "/icons/astro.svg",
    grokDeepLink: grokDeepLinkFor("astro", "ASTRO"),
    position: [0, 0, 0],
  },
  {
    id: "brando",
    name: "BRANDO",
    role: "Branding",
    icon: "/icons/brando.svg",
    grokDeepLink: grokDeepLinkFor("brando", "BRANDO"),
    position: [2.65, 1.35, 0.85],
  },
  {
    id: "marko",
    name: "MARKO",
    role: "Digital marketing",
    icon: "/icons/marko.svg",
    grokDeepLink: grokDeepLinkFor("marko", "MARKO"),
    position: [-2.25, 1.75, 1.15],
  },
  {
    id: "devo",
    name: "DEVO",
    role: "Software engineering",
    icon: "/icons/devo.svg",
    grokDeepLink: grokDeepLinkFor("devo", "DEVO"),
    position: [1.45, -2.05, 1.75],
  },
  {
    id: "dato",
    name: "DATO",
    role: "Analytics",
    icon: "/icons/dato.svg",
    grokDeepLink: grokDeepLinkFor("dato", "DATO"),
    position: [-2.75, -0.55, 1.35],
  },
  {
    id: "aivo",
    name: "AIVO",
    role: "AI solutions",
    icon: "/icons/aivo.svg",
    grokDeepLink: grokDeepLinkFor("aivo", "AIVO"),
    position: [0.35, 2.55, -1.05],
  },
  {
    id: "como",
    name: "COMO",
    role: "Communications",
    icon: "/icons/como.svg",
    grokDeepLink: grokDeepLinkFor("como", "COMO"),
    position: [2.75, 0.25, -1.55],
  },
  {
    id: "pomo",
    name: "POMO",
    role: "Project management",
    icon: "/icons/pomo.svg",
    grokDeepLink: grokDeepLinkFor("pomo", "POMO"),
    position: [-1.55, 0.75, -2.55],
  },
  {
    id: "fino",
    name: "FINO",
    role: "Finance",
    icon: "/icons/fino.svg",
    grokDeepLink: grokDeepLinkFor("fino", "FINO"),
    position: [-0.55, -2.35, -1.35],
  },
  {
    id: "rovo",
    name: "ROVO",
    role: "R&D scout",
    icon: "/icons/rovo.svg",
    grokDeepLink: grokDeepLinkFor("rovo", "ROVO"),
    position: [2.15, -1.55, -0.45],
  },
  {
    id: "quanto",
    name: "QUANTO",
    role: "Quality & review",
    icon: "/icons/quanto.svg",
    grokDeepLink: grokDeepLinkFor("quanto", "QUANTO"),
    position: [-2.35, 1.55, -0.55],
  },
];

export const CORE_AGENT = AGENTS[0];
export const FLEET_AGENTS = AGENTS.filter((agent) => agent.id !== "astro");

export function getAgent(id: AgentId): Agent {
  const agent = AGENTS.find((item) => item.id === id);
  if (!agent) {
    throw new Error(`Unknown agent: ${id}`);
  }
  return agent;
}

/** Hub-and-spoke plus a few neighbor links so the 3D map reads as a constellation. */
export const CONSTELLATION_EDGES: [AgentId, AgentId][] = [
  ["astro", "brando"],
  ["astro", "marko"],
  ["astro", "devo"],
  ["astro", "dato"],
  ["astro", "aivo"],
  ["astro", "como"],
  ["astro", "pomo"],
  ["astro", "fino"],
  ["astro", "rovo"],
  ["astro", "quanto"],
  ["brando", "aivo"],
  ["brando", "como"],
  ["marko", "quanto"],
  ["marko", "aivo"],
  ["devo", "rovo"],
  ["devo", "fino"],
  ["dato", "quanto"],
  ["dato", "fino"],
  ["como", "rovo"],
  ["pomo", "quanto"],
  ["pomo", "aivo"],
  ["fino", "pomo"],
];

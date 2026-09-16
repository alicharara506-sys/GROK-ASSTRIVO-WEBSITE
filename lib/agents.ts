export type AgentId =
  | "ASTRO"
  | "BRANDO"
  | "MARKO"
  | "DEVO"
  | "DATO"
  | "AIVO"
  | "COMO"
  | "POMO"
  | "FINO"
  | "ROVO"
  | "QUANTO";

export type Agent = {
  id: AgentId;
  name: string;
  role: string;
  grokUrl: string;
  icon: string;
  isCore: boolean;
  accent: string;
  /** 3D position relative to the ASTRO core. */
  position: [number, number, number];
  /** Angle on the 2D fleet map, in radians. Ignored for the core. */
  angle: number;
  phase: number;
};

/**
 * Placeholder Grok deep links — swap these for live xAI / Grok agent URLs.
 *
 * Every “Talk to [Agent]” CTA reads `agent.grokUrl`, which is sourced from
 * this map. You can replace one agent at a time, or change the pattern below.
 */
export const AGENT_GROK_URLS: Record<AgentId, string> = {
  ASTRO: "https://grok.com/chat?agent=ASTRO",
  BRANDO: "https://grok.com/chat?agent=BRANDO",
  MARKO: "https://grok.com/chat?agent=MARKO",
  DEVO: "https://grok.com/chat?agent=DEVO",
  DATO: "https://grok.com/chat?agent=DATO",
  AIVO: "https://grok.com/chat?agent=AIVO",
  COMO: "https://grok.com/chat?agent=COMO",
  POMO: "https://grok.com/chat?agent=POMO",
  FINO: "https://grok.com/chat?agent=FINO",
  ROVO: "https://grok.com/chat?agent=ROVO",
  QUANTO: "https://grok.com/chat?agent=QUANTO",
};

type AgentSeed = {
  id: AgentId;
  role: string;
  isCore?: boolean;
  accent: string;
  position: [number, number, number];
  angle: number;
  phase: number;
};

function ringPoint(
  index: number,
  count: number,
  radius: number,
  y: number,
  offset = 0,
): [number, number, number] {
  const a = offset + (index / count) * Math.PI * 2;
  const wobble = 1 + (index % 2) * 0.07;
  return [Math.cos(a) * radius * wobble, y, Math.sin(a) * radius * wobble];
}

const UPPER = 5;
const LOWER = 5;

const SEEDS: AgentSeed[] = [
  {
    id: "ASTRO",
    role: "Master orchestrator of the Astrivo fleet",
    isCore: true,
    accent: "#ff4ef0",
    position: [0, 0, 0],
    angle: 0,
    phase: 0,
  },
  {
    id: "BRANDO",
    role: "Branding",
    accent: "#ff2ea6",
    position: ringPoint(0, UPPER, 2.18, 1.12),
    angle: (0 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 0.4,
  },
  {
    id: "MARKO",
    role: "Digital marketing",
    accent: "#ff4ec8",
    position: ringPoint(1, UPPER, 2.18, 1.12),
    angle: (1 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 0.9,
  },
  {
    id: "DEVO",
    role: "Software engineering",
    accent: "#c85bff",
    position: ringPoint(2, UPPER, 2.18, 1.12),
    angle: (2 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 1.4,
  },
  {
    id: "DATO",
    role: "Analytics",
    accent: "#9b5cff",
    position: ringPoint(3, UPPER, 2.18, 1.12),
    angle: (3 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 1.9,
  },
  {
    id: "AIVO",
    role: "AI solutions",
    accent: "#e23dff",
    position: ringPoint(4, UPPER, 2.18, 1.12),
    angle: (4 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 2.4,
  },
  {
    id: "COMO",
    role: "Communications",
    accent: "#ff5ec8",
    position: ringPoint(0, LOWER, 2.52, -1.18, Math.PI / 5),
    angle: (5 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 0.6,
  },
  {
    id: "POMO",
    role: "Project management",
    accent: "#d14dff",
    position: ringPoint(1, LOWER, 2.52, -1.18, Math.PI / 5),
    angle: (6 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 1.1,
  },
  {
    id: "FINO",
    role: "Finance",
    accent: "#b44dff",
    position: ringPoint(2, LOWER, 2.52, -1.18, Math.PI / 5),
    angle: (7 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 1.7,
  },
  {
    id: "ROVO",
    role: "R&D scout",
    accent: "#8b5cff",
    position: ringPoint(3, LOWER, 2.52, -1.18, Math.PI / 5),
    angle: (8 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 2.2,
  },
  {
    id: "QUANTO",
    role: "Quality & review",
    accent: "#ff3db4",
    position: ringPoint(4, LOWER, 2.52, -1.18, Math.PI / 5),
    angle: (9 / 10) * Math.PI * 2 - Math.PI / 2,
    phase: 2.8,
  },
];

export const AGENTS: Agent[] = SEEDS.map((seed) => ({
  id: seed.id,
  name: seed.id,
  role: seed.role,
  grokUrl: AGENT_GROK_URLS[seed.id],
  icon: `/icons/${seed.id.toLowerCase()}.svg`,
  isCore: Boolean(seed.isCore),
  accent: seed.accent,
  position: seed.position,
  angle: seed.angle,
  phase: seed.phase,
}));

export const CORE_AGENT = AGENTS.find((agent) => agent.isCore)!;
export const SATELLITE_AGENTS = AGENTS.filter((agent) => !agent.isCore);

export function getAgent(id: AgentId): Agent | undefined {
  return AGENTS.find((agent) => agent.id === id);
}

export function talkToLabel(agent: Agent): string {
  return `Talk to ${agent.name}`;
}

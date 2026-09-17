export type FleetSlug =
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

export type FleetTheme = {
  primary: string;
  secondary: string;
  accent: string;
};

export type FleetWork = {
  title: string;
  summary: string;
  label: "Scenario";
};

export type FleetFont = "display" | "serif" | "mono" | "geo" | "sans";

export type FleetMember = {
  slug: FleetSlug;
  name: string;
  role: string;
  creed: string;
  owns: string;
  mood: string;
  motif: string;
  font: FleetFont;
  icon: string;
  position: Vec3;
  theme: FleetTheme;
  services: string[];
  work: FleetWork[];
};

export const FLEET_ORDER: FleetSlug[] = [
  "astro",
  "brando",
  "marko",
  "devo",
  "dato",
  "aivo",
  "como",
  "pomo",
  "fino",
  "rovo",
  "quanto",
];

export const FLEET: FleetMember[] = [
  {
    slug: "astro",
    name: "ASTRO",
    role: "Master orchestrator",
    creed: "Core of the fleet. Routes, prioritizes, keeps one spine.",
    owns: "Brief intake, the strategy spine, and cross-specialist orchestration so every engagement stays one story.",
    mood: "Commanding · Calm · Cosmic",
    motif: "Central node with soft orbital rings; constellation lines that route, not decorate.",
    font: "display",
    icon: "/icons/astro.svg",
    position: [0, 0, 0],
    theme: {
      primary: "#1A1033",
      secondary: "#7B5CFF",
      accent: "#F5C542",
    },
    services: [
      "Brief intake & routing across the fleet",
      "Strategy spine (what to do next, what not to do)",
      "Cross-specialist orchestration & escalation",
      "Client-facing north star / kickoff clarity",
    ],
    work: [
      {
        title: "One brief → ten hands",
        summary:
          "A multi-discipline launch routed without client ping-pong — one intake, one spine, every specialist in sequence.",
        label: "Scenario",
      },
      {
        title: "Growth stack audit",
        summary:
          "Brand, funnel, product, and measurement mapped as a single system so the next move is obvious.",
        label: "Scenario",
      },
      {
        title: "Fleet playbook before spend",
        summary:
          "A founder who needs clarity first: priorities, owners, and a north star before a dollar of media or build.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "brando",
    name: "BRANDO",
    role: "Branding",
    creed: "Soul of the fleet. Belief systems, not just logos.",
    owns: "Positioning, identity direction, voice, and the Brand Foundation Document that every other specialist writes against.",
    mood: "Poetic · Precise · Distinctive",
    motif: "Soft prism / brand pillar cards; creed line as a quiet watermark.",
    font: "serif",
    icon: "/icons/brando.svg",
    position: [2.65, 1.35, 0.85],
    theme: {
      primary: "#2A0A3C",
      secondary: "#C77DFF",
      accent: "#FF6BCB",
    },
    services: [
      "Brand discovery & positioning",
      "Naming with rationale",
      "Identity direction (color, type, mood — briefs for human design)",
      "Voice, taglines, messaging frameworks",
      "Brand Foundation Document",
    ],
    work: [
      {
        title: "YUMMY BITE",
        summary:
          "Full identity from client mark — ritual, color, and applications that feel like a brand, not a wrapper.",
        label: "Scenario",
      },
      {
        title: "Category challenger rename",
        summary:
          "A positioning spine plus a name with rationale, so the market has a new sentence to say about you.",
        label: "Scenario",
      },
      {
        title: "Founder belief system",
        summary:
          "An agency or personal brand built from creation story, audience, and the space only they can own.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "marko",
    name: "MARKO",
    role: "Digital marketing",
    creed: "Voice of the fleet. Engineers attention; allergic to vanity metrics.",
    owns: "Paid media, search, authority, and social systems that convert — throughput, not noise.",
    mood: "Sharp · Kinetic · Conversion-first",
    motif: "Funnel ribbons and pulse dots — motion that suggests throughput, not chaos.",
    font: "geo",
    icon: "/icons/marko.svg",
    position: [-2.25, 1.75, 1.15],
    theme: {
      primary: "#1A0F08",
      secondary: "#FF5A1F",
      accent: "#FFD166",
    },
    services: [
      "Paid media (Meta, Google — targeting, creative, budget)",
      "SEO / Local SEO / GEO & AEO",
      "Keyword & competitive gap research",
      "Authority & digital PR",
      "Social systems that convert",
    ],
    work: [
      {
        title: "90-day channel plan",
        summary:
          "A spend map that kills vanity channels and concentrates budget where buyers actually arrive.",
        label: "Scenario",
      },
      {
        title: "Local maps + GBP rebuild",
        summary:
          "A multi-location brand restored on Maps and Search so nearby demand can find the door.",
        label: "Scenario",
      },
      {
        title: "Creative + funnel rebuild",
        summary:
          "Traffic existed; buyers didn’t. New creative and a funnel that turns attention into conversations.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "devo",
    name: "DEVO",
    role: "Software engineering",
    creed: "Builder of the fleet. Ships products that live and scale.",
    owns: "Web apps, commerce, marketing sites, mobile, APIs, and the launch path that keeps them alive.",
    mood: "Methodical · Clean · Durable",
    motif: "Blueprint grid, terminal tick marks, component blocks assembling into a product.",
    font: "mono",
    icon: "/icons/devo.svg",
    position: [1.45, -2.05, 1.75],
    theme: {
      primary: "#0A1628",
      secondary: "#3DDCFF",
      accent: "#5EEAD4",
    },
    services: [
      "Web apps (SaaS, portals, dashboards)",
      "E-commerce (Shopify or custom Next.js)",
      "Marketing sites (performance / SEO-first)",
      "Mobile (React Native / Flutter)",
      "APIs, integrations, DevOps & launch",
    ],
    work: [
      {
        title: "Astrivo 3D marketing site",
        summary:
          "Next.js + React Three Fiber architecture and delivery — the constellation you are inside now.",
        label: "Scenario",
      },
      {
        title: "Founder dashboard",
        summary:
          "Ops and revenue on one surface so the person running the company can see the week in seconds.",
        label: "Scenario",
      },
      {
        title: "Headless storefront rebuild",
        summary:
          "A commerce front rebuilt for speed and conversion, without throwing away the catalog underneath.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "dato",
    name: "DATO",
    role: "Analytics",
    creed: "Memory of the fleet. Measures; never guesses.",
    owns: "Tracking architecture, privacy-ready measurement, behavior diagnosis, and dashboards a founder can trust.",
    mood: "Quiet · Exact · Receipt-backed",
    motif: "Chart spines, heatmap wash, small source stamps on claims.",
    font: "sans",
    icon: "/icons/dato.svg",
    position: [-2.75, -0.55, 1.35],
    theme: {
      primary: "#041A1A",
      secondary: "#00C2A8",
      accent: "#7CFFB2",
    },
    services: [
      "GA4 / GTM tracking architecture",
      "Server-side tracking (Meta CAPI, GTM SS)",
      "Consent Mode & privacy-ready setups",
      "Clarity behavior + CRO diagnosis",
      "Looker Studio executive dashboards",
    ],
    work: [
      {
        title: "Tracking health check",
        summary:
          "A measurement pass that recovers signal lost to ad blockers and iOS — so spend decisions rest on receipts.",
        label: "Scenario",
      },
      {
        title: "Funnel leak map",
        summary:
          "Session-backed diagnosis of where buyers drop, with the exact pages and behaviors attached.",
        label: "Scenario",
      },
      {
        title: "CEO 30-second dashboard",
        summary:
          "Invoiced versus vanity: one Looker surface that answers how the business is actually doing.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "aivo",
    name: "AIVO",
    role: "AI solutions",
    creed: "Brain of the fleet. AI as teammate, not gimmick.",
    owns: "Custom agents, RAG on real knowledge, workflow automation, and LLM enablement with guardrails.",
    mood: "Futuristic · Grounded · Useful",
    motif: "Node graph / agent cards with hours saved as the hero metric.",
    font: "geo",
    icon: "/icons/aivo.svg",
    position: [0.35, 2.55, -1.05],
    theme: {
      primary: "#0D0221",
      secondary: "#A855F7",
      accent: "#22D3EE",
    },
    services: [
      "Custom AI agents (support, sales, research, ops)",
      "RAG systems on client knowledge",
      "Workflow automation (CRM, email, ads, data)",
      "AI content / visual engines",
      "LLM integration + enablement / guardrails",
    ],
    work: [
      {
        title: "The fleet as teammates",
        summary:
          "Astrivo’s own specialist system — AI that routes work like a colleague, not a novelty demo.",
        label: "Scenario",
      },
      {
        title: "Knowledge-vault support",
        summary:
          "A support agent answering from a real vault, with sources, so customers get truth instead of improvisation.",
        label: "Scenario",
      },
      {
        title: "Ops hours returned",
        summary:
          "Automation that gives a lean team 10+ hours a week back — measured, not promised as a guarantee.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "como",
    name: "COMO",
    role: "Communications",
    creed: "Voice to the outside world. Relationships; never leave on read.",
    owns: "Outbound voice across Gmail, WhatsApp, and Telegram — nurture, updates, and conversation memory for the fleet.",
    mood: "Warm · Fast · Human",
    motif: "Message bubbles and channel pills as abstract shapes — a calm queue, not a live inbox.",
    font: "sans",
    icon: "/icons/como.svg",
    position: [2.75, 0.25, -1.55],
    theme: {
      primary: "#0B1C2C",
      secondary: "#3B82F6",
      accent: "#67E8F9",
    },
    services: [
      "Gmail: proposals, follow-ups, newsletters (right specialist voice)",
      "WhatsApp / Telegram nurture & updates",
      "Lead warming sequences",
      "Conversation memory for the fleet",
    ],
    work: [
      {
        title: "Lead never goes cold",
        summary:
          "Welcome → value → booked conversation: a warming sequence that sounds like a person, not a drip.",
        label: "Scenario",
      },
      {
        title: "Human client updates",
        summary:
          "Multi-channel status that tells the truth early, in the voice of the specialist who did the work.",
        label: "Scenario",
      },
      {
        title: "Proposal loop closed",
        summary:
          "Proposal plus follow-up cadence that keeps the thread alive until a decision lands.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "pomo",
    name: "POMO",
    role: "Project management",
    creed: "Clock of the fleet. Brilliant work, on time, in scope.",
    owns: "Kickoff, milestones, risk, client status, approvals, and the project vault of decisions.",
    mood: "Ordered · Proactive · Steady",
    motif: "Gantt-lite bars, status chips, calendar ticks.",
    font: "sans",
    icon: "/icons/pomo.svg",
    position: [-1.55, 0.75, -2.55],
    theme: {
      primary: "#1C1408",
      secondary: "#F59E0B",
      accent: "#FDE68A",
    },
    services: [
      "Kickoff: milestones, owners, deadlines",
      "Timeline risk spotting & escalation",
      "Client status on autopilot",
      "Brief/asset coordination & approval loops",
      "Project vault (decisions, files, feedback)",
    ],
    work: [
      {
        title: "Multi-agent launch, no silent slips",
        summary:
          "A coordinated go-live where every specialist’s date is visible, and slippage is named the day it appears.",
        label: "Scenario",
      },
      {
        title: "Weekly status with a recovery plan",
        summary:
          "Bad news early, with owners and a path back — not a green dashboard hiding a red week.",
        label: "Scenario",
      },
      {
        title: "Approval loop that locks go-live",
        summary:
          "Revision caps and a written vault so the work can actually ship.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "fino",
    name: "FINO",
    role: "Finance",
    creed: "Guardian of money. Invoices become revenue.",
    owns: "Milestone invoicing, collection cadence, founder revenue reporting, and quote clarity before work starts.",
    mood: "Polite · Relentless · Trustworthy",
    motif: "Invoice card, paid / pending / overdue states, quiet gold rule lines.",
    font: "serif",
    icon: "/icons/fino.svg",
    position: [-0.55, -2.35, -1.35],
    theme: {
      primary: "#0A1F14",
      secondary: "#10B981",
      accent: "#D4AF37",
    },
    services: [
      "Milestone / retainer invoicing",
      "Payment tracking dashboards",
      "Reminder cadence (friendly → firm → formal)",
      "Revenue reporting for the founder",
      "Quote/terms clarity before work starts",
    ],
    work: [
      {
        title: "Milestone → invoice in under 24 hours",
        summary:
          "The moment a milestone lands, the invoice is already in motion — no work sitting unbilled.",
        label: "Scenario",
      },
      {
        title: "Overdue recovery, relationship intact",
        summary:
          "A reminder cadence that collects without burning the client who still wants to work with you.",
        label: "Scenario",
      },
      {
        title: "Monthly founder snapshot",
        summary:
          "Invoiced, collected, outstanding — one picture of the money layer.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "rovo",
    name: "ROVO",
    role: "Research & development",
    creed: "Scout of the fleet. Tests so production never fails first.",
    owns: "Technology intelligence, proofs of concept, tool benchmarking, and the pipeline that kills zombie tools.",
    mood: "Skeptical · Curious · Evidence-first",
    motif: "Petri / beaker marks, ADOPT · WATCH · SKIP verdict stamps.",
    font: "sans",
    icon: "/icons/rovo.svg",
    position: [2.15, -1.55, -0.45],
    theme: {
      primary: "#111827",
      secondary: "#84CC16",
      accent: "#A3E635",
    },
    services: [
      "Technology intelligence & platform change briefs",
      "PoCs before new services are sold",
      "Tool benchmarking (cost / quality / speed)",
      "Knowledge distillation for the fleet",
      "Innovation pipeline (and killing zombie tools)",
    ],
    work: [
      {
        title: "Fail in the lab",
        summary:
          "A proof of concept that saved a paid tool subscription — the failure happened before a client ever saw it.",
        label: "Scenario",
      },
      {
        title: "Platform change brief",
        summary:
          "A model or vendor shift distilled the same week, so the fleet could adopt with receipts, not rumor.",
        label: "Scenario",
      },
      {
        title: "Service-line go / no-go",
        summary:
          "A new offer either earns its place in the stack or gets killed with evidence.",
        label: "Scenario",
      },
    ],
  },
  {
    slug: "quanto",
    name: "QUANTO",
    role: "Quality & review",
    creed: "Conscience of the fleet. Last line before client eyes.",
    owns: "Output auditing, brand and fact discipline, promise policing, and client-readiness scoring.",
    mood: "Exacting · Fair · Uncompromising",
    motif: "Score ring (0–100), APPROVE / REVISE / REJECT stamps, checklist rails.",
    font: "sans",
    icon: "/icons/quanto.svg",
    position: [-2.35, 1.55, -0.55],
    theme: {
      primary: "#0F0F10",
      secondary: "#22C55E",
      accent: "#EF4444",
    },
    services: [
      "Output auditing (brand, ads, code, dashboards, AI)",
      "Brand consistency & sacred-word policing",
      "Fact-checking against sources",
      "Promise policing (no overcommit)",
      "Client-readiness scoring with fixable notes",
    ],
    work: [
      {
        title: "About vault PASS",
        summary:
          "Site About copy locked verbatim against the brand — no drift, no invented claims.",
        label: "Scenario",
      },
      {
        title: "Pre-ship score under 90",
        summary:
          "Work returned with exact fixes instead of a vague ‘needs polish’.",
        label: "Scenario",
      },
      {
        title: "Overpromise line cut",
        summary:
          "A guarantee that never should have shipped, removed before a client could read it.",
        label: "Scenario",
      },
    ],
  },
];

export const CORE_AGENT = FLEET[0];
export const FLEET_SPECIALISTS = FLEET.filter((member) => member.slug !== "astro");

const FLEET_BY_SLUG = new Map(FLEET.map((member) => [member.slug, member]));

export function isFleetSlug(value: string): value is FleetSlug {
  return FLEET_BY_SLUG.has(value as FleetSlug);
}

export function getFleetMember(slug: string): FleetMember | undefined {
  return FLEET_BY_SLUG.get(slug as FleetSlug);
}

export function requireFleetMember(slug: string): FleetMember {
  const member = getFleetMember(slug);
  if (!member) {
    throw new Error(`Unknown fleet member: ${slug}`);
  }
  return member;
}

export function adjacentMembers(slug: FleetSlug): {
  prev: FleetMember;
  next: FleetMember;
} {
  const index = FLEET_ORDER.indexOf(slug);
  const prevSlug = FLEET_ORDER[(index - 1 + FLEET_ORDER.length) % FLEET_ORDER.length];
  const nextSlug = FLEET_ORDER[(index + 1) % FLEET_ORDER.length];
  return {
    prev: requireFleetMember(prevSlug),
    next: requireFleetMember(nextSlug),
  };
}

/** Hub-and-spoke plus neighbor links so the 3D map reads as a constellation. */
export const CONSTELLATION_EDGES: [FleetSlug, FleetSlug][] = [
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

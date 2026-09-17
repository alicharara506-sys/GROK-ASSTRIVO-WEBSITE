export type FleetId =
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

export type FleetWork = {
  title: string;
  description: string;
  kind: "Scenario";
};

export type FleetTheme = {
  primary: string;
  secondary: string;
  accent: string;
  mood: [string, string, string];
  typography: string;
  motif: string;
};

export type FleetMember = {
  slug: FleetId;
  name: string;
  role: string;
  title: string;
  creed: string;
  overview: string;
  owns: string;
  icon: string;
  position: Vec3;
  theme: FleetTheme;
  services: string[];
  work: FleetWork[];
  adjacent: FleetId[];
};

export const FLEET: FleetMember[] = [
  {
    slug: "astro",
    name: "ASTRO",
    role: "Master orchestrator",
    title: "Master Agent / Orchestrator",
    creed: "One spine. Ten specialists. Work that routes, not work that waits.",
    overview:
      "ASTRO is the core of the fleet. It reads the brief, sets the order of operations, and keeps every specialist on one story — so founders get a system, not a pile of handoffs.",
    owns: "Brief intake, strategy spine, cross-specialist orchestration, and client-facing north star.",
    icon: "/icons/astro.svg",
    position: [0, 0, 0],
    theme: {
      primary: "#1A1033",
      secondary: "#7B5CFF",
      accent: "#F5C542",
      mood: ["Commanding", "Calm", "Cosmic"],
      typography: "Geometric sans, medium weight — authoritative, never loud.",
      motif: "Central node with soft orbital rings; constellation lines that route.",
    },
    services: [
      "Brief intake & routing across the fleet",
      "Strategy spine — what to do next, and what not to do",
      "Cross-specialist orchestration & escalation",
      "Client-facing north star / kickoff clarity",
    ],
    work: [
      {
        title: "One brief → ten hands",
        description:
          "A multi-discipline launch routed without client ping-pong — branding, funnel, product, and measurement on one spine.",
        kind: "Scenario",
      },
      {
        title: "Growth stack audit",
        description:
          "Brand, funnel, product, and measurement mapped as one system so the next move is obvious.",
        kind: "Scenario",
      },
      {
        title: "Founder fleet playbook",
        description:
          "Clarity before spend: who owns what, in what order, and which work can wait.",
        kind: "Scenario",
      },
    ],
    adjacent: ["brando", "marko", "devo"],
  },
  {
    slug: "brando",
    name: "BRANDO",
    role: "Branding",
    title: "Soul of the fleet",
    creed: "Belief systems, not just logos.",
    overview:
      "BRANDO digs for creation story, audience, and the space only you can own — then turns that into identity, voice, and a foundation the rest of the fleet can ship against.",
    owns: "Positioning, naming, identity direction, voice, and the Brand Foundation Document.",
    icon: "/icons/brando.svg",
    position: [2.65, 1.35, 0.85],
    theme: {
      primary: "#2A0A3C",
      secondary: "#C77DFF",
      accent: "#FF6BCB",
      mood: ["Poetic", "Precise", "Distinctive"],
      typography: "Expressive display + clean editorial body.",
      motif: "Soft prism / brand pillar cards; creed line as a quiet watermark.",
    },
    services: [
      "Brand discovery & positioning",
      "Naming with rationale",
      "Identity direction — color, type, mood (briefs for human design)",
      "Voice, taglines, messaging frameworks",
      "Brand Foundation Document",
    ],
    work: [
      {
        title: "YUMMY BITE",
        description:
          "Full identity from client mark — ritual, color, and applications that feel inevitable on the shelf.",
        kind: "Scenario",
      },
      {
        title: "Category challenger rename",
        description:
          "A positioning spine and new name that make the category argument in one breath.",
        kind: "Scenario",
      },
      {
        title: "Founder belief system",
        description:
          "Personal-brand architecture for an agency principal: creed, voice, and a mark that can scale.",
        kind: "Scenario",
      },
    ],
    adjacent: ["astro", "como", "marko"],
  },
  {
    slug: "marko",
    name: "MARKO",
    role: "Digital marketing",
    title: "Voice of the fleet",
    creed: "Engineers attention. Allergic to vanity metrics.",
    overview:
      "MARKO builds the channels that earn demand — paid, search, authority, and social systems that convert. Throughput over theater.",
    owns: "Paid media, SEO / local / GEO & AEO, keyword research, digital PR, and converting social systems.",
    icon: "/icons/marko.svg",
    position: [-2.25, 1.75, 1.15],
    theme: {
      primary: "#1A0F08",
      secondary: "#FF5A1F",
      accent: "#FFD166",
      mood: ["Sharp", "Kinetic", "Conversion-first"],
      typography: "Bold condensed headlines + highly legible UI sans.",
      motif: "Funnel ribbons and pulse dots — motion that suggests throughput.",
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
        description:
          "A spend map that kills vanity channels and concentrates budget where buyers actually appear.",
        kind: "Scenario",
      },
      {
        title: "Multi-location maps rebuild",
        description:
          "Local pack + GBP architecture for a brand that was invisible on the street it owned.",
        kind: "Scenario",
      },
      {
        title: "Traffic without buyers",
        description:
          "Creative and funnel rebuild where sessions existed and revenue did not.",
        kind: "Scenario",
      },
    ],
    adjacent: ["astro", "dato", "brando"],
  },
  {
    slug: "devo",
    name: "DEVO",
    role: "Software engineering",
    title: "Builder of the fleet",
    creed: "Ships products that live and scale.",
    overview:
      "DEVO turns the story into software — sites, apps, storefronts, and the APIs underneath — built to launch clean and stay fast.",
    owns: "Web apps, e-commerce, marketing sites, mobile, APIs, integrations, DevOps, and launch.",
    icon: "/icons/devo.svg",
    position: [1.45, -2.05, 1.75],
    theme: {
      primary: "#0A1628",
      secondary: "#3DDCFF",
      accent: "#5EEAD4",
      mood: ["Methodical", "Clean", "Durable"],
      typography: "Monospace accents + modern product sans.",
      motif: "Blueprint grid, terminal tick marks, component blocks assembling.",
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
        description:
          "Next.js + React Three Fiber architecture and delivery — this surface, as a product.",
        kind: "Scenario",
      },
      {
        title: "Founder ops dashboard",
        description:
          "Operations and revenue in one surface, so the week is visible without five logins.",
        kind: "Scenario",
      },
      {
        title: "Headless storefront rebuild",
        description:
          "A commerce front rebuilt for speed and conversion, not theme lock-in.",
        kind: "Scenario",
      },
    ],
    adjacent: ["astro", "rovo", "aivo"],
  },
  {
    slug: "dato",
    name: "DATO",
    role: "Analytics",
    title: "Memory of the fleet",
    creed: "Measures. Never guesses.",
    overview:
      "DATO instruments the truth — tracking that survives blockers, dashboards a CEO can read in thirty seconds, and receipts behind every claim.",
    owns: "GA4 / GTM architecture, server-side tracking, consent, behavior diagnosis, and executive dashboards.",
    icon: "/icons/dato.svg",
    position: [-2.75, -0.55, 1.35],
    theme: {
      primary: "#041A1A",
      secondary: "#00C2A8",
      accent: "#7CFFB2",
      mood: ["Quiet", "Exact", "Receipt-backed"],
      typography: "Tabular figures, crisp sans — dashboard clarity.",
      motif: "Chart spines, heatmap wash, small source stamps on claims.",
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
        description:
          "Recover signal lost to ad-blockers and iOS — so paid decisions are made on real events.",
        kind: "Scenario",
      },
      {
        title: "Funnel leak map",
        description:
          "Session receipts that show where buyers drop, not just that they did.",
        kind: "Scenario",
      },
      {
        title: "CEO 30-second dashboard",
        description:
          "Invoiced versus vanity — a weekly surface that cannot hide behind sessions.",
        kind: "Scenario",
      },
    ],
    adjacent: ["quanto", "marko", "fino"],
  },
  {
    slug: "aivo",
    name: "AIVO",
    role: "AI solutions",
    title: "Brain of the fleet",
    creed: "AI as teammate, not gimmick.",
    overview:
      "AIVO builds agents, retrieval, and automations that return hours — grounded in the client's knowledge, with guardrails the rest of the fleet can trust.",
    owns: "Custom agents, RAG, workflow automation, content/visual engines, and LLM enablement.",
    icon: "/icons/aivo.svg",
    position: [0.35, 2.55, -1.05],
    theme: {
      primary: "#0D0221",
      secondary: "#A855F7",
      accent: "#22D3EE",
      mood: ["Futuristic", "Grounded", "Useful"],
      typography: "Soft-tech geometric with a quiet glow on key labels.",
      motif: "Node graph / agent cards with hours saved as the hero metric.",
    },
    services: [
      "Custom AI agents (support, sales, research, ops)",
      "RAG chatbots on client knowledge",
      "Workflow automation (CRM, email, ads, data)",
      "AI content / visual engines",
      "LLM integration + enablement / guardrails",
    ],
    work: [
      {
        title: "Fleet as teammates",
        description:
          "Astrivo's own specialist agents as a living operating system — routed, reviewed, and measured.",
        kind: "Scenario",
      },
      {
        title: "Knowledge-vault support",
        description:
          "A support agent that answers from a real corpus, not a generic model with a logo.",
        kind: "Scenario",
      },
      {
        title: "Ten hours back",
        description:
          "Ops automation that returns 10+ hours a week to a lean team — hours saved, not demos shipped.",
        kind: "Scenario",
      },
    ],
    adjacent: ["astro", "devo", "brando"],
  },
  {
    slug: "como",
    name: "COMO",
    role: "Communications",
    title: "Voice to the outside world",
    creed: "Relationships. Never leave on read.",
    overview:
      "COMO keeps the human thread warm — proposals, follow-ups, and nurture that sound like the specialist who owns the work, not a corporate template.",
    owns: "Gmail systems, WhatsApp / Telegram nurture, lead warming, and conversation memory for the fleet.",
    icon: "/icons/como.svg",
    position: [2.75, 0.25, -1.55],
    theme: {
      primary: "#0B1C2C",
      secondary: "#3B82F6",
      accent: "#67E8F9",
      mood: ["Warm", "Fast", "Human"],
      typography: "Friendly UI sans, slightly rounded.",
      motif: "Message bubbles / channel pills in a calm queue — not a live inbox.",
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
        description:
          "Welcome → value → booked call, written in the voice of the specialist who will do the work.",
        kind: "Scenario",
      },
      {
        title: "Human client updates",
        description:
          "Multi-channel status that sounds like a person, not a ticket system.",
        kind: "Scenario",
      },
      {
        title: "Proposal close-the-loop",
        description:
          "Send, follow up, and resolve — a system that does not ghost a decision.",
        kind: "Scenario",
      },
    ],
    adjacent: ["brando", "marko", "astro"],
  },
  {
    slug: "pomo",
    name: "POMO",
    role: "Project management",
    title: "Clock of the fleet",
    creed: "Brilliant work, on time, in scope.",
    overview:
      "POMO holds the calendar honest — milestones, owners, risk, and a vault of decisions so launches do not slip in silence.",
    owns: "Kickoff, timeline risk, client status, approval loops, and the project vault.",
    icon: "/icons/pomo.svg",
    position: [-1.55, 0.75, -2.55],
    theme: {
      primary: "#1C1408",
      secondary: "#F59E0B",
      accent: "#FDE68A",
      mood: ["Ordered", "Proactive", "Steady"],
      typography: "Clear agenda type — structured headings, checklist body.",
      motif: "Gantt-lite bars, status chips, calendar ticks.",
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
        title: "Multi-agent launch",
        description:
          "A fleet delivery that shipped without silent slips — owners visible, risks named early.",
        kind: "Scenario",
      },
      {
        title: "Bad news, early",
        description:
          "Weekly status that tells the truth with a recovery plan, not a green dashboard hiding delay.",
        kind: "Scenario",
      },
      {
        title: "Approval loop with a cap",
        description:
          "Revisions bounded, go-live locked — craft without infinite polish.",
        kind: "Scenario",
      },
    ],
    adjacent: ["astro", "quanto", "fino"],
  },
  {
    slug: "fino",
    name: "FINO",
    role: "Finance",
    title: "Guardian of money",
    creed: "Invoices become revenue.",
    overview:
      "FINO turns agreed work into collected cash — clear terms, milestone invoices, reminders that stay human, and a founder snapshot of the money.",
    owns: "Invoicing, payment tracking, reminder cadence, revenue reporting, and quote/terms clarity.",
    icon: "/icons/fino.svg",
    position: [-0.55, -2.35, -1.35],
    theme: {
      primary: "#0A1F14",
      secondary: "#10B981",
      accent: "#D4AF37",
      mood: ["Polite", "Relentless", "Trustworthy"],
      typography: "Professional numerals-first — serif for amounts, sans for the rest.",
      motif: "Invoice card, paid / pending / overdue states, quiet gold rule lines.",
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
        title: "Milestone → invoice",
        description:
          "Invoice in under 24 hours of a milestone — cash follows the work, not the calendar accident.",
        kind: "Scenario",
      },
      {
        title: "Overdue without the burn",
        description:
          "Recovery that stays relational: firm, documented, and still a client after.",
        kind: "Scenario",
      },
      {
        title: "Monthly founder snapshot",
        description:
          "Invoiced, collected, outstanding — one page, no archaeology.",
        kind: "Scenario",
      },
    ],
    adjacent: ["pomo", "dato", "astro"],
  },
  {
    slug: "rovo",
    name: "ROVO",
    role: "Research & development",
    title: "Scout of the fleet",
    creed: "Tests so production never fails first.",
    overview:
      "ROVO fails in the lab on purpose — platform briefs, proofs of concept, and kill lists for tools that should never reach a client brief.",
    owns: "Technology intelligence, PoCs, tool benchmarking, knowledge distillation, and the innovation pipeline.",
    icon: "/icons/rovo.svg",
    position: [2.15, -1.55, -0.45],
    theme: {
      primary: "#111827",
      secondary: "#84CC16",
      accent: "#A3E635",
      mood: ["Skeptical", "Curious", "Evidence-first"],
      typography: "Technical editorial with lab-notebook asides.",
      motif: "Petri / beaker marks, ADOPT · WATCH · SKIP verdict stamps.",
    },
    services: [
      "Technology intelligence & platform change briefs",
      "PoCs before new services are sold",
      "Tool benchmarking (cost / quality / speed)",
      "Knowledge distillation for the fleet",
      "Innovation pipeline — and killing zombie tools",
    ],
    work: [
      {
        title: "Fail in the lab",
        description:
          "A paid-tool PoC that failed fast and saved a subscription the fleet did not need.",
        kind: "Scenario",
      },
      {
        title: "Same-week platform brief",
        description:
          "A model / platform change the specialists could use before the internet finished arguing.",
        kind: "Scenario",
      },
      {
        title: "Service-line go / no-go",
        description:
          "A new offer decided with receipts, not vibes.",
        kind: "Scenario",
      },
    ],
    adjacent: ["devo", "aivo", "quanto"],
  },
  {
    slug: "quanto",
    name: "QUANTO",
    role: "Quality & review",
    title: "Conscience of the fleet",
    creed: "Last line before client eyes.",
    overview:
      "QUANTO scores work before it ships — brand, ads, code, dashboards, AI — and sends back exact fixes instead of vague taste.",
    owns: "Output auditing, brand consistency, fact-checking, promise policing, and client-readiness scoring.",
    icon: "/icons/quanto.svg",
    position: [-2.35, 1.55, -0.55],
    theme: {
      primary: "#0F0F10",
      secondary: "#22C55E",
      accent: "#EF4444",
      mood: ["Exacting", "Fair", "Uncompromising"],
      typography: "Strict UI sans, score numerals oversized.",
      motif: "Score ring (0–100), APPROVE / REVISE / REJECT stamps, checklist rails.",
    },
    services: [
      "Output auditing (brand, ads, code, dashboards, AI)",
      "Brand consistency & sacred-word policing",
      "Fact-checking against sources",
      "Promise policing — no overcommit",
      "Client-readiness scoring with fixable notes",
    ],
    work: [
      {
        title: "About vault PASS",
        description:
          "Site About locked to verbatim brand language — the headline that must not drift.",
        kind: "Scenario",
      },
      {
        title: "Pre-ship under 90",
        description:
          "A score returned with exact fixes, not a vague 'make it better.'",
        kind: "Scenario",
      },
      {
        title: "Overpromise cut",
        description:
          "A line that claimed results it could not defend — removed before a client ever saw it.",
        kind: "Scenario",
      },
    ],
    adjacent: ["dato", "pomo", "brando"],
  },
];

export const CORE_MEMBER = FLEET[0];
export const SPECIALISTS = FLEET.filter((member) => member.slug !== "astro");

const FLEET_BY_SLUG = new Map(FLEET.map((member) => [member.slug, member]));

export function isFleetId(value: string): value is FleetId {
  return FLEET_BY_SLUG.has(value as FleetId);
}

export function getFleetMember(slug: string): FleetMember | undefined {
  return FLEET_BY_SLUG.get(slug as FleetId);
}

export function requireFleetMember(slug: string): FleetMember {
  const member = getFleetMember(slug);
  if (!member) {
    throw new Error(`Unknown fleet member: ${slug}`);
  }
  return member;
}

/** Hub-and-spoke plus neighbor links so the 3D map reads as a constellation. */
export const CONSTELLATION_EDGES: [FleetId, FleetId][] = [
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

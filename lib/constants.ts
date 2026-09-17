export const SITE_NAME = "Astrivo";
export const SITE_TAGLINE = "Stories that earn attention. Systems that grow businesses.";
export const SITE_DESCRIPTION =
  "Astrivo is a full-stack growth agency. Branding, marketing, software, analytics, AI, and ops — one fleet, one spine. Attention is earned, never bought.";

export const CONTACT_EMAIL = "hello@astrivo.agency";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const COLORS = {
  void: "#0B0B12",
  fog: "#E8E6F0",
  magenta: "#FF2BD6",
  violet: "#7B5CFF",
  space: "#07010F",
} as const;

/** Canvas fades toward this opacity as the hero scrolls out of view. */
export const CONSTELLATION_AMBIENT_OPACITY = 0.16;

/** Hero scroll distance (in viewport heights) that completes camera pull-back. */
export const HERO_SCROLL_VIEWPORTS = 1;

export const ABOUT = {
  headline: "Stories that earn attention. Systems that grow businesses.",
  creed: "Attention is earned, never bought.",
  story: [
    "Astrivo was built for founders who were tired of buying noise. Agencies sold clicks, logos, and dashboards in separate boxes — and called the pieces a “stack.” Growth doesn’t work that way.",
    "So we built a fleet: one spine, ten specialists, and a master agent who routes the work. Branding, marketing, software, analytics, AI, communications, delivery, and the money layer — not as silos, but as one story told with precision. Attention is earned, never bought. Every brief starts with who you’re for, and ends with work that moves them.",
  ],
  vision:
    "A world where every ambitious brand has a full-stack growth system — human judgment, specialist craft, and AI that works like a teammate — so attention compounds into revenue without the circus.",
  mission:
    "Help businesses earn attention and turn it into outcomes: clearer brands, sharper funnels, software that scales, numbers you can trust, and AI that saves real hours — delivered by a coordinated fleet under one creed.",
  craftIntro:
    "Storytelling is not decoration at Astrivo. It is the craft that holds the stack together.",
  craft: [
    {
      title: "Belief before beauty",
      body: "We dig for creation story, audience, and the space only you can own.",
    },
    {
      title: "Narrative in every channel",
      body: "From brand foundation to ad creative to product UI to the email that closes the loop.",
    },
    {
      title: "Proof in the plot",
      body: "DATO’s numbers and QUANTO’s score keep the story honest; if it can’t be defended, it doesn’t ship.",
    },
  ],
  craftClose:
    "We don’t sell “content.” We build belief systems customers can feel — and businesses can measure.",
} as const;

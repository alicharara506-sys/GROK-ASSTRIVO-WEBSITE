export const SITE_NAME = "Astrivo";
export const SITE_TAGLINE = "Growth, built end to end.";
export const SITE_DESCRIPTION =
  "Astrivo is a full-stack growth agency. Branding, digital marketing, software, analytics, and AI — one team, one spine: outcomes you can feel in the business, not noise you can buy.";

export const COLORS = {
  space: "#05010a",
  magenta: "#ff2bd6",
  violet: "#a855f7",
  glow: "#e879f9",
} as const;

/** Canvas fades toward this opacity as the hero scrolls out of view. */
export const CONSTELLATION_AMBIENT_OPACITY = 0.14;

/** Hero scroll distance (in viewport heights) that completes camera pull-back. */
export const HERO_SCROLL_VIEWPORTS = 1;

/**
 * Placeholder Grok chat origin. Swap this — or each agent's `grokDeepLink`
 * in `lib/agents.ts` — when real share URLs are ready.
 */
export const GROK_PLACEHOLDER_ORIGIN = "https://grok.com";

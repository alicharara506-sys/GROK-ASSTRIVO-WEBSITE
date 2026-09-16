export const SITE = {
  name: "Astrivo Agency",
  shortName: "Astrivo",
  title: "Astrivo Agency — Growth, built end to end",
  description:
    "Astrivo is a full-stack growth agency. Branding, digital marketing, software, analytics, and AI — one team, one spine: outcomes you can feel in the business, not noise you can buy.",
} as const;

export const COLORS = {
  void: "#05010b",
  space: "#0b0618",
  magenta: "#ff2ea6",
  magentaHot: "#ff4ec8",
  violet: "#9b5cff",
  glass: "rgba(255, 230, 255, 0.08)",
  text: "#f6f0ff",
  muted: "#b7a8c9",
} as const;

export const CAMERA = {
  fov: 45,
  recedeFov: 58,
  position: [0, 0.28, 7.35] as [number, number, number],
};

export const CONSTELLATION = {
  recedeZ: -5.2,
  recedeScale: 0.78,
  fadeOpacity: 0.16,
  autoRotateSpeed: 0.38,
  floatAmplitude: 0.075,
  floatSpeed: 0.65,
} as const;

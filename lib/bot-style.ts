import type { FleetId } from "@/lib/fleet";

export function botDisplayClass(slug: FleetId): string {
  switch (slug) {
    case "astro":
      return "font-display";
    case "brando":
      return "font-editorial";
    case "marko":
      return "font-display uppercase tracking-[0.08em]";
    case "devo":
      return "font-mono";
    case "dato":
      return "font-plex tabular";
    case "aivo":
      return "font-soft";
    case "como":
      return "font-jakarta";
    case "pomo":
      return "font-dm";
    case "fino":
      return "font-editorial";
    case "rovo":
      return "font-plex";
    case "quanto":
      return "font-sans tabular";
  }
}

# Astrivo Agency Website

Production v1 marketing site for Astrivo Agency: a single-page, dark cosmic experience with an interactive 3D constellation hero, a static fleet map, and an outcomes-led About section.

**No portfolio. No contact form.** Agent conversations go out to Grok via placeholder deep links.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- React Three Fiber + drei
- English only, no backend / API / database

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build
npm start
npm run lint
```

## Sitemap

1. **Hero** — living 3D constellation around ASTRO. Auto-rotates, drag/orbit (touch on mobile), hover for name + icon, click for the side panel.
2. **Meet the Fleet** — static radial map of the same 11 agents, plus readable cards for SEO and small screens.
3. **About** — outcome pitch and a single CTA into the fleet.

Normal page scroll. No scroll-jacking, guided tours, or sound. As you leave the hero, the camera eases back and the constellation fades to a low-opacity ambient layer behind the next sections.

## Swap Grok URLs

Every “Talk to [Agent]” button (and the About CTA) reads `agent.grokUrl`.

Edit the map in [`lib/agents.ts`](lib/agents.ts):

```ts
export const AGENT_GROK_URLS: Record<AgentId, string> = {
  ASTRO: "https://grok.com/chat?agent=ASTRO",
  BRANDO: "https://grok.com/chat?agent=BRANDO",
  // ...
};
```

Replace any value with the live Grok / xAI deep link for that agent. No other files need to change.

## Architecture

```
app/            layout, page, globals
components/
  constellation/  R3F canvas, scene, nodes, hero overlay
  fleet/          static radial map
  about/          outcome copy + CTA
  ui/             panel, header, footer, shared chrome
lib/            agents.ts, constants.ts, hooks.ts
public/icons/   per-agent SVG marks
```

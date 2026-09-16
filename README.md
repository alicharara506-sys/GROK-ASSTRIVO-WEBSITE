# Astrivo Agency

Single-page marketing site for Astrivo: a living 3D constellation hero, a static fleet map, and an outcome-led About section.

Stack: Next.js App Router, TypeScript, React Three Fiber, drei, Tailwind CSS. No backend, API, or database in v1.

## Run locally

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Page structure

1. **Hero** — interactive constellation (auto-rotate, drag/orbit, hover labels, click-to-panel). Normal page scroll; the camera eases back and the scene fades to a low-opacity ambient layer behind later sections. No scroll-hijack, guided tour, or sound.
2. **Meet the Fleet** — SEO-friendly radial map. Cards open the same agent panel.
3. **About** — locked pitch copy and a CTA that opens ASTRO.

## Swap Grok URLs

All “Talk to [Agent]” buttons use `grokDeepLink` on each record in [`lib/agents.ts`](lib/agents.ts).

- Fastest path: change `GROK_PLACEHOLDER_ORIGIN` in [`lib/constants.ts`](lib/constants.ts) and/or `grokDeepLinkFor()` in `lib/agents.ts`.
- Per-agent path: set `grokDeepLink` on an individual agent object.

v1 ships placeholder `https://grok.com/?…` links.

## Architecture

```
app/layout.tsx          fonts, metadata, English `lang`
app/page.tsx            page composition
app/globals.css         cosmic theme tokens
components/constellation/  R3F canvas, scene, nodes, hero overlay
components/fleet/       static radial map
components/about/       locked About copy
components/ui/          agent panel, header, footer, shared chrome
lib/agents.ts           id, name, role, icon, grokDeepLink, 3D positions
lib/constants.ts        site copy tokens and Grok origin
public/icons/           one SVG per agent
```

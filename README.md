# Astrivo Agency

Marketing site for Astrivo: an immersive 3D constellation, a Meet the Fleet map, an expanded About, and a dedicated page for every specialist.

Stack: Next.js App Router, TypeScript, React Three Fiber, drei, Tailwind CSS, Framer Motion. English only. No backend.

## Hard rule

**Showcase only.** There is no live chat, chatbot, “Talk to [Agent]” button, or Grok deep-link anywhere in the UI or copy. Clicks on constellation nodes and fleet cards go to `/fleet/[slug]`. Contact is email (`hello@astrivo.agency`).

## Run locally

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Information architecture

| Route | Content |
|---|---|
| `/` | Immersive constellation hero + Meet the Fleet + About |
| `/fleet/[slug]` | Dedicated specialist view: Overview, Services, Work |

Fleet slugs: `astro`, `brando`, `marko`, `devo`, `dato`, `aivo`, `como`, `pomo`, `fino`, `rovo`, `quanto`.

Navigation: constellation click → specialist page; back → constellation; in-page anchors for About / Fleet and for Overview / Services / Work.

## Home

1. **Hero** — interactive constellation (auto-rotate, drag/orbit, hover name + role, click to `/fleet/[slug]`). Normal page scroll; the camera eases back and the scene fades to an ambient layer. No scroll-hijack, guided tour, or sound.
2. **Meet the Fleet** — radial map (stacked cards on mobile). Cards are links, not chat panels.
3. **About** — locked headline *Stories that earn attention. Systems that grow businesses.* Story, Vision, Mission, and storytelling craft.

## Specialist pages

Each `/fleet/[slug]` view is themed with that bot’s BRANDO visual kit (color, mood, motif, type vibe) and includes:

- Overview — role, creed, what they own
- Services — concrete offerings
- Work — example scenarios (labeled as such)
- Adjacent specialists + back to the constellation

## Architecture

```
app/layout.tsx                 fonts, metadata, English `lang`, agency chrome
app/page.tsx                   home composition
app/fleet/[slug]/page.tsx      specialist pages (static params)
app/globals.css                Void / Fog / Signal Magenta / Orbit Violet
components/constellation/      R3F canvas, scene, nodes, particles, hero
components/fleet/              Meet the Fleet map
components/about/              locked About copy
components/bot/                themed specialist shell, 3D motif, 2D kits
components/ui/                 header, footer, hover context
lib/fleet.ts                   FleetMember type, BRANDO kits, services, work
lib/constants.ts               site copy and chrome tokens
public/icons/                  one SVG per specialist
```

## Motion & a11y

- Reduced-motion media query tones down 3D (no auto-rotate, fewer particles, simpler materials).
- Mobile uses a lighter particle count and standard materials.
- Fleet cards and page anchors are keyboard-focusable.
- 3D canvases are lazy-mounted on the client; specialist canvases are code-split.

## Visual chrome

Void `#0B0B12` · Fog `#E8E6F0` · Signal Magenta `#FF2BD6` · Orbit Violet `#7B5CFF`

Per-bot tokens live on each `FleetMember.theme` in `lib/fleet.ts`.

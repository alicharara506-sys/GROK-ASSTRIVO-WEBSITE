# Astrivo Agency

Marketing site for Astrivo: a living 3D constellation, a fleet map, dedicated specialist kits, and an outcome-led About.

Stack: Next.js App Router, TypeScript, React Three Fiber, drei, Tailwind CSS, Framer Motion. English only. No backend.

## Hard rule: showcase, don’t chat

This site is a visual showcase. There is **no live chat**, no chatbot widget, and no “Talk to [Agent]” / Grok deep-link anywhere in the UI or copy.

Allowed CTAs: **Explore [Bot]**, **View work** (in-page), or **Contact Astrivo** (email placeholder). Agent pages are kits — overview, services, and work — not conversations.

## Run locally

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Information architecture

| Route | What you get |
|---|---|
| `/` | Immersive constellation hero → Meet the Fleet → About |
| `/#fleet` | Interactive fleet map (radial on desktop, stacked on mobile) |
| `/#about` | Story, vision, mission, storytelling craft |
| `/fleet/[slug]` | Dedicated kit for one of 11 specialists: Overview / Services / Work |

Slugs: `astro`, `brando`, `marko`, `devo`, `dato`, `aivo`, `como`, `pomo`, `fino`, `rovo`, `quanto`.

Constellation click and fleet cards navigate to `/fleet/[slug]`. Back links return to the constellation with the same home scene.

## Hero

Auto-rotate and drag/orbit (touch). Hover shows name, role, and personality accent. Click opens that bot’s page — never a chat panel. Scroll eases the camera back; the constellation stays as a low-opacity ambient layer. No scroll-jacking, no sound, no guided tour. Reduced-motion and a static radial fallback if WebGL fails.

## Architecture

```
app/layout.tsx                 fonts, metadata, English `lang`, chrome
app/page.tsx                   home: constellation + fleet + about
app/fleet/[slug]/page.tsx      11 static specialist kits
app/globals.css                agency tokens + per-bot motif washes
components/constellation/      R3F canvas, scene, nodes, particles
components/fleet/              Meet the Fleet map
components/about/              locked About copy (BRANDO)
components/bot/                themed reveal canvas + kit page
components/ui/                 header, footer, hover state
lib/fleet.ts                   FleetMember type, BRANDO visual kits, copy
lib/constants.ts               site + About tokens (no chat origin)
public/icons/                  one SVG per specialist
```

Visual kits (color, mood, motif, services, scenarios) live in [`lib/fleet.ts`](lib/fleet.ts). Contact email placeholder: `hello@astrivo.agency`.

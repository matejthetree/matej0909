# Shamanic Healing Website Design

## Overview

A spiritual, artistic website for shamanic healing services featuring layered parallax depth, Earth & Gold color palette, and a hub-with-portals navigation structure.

**Contact (displayed on every page):**
- Phone: +385977367486
- Email: info@matej0909.com

---

## Design Decisions

| Aspect | Choice |
|--------|--------|
| 3D Approach | Layered parallax depth - dreamlike, ethereal layers |
| Color Palette | Earth & Gold - deep forest greens, rich browns, sacred gold accents |
| Structure | Hub with portals - central landing with animated portals to inner pages |
| Portals | Three: Offerings, Events, My Journey |
| Visual Elements | Mixed organic - botanical + light/smoke (leaves, mist, ember particles, gold light rays) |

---

## Color Palette

```
--color-black: #0a0a08
--color-forest-deep: #1a2e1a
--color-forest: #2d4a2d
--color-earth-brown: #3d2b1f
--color-earth-warm: #5c4033
--color-gold: #c9a227
--color-gold-light: #e6c866
--color-cream: #f5f0e6
--color-smoke: rgba(245, 240, 230, 0.1)
--color-mist: rgba(255, 255, 255, 0.05)
```

---

## Page Structures

### Hub - Ceremonial Fire Landing

**Background Layers (parallax):**
1. Far layer: Distant mist, birch silhouettes, soft golden light bleeding through
2. Mid layer: Floating tobacco leaves, ceremonial smoke wisps drifting slowly
3. Near layer: Subtle ember particles, occasional golden light rays

**Center Content:**
- Name/logo emerging from mist, bathed in warm gold
- Tagline placeholder below
- Three portals arranged in arc/triangle below center

**Portal Design:**
- Circular or organic glowing shapes
- Icon + name in elegant typography
- Subtle breathing/pulse animation
- Hover: illuminates, smoke gathers, botanicals drift toward it

**Fixed Contact:**
- Small sacred symbol in corner, expands on hover to reveal phone/email

---

### Offerings Page - The Sacred Work

**Transition:** Smoke envelops screen, clears to reveal warmer-toned sanctuary

**Hero:**
- Full-width atmospheric section
- "Offerings" or "Sacred Work" title in golden mist
- Intro paragraph placeholder

**Three Offering Cards:**

1. **Healing Sessions with Tobacco**
   - Private & group options
   - Description, duration, exchange placeholders

2. **Plant Ceremonies**
   - Sacred medicine gatherings
   - Approach, setting, preparation placeholders

3. **Plant Diet School**
   - The dieta path explained
   - Duration, commitment, plants worked with

**Card Design:**
- Floating on subtle parallax layers
- Soft golden border glow
- Botanical element in corner (tobacco leaf, ceremonial vessel, birch branch)
- Hover: slight scale, deeper glow (breathing effect)

**Contact Section:**
- "Ready to begin?" invitation
- Phone and email displayed
- Optional: simple inquiry form (name, email, message)

---

### Events Page - Upcoming Gatherings

**Transition:** Smoke dissolve, lighter/more open space, dawn-like gradients

**Hero:**
- "Events & Workshops" title
- Brief intro about gathering in community

**Featured Event - White Birch Diet:**
```
PLANT DIET WITH WHITE BIRCH

March 9, 2026 · 2 Weeks
Online with optional in-person elements

Base Price: €900

+ Live ceremonies in Aljmaš, Croatia: €100 each
+ Diet residence accommodation: €50/day

[ Inquire About This Diet ]
```

**Featured Event Design:**
- Sacred invitation styling
- Parchment-like texture with gold edges
- Birch branch illustrations in corners
- Soft inner light glow

**Future Events Grid:**
- Smaller cards for upcoming workshops/ceremonies
- Empty state: "More gatherings being woven... join the mailing list"

**Newsletter/Contact:**
- Email signup for event announcements
- Direct contact info

---

### My Journey Page - Your Story

**Transition:** Slowest smoke clear, warmest space, deeper earth tones, prominent gold firelight

**Hero:**
- Your name
- Photo or artistic silhouette (optional)
- Single evocative line

**Scrolling Narrative:**
- Story unfolds with scroll
- Each section fades in subtly
- Parallax botanicals accompany different life chapters
- Key moments get visual emphasis (brighter gold glow, larger drifting leaf)

**Placeholder Sections:**
- Early life...
- The calling...
- Meeting the plants...
- The path now...

**Design Approach:**
- Text-focused but atmospheric
- Wide margins, elegant typography, generous spacing
- Plants and light continue gentle movement

**Closing:**
- Personal invitation: "If my path resonates with yours..."
- Warm contact section

---

## Global Elements

### Navigation
- Minimal top bar: logo/name left, menu icon right
- Menu opens as full overlay with three portals + return to hub
- Smooth transitions

### Contact Footer
- Every page ends with phone and email
- Consistent elegant styling

### Page Transitions
- All page changes use smoke/mist dissolve
- Maintains ceremonial continuity

### Parallax System
- Minimum 3 layers per page
- Elements: tobacco leaves, birch branches, smoke wisps, ember particles, gold light rays
- Subtle mouse-reactive movement (optional)
- Scroll-driven depth shifts

---

## Technical Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion (animations, parallax, page transitions)
- React Router (multi-page navigation)

---

## Content Placeholders

All text content marked as placeholder for client to provide:
- Tagline/essence statement
- Service descriptions
- Ceremony approach
- Plant diet protocols
- Personal journey narrative
- Event descriptions beyond White Birch

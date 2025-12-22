# Shamanic Healing Website Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Implement 5 specific visual enhancements to the Shamanic Healing Website to improve the "sacred, ceremonial" feel and interactivity.

**Architecture:** React + Tailwind + Framer Motion. Direct modifications to existing components and pages. No new architecture, just UI/UX refinments.

**Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion.

---

### Task 1: Hub Portal Hover Effects

**Files:**
- Modify: `src/components/Portal.tsx:1-180`

**Step 1: Modify `FloatingBotanicalElement` component**
Update the `animate` prop in `FloatingBotanicalElement` to move elements closer to center (0,0) on hover (15-20% of original distance). Add rotation.

**Step 2: Update `Portal` component smoke effects**
Enhance the existing smoke layers `motion.div`s to be more opaque and concentrated in the center on hover. Add `rotate` to the vortex layer.

**Step 3: Verify visually**
(Since this is visual, manual verification is key, but I'll double check the code logic).

### Task 2: Offerings Card Botanical Corners

**Files:**
- Modify: `src/pages/Offerings.tsx:133-160` (CornerDecorations) and usage in lists.

**Step 1: Update `CornerDecorations`**
Ensure it accepts the `Icon` and positions it correctly `absolute top-2 left-2` etc. (Currently uses `-top-4 -left-4`, request says `top-2/bottom-2`).
Update opacity to 20-30%.
Add "gentle float animation".

**Step 2: Verify `offerings` data**
Ensure `cornerIcon` is correctly assigned for each offering (Tobacco, Ceremonies, Dieta).
(Read of `src/pages/Offerings.tsx` confirms this is already set up in the data array, just need to refine the `CornerDecorations` visual implementation).

### Task 3: Events Featured Card Parchment Texture

**Files:**
- Modify: `src/pages/Events.tsx:85-233`

**Step 1: Add parchment texture overlay**
Add a noise/grain pattern using CSS filters or existing SVG data URI within the Featured Card `motion.div`.
Add `mix-blend-mode: overlay`.

**Step 2: Add decorative borders**
Add 1-2px gradient borders with gold color (#c9a227) along top and bottom edges.

**Step 3: Add corner ornaments**
Add small decorative flourishes (Celtic knot style or simple leaf motifs) in the 4 corners of the card.

### Task 4: Journey Page Parallax Leaf Sync

**Files:**
- Modify: `src/pages/Journey.tsx:36-72` (FloatingLeaf), `src/pages/Journey.tsx:74-142` (JourneySection)

**Step 1: Modify `FloatingLeaf`**
Acccept `sectionIndex` prop.
Update logic to use `sectionIndex` for clearer tracking (maybe pass section ref scroll progress?).
Actually, the requirement says "Calculate section-specific scroll progress".
The `JourneySection` already has `useScroll` with `target: ref`. I should pass *that* `scrollYProgress` to `FloatingLeaf`. (It is already passed in current code: `<FloatingLeaf ... scrollYProgress={scrollYProgress} />`).
I need to *enhance* the `FloatingLeaf` implementation to use this progress more effectively (falling/drifting).
Increase leaf variants (sizes).

**Step 2: Add more leaves**
In `JourneySection`, render 2-3 `FloatingLeaf` components instead of 1. Pass different delays/sides/styles.

### Task 5: Fixed Contact Symbol

**Files:**
- Modify: `src/pages/Hub.tsx`
- Modify: `src/pages/Offerings.tsx`
- Modify: `src/pages/Events.tsx`
- Modify: `src/pages/Journey.tsx`

**Step 1: Add `<Contact variant="floating" />`**
Import `Contact` (if not present) and add the component at the bottom of the page container in each file.
Ensure it's outside other heavy layout constraints if needed (it is `fixed` positioned so should be fine).

---

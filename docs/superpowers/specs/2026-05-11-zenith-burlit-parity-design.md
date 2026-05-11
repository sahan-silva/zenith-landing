# Zenith landing → Burlit pattern parity

**Date:** 2026-05-11
**Author:** Claude Code (CSO)
**Status:** Approved — implementation in progress
**Repo:** `zenith-landing/` (standalone Vite + React + Tailwind 4 app)

---

## Why

Aramuna ships multiple consumer products (Burlit for tradies, CarePlate for aged care,
Zenith Journal for reflection). When a customer sees one and clicks through to another,
the visual grammar has to feel like one company. Burlit's landing page is the most
mature surface in the family — it has a tight rhythm (eyebrow → display H2 with italic
em-accent → typography-driven body → motion-fade), a distinctive hero (phone mock + side
feature cards), and bulletproof navigation chrome (top wordmark bar + hover-revealed
scroll rail). Zenith's current landing has correct content but inconsistent grammar.

We want the Zenith surface to inherit Burlit's UI/UX vocabulary while keeping its own
warm-amber colour identity and content positioning.

---

## What stays the same

- **Zenith colours.** `ink #0a0a0b`, `cream #f5f2ed`, `stone #9a918a`, `ember #c97a4a`,
  `dawn #d4a574`. Every place Burlit uses `lime #C8FF00`, Zenith uses `ember`.
- **Supabase-wired `EmailForm.tsx`.** No changes to waitlist plumbing.
- **Quiet Confidence typography:** Libre Baskerville for `font-display`, Source Sans 3
  for `font-body`. Burlit uses Figtree for figtree text on the scroll rail and footer
  wordmark; we'll fall back to `font-body` since Zenith doesn't ship Figtree.
- **`PrivacyPolicy.tsx`** stays orphaned in the tree (awaiting a future router).
- **Pre-existing uncommitted work in `index.html`** (SEO meta tags + JSON-LD structured
  data) is preserved entirely.

---

## What changes

### Section topology — 10 → 6

Existing Zenith landing has 10 sections. Burlit has 6. Consolidate as follows:

| New section | Folds in |
|---|---|
| **Hero** | Hero (new: phone mock + feature card column) |
| **Problem** | Problem + strongest 2 points each from AntiSetup, AntiAesthetic |
| **Benefits** | Benefits (rendered in Burlit's icon grid) |
| **Differentiator** *(new)* | AntiEngagementManifesto + Privacy + NoSubscription — 4 strongest contrasts |
| **WhoItsFor** | WhoItsFor (rendered with chevron-pill checklist) |
| **FinalCTA** | FinalCTA (rendered with radial ember glow + incentive row) |

Sections deleted: `AntiSetup.tsx`, `AntiAesthetic.tsx`, `AntiEngagementManifesto.tsx`,
`Privacy.tsx`, `NoSubscription.tsx`. Their Reddit-intel positioning is preserved by
relocation, not loss.

### New chrome

- **`ZenithWordmarkBar`** — fixed top bar. "Zenith" wordmark left. "Join waitlist" pill
  fades in once user scrolls past hero, fades out at the bottom waitlist section
  (avoids duplicating its in-section affordance). Ember background pill on dark.
- **`ZenithScrollRail`** — fixed right edge nav. Mounted but hidden by default; appears
  only when (a) user has scrolled past hero AND (b) is actively scrolling or hovering
  within 120px of the right edge. 6 dots → labels for [hero, problem, benefits, diff,
  who, waitlist]. Active section gets a wider ember bar with `ember-glow` shadow.
- **`scrollToSection`** — smooth-scroll helper.

### Phone mock — `ZenithPhoneMock.tsx`

Structurally identical to `TradieMatePhoneMock` (340×720, rounded hardware rim, dynamic
island, side buttons, status bar with 9:41 + signal/wifi/battery, bottom tab pill, home
indicator, ember FAB in place of Burlit's lime). 3 swappable screens mirror the live iOS
app (`zenith-journal-ios/Sources/Views/`):

1. **Journal** — Mirrors `JournalListView` + `QuickCaptureView`.
   - Greeting "Good evening, Sahan" (`font-display` 26px)
   - Quick-capture glass card: mic prompt "What's on your mind?" with ember mic icon
   - 3 recent entry tiles (glass): timestamp + mood dot + first-line excerpt
2. **Insights** — Mirrors `InsightsView` + `GoldenThreadCard`.
   - "This week" eyebrow
   - Pattern glass card: "Your Tuesdays trend reflective" + mood ring SVG + 3 connected
     entries (small chips)
   - "Golden thread" card naming a recurring theme
3. **Journey** — Mirrors `StatsView`.
   - 28-day streak number (large display)
   - Mood timeline (small bar chart, 7 bars, ember accent on most recent)
   - "Top themes this month" chip list

**Glass tokens** (ported from Burlit, recipes identical because both products use warm-
dark phone hardware):
```
--zn-bg: #0B0B0D
--zn-fg: #f5f0e8
--zn-accent: #c97a4a          (Zenith ember)
--zn-glass-fill-top: rgba(28,26,24,0.55)
--zn-glass-fill-bot: rgba(14,12,11,0.65)
--zn-glass-border: rgba(255,255,255,0.07)
```

Ambient halo: `radial-gradient(circle at 8% 92%, rgba(201,122,74,0.085), transparent 50%)`
(replaces Burlit's lime halo).

### Hero — `Hero.tsx`

Mirrors `TradieMateHero`:
- **Left column**: status pill ("Coming Soon"), H1 with italic middle line + ember-accent
  bottom line, subhead, EmailForm, 3 trust badges.
- **Right column desktop**: phone mock + 6-card static grid (118px wide, 6 rows).
- **Mobile**: stacked. Below the phone, a full-width auto-scrolling marquee of the 6
  cards (32s linear, paused on hover/touch/focus).
- H1 copy: "Your life has patterns." / italic stone "Zenith reveals them." / "Just
  write." (3-beat rhythm matching Burlit's "You're on site all day / Your office
  shouldn't need a desk / That's Burlit.")
- **Static — no `whileInView` on H1** (Burlit's bulletproof above-the-fold rule).

**6 feature cards:**

| Lucide icon | Label |
|---|---|
| `Mic` | Voice or type — 4× faster than tapping |
| `Notebook` | One place for reflection, mood, goals, dreams |
| `Sparkles` | AI surfaces patterns you can't see |
| `Moon` | Tonight's thoughts become tomorrow's actions |
| `ShieldCheck` | On-device — your words never leave your phone |
| `Infinity` | Unlimited AI insights, no subscription |

### Problem — `Problem.tsx`

Mirrors `TradieMateProblem`:
- "The reality" eyebrow (uppercase tracking 0.14em, stone, leading hairline before)
- H2 (display, `clamp(2rem, 3.6vw, 3.25rem)`) + italic stone subtitle
- 5 pain points, each: `<motion.div className="border-l-2 border-ember/40 pl-7">`
  with bold cream emphasis line + stone detail
- Italic stone transition line at bottom

Pain points (5, consolidated):

1. "You've tried five apps. None of them talk to each other." (existing)
2. "You spend more time maintaining your system than using it." (existing — touches
   AntiSetup territory)
3. "Templates and plugins replace the writing itself." (NEW — strongest AntiSetup hit)
4. "Colour-coding your emotions isn't the same as processing them." (NEW — strongest
   AntiAesthetic hit)
5. "You sense patterns in your life but can't quite name them." (existing)

Transition: "What if one journal could hold all of it — and show you what you can't see
on your own?"

### Benefits — `Benefits.tsx`

Mirrors `TradieMateBenefits`:
- "How it works" eyebrow
- H2 with `<em class="not-italic text-ember">` accent on key word
- 3-col grid (1-col mobile). Each card:
  - Ember-tinted icon tile (44×44, `bg-ember/10 border border-ember/30`)
  - Number `01` / `02` / `03` in ember Figtree-ish caps
  - H3 title in display font
  - Description in stone body

3 benefits preserved verbatim from existing Benefits.tsx with Lucide icons:
`Mic` (Just Write) / `Notebook` (Everything Journal) / `Sparkles` (Patterns).

### Differentiator — `Differentiator.tsx` (NEW)

Mirrors `TradieMateDifferentiator`:
- "Why Zenith" eyebrow
- H2 "What makes Zenith *different*?"
- 2-col compare with center vertical divider on lg+ (becomes horizontal hairline on
  mobile)
- **Left col** ("Other journaling apps"): 4 stone bullets with em-dash markers
- **Right col** ("Zenith Journal"): 4 cream bullets with ember checkmark + bold key
  phrase

4 contrast pairs (consolidating AntiEngagement + Privacy + NoSubscription):

| Others | Zenith |
|---|---|
| Designed to keep you scrolling | **Measures value delivered, not time spent** |
| Streaks and notifications engineered for anxiety | **Zero dark patterns. No streaks. Ever.** |
| One cloud breach away from public exposure | **Runs on your device. Zero attack surface.** |
| Monthly AI subscriptions that stack up | **AI included forever. No usage caps.** |

Closing statement: "Your reflection deserves a tool built to respect you, not exploit you."

### WhoItsFor — `WhoItsFor.tsx`

Mirrors `TradieMateWhoItsFor`:
- "Who it's for" eyebrow
- H2 "Is this *you*?" (ember em-accent)
- 6 checklist items, each with chevron-pill marker (`>` glyph in ember-tinted square)
- Closing stone line

Items preserved verbatim from existing WhoItsFor.tsx.

### FinalCTA — `FinalCTA.tsx`

Mirrors `TradieMateFinalCTA`:
- Bottom-radial ember glow (`radial-gradient(ellipse at 50% 100%, rgba(201,122,74,0.08))`)
- "Zenith Co-creators" eyebrow
- H2 with em-accent: "Tonight's clarity. *Tomorrow's action.*"
- Stone subtitle
- Flex row of 4 incentives, each `<ember>+</ember> incentive label`
- EmailForm (button text "Join the Waitlist")
- Stone trust note

Trim from 6 incentives → 4 for Burlit parity:
1. Early access to the beta
2. Founding member pricing
3. Shape the features we build
4. AI insights included — no subscription, ever

### ZenithLanding wrapper

```tsx
<main className="relative min-h-screen bg-ink text-cream" style={{ scrollBehavior: 'smooth' }}>
  <ZenithWordmarkBar />
  <ZenithScrollRail />
  <Hero />
  <Problem />
  <Benefits />
  <Differentiator />
  <WhoItsFor />
  <FinalCTA />
  <ZenithFooter />
</main>
```

### ZenithFooter

Mirrors `TradieMateFooter`: top border, "Zenith" wordmark + "by Aramuna" stone, copyright
center, "Aramuna" link right.

---

## Motion grammar

Replace Zenith's pure-opacity `fadeIn` with Burlit's `fadeUp`:

```ts
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};
```

Applied to every section below the fold. Hero is static (no whileInView on H1).

---

## Tailwind config

Add to `tailwind.config.js`:

```js
// boxShadow
"ember-glow": "0 0 20px rgba(201, 122, 74, 0.35)",  // already exists, brighten alpha
// fontFamily
'figtree': ['Source Sans 3', 'system-ui', 'sans-serif'],  // alias to body for now
// colors (optional, for readability)
'lime': '#c97a4a',  // NOT added — we use 'ember' directly to avoid confusion
```

---

## Risks & mitigations

1. **Glass inside the phone violates the Quiet Confidence ADR** (which forbids glass on
   web surfaces). *Mitigation:* the phone is rendering an iOS app — the glass is part of
   the simulated product, not web decoration. Inline code comment explains the carve-out.
2. **Tailwind 4 vs Burlit's Tailwind 3.** zenith-landing uses Tailwind 4
   (`@tailwindcss/postcss` v4.1.18). Mechanical class names port without change; inline
   `style={{ fontSize: 'clamp(...)' }}` is framework-agnostic. *Mitigation:* `npm run
   build` after each major component lands.
3. **Lost Reddit-intel positioning depth.** AntiSetup, AntiAesthetic, AntiEngagement
   each had 4 elaborated points; consolidation keeps only 2 per section. *Mitigation:*
   the Reddit-intel positioning still survives in the surviving sections — we keep the
   strongest hit from each. Detail can return in a future `/zenith/why-private` route.
4. **Phone mock LOC** (~650 lines of embedded CSS). *Mitigation:* mirrors Burlit's
   pattern exactly — proven approach. The CSS is local to one component, not global.
5. **Pre-existing uncommitted changes** in `index.html`, `Hero.tsx`, `Benefits.tsx`.
   *Mitigation:* preserve `index.html` (unrelated SEO work); incorporate latest copy
   from the Hero/Benefits diffs when rewriting those files.

---

## Out of scope

- Sub-pages (`/privacy`, `/terms`, `/support`) — no router exists yet.
- Mobile-specific phone-mock interactivity beyond the 3-tab switcher.
- Analytics events on the new scroll rail / wordmark bar CTA.
- Changes to `aramuna-landing-page/components/zenith/` (a different surface on a different
  repo).
- Lighthouse / accessibility audit (will run after PR open as separate task).

---

## Acceptance criteria

- [ ] `npm run build` passes with no errors.
- [ ] Visual diff (desktop 1440px): hero shows phone mock on the right with feature
      column beside it; both the wordmark bar (fixed top) and scroll rail (hover-
      revealed right edge) render correctly.
- [ ] Mobile (375px): hero stacks (copy on top, phone center, feature marquee below);
      no horizontal scroll; phone scale-down to 0.82.
- [ ] All 3 phone screens render and tab switching works (`today` → `jobs` → `match`
      equivalent for Journal / Insights / Journey).
- [ ] Color audit: no `lime` className anywhere; ember/dawn used as accents.
- [ ] EmailForm still submits to Supabase (test with a throwaway email).
- [ ] 5 deleted components are gone from `src/components/` and `index.ts`.
- [ ] No new console warnings during dev server run.

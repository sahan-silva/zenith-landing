/**
 * src/components/ZenithPhoneMock.tsx
 *
 * Zenith phone mock — shows the CURRENT iOS app (v1.0.3 build 17).
 *
 * Hardware silhouette is shared with Burlit's TradieMatePhoneMock
 * (340×720, dynamic island, side buttons, dark OLED rim, status bar,
 * home indicator) so the two landing pages read as one family.
 *
 * Screen contents are no longer hand-drawn CSS. Three of the four tabs are
 * real device screenshots (iPhone 17 Pro, dark mode) captured from build 17
 * and stored in public/app/ (WebP with PNG fallback, 680px wide = 2× the
 * 340px screen):
 *
 *   - Journal  → public/app/journal.{webp,png}
 *   - Actions  → public/app/actions.{webp,png}
 *   - Journey  → public/app/journey.{webp,png}
 *
 * Each screenshot is cropped to remove the iOS status bar (top) and the
 * floating tab-bar pill + home indicator (bottom). The mock renders ONE
 * shared status bar and ONE shared tab bar on top, so the active tab state
 * is always visually consistent and clicking a tab label switches screens.
 *
 * The Insights tab has no clean screenshot yet (the QA account has no
 * insights), so it stays hand-built — restyled to the build-17 language
 * visible in the three real screenshots: dusk gradient, soft dark glass
 * cards, rounded SF-style type, amber #FAC27A accent.
 *
 * Design note — glass on a web surface: the Quiet Confidence ADR forbids
 * glassmorphism on Zenith's web body. The phone is exempt because the
 * glass is part of the simulated iOS UI inside the phone screen, not
 * web decoration.
 *
 * Related: Hero.tsx, public/app/
 */

import React, { useState } from 'react';

type Screen = 'journal' | 'insights' | 'actions' | 'journey';

interface Shot {
  id: Exclude<Screen, 'insights'>;
  alt: string;
}

const SHOTS: Shot[] = [
  {
    id: 'journal',
    alt:
      'Zenith Journal tab: "Good afternoon, there", today\'s date pill, a short journal entry about a river walk, and the Tags, Mood and quick-capture buttons.',
  },
  {
    id: 'actions',
    alt:
      'Zenith Actions tab: filter chips for All, Tasks, Goals and Bucket List, with AI-extracted cards "Start sleeping before eleven" (Goal) and "Call Mum" (Task, due this weekend).',
  },
  {
    id: 'journey',
    alt:
      'Zenith Journey tab: "Your journey so far", a one-day streak ring, and a Base Camp milestone card reading "You kept showing up."',
  },
];

const TABS: Array<{ id: Screen; label: string }> = [
  { id: 'journal', label: 'Journal' },
  { id: 'insights', label: 'Insights' },
  { id: 'actions', label: 'Actions' },
  { id: 'journey', label: 'Journey' },
];

const INSIGHT_CHIPS = ['All', 'Favourites', 'Weekly', 'Monthly', 'Patterns'];

const INSIGHT_CARDS: Array<{
  eyebrow: string;
  title: string;
  body: string;
  confidence: string;
}> = [
  {
    eyebrow: 'Weekly reflection',
    title: 'Calm follows movement',
    body:
      'Three of your four calmer entries this week came right after a walk. Movement looks like your reset button.',
    confidence: 'High confidence',
  },
  {
    eyebrow: 'Pattern',
    title: 'Late nights, heavy mornings',
    body:
      'Entries that mention feeling behind tend to follow nights past eleven. You named the fix yourself on Tuesday.',
    confidence: '82% confidence',
  },
  {
    eyebrow: 'Monthly',
    title: 'Family shows up on steady days',
    body:
      'Mum appears in six entries this month, almost always on days you also wrote about feeling settled.',
    confidence: 'Emerging',
  },
];

/* Tab-bar glyphs — traced from the SF Symbols the app uses
   (note.text / wand.and.stars / checklist / chart.xyaxis.line). */
const TabIcon: React.FC<{ id: Screen }> = ({ id }) => {
  switch (id) {
    case 'journal':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h9l4 4v14H6z" />
          <path d="M9 10h6M9 13.5h6M9 17h4" />
        </svg>
      );
    case 'insights':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 5l5 5L8 21l-5-5z" />
          <path d="M13 6l5 5" />
          <path d="M18.5 2.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" fill="currentColor" stroke="none" />
          <path d="M5 4l.5 1.2 1.2.5-1.2.5L5 7.4l-.5-1.2-1.2-.5 1.2-.5z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'actions':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="7" r="2.6" fill="currentColor" stroke="none" />
          <path d="M4.9 7l.8.8L7.3 6" stroke="#1F1C21" strokeWidth="1.4" />
          <circle cx="6" cy="16.5" r="2.6" />
          <path d="M12 7h8M12 16.5h8" />
        </svg>
      );
    case 'journey':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-5" />
          <circle cx="11" cy="10" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="14" cy="13" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="19" cy="8" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
  }
};

const ZenithPhoneMock: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('journal');

  // Roving-tabindex keyboard support for the tablist (← / → / Home / End).
  const onTabKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const i = TABS.findIndex((t) => t.id === screen);
    let next = -1;
    if (e.key === 'ArrowRight') next = (i + 1) % TABS.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + TABS.length) % TABS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = TABS.length - 1;
    const target = next === -1 ? undefined : TABS[next];
    if (!target) return;
    e.preventDefault();
    setScreen(target.id);
    (e.currentTarget.querySelector(`#zn-tab-${target.id}`) as HTMLElement | null)?.focus();
  };

  return (
    <div className="zn-phone-wrap" role="group" aria-label="Zenith Journal app preview">
      <style>{`
        .zn-phone-wrap {
          position: relative;
          width: 340px;
          flex: none;
        }

        /* ────────────────────────────────────────────────────────────
         * Phone hardware
         * ──────────────────────────────────────────────────────────── */
        .zn-phone {
          /* Zenith iOS dark palette — Sources/Utilities/Theme.swift */
          --zn-ink:#1F1C21;
          --zn-secondary:#F2F0EB;
          --zn-stone:#B8B2C4;
          --zn-accent:#FAC27A;       /* Theme.accent dark — warm amber */

          /* Glass card recipe — sampled from the build-17 Actions cards */
          --zn-glass-fill: rgba(40, 30, 45, 0.55);
          --zn-glass-border: rgba(255, 255, 255, 0.08);

          /* Layout — status bar / screenshot / tab zone */
          --zn-status-h: 44px;
          --zn-shot-h: 626px;        /* 340 × (2222/1206) — the cropped screenshot at 1× */
          --zn-tab-zone-h: 62px;

          width: 340px; height: 720px;
          background: #221a35;
          color: var(--zn-secondary);
          border-radius: 56px;
          overflow: hidden;
          position: relative;
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.12),
            0 0 0 2px #48484a,
            0 0 0 3px rgba(255,255,255,0.18),
            0 0 0 11px #1c1c1e,
            0 0 0 12px rgba(255,255,255,0.08),
            0 0 0 13px #3a3a3c,
            0 60px 140px -20px rgba(0,0,0,0.9),
            0 0 140px -30px rgba(250,194,122,0.20);
          /* SF Pro Rounded approximation — the iOS app uses .rounded design
             everywhere. Apple ships these on macOS/iOS; falls back gracefully. */
          font-family: -apple-system-rounded, 'SF Pro Rounded', 'SF Pro Display',
                       ui-rounded, system-ui, -apple-system, BlinkMacSystemFont,
                       'Segoe UI', Roboto, sans-serif;
        }
        .zn-phone-island {
          position: absolute; top: 14px; left: 50%; transform: translateX(-50%);
          width: 96px; height: 28px;
          background: #000; border-radius: 20px; z-index: 30;
        }
        .zn-phone-island::after {
          content: ""; position: absolute; inset: -1px;
          border-radius: 21px; border: 1px solid rgba(255,255,255,0.1);
        }
        .zn-phone-btn { position: absolute; background: linear-gradient(180deg,#5a5a5e,#3a3a3c); }
        .zn-phone-btn.action  { top: 72px;  left: -13px; width: 3px; height: 28px; border-radius: 0 2px 2px 0; }
        .zn-phone-btn.vol-up  { top: 108px; left: -13px; width: 3px; height: 42px; border-radius: 0 2px 2px 0; }
        .zn-phone-btn.vol-dn  { top: 162px; left: -13px; width: 3px; height: 42px; border-radius: 0 2px 2px 0; }
        .zn-phone-btn.power   { top: 128px; right: -13px; width: 3px; height: 68px; border-radius: 2px 0 0 2px; }

        /* ────────────────────────────────────────────────────────────
         * Dusk background — colour stops sampled from the build-17
         * screenshots (column x=15, every 200px). Shows through the
         * status bar on every screen and is the full backdrop for the
         * hand-built Insights screen.
         * ──────────────────────────────────────────────────────────── */
        .zn-dusk {
          position: absolute; inset: 0; z-index: 0;
          background: linear-gradient(180deg,
            #c9a07b 0%,  #ba8f73 8%,  #ad7f6c 16%, #9f6f63 24%,
            #915f5d 31%, #82565d 39%, #725062 47%, #644b65 55%,
            #554469 63%, #473e67 70%, #3b3459 78%, #302b4a 86%,
            #211a34 94%, #160e20 100%);
        }
        .zn-hills {
          position: absolute; left: 0; right: 0; bottom: 0;
          height: 150px; z-index: 0; pointer-events: none;
        }
        .zn-hills svg { display: block; width: 100%; height: 100%; }

        /* ────────────────────────────────────────────────────────────
         * Status bar — shared by every screen (the screenshots' own
         * status bars are cropped off so the clock never changes).
         * ──────────────────────────────────────────────────────────── */
        .zn-statusbar {
          position: absolute; top: 0; left: 0; right: 0; z-index: 20;
          height: var(--zn-status-h);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 30px 0 32px;
          font-size: 14px; font-weight: 600;
          color: var(--zn-secondary);
        }
        .zn-statusbar .icons { display: flex; gap: 6px; align-items: center; }

        /* ────────────────────────────────────────────────────────────
         * Screens — stacked; inactive ones fade out but stay mounted
         * so lazy screenshots load once the phone is in view.
         * ──────────────────────────────────────────────────────────── */
        .zn-screen {
          position: absolute; inset: 0; z-index: 5;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity .25s ease, visibility 0s linear .25s;
        }
        .zn-screen.active {
          opacity: 1; visibility: visible; pointer-events: auto;
          transition: opacity .25s ease, visibility 0s;
        }
        .zn-shot {
          position: absolute; top: var(--zn-status-h); left: 0; right: 0;
          height: var(--zn-shot-h);
        }
        .zn-shot img {
          display: block; width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
        }

        /* ════════════════════════════════════════════════════════════
         * Insights screen — hand-built in the build-17 visual language
         * ════════════════════════════════════════════════════════════ */
        .zn-insights {
          position: absolute; inset: 0;
          padding: calc(var(--zn-status-h) + 8px) 14px 0;
          display: flex; flex-direction: column;
        }
        .zn-navtitle {
          margin: 0 0 16px; text-align: center;
          font-size: 22px; font-weight: 700; letter-spacing: -0.3px;
          color: var(--zn-secondary); line-height: 1.1;
        }
        .zn-chips {
          display: flex; gap: 8px; overflow: hidden;
          margin: 0 -14px 14px; padding: 0 14px;
        }
        .zn-chip {
          flex: none; display: inline-flex; align-items: center; gap: 5px;
          height: 30px; padding: 0 12px; border-radius: 999px;
          font-size: 12.5px; font-weight: 600; letter-spacing: -0.1px;
          color: var(--zn-secondary);
          background: rgba(60, 46, 58, 0.72);
          white-space: nowrap;
        }
        .zn-chip svg { width: 12px; height: 12px; }
        .zn-chip.active {
          background: var(--zn-accent); color: var(--zn-ink);
        }
        .zn-card {
          position: relative;
          background: var(--zn-glass-fill);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--zn-glass-border);
          border-radius: 24px;
          padding: 13px 15px 13px;
          margin-bottom: 10px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.22);
        }
        .zn-card-eyebrow {
          display: flex; align-items: center; gap: 6px;
          margin: 0 0 5px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 1.3px;
          text-transform: uppercase; color: var(--zn-accent);
        }
        .zn-card-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 3px;
          background: var(--zn-accent); flex: none;
        }
        .zn-card-title {
          margin: 0 0 5px;
          font-size: 16px; font-weight: 700; letter-spacing: -0.3px;
          color: var(--zn-secondary); line-height: 1.2;
        }
        .zn-card-body {
          margin: 0 0 9px;
          font-size: 12.5px; line-height: 1.4;
          color: rgba(242,240,235,0.74);
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .zn-pill {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 3px 8px; border-radius: 999px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.1px;
          color: rgba(242,240,235,0.78);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .zn-pill svg { width: 9px; height: 9px; color: var(--zn-accent); }

        /* ────────────────────────────────────────────────────────────
         * Tab zone — fades the screenshot seam into the deep-dusk
         * floor, then floats the pill tab bar + home indicator.
         * ──────────────────────────────────────────────────────────── */
        .zn-tabzone {
          position: absolute; left: 0; right: 0; bottom: 0; z-index: 10;
          height: var(--zn-tab-zone-h);
          background: linear-gradient(180deg,
            rgba(34,26,53,0) 0px, #221a35 14px, #1b1429 100%);
        }
        .zn-tabbar {
          position: absolute; left: 16px; right: 16px; top: 6px;
          height: 46px; border-radius: 999px;
          display: flex; align-items: stretch; padding: 3px;
          background: rgba(30, 25, 46, 0.9);
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 10px 28px -6px rgba(0,0,0,0.6);
          margin: 0;
        }
        .zn-tabitem {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 2px;
          border-radius: 999px; border: 0; padding: 0;
          background: transparent; cursor: pointer;
          color: rgba(242,240,235,0.9);
          font-family: inherit;
          transition: background-color .15s, color .15s;
        }
        .zn-tabitem svg { width: 19px; height: 19px; }
        .zn-tabitem .lbl { font-size: 9.5px; font-weight: 600; letter-spacing: 0.1px; }
        .zn-tabitem:hover { color: #fff; }
        .zn-tabitem[aria-selected="true"] {
          background: rgba(250,194,122,0.14);
          color: var(--zn-accent);
        }
        .zn-tabitem:focus-visible {
          outline: 2px solid var(--zn-accent); outline-offset: -2px;
        }
        .zn-home {
          position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 104px; height: 4px;
          background: rgba(255,255,255,0.35);
          border-radius: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .zn-screen, .zn-screen.active, .zn-tabitem { transition: none; }
        }
      `}</style>

      <div className="zn-phone-btn action" />
      <div className="zn-phone-btn vol-up" />
      <div className="zn-phone-btn vol-dn" />
      <div className="zn-phone-btn power" />

      <div className="zn-phone">
        {/* Dusk gradient + rounded hills (visible on Insights and behind the status bar) */}
        <div className="zn-dusk" aria-hidden="true" />
        <div className="zn-hills" aria-hidden="true">
          <svg viewBox="0 0 340 150" preserveAspectRatio="none">
            <path d="M0 150 L0 96 C40 62 110 58 150 96 C170 116 190 120 210 100 C250 60 310 66 340 98 L340 150 Z" fill="#2a2342" />
            <path d="M0 150 L0 124 C60 84 130 80 175 116 C200 138 230 130 260 108 C290 84 320 92 340 112 L340 150 Z" fill="#1f1833" />
          </svg>
        </div>

        <div className="zn-phone-island" aria-hidden="true" />

        <div className="zn-statusbar" aria-hidden="true">
          <span>9:41</span>
          <span className="icons">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
              <rect x="0" y="3" width="3" height="8" rx="1" />
              <rect x="4" y="1" width="3" height="10" rx="1" />
              <rect x="8" y="0" width="3" height="11" rx="1" />
              <rect x="12" y="0" width="3" height="11" rx="1" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 24 17" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1.5 6C5 2.5 11 1 12 1s7 1.5 10.5 5" />
              <path d="M5 10c1.9-1.9 4.3-3 7-3s5.1 1.1 7 3" />
              <circle cx="12" cy="14" r="2" fill="currentColor" stroke="none" />
            </svg>
            <svg width="24" height="11" viewBox="0 0 26 12" fill="none">
              <rect x="0.5" y="0.5" width="22" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.45" />
              <rect x="2" y="2" width="18" height="8" rx="2" fill="currentColor" />
              <path d="M23.5 4.5v3a2 2 0 000-3z" fill="currentColor" fillOpacity="0.4" />
            </svg>
          </span>
        </div>

        {/* Real build-17 screenshots — Journal / Actions / Journey */}
        {SHOTS.map((shot) => (
          <div
            key={shot.id}
            id={`zn-panel-${shot.id}`}
            role="tabpanel"
            aria-labelledby={`zn-tab-${shot.id}`}
            className={`zn-screen ${screen === shot.id ? 'active' : ''}`}
            aria-hidden={screen !== shot.id}
          >
            <picture className="zn-shot">
              <source srcSet={`/app/${shot.id}.webp`} type="image/webp" />
              <img
                src={`/app/${shot.id}.png`}
                width={680}
                height={1253}
                alt={shot.alt}
                loading={shot.id === 'journal' ? 'eager' : 'lazy'}
                decoding="async"
              />
            </picture>
          </div>
        ))}

        {/* Insights — hand-built (no clean screenshot yet) */}
        <div
          id="zn-panel-insights"
          role="tabpanel"
          aria-labelledby="zn-tab-insights"
          className={`zn-screen ${screen === 'insights' ? 'active' : ''}`}
          aria-hidden={screen !== 'insights'}
        >
          <div className="zn-insights">
            <p className="zn-navtitle">Insights</p>

            <div className="zn-chips" aria-label="Insight filters">
              {INSIGHT_CHIPS.map((chip, i) => (
                <span key={chip} className={`zn-chip ${i === 0 ? 'active' : ''}`}>
                  {i === 0 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 13l2-8h12l2 8v6H4z" /><path d="M4 13h5a3 3 0 006 0h5" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 000-7.8z" />
                    </svg>
                  )}
                  {(i === 2 || i === 3) && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" />
                    </svg>
                  )}
                  {i === 4 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 17l5-6 4 4 5-7 4 3" />
                    </svg>
                  )}
                  {chip}
                </span>
              ))}
            </div>

            {INSIGHT_CARDS.map((card) => (
              <div key={card.title} className="zn-card">
                <p className="zn-card-eyebrow">{card.eyebrow}</p>
                <p className="zn-card-title">{card.title}</p>
                <p className="zn-card-body">{card.body}</p>
                <span className="zn-pill">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
                  {card.confidence}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shared floating tab bar — matches the build-17 pill */}
        <div className="zn-tabzone">
          <div className="zn-tabbar" role="tablist" aria-label="Zenith tabs" onKeyDown={onTabKeyDown}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`zn-tab-${tab.id}`}
                aria-selected={screen === tab.id}
                aria-controls={`zn-panel-${tab.id}`}
                tabIndex={screen === tab.id ? 0 : -1}
                className="zn-tabitem"
                onClick={() => setScreen(tab.id)}
              >
                <TabIcon id={tab.id} />
                <span className="lbl">{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="zn-home" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default ZenithPhoneMock;

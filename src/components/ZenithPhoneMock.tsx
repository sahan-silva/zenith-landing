/**
 * src/components/ZenithPhoneMock.tsx
 *
 * Zenith phone mock — faithful replica of the live iOS app
 * (~/aramuna/zenith-journal-ios/Sources/Views/).
 *
 * Hardware silhouette is shared with Burlit's TradieMatePhoneMock
 * (340×720, dynamic island, side buttons, dark OLED rim, status bar,
 * home indicator) so the two landing pages read as one family. Everything
 * inside the screen mirrors the real iOS UI, not Burlit's:
 *
 *  - Background: Theme.duskGradient (bottom-up deep-purple → mid-purple →
 *    terracotta → golden horizon) + 3-range mountain silhouettes +
 *    cloud wisps. Matches DuskBackgroundView.swift.
 *  - Typography: SF Pro Rounded family. The iOS app uses
 *    Font.system(design: .rounded) for every label — no serif anywhere.
 *  - Accent: #FAC27A (Theme.accent dark mode = rgb(0.98,0.76,0.48)).
 *    Warm amber, NOT the web's terracotta ember.
 *  - 4 tabs (book.pages → wand.and.stars → checklist → chart.xyaxis.line)
 *    in the order the real ContentView.swift renders them. Tab tint
 *    Theme.accent (amber).
 *  - FAB ("+") is a separate overlay above the tab bar, bottom-right —
 *    not inside the tab pill like Burlit.
 *
 * Per-screen sources:
 *  - Journal:  JournalListView.swift editorContent (greeting → date
 *              selector → ProactiveInsightsSection → MoodSelectorView →
 *              AdaptivePromptCard → TextEditor "What's on your mind?")
 *  - Insights: InsightsView.swift (filter capsules → GoldenThreadCard →
 *              InsightCard list with confidence % badge + helpful/heart row)
 *  - Actions:  ActionsView.swift ActionRow (circle checkbox + value +
 *              metadata pills + chevron, Apple-Reminders inspired)
 *  - Journey:  StatsView.swift (NextAchievementView badge + ratio +
 *              dots → StatsCard 2-row stats with flame/trophy and
 *              doc/textformat/face.smiling)
 *
 * Design note — glass on a web surface: the Quiet Confidence ADR forbids
 * glassmorphism on Zenith's web body. The phone is exempt because the
 * glass is part of the simulated iOS UI inside the phone screen, not
 * web decoration.
 *
 * Related: Hero.tsx
 */

import React, { useState } from 'react';

type Screen = 'journal' | 'insights' | 'actions' | 'journey';

const ZenithPhoneMock: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('journal');

  return (
    <div className="zn-phone-wrap" aria-hidden="true">
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
          --zn-ink-soft:#28252B;
          --zn-secondary:#F2F0EB;
          --zn-stone:#9E9994;
          --zn-stone-light:#C7C2BC;
          --zn-accent:#FAC27A;       /* Theme.accent dark — warm amber */
          --zn-success:#99D9B3;      /* Theme.success dark — sage */
          --zn-error:#F28080;
          --zn-warning:#FAB372;

          /* Dusk gradient stops — Theme.duskGradient */
          --zn-dusk-deep:#1a1a2e;    /* duskDeep */
          --zn-dusk-mid:#4a405f;     /* duskMid */
          --zn-dusk-warm:#8c595a;    /* duskWarm */
          --zn-dusk-gold:#c9a17a;    /* duskGold */

          /* Mood colors — coreMoodColors */
          --zn-mood-joy:#8FBC8F;
          --zn-mood-love:#E8A87C;
          --zn-mood-calm:#B8A99A;
          --zn-mood-surprise:#D4A574;
          --zn-mood-sad:#7A8A9A;
          --zn-mood-fear:#9A7A9A;
          --zn-mood-anger:#C97A7A;

          /* Glass card recipe */
          --zn-glass-fill: rgba(31, 28, 33, 0.55);
          --zn-glass-border: rgba(255, 255, 255, 0.10);

          width: 340px; height: 720px;
          background: var(--zn-dusk-deep);
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
             everywhere, so we approximate with system rounded variants.
             Apple ships these on macOS Safari; falls back gracefully. */
          font-family: -apple-system-rounded, 'SF Pro Rounded', 'SF Pro Display',
                       ui-rounded, system-ui, -apple-system, BlinkMacSystemFont,
                       'Segoe UI', Roboto, sans-serif;
          font-feature-settings: 'ss01';
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
         * DuskBackgroundView — three layers
         * ──────────────────────────────────────────────────────────── */
        .zn-dusk {
          position: absolute; inset: 0; z-index: 0;
          background: linear-gradient(to top,
            var(--zn-dusk-deep)  0%,
            var(--zn-dusk-mid)  35%,
            var(--zn-dusk-warm) 70%,
            var(--zn-dusk-gold) 100%);
        }
        .zn-mountains {
          position: absolute; left: 0; right: 0; bottom: 0;
          height: 200px; z-index: 1; pointer-events: none;
        }
        .zn-mountains svg { display: block; width: 100%; height: 100%; }
        .zn-cloud {
          position: absolute; z-index: 2; pointer-events: none;
          width: 80px; height: 20px;
          background: rgba(255,255,255,0.04);
          border-radius: 50%;
          filter: blur(8px);
          animation: znDrift 28s linear infinite;
        }
        .zn-cloud.a { top: 120px; left: -40px; animation-delay: 0s; }
        .zn-cloud.b { top: 200px; left: -60px; animation-delay: -10s;
          width: 120px; height: 24px; background: rgba(255,255,255,0.03); }
        @keyframes znDrift {
          from { transform: translateX(0); }
          to   { transform: translateX(420px); }
        }

        /* ────────────────────────────────────────────────────────────
         * Status bar
         * ──────────────────────────────────────────────────────────── */
        .zn-statusbar {
          height: 56px; display: flex; align-items: flex-end;
          padding: 0 32px 10px;
          justify-content: space-between;
          font-size: 14px; font-weight: 600;
          color: var(--zn-secondary);
          position: relative; z-index: 20;
        }
        .zn-statusbar .icons { display: flex; gap: 6px; align-items: center; }

        /* ────────────────────────────────────────────────────────────
         * Screen container
         * ──────────────────────────────────────────────────────────── */
        .zn-screen { display: none; height: calc(100% - 56px);
          position: relative; z-index: 5;
          animation: znFade .2s ease;
        }
        .zn-screen.active { display: block; }
        .zn-screen-inner {
          padding: 4px 18px 110px; height: 100%; overflow: hidden;
          display: flex; flex-direction: column;
        }
        @keyframes znFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

        /* Glass card — used across all screens */
        .zn-glass {
          position: relative;
          background: var(--zn-glass-fill);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--zn-glass-border);
          border-radius: 16px;
          box-shadow:
            0 12px 32px rgba(0,0,0,0.32),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }

        /* Large nav titles — matches navigationBarTitleDisplayMode(.large) */
        .zn-navtitle {
          font-size: 30px; font-weight: 800; letter-spacing: -0.6px;
          color: var(--zn-secondary); margin: 6px 0 12px;
          line-height: 1.05;
        }

        /* Eyebrow caption (rare — most labels are inline icons) */
        .zn-caption {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2px;
          color: var(--zn-stone);
        }

        /* ════════════════════════════════════════════════════════════
         * Journal screen
         * mirrors JournalListView.swift editorContent
         * ════════════════════════════════════════════════════════════ */
        .zn-greeting {
          font-size: 26px; font-weight: 800; letter-spacing: -0.5px;
          color: var(--zn-secondary); margin: 4px 0 6px;
          line-height: 1.05;
        }
        .zn-date-pill {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; color: rgba(255,255,255,0.9);
          margin-bottom: 14px;
        }
        .zn-date-pill svg { width: 10px; height: 10px; color: var(--zn-stone); }

        /* Proactive insight banner */
        .zn-prox {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; margin-bottom: 14px;
          border-radius: 12px;
          background: rgba(250,194,122,0.10);
          border: 1px solid rgba(250,194,122,0.22);
        }
        .zn-prox-icon { color: var(--zn-accent); flex: none; }
        .zn-prox-icon svg { width: 16px; height: 16px; }
        .zn-prox-text { font-size: 12.5px; color: var(--zn-secondary);
          line-height: 1.35; }

        /* Mood orb row — MoodSelectorView */
        .zn-moods {
          display: flex; gap: 14px; overflow-x: hidden;
          margin: 0 -18px 16px; padding: 0 18px;
          -webkit-mask-image: linear-gradient(to right,
            transparent, black 18px, black calc(100% - 18px), transparent);
        }
        .zn-mood {
          flex: none; display: flex; flex-direction: column; align-items: center;
          gap: 6px;
        }
        .zn-mood-orb {
          width: 44px; height: 44px; border-radius: 22px;
          background: rgba(40,37,43,0.7);
          border: 0.5px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          position: relative;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .zn-mood-orb svg { width: 20px; height: 20px;
          color: rgba(158,153,148,0.55); }
        .zn-mood.selected .zn-mood-orb {
          background: rgba(232,168,124,0.18);
          border-color: rgba(232,168,124,0.5);
          box-shadow: 0 6px 18px -4px rgba(232,168,124,0.4);
          transform: scale(1.08);
        }
        .zn-mood.selected .zn-mood-orb svg { color: var(--zn-mood-love); }
        .zn-mood-lbl { font-size: 9.5px; color: var(--zn-secondary);
          letter-spacing: -0.1px; }
        .zn-mood.selected .zn-mood-lbl {
          color: var(--zn-mood-love); font-weight: 600;
        }

        /* Adaptive prompt card */
        .zn-prompt {
          border-radius: 14px; padding: 12px 14px; margin-bottom: 12px;
          background: rgba(31,28,33,0.5);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .zn-prompt-head { display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 6px; }
        .zn-prompt-eyebrow {
          font-size: 9.5px; font-weight: 700; letter-spacing: 1.4px;
          text-transform: uppercase; color: var(--zn-stone);
        }
        .zn-prompt-actions { display: flex; gap: 8px; }
        .zn-prompt-actions svg { width: 12px; height: 12px;
          color: var(--zn-stone); }
        .zn-prompt-body {
          font-size: 13.5px; color: var(--zn-secondary);
          line-height: 1.45; font-style: italic;
        }

        /* Editor placeholder */
        .zn-editor {
          flex: 1; min-height: 60px;
          font-size: 14px; color: var(--zn-stone);
          padding: 6px 2px;
        }

        /* Bottom input mode toolbar */
        .zn-toolbar {
          display: flex; gap: 8px; padding: 8px 0 0;
        }
        .zn-tool {
          flex: 1; height: 38px; border-radius: 10px;
          background: rgba(40,37,43,0.7);
          border: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center; gap: 5px;
          color: var(--zn-secondary); font-size: 11.5px; font-weight: 600;
        }
        .zn-tool svg { width: 13px; height: 13px; color: var(--zn-accent); }

        /* ════════════════════════════════════════════════════════════
         * Insights screen
         * mirrors InsightsView.swift
         * ════════════════════════════════════════════════════════════ */
        .zn-filters {
          display: flex; gap: 8px; overflow: hidden;
          margin: 0 -18px 14px; padding: 0 18px;
          -webkit-mask-image: linear-gradient(to right,
            transparent, black 18px, black calc(100% - 18px), transparent);
        }
        .zn-pill {
          flex: none; padding: 6px 14px; border-radius: 999px;
          font-size: 11.5px; font-weight: 700;
          color: var(--zn-secondary);
          background: rgba(40,37,43,0.6);
        }
        .zn-pill.active {
          background: var(--zn-accent); color: var(--zn-ink);
        }

        /* Golden Thread card */
        .zn-thread { padding: 14px; margin-bottom: 10px;
          position: relative; }
        .zn-thread.zn-glass {
          border: 1.5px solid rgba(212,165,116,0.4);
        }
        .zn-thread-head { display: flex; align-items: center; gap: 6px;
          margin-bottom: 8px; }
        .zn-thread-head svg { width: 14px; height: 14px;
          color: var(--zn-mood-surprise); }
        .zn-thread-lbl { font-size: 11.5px; font-weight: 700;
          color: var(--zn-mood-surprise); flex: 1; }
        .zn-thread-week {
          font-size: 9.5px; font-weight: 600; color: var(--zn-stone);
          background: rgba(40,37,43,0.7);
          padding: 2px 7px; border-radius: 6px;
        }
        .zn-thread-title {
          font-size: 15px; font-weight: 700; color: var(--zn-secondary);
          letter-spacing: -0.3px; margin: 4px 0 8px; line-height: 1.25;
        }
        .zn-thread-body {
          font-size: 12px; color: var(--zn-secondary);
          line-height: 1.5; margin-bottom: 10px;
        }
        .zn-thread-themes { display: flex; gap: 5px; flex-wrap: wrap;
          margin-bottom: 10px; }
        .zn-thread-theme {
          font-size: 10px; font-weight: 600;
          color: var(--zn-mood-surprise);
          background: rgba(212,165,116,0.12);
          border: 1px solid rgba(212,165,116,0.25);
          padding: 3px 8px; border-radius: 8px;
        }
        .zn-thread-action {
          display: flex; align-items: flex-start; gap: 8px;
          background: rgba(212,165,116,0.08);
          border: 1px solid rgba(212,165,116,0.18);
          border-radius: 8px; padding: 8px 10px;
        }
        .zn-thread-action svg {
          width: 12px; height: 12px; color: var(--zn-mood-surprise);
          flex: none; margin-top: 1px;
        }
        .zn-thread-action p {
          font-size: 11px; color: var(--zn-stone); line-height: 1.45;
          margin: 0;
        }

        /* Insight card */
        .zn-insight { padding: 12px 14px; margin-bottom: 8px; }
        .zn-insight-head { display: flex; align-items: center; gap: 6px;
          margin-bottom: 8px; }
        .zn-insight-head .icon { color: var(--zn-accent); }
        .zn-insight-head .icon svg { width: 13px; height: 13px; }
        .zn-insight-title { flex: 1; font-size: 12px; font-weight: 700;
          color: var(--zn-accent); letter-spacing: 0.2px; }
        .zn-conf {
          font-size: 9.5px; font-weight: 800; color: var(--zn-success);
          background: rgba(153,217,179,0.16);
          padding: 2px 6px; border-radius: 4px;
        }
        .zn-insight-date { font-size: 10px; color: var(--zn-stone); }
        .zn-insight-body {
          font-size: 12.5px; color: var(--zn-secondary);
          line-height: 1.5; margin: 0 0 10px;
        }
        .zn-insight-foot { display: flex; align-items: center; gap: 10px;
          font-size: 11px; color: var(--zn-stone); }
        .zn-insight-foot svg { width: 12px; height: 12px;
          color: var(--zn-stone); }
        .zn-insight-foot .heart { margin-left: auto; }

        /* ════════════════════════════════════════════════════════════
         * Actions screen
         * mirrors ActionsView.swift ActionRow
         * ════════════════════════════════════════════════════════════ */
        .zn-status-row {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 14px;
        }
        .zn-status-row .count { font-size: 11.5px; color: var(--zn-stone); }

        .zn-action {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 4px; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .zn-action:last-child { border-bottom: 0; }
        .zn-check {
          width: 22px; height: 22px; border-radius: 11px;
          border: 1.5px solid rgba(158,153,148,0.4); flex: none;
          margin-top: 1px;
        }
        .zn-check.done {
          background: var(--zn-success);
          border-color: var(--zn-success);
          display: flex; align-items: center; justify-content: center;
        }
        .zn-check.done svg { width: 11px; height: 11px;
          color: var(--zn-ink); }
        .zn-action-body { flex: 1; min-width: 0; }
        .zn-action-val {
          font-size: 13.5px; color: var(--zn-secondary);
          letter-spacing: -0.2px; line-height: 1.35;
        }
        .zn-action.done .zn-action-val {
          color: var(--zn-stone); text-decoration: line-through;
        }
        .zn-action-meta {
          display: flex; gap: 10px; margin-top: 5px;
          font-size: 10.5px; color: var(--zn-stone);
        }
        .zn-action-meta span {
          display: inline-flex; align-items: center; gap: 3px;
        }
        .zn-action-meta svg { width: 10px; height: 10px; }
        .zn-action-source {
          font-size: 10px; color: rgba(158,153,148,0.6);
          margin-top: 4px;
        }
        .zn-action-chevron svg { width: 11px; height: 11px;
          color: rgba(158,153,148,0.4); }

        /* ════════════════════════════════════════════════════════════
         * Journey screen
         * mirrors StatsView.swift
         * ════════════════════════════════════════════════════════════ */
        .zn-next { padding: 14px; margin-bottom: 12px;
          display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .zn-badge {
          width: 50px; height: 50px; border-radius: 14px;
          background: linear-gradient(135deg, rgba(250,194,122,0.20),
                                              rgba(250,194,122,0.05));
          border: 1px solid rgba(250,194,122,0.35);
          display: flex; align-items: center; justify-content: center;
        }
        .zn-badge svg { width: 24px; height: 24px; color: var(--zn-accent); }
        .zn-ratio { font-size: 14px; font-weight: 700;
          color: var(--zn-secondary); letter-spacing: -0.3px; }
        .zn-dots { display: flex; gap: 5px; }
        .zn-dot {
          width: 7px; height: 7px; border-radius: 4px;
          background: rgba(158,153,148,0.3);
        }
        .zn-dot.lit { background: var(--zn-accent); }
        .zn-next-cap {
          font-size: 11px; color: var(--zn-stone);
        }

        /* StatsCard */
        .zn-stats { padding: 14px; margin-bottom: 12px; }
        .zn-stat-row { display: flex; align-items: center; }
        .zn-stat-row.divider {
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 10px; padding-top: 10px;
        }
        .zn-stat-cell {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          gap: 3px;
        }
        .zn-stat-vrow { display: flex; align-items: center; gap: 5px; }
        .zn-stat-vrow svg { width: 12px; height: 12px; }
        .zn-stat-vrow .accent svg { color: var(--zn-accent); }
        .zn-stat-vrow .succ svg { color: var(--zn-success); }
        .zn-stat-val { font-size: 17px; font-weight: 800;
          color: var(--zn-secondary); letter-spacing: -0.4px; }
        .zn-stat-lbl { font-size: 9.5px; color: var(--zn-stone);
          letter-spacing: 0.1px; }
        .zn-stat-div {
          width: 1px; height: 36px;
          background: rgba(158,153,148,0.18);
        }

        /* Emotion Analytics — sunburst */
        .zn-emotion-h {
          font-size: 14px; font-weight: 700;
          color: var(--zn-secondary); letter-spacing: -0.3px;
          margin: 4px 0 10px;
        }
        .zn-emotion { padding: 12px 14px;
          display: flex; align-items: center; gap: 14px; }
        .zn-legend { flex: 1; display: flex; flex-direction: column; gap: 4px; }
        .zn-legend-item {
          display: flex; align-items: center; gap: 7px;
          font-size: 10.5px; color: var(--zn-secondary);
        }
        .zn-legend-dot {
          width: 7px; height: 7px; border-radius: 4px; flex: none;
        }
        .zn-legend-val { margin-left: auto; color: var(--zn-stone); }
        .zn-sunburst { width: 90px; height: 90px; flex: none; }

        /* ────────────────────────────────────────────────────────────
         * Tab bar — native iOS TabView pattern
         * ──────────────────────────────────────────────────────────── */
        .zn-tabbar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 82px; z-index: 10;
          background: rgba(20,18,22,0.78);
          backdrop-filter: blur(28px) saturate(1.2);
          -webkit-backdrop-filter: blur(28px) saturate(1.2);
          border-top: 0.5px solid rgba(255,255,255,0.08);
          padding: 8px 0 24px;
          display: flex;
        }
        .zn-tabitem {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 3px;
          color: rgba(158,153,148,0.7); cursor: pointer;
          background: transparent; border: 0; padding: 0;
          transition: color .15s;
        }
        .zn-tabitem svg { width: 22px; height: 22px; }
        .zn-tabitem .lbl { font-size: 10px; font-weight: 600;
          letter-spacing: -0.1px; }
        .zn-tabitem.active { color: var(--zn-accent); }
        .zn-tabitem:hover { color: rgba(242,240,235,0.9); }
        .zn-tabitem.active:hover { color: var(--zn-accent); }

        /* Floating FAB — overlay above tab bar, NOT inside it.
           Matches JournalListView.swift overlay(alignment: .bottomTrailing). */
        .zn-fab {
          position: absolute; right: 20px; bottom: 100px;
          width: 56px; height: 56px; border-radius: 28px;
          background: var(--zn-accent);
          color: var(--zn-ink);
          border: 0; padding: 0; cursor: pointer;
          z-index: 15;
          display: flex; align-items: center; justify-content: center;
          box-shadow:
            0 8px 24px -4px rgba(250,194,122,0.45),
            0 4px 14px -2px rgba(0,0,0,0.5);
        }
        .zn-fab svg { width: 24px; height: 24px; }

        .zn-home {
          position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
          width: 112px; height: 4px;
          background: rgba(255,255,255,0.32);
          border-radius: 3px; z-index: 16;
        }
      `}</style>

      <div className="zn-phone-btn action" />
      <div className="zn-phone-btn vol-up" />
      <div className="zn-phone-btn vol-dn" />
      <div className="zn-phone-btn power" />

      <div className="zn-phone">
        {/* DuskBackgroundView: gradient + mountains + cloud wisps */}
        <div className="zn-dusk" />
        <div className="zn-mountains">
          <svg viewBox="0 0 340 200" preserveAspectRatio="none">
            {/* Far range — lightest */}
            <path
              d="M0 130 L40 95 L75 110 L120 80 L165 105 L210 90 L255 115 L300 95 L340 105 L340 200 L0 200 Z"
              fill="rgba(30,20,46,0.55)"
            />
            {/* Mid range */}
            <path
              d="M0 150 L35 120 L70 140 L115 105 L160 130 L210 115 L260 138 L305 118 L340 130 L340 200 L0 200 Z"
              fill="rgba(25,17,38,0.7)"
            />
            {/* Near range — darkest */}
            <path
              d="M0 175 L30 145 L65 165 L110 140 L155 162 L200 145 L250 168 L300 148 L340 160 L340 200 L0 200 Z"
              fill="rgba(20,13,30,0.85)"
            />
          </svg>
        </div>
        <div className="zn-cloud a" />
        <div className="zn-cloud b" />

        <div className="zn-phone-island" />

        <div className="zn-statusbar">
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

        {/* ────────────────────────────────────────────────────────────
         * Journal screen
         * ──────────────────────────────────────────────────────────── */}
        <div className={`zn-screen ${screen === 'journal' ? 'active' : ''}`}>
          <div className="zn-screen-inner">
            <p className="zn-greeting">Good evening, Sahan</p>

            <div className="zn-date-pill">
              <span>Today, May 12</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            <div className="zn-prox">
              <span className="zn-prox-icon">
                {/* SF Symbol: wand.and.stars equivalent — Sparkles */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <p className="zn-prox-text">
                This week you've leaned into reflection — 4 of 6 entries mention slowing down.
              </p>
            </div>

            {/* Mood orbs — MoodSelectorView with "love" selected */}
            <div className="zn-moods">
              <div className="zn-mood">
                <div className="zn-mood-orb">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/><path stroke="currentColor" strokeWidth="2" d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></svg>
                </div>
                <span className="zn-mood-lbl">Joyful</span>
              </div>
              <div className="zn-mood selected">
                <div className="zn-mood-orb">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-5-7-11a4 4 0 017-2.6A4 4 0 0119 10c0 6-7 11-7 11z"/></svg>
                </div>
                <span className="zn-mood-lbl">Loving</span>
              </div>
              <div className="zn-mood">
                <div className="zn-mood-orb">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-3 5-3 9 0 14 3-5 3-9 0-14zM7 9c-1 4 1 7 5 8M17 9c1 4-1 7-5 8"/></svg>
                </div>
                <span className="zn-mood-lbl">Calm</span>
              </div>
              <div className="zn-mood">
                <div className="zn-mood-orb">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l1.5 4 4 .5-3 3 1 4-3.5-2-3.5 2 1-4-3-3 4-.5z"/></svg>
                </div>
                <span className="zn-mood-lbl">Surprised</span>
              </div>
              <div className="zn-mood">
                <div className="zn-mood-orb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 11h12a4 4 0 100-8 5 5 0 00-5 4M2 16h7M2 20h11"/></svg>
                </div>
                <span className="zn-mood-lbl">Anxious</span>
              </div>
              <div className="zn-mood">
                <div className="zn-mood-orb">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-2 4-4 6-4 10a4 4 0 008 0c0-2-1-3-2-5-1 2-2 2-2 0z"/></svg>
                </div>
                <span className="zn-mood-lbl">Frustrated</span>
              </div>
            </div>

            {/* Adaptive prompt card */}
            <div className="zn-prompt">
              <div className="zn-prompt-head">
                <span className="zn-prompt-eyebrow">Prompt</span>
                <span className="zn-prompt-actions">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 4v6h6M23 20v-6h-6"/>
                    <path d="M3.5 10a9 9 0 0114.9-3.4L23 10M1 14l4.6 3.4A9 9 0 0020.5 14"/>
                  </svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </span>
              </div>
              <p className="zn-prompt-body">
                What's something you noticed today that you'd usually miss?
              </p>
            </div>

            <div className="zn-editor">What's on your mind?</div>

            <div className="zn-toolbar">
              <div className="zn-tool">
                <svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="12" rx="3"/><path stroke="currentColor" fill="none" strokeWidth="2" d="M5 11a7 7 0 0014 0M12 18v3M9 21h6"/></svg>
                Voice
              </div>
              <div className="zn-tool">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6l2-3h4l2 3"/></svg>
                Photo
              </div>
              <div className="zn-tool">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3"/><path d="M7 9h10M7 13h7M7 17h6"/></svg>
                Scan
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────────
         * Insights screen
         * ──────────────────────────────────────────────────────────── */}
        <div className={`zn-screen ${screen === 'insights' ? 'active' : ''}`}>
          <div className="zn-screen-inner">
            <p className="zn-navtitle">Insights</p>

            <div className="zn-filters">
              <span className="zn-pill">All</span>
              <span className="zn-pill">Favourites</span>
              <span className="zn-pill active">Weekly</span>
              <span className="zn-pill">Monthly</span>
              <span className="zn-pill">Patterns</span>
            </div>

            {/* Golden Thread card */}
            <div className="zn-thread zn-glass">
              <div className="zn-thread-head">
                {/* SF Symbol: thread */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6c4 0 8 3 8 6s4 6 8 6"/>
                  <circle cx="4" cy="6" r="2" fill="currentColor"/>
                  <circle cx="20" cy="18" r="2" fill="currentColor"/>
                </svg>
                <span className="zn-thread-lbl">Golden Thread</span>
                <span className="zn-thread-week">This Week</span>
              </div>
              <p className="zn-thread-title">Choosing rest over output</p>
              <p className="zn-thread-body">
                Across nine entries this week, you kept circling back to the same question: when did finishing become more important than living well?
              </p>
              <div className="zn-thread-themes">
                <span className="zn-thread-theme">rest</span>
                <span className="zn-thread-theme">boundaries</span>
                <span className="zn-thread-theme">walks</span>
              </div>
              <div className="zn-thread-action">
                {/* lightbulb.fill */}
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2zM10 19h4v2h-4z"/></svg>
                <p>Try one small protected hour tomorrow before opening anything.</p>
              </div>
            </div>

            {/* Standard insight card */}
            <div className="zn-insight zn-glass">
              <div className="zn-insight-head">
                <span className="icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                </span>
                <span className="zn-insight-title">PATTERN</span>
                <span className="zn-conf">87%</span>
                <span className="zn-insight-date">2d</span>
              </div>
              <p className="zn-insight-body">
                Your Tuesdays trend reflective. Four of the last five Tuesday entries mention slowing down, deciding, or stepping back.
              </p>
              <div className="zn-insight-foot">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 11v8H4v-8zM7 11l5-8 1 1c.5.5.5 1.5 0 2L11 9h7c1 0 2 1 2 2l-2 7c0 1-1 1-2 1H7"/></svg>
                Helpful
                <svg className="heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────────
         * Actions screen
         * ──────────────────────────────────────────────────────────── */}
        <div className={`zn-screen ${screen === 'actions' ? 'active' : ''}`}>
          <div className="zn-screen-inner">
            <p className="zn-navtitle">Actions</p>

            <div className="zn-filters">
              <span className="zn-pill active">All</span>
              <span className="zn-pill">Task</span>
              <span className="zn-pill">Goal</span>
              <span className="zn-pill">Bucket list</span>
            </div>

            <div className="zn-status-row">
              <span className="count">3 active</span>
            </div>

            <div className="zn-action">
              <span className="zn-check" />
              <div className="zn-action-body">
                <p className="zn-action-val">Walk before opening laptop tomorrow morning</p>
                <div className="zn-action-meta">
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l9-4 9 4M5 9v10h14V9"/></svg>habit</span>
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>Tomorrow</span>
                </div>
                <p className="zn-action-source">From entry today</p>
              </div>
              <span className="zn-action-chevron">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </span>
            </div>

            <div className="zn-action done">
              <span className="zn-check done">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <div className="zn-action-body">
                <p className="zn-action-val">Call Mum back about Sunday</p>
                <div className="zn-action-meta">
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 4l-3 7v9h16v-9l-3-7"/></svg>family</span>
                </div>
                <p className="zn-action-source">From entry yesterday</p>
              </div>
              <span className="zn-action-chevron">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </span>
            </div>

            <div className="zn-action">
              <span className="zn-check" />
              <div className="zn-action-body">
                <p className="zn-action-val">Read one chapter of the Camus book this week</p>
                <div className="zn-action-meta">
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V5a2 2 0 012-2h11l3 3v13a2 2 0 01-2 2H6a2 2 0 01-2-2z"/></svg>reading</span>
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>This week</span>
                </div>
                <p className="zn-action-source">From entry Sun</p>
              </div>
              <span className="zn-action-chevron">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </span>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────────
         * Journey screen
         * ──────────────────────────────────────────────────────────── */}
        <div className={`zn-screen ${screen === 'journey' ? 'active' : ''}`}>
          <div className="zn-screen-inner">
            <p className="zn-navtitle">Your Journey</p>

            {/* NextAchievementView */}
            <div className="zn-next zn-glass">
              <div className="zn-badge">
                {/* SF Symbol: medal.fill */}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10l-2 8H9z" opacity="0.85"/>
                  <circle cx="12" cy="16" r="6"/>
                  <path d="M12 13l1 2 2 .3-1.5 1.4.4 2.1L12 17.8l-1.9 1 .4-2.1L9 15.3l2-.3z" fill="rgba(31,28,33,0.55)"/>
                </svg>
              </div>
              <span className="zn-ratio">28 / 30 days</span>
              <div className="zn-dots">
                <span className="zn-dot lit" /><span className="zn-dot lit" /><span className="zn-dot lit" /><span className="zn-dot lit" /><span className="zn-dot" /><span className="zn-dot" />
              </div>
              <span className="zn-next-cap">2 days to Month-Long Reflector</span>
            </div>

            {/* StatsCard */}
            <div className="zn-stats zn-glass">
              <div className="zn-stat-row">
                <div className="zn-stat-cell">
                  <div className="zn-stat-vrow accent">
                    {/* flame.fill */}
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1 3-3 4-3 7a4 4 0 008 0c0-2-2-3-3-5-1 2-1 2-2 0z"/></svg>
                    <span className="zn-stat-val">28</span>
                  </div>
                  <span className="zn-stat-lbl">Current Streak</span>
                </div>
                <span className="zn-stat-div" />
                <div className="zn-stat-cell">
                  <div className="zn-stat-vrow accent">
                    {/* trophy.fill */}
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h10v4a5 5 0 01-10 0zM5 5h2v3a3 3 0 01-3-3zM17 5h2a3 3 0 01-3 3zM10 12h4v4l1 2h-6l1-2z"/></svg>
                    <span className="zn-stat-val">42</span>
                  </div>
                  <span className="zn-stat-lbl">Longest Streak</span>
                </div>
              </div>

              <div className="zn-stat-row divider">
                <div className="zn-stat-cell">
                  <div className="zn-stat-vrow succ">
                    {/* doc.text.fill */}
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h9l5 5v13H5zM14 3v5h5"/></svg>
                    <span className="zn-stat-val">127</span>
                  </div>
                  <span className="zn-stat-lbl">Entries</span>
                </div>
                <div className="zn-stat-cell">
                  <div className="zn-stat-vrow succ">
                    {/* textformat */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V5h16v2M9 5v14M15 11v8M5 19h8M11 19h8"/></svg>
                    <span className="zn-stat-val">12.4k</span>
                  </div>
                  <span className="zn-stat-lbl">Words</span>
                </div>
                <div className="zn-stat-cell">
                  <div className="zn-stat-vrow succ">
                    {/* face.smiling */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/><path d="M9 15c1.5 1.5 4.5 1.5 6 0"/></svg>
                    <span className="zn-stat-val">84%</span>
                  </div>
                  <span className="zn-stat-lbl">Mood Rate</span>
                </div>
              </div>
            </div>

            {/* Emotion Analytics — sunburst */}
            <p className="zn-emotion-h">Emotion Analytics</p>
            <div className="zn-emotion zn-glass">
              <div className="zn-legend">
                <div className="zn-legend-item">
                  <span className="zn-legend-dot" style={{ background: 'var(--zn-mood-joy)' }} />
                  Joy <span className="zn-legend-val">38%</span>
                </div>
                <div className="zn-legend-item">
                  <span className="zn-legend-dot" style={{ background: 'var(--zn-mood-love)' }} />
                  Love <span className="zn-legend-val">22%</span>
                </div>
                <div className="zn-legend-item">
                  <span className="zn-legend-dot" style={{ background: 'var(--zn-mood-calm)' }} />
                  Calm <span className="zn-legend-val">18%</span>
                </div>
                <div className="zn-legend-item">
                  <span className="zn-legend-dot" style={{ background: 'var(--zn-mood-sad)' }} />
                  Sad <span className="zn-legend-val">14%</span>
                </div>
                <div className="zn-legend-item">
                  <span className="zn-legend-dot" style={{ background: 'var(--zn-mood-anger)' }} />
                  Anger <span className="zn-legend-val">8%</span>
                </div>
              </div>
              {/* Sunburst — simplified pie with center hole */}
              <svg className="zn-sunburst" viewBox="0 0 90 90">
                <circle cx="45" cy="45" r="38" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="14"/>
                {/* Each arc: stroke-dasharray = (% * circumference) gap rest */}
                <circle cx="45" cy="45" r="38" fill="none" stroke="var(--zn-mood-joy)" strokeWidth="14"
                  strokeDasharray="91 239" strokeDashoffset="0" transform="rotate(-90 45 45)"/>
                <circle cx="45" cy="45" r="38" fill="none" stroke="var(--zn-mood-love)" strokeWidth="14"
                  strokeDasharray="53 277" strokeDashoffset="-91" transform="rotate(-90 45 45)"/>
                <circle cx="45" cy="45" r="38" fill="none" stroke="var(--zn-mood-calm)" strokeWidth="14"
                  strokeDasharray="43 287" strokeDashoffset="-144" transform="rotate(-90 45 45)"/>
                <circle cx="45" cy="45" r="38" fill="none" stroke="var(--zn-mood-sad)" strokeWidth="14"
                  strokeDasharray="34 296" strokeDashoffset="-187" transform="rotate(-90 45 45)"/>
                <circle cx="45" cy="45" r="38" fill="none" stroke="var(--zn-mood-anger)" strokeWidth="14"
                  strokeDasharray="19 311" strokeDashoffset="-221" transform="rotate(-90 45 45)"/>
                <text x="45" y="44" textAnchor="middle" fill="var(--zn-secondary)"
                  fontSize="14" fontWeight="800" letterSpacing="-0.4">127</text>
                <text x="45" y="56" textAnchor="middle" fill="var(--zn-stone)"
                  fontSize="8" letterSpacing="0.3">entries</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Floating FAB — bottom-right overlay (Journal screen primary action) */}
        <button type="button" className="zn-fab" aria-label="Quick capture">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>

        {/* Tab bar — 4 tabs matching ContentView.swift order */}
        <div className="zn-tabbar">
          <button type="button"
            className={`zn-tabitem ${screen === 'journal' ? 'active' : ''}`}
            onClick={() => setScreen('journal')} aria-label="Journal">
            {/* book.pages */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h7a3 3 0 013 3v14a2 2 0 00-2-2H4z" />
              <path d="M20 4h-7a3 3 0 00-3 3v14a2 2 0 012-2h8z" />
            </svg>
            <span className="lbl">Journal</span>
          </button>
          <button type="button"
            className={`zn-tabitem ${screen === 'insights' ? 'active' : ''}`}
            onClick={() => setScreen('insights')} aria-label="Insights">
            {/* wand.and.stars */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 4l5 5L9 20l-5-5z" />
              <path d="M14 5l5 5" />
              <path d="M19 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" stroke="none"/>
            </svg>
            <span className="lbl">Insights</span>
          </button>
          <button type="button"
            className={`zn-tabitem ${screen === 'actions' ? 'active' : ''}`}
            onClick={() => setScreen('actions')} aria-label="Actions">
            {/* checklist */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polyline points="3 7 5 9 9 5" />
              <polyline points="3 15 5 17 9 13" />
              <line x1="12" y1="7" x2="20" y2="7" />
              <line x1="12" y1="15" x2="20" y2="15" />
            </svg>
            <span className="lbl">Actions</span>
          </button>
          <button type="button"
            className={`zn-tabitem ${screen === 'journey' ? 'active' : ''}`}
            onClick={() => setScreen('journey')} aria-label="Journey">
            {/* chart.xyaxis.line */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 3v18h18" />
              <path d="M7 14l3-3 3 3 5-5" />
              <circle cx="7" cy="14" r="1.3" fill="currentColor" stroke="none"/>
              <circle cx="13" cy="14" r="1.3" fill="currentColor" stroke="none"/>
              <circle cx="18" cy="9" r="1.3" fill="currentColor" stroke="none"/>
            </svg>
            <span className="lbl">Journey</span>
          </button>
        </div>
        <div className="zn-home" />
      </div>
    </div>
  );
};

export default ZenithPhoneMock;

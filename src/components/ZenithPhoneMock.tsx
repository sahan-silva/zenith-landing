/**
 * src/components/ZenithPhoneMock.tsx
 *
 * Zenith phone mock — mirrors the live iOS app
 * (~/aramuna/zenith-journal-ios/Sources/Views/{Journal,Insights,Stats}).
 *
 * Ports the Burlit phone-mock recipe (aramuna-landing-page/components/trademate/
 * TradieMatePhoneMock.tsx) so both products' landing pages feel like one family —
 * identical iPhone hardware silhouette, dynamic island, side buttons, dark OLED
 * surfaces, glass cards, bottom tab pill, home indicator. The differences are
 * Zenith-specific: ember (#c97a4a) replaces lime as the brand accent (FAB,
 * ambient halo, pattern arcs), and the three screens demonstrate Zenith's three
 * pillars instead of Burlit's three jobs:
 *   - Journal:  "Just write" — greeting, quick-capture mic prompt, recent entries
 *   - Insights: "Patterns you can't see" — AI-surfaced pattern + golden thread
 *   - Journey:  "Your everything journal over time" — streak, mood timeline, themes
 *
 * Design note — glass on a web surface:
 *   The Quiet Confidence ADR forbids glassmorphism on Zenith's web body. The phone
 *   is exempt because the glass is part of the simulated iOS UI inside the phone
 *   screen — it reads as "this is what the product looks like," not as web
 *   decoration. All non-phone sections of the landing remain typography-first.
 *
 * Related: Hero.tsx (the only consumer of this component)
 */

import React, { useState } from 'react';

type Screen = 'journal' | 'insights' | 'journey';

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

        /* Phone hardware ------------------------------------------------ */
        .zn-phone {
          /* Zenith iOS darkPalette — Sources/Utilities/Theme.swift adaptive dark values */
          --zn-bg:#0B0B0D;
          --zn-surface:#1F1C21;
          --zn-fg:#F5F0E8;
          --zn-fg2:#9E9994;
          --zn-fg3:#C7C2BC;
          --zn-border:#2B2A2E;
          --zn-ember:#C97A4A;
          --zn-dawn:#D4A574;
          --zn-success:#9ED9B3;
          --zn-success-light:#1F3326;
          --zn-warning:#FAC27A;
          --zn-warning-light:#3A2710;
          --zn-info:#9CC4F0;
          --zn-info-light:#142336;
          --zn-mood-sage:#8FBC8F;
          --zn-mood-love:#E8A87C;

          /* Glass tokens — identical recipe to Burlit darkPalette glass* */
          --zn-glass-fill-top: rgba(28, 26, 24, 0.55);
          --zn-glass-fill-bot: rgba(14, 12, 11, 0.65);
          --zn-glass-border: rgba(255, 255, 255, 0.07);
          --zn-glass-sheen: rgba(255, 255, 255, 0.10);

          width: 340px; height: 720px;
          background: var(--zn-bg);
          color: var(--zn-fg);
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
            0 0 140px -30px rgba(201,122,74,0.20);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
        }
        .zn-phone-island {
          position: absolute; top: 14px; left: 50%; transform: translateX(-50%);
          width: 96px; height: 28px;
          background: #000; border-radius: 20px; z-index: 10;
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

        /* Ambient backdrop halos — ember instead of lime */
        .zn-backdrop {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(circle at 80% 12%, rgba(255,255,255,0.05), transparent 55%),
            radial-gradient(circle at 8% 92%, rgba(201,122,74,0.10), transparent 50%);
        }

        /* Status bar ---------------------------------------------------- */
        .zn-statusbar {
          height: 56px; display: flex; align-items: flex-end;
          padding: 0 32px 10px;
          justify-content: space-between;
          font-size: 14px; font-weight: 600;
          color: var(--zn-fg);
          position: relative; z-index: 2;
        }
        .zn-statusbar .icons { display: flex; gap: 6px; align-items: center; }

        /* Screen container --------------------------------------------- */
        .zn-screen { display: none; padding: 4px 0 0; overflow: hidden;
          height: calc(100% - 56px); animation: znFade .2s ease;
          position: relative; z-index: 1; }
        .zn-screen.active { display: block; }
        .zn-screen-inner {
          padding: 4px 24px 110px; height: 100%; overflow: hidden;
          display: flex; flex-direction: column;
        }
        @keyframes znFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

        /* Glassy surface — vertical gradient + drop shadow. Same recipe as Burlit.
           No CSS border (a 1px hairline reads as a bright top edge against the
           dark phone background and gets compounded by saturate() on backdrop
           filters — Burlit confirmed the SVG-stroked alternative wasn't worth
           the complexity for static cards). */
        .zn-glass {
          position: relative;
          background:
            linear-gradient(180deg, var(--zn-glass-fill-top) 0%, var(--zn-glass-fill-bot) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            0 18px 44px rgba(0,0,0,0.42),
            0 2px 8px rgba(0,0,0,0.22);
        }
        .zn-glass.raised {
          box-shadow:
            0 22px 56px rgba(0,0,0,0.50),
            0 4px 14px rgba(0,0,0,0.30);
        }

        /* Shared headings ---------------------------------------------- */
        .zn-greeting { font-size: 26px; font-weight: 800; letter-spacing: -0.5px;
          color: var(--zn-fg); margin: 6px 0 0; line-height: 1.05;
          font-family: 'Libre Baskerville', Georgia, serif; }
        .zn-screen-h2 { font-size: 26px; font-weight: 700; letter-spacing: -0.5px;
          color: var(--zn-fg); margin: 6px 0 0; line-height: 1.05;
          font-family: 'Libre Baskerville', Georgia, serif; }
        .zn-screen-sub { font-size: 13px; color: var(--zn-fg2); margin: 4px 0 0;
          letter-spacing: -0.1px; }
        .zn-section { font-size: 10px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; color: var(--zn-fg2); margin: 14px 0 8px; }

        /* Stat row (shared across Journal + Journey) */
        .zn-stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 14px; }
        .zn-stat { border-radius: 18px; padding: 10px 6px; text-align: center; position: relative; }
        .zn-stat-val { font-size: 20px; font-weight: 800; letter-spacing: -0.6px; color: var(--zn-fg); line-height: 1; position: relative; z-index: 2; }
        .zn-stat-val.ember { color: var(--zn-warning); }
        .zn-stat-lbl { font-size: 9px; font-weight: 700; letter-spacing: 1.3px; text-transform: uppercase;
          color: var(--zn-fg2); margin-top: 4px; position: relative; z-index: 2; }

        /* Quick-capture card (Journal) ---------------------------------- */
        .zn-capture-wrap { margin-top: 14px; }
        .zn-capture { border-radius: 22px; padding: 18px 18px 16px; }
        .zn-capture-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: var(--zn-fg2); margin: 0; position: relative; z-index: 2; }
        .zn-capture-prompt { font-size: 18px; font-weight: 600; color: var(--zn-fg);
          line-height: 1.25; margin: 8px 0 14px; letter-spacing: -0.3px;
          font-family: 'Libre Baskerville', Georgia, serif; font-style: italic;
          position: relative; z-index: 2; }
        .zn-capture-row { display: flex; align-items: center; gap: 12px;
          position: relative; z-index: 2; }
        .zn-mic {
          width: 52px; height: 52px; border-radius: 26px;
          background: linear-gradient(180deg, var(--zn-ember) 0%, #B86940 100%);
          display: flex; align-items: center; justify-content: center;
          flex: none;
          box-shadow: 0 8px 22px -4px rgba(201, 122, 74, 0.5);
        }
        .zn-mic svg { width: 22px; height: 22px; color: #fff; }
        .zn-wave {
          flex: 1; display: flex; align-items: center; gap: 3px;
          height: 32px;
        }
        .zn-wave-bar {
          flex: 1; background: var(--zn-fg3); border-radius: 1.5px;
          opacity: 0.55;
          animation: znWave 1.6s ease-in-out infinite;
        }
        @keyframes znWave {
          0%, 100% { transform: scaleY(0.3); }
          50%      { transform: scaleY(1); }
        }
        .zn-capture-foot { display: flex; align-items: center; justify-content: space-between;
          margin-top: 12px; padding-top: 12px;
          border-top: 1px solid var(--zn-glass-border);
          font-size: 11px; color: var(--zn-fg2);
          position: relative; z-index: 2; }

        /* Entry tiles (Journal recent) ---------------------------------- */
        .zn-entry { border-radius: 16px; padding: 12px 14px; margin-bottom: 8px;
          display: flex; align-items: center; gap: 12px; }
        .zn-entry-mood {
          width: 8px; height: 8px; border-radius: 4px; flex: none;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.04);
        }
        .zn-entry-body { flex: 1; min-width: 0; position: relative; z-index: 2; }
        .zn-entry-meta { font-size: 10px; font-weight: 700; letter-spacing: 1.2px;
          text-transform: uppercase; color: var(--zn-fg2); margin: 0; }
        .zn-entry-text { font-size: 12.5px; color: var(--zn-fg3); margin: 2px 0 0;
          line-height: 1.35;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        /* Pattern card (Insights) --------------------------------------- */
        .zn-pattern-wrap { margin-top: 14px; }
        .zn-pattern { border-radius: 22px; padding: 16px 18px; }
        .zn-pattern-head { display: flex; align-items: flex-start; justify-content: space-between;
          gap: 12px; position: relative; z-index: 2; }
        .zn-pattern-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: var(--zn-warning); margin: 0; }
        .zn-pattern-title { font-size: 17px; font-weight: 700; color: var(--zn-fg);
          margin: 4px 0 0; line-height: 1.25; letter-spacing: -0.3px;
          font-family: 'Libre Baskerville', Georgia, serif; }
        .zn-ring { width: 56px; height: 56px; flex: none; }
        .zn-pattern-desc { font-size: 12.5px; color: var(--zn-fg3); line-height: 1.5;
          margin: 12px 0 12px; position: relative; z-index: 2; }
        .zn-chip-row { display: flex; flex-wrap: wrap; gap: 6px;
          position: relative; z-index: 2; }
        .zn-chip {
          display: inline-flex; align-items: center; gap: 4px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--zn-glass-border);
          border-radius: 999px; padding: 4px 10px;
          font-size: 10.5px; font-weight: 600; color: var(--zn-fg3);
        }
        .zn-chip.ember { color: var(--zn-warning);
          border-color: rgba(250,194,122,0.25);
          background: rgba(250,194,122,0.08); }

        /* Golden thread card */
        .zn-thread { border-radius: 22px; padding: 14px 16px; margin-top: 10px;
          position: relative; }
        .zn-thread-head { display: flex; align-items: center; gap: 10px;
          margin-bottom: 8px; position: relative; z-index: 2; }
        .zn-thread-icon {
          width: 28px; height: 28px; border-radius: 14px;
          background: rgba(250,194,122,0.10);
          border: 1px solid rgba(250,194,122,0.25);
          display: flex; align-items: center; justify-content: center; flex: none;
        }
        .zn-thread-icon svg { width: 14px; height: 14px; color: var(--zn-warning); }
        .zn-thread-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 1.8px;
          text-transform: uppercase; color: var(--zn-fg2); margin: 0; }
        .zn-thread-title { font-size: 13.5px; font-weight: 700; color: var(--zn-fg);
          margin: 2px 0 0; letter-spacing: -0.2px;
          font-family: 'Libre Baskerville', Georgia, serif; }
        .zn-thread-line {
          display: flex; align-items: center; gap: 6px;
          margin-top: 10px; position: relative; z-index: 2;
          font-size: 11px; color: var(--zn-fg2);
        }
        .zn-thread-line::before {
          content: ""; flex: none; width: 32px; height: 1.5px;
          background: linear-gradient(90deg, var(--zn-warning), transparent);
          border-radius: 1px;
        }

        /* Journey screen ------------------------------------------------ */
        .zn-streak-wrap { margin-top: 14px; }
        .zn-streak { border-radius: 22px; padding: 18px;
          display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .zn-streak-body { position: relative; z-index: 2; }
        .zn-streak-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 1.8px;
          text-transform: uppercase; color: var(--zn-fg2); margin: 0; }
        .zn-streak-val { font-size: 44px; font-weight: 800; color: var(--zn-fg);
          line-height: 1; letter-spacing: -1.5px; margin: 6px 0 2px;
          font-family: 'Libre Baskerville', Georgia, serif; }
        .zn-streak-lbl { font-size: 12px; color: var(--zn-fg2); margin: 0; }
        .zn-streak-icon {
          width: 48px; height: 48px; border-radius: 24px;
          background: rgba(250,194,122,0.10);
          border: 1px solid rgba(250,194,122,0.25);
          display: flex; align-items: center; justify-content: center; flex: none;
          position: relative; z-index: 2;
        }
        .zn-streak-icon svg { width: 22px; height: 22px; color: var(--zn-warning); }

        .zn-timeline { border-radius: 20px; padding: 14px; margin-top: 10px; }
        .zn-timeline-head { display: flex; align-items: center; justify-content: space-between;
          position: relative; z-index: 2; }
        .zn-timeline-lbl { font-size: 10px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; color: var(--zn-fg2); margin: 0; }
        .zn-timeline-trend { font-size: 10.5px; color: var(--zn-success);
          font-weight: 600; }
        .zn-bars { display: flex; align-items: flex-end; gap: 6px; height: 56px;
          margin-top: 12px; position: relative; z-index: 2; }
        .zn-bar { flex: 1; border-radius: 4px;
          background: linear-gradient(180deg, var(--zn-mood-sage), rgba(143,188,143,0.35)); }
        .zn-bar.warm { background: linear-gradient(180deg, var(--zn-mood-love), rgba(232,168,124,0.35)); }
        .zn-bar.active { background: linear-gradient(180deg, var(--zn-warning), rgba(250,194,122,0.4)); }
        .zn-bar-row { display: flex; justify-content: space-between; margin-top: 6px;
          font-size: 9px; color: var(--zn-fg2); letter-spacing: 0.5px;
          position: relative; z-index: 2; }

        .zn-themes-card { border-radius: 18px; padding: 12px 14px 14px; margin-top: 10px; }
        .zn-themes-head { font-size: 10px; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; color: var(--zn-fg2); margin: 0 0 8px;
          position: relative; z-index: 2; }

        /* Bottom dock --------------------------------------------------- */
        .zn-tabbar {
          position: absolute; bottom: 30px; left: 0; right: 0;
          display: flex; align-items: center; justify-content: center;
          gap: 12px; z-index: 5;
        }
        .zn-tabpill {
          display: flex; align-items: center; gap: 4px; padding: 8px 10px;
          background: rgba(11, 11, 13, 0.78);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 30px;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 8px 24px -8px rgba(0,0,0,0.6);
        }
        .zn-tabitem {
          width: 44px; height: 44px; border-radius: 22px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.50); cursor: pointer;
          background: transparent; border: 0; padding: 0;
          transition: background .2s, color .2s;
        }
        .zn-tabitem:hover { color: rgba(255,255,255,0.85); }
        .zn-tabitem.active { background: rgba(255,255,255,0.16); color: #fff; }
        .zn-tabitem svg { width: 22px; height: 22px; }
        /* Ember FAB — the brand-accent quick-add. Zenith's primary CTA position,
           mirroring Burlit's lime FAB but in the Zenith warm palette. */
        .zn-tabadd {
          width: 54px; height: 54px; border-radius: 27px; background: var(--zn-ember);
          cursor: pointer; border: 0; padding: 0;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 22px -4px rgba(201, 122, 74, 0.55),
                      0 4px 14px -2px rgba(0, 0, 0, 0.45);
        }
        .zn-tabadd svg { width: 24px; height: 24px; color: #0B0B0D; }

        .zn-home {
          position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);
          width: 112px; height: 4px; background: rgba(255,255,255,0.28);
          border-radius: 3px; z-index: 6;
        }
      `}</style>

      <div className="zn-phone-btn action" />
      <div className="zn-phone-btn vol-up" />
      <div className="zn-phone-btn vol-dn" />
      <div className="zn-phone-btn power" />

      <div className="zn-phone">
        <div className="zn-backdrop" />
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

        {/* ─── Journal screen ───────────────────────────────────── */}
        <div className={`zn-screen ${screen === 'journal' ? 'active' : ''}`}>
          <div className="zn-screen-inner">
            <p className="zn-greeting">Good evening, Sahan</p>

            <div className="zn-stats">
              <div className="zn-stat zn-glass">
                <div className="zn-stat-val">28</div>
                <div className="zn-stat-lbl">Streak</div>
              </div>
              <div className="zn-stat zn-glass">
                <div className="zn-stat-val">4</div>
                <div className="zn-stat-lbl">This week</div>
              </div>
              <div className="zn-stat zn-glass">
                <div className="zn-stat-val">12k</div>
                <div className="zn-stat-lbl">Words</div>
              </div>
            </div>

            {/* Quick-capture card */}
            <div className="zn-capture-wrap">
              <div className="zn-capture zn-glass raised">
                <p className="zn-capture-eyebrow">Tonight</p>
                <p className="zn-capture-prompt">What's on your mind?</p>
                <div className="zn-capture-row">
                  <button className="zn-mic" type="button" aria-label="Voice capture">
                    {/* Lucide Mic */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="2" width="6" height="13" rx="3" />
                      <path d="M5 10a7 7 0 0014 0" />
                      <line x1="12" y1="17" x2="12" y2="22" />
                      <line x1="8" y1="22" x2="16" y2="22" />
                    </svg>
                  </button>
                  <div className="zn-wave">
                    {[0.45, 0.7, 0.35, 0.9, 0.55, 0.75, 0.4, 0.85, 0.5, 0.65, 0.3, 0.8].map((delay, i) => (
                      <div
                        key={i}
                        className="zn-wave-bar"
                        style={{ animationDelay: `${delay * 0.6}s`, height: '100%' }}
                      />
                    ))}
                  </div>
                </div>
                <div className="zn-capture-foot">
                  <span>Voice or type</span>
                  <span>4× faster than tapping</span>
                </div>
              </div>
            </div>

            <p className="zn-section">Recent</p>
            <div className="zn-entry zn-glass">
              <span className="zn-entry-mood" style={{ background: 'var(--zn-mood-sage)' }} />
              <div className="zn-entry-body">
                <p className="zn-entry-meta">Today · 9:14 PM</p>
                <p className="zn-entry-text">Calmer than yesterday. The walk helped — I think…</p>
              </div>
            </div>
            <div className="zn-entry zn-glass">
              <span className="zn-entry-mood" style={{ background: 'var(--zn-mood-love)' }} />
              <div className="zn-entry-body">
                <p className="zn-entry-meta">Yesterday · 11:02 PM</p>
                <p className="zn-entry-text">The conversation with Mum landed differently this time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Insights screen ──────────────────────────────────── */}
        <div className={`zn-screen ${screen === 'insights' ? 'active' : ''}`}>
          <div className="zn-screen-inner">
            <p className="zn-screen-h2">Patterns this week</p>
            <p className="zn-screen-sub">Surfaced by Zenith — not by you.</p>

            {/* Pattern card */}
            <div className="zn-pattern-wrap">
              <div className="zn-pattern zn-glass raised">
                <div className="zn-pattern-head">
                  <div>
                    <p className="zn-pattern-eyebrow">Weekly cadence</p>
                    <p className="zn-pattern-title">Your Tuesdays feel reflective.</p>
                  </div>

                  {/* Mood ring SVG — small concentric arcs in ember */}
                  <svg className="zn-ring" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="22" fill="none"
                      stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                    <circle cx="28" cy="28" r="22" fill="none"
                      stroke="var(--zn-warning)" strokeWidth="6"
                      strokeDasharray="86 138" strokeLinecap="round"
                      transform="rotate(-90 28 28)" />
                    <circle cx="28" cy="28" r="14" fill="none"
                      stroke="rgba(232,168,124,0.5)" strokeWidth="3"
                      strokeDasharray="40 88" strokeLinecap="round"
                      transform="rotate(-90 28 28)" />
                    {/* Center "62%" */}
                    <text x="28" y="32" textAnchor="middle"
                      fill="var(--zn-fg)" fontSize="13" fontWeight="800"
                      letterSpacing="-0.4">62%</text>
                  </svg>
                </div>

                <p className="zn-pattern-desc">
                  Four of your last five Tuesday entries mention slowing down, deciding, or stepping back. Worth noticing.
                </p>

                <div className="zn-chip-row">
                  <span className="zn-chip ember">Tue · 5 entries</span>
                  <span className="zn-chip">slowing down</span>
                  <span className="zn-chip">deciding</span>
                </div>
              </div>
            </div>

            {/* Golden thread card */}
            <div className="zn-thread zn-glass">
              <div className="zn-thread-head">
                <span className="zn-thread-icon">
                  {/* Lucide Sparkles */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                    <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <div>
                  <p className="zn-thread-eyebrow">Golden thread</p>
                  <p className="zn-thread-title">Choosing rest over output</p>
                </div>
              </div>
              <p className="zn-thread-line">Across 9 entries this month</p>
            </div>

            <p className="zn-section">Connected</p>
            <div className="zn-entry zn-glass">
              <span className="zn-entry-mood" style={{ background: 'var(--zn-warning)' }} />
              <div className="zn-entry-body">
                <p className="zn-entry-meta">Tue · May 6</p>
                <p className="zn-entry-text">"I keep coming back to the same thing — when did rest…"</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Journey screen ───────────────────────────────────── */}
        <div className={`zn-screen ${screen === 'journey' ? 'active' : ''}`}>
          <div className="zn-screen-inner">
            <p className="zn-screen-h2">Your journey</p>
            <p className="zn-screen-sub">Where you've been this month.</p>

            {/* Streak hero */}
            <div className="zn-streak-wrap">
              <div className="zn-streak zn-glass raised">
                <div className="zn-streak-body">
                  <p className="zn-streak-eyebrow">Current streak</p>
                  <p className="zn-streak-val">28</p>
                  <p className="zn-streak-lbl">consecutive days journaling</p>
                </div>
                <span className="zn-streak-icon">
                  {/* Lucide Flame */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.07-2.14-.25-4 1-6 .29 1.5.36 3 1.5 4.4 1.06 1.3 2.5 2.6 2.5 5.1a4 4 0 11-8 0c0-1.5.5-2 1-3"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* Mood timeline */}
            <div className="zn-timeline zn-glass">
              <div className="zn-timeline-head">
                <p className="zn-timeline-lbl">Mood · last 7 days</p>
                <span className="zn-timeline-trend">↗ steady</span>
              </div>
              <div className="zn-bars">
                <div className="zn-bar warm" style={{ height: '45%' }} />
                <div className="zn-bar" style={{ height: '60%' }} />
                <div className="zn-bar warm" style={{ height: '40%' }} />
                <div className="zn-bar" style={{ height: '70%' }} />
                <div className="zn-bar" style={{ height: '65%' }} />
                <div className="zn-bar" style={{ height: '75%' }} />
                <div className="zn-bar active" style={{ height: '85%' }} />
              </div>
              <div className="zn-bar-row">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
              </div>
            </div>

            {/* Top themes */}
            <div className="zn-themes-card zn-glass">
              <p className="zn-themes-head">Top themes this month</p>
              <div className="zn-chip-row">
                <span className="zn-chip ember">rest</span>
                <span className="zn-chip">family</span>
                <span className="zn-chip">slowing down</span>
                <span className="zn-chip">work</span>
                <span className="zn-chip">walks</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom dock ──────────────────────────────────────── */}
        <div className="zn-tabbar">
          <div className="zn-tabpill">
            <button type="button" className={`zn-tabitem ${screen === 'journal' ? 'active' : ''}`}
              onClick={() => setScreen('journal')} aria-label="Journal">
              {/* Lucide BookOpen — matches the iOS app's "book.pages" tab */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 4h7a3 3 0 013 3v13a2 2 0 00-2-2H2V4z" />
                <path d="M22 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8V4z" />
              </svg>
            </button>
            <button type="button" className={`zn-tabitem ${screen === 'insights' ? 'active' : ''}`}
              onClick={() => setScreen('insights')} aria-label="Insights">
              {/* Lucide Sparkles — matches iOS "wand.and.stars" */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
              </svg>
            </button>
            <button type="button" className={`zn-tabitem ${screen === 'journey' ? 'active' : ''}`}
              onClick={() => setScreen('journey')} aria-label="Journey">
              {/* Lucide LineChart — matches iOS "chart.xyaxis.line" */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="M7 14l3-3 3 3 5-5" />
              </svg>
            </button>
          </div>
          <button type="button" className="zn-tabadd" aria-label="New entry">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
        <div className="zn-home" />
      </div>
    </div>
  );
};

export default ZenithPhoneMock;

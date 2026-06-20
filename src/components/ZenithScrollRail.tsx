/**
 * src/components/ZenithScrollRail.tsx
 *
 * Right-edge section nav for Zenith Journal landing page.
 * Ports the Burlit ScrollRail pattern (aramuna-landing-page/components/trademate/
 * TradieMateScrollRail.tsx).
 *
 * Behaviour:
 *   - Mounted but hidden by default.
 *   - Becomes visible only when (a) the user has scrolled past the hero AND
 *     (b) is actively scrolling OR hovering within 120px of the right edge.
 *   - Active section is determined by whichever section spans the upper third
 *     of the viewport (the section the reader is currently reading).
 *   - Quiet Confidence: ember bar replaces Burlit's lime; figtree-ish label
 *     falls back to font-body since Zenith doesn't ship Figtree.
 *
 * Related: ZenithLanding.tsx, ZenithWordmarkBar.tsx, scrollToSection.ts
 */

import React, { useEffect, useRef, useState } from 'react';
import { scrollToSection } from './scrollToSection';

const SECTIONS: Array<{ id: string; label: string }> = [
  { id: 'hero', label: 'Zenith' },
  { id: 'problem', label: 'The reality' },
  { id: 'benefits', label: 'How it works' },
  { id: 'diff', label: 'Why Zenith' },
  { id: 'who', label: "Who it's for" },
  { id: 'waitlist', label: 'Waitlist' },
];

// How close to the right edge (in pixels) the mouse must be to summon the rail.
const HOVER_ZONE_PX = 120;
// How long the rail stays visible after the user stops scrolling.
const SCROLL_REVEAL_MS = 1600;

const ZenithScrollRail: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('hero');
  const [pastHero, setPastHero] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mouseNear, setMouseNear] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const visible = pastHero && (isScrolling || mouseNear);

  useEffect(() => {
    const sections = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const updateActiveAndPastHero = () => {
      const vh = window.innerHeight;
      const hero = document.getElementById('hero');
      if (hero) {
        setPastHero(hero.getBoundingClientRect().bottom < vh * 0.5);
      }
      const probeY = vh * 0.35;
      // `sections.length === 0` was guarded above, so sections[0] is defined.
      // Non-null assertion satisfies noUncheckedIndexedAccess in strict mode.
      let current = sections[0]!.id;
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          current = sec.id;
          break;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      updateActiveAndPastHero();
      setIsScrolling(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), SCROLL_REVEAL_MS);
    };

    const onMouseMove = (e: MouseEvent) => {
      const inZone = e.clientX > window.innerWidth - HOVER_ZONE_PX;
      const overRail = !!navRef.current?.contains(e.target as Node);
      setMouseNear(inZone || overRail);
    };

    const onMouseLeave = () => setMouseNear(false);

    updateActiveAndPastHero();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveAndPastHero);
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveAndPastHero);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Section navigation"
      className={`fixed right-7 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 ease-out md:block ${
        visible
          ? 'pointer-events-auto translate-x-0 opacity-100'
          : 'pointer-events-none translate-x-6 opacity-0'
      }`}
    >
      <ol className="m-0 flex list-none flex-col gap-[18px] p-0">
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                  if (history.replaceState) history.replaceState(null, '', `#${id}`);
                }}
                className="group flex items-center justify-end gap-3.5 py-1 pl-6 font-body text-[12px] font-semibold uppercase tracking-[0.08em] text-stone no-underline transition-colors duration-300 ease-out hover:text-cream"
                style={{ color: isActive ? '#f5f2ed' : undefined }}
              >
                <span
                  className={`block h-0.5 rounded-sm transition-all duration-300 ease-out ${
                    isActive
                      ? 'w-[42px] bg-ember shadow-ember-glow'
                      : 'w-[22px] bg-stone/50 group-hover:w-8 group-hover:bg-cream'
                  }`}
                />
                <span
                  className={`whitespace-nowrap transition-all duration-300 ease-out ${
                    isActive
                      ? 'translate-x-0 text-cream opacity-100'
                      : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:text-cream group-hover:opacity-100'
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ZenithScrollRail;

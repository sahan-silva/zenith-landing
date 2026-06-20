/**
 * src/components/ZenithWordmarkBar.tsx
 *
 * Fixed top bar for Zenith Journal landing page.
 * Ports the Burlit WordmarkBar pattern (aramuna-landing-page/components/trademate/
 * TradieMateWordmarkBar.tsx) so the two product surfaces feel like the same family.
 *
 * Behaviour:
 *   - "Zenith" wordmark is always visible and routes to /.
 *   - "Join waitlist" pill fades in once the user scrolls past the hero (where the
 *     in-section email form lives) and fades back out at the bottom #waitlist section
 *     (where the next email form lives). Both have their own affordance, so the
 *     floating CTA would duplicate them.
 *
 * Visual tokens: ember background pill (Zenith accent) instead of Burlit's lime.
 * Backdrop-blur stays — it's chrome that hovers over scrolling content, not body
 * decoration, so it doesn't violate the Quiet Confidence ADR.
 *
 * Related: ZenithLanding.tsx, ZenithScrollRail.tsx, scrollToSection.ts
 */

import React, { useEffect, useState } from 'react';
import { scrollToSection } from './scrollToSection';

const ZenithWordmarkBar: React.FC = () => {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const waitlist = document.getElementById('waitlist');
    if (!hero || !waitlist) return;

    const check = () => {
      const vh = window.innerHeight;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const waitlistTop = waitlist.getBoundingClientRect().top;
      const heroPresent = heroBottom > vh * 0.2;
      const waitlistPresent = waitlistTop < vh * 0.7;
      setShowCta(!heroPresent && !waitlistPresent);
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 sm:px-10"
      style={{
        background: 'linear-gradient(to bottom, rgba(10,10,11,0.85), rgba(10,10,11,0))',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <a
        href="/"
        aria-label="Zenith Journal home"
        className="pointer-events-auto whitespace-nowrap font-display text-[17px] font-bold tracking-tight text-cream transition-colors duration-300 ease-out hover:text-stone"
      >
        Zenith
      </a>
      <a
        href="#waitlist"
        aria-hidden={!showCta}
        tabIndex={showCta ? 0 : -1}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('waitlist');
          if (history.replaceState) history.replaceState(null, '', '#waitlist');
        }}
        className={`whitespace-nowrap rounded-full bg-ember px-3 py-1.5 text-[11px] font-semibold tracking-[0.01em] text-ink transition-all duration-500 ease-out hover:bg-dawn hover:shadow-ember-glow sm:px-[18px] sm:py-2 sm:text-[13px] ${
          showCta
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        Join waitlist
      </a>
    </div>
  );
};

export default ZenithWordmarkBar;

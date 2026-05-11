/**
 * src/components/ZenithFooter.tsx
 *
 * Minimal footer for Zenith Journal landing page.
 *
 * Ports the Burlit footer pattern (aramuna-landing-page/components/trademate/
 * TradieMateFooter.tsx): top border, brand wordmark + "by Aramuna" stone label,
 * center copyright, right-side Aramuna link.
 *
 * Related: ZenithLanding.tsx
 */

import React from 'react';

const ZenithFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-stone/20 bg-ink py-11 font-body text-cream">
      <div className="container mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-6 px-7 text-[13.5px]">
        <div className="flex items-center gap-2.5">
          <span className="font-display text-[17px] font-bold text-cream">Zenith</span>
          <span className="text-stone">by Aramuna</span>
        </div>
        <div className="text-stone/70">© {year} Aramuna. All rights reserved.</div>
        <div className="flex gap-6">
          <a
            href="https://aramuna.com"
            className="text-stone transition-colors duration-300 ease-out hover:text-cream"
          >
            Aramuna
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ZenithFooter;

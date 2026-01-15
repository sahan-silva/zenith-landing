/**
 * src/components/ZenithFooter.tsx
 *
 * Minimal footer for Zenith Journal landing page.
 * Quiet Confidence redesign: Clean typography, no gradients.
 *
 * Related: ZenithLanding.tsx
 */

import React from 'react';
import { motion } from 'framer-motion';

const ZenithFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Single fade-in animation (Quiet Confidence constraint)
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' as const },
  };

  return (
    <footer className="relative py-12 bg-ink border-t border-stone/20 font-body">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          {...fadeIn}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-cream">
              Zenith
            </span>
            <span className="text-stone font-body">Journal</span>
          </div>

          {/* Copyright */}
          <p className="text-stone/60 text-sm font-body">
            {currentYear} Aramuna. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://aramuna.com"
              className="text-stone text-sm hover:text-cream transition-colors duration-500 ease-out font-body"
            >
              Aramuna
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ZenithFooter;

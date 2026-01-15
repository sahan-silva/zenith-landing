/**
 * tailwind.config.js
 *
 * Tailwind CSS configuration for Zenith Journal landing page.
 * Implements the Quiet Confidence design system.
 *
 * Related: postcss.config.js, src/index.css, docs/ADR-001-quiet-confidence-visual-system.md
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Quiet Confidence Typography
        'display': ['Libre Baskerville', 'Georgia', 'serif'],
        'body': ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Quiet Confidence Palette
        "ink": "#0a0a0b",           // Deep Ink - Primary background
        "cream": "#f5f2ed",          // Soft Cream - Primary text
        "stone": "#9a918a",          // Warm Stone - Secondary text
        "ember": "#c97a4a",          // Ember - Single accent (warmth, action)
        "dawn": "#d4a574",           // Dawn - Highlight hover states
      },
      boxShadow: {
        // Quiet Confidence - subtle ember glow for CTAs
        "ember-glow": "0 0 20px rgba(201, 122, 74, 0.15)",
      },
    },
  },
  plugins: [],
};

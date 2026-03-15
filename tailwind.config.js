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
        // Helvetica Neue sans stack (replaces Quiet Confidence serif/body split)
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        // Legacy aliases for backward compat
        'display': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Quiet Confidence Palette (backward compat)
        "ink": "#0a0a0b",           // Deep Ink - Primary background
        "cream": "#f5f2ed",          // Soft Cream - Primary text
        "stone": "#9a918a",          // Warm Stone - Secondary text
        "ember": "#c97a4a",          // Ember - Single accent (warmth, action)
        "dawn": "#d4a574",           // Dawn - Highlight hover states
        // Japanese-inspired palette
        "washi": "var(--color-washi)",
        "sumi": "var(--color-sumi)",
        "indigo-jp": "var(--color-indigo-jp)",
        "sakura": "var(--color-sakura)",
        "bamboo": "var(--color-bamboo)",
        "gold-jp": "var(--color-gold-jp)",
      },
      borderRadius: {
        // Apple-scale radius mapped to CSS vars
        "xs": "var(--radius-xs)",
        "sm": "var(--radius-sm)",
        "md": "var(--radius-md)",
        "lg": "var(--radius-lg)",
        "xl": "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        // Quiet Confidence - subtle ember glow for CTAs
        "ember-glow": "0 0 20px rgba(201, 122, 74, 0.15)",
      },
    },
  },
  plugins: [],
};

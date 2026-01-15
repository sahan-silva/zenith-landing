# ADR-001: Quiet Confidence Visual System for Zenith Landing Page

**Status**: Accepted
**Date**: 2026-01-16
**Decision Makers**: CSO (Claude), CTO (Codex)

## Context

The Zenith Journal landing page was using a generic "AI startup" aesthetic with:
- Glassmorphism effects
- Animated gradient orbs
- Multi-color accent palette (Nexus purple/cyan/green)
- Rounded-full buttons
- Complex motion patterns

This visual language was indistinguishable from thousands of other AI product landing pages and did not align with Zenith's core message of quiet, trusted journaling for personal development coaches.

## Decision

Implement the **Quiet Confidence** visual system, characterized by:

### Typography-First Hierarchy
- **Display font**: Libre Baskerville (serif) - conveys authority and sophistication
- **Body font**: Source Sans 3 - clean, readable sans-serif
- Let typography and whitespace drive visual structure, not effects

### Warm Minimalist Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Background | Deep Ink | #0a0a0b |
| Primary text | Soft Cream | #f5f2ed |
| Secondary text | Warm Stone | #9a918a |
| Accent (single) | Ember | #c97a4a |
| Hover state | Dawn | #d4a574 |

### Single Accent Principle
- All CTAs use Ember (#c97a4a)
- No multi-color differentiation
- Ember provides warmth without the coldness of neon

### Restrained Motion
- Single animation pattern: `0.5s ease-out`
- No floating orbs, pulsing glows, or shimmer effects
- Page load uses simple opacity fade

### Removed Elements
- Gradient backgrounds
- Glassmorphism panels
- Animated blur orbs
- Nexus color palette (purple/cyan/green)
- Rounded-full button style
- Multiple animation timings

## Consequences

### Positive
- **Differentiation**: Immediately distinguishable from generic AI landing pages
- **Trust**: Warm, sophisticated aesthetic aligns with coaching/personal development audience
- **Performance**: Reduced animation complexity = smoother experience
- **Accessibility**: 14.5:1 contrast ratio exceeds WCAG AAA
- **Maintainability**: Single accent color simplifies decision-making

### Negative
- **Learning curve**: Team must understand when to use Quiet Confidence vs Nexus
- **Design system complexity**: Now two visual variants to maintain
- **Font loading**: Two additional Google Fonts (Libre Baskerville, Source Sans 3)

### Neutral
- Components are fully redesigned, not patched - clean implementation
- Nexus theme remains available for other Aramuna products

## Implementation

### Files Modified
- `tailwind.config.js` - Added Quiet Confidence color tokens and font families
- `src/index.css` - Added Google Fonts imports and utility classes (.qc-*)
- `src/components/Hero.tsx` - Redesigned
- `src/components/Problem.tsx` - Redesigned
- `src/components/Benefits.tsx` - Redesigned
- `src/components/Privacy.tsx` - Redesigned
- `src/components/WhoItsFor.tsx` - Redesigned
- `src/components/FinalCTA.tsx` - Redesigned
- `src/components/EmailForm.tsx` - Redesigned
- `src/components/ZenithFooter.tsx` - Redesigned

## References

- Original Implementation: `aramuna-landing-page/components/zenith/`
- Design System: See `tailwind.config.js` and `src/index.css`
- CTO Architecture Review: Approved 2026-01-16

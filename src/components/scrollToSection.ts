/**
 * src/components/scrollToSection.ts
 *
 * Smooth-scroll helper used by ZenithWordmarkBar and ZenithScrollRail.
 * Mirrors the Burlit helper at aramuna-landing-page/components/trademate/scrollToSection.ts
 * so both products navigate identically.
 *
 * The 80px offset matches the visual breathing room above section eyebrows once the
 * fixed wordmark bar has been accounted for.
 *
 * Related: ZenithWordmarkBar.tsx, ZenithScrollRail.tsx
 */

export const scrollToSection = (sectionId: string): void => {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
};

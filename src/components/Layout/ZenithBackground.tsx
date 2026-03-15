/**
 * src/components/Layout/ZenithBackground.tsx
 *
 * Stub -- replaced by zen-bg PR. Merge zen-bg PR first, then this PR.
 * Provides a fixed atmospheric background layer behind all content.
 *
 * Related: ZenithLanding.tsx
 */

interface ZenithBackgroundProps {
  variant?: 'full' | 'minimal';
  className?: string;
}

export function ZenithBackground({ className }: ZenithBackgroundProps) {
  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className ?? ''}`}
      style={{
        background:
          'radial-gradient(ellipse at 50% 40%, #2d3a5e 0%, #1a1a20 60%, #0a0a0b 100%)',
      }}
      aria-hidden
    />
  );
}

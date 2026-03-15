/**
 * src/components/Layout/ZenithBackground.tsx
 *
 * 4-layer atmospheric background evoking Japanese artwork through
 * restrained composition, ink wash textures, and gentle particle motion.
 *
 * Layers (bottom to top):
 *   1. Base gradient — deep Japanese night sky (indigo-jp center, sumi edges)
 *   2. Ink wash — soft sumi-e cloud shapes with float-ink animation
 *   3. Particles — cherry blossom / water droplet motes
 *   4. Vignette — radial darkening at edges for depth and focus
 *
 * CSS dependencies (from glass-foundation PR):
 *   --color-indigo-jp, --color-sumi, --color-washi, --color-sakura
 *   float-ink, sumi-fade keyframe animations
 *
 * Related: ZenithLanding.tsx, index.css
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ZenithBackgroundProps {
  /** 'full' renders all 4 layers; 'minimal' renders only base gradient + vignette */
  variant?: 'full' | 'minimal';
  className?: string;
}

// ---------------------------------------------------------------------------
// Static data — defined outside the component so React never re-creates them.
// ---------------------------------------------------------------------------

interface InkShape {
  width: number;
  height: number;
  top: string;
  left: string;
  opacity: number;
  duration: string;
  delay: string;
  borderRadius: string;
  color: string;
}

const INK_SHAPES: InkShape[] = [
  // Large diffuse cloud — upper left
  {
    width: 320,
    height: 220,
    top: '8%',
    left: '5%',
    opacity: 0.18,
    duration: '12s',
    delay: '0s',
    borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
    color: 'var(--color-indigo-jp)',
  },
  // Medium wash — centre right
  {
    width: 260,
    height: 180,
    top: '35%',
    left: '65%',
    opacity: 0.14,
    duration: '10s',
    delay: '2s',
    borderRadius: '45% 55% 50% 50% / 55% 45% 55% 45%',
    color: 'var(--color-indigo-jp)',
  },
  // Small accent — lower left
  {
    width: 180,
    height: 140,
    top: '62%',
    left: '12%',
    opacity: 0.2,
    duration: '14s',
    delay: '4s',
    borderRadius: '50% 50% 45% 55% / 60% 40% 60% 40%',
    color: 'var(--color-washi)',
  },
  // Tiny accent — upper right
  {
    width: 140,
    height: 100,
    top: '15%',
    left: '78%',
    opacity: 0.16,
    duration: '11s',
    delay: '1s',
    borderRadius: '55% 45% 50% 50% / 45% 55% 50% 50%',
    color: 'var(--color-washi)',
  },
  // Wide horizontal wash — lower centre
  {
    width: 360,
    height: 160,
    top: '78%',
    left: '30%',
    opacity: 0.12,
    duration: '13s',
    delay: '3s',
    borderRadius: '50% 50% 40% 60% / 50% 50% 55% 45%',
    color: 'var(--color-indigo-jp)',
  },
  // Extra depth cloud — mid-left
  {
    width: 200,
    height: 160,
    top: '48%',
    left: '42%',
    opacity: 0.1,
    duration: '9s',
    delay: '5s',
    borderRadius: '42% 58% 52% 48% / 48% 52% 48% 52%',
    color: 'var(--color-washi)',
  },
];

interface Particle {
  size: number;
  top: string;
  left: string;
  opacity: number;
  duration: string;
  delay: string;
  color: string;
}

const PARTICLES: Particle[] = [
  // Sakura-tinted petals
  { size: 3, top: '12%', left: '18%', opacity: 0.5, duration: '8s', delay: '0s', color: 'var(--color-sakura)' },
  { size: 4, top: '25%', left: '72%', opacity: 0.4, duration: '10s', delay: '1.5s', color: 'var(--color-sakura)' },
  { size: 2, top: '38%', left: '45%', opacity: 0.6, duration: '9s', delay: '3s', color: 'var(--color-sakura)' },
  { size: 5, top: '55%', left: '82%', opacity: 0.35, duration: '12s', delay: '2s', color: 'var(--color-sakura)' },
  { size: 3, top: '70%', left: '28%', opacity: 0.45, duration: '11s', delay: '4s', color: 'var(--color-sakura)' },
  { size: 2, top: '85%', left: '60%', opacity: 0.5, duration: '8s', delay: '5s', color: 'var(--color-sakura)' },
  // White / washi motes
  { size: 2, top: '8%', left: '55%', opacity: 0.55, duration: '10s', delay: '0.5s', color: 'var(--color-washi)' },
  { size: 3, top: '20%', left: '35%', opacity: 0.4, duration: '13s', delay: '2.5s', color: 'var(--color-washi)' },
  { size: 4, top: '42%', left: '90%', opacity: 0.3, duration: '9s', delay: '1s', color: 'var(--color-washi)' },
  { size: 2, top: '60%', left: '15%', opacity: 0.5, duration: '14s', delay: '3.5s', color: 'var(--color-washi)' },
  { size: 3, top: '75%', left: '50%', opacity: 0.45, duration: '11s', delay: '0s', color: 'var(--color-washi)' },
  { size: 5, top: '30%', left: '8%', opacity: 0.3, duration: '12s', delay: '4.5s', color: 'var(--color-washi)' },
  { size: 2, top: '90%', left: '78%', opacity: 0.4, duration: '10s', delay: '2s', color: '#ffffff' },
  { size: 6, top: '5%', left: '42%', opacity: 0.25, duration: '14s', delay: '1s', color: 'var(--color-sakura)' },
  { size: 3, top: '50%', left: '65%', opacity: 0.35, duration: '9s', delay: '3s', color: '#ffffff' },
  { size: 2, top: '68%', left: '5%', opacity: 0.45, duration: '11s', delay: '5.5s', color: 'var(--color-washi)' },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ZenithBackground({
  variant = 'full',
  className,
}: ZenithBackgroundProps) {
  const isFull = variant === 'full';

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className ?? ''}`}
      aria-hidden="true"
    >
      {/* ----------------------------------------------------------------- */}
      {/* Layer 1 — Base gradient: Japanese night sky                       */}
      {/* ----------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: [
            'radial-gradient(ellipse 80% 70% at 50% 45%,',
            '  var(--color-indigo-jp) 0%,',
            '  color-mix(in srgb, var(--color-indigo-jp) 40%, var(--color-sumi)) 45%,',
            '  var(--color-sumi) 100%',
            ')',
          ].join(' '),
        }}
      />

      {/* ----------------------------------------------------------------- */}
      {/* Layer 2 — Ink wash shapes (full variant only)                     */}
      {/* ----------------------------------------------------------------- */}
      {isFull && (
        <div style={{ position: 'absolute', inset: 0 }}>
          {INK_SHAPES.map((shape, i) => (
            <div
              key={`ink-${i}`}
              style={{
                position: 'absolute',
                width: shape.width,
                height: shape.height,
                top: shape.top,
                left: shape.left,
                opacity: shape.opacity,
                borderRadius: shape.borderRadius,
                background: `radial-gradient(ellipse at center, ${shape.color} 0%, transparent 70%)`,
                filter: 'blur(40px)',
                animation: `float-ink ${shape.duration} ease-in-out ${shape.delay} infinite`,
                willChange: 'transform, opacity',
              }}
            />
          ))}
        </div>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* Layer 3 — Particles: sakura petals & water droplet motes          */}
      {/* ----------------------------------------------------------------- */}
      {isFull && (
        <div style={{ position: 'absolute', inset: 0 }}>
          {PARTICLES.map((p, i) => (
            <div
              key={`particle-${i}`}
              style={{
                position: 'absolute',
                width: p.size,
                height: p.size,
                top: p.top,
                left: p.left,
                borderRadius: '50%',
                backgroundColor: p.color,
                opacity: p.opacity,
                animation: `float-ink ${p.duration} ease-in-out ${p.delay} infinite`,
                willChange: 'transform, opacity',
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              }}
            />
          ))}
        </div>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* Layer 4 — Vignette overlay                                        */}
      {/* ----------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(10, 10, 11, 0.4) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default ZenithBackground;

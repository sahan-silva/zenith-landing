/**
 * src/components/ui/feature-slider.tsx
 *
 * Stub -- replaced by glass-primitives PR.
 * Auto-playing feature slider with glass card and dot indicators.
 *
 * Related: ZenithLanding.tsx
 */

import { useState, useEffect, useRef, useCallback } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

interface FeatureSliderProps {
  features?: Feature[];
  autoPlayInterval?: number;
  className?: string;
}

const DEFAULT_FEATURES: Feature[] = [
  {
    id: 'ai',
    title: 'AI-Powered Insights',
    description:
      "Zenith understands patterns across your entries, surfacing insights you'd miss.",
    icon: '\u2726',
  },
  {
    id: 'private',
    title: 'Radically Private',
    description:
      'Your thoughts are yours. End-to-end encryption, zero cloud sync by default.',
    icon: '\u2B21',
  },
  {
    id: 'beautiful',
    title: 'Designed for Reflection',
    description:
      'A calm, distraction-free space that makes writing feel like a ritual.',
    icon: '\u25CE',
  },
  {
    id: 'ritual',
    title: 'Build Your Practice',
    description:
      'Streaks, gentle reminders, and morning prompts that fit your routine.',
    icon: '\u25CB',
  },
];

export function FeatureSlider({
  features = DEFAULT_FEATURES,
  autoPlayInterval = 4000,
  className,
}: FeatureSliderProps) {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  const start = useCallback(() => {
    stop();
    timer.current = setInterval(
      () => setCurrent((c) => (c + 1) % features.length),
      autoPlayInterval,
    );
  }, [features.length, autoPlayInterval, stop]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  const f = features[current];
  if (!f) return null;

  return (
    <div
      className={`glass-hero rounded-[var(--radius-xl)] p-8 min-h-[280px] flex flex-col justify-between ${className ?? ''}`}
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <div className="flex flex-col gap-4 items-center text-center flex-1 justify-center">
        <span
          className="text-4xl"
          style={{ color: 'var(--color-gold-jp)' }}
        >
          {f.icon}
        </span>
        <h3 className="text-white text-xl font-medium">{f.title}</h3>
        <p className="text-white/70 text-sm max-w-xs">{f.description}</p>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {features.map((_, i) => (
          <button
            key={features[i]?.id ?? i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${
              i === current
                ? 'w-2.5 h-2.5 bg-white'
                : 'w-2 h-2 bg-white/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

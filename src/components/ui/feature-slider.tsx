/**
 * src/components/ui/feature-slider.tsx
 *
 * Auto-playing feature carousel with CSS transform transitions.
 * Bubble navigation dots, pause-on-hover, zero external dependencies.
 *
 * Uses glass-hero card variant for the outer container.
 * Slide transition: translateX with cubic-bezier easing.
 *
 * Related: card.tsx, index.css (glass tokens)
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import { Card } from './card';

/* ---------- Types ---------- */

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

/* ---------- Defaults ---------- */

const DEFAULT_FEATURES: Feature[] = [
  {
    id: 'ai',
    title: 'AI-Powered Insights',
    description:
      "Zenith understands patterns across your entries, surfacing insights you'd miss.",
    icon: '\u2726', // ✦
  },
  {
    id: 'private',
    title: 'Radically Private',
    description:
      'Your thoughts are yours. End-to-end encryption, zero cloud sync by default.',
    icon: '\u2B21', // ⬡
  },
  {
    id: 'beautiful',
    title: 'Designed for Reflection',
    description:
      'A calm, distraction-free space that makes writing feel like a ritual.',
    icon: '\u25CE', // ◎
  },
  {
    id: 'ritual',
    title: 'Build Your Practice',
    description:
      'Streaks, gentle reminders, and morning prompts that fit your routine.',
    icon: '\u25CB', // ○
  },
];

/* ---------- Component ---------- */

export function FeatureSlider({
  features = DEFAULT_FEATURES,
  autoPlayInterval = 4000,
  className = '',
}: FeatureSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);
  const slideCount = features.length;

  /* -- Auto-play helpers -- */

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentIndex((prev) => (prev + 1) % slideCount);
      }
    }, autoPlayInterval);
  }, [autoPlayInterval, slideCount]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  /* -- Pause on hover -- */

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  /* -- Jump to slide -- */

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset interval so the user sees the full duration after clicking
    startAutoPlay();
  };

  return (
    <Card variant="glass-hero" className={`w-full overflow-hidden ${className}`}>
      <div
        className="relative min-h-[280px] flex flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-roledescription="carousel"
        aria-label="Feature highlights"
      >
        {/* ---- Slide track ---- */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="flex-shrink-0 w-full h-full flex flex-col items-center justify-center px-8 py-10 text-center"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${slideCount}: ${feature.title}`}
              >
                {/* Icon */}
                {feature.icon && (
                  <span
                    className="block text-4xl mb-5"
                    style={{ color: 'var(--color-gold-jp, #c97a4a)' }}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-cream mb-3 font-display">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-stone text-sm sm:text-base max-w-lg leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Navigation dots ---- */}
        <div
          className="flex items-center justify-center gap-2.5 pb-6"
          role="tablist"
          aria-label="Slide navigation"
        >
          {features.map((feature, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={feature.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}: ${feature.title}`}
                onClick={() => goToSlide(index)}
                className="transition-all duration-300 ease-out rounded-full cursor-pointer"
                style={{
                  width: isActive ? 10 : 8,
                  height: isActive ? 10 : 8,
                  backgroundColor: 'white',
                  opacity: isActive ? 1 : 0.3,
                }}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
}

export default FeatureSlider;

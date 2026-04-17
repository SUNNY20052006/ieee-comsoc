"use client";

// /components/ui/interactive-selector.tsx
// ─────────────────────────────────────────────────────────────────
// Reusable horizontal expanding card slider.
// Lives in /components/ui because it is a self-contained, generic
// UI primitive that can be re-used across any section or project —
// exactly what shadcn/ui conventions expect in this folder.
// ─────────────────────────────────────────────────────────────────

import { useState } from "react";
import { cn } from "@/lib/utils";
import { eventImages } from "@/data/event-images";

<InteractiveSelector cards={eventImages} />

export interface SelectorCard {
  title: string;
  description: string;
  image: string;
}

interface InteractiveSelectorProps {
  cards: SelectorCard[];
  /** Height of the slider strip. Defaults to 420px on desktop. */
  height?: string;
  className?: string;
}

export function InteractiveSelector({
  cards,
  height = "420px",
  className,
}: InteractiveSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("w-full", className)}>
      {/* ── Desktop / Tablet: horizontal expanding slider ── */}
      <div
        className="hidden sm:flex gap-2 w-full overflow-hidden rounded-2xl"
        style={{ height }}
      >
        {cards.map((card, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={card.title}
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              aria-label={card.title}
              className={cn(
                // transition for smooth expand/collapse
                "relative overflow-hidden rounded-2xl flex-shrink-0",
                "transition-all duration-500 ease-in-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]",
                isActive ? "flex-[3.5]" : "flex-[0.5]"
              )}
            > {/* Fallback gradient when image is missing */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#1c2a1f] to-[#0a1f0c] opacity-60"
                aria-hidden="true"
              />
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
                aria-hidden="true"
              />



              {/* Bottom gradient overlay for text readability */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-2/5",
                  "bg-gradient-to-t from-black/80 via-black/30 to-transparent",
                  "transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-0"
                )}
                aria-hidden="true"
              />

              {/* Collapsed indicator — vertical title */}
              <div
                className={cn(
                  "absolute inset-0 flex items-end justify-center pb-4",
                  "transition-opacity duration-300",
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                aria-hidden={isActive}
              >
                <span className="font-mono text-white/70 text-xs tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
                  {card.title}
                </span>
              </div>

              {/* Active card text */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 p-5",
                  "transition-all duration-300",
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                )}
              >
                <p className="font-mono text-[#4caf50] text-xs tracking-widest uppercase mb-1">
                  Event Highlight
                </p>
                <h3 className="font-sans font-bold text-white text-xl leading-tight mb-1">
                  {card.title}
                </h3>
                <p className="font-serif text-white/75 text-sm">
                  {card.description}
                </p>
              </div>

              {/* Active border accent */}
              {isActive && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-[#4caf50] rounded-t-2xl"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Mobile: vertical stacked cards ── */}
      <div className="flex sm:hidden flex-col gap-3">
        {cards.map((card, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={card.title}
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              className={cn(
                "relative w-full overflow-hidden rounded-2xl text-left",
                "transition-all duration-500 ease-in-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]",
                isActive ? "h-52" : "h-16"
              )}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
                aria-hidden="true"
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0 bg-black/50"
                aria-hidden="true"
              />
              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"
                aria-hidden="true"
              />

              {/* Active border */}
              {isActive && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-[#4caf50] rounded-t-2xl"
                  aria-hidden="true"
                />
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  className={cn(
                    "font-sans font-bold text-white leading-tight",
                    isActive ? "text-base mb-1" : "text-sm"
                  )}
                >
                  {card.title}
                </h3>
                <p
                  className={cn(
                    "font-serif text-white/70 text-xs transition-all duration-300",
                    isActive ? "opacity-100 max-h-10" : "opacity-0 max-h-0 overflow-hidden"
                  )}
                >
                  {card.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

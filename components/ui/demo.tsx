"use client";

// /components/ui/demo.tsx
// ─────────────────────────────────────────────────────────────────
// Page-level section component that places the Event Images slider
// between Achievements and Members.
//
// DATA CONTRACT:
//   All content comes from /data/event-images.ts.
//   To add a new event, edit ONLY that file. Nothing here changes.
// ─────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import { InteractiveSelector } from "@/components/ui/interactive-selector";
import { eventImages } from "@/data/event-images";

export function DemoOne() {
  return (
    <section
      id="event-gallery"
      className="py-24 px-4 bg-[var(--background)]"
      aria-label="Event Gallery"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-[var(--primary)] text-sm tracking-widest uppercase">
            Moments That Matter
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--foreground)] mt-2">
            Event Gallery
          </h2>
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full" />
          <p className="font-serif text-[var(--foreground)]/60 mt-4 max-w-xl mx-auto">
            A glimpse into the workshops, talks, and celebrations that define
            our chapter&apos;s journey.
          </p>
        </motion.div>

        {/* Slider — driven entirely by eventImages data */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InteractiveSelector
            cards={eventImages}
            height="440px"
          />
        </motion.div>

        {/* Event count badge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-mono text-xs text-[var(--foreground)]/40 mt-6"
        >
          {eventImages.length} events showcased · click any card to explore
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, Clock } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  registerLink: string;
}

// Add upcoming events here when available
const events: Event[] = [];

export default function Events() {
  return (
    <section
      id="events"
      className="py-24 px-4 bg-[var(--secondary)]"
      aria-label="Events"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[var(--primary)] text-sm tracking-widest uppercase">
            What&apos;s Happening
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--foreground)] mt-2">
            Events
          </h2>
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full" />
        </motion.div>

        {events.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full bg-[var(--primary)]/10 animate-ping" />
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                <Calendar size={36} className="text-[var(--primary)]" />
              </div>
            </div>
            <h3 className="font-sans font-bold text-xl text-[var(--foreground)] mb-2">
              No Events Right Now
            </h3>
            <p className="font-serif text-[var(--foreground)]/60 text-center max-w-sm">
              Stay tuned — exciting workshops, hackathons, and seminars are
              coming soon. Follow us on social media for updates.
            </p>
          </motion.div>
        ) : (
          /* Event cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <GlowingEffect spread={40} glow proximity={64} />
                <div className="relative rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-mono text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                      Upcoming
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-[var(--foreground)] mb-2">
                    {event.title}
                  </h3>
                  <p className="font-serif text-sm text-[var(--foreground)]/70 mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[var(--foreground)]/60 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {event.date}
                    </span>
                    {event.time && (
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {event.time}
                      </span>
                    )}
                  </div>

                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--primary)] text-white font-sans font-semibold text-sm hover:bg-[var(--primary)]/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[var(--primary)]/30"
                  >
                    Register Now
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

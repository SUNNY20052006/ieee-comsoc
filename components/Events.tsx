"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, Clock, CheckCircle2 } from "lucide-react";
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
const upcomingEvents: Event[] = [

];

// Add past conducted events here
const conductedEvents: Event[] = [
  {
    id: "1",
    title: "Tech Talk With Anand Mukhopadhyay",
    description: "Interactive technical talk covering MATLAB and Simulink fundamentals, practical engineering applications, industry relevance, demonstrations, and expert guidance.",
    date: "Wednesday, June 17, 202",
    time: "10:0am onwards",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdm9Kk83Kx0ZvlnTZuYMM02GH16Dc8eF8F6dc_QA4u5U8D0yg/viewform"
  },
  
];

// ─── Reusable EventCard ───────────────────────────────────────────────────────

interface EventCardProps {
  event: Event;
  type: "upcoming" | "conducted";
  index: number;
}

function EventCard({ event, type, index }: EventCardProps) {
  const isConducted = type === "conducted";

  return (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <GlowingEffect spread={40} glow proximity={64} />
      <div
        className={`relative rounded-xl border bg-[var(--card)] p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${
          isConducted
            ? "border-[var(--border)] opacity-85"
            : "border-[var(--border)]"
        }`}
      >
        {/* Badge */}
        <div className="flex items-start justify-between mb-4">
          {isConducted ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--foreground)]/8 text-[var(--foreground)]/50 font-mono text-xs border border-[var(--border)]">
              <CheckCircle2 size={11} className="shrink-0" />
              Conducted
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              Upcoming
            </span>
          )}
        </div>

        {/* Content */}
        <h3
          className={`font-sans font-bold text-lg mb-2 ${
            isConducted
              ? "text-[var(--foreground)]/70"
              : "text-[var(--foreground)]"
          }`}
        >
          {event.title}
        </h3>
        <p className="font-serif text-sm text-[var(--foreground)]/70 mb-4">
          {event.description}
        </p>

        {/* Meta */}
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

        {/* CTA */}
        {isConducted ? (
          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--foreground)]/60 font-sans font-semibold text-sm hover:text-[var(--foreground)] hover:border-[var(--foreground)]/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            View Details
            <ExternalLink size={14} />
          </a>
        ) : (
          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--primary)] text-white font-sans font-semibold text-sm hover:bg-[var(--primary)]/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[var(--primary)]/30"
          >
            Register Now
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

// ─── Column empty states ──────────────────────────────────────────────────────

function UpcomingEmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="relative w-20 h-20 mb-5">
        <div className="absolute inset-0 rounded-full bg-[var(--primary)]/10 animate-ping" />
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
          <Calendar size={30} className="text-[var(--primary)]" />
        </div>
      </div>
      <h3 className="font-sans font-bold text-lg text-[var(--foreground)] mb-2">
        No Events Right Now
      </h3>
      <p className="font-serif text-[var(--foreground)]/60 text-center text-sm max-w-xs">
        Stay tuned — exciting workshops, hackathons, and seminars are coming
        soon. Follow us on social media for updates.
      </p>
    </motion.div>
  );
}

function ConductedEmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[var(--foreground)]/5 border border-[var(--border)] mb-5">
        <CheckCircle2 size={30} className="text-[var(--foreground)]/30" />
      </div>
      <h3 className="font-sans font-bold text-lg text-[var(--foreground)]/70 mb-2">
        No Conducted Events Yet
      </h3>
      <p className="font-serif text-[var(--foreground)]/50 text-center text-sm max-w-xs">
        Past events will appear here once they&apos;ve taken place.
      </p>
    </motion.div>
  );
}

// ─── Column wrapper ───────────────────────────────────────────────────────────

interface EventColumnProps {
  title: string;
  events: Event[];
  type: "upcoming" | "conducted";
  emptyState: React.ReactNode;
  index: number;
}

function EventColumn({
  title,
  events,
  type,
  emptyState,
  index,
}: EventColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      {/* Column header */}
      <div className="flex items-center gap-3 mb-6">
        <h3 className="font-sans font-bold text-lg text-[var(--foreground)]">
          {title}
        </h3>
        {events.length > 0 && (
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--primary)]/15 text-[var(--primary)] font-mono text-xs font-bold">
            {events.length}
          </span>
        )}
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      {/* Cards or empty state */}
      {events.length === 0 ? (
        emptyState
      ) : (
        <div className="flex flex-col gap-5">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} type={type} index={i} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

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

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <EventColumn
            title="Upcoming Events"
            events={upcomingEvents}
            type="upcoming"
            emptyState={<UpcomingEmptyState />}
            index={0}
          />
          <EventColumn
            title="Events Conducted"
            events={conductedEvents}
            type="conducted"
            emptyState={<ConductedEmptyState />}
            index={1}
          />
        </div>
      </div>
    </section>
  );
}

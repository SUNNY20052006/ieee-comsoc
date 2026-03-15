"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, Users, BookOpen } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const stats = [
  {
    icon: <Calendar size={28} />,
    value: "50+",
    label: "Events Hosted",
    description: "Technical workshops, seminars & symposiums",
    color: "#4caf50",
  },
  {
    icon: <Trophy size={28} />,
    value: "15+",
    label: "Awards Won",
    description: "National and international recognitions",
    color: "#f59e0b",
  },
  {
    icon: <Users size={28} />,
    value: "200+",
    label: "Active Members",
    description: "Students shaping the future of communications",
    color: "#3b82f6",
  },
  {
    icon: <BookOpen size={28} />,
    value: "30+",
    label: "Workshops Conducted",
    description: "Hands-on learning experiences",
    color: "#8b5cf6",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-4 bg-[var(--background)]"
      aria-label="Achievements"
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
            Our Impact
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--foreground)] mt-2">
            Achievements
          </h2>
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full" />
          <p className="font-serif text-[var(--foreground)]/60 mt-4 max-w-xl mx-auto">
            Years of dedication, innovation, and collaboration — reflected in
            numbers that inspire.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <GlowingEffect spread={40} glow proximity={80} borderWidth={2} />
              <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 mx-auto"
                  style={{
                    background: `${stat.color}18`,
                    color: stat.color,
                    border: `1px solid ${stat.color}30`,
                  }}
                >
                  {stat.icon}
                </div>

                {/* Value */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <p
                    className="font-sans font-extrabold text-4xl sm:text-5xl mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                </motion.div>

                {/* Label */}
                <p className="font-sans font-bold text-base text-[var(--foreground)] mb-2">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="font-serif text-xs text-[var(--foreground)]/60 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

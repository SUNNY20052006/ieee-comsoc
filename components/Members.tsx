"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { User } from "lucide-react";

const members = [
  { name: "Sutanu Ghosh", role: "Faculty Advisor", slug: "sutanu" },
  { name: "Abhinab Chatterjee", role: "Chairperson", slug: "abhinab" },
  { name: "Sandira Gain", role: "Vice Chairperson", slug: "sandira" },
  { name: "Nirjhar Mitra", role: "Secretary", slug: "nirjhar" },
  { name: "Anusmriti Saha", role: "Joint Secretary", slug: "anusmriti" },
  { name: "Arkaprava Manna", role: "Treasurer", slug: "arkaprava" },
  { name: "Snehadri Nandi", role: "Webmaster", slug: "snehadri" },
  { name: "Srabanti Paul", role: "PR & Outreach Lead", slug: "srabanti" },
  { name: "Sagnik Datta", role: "Content Lead", slug: "sagnik" },
  { name: "Trideep Dhar", role: "Graphics Lead", slug: "trideep" },
  { name: "Aishiki Podder", role: "Operational Lead", slug: "aishiki" },
  { name: "Rajarshi Dhara", role: "Project Lead", slug: "rajarshi" },
];

// Role → color mapping for visual variety
const roleColors: Record<string, string> = {
  "Faculty Advisor": "#6d4c41",
  Chairperson: "#2e7d32",
  "Vice Chairperson": "#144266",
  Secretary: "#4caf50",
  "Joint Secretary": "#66bb6a",
  Treasurer: "#f59e0b",
  Webmaster: "#3b82f6",
  "PR & Outreach Lead": "#8b5cf6",
  "Content Lead": "#ec4899",
  "Graphics Lead": "#06b6d4",
  "Operational Lead": "#10b981",
  "Project Lead": "#f97316",
};

function MemberCard({
  member,
  index,
}: {
  member: (typeof members)[0];
  index: number;
}) {
  const color = roleColors[member.role] ?? "#2e7d32";
  const initials = member.name.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <GlowingEffect spread={30} glow proximity={60} borderWidth={2} />
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        {/* Background decoration */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: color }}
        />

        {/* Avatar */}
        <div className="relative mx-auto mb-4">
          <div
            className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-white font-sans font-bold text-xl overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${color}cc, ${color}66)` }}
            aria-hidden="true"
          >
            {/* Try to load member image; fall back to initials */}
            <img
              src={`/members/${member.slug}.jpg`}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = initials;
                }
              }}
            />
          </div>
          {/* Online indicator for leadership */}
          {(member.role === "Chairperson" ||
            member.role === "Vice Chairperson") && (
            <span
              className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-[var(--card)]"
              style={{ background: color }}
            />
          )}
        </div>

        {/* Name */}
        <h3 className="font-sans font-bold text-base text-[var(--foreground)] mb-1">
          {member.name}
        </h3>

        {/* Role badge */}
        <span
          className="inline-block px-2.5 py-0.5 rounded-full font-mono text-xs font-medium"
          style={{
            background: `${color}18`,
            color: color,
            border: `1px solid ${color}30`,
          }}
        >
          {member.role}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Members() {
  return (
    <section
      id="members"
      className="py-24 px-4 bg-[var(--secondary)]"
      aria-label="Team Members"
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
            The Team
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--foreground)] mt-2">
            Our Members
          </h2>
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full" />
          <p className="font-serif text-[var(--foreground)]/60 mt-4 max-w-xl mx-auto">
            Meet the passionate individuals driving innovation and excellence
            in our chapter.
          </p>
        </motion.div>

        {/* Grid: 4 col desktop, 3 col tablet, 2 col mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {members.map((member, index) => (
            <MemberCard key={member.slug} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

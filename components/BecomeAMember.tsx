"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Zap, Globe } from "lucide-react";

const perks = [
  {
    icon: <Globe size={16} />,
    text: "Access to global IEEE network",
  },
  {
    icon: <Star size={16} />,
    text: "Exclusive publications & resources",
  },
  {
    icon: <Zap size={16} />,
    text: "Technical conferences & events",
  },
];

export default function BecomeAMember() {
  return (
    <section
      id="become-member"
      className="py-24 px-4 bg-[var(--background)] overflow-hidden"
      aria-label="Become a Member"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c2a1f] via-[#0a1f0c] to-[#1b3020]" />

          {/* Decorative wave-like circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#4caf50]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#2e7d32]/10 blur-3xl" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(76,175,80,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,80,0.4) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 py-16 px-8 sm:px-12 md:px-16 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4caf50]/40 bg-[#4caf50]/10 mb-6"
            >
              <Star size={12} className="text-[#4caf50]" fill="#4caf50" />
              <span className="font-mono text-[#c8e6c9] text-xs tracking-widest uppercase">
                Join the Community
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4"
            >
              Become an IEEE
              <br />
              <span className="text-[#4caf50]">ComSoc Member</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="font-serif text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-8"
            >
              Connect with the world&apos;s largest community of communications
              professionals. Shape the future of technology.
            </motion.p>

            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {perks.map((perk) => (
                <span
                  key={perk.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 font-mono text-xs"
                >
                  <span className="text-[#4caf50]">{perk.icon}</span>
                  {perk.text}
                </span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://www.comsoc.org/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-[#4caf50] text-white font-sans font-bold text-base hover:bg-[#388e3c] transition-all duration-200"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(76, 175, 80, 0.4)",
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
              >
                Become an IEEE ComSoc Member
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            <p className="font-mono text-white/30 text-xs mt-6">
              comsoc.org/membership
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

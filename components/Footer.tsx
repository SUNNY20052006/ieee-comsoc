"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "@/components/ui/social-links";

const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Achievements", href: "#achievements" },
  { label: "Members", href: "#members" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[var(--foreground)] text-[var(--background)] overflow-hidden"
      role="contentinfo"
    >
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-[#1b5e20] via-[#4caf50] to-[#1b5e20]" />

      {/* Background grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(200,230,201,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,230,201,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#4caf50]/20 border border-[#4caf50]/30">
                <span className="font-mono text-[#4caf50] font-bold text-xs">
                  IEEE
                </span>
              </div>
              <div>
                <p className="font-sans font-bold text-sm leading-tight">
                  IEEE ComSoc
                </p>
                <p className="font-mono text-xs text-[#4caf50]">
                  IEM Student Chapter
                </p>
              </div>
            </div>
            <p className="font-serif text-sm text-white/50 leading-relaxed max-w-xs">
              Advancing communications technology for the betterment of
              humanity through education, research, and innovation.
            </p>
          </motion.div>

          {/* Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs text-[#4caf50] tracking-widest uppercase mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://www.comsoc.org/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-[#4caf50] hover:text-[#81c784] transition-colors duration-200"
                >
                  Become a Member →
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs text-[#4caf50] tracking-widest uppercase mb-5">
              Connect
            </p>
            <SocialLinks className="mb-5" />
            <div className="space-y-2">
              <p className="font-mono text-xs text-white/40">Email</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=comsoc.iem@gmail.com&su=Inquiry%20from%20ComSoc%20Website"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-white/70 hover:text-white transition-colors"
              >
                comsoc.iem@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30">
            © {currentYear} IEEE Communication Society – IEM Student Chapter.
            All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/20">
            Built with ❤️ by the IEM ComSoc Team
          </p>
        </div>
      </div>
    </footer>
  );
}

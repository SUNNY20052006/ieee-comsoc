"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-[var(--background)]/80 border-b border-[var(--border)] shadow-sm"
            : "backdrop-blur-sm bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logos */}
            <div className="flex items-center gap-3">
              <Image
                src="/logos/comsoc-logo.png"
                alt="IEEE ComSoc"
                width={80}
                height={40}
                className={cn(
                  "object-contain transition-all duration-300",
                  scrolled ? "brightness-0" : "brightness-0 invert"
                )}
              />


              <div className="hidden sm:block w-px h-6 bg-[var(--border)]" />

              <Image
                src="/logos/iem-logo.png"
                alt="IEM"
                width={76}
                height={36}
                className={cn(
                  "object-contain transition-all duration-300",
                  scrolled ? "brightness-0" : "brightness-0 invert"
                )}

              />

              <div className="hidden sm:block ml-2">
                <p className="font-sans font-bold text-sm text-[var(--foreground)] leading-tight">
                  IEEE ComSoc
                </p>
                <p className="font-mono text-xs text-[var(--primary)]">By IEM Students</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://www.comsoc.org/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white font-sans font-semibold text-sm hover:bg-[var(--primary)]/90 transition-all duration-200 hover:shadow-md hover:shadow-[var(--primary)]/30 hover:-translate-y-0.5"
              >
                Become a Member
              </a>
              <button
                onClick={scrollToContact}
                className={cn(
                  "px-4 py-2 rounded-lg border font-sans font-medium text-sm transition-all duration-200",
                  scrolled
                    ? "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    : "border-white/30 text-white hover:border-white hover:text-white"
                )}
              >
                Contact
              </button>

            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg border border-[var(--border)] text-[var(--foreground)]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-[var(--background)]/95 backdrop-blur-xl border-b border-[var(--border)] shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <a
                href="https://www.comsoc.org/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 rounded-lg bg-[var(--primary)] text-white font-sans font-semibold text-sm text-center"
                onClick={() => setMenuOpen(false)}
              >
                Become a Member
              </a>
              <button
                onClick={scrollToContact}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] text-[var(--foreground)] font-sans font-medium text-sm"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

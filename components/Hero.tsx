"use client";

import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowDown, Wifi, Radio, Globe } from "lucide-react";

export default function Hero() {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen" aria-label="Hero">
      <WavyBackground
        containerClassName="min-h-screen"
        className="flex flex-col items-center justify-center text-center px-4 py-32"
        colors={["#2e7d32", "#388e3c", "#4caf50", "#81c784", "#1b5e20"]}
        waveWidth={60}
        waveOpacity={0.4}
        blur={8}
        speed="slow"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4caf50]/40 bg-[#4caf50]/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#4caf50] animate-pulse" />
          <span className="font-mono text-[#c8e6c9] text-xs tracking-widest uppercase">
            IEM Student Chapter
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4"
        >
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
            IEEE Communication
            <br />
            <span className="text-[#4caf50]">Society</span>
          </h1>
        </motion.div>

        {/* Shiny subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <AnimatedShinyText
            className="font-serif text-lg sm:text-xl md:text-2xl text-white/90"
            shimmerWidth={250}
          >
            Institute of Engineering &amp; Management
          </AnimatedShinyText>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif text-white/70 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed mb-10"
        >
          Advancing communications and networking technology for the betterment
          of humanity — one innovation at a time.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {[
            { icon: <Wifi size={14} />, text: "Wireless Comms" },
            { icon: <Radio size={14} />, text: "Signal Processing" },
            { icon: <Globe size={14} />, text: "Global Network" },
          ].map((item) => (
            <span
              key={item.text}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 font-mono text-xs"
            >
              {item.icon}
              {item.text}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://www.comsoc.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-[#4caf50] text-white font-sans font-bold text-sm hover:bg-[#388e3c] transition-all duration-200 hover:shadow-lg hover:shadow-[#4caf50]/40 hover:-translate-y-1"
          >
            Join IEEE ComSoc
          </a>
          <button
            onClick={scrollToEvents}
            className="px-8 py-3 rounded-xl border border-white/30 text-white font-sans font-medium text-sm hover:bg-white/10 transition-all duration-200 hover:-translate-y-1"
          >
            Explore Events
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToEvents}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/50 hover:text-white/80 transition-colors"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </WavyBackground>
    </section>
  );
}

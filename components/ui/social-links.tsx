"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ieee.iem.comsoc",
    icon: <Instagram />,
    color: "#E1306C",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/iemcomsoc",
    icon: <Linkedin />,
    color: "#0A66C2",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=comsoc.iem@gmail.com&su=Inquiry%20from%20ComSoc%20Website",
    icon: <Mail />,
    color: "#4caf50",
  },
  {
    name: "IEEE",
    href: "https://www.comsoc.org",
    icon: <Globe />,
    color: "#006699",
  },
];

export const SocialLinks = ({ className, iconSize = 20 }: SocialLinksProps) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={
            {
              "--hover-color": link.color,
            } as React.CSSProperties
          }
        >
          <span
            className="transition-colors duration-300 group-hover:text-[var(--hover-color)]"
            style={{ width: iconSize, height: iconSize }}
          >
            {link.icon}
          </span>
          {/* Tooltip */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-[var(--background)] text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-mono">
            {link.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

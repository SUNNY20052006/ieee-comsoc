"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, Send } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: "Email Us",
    value: "comsoc.iem@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=comsoc.iem@gmail.com&su=Inquiry%20from%20ComSoc%20Website",
    description: "Reach out for collaborations & inquiries",
    color: "#4caf50",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "IEM, Kolkata",
    href: "https://maps.google.com/?q=Institute+of+Engineering+Management+Kolkata",
    description: "Institute of Engineering & Management",
    color: "#3b82f6",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-[var(--secondary)]"
      aria-label="Contact"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[var(--primary)] text-sm tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[var(--foreground)] mt-2">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full" />
          <p className="font-serif text-[var(--foreground)]/60 mt-4 max-w-md mx-auto">
            Have a question or want to collaborate? We&apos;d love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5 no-underline"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                style={{
                  background: `${item.color}18`,
                  color: item.color,
                  border: `1px solid ${item.color}30`,
                }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs text-[var(--foreground)]/50 uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="font-sans font-bold text-[var(--foreground)] text-base truncate">
                  {item.value}
                </p>
                <p className="font-serif text-sm text-[var(--foreground)]/60 mt-0.5">
                  {item.description}
                </p>
              </div>

              <ExternalLink
                size={16}
                className="text-[var(--foreground)]/30 group-hover:text-[var(--primary)] transition-colors mt-1"
              />
            </motion.a>
          ))}
        </div>

        {/* Social section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 py-8 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
        >
          <div className="text-center">
            <p className="font-sans font-bold text-[var(--foreground)] text-base">
              Follow Us
            </p>
            <p className="font-serif text-sm text-[var(--foreground)]/60 mt-1">
              Stay updated on events, news, and announcements
            </p>
          </div>
          <SocialLinks iconSize={20} />
        </motion.div>
      </div>
    </section>
  );
}

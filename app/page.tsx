"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Achievements from "@/components/Achievements";
import { DemoOne } from "@/components/ui/demo";   // ← NEW
import Members from "@/components/Members";
import BecomeAMember from "@/components/BecomeAMember";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Events />
      <Achievements />
      <DemoOne />      {/* ← Event Images Gallery, between Achievements and Members */}
      <Members />
      <BecomeAMember />
      <Contact />
      <Footer />
    </main>
  );
}

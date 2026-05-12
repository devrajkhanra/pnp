"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ShieldAlert } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        {/* Hero Banner */}
        <div
          style={{
            background: "var(--bg)",
            borderBottom: "4px solid var(--border)",
            padding: "64px 0 48px",
          }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mono-label mb-4" style={{ color: "var(--accent)", letterSpacing: "0.3em" }}>
              — Contact Us
            </div>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tighter"
              style={{ color: "var(--fg)", maxWidth: "700px" }}
            >
              Let&apos;s Build{" "}
              <span style={{ color: "var(--accent)" }}>Together.</span>
            </h1>
            <p className="mt-6 text-lg font-medium max-w-xl" style={{ color: "var(--fg-secondary)" }}>
              Whether it&apos;s a new project bid, emergency breakdown, or long-term maintenance contract — our dispatch team is ready.
            </p>

            {/* Quick contact cards */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                {
                  icon: Phone,
                  label: "24/7 Dispatch",
                  value: "+91 96799 99137",
                  sub: "Emergency & General",
                  accent: true,
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "Vill. Barsundra, Iswardaha",
                  sub: "Purba Medinipur, WB — 721654",
                  accent: false,
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon–Sat: 8 AM – 6 PM",
                  sub: "Emergency dispatch: 24/7",
                  accent: false,
                },
                {
                  icon: ShieldAlert,
                  label: "Toll-free",
                  value: "1800-XXX-XXXX",
                  sub: "India only",
                  accent: true,
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    whileHover={{ y: -3 }}
                    style={{
                      padding: "20px 24px",
                      border: "2px solid var(--border)",
                      background: "var(--bg-secondary)",
                      cursor: "pointer",
                      minWidth: "220px",
                      flex: "1 1 200px",
                      maxWidth: "320px",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        style={{
                          padding: "8px",
                          border: "2px solid var(--border-light)",
                          background: "var(--bg)",
                        }}
                      >
                        <Icon className="w-4 h-4" strokeWidth={2} style={{ color: "var(--accent)" }} />
                      </div>
                      <div className="mono-label" style={{ letterSpacing: "0.15em", color: "var(--fg-muted)" }}>
                        {card.label}
                      </div>
                    </div>
                    <div className="font-black text-base" style={{ color: "var(--fg)" }}>
                      {card.value}
                    </div>
                    <div className="text-xs font-medium mt-1" style={{ color: "var(--fg-muted)" }}>
                      {card.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
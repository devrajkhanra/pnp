"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const clients = [
  {
    name: "Indian Oil Corporation Ltd",
    short: "IOCL",
    full: "Indian Oil Corporation Ltd.",
    type: "Refinery",
    location: "Haldia, West Bengal",
    since: "2001",
    services: ["Storage Tanks", "Shutdown & Turnaround", "Structural Engineering"],
    logo: "/logo-iocl.jpg",
    color: "#E31837",
  },
  {
    name: "Haldia Petrochemicals Ltd",
    short: "HPL",
    full: "Haldia Petrochemicals Ltd.",
    type: "Petrochemical",
    location: "Haldia, West Bengal",
    since: "2005",
    services: ["Industrial Piping", "Mechanical Equipment", "Surface Treatment"],
    logo: "/logo-hpl.png",
    color: "#0057A8",
  },
  {
    name: "Reliance Industries Ltd",
    short: "Reliance",
    full: "Reliance Industries Ltd.",
    type: "Refinery & Petrochemical",
    location: "Jamnagar, Gujarat",
    since: "2010",
    services: ["Storage Tanks", "Shutdown & Turnaround", "Structural Engineering"],
    logo: "/logo-reliance.png",
    color: "#1A1A6E",
  },
  {
    name: "Syama Prasad Mookerjee Port",
    short: "CPT / SPM",
    full: "Syama Prasad Mookerjee Port, Kolkata",
    type: "Port & Terminal",
    location: "Kolkata / Haldia, West Bengal",
    since: "2003",
    services: ["Storage Tanks", "Structural Erection", "Surface Treatment"],
    logo: "/logo-cpt.png",
    color: "#0066B3",
  },
  {
    name: "Adani Ports & SEZ",
    short: "Adani",
    full: "Adani Ports & SEZ Ltd — Haldia Terminal",
    type: "Port & Terminal",
    location: "Haldia, West Bengal",
    since: "2015",
    services: ["Oil Storage Tanks", "Piping Systems", "Structural Steel"],
    logo: "/logo-adani.jpg",
    color: "#00695C",
  },
];

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <div
          style={{
            background: "var(--bg)",
            borderBottom: "4px solid var(--border)",
            padding: "64px 0 48px",
          }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mono-label mb-4" style={{ color: "var(--accent)", letterSpacing: "0.3em" }}>
              — Our Clients
            </div>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tighter"
              style={{ color: "var(--fg)", maxWidth: "700px" }}
            >
              Trusted by{" "}
              <span style={{ color: "var(--accent)" }}>India&apos;s Core</span>
              <br />
              Sector Leaders
            </h1>
            <p className="mt-6 text-lg font-medium max-w-2xl" style={{ color: "var(--fg-secondary)" }}>
              PNP Engineering Works has built enduring relationships with India&apos;s leading refineries, petrochemical complexes, and port authorities — spanning 25+ years and counting.
            </p>

            {/* Stats row */}
            <div className="flex gap-0 mt-10" style={{ maxWidth: "640px" }}>
              {[
                { val: "5+", label: "Major Clients" },
                { val: "25+", label: "Years Relationship" },
                { val: "100+", label: "Projects Delivered" },
                { val: "4 States", label: "Pan-India" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="flex-1 py-5 px-4"
                  style={{
                    border: "1px solid var(--border-light)",
                    borderRight: i < 3 ? "none" : undefined,
                    background: i === 0 ? "var(--accent)" : "var(--bg-secondary)",
                  }}
                >
                  <div
                    className="text-xl font-black"
                    style={{
                      color: i === 0 ? "var(--accent-fg)" : "var(--accent)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="mono-label mt-1"
                    style={{
                      letterSpacing: "0.1em",
                      color: i === 0 ? "var(--accent-fg)" : "var(--fg-muted)",
                      fontSize: "8px",
                      opacity: i === 0 ? 0.8 : 1,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Cards */}
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "0" }}>
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  border: "2px solid var(--border)",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "2px solid var(--border)",
                  borderBottom: "2px solid var(--border)",
                  background: "var(--bg)",
                  padding: "40px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: client.color,
                  }}
                />

                {/* Logo */}
                <div className="flex items-start justify-between mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.short}
                    style={{ height: "48px", width: "auto", objectFit: "contain" }}
                    loading="lazy"
                  />
                  <div
                    className="mono-label px-3 py-2"
                    style={{
                      border: "2px solid var(--border-light)",
                      color: "var(--fg-muted)",
                      fontSize: "8px",
                      letterSpacing: "0.15em",
                      background: "var(--bg-secondary)",
                    }}
                  >
                    Since {client.since}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--fg)" }}>
                  {client.short}
                </h3>
                <div className="mono-label mb-4" style={{ letterSpacing: "0.1em", color: "var(--fg-muted)" }}>
                  {client.type} · {client.location}
                </div>
                <p className="text-sm font-medium leading-relaxed mb-6" style={{ color: "var(--fg-secondary)" }}>
                  {client.full}
                </p>

                {/* Services rendered */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {client.services.map((s) => (
                    <div
                      key={s}
                      className="mono-label px-3 py-1"
                      style={{
                        border: "1px solid var(--border-light)",
                        color: "var(--accent)",
                        fontSize: "8px",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em]"
                  style={{
                    color: "var(--fg)",
                    textDecoration: "none",
                    borderBottom: "2px solid var(--border-light)",
                    paddingBottom: "2px",
                    transition: "color 0.15s, border-color 0.15s",
                  }}
                >
                  Request a Bid →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
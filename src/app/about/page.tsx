"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const milestones = [
  { year: "1998", event: "Founded by SC Panja with 12 skilled welders in Iswardaha, Purba Medinipur" },
  { year: "2001", event: "First major contract: API-650 tank fabrication for IOCL Haldia Refinery" },
  { year: "2003", event: "ISO 9001:2000 certification achieved; workforce crosses 150" },
  { year: "2005", event: "HPL Haldia petrochemical complex piping contract — our largest at the time" },
  { year: "2008", event: "IBR certification received; first non-IBR power piping project" },
  { year: "2010", event: "Reliance Jamnagar contract awarded; pan-India operations begin" },
  { year: "2015", event: "Adani Ports Haldia Terminal partnership; 500+ workforce milestone" },
  { year: "2018", event: "20th anniversary; 25th major TAR completed with zero punch-list" },
  { year: "2020", event: "Digital documentation adopted; PQR/WPS library fully online" },
  { year: "2023", event: "982+ workforce; 170+ engineers; 25+ years of flawless delivery" },
  { year: "2025", event: "Expanded to include NACE-certified coating division" },
];

const values = [
  {
    icon: Target,
    title: "Zero-Defect Execution",
    description: "Every weld, every joint, every alignment — delivered to OEM and code specifications. We do not ship a single unit with open NCRs.",
  },
  {
    icon: Users,
    title: "People First",
    description: "Our workforce is our greatest asset. 982+ workers with structured safety training, on-site medical support, and performance-linked incentive programs.",
  },
  {
    icon: Award,
    title: "Compliance First",
    description: "API-650, ASME B31.3, IBR, ISO 9001:2015 — we don&apos;t just meet standards, we build our processes around them. Full documentation, full traceability.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We reinvest every year — new welding equipment, NDT instruments, training programs, and digital project management tools.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "64px" }}>
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
              — About PNP
            </div>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tighter"
              style={{ color: "var(--fg)", maxWidth: "700px" }}
            >
              25 Years of
              <br />
              <span style={{ color: "var(--accent)" }}>Engineering</span> Excellence
            </h1>
            <p className="mt-6 text-lg font-medium max-w-2xl" style={{ color: "var(--fg-secondary)" }}>
              Founded in 1998 by SC Panja with a vision to serve India&apos;s core sector with precision fabrication and uncompromising quality. Today, PNP Engineering Works is West Bengal&apos;s most trusted heavy mechanical contractor.
            </p>

            {/* Key stats */}
            <div
              className="flex flex-wrap gap-0 mt-10"
              style={{ maxWidth: "800px", border: "2px solid var(--border)" }}
            >
              {[
                { val: "1998", label: "Year Founded" },
                { val: "982+", label: "Total Workforce" },
                { val: "170+", label: "Engineers & Supervisors" },
                { val: "25+", label: "Years Continuous Operation" },
                { val: "79m", label: "Largest Tank Fabricated" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="flex-1 py-6 px-5"
                  style={{
                    borderRight: i < 4 ? "1px solid var(--border-light)" : "none",
                    background: i % 3 === 0 ? "rgba(255,221,0,0.06)" : "var(--bg)",
                    minWidth: "140px",
                  }}
                >
                  <div
                    className="text-2xl font-black"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)" }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="mono-label mt-2"
                    style={{ letterSpacing: "0.1em", color: "var(--fg-muted)", fontSize: "8px" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ background: "var(--bg-secondary)", borderBottom: "2px solid var(--border-light)" }}>
          <div className="container mx-auto px-6 lg:px-12 py-20">
            <div className="mono-label mb-3" style={{ color: "var(--accent)", letterSpacing: "0.3em" }}>
              — Our Values
            </div>
            <h2
              className="text-4xl font-black tracking-tight mb-12"
              style={{ color: "var(--fg)" }}
            >
              The Principles We Build By
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "0",
              }}
            >
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      padding: "40px 32px",
                      border: "2px solid var(--border)",
                      borderRight: i < values.length - 1 ? "1px solid var(--border)" : "none",
                      background: "var(--bg)",
                      marginRight: i < values.length - 1 ? "-1px" : 0,
                    }}
                  >
                    <div
                      className="mb-6"
                      style={{
                        width: "48px",
                        height: "48px",
                        border: "2px solid var(--accent)",
                        background: "rgba(255,221,0,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                    </div>
                    <h3 className="text-xl font-black tracking-tight mb-3" style={{ color: "var(--fg)" }}>
                      {v.title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                      {v.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ background: "var(--bg)", borderBottom: "2px solid var(--border-light)" }}>
          <div className="container mx-auto px-6 lg:px-12 py-20">
            <div className="mono-label mb-3" style={{ color: "var(--accent)", letterSpacing: "0.3em" }}>
              — Our Journey
            </div>
            <h2
              className="text-4xl font-black tracking-tight mb-12"
              style={{ color: "var(--fg)" }}
            >
              25 Years, One Mission
            </h2>

            <div style={{ position: "relative", paddingLeft: "32px" }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "7px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background:
                    "repeating-linear-gradient(to bottom, var(--accent) 0, var(--accent) 8px, transparent 8px, transparent 16px)",
                }}
              />

              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="mb-8"
                  style={{ position: "relative" }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-32px",
                      top: "10px",
                      width: "16px",
                      height: "16px",
                      border: "2px solid var(--accent)",
                      background: "var(--bg)",
                    }}
                  />

                  <div className="flex gap-6">
                    <div
                      className="font-black text-xl flex-shrink-0"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)", width: "60px" }}
                    >
                      {m.year}
                    </div>
                    <div
                      className="text-sm font-medium leading-relaxed"
                      style={{ color: "var(--fg-secondary)" }}
                    >
                      {m.event}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
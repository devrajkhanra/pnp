"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, HeartPulse, HardHat, AlertTriangle, Eye, ClipboardCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Zero-Incident Philosophy",
    description:
      "We target zero lost-time injuries, zero recordable incidents. Not as a target — as the only acceptable outcome. Every worker, every site, every shift.",
    stats: [
      { val: "0", label: "Fatalities (25+ years)" },
      { val: "98.7%", label: "Near-Miss Reporting" },
      { val: "100%", label: "PPE Compliance" },
    ],
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing",
    description:
      "Pre-employment medical examinations, annual health checks, and on-site first-aid trained personnel at every location. Our workers go home healthy every day.",
    stats: [
      { val: "Annual", label: "Medical Checkups" },
      { val: "24/7", label: "First Aid Coverage" },
      { val: "100%", label: "Insured Workforce" },
    ],
  },
  {
    icon: HardHat,
    title: "PPE & Equipment Safety",
    description:
      "All workers issued full PPE kit on day one: helmets, safety shoes, gloves, goggles, and task-specific gear. No PPE, no work permit. Non-negotiable.",
    stats: [
      { val: "Full Kit", label: "Issued on Day 1" },
      { val: "Monthly", label: "PPE Inspection" },
      { val: "Replace", label: "Damaged Gear Free" },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Hazard Identification (JSA/JHA)",
    description:
      "Every task starts with a Job Safety Analysis. Our supervisors conduct pre-job hazard reviews covering 100% of non-routine activities before a single weld is struck.",
    stats: [
      { val: "100%", label: "Non-Routine JSA" },
      { val: "Daily", label: "Toolbox Talks" },
      { val: "Weekly", label: "Safety Audits" },
    ],
  },
  {
    icon: Eye,
    title: "Permit-to-Work System",
    description:
      "Hot work, confined space, height work, and excavation — all governed by our strict PTW system. No permit means no work. We integrate with client PTW protocols seamlessly.",
    stats: [
      { val: "Hot Work", label: "Fire Watch 30min" },
      { val: "Confined", label: "Gas Testing Log" },
      { val: "Height", label: "Anchor Check" },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Training & Competency",
    description:
      "Monthly safety training for all workers, quarterly specialized training (welding, rigging, NDT). Competency records maintained for every welder and pipefitter.",
    stats: [
      { val: "Monthly", label: "Safety Training" },
      { val: "Quarterly", label: "Skills Upgradation" },
      { val: "100%", label: "Certified Welders" },
    ],
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management System",
  "ISO 45001:2018 Occupational Health & Safety",
  "NACE Level II Coating Inspectors on staff",
  "SSPC C3 / C5 Industrial Coating certification",
  "API 510 Pressure Vessels certified inspectors",
  "HSE trained supervisors at every site",
];

export default function SafetyPage() {
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
              — Safety & Compliance
            </div>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tighter"
              style={{ color: "var(--fg)", maxWidth: "700px" }}
            >
              Safety Is Not a
              <br />
              <span style={{ color: "var(--accent)" }}>Policy.</span> It&apos;s Our Culture.
            </h1>
            <p className="mt-6 text-lg font-medium max-w-2xl" style={{ color: "var(--fg-secondary)" }}>
              PNP Engineering Works has maintained zero fatalities across 25+ years and 982+ workforce. Every rule, every procedure, every investment — built around one principle: every worker goes home safe.
            </p>

            {/* Safety KPI row */}
            <div
              className="flex flex-wrap gap-0 mt-10"
              style={{ maxWidth: "600px", border: "2px solid var(--border)" }}
            >
              {[
                { val: "0", label: "Fatalities (25 Years)", accent: true },
                { val: "0", label: "Lost Time Injuries", accent: false },
                { val: "98.7%", label: "Near-Miss Reporting Rate", accent: false },
                { val: "100%", label: "PPE Compliance", accent: false },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 py-5 px-4"
                  style={{
                    borderRight: "1px solid var(--border-light)",
                    background: s.accent ? "var(--accent)" : "var(--bg-secondary)",
                  }}
                >
                  <div
                    className="text-2xl font-black"
                    style={{
                      color: s.accent ? "var(--accent-fg)" : "var(--accent)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="mono-label mt-1"
                    style={{
                      letterSpacing: "0.08em",
                      color: s.accent ? "var(--accent-fg)" : "var(--fg-muted)",
                      fontSize: "8px",
                      opacity: s.accent ? 0.8 : 1,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Pillars */}
        <div style={{ background: "var(--bg-secondary)" }}>
          <div className="container mx-auto px-6 lg:px-12 py-20">
            <div className="mono-label mb-3" style={{ color: "var(--accent)", letterSpacing: "0.3em" }}>
              — Safety Framework
            </div>
            <h2 className="text-4xl font-black tracking-tight mb-12" style={{ color: "var(--fg)" }}>
              Six Pillars of Safety Excellence
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: "24px",
              }}
            >
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    style={{
                      border: "2px solid var(--border)",
                      background: "var(--bg)",
                      padding: "40px",
                      position: "relative",
                    }}
                  >
                    {/* Number */}
                    <div
                      className="absolute top-6 right-6 font-black"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "48px",
                        color: "var(--border-light)",
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        border: "2px solid var(--accent)",
                        background: "rgba(255,221,0,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "24px",
                      }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                    </div>

                    <h3 className="text-2xl font-black tracking-tight mb-3" style={{ color: "var(--fg)" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed mb-6" style={{ color: "var(--fg-secondary)" }}>
                      {p.description}
                    </p>

                    {/* Stats */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "0",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      {p.stats.map((s, si) => (
                        <div
                          key={s.label}
                          className="py-4 px-3 text-center"
                          style={{
                            borderRight: si < p.stats.length - 1 ? "1px solid var(--border-light)" : "none",
                            background: si === 0 ? "rgba(255,221,0,0.06)" : "var(--bg-secondary)",
                          }}
                        >
                          <div
                            className="font-black text-sm"
                            style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)" }}
                          >
                            {s.val}
                          </div>
                          <div
                            className="mono-label mt-1"
                            style={{ letterSpacing: "0.08em", color: "var(--fg-muted)", fontSize: "7px" }}
                          >
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div style={{ background: "var(--bg)", borderTop: "2px solid var(--border-light)" }}>
          <div className="container mx-auto px-6 lg:px-12 py-16">
            <div className="mono-label mb-3" style={{ color: "var(--accent)", letterSpacing: "0.3em" }}>
              — Certifications & Standards
            </div>
            <h2 className="text-3xl font-black tracking-tight mb-8" style={{ color: "var(--fg)" }}>
              Standards We Operate By
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 px-5 py-4"
                  style={{
                    border: "2px solid var(--border-light)",
                    background: "var(--bg-secondary)",
                  }}
                >
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" strokeWidth={2} style={{ color: "var(--accent)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
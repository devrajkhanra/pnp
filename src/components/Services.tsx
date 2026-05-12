"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Droplets, GitBranch, Layers, Settings2, Zap, PaintRoller, ArrowRight } from "lucide-react";

const services = [
  {
    id: "oil-storage-tanks",
    title: "Oil Storage Tanks",
    description: "Complete construction, erection & commissioning of API-650 / API-620 tanks — cone roof, dome roof, and floating roof designs up to 79m diameter.",
    icon: Droplets,
    tag: "API-650",
    metric: "79m",
    metricLabel: "Diameter",
  },
  {
    id: "piping",
    title: "Industrial Piping",
    description: "Fabrication & erection of IBR and non-IBR piping systems using Carbon Steel, Stainless Steel, and Alloy Steel (P5, P9, P11) to ASME B31.3.",
    icon: GitBranch,
    tag: "IBR / Non-IBR",
    metric: "ASME B31.3",
    metricLabel: "Standard",
  },
  {
    id: "structural",
    title: "Structural Engineering",
    description: "Pipe racks, technological platforms, heater panels, and structural columns for refineries and petrochemical complexes.",
    icon: Layers,
    tag: "Structural",
    metric: "200T",
    metricLabel: "Max Unit",
  },
  {
    id: "equipment",
    title: "Mechanical Equipment",
    description: "Precision installation of static and rotary equipment — heat exchangers, columns, vessels, and compressors to OEM specs.",
    icon: Settings2,
    tag: "Equipment",
    metric: "80m",
    metricLabel: "Column Height",
  },
  {
    id: "tar",
    title: "Shutdown & Turnaround",
    description: "Sophisticated plant shutdown, maintenance, and restart operations with zero-punch-list turnarounds for core sector plants.",
    icon: Zap,
    tag: "TAR / Shutdown",
    metric: "0",
    metricLabel: "Punch-list",
  },
  {
    id: "surface",
    title: "Surface Treatment",
    description: "SSPC-SP10 abrasive blasting, industrial painting, and underground piping coating services. NACE Level II inspectors on staff.",
    icon: PaintRoller,
    tag: "Blasting & Coating",
    metric: "SSPC-SP10",
    metricLabel: "Standard",
  },
];

export function Services() {
  return (
    <section
      className="w-full py-24"
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-light)" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div>
            <div className="section-mark mb-6">Our Expertise</div>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight leading-tight"
              style={{ color: "var(--fg)" }}
            >
              Core
              <span style={{ color: "var(--accent)", marginLeft: "0.25em" }}>Capabilities</span>
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed max-w-xl" style={{ color: "var(--fg-secondary)" }}>
              Six integrated service verticals serving India&apos;s core sector refineries and petrochemical complexes since 1998.
            </p>
          </div>

          <Link href="/services" className="btn-outline flex-shrink-0">
            View All Services
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1px",
            background: "var(--border-light)",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                className="construction-card"
                style={{ padding: "36px 32px" }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "var(--accent)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s",
                  }}
                  className="group-hover:scale-x-100"
                />

                {/* Icon + Tag */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "var(--accent-subtle)",
                      border: "1px solid rgba(249,115,22,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                  </div>
                  <div className="accent-badge">{service.tag}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black tracking-tight mb-3" style={{ color: "var(--fg)" }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium leading-relaxed mb-6" style={{ color: "var(--fg-secondary)" }}>
                  {service.description}
                </p>

                {/* Metric */}
                <div
                  className="flex items-end gap-3"
                  style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "20px" }}
                >
                  <div
                    className="text-3xl font-black"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)", lineHeight: 1 }}
                  >
                    {service.metric}
                  </div>
                  <div className="mono-label mb-1" style={{ letterSpacing: "0.1em", color: "var(--fg-muted)" }}>
                    {service.metricLabel}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/services#${service.id}`}
                  className="flex items-center gap-2 mt-6 text-sm font-black uppercase tracking-[0.15em]"
                  style={{ color: "var(--accent)", textDecoration: "none", borderBottom: "1px solid var(--accent)", paddingBottom: "2px", width: "fit-content" }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Droplets,
  GitBranch,
  Layers,
  Settings2,
  Zap,
  PaintRoller,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "oil-storage-tanks",
    title: "Oil Storage Tanks",
    subtitle: "API-650 / API-620",
    description:
      "Complete design-to-commissioning of atmospheric and low-pressure storage tanks for petroleum, chemical, and LNG terminals. We handle cone roof, dome roof, and external floating roof tanks up to 79m diameter, serving Haldia Refinery and major port terminals across eastern India.",
    icon: Droplets,
    specs: [
      "API-650 & API-620 compliant fabrication",
      "Up to 79m diameter tanks",
      "Cone roof, dome roof & floating roof designs",
      "Full NDT: UT, RT, MT, PT, PMI",
      "Commissioning & hydro-testing included",
    ],
    clients: ["IOCL Haldia", "Adani Ports Haldia", "CPT Kolkata"],
    image: "/hero-welder.png",
  },
  {
    id: "piping",
    title: "Industrial Piping",
    subtitle: "IBR / Non-IBR Systems",
    description:
      "End-to-end fabrication and erection of process piping systems. Carbon Steel, Stainless Steel, and Alloy Steel (P5, P9, P11) in sizes from DN15 to DN1200. Our IBR-certified welders and pipefitters deliver to ASME B31.3 and B31.1 standards with complete documentation package.",
    icon: GitBranch,
    specs: [
      "ASME B31.3 / B31.1 compliant",
      "Carbon Steel, SS304/316, Alloy Steels",
      "DN15 to DN1200 pipe sizes",
      "Tube welding, orbital welding available",
      "Complete WPS/PQR documentation",
    ],
    clients: ["Reliance Jamnagar", "HPL Haldia", "IOCL Haldia"],
    image: null,
  },
  {
    id: "structural",
    title: "Structural Engineering",
    subtitle: "Refinery & Petrochemical Structures",
    description:
      "Precision fabrication and site erection of pipe racks, technological platforms, heater panels, structural columns, and modules for refinery and petrochemical complexes. From detailed isometrics to full modular assembly — zero tolerance deviations on critical alignments.",
    icon: Layers,
    specs: [
      "Heavy structural fabrication up to 200T per unit",
      "Precision alignment to OEM specs",
      "Blast & paint to refinery standards",
      "Modular pre-fabrication for faster site erection",
      "Crane rigging up to 250T capacity",
    ],
    clients: ["IOCL Haldia", "HPL Haldia"],
    image: null,
  },
  {
    id: "equipment",
    title: "Mechanical Equipment Installation",
    subtitle: "Static & Rotary Equipment",
    description:
      "Installation and commissioning of static and rotary equipment — hydrogen reformers, CDU/VDU/DCU heaters, heat exchangers, columns, vessels, and compressors. Our teams perform base plate grouting, laser alignment, and hot alignment for all major OEM equipment.",
    icon: Settings2,
    specs: [
      "Laser alignment for rotary equipment",
      "Base plate grouting to OEM specs",
      "Hot alignment for turbine-driven equipment",
      "Column erection up to 80m height",
      "Compressor installation & commissioning",
    ],
    clients: ["Reliance", "HPCL", "BPCL"],
    image: null,
  },
  {
    id: "tar",
    title: "Shutdown & Turnaround (TAR)",
    subtitle: "Plant Shutdown & Restart",
    description:
      "Our dedicated TAR teams execute complex shutdown, maintenance, and restart operations with minimal plant downtime. We deploy 200–500 workers on peak TAR shutdowns with zero-punch-list delivery. 30+ successful turnarounds in the last decade.",
    icon: Zap,
    specs: [
      "200-500 workers per major TAR",
      "Sub-7-day shutdown execution",
      "Zero punch-list delivery",
      "Full isolation & permit management",
      "Post-TAR/startup support",
    ],
    clients: ["IOCL Haldia", "HPL", "Reliance", "CPCL"],
    image: null,
  },
  {
    id: "surface",
    title: "Surface Treatment",
    subtitle: "Blasting, Painting & Coating",
    description:
      "SSPC-SP10 / SA2.5 abrasive blasting, industrial painting systems (epoxy, PU, inorganic zinc), and underground piping coating (3LPE, coal tar enamel, FBE). Full NACE compliance with in-house blasting bays and experienced coating inspectors.",
    icon: PaintRoller,
    specs: [
      "SSPC-SP10 / SA2.5 surface preparation",
      "Epoxy, PU, and IZ coating systems",
      "3LPE, CTE, FBE underground coating",
      "DFT & holiday testing",
      "NACE Level II inspectors on staff",
    ],
    clients: ["IOCL", "GAIL", "ONGC"],
    image: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "64px" }}>
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
              — Our Services
            </div>
            <h1
              className="text-5xl md:text-7xl font-black tracking-tighter"
              style={{ color: "var(--fg)", maxWidth: "800px" }}
            >
              Core
              <span style={{ color: "var(--accent)", marginLeft: "0.25em" }}>Capabilities</span>
            </h1>
            <p className="mt-6 text-lg font-medium max-w-2xl" style={{ color: "var(--fg-secondary)" }}>
              From raw steel to commissioned plant. Six integrated service verticals serving India&apos;s core sector refineries and petrochemical complexes — with 25+ years of field-proven execution.
            </p>

            {/* Quick stats */}
            <div className="flex gap-0 mt-10" style={{ maxWidth: "600px" }}>
              {[
                { val: "API-650", label: "Tank Standard" },
                { val: "ASME B31.3", label: "Piping Code" },
                { val: "IBR", label: "Boiler Certified" },
                { val: "SSPC-SP10", label: "Blast Standard" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="flex-1 py-5 px-4"
                  style={{
                    border: "1px solid var(--border-light)",
                    borderRight: i < 3 ? "none" : undefined,
                    background: i % 2 === 0 ? "var(--bg)" : "var(--bg-secondary)",
                  }}
                >
                  <div
                    className="font-black text-base"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-geist-mono)" }}
                  >
                    {s.val}
                  </div>
                  <div className="mono-label mt-1" style={{ letterSpacing: "0.1em", color: "var(--fg-muted)", fontSize: "8px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services List */}
        <div style={{ background: "var(--bg-secondary)" }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                style={{
                  borderBottom: "2px solid var(--border-light)",
                  background: isEven ? "var(--bg)" : "var(--bg-secondary)",
                }}
              >
                <div
                  className="container mx-auto px-6 lg:px-12 py-16 lg:py-20"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "64px",
                    alignItems: "start",
                  }}
                >
                  {/* Left: Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        style={{
                          padding: "16px",
                          border: "3px solid var(--border)",
                          background: "var(--bg)",
                        }}
                      >
                        <Icon className="w-8 h-8" strokeWidth={1.5} style={{ color: "var(--fg)" }} />
                      </div>
                      <div>
                        <div className="mono-label" style={{ letterSpacing: "0.2em", color: "var(--accent)" }}>
                          {service.subtitle}
                        </div>
                        <h2
                          className="text-4xl font-black tracking-tight mt-1"
                          style={{ color: "var(--fg)" }}
                        >
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base font-medium leading-relaxed mb-8" style={{ color: "var(--fg-secondary)" }}>
                      {service.description}
                    </p>

                    {/* Specs */}
                    <div className="space-y-3 mb-8">
                      {service.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" strokeWidth={2} style={{ color: "var(--success)" }} />
                          <span className="text-sm font-medium" style={{ color: "var(--fg-secondary)" }}>
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Clients */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="mono-label" style={{ letterSpacing: "0.15em", color: "var(--fg-muted)" }}>
                        Trusted by:
                      </span>
                      {service.clients.map((c) => (
                        <div
                          key={c}
                          className="mono-label px-3 py-1"
                          style={{
                            border: "1px solid var(--border-light)",
                            color: "var(--fg-muted)",
                            fontSize: "9px",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Visual Panel */}
                  <div
                    style={{
                      border: "2px solid var(--border)",
                      background: "var(--bg)",
                      padding: "48px",
                      position: "relative",
                      minHeight: "360px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    {/* Accent corner */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "40px",
                        height: "40px",
                        borderTop: "3px solid var(--accent)",
                        borderRight: "3px solid var(--accent)",
                      }}
                    />

                    {/* Service number */}
                    <div
                      className="mono-label absolute top-6 left-6"
                      style={{ color: "var(--border-light)", fontSize: "64px", fontFamily: "var(--font-geist-mono)", lineHeight: 1 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Stat highlight */}
                    <div style={{ borderTop: "2px solid var(--border-light)", paddingTop: "24px" }}>
                      <div className="mono-label mb-3" style={{ letterSpacing: "0.2em", color: "var(--fg-muted)" }}>
                        Key Capability
                      </div>
                      <div className="text-3xl font-black" style={{ color: "var(--fg)", fontFamily: "var(--font-geist-mono)" }}>
                        {service.specs[0]}
                      </div>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-black uppercase tracking-[0.15em]"
                        style={{
                          color: "var(--accent)",
                          textDecoration: "none",
                          borderBottom: "2px solid var(--accent)",
                          paddingBottom: "2px",
                          transition: "opacity 0.15s",
                        }}
                      >
                        Request a Bid
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
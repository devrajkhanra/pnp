"use client";

import { MapPin, Phone, Mail, Factory, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";

const serviceLinks = [
  "Oil Storage Tanks (API-650/620)",
  "Industrial Piping (IBR/Non-IBR)",
  "Structural Engineering",
  "Mechanical Equipment Installation",
  "Shutdown & Turnaround (TAR)",
  "Surface Treatment & Coating",
];

const quickLinks = [
  "About PNP Engineering",
  "Our Client Portfolio",
  "Safety Standards",
  "Careers",
  "News & Updates",
];

const complianceData = [
  { label: "Tank Standards", value: "API-650 / 620" },
  { label: "Piping Standards", value: "ASME B31.3" },
  { label: "Boiler Compliance", value: "IBR Certified" },
  { label: "Materials", value: "CS · SS · P5–P11" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      {/* Safety stripe */}
      <div className="safety-stripe-bar" />

      <div className="container mx-auto px-6 lg:px-12" style={{ paddingTop: "72px", paddingBottom: "40px" }}>
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "0",
            borderBottom: "1px solid var(--border-light)",
            paddingBottom: "56px",
            marginBottom: "32px",
          }}
        >
          {/* Brand */}
          <div style={{ paddingRight: "48px" }}>
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  padding: "10px",
                  border: "2px solid var(--accent)",
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Factory
                  className="w-6 h-6"
                  strokeWidth={2.5}
                  style={{ color: "var(--accent-fg)" }}
                />
              </div>
              <div>
                <div
                  className="font-black text-xl tracking-tight uppercase leading-none"
                  style={{ color: "var(--fg)" }}
                >
                  PNP{" "}
                  <span style={{ color: "var(--accent)" }}>Engineering</span>
                </div>
                <div
                  className="mono-label mt-1"
                  style={{ letterSpacing: "0.15em", color: "var(--fg-muted)" }}
                >
                  Works (P) Ltd
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--fg-secondary)", maxWidth: "280px" }}
            >
              Established 1998. West Bengal&apos;s premier heavy mechanical
              contractor serving India&apos;s core sector refineries from our
              base 14km from Haldia Refinery on NH-41.
            </p>

            {/* Workforce stats */}
            <div className="mb-6 flex gap-0">
              {[
                { val: "982+", label: "Workforce" },
                { val: "170+", label: "Engineers" },
                { val: "25+", label: "Years" },
              ].map((s, i) => (
                <div key={s.label} className={`stat-block ${i === 0 ? "accent" : ""}`}>
                  <div className="stat-val">{s.val}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <ThemeSwitcher />
          </div>

          {/* Services */}
          <div>
            <div
              className="mono-label mb-6"
              style={{ color: "var(--fg)", letterSpacing: "0.25em" }}
            >
              — Services
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {serviceLinks.map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm group cursor-pointer"
                    style={{ color: "var(--fg-secondary)", transition: "color 0.15s" }}
                  >
                    <span
                      className="mono-label"
                      style={{
                        color: "var(--accent)",
                        fontSize: "14px",
                        lineHeight: 1,
                        transition: "transform 0.15s",
                      }}
                    >
                      ›
                    </span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div
              className="mono-label mb-6"
              style={{ color: "var(--fg)", letterSpacing: "0.25em" }}
            >
              — Company
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm group cursor-pointer"
                    style={{ color: "var(--fg-secondary)", transition: "color 0.15s" }}
                  >
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut",
                      }}
                      style={{ color: "var(--fg-muted)", lineHeight: 1 }}
                    >
                      <ChevronRight className="w-3 h-3" strokeWidth={2} />
                    </motion.div>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              className="mono-label mb-6"
              style={{ color: "var(--fg)", letterSpacing: "0.25em" }}
            >
              — Contact Us
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  style={{
                    padding: "10px",
                    border: "2px solid var(--border-light)",
                    background: "var(--bg)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone
                    className="w-4 h-4"
                    strokeWidth={2}
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <div>
                  <div
                    className="text-sm font-black mb-1"
                    style={{ color: "var(--fg)", letterSpacing: "0.05em" }}
                  >
                    03224-645809
                  </div>
                  <div className="text-sm font-medium" style={{ color: "var(--fg-secondary)" }}>
                    +91 96799 99137
                  </div>
                  <div className="text-sm font-medium" style={{ color: "var(--fg-secondary)" }}>
                    +91 94340 28137
                  </div>
                  {/* Dispatch status */}
                  <div
                    className="mt-2 flex items-center gap-2"
                    style={{
                      border: "1px solid var(--success)",
                      padding: "4px 8px",
                      width: "fit-content",
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      style={{
                        width: 6,
                        height: 6,
                        background: "var(--success)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="mono-label"
                      style={{ color: "var(--success)", letterSpacing: "0.1em", fontSize: "8px" }}
                    >
                      Dispatch Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  style={{
                    padding: "10px",
                    border: "2px solid var(--border-light)",
                    background: "var(--bg)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail
                    className="w-4 h-4"
                    strokeWidth={2}
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <a
                    href="mailto:pnp@yahoo.co.in"
                    className="text-sm font-medium hover:underline"
                    style={{ color: "var(--fg-secondary)", cursor: "pointer" }}
                  >
                    pnp@yahoo.co.in
                  </a>
                  <a
                    href="mailto:scpanja@yahoo.co.in"
                    className="text-sm font-medium hover:underline"
                    style={{ color: "var(--fg-secondary)", cursor: "pointer" }}
                  >
                    scpanja@yahoo.co.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  style={{
                    padding: "10px",
                    border: "2px solid var(--border-light)",
                    background: "var(--bg)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin
                    className="w-4 h-4"
                    strokeWidth={2}
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
                    Vill. Barsundra, PO Iswardaha
                    <br />
                    Dist. Purba Medinipur
                    <br />
                    West Bengal — 721654
                  </div>
                  <div
                    className="mono-label mt-2"
                    style={{ color: "var(--fg-muted)", letterSpacing: "0.1em", fontSize: "8px" }}
                  >
                    14km from Haldia Refinery, NH-41
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div
                  style={{
                    padding: "10px",
                    border: "2px solid var(--border-light)",
                    background: "var(--bg)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Clock
                    className="w-4 h-4"
                    strokeWidth={2}
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: "var(--fg-secondary)" }}>
                    Mon–Sat: 8:00 AM – 6:00 PM
                  </div>
                  <div
                    className="mono-label mt-1"
                    style={{ color: "var(--accent)", letterSpacing: "0.1em", fontSize: "8px" }}
                  >
                    Emergency dispatch: 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            paddingTop: "24px",
          }}
        >
          {/* Compliance badges */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {complianceData.map((c) => (
              <div
                key={c.label}
                className="construction-card px-4 py-3 text-center"
              >
                <div className="mono-label mb-1" style={{ color: "var(--fg-muted)", letterSpacing: "0.1em", fontSize: "7px" }}>
                  {c.label}
                </div>
                <div
                  className="font-black tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "10px",
                    color: "var(--accent)",
                  }}
                >
                  {c.value}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background:
                "repeating-linear-gradient(90deg, var(--border-light) 0px, var(--border-light) 4px, transparent 4px, transparent 8px)",
            }}
          />

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              width: "100%",
            }}
          >
            <div
              className="mono-label flex flex-col sm:flex-row items-center gap-1 sm:gap-3"
              style={{ color: "var(--fg-muted)", letterSpacing: "0.1em" }}
            >
              <span>
                © {new Date().getFullYear()} PNP Engineering Works (P) Ltd.
              </span>
              <span style={{ color: "var(--border-light)" }}>|</span>
              <span>All rights reserved.</span>
              <span style={{ color: "var(--border-light)" }}>|</span>
              <span>
                ISO 9001:2015 Certified · IBR Licensed · API Compliant
              </span>
            </div>

            <div className="flex gap-8 flex-wrap justify-center">
              {["Privacy Policy", "Terms of Use", "Sitemap", "Quality Policy"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="mono-label cursor-pointer hover:underline"
                    style={{ color: "var(--fg-muted)", letterSpacing: "0.15em" }}
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
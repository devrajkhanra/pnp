"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "IOCL",        full: "Indian Oil Corporation Ltd.",                    logo: "/logo-iocl.jpg",     height: "h-16 md:h-24" },
  { name: "HPL",         full: "Haldia Petrochemicals Ltd.",                      logo: "/logo-hpl.png",      height: "h-12 md:h-20" },
  { name: "Adani",       full: "Adani Ports & SEZ — Haldia Terminal",            logo: "/logo-adani.jpg",    height: "h-12 md:h-18" },
  { name: "Reliance",    full: "Reliance Industries Ltd.",                       logo: "/logo-reliance.png", height: "h-12 md:h-20" },
  { name: "CPT",         full: "Syama Prasad Mookerjee Port, Kolkata",             logo: "/logo-cpt.png",      height: "h-16 md:h-24" },
];

const ticker = [
  "API-650 Certified",
  "IBR Licensed Contractor",
  "ISO 9001:2015",
  "ASME B31.3 Compliant",
  "25+ Years Experience",
  "982+ Workforce",
  "Haldia Refinery Partner",
  "Core Sector Specialists",
];

export function TrustBanner() {
  return (
    <section
      style={{
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <div className="container mx-auto px-6 lg:px-12 pt-8 pb-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mono-label text-center"
          style={{ letterSpacing: "0.3em" }}
        >
          Trusted by India&apos;s Leading Industrial Organisations
        </motion.p>
      </div>

      {/* Logos */}
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group cursor-pointer px-6 py-4"
              style={{ position: "relative" }}
            >
              {/* Top accent on hover */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "16px",
                  right: "16px",
                  height: "2px",
                  background: "var(--accent)",
                  transform: "scaleX(0)",
                  transition: "transform 0.2s",
                }}
                className="group-hover:scale-x-100"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.logo}
                alt={c.name}
                title={c.full}
                className={`${c.height} w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div
        style={{
          borderTop: "1px solid var(--border-light)",
          overflow: "hidden",
          padding: "12px 0",
          background: "var(--bg)",
        }}
      >
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, ri) =>
            ticker.map((tag) => (
              <span
                key={`${ri}-${tag}`}
                className="mono-label flex items-center gap-8"
                style={{ letterSpacing: "0.15em", color: "var(--fg-muted)", fontSize: "9px" }}
              >
                {tag}
                <span style={{ color: "var(--accent)" }}>◆</span>
              </span>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
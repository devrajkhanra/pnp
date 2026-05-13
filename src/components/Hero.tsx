"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ShieldAlert, ArrowRight } from "lucide-react";

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: "1998", label: "Year Founded" },
  { value: "982+", label: "Workforce" },
  { value: "79m", label: "Largest Tank" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-light)" }}
    >
      {/* Background Image — full brightness, no washed-out overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-welder.png"
          alt="Industrial welder working on structural steel in a refinery"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay - stronger gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.5) 100%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        {/* Top vignette to anchor into header */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 30%)",
          }}
        />
      </div>

      {/* Construction grid — subtle over image */}
      <div className="absolute inset-0 z-[1] grid-pattern" style={{ opacity: 0.08 }} />

      {/* Safety stripe bottom */}
      <div className="safety-stripe-bar absolute bottom-0 left-0 right-0 z-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 pt-12 pb-24">
        <motion.div
          className="max-w-3xl flex flex-col gap-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          {/* Headline — gradient text in all modes */}
          <motion.h1
            variants={slideUp}
            className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95]"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="hero-gradient">Precision in</span>{" "}
            <span style={{ color: "#ffffff", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}>Fabrication.</span>
            <br />
            <span className="hero-gradient-2">Strength in</span>{" "}
            <span style={{ color: "#ffffff", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}>Erection.</span>
          </motion.h1>

          {/* Sub-copy — glass panel */}
          <motion.p
            variants={slideUp}
            className="text-lg md:text-xl font-medium leading-relaxed max-w-xl"
            style={{
              color: "#f0efe9",
              background: "rgba(17,17,16,0.7)",
              padding: "14px 18px",
              borderLeft: "3px solid var(--accent)",
              backdropFilter: "blur(8px)",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            West Bengal&apos;s trusted heavy industrial contractor since 1998 —
            specialising in API-650 storage tanks, IBR piping, structural erection,
            mechanical equipment installation, and plant shutdowns for India&apos;s core
            sector refineries.
          </motion.p>

          {/* Stats */}
          <motion.div variants={slideUp} className="flex gap-0 flex-wrap">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`stat-block ${i === 0 ? "accent" : ""}`}
                style={i !== 0 ? { background: "rgba(17,17,16,0.6)", backdropFilter: "blur(8px)", borderLeft: "1px solid rgba(255,255,255,0.1)" } : {}}
              >
                <div className="stat-val" style={i !== 0 ? { color: "#ffffff" } : {}}>{stat.value}</div>
                <div className="stat-label" style={i !== 0 ? { color: "rgba(240,239,233,0.7)" } : {}}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">
              <ShieldAlert className="w-4 h-4" strokeWidth={2.5} />
              24/7 Emergency Dispatch
            </Link>
            <Link href="/services" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#f0efe9" }}>
              View Our Capabilities
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </motion.div>
            </Link>
          </motion.div>

          {/* Bottom tagline — glass pill */}
          <motion.p
            variants={slideUp}
            className="mono-label"
            style={{
              color: "#f0efe9",
              letterSpacing: "0.15em",
              fontSize: "8px",
              background: "rgba(17,17,16,0.6)",
              padding: "6px 14px",
              width: "fit-content",
              backdropFilter: "blur(8px)",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            API-650 · IBR Licensed · ASME B31.3 · ISO 9001:2015
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
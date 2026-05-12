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
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-welder.png"
          alt="Industrial welder working on structural steel in a refinery"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(17,17,16,0.92) 0%, rgba(17,17,16,0.75) 50%, rgba(17,17,16,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(17,17,16,0.95) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 grid-pattern" style={{ opacity: 0.06 }} />

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


          {/* Headline */}
          <motion.h1
            variants={slideUp}
            className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95]"
            style={{ color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            Precision in{" "}
            <span style={{ color: "var(--accent)" }}>Fabrication.</span>
            <br />
            Strength in Erection.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={slideUp}
            className="text-lg md:text-xl font-medium leading-relaxed max-w-xl"
            style={{ color: "var(--fg-secondary)" }}
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
              >
                <div className="stat-val">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">
              <ShieldAlert className="w-4 h-4" strokeWidth={2.5} />
              24/7 Emergency Dispatch
            </Link>
            <Link href="/services" className="btn-outline">
              View Our Capabilities
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </motion.div>
            </Link>
          </motion.div>

          {/* Bottom tagline */}
          <motion.p
            variants={slideUp}
            className="mono-label"
            style={{ color: "var(--fg-muted)", letterSpacing: "0.15em", fontSize: "8px" }}
          >
            API-650 · IBR Licensed · ASME B31.3 · ISO 9001:2015
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
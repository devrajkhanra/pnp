"use client";

import Image from "next/image";
import { ArrowRight, ShieldAlert } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-slate-950 overflow-hidden flex items-center selection:bg-yellow-400 selection:text-slate-900">

      {/* Cinematic AI Background — fills the full viewport */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-welder.png"
          alt="Industrial welder working on structural steel in a refinery"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Warm ember vignette to ground the image edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_70%_50%,_transparent_30%,_#020617_100%)]" />
        {/* Left-to-right darkness ramp so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        {/* Subtle bottom shadow to anchor the section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-32">
        <div className="max-w-2xl flex flex-col gap-7">

          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 px-4 py-1.5 rounded-full w-fit backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">
              Est. 1998 · West Bengal · Haldia Region
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.05]">
            Precision in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500">
              Fabrication.
            </span>
            <br />
            Strength in Erection.
          </h1>

          {/* Sub-copy */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl font-light">
            West Bengal&apos;s trusted heavy industrial contractor since 1998 — 
            specialising in API-650 storage tanks, IBR piping, structural erection,
            mechanical equipment installation, and sophisticated plant shutdowns
            for India&apos;s core sector refineries.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 pt-2">
            {[
              { value: "1998", label: "Year Established" },
              { value: "982+", label: "Workforce Strength" },
              { value: "79m", label: "Largest Tank Diameter" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-black text-yellow-400">{stat.value}</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="group flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-wider text-slate-900 transition-all hover:bg-yellow-300 active:scale-[0.98] shadow-lg shadow-yellow-500/30">
              <ShieldAlert className="h-5 w-5" />
              24/7 Emergency Dispatch
            </button>
            <button className="group flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 active:scale-[0.98]">
              Request a Bid
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}

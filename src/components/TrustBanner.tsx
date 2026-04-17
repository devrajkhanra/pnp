export function TrustBanner() {
  const clients = [
    { name: "IOCL",        full: "Indian Oil Corporation Ltd.",                                        logo: "/logo-iocl.jpg",     h: "h-32" },
    { name: "HPL",         full: "Haldia Petrochemicals Ltd.",                                         logo: "/logo-hpl.png",      h: "h-24" },
    { name: "Adani Group", full: "Adani Ports & SEZ — Haldia Terminal (formerly Calcutta Port Trust)", logo: "/logo-adani.jpg",    h: "h-20"  },
    { name: "Reliance",    full: "Reliance Industries Ltd.",                                           logo: "/logo-reliance.png", h: "h-24" },
    { name: "CPT",         full: "Syama Prasad Mookerjee Port, Kolkata — Haldia Dock",                logo: "/logo-cpt.png",      h: "h-32" },
  ];

  return (
    <section className="w-full bg-white border-y border-slate-200 py-10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, #000 20px, #000 40px)" }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-16 flex flex-col items-center gap-6">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
          Trusted by India&apos;s Leading Industrial Organisations
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {clients.map((c) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={c.name}
              src={c.logo}
              alt={c.name}
              title={c.full}
              className={`${c.h} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

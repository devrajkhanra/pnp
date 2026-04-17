import { MapPin, Phone, Mail, Factory } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-yellow-400 rounded-xl shadow-sm">
                <Factory className="w-6 h-6 text-slate-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 tracking-tighter uppercase leading-none mt-1">
                  PNP <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">Engineering</span>
                </span>
                <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest mt-1">Works (P) Ltd</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-medium pr-4">
              Established in 1998, PNP Engineering Works is a leading heavy mechanical contractor based in West Bengal, specialising in API storage tanks, IBR piping, structural erection, and plant shutdown services for India&apos;s core sector refineries.
            </p>
            <p className="text-xs text-slate-400 font-medium">
              ~982 employees · 170+ Engineers & Site Staff · 250+ Skilled Workmen
            </p>
          </div>

          {/* Service Centres */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-2 text-slate-900 font-bold tracking-widest uppercase text-[11px]">
              <span className="w-4 h-px bg-yellow-500"></span> Service Centres
            </h4>
            <ul className="space-y-4">
              {[
                "Oil Storage Tanks (API-650/620)",
                "Industrial Piping (IBR/Non-IBR)",
                "Structural Engineering",
                "Mechanical Equipment Installation",
                "Shutdown & Turnaround (TAR)",
                "Surface Treatment & Coating",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-sm text-slate-600 hover:text-yellow-700 transition-colors font-medium">
                    <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-xs mr-2">»</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-2 text-slate-900 font-bold tracking-widest uppercase text-[11px]">
              <span className="w-4 h-px bg-yellow-500"></span> Standards &amp; Compliance
            </h4>
            <div className="space-y-3">
              {[
                { label: "Tank Standards", value: "API-650 / API-620" },
                { label: "Piping Standards", value: "ASME B31.3 / B31.1" },
                { label: "Boiler Compliance", value: "IBR Certified" },
                { label: "Materials", value: "CS · SS · P5 · P9 · P11" },
              ].map((item) => (
                <div key={item.label} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:border-yellow-400 transition-colors">
                  <p className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.2em] leading-none mb-1.5">{item.label}</p>
                  <p className="text-slate-900 font-mono text-xs tracking-widest font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-2 text-slate-900 font-bold tracking-widest uppercase text-[11px]">
              <span className="w-4 h-px bg-yellow-500"></span> Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm mt-0.5">
                  <Phone className="w-4 h-4 text-red-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-900 text-sm font-black tracking-wider">03224-645809</span>
                  <span className="text-slate-600 text-sm font-medium">+91 96799 99137</span>
                  <span className="text-slate-600 text-sm font-medium">+91 94340 28137</span>
                  <span className="text-[10px] text-red-600 uppercase font-bold tracking-widest flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> Available for Dispatch
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <Mail className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors cursor-pointer">pnp@yahoo.co.in</span>
                  <span className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors cursor-pointer">scpanja@yahoo.co.in</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm mt-0.5">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="text-slate-600 text-sm font-medium leading-loose">
                  Vill. Barsundra, PO Iswardaha<br />
                  Dist. Purba Medinipur<br />
                  West Bengal — 721654<br />
                  <span className="text-[10px] text-slate-400">(14km from Haldia Refinery, NH-41)</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-slate-500 font-bold tracking-wider uppercase flex flex-col sm:flex-row sm:items-center gap-2">
            <span>© {new Date().getFullYear()} PNP Engineering Works (P) Ltd.</span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="text-slate-400">All rights reserved.</span>
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-slate-500 font-bold uppercase tracking-wider hover:text-yellow-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-slate-500 font-bold uppercase tracking-wider hover:text-yellow-600 transition-colors">Terms of Use</a>
            <a href="#" className="text-[10px] text-slate-500 font-bold uppercase tracking-wider hover:text-yellow-600 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Droplets, GitBranch, Layers, Settings2, Zap, PaintRoller, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Oil Storage Tanks",
    description: "Complete construction, erection & commissioning of API-650 / API-620 tanks — cone roof, dome roof, and floating roof designs up to 79m diameter. Serving Haldia Refinery and major terminals.",
    icon: Droplets,
    tag: "API-650",
  },
  {
    title: "Industrial Piping",
    description: "Fabrication & erection of IBR and non-IBR piping systems using Carbon Steel, Stainless Steel, and Alloy Steel (P5, P9, P11). High-pressure process lines engineered to ASME B31.3/B31.1.",
    icon: GitBranch,
    tag: "IBR / Non-IBR",
  },
  {
    title: "Structural Engineering",
    description: "Pipe racks, technological platforms, heater panels, and structural columns for refineries and petrochemical complexes. Precision-fit fabrication and site erection.",
    icon: Layers,
    tag: "Structural",
  },
  {
    title: "Mechanical Equipment",
    description: "Precision installation of static and rotary equipment — hydrogen reformers, CDU/VDU/DCU heaters, heat exchangers, columns, and compressors — aligned to OEM specifications.",
    icon: Settings2,
    tag: "Equipment",
  },
  {
    title: "Shutdown & Turnaround",
    description: "Sophisticated plant shutdown, maintenance, and restart operations executed with minimal downtime. Our dedicated TAR teams deliver rapid, zero-punch-list turnarounds for core sector plants.",
    icon: Zap,
    tag: "TAR / Shutdown",
  },
  {
    title: "Surface Treatment",
    description: "Abrasive blasting, industrial painting, and underground piping wrap & coating services. Comprehensive corrosion protection systems meeting refinery specifications.",
    icon: PaintRoller,
    tag: "Maintenance",
  },
];

export function Services() {
  return (
    <section className="bg-slate-50 py-24 w-full relative border-t border-slate-200">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-30 mix-blend-multiply z-0 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-yellow-500"></span>
              <span className="text-sm font-bold text-yellow-600 uppercase tracking-widest">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-600">Capabilities</span>
            </h2>
            <p className="mt-6 text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
              From raw steel to commissioned plant — PNP Engineering Works has been executing complex heavy mechanical contracts in Haldia and across West Bengal since 1998, with a 982-strong workforce.
            </p>
          </div>

          <button className="hidden lg:flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-bold uppercase tracking-widest text-sm transition-colors group px-4 py-2 border border-transparent hover:border-yellow-300 rounded-lg">
            View Capability Statement
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-500 hover:shadow-xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-yellow-400 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10"></div>

                <div className="relative mb-6 inline-flex items-center gap-2">
                  <div className="inline-flex p-4 rounded-xl bg-slate-50 text-slate-500 border border-slate-200 group-hover:bg-yellow-100 group-hover:text-yellow-600 transition-all duration-300 z-10">
                    <Icon className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-200 px-2 py-1 rounded-full">{service.tag}</span>
                </div>

                <h3 className="relative text-xl font-bold text-slate-900 mb-4 transition-colors z-10 tracking-tight">
                  {service.title}
                </h3>

                <p className="relative text-slate-600 text-sm leading-relaxed z-10 min-h-[80px]">
                  {service.description}
                </p>

                <div className="relative mt-8 pt-6 border-t border-slate-100 flex items-center text-sm font-bold text-yellow-600 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <span className="tracking-wide uppercase text-xs">Explore solution</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

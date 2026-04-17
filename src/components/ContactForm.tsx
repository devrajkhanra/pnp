"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { UploadCloud, Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  companyName: z.string().min(2, "Company Name is required"),
  phone: z.string().min(10, "Valid Phone Number is required (min 10 digits)"),
  email: z.string().email("Valid Email Address is required"),
  inquiryType: z.enum(["Emergency Breakdown", "New Project Bid", "Maintenance Contract"] as const, {
    errorMap: () => ({ message: "Please select an appropriate inquiry type" }),
  }),
  details: z.string().min(10, "Please provide at least 10 characters of project details"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted successfully:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="bg-white py-24 border-t border-slate-200 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-100/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-yellow-500"></span>
            <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-[0.2em] relative top-px">Partner With Us</span>
            <span className="w-6 h-[2px] bg-yellow-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">Consultation</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg font-medium max-w-2xl mx-auto">
            Deploy our elite engineering expertise on your next major industrial project. Fill out the technical requirement form below.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-xl space-y-8 relative overflow-hidden"
        >
          {isSuccess && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-8 text-center rounded-2xl">
               <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-200">
                 <Send className="text-green-500 w-10 h-10 -ml-1 mt-1 transform -rotate-12" />
               </div>
               <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Request Received</h3>
               <p className="text-slate-600 font-medium max-w-md">Our engineering dispatch team has logged your request and will contact you directly.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            <div className="space-y-2.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Primary Contact Name</label>
              <input 
                {...register("fullName")}
                className={`w-full bg-white border ${errors.fullName ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-yellow-500 focus:ring-yellow-100'} rounded-lg px-4 py-3.5 text-slate-900 font-medium focus:outline-none focus:ring-4 transition-all shadow-sm placeholder:text-slate-400`}
                placeholder="Jane Doe"
              />
              {errors.fullName && <p className="text-red-500 text-xs font-semibold pl-1 mt-1">{errors.fullName.message}</p>}
            </div>
            
            <div className="space-y-2.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Organization / Company</label>
              <input 
                {...register("companyName")}
                className={`w-full bg-white border ${errors.companyName ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-yellow-500 focus:ring-yellow-100'} rounded-lg px-4 py-3.5 text-slate-900 font-medium focus:outline-none focus:ring-4 transition-all shadow-sm placeholder:text-slate-400`}
                placeholder="Acme Industrial Corp."
              />
              {errors.companyName && <p className="text-red-500 text-xs font-semibold pl-1 mt-1">{errors.companyName.message}</p>}
            </div>

            <div className="space-y-2.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Direct Phone Number</label>
              <input 
                {...register("phone")}
                type="tel"
                className={`w-full bg-white border ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-yellow-500 focus:ring-yellow-100'} rounded-lg px-4 py-3.5 text-slate-900 font-medium focus:outline-none focus:ring-4 transition-all shadow-sm placeholder:text-slate-400`}
                placeholder="(555) 123-4567"
              />
              {errors.phone && <p className="text-red-500 text-xs font-semibold pl-1 mt-1">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Email Address</label>
              <input 
                {...register("email")}
                type="email"
                className={`w-full bg-white border ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-yellow-500 focus:ring-yellow-100'} rounded-lg px-4 py-3.5 text-slate-900 font-medium focus:outline-none focus:ring-4 transition-all shadow-sm placeholder:text-slate-400`}
                placeholder="jane@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs font-semibold pl-1 mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Inquiry Type / Priority Classification</label>
            <div className="relative">
              <select 
                {...register("inquiryType")}
                className={`w-full bg-white border ${errors.inquiryType ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-yellow-500 focus:ring-yellow-100'} rounded-lg px-4 py-3.5 text-slate-900 font-medium focus:outline-none focus:ring-4 appearance-none transition-all shadow-sm cursor-pointer`}
              >
                <option value="" disabled hidden>Select an classification parameter...</option>
                <option value="Emergency Breakdown" className="text-red-600 font-bold">⚠️ Critical / Emergency Breakdown</option>
                <option value="New Project Bid" className="text-slate-900">New Project Bid / Estimation</option>
                <option value="Maintenance Contract" className="text-slate-900">Long-term Maintenance Contract</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            {errors.inquiryType && <p className="text-red-500 text-xs font-semibold pl-1 mt-1">{errors.inquiryType.message}</p>}
          </div>

          <div className="space-y-2.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Technical Specs & Requirements</label>
            <textarea 
              {...register("details")}
              rows={5}
              className={`w-full bg-white border ${errors.details ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-yellow-500 focus:ring-yellow-100'} rounded-lg px-4 py-3.5 text-slate-900 font-medium focus:outline-none focus:ring-4 transition-all shadow-sm resize-none placeholder:text-slate-400 leading-relaxed`}
              placeholder="Please describe your hardware requirements, current equipment status, specific tonnage/pressure ratings, or the context of your emergency..."
            />
            {errors.details && <p className="text-red-500 text-xs font-semibold pl-1 mt-1">{errors.details.message}</p>}
          </div>

          <div className="space-y-2.5">
             <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Attach Architecture or CAD Blueprints</label>
             <div className="w-full border-2 border-dashed border-slate-300 bg-white hover:bg-slate-50 hover:border-yellow-400 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group">
               <div className="p-3 bg-slate-100 rounded-full group-hover:bg-yellow-100 mb-4 transition-colors">
                 <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-yellow-600 transition-colors" />
               </div>
               <p className="text-sm text-slate-700 font-bold group-hover:text-yellow-600 transition-colors">Click to upload files or drag and drop</p>
               <p className="text-xs text-slate-500 font-medium mt-1">Accepts PDF, DWG, DXF, or ZIP (Max limit: 50MB)</p>
             </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-black uppercase tracking-[0.15em] text-sm py-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 disabled:cursor-wait mt-4"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing Dispatch...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 -ml-2" />
                Submit Technical Inquiry
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

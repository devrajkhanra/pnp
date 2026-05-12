"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  companyName: z.string().min(2, "Company Name is required"),
  phone: z.string().min(10, "Valid Phone Number is required"),
  email: z.string().email("Valid Email Address is required"),
  inquiryType: z.enum(["Emergency Breakdown", "New Project Bid", "Maintenance Contract"] as const, {
    message: "Please select an inquiry type",
  }),
  details: z.string().min(10, "Please provide at least 10 characters"),
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
    await new Promise((resolve) => setTimeout(resolve, 1800));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 6000);
  };

  return (
    <section
      className="w-full py-24"
      style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-light)" }}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="section-mark justify-center mb-6">Partner With Us</div>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ color: "var(--fg)" }}
          >
            Request a
            <span style={{ color: "var(--accent)", marginLeft: "0.25em" }}>Consultation</span>
          </h2>
          <p className="mt-4 text-base font-medium max-w-2xl mx-auto" style={{ color: "var(--fg-secondary)" }}>
            Deploy our elite engineering expertise on your next major industrial project.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative"
          style={{
            background: "var(--bg)",
            padding: "48px 40px",
            border: "1px solid var(--border-light)",
          }}
        >
          {/* Corner accent marks */}
          <div style={{ position: "absolute", top: 0, left: 0, width: 32, height: 32, borderTop: "3px solid var(--accent)", borderLeft: "3px solid var(--accent)" }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: 32, height: 32, borderTop: "3px solid var(--accent)", borderRight: "3px solid var(--accent)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 32, height: 32, borderBottom: "3px solid var(--accent)", borderLeft: "3px solid var(--accent)" }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 32, height: 32, borderBottom: "3px solid var(--accent)", borderRight: "3px solid var(--accent)" }} />

          {/* Status badge */}
          <div style={{ position: "absolute", top: -1, left: 32 }}>
            <div className="accent-badge" style={{ background: "var(--accent)", color: "var(--accent-fg)", borderColor: "var(--accent)", fontSize: "8px" }}>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{ width: 6, height: 6, background: "#22c55e", flexShrink: 0 }}
              />
              Live Dispatch
            </div>
          </div>

          {/* Success overlay */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center p-12"
                style={{ background: "var(--bg)", border: "1px solid var(--border-light)", zIndex: 10 }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    border: "2px solid var(--success)",
                    background: "var(--bg-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <CheckCircle className="w-10 h-10" strokeWidth={1.5} style={{ color: "var(--success)" }} />
                </div>
                <h3 className="text-3xl font-black tracking-tight mb-3" style={{ color: "var(--fg)" }}>
                  Request Received
                </h3>
                <p className="text-base font-medium max-w-md" style={{ color: "var(--fg-secondary)" }}>
                  Our engineering dispatch team has logged your request and will contact you directly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
            {/* 2-col grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="grid-2col">
              <div className="space-y-2">
                <label className="mono-label">Primary Contact Name</label>
                <input
                  {...register("fullName")}
                  placeholder="Jane Doe"
                  className={`form-input ${errors.fullName ? "error" : ""}`}
                />
                {errors.fullName && (
                  <p className="mono-label flex items-center gap-1" style={{ color: "var(--danger)", fontSize: "9px" }}>
                    <AlertCircle className="w-3 h-3" />{errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="mono-label">Organisation / Company</label>
                <input
                  {...register("companyName")}
                  placeholder="Acme Industrial Corp."
                  className={`form-input ${errors.companyName ? "error" : ""}`}
                />
                {errors.companyName && (
                  <p className="mono-label flex items-center gap-1" style={{ color: "var(--danger)", fontSize: "9px" }}>
                    <AlertCircle className="w-3 h-3" />{errors.companyName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="mono-label">Direct Phone Number</label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={`form-input ${errors.phone ? "error" : ""}`}
                />
                {errors.phone && (
                  <p className="mono-label flex items-center gap-1" style={{ color: "var(--danger)", fontSize: "9px" }}>
                    <AlertCircle className="w-3 h-3" />{errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="mono-label">Email Address</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="jane@company.com"
                  className={`form-input ${errors.email ? "error" : ""}`}
                />
                {errors.email && (
                  <p className="mono-label flex items-center gap-1" style={{ color: "var(--danger)", fontSize: "9px" }}>
                    <AlertCircle className="w-3 h-3" />{errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Select */}
            <div className="space-y-2">
              <label className="mono-label">Inquiry Type</label>
              <select
                {...register("inquiryType")}
                className={`form-input appearance-none cursor-pointer ${errors.inquiryType ? "error" : ""}`}
              >
                <option value="" disabled hidden>Select inquiry type...</option>
                <option value="Emergency Breakdown">⚠ Critical / Emergency Breakdown</option>
                <option value="New Project Bid">New Project Bid / Estimation</option>
                <option value="Maintenance Contract">Long-term Maintenance Contract</option>
              </select>
              {errors.inquiryType && (
                <p className="mono-label flex items-center gap-1" style={{ color: "var(--danger)", fontSize: "9px" }}>
                  <AlertCircle className="w-3 h-3" />{errors.inquiryType.message}
                </p>
              )}
            </div>

            {/* Textarea */}
            <div className="space-y-2">
              <label className="mono-label">Technical Specs &amp; Requirements</label>
              <textarea
                {...register("details")}
                rows={5}
                placeholder="Describe your hardware requirements, tonnage/pressure ratings, or emergency context..."
                className={`form-input resize-none ${errors.details ? "error" : ""}`}
              />
              {errors.details && (
                <p className="mono-label flex items-center gap-1" style={{ color: "var(--danger)", fontSize: "9px" }}>
                  <AlertCircle className="w-3 h-3" />{errors.details.message}
                </p>
              )}
            </div>

            {/* File upload */}
            <div className="space-y-2">
              <label className="mono-label">Attach Architecture or CAD Blueprints</label>
              <div
                className="w-full flex flex-col items-center justify-center py-10 cursor-pointer"
                style={{
                  border: "1px dashed var(--border-light)",
                  background: "var(--bg-secondary)",
                  transition: "border-color 0.12s, background 0.12s",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    marginBottom: "12px",
                    border: "1px solid var(--border-light)",
                    background: "var(--bg)",
                  }}
                >
                  <UploadCloud className="w-5 h-5" strokeWidth={1.5} style={{ color: "var(--fg-muted)" }} />
                </div>
                <p className="text-sm font-bold" style={{ color: "var(--fg)" }}>Click to upload or drag and drop</p>
                <p className="mono-label mt-2" style={{ letterSpacing: "0.08em", fontSize: "9px" }}>PDF, DWG, DXF, ZIP (Max: 50MB)</p>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.01 } : {}}
              whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              className="btn-primary w-full justify-center"
              style={{ padding: "16px", fontSize: "11px", opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                    <Loader2 className="w-5 h-5" strokeWidth={2} />
                  </motion.div>
                  Processing Dispatch...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 -ml-1" strokeWidth={2} />
                  Submit Technical Inquiry
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .grid-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
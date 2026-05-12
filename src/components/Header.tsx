"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Factory,
  Wrench,
  Users,
  ShieldCheck,
  Mail,
} from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navItems = [
  {
    label: "Services",
    href: "/services",
    sub: [
      { label: "Storage Tanks (API-650)", href: "/services#oil-storage-tanks", tag: "API-650" },
      { label: "Industrial Piping", href: "/services#piping", tag: "IBR / Non-IBR" },
      { label: "Structural Engineering", href: "/services#structural", tag: "Structural" },
      { label: "Mechanical Equipment", href: "/services#equipment", tag: "Equipment" },
      { label: "Shutdown & Turnaround", href: "/services#tar", tag: "TAR" },
      { label: "Surface Treatment", href: "/services#surface", tag: "Coating" },
      { label: "Civil Works", href: "/services#civil", tag: "Civil" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Safety", href: "/safety" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      {/* Header — white in light mode, dark gradient in dark mode */}
      <header
        className="site-header"
        style={{
          background: "var(--bg)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        {/* Subtle accent line at top */}
        <div style={{ height: "3px", background: "var(--accent)" }} />

        <div
          className="container mx-auto px-6 lg:px-12 site-header-inner"
          style={{ gap: "32px" }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Factory className="w-5 h-5" strokeWidth={2.5} style={{ color: "var(--accent-fg)" }} />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: "16px",
                  letterSpacing: "-0.01em",
                  color: "var(--fg)",
                  lineHeight: 1,
                }}
              >
                PNP ENGINEERING WORKS
              </div>
              <div className="mono-label" style={{ fontSize: "12px", letterSpacing: "0.15em", marginTop: "2px", color: "var(--fg-muted)" }}>
                Pvt Ltd
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex"
            style={{ flex: 1, alignItems: "center", gap: "4px" }}
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.sub && setActiveDropdown(item.label)}
                onMouseLeave={() => item.sub && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "8px 16px",
                    color: isActive(item.href) ? "var(--accent)" : "var(--fg-secondary)",
                  }}
                >
                  {item.label}
                  {item.sub && (
                    <ChevronDown
                      className="w-3 h-3"
                      strokeWidth={2.5}
                      style={{
                        transition: "transform 0.2s",
                        transform: activeDropdown === item.label ? "rotate(180deg)" : "",
                        color: isActive(item.href) ? "var(--accent)" : "var(--fg-secondary)",
                      }}
                    />
                  )}
                </Link>

                {item.sub && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.12 }}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 1px)",
                          left: 0,
                          minWidth: "260px",
                          background: "var(--bg)",
                          border: "1px solid var(--border-light)",
                          borderTop: "2px solid var(--accent)",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                          zIndex: 200,
                          padding: "8px 0",
                        }}
                      >
                        {item.sub.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              padding: "10px 16px",
                              fontSize: "14px",
                              fontWeight: 500,
                              color: "var(--fg)",
                              textDecoration: "none",
                              borderBottom: "1px solid var(--border-subtle)",
                              transition: "all 0.12s",
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--fg)" }}>
                                {s.label}
                              </div>
                            </div>
                            <div
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                fontFamily: "var(--font-geist-mono), monospace",
                                fontSize: "10px",
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                padding: "4px 10px",
                                background: "var(--accent-subtle)",
                                color: "var(--accent)",
                                border: "1px solid rgba(58,133,126,0.25)",
                                marginLeft: "auto",
                              }}
                            >
                              {s.tag}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right: CTA + Theme + Mobile */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeSwitcher />

            <Link href="/contact" className="btn-primary" style={{ fontSize: "9px", padding: "10px 20px" }}>
              <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden"
            style={{
              padding: "8px",
              background: menuOpen ? "#4ade80" : "rgba(13,40,24,0.8)",
              border: "1px solid var(--border-light)",
              cursor: "pointer",
              transition: "background 0.12s",
              marginLeft: "auto",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" strokeWidth={2} style={{ color: "#0d2818" }} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2} style={{ color: "#a5d6a7" }} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 150,
              background: "var(--bg)",
              borderLeft: "3px solid var(--accent)",
              overflowY: "auto",
              padding: "80px 24px 40px",
            }}
          >
            {/* Mobile nav items */}
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px 0",
                    borderBottom: "1px solid var(--border-light)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "var(--accent-subtle)",
                      border: "1px solid rgba(58,133,126,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.label === "Services" && <Wrench className="w-5 h-5" strokeWidth={1.5} style={{ color: "var(--accent)" }} />}
                    {item.label === "Clients" && <Users className="w-5 h-5" strokeWidth={1.5} style={{ color: "var(--accent)" }} />}
                    {item.label === "About" && <Factory className="w-5 h-5" strokeWidth={1.5} style={{ color: "var(--accent)" }} />}
                    {item.label === "Safety" && <ShieldCheck className="w-5 h-5" strokeWidth={1.5} style={{ color: "var(--accent)" }} />}
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--fg)", letterSpacing: "-0.01em" }}>{item.label}</div>
                    {item.sub && (
                      <div style={{ fontSize: "12px", fontWeight: 500, color: "var(--fg-muted)", marginTop: "4px" }}>
                        {item.sub.length} capabilities
                      </div>
                    )}
                  </div>
                </Link>

                {item.sub && (
                  <div style={{ paddingLeft: "60px", paddingBottom: "12px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "var(--fg-secondary)",
                          padding: "4px 10px",
                          border: "1px solid var(--border-light)",
                          textDecoration: "none",
                          background: "var(--bg-secondary)",
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Mobile CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--border-light)" }}
            >
              <Link href="/contact" className="btn-primary" style={{ justifyContent: "center" }}>
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Request a Quote
              </Link>
              <a href="mailto:pnp@yahoo.co.in" className="btn-outline" style={{ justifyContent: "center" }}>
                <Mail className="w-4 h-4" strokeWidth={2} />
                Email Us
              </a>
            </motion.div>

            {/* Mobile theme */}
            <div style={{ marginTop: "24px", display: "flex", justifyContent: "center" }}>
              <ThemeSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
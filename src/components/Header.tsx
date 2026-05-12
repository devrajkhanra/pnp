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
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Safety", href: "/safety" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      {/* Header */}
      <header
        className={`site-header ${scrolled ? "scrolled" : ""}`}
        style={{
          background: scrolled ? undefined : "transparent",
          borderBottom: scrolled ? "1px solid var(--border-light)" : "none",
        }}
      >
        <div className="safety-stripe-bar" />

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
                  fontSize: "14px",
                  letterSpacing: "-0.01em",
                  color: "var(--fg)",
                  lineHeight: 1,
                }}
              >
                PNP Engineering Works
              </div>
              <div className="mono-label" style={{ fontSize: "6px", letterSpacing: "0.15em", marginTop: "2px", color: "var(--fg)" }}>
                Pvt Ltd
              </div>
              <div className="mono-label" style={{ fontSize: "7px", letterSpacing: "0.15em", marginTop: "3px" }}>
                Est. 1998 · Haldia, WB
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
                        className="nav-dropdown"
                        style={{ padding: "8px 0" }}
                      >
                        {item.sub.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="nav-dropdown-item"
                          >
                            <div>
                              <div style={{ fontWeight: 600, fontSize: "13px", color: "var(--fg)" }}>
                                {s.label}
                              </div>
                            </div>
                            <div
                              className="accent-badge"
                              style={{ marginLeft: "auto", fontSize: "7px" }}
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
              background: menuOpen ? "var(--accent)" : "var(--bg-secondary)",
              border: "1px solid var(--border-light)",
              cursor: "pointer",
              transition: "background 0.12s",
              marginLeft: "auto",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" strokeWidth={2} style={{ color: "var(--accent-fg)" }} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2} style={{ color: "var(--fg)" }} />
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
            className="mobile-menu lg:hidden"
          >
            {/* Mobile nav items */}
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={item.href} className="mobile-nav-item">
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "var(--accent-subtle)",
                      border: "1px solid rgba(249,115,22,0.2)",
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
                    <div>{item.label}</div>
                    {item.sub && (
                      <div className="sub">
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
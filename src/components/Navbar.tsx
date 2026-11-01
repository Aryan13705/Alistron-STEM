"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Cpu, GraduationCap, ChevronRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "NeuroTech", href: "/neurotech", division: "neuro" },
    { name: "STEM Education", href: "/stem", division: "stem" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-slate-200)",
          transition: "all 0.25s ease",
          boxShadow: scrolled ? "var(--shadow-md)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-navy-900)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-white)",
                fontWeight: 800,
                fontSize: "1.25rem",
                boxShadow: "0 2px 8px rgba(11, 19, 43, 0.2)",
              }}
            >
              A
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "var(--color-navy-900)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                ALISTRON
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "var(--color-slate-500)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                NeuroTech & STEM
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            style={{
              display: "none",
              alignItems: "center",
              gap: "1.75rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href} onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "0.925rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--color-navy-900)" : "var(--color-slate-700)",
                    textDecoration: "none",
                    position: "relative",
                    padding: "0.5rem 0.25rem",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor:
                          link.division === "neuro"
                            ? "var(--neuro-primary)"
                            : link.division === "stem"
                            ? "var(--stem-primary)"
                            : "var(--color-navy-900)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Division Switchers */}
          <div
            className="desktop-nav"
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <Link href="/neurotech" className="badge badge-neuro" style={{ textDecoration: "none" }}>
              <Cpu size={14} /> NeuroTech
            </Link>
            <Link href="/stem" className="badge badge-stem" style={{ textDecoration: "none" }}>
              <GraduationCap size={14} /> STEM
            </Link>
            <Link href="/contact" className="btn btn-primary-navy btn-sm" style={{ marginLeft: "0.25rem" }}>
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-slate-200)",
              background: "var(--color-white)",
              color: "var(--color-slate-800)",
              cursor: "pointer",
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav Overlay Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              borderTop: "1px solid var(--color-slate-200)",
              backgroundColor: "var(--color-white)",
              padding: "1.5rem",
              boxShadow: "var(--shadow-xl)",
            }}
            className="mobile-menu-drawer"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--color-slate-400)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Navigation
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href} onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: pathname === link.href ? "var(--color-slate-100)" : "transparent",
                    color: "var(--color-navy-900)",
                    fontWeight: pathname === link.href ? 700 : 500,
                    textDecoration: "none",
                  }}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} color="var(--color-slate-400)" />
                </Link>
              ))}

              <div
                style={{
                  marginTop: "1rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--color-slate-200)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--color-slate-400)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Explore Divisions
                </p>
                <Link href="/neurotech" className="btn btn-outline" style={{ justifyContent: "flex-start" }}>
                  <Cpu size={18} color="var(--neuro-primary)" /> NeuroTech Division
                </Link>
                <Link href="/stem" className="btn btn-outline" style={{ justifyContent: "flex-start" }}>
                  <GraduationCap size={18} color="var(--stem-primary)" /> STEM Education Division
                </Link>
                <Link href="/contact" className="btn btn-primary-navy" style={{ marginTop: "0.5rem" }}>
                  Contact Unified Desk
                </Link>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @media (min-width: 840px) {
            .desktop-nav {
              display: flex !important;
            }
            .mobile-toggle {
              display: none !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { name: "Bionics", href: "/neurotech", division: "neuro" },
  { name: "STEM", href: "/stem", division: "stem" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape or when resized to desktop.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const close = () => setMobileMenuOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const desktop = window.matchMedia("(min-width: 960px)");
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
    };
  }, [mobileMenuOpen]);

  const current = pathname.replace(/\/$/, "") || "/";
  const isActive = (href: string) => current === href || current.startsWith(href + "/");
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className={`site-header${scrolled || mobileMenuOpen ? " is-scrolled" : ""}`}>
        <div className="container site-header-inner">
          <Link href="/" className="site-header-brand" aria-label="Alistron home" onClick={closeMenu}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="site-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="site-nav-link"
                data-division={link.division}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="site-header-actions">
            <Link href="/contact" className="btn btn-brand btn-sm site-header-cta">
              Contact us
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="site-menu-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="site-mobile-menu">
            <nav aria-label="Mobile" className="container">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="site-mobile-link"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" onClick={closeMenu} className="btn btn-brand btn-lg site-mobile-cta">
                Contact us <ArrowRight size={18} />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

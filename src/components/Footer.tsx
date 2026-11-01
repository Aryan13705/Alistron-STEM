import Link from "next/link";
import Logo from "@/components/Logo";
import { Cpu, GraduationCap, Mail, Phone, ShieldCheck, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-navy-950)",
        color: "var(--color-slate-300)",
        borderTop: "1px solid var(--color-navy-800)",
        paddingTop: "4.5rem",
        paddingBottom: "2.5rem",
        fontSize: "0.925rem",
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link href="/" aria-label="Alistron home" style={{ textDecoration: "none", width: "fit-content" }}>
              <Logo tone="dark" tagline />
            </Link>
            <p style={{ color: "var(--color-slate-400)", lineHeight: 1.6, fontSize: "0.9rem" }}>
              Engineering a smarter future through pioneering Bionics exploration and practical, high-impact STEM education infrastructure.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-slate-300)" }}>
                <Mail size={16} color="var(--neuro-bright)" />
                <a href="mailto:contact@alistron.in" style={{ color: "var(--color-slate-300)", textDecoration: "none" }}>
                  contact@alistron.in
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "var(--color-slate-300)" }}>
                <Phone size={16} color="var(--stem-bright)" style={{ marginTop: "0.25rem", flexShrink: 0 }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a href="tel:+919319836470" style={{ color: "var(--color-slate-300)", textDecoration: "none", whiteSpace: "nowrap" }}>
                    +91 93198 36470
                  </a>
                  <a href="tel:+918434691751" style={{ color: "var(--color-slate-300)", textDecoration: "none", whiteSpace: "nowrap" }}>
                    +91 84346 91751
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-slate-400)" }}>
                <MapPin size={16} color="var(--stem-bright)" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Division A: Bionics */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Cpu size={18} color="var(--neuro-bright)" />
              <h4 style={{ color: "var(--color-white)", fontSize: "1.05rem", fontWeight: 700 }}>
                Alistron Bionics
              </h4>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <li>
                <Link href="/neurotech" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Division Overview
                </Link>
              </li>
              <li>
                <Link href="/neurotech#bci-research" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  BCI & Signal Processing
                </Link>
              </li>
              <li>
                <Link href="/neurotech#neuroprosthetics" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Assistive Tech & Haptics
                </Link>
              </li>
              <li>
                <Link href="/neurotech#responsible-dev" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Responsible Research Ethics
                </Link>
              </li>
              <li>
                <Link href="/contact?type=neurotech" style={{ color: "var(--neuro-bright)", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                  Research Collaboration <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Division B: STEM */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <GraduationCap size={18} color="var(--stem-bright)" />
              <h4 style={{ color: "var(--color-white)", fontSize: "1.05rem", fontWeight: 700 }}>
                Alistron STEM
              </h4>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <li>
                <Link href="/stem" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  STEM Overview
                </Link>
              </li>
              <li>
                <Link href="/stem#lab-setup" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  School STEM Lab Planning
                </Link>
              </li>
              <li>
                <Link href="/stem#arduino-robotics" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Arduino & Robotics Training
                </Link>
              </li>
              <li>
                <Link href="/stem#teacher-training" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Teacher Mentorship Workshops
                </Link>
              </li>
              <li>
                <Link href="/contact?type=school" style={{ color: "var(--stem-bright)", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                  School Lab Enquiry <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 style={{ color: "var(--color-white)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <li>
                <Link href="/about" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/projects" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Disclaimer Box */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid var(--color-navy-800)",
            borderRadius: "var(--radius-md)",
            padding: "1rem 1.25rem",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "0.825rem",
            color: "var(--color-slate-400)",
          }}
        >
          <ShieldCheck size={20} color="var(--neuro-bright)" style={{ flexShrink: 0 }} />
          <span>
            <strong>Responsible Innovation Notice:</strong> Alistron Bionics projects are exploratory hardware & software research prototypes and do not claim clinical efficacy or regulatory medical approval. Alistron STEM laboratory setups occur strictly following formal school assessment and administration approval.
          </span>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-navy-800)",
            paddingTop: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "var(--color-slate-500)",
          }}
        >
          <div>
            © {new Date().getFullYear()} Alistron. MSME / Udyam registered venture.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/contact" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

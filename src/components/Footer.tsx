import Link from "next/link";
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
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-navy-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                }}
              >
                A
              </div>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "var(--color-white)",
                  letterSpacing: "-0.025em",
                }}
              >
                ALISTRON
              </span>
            </Link>
            <p style={{ color: "var(--color-slate-400)", lineHeight: 1.6, fontSize: "0.9rem" }}>
              Engineering a smarter future through pioneering NeuroTech exploration and practical, high-impact STEM education infrastructure.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-slate-300)" }}>
                <Mail size={16} color="var(--neuro-bright)" />
                <a href="mailto:alistronllp@gmail.com" style={{ color: "var(--color-slate-300)", textDecoration: "none" }}>
                  alistronllp@gmail.com
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-slate-300)" }}>
                <Phone size={16} color="var(--stem-bright)" />
                <a href="tel:+919319836470" style={{ color: "var(--color-slate-300)", textDecoration: "none" }}>
                  +91 93198 36470
                </a>
                <span style={{ color: "var(--color-slate-600)" }}>•</span>
                <a href="tel:+918434691751" style={{ color: "var(--color-slate-300)", textDecoration: "none" }}>
                  +91 84346 91751
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-slate-400)" }}>
                <MapPin size={16} color="var(--stem-bright)" />
                <span>India • alistron.in</span>
              </div>
            </div>
          </div>

          {/* Division A: NeuroTech */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Cpu size={18} color="var(--neuro-bright)" />
              <h4 style={{ color: "var(--color-white)", fontSize: "1.05rem", fontWeight: 700 }}>
                Alistron NeuroTech
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
              Parent Brand & Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <li>
                <Link href="/about" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  About Alistron
                </Link>
              </li>
              <li>
                <Link href="/projects" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Projects & Blueprints
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Unified Contact Desk
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
                  Privacy Policy & Data Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Disclaimer Box */}
        <div
          style={{
            backgroundColor: "rgba(30, 41, 59, 0.6)",
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
            <strong>Responsible Innovation Notice:</strong> Alistron NeuroTech projects are exploratory hardware & software research prototypes and do not claim clinical efficacy or regulatory medical approval. Alistron STEM laboratory setups occur strictly following formal school assessment and administration approval.
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
            © 2026 ALISTRON. MSME / Udyam Registered Venture • Domain: <strong>alistron.in</strong>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/contact" style={{ color: "var(--color-slate-400)", textDecoration: "none" }}>
              Support Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

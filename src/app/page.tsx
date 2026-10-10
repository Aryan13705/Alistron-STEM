import Link from "next/link";
import { Cpu, GraduationCap, ArrowRight, CheckCircle, ShieldCheck, Activity, Layers } from "lucide-react";
import ProjectGrid from "@/components/ProjectGrid";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          paddingTop: "5.5rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid var(--color-slate-200)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "center" }}>
            <div className="badge badge-parent" style={{ marginBottom: "1.25rem" }}>
              MSME / Udyam Registered Venture
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw + 1rem, 4rem)",
                fontWeight: 800,
                color: "var(--color-navy-900)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              Engineering a Smarter Future.
            </h1>

            <p
              style={{
                fontSize: "clamp(1.1rem, 1.5vw + 0.8rem, 1.35rem)",
                color: "var(--color-slate-700)",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
                fontWeight: 400,
              }}
            >
              Bringing together emerging assistive technology and practical STEM education to turn engineering ideas into meaningful real-world possibilities.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="#divisions" className="btn btn-primary-navy btn-lg">
                Explore Our Divisions <ArrowRight size={18} />
              </a>
              <Link href="/contact" className="btn btn-outline btn-lg">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two Divisions Section */}
      <section id="divisions" className="section" style={{ backgroundColor: "var(--color-slate-50)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--color-slate-500)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Two Focused Divisions • One Parent Mission
            </span>
            <h2 style={{ fontSize: "2.25rem", marginTop: "0.5rem" }}>
              Tailored Engineering & Educational Focus
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Division Card A: NeuroTech */}
            <div className="card card-neuro card-interactive" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--neuro-bg-subtle)",
                    border: "1px solid var(--neuro-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--neuro-primary)",
                  }}
                >
                  <Cpu size={24} />
                </div>
                <div>
                  <span className="badge badge-neuro">Division A</span>
                  <h3 style={{ fontSize: "1.5rem", color: "var(--color-navy-900)" }}>Alistron NeuroTech</h3>
                </div>
              </div>

              <p style={{ color: "var(--color-slate-700)", fontSize: "0.975rem", marginBottom: "1.5rem" }}>
                Dedicated to pioneering exploratory biosignal processing, brain-computer interfaces (BCI), electromyography (EMG), and AI intent decoding for assistive technology.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem", flexGrow: 1 }}>
                {[
                  "Neuroprosthetics & Assistive Interaction",
                  "EEG & sEMG Signal Filtering Algorithms",
                  "AI-Assisted Intent Pattern Recognition",
                  "Tactile Haptic Feedback Systems",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--color-slate-700)" }}>
                    <CheckCircle size={16} color="var(--neuro-primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--color-slate-200)" }}>
                <Link href="/neurotech" className="btn btn-neuro" style={{ width: "100%" }}>
                  Explore NeuroTech Division <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Division Card B: STEM */}
            <div className="card card-stem card-interactive" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--stem-bg-subtle)",
                    border: "1px solid var(--stem-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--stem-primary)",
                  }}
                >
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="badge badge-stem">Division B</span>
                  <h3 style={{ fontSize: "1.5rem", color: "var(--color-navy-900)" }}>Alistron STEM</h3>
                </div>
              </div>

              <p style={{ color: "var(--color-slate-700)", fontSize: "0.975rem", marginBottom: "1.5rem" }}>
                Empowering K-12 schools through structured STEM lab planning, Arduino microcontrollers, robotics training, teacher workshops, and ongoing lab management.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem", flexGrow: 1 }}>
                {[
                  "Complete STEM Laboratory Assessment & Planning",
                  "School Needs Proposal & Commercial Setup",
                  "Hands-on Arduino & Robotics Curriculum",
                  "Teacher Empowerment & Ongoing Maintenance",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--color-slate-700)" }}>
                    <CheckCircle size={16} color="var(--stem-primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--color-slate-200)" }}>
                <Link href="/stem" className="btn btn-stem" style={{ width: "100%" }}>
                  Explore STEM Division <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Operating Principles */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            <h2 style={{ fontSize: "2.25rem" }}>Working Principles & Safeguards</h2>
            <p style={{ color: "var(--color-slate-600)", marginTop: "0.5rem" }}>
              Built on transparency, practical engineering, and ethical research standards.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.75rem",
            }}
          >
            <div className="card">
              <ShieldCheck size={28} color="var(--neuro-primary)" style={{ marginBottom: "1rem" }} />
              <h4 style={{ marginBottom: "0.5rem" }}>Responsible Research Framing</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-slate-600)" }}>
                NeuroTech exploration is presented transparently as experimental engineering and non-clinical research. We make no unverified medical or commercial efficacy claims.
              </p>
            </div>

            <div className="card">
              <Layers size={28} color="var(--stem-primary)" style={{ marginBottom: "1rem" }} />
              <h4 style={{ marginBottom: "0.5rem" }}>Transparent School Approval</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-slate-600)" }}>
                STEM lab installations proceed strictly after physical assessment, custom proposal review, and formal school administration sign-off.
              </p>
            </div>

            <div className="card">
              <Activity size={28} color="var(--color-navy-900)" style={{ marginBottom: "1rem" }} />
              <h4 style={{ marginBottom: "0.5rem" }}>Hands-on Technical Rigor</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-slate-600)" }}>
                Combining open-hardware architectures with structured learning pathways so students and researchers build real, functional engineering skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
            <span className="badge badge-parent" style={{ marginBottom: "0.75rem" }}>
              Portfolio Directions
            </span>
            <h2 style={{ fontSize: "2.25rem" }}>Featured Projects & Blueprints</h2>
            <p style={{ color: "var(--color-slate-600)", marginTop: "0.5rem" }}>
              Explore our current exploratory prototypes and educational lab blueprints.
            </p>
          </div>

          <ProjectGrid defaultFilter="all" />

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/projects" className="btn btn-outline btn-lg">
              View Complete Project Library <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Evolution & Journey Timeline */}
      <JourneyTimeline />

      {/* Collaboration Call to Action */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-white)", marginBottom: "1rem" }}>
            Ready to Collaborate with Alistron?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--color-slate-300)", marginBottom: "2.25rem", lineHeight: 1.6 }}>
            Whether you are a school principal planning a STEM lab setup or a research collaborator interested in biosignal exploration, we welcome your enquiry.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=school" className="btn btn-stem btn-lg">
              School STEM Enquiry
            </Link>
            <Link href="/contact?type=neurotech" className="btn btn-neuro btn-lg">
              NeuroTech Collaboration
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

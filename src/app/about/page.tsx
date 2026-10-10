import Link from "next/link";
import { Cpu, GraduationCap, Target, Eye, ArrowRight } from "lucide-react";
import JourneyTimeline from "@/components/JourneyTimeline";
import TeamSection from "@/components/TeamSection";

export const metadata = {
  title: "About ALISTRON | Mission, Vision & Parent Brand Structure",
  description: "Learn about Alistron mission to bridge frontier NeuroTech research with accessible school STEM education infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          paddingTop: "5rem",
          paddingBottom: "4.5rem",
          borderBottom: "1px solid var(--color-slate-200)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span className="badge badge-parent" style={{ marginBottom: "1rem" }}>
              Parent Brand & Values
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)", marginBottom: "1.25rem" }}>
              About ALISTRON
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
              An MSME-registered engineering & technology venture dedicated to bridging emerging assistive technology research with practical, high-impact STEM education infrastructure for schools.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Journey Timeline */}
      <JourneyTimeline />


      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            <div className="card" style={{ borderTop: "4px solid var(--color-navy-900)" }}>
              <Target size={36} color="var(--color-navy-900)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Our Mission
              </h3>
              <p style={{ fontSize: "0.975rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
                To empower schools with practical engineering tools and conduct non-invasive biosignal research that expands human potential, fostering the next generation of engineers and scientists.
              </p>
            </div>

            <div className="card" style={{ borderTop: "4px solid var(--neuro-primary)" }}>
              <Eye size={36} color="var(--neuro-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Our Vision
              </h3>
              <p style={{ fontSize: "0.975rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
                To create a seamless ecosystem where open-hardware research in neural interfaces directly informs intuitive, hands-on STEM curriculum, making frontier engineering accessible to every classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            <span className="badge badge-parent" style={{ marginBottom: "0.75rem" }}>
              Organizational Architecture
            </span>
            <h2 style={{ fontSize: "2.25rem" }}>Two Specialized Divisions</h2>
            <p style={{ color: "var(--color-slate-600)", marginTop: "0.5rem" }}>
              ALISTRON operates through two distinct divisions to maintain technical focus and clarity.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            <div className="card card-neuro">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <Cpu size={24} color="var(--neuro-primary)" />
                <h3 style={{ fontSize: "1.35rem", color: "var(--color-navy-900)" }}>Alistron NeuroTech</h3>
              </div>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Focuses on exploratory brain-computer interfaces, electromyography (EMG) intent classification, signal conditioning algorithms, and haptic feedback. All R&D is conducted as non-clinical engineering exploration.
              </p>
              <Link href="/neurotech" className="btn btn-neuro btn-sm" style={{ width: "fit-content" }}>
                Learn More About NeuroTech
              </Link>
            </div>

            <div className="card card-stem">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <GraduationCap size={24} color="var(--stem-primary)" />
                <h3 style={{ fontSize: "1.35rem", color: "var(--color-navy-900)" }}>Alistron STEM</h3>
              </div>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Delivers customized STEM laboratory planning, Arduino microcontroller workshops, robotics curriculum, and teacher training. Implementations proceed strictly after formal school assessment and administration sign-off.
              </p>
              <Link href="/stem" className="btn btn-stem btn-sm" style={{ width: "fit-content" }}>
                Learn More About STEM Setup
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <TeamSection />

      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "780px" }}>
          <h2 style={{ color: "var(--color-white)", fontSize: "2.25rem", marginBottom: "1rem" }}>
            Connect with Alistron
          </h2>
          <p style={{ color: "var(--color-slate-300)", fontSize: "1.05rem", marginBottom: "2rem" }}>
            We welcome conversations with schools, academic researchers, and engineering collaborators.
          </p>
          <Link href="/contact" className="btn btn-primary-navy btn-lg" style={{ backgroundColor: "var(--color-white)", color: "var(--color-navy-900)" }}>
            Contact Unified Desk <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { GraduationCap, Wrench, Cpu, Users, ArrowRight, ShieldCheck, Sparkles, BookOpen, Layers } from "lucide-react";
import { STEMWorkflowDiagram } from "@/components/Diagrams";
import EventGrid from "@/components/EventGrid";

export const metadata = {
  title: "Alistron STEM | School STEM Labs, Arduino & Robotics Training",
  description: "Practical STEM lab planning, Arduino workshops, robotics curriculum, and teacher training for K-12 schools. Setup proceeds following school assessment and approval.",
};

export default function STEMPage() {
  return (
    <>
      {/* Hero Header */}
      <section
        style={{
          background: "var(--color-slate-50)",
          paddingTop: "5rem",
          paddingBottom: "4.5rem",
          borderBottom: "1px solid var(--stem-border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <span className="badge badge-stem" style={{ marginBottom: "1rem" }}>
              <GraduationCap size={14} /> Division B • School STEM Infrastructure
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)", marginBottom: "1.25rem" }}>
              Alistron STEM Education
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--color-slate-700)", lineHeight: 1.6, marginBottom: "1.75rem" }}>
              Transforming school science labs into hands-on engineering hubs through customized lab planning, Arduino hardware training, robotics workshops, and comprehensive teacher mentorship.
            </p>

            {/* School Approval Principle Callout */}
            <div
              style={{
                backgroundColor: "var(--color-slate-50)",
                border: "1px solid var(--stem-border)",
                borderRadius: "var(--radius-md)",
                padding: "1rem 1.25rem",
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
                marginBottom: "2rem",
              }}
            >
              <ShieldCheck size={22} color="var(--stem-primary)" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
              <p style={{ fontSize: "0.9rem", color: "var(--stem-primary)", margin: 0, fontWeight: 500 }}>
                <strong>Institutional Partnership Principle:</strong> We begin every school engagement with a thorough needs assessment and a formal proposal. Physical lab setup and commercial installation occur strictly after the school administration reviews and approves the proposal.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact?type=school" className="btn btn-stem btn-lg">
                Request a STEM Lab Proposal <ArrowRight size={18} />
              </Link>
              <a href="#process" className="btn btn-outline btn-lg">
                View 6-Step Partnership Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            <span className="badge badge-stem" style={{ marginBottom: "0.75rem" }}>
              Services & Curriculum
            </span>
            <h2 style={{ fontSize: "2.25rem" }}>Complete School STEM Ecosystem</h2>
            <p style={{ color: "var(--color-slate-600)", marginTop: "0.5rem" }}>
              From initial infrastructure assessment to student capstone robotics projects.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Service 1 */}
            <div id="lab-setup" className="card card-stem">
              <Wrench size={32} color="var(--stem-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                STEM Lab Planning & Procurement
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Evaluating school space, power supply, and safety needs to design customized electronics workbenches, component storage, and soldering safety stations.
              </p>
            </div>

            {/* Service 2 */}
            <div id="arduino-robotics" className="card card-stem">
              <Cpu size={32} color="var(--stem-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Arduino & Microcontroller Training
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Practical, beginner-friendly coding and circuit design courses teaching students how sensors, actuators, LEDs, microcontrollers, and motors interact.
              </p>
            </div>

            {/* Service 3 */}
            <div className="card card-stem">
              <BookOpen size={32} color="var(--stem-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Curriculum & Practical Manuals
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Age-appropriate project workbooks with clear visual schematics, code templates, and progressive challenge tasks aligned with STEM learning goals.
              </p>
            </div>

            {/* Service 4 */}
            <div id="teacher-training" className="card card-stem">
              <Users size={32} color="var(--stem-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Teacher Mentorship Workshops
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Empowering science and computer teachers with hands-on hardware training, lab safety protocols, and hardware troubleshooting techniques.
              </p>
            </div>

            {/* Service 5 */}
            <div className="card card-stem">
              <Sparkles size={32} color="var(--stem-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Standalone Arduino Workshops
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                2-day or 5-day immersive practical coding and robotics bootcamps for schools seeking immediate hands-on student engagement without full lab installation.
              </p>
            </div>

            {/* Service 6 */}
            <div className="card card-stem">
              <Layers size={32} color="var(--stem-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Ongoing Lab Management & Support
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Regular component inventory replenishment, equipment calibration, and continuous technical support to keep school labs running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Partnership Process Section */}
      <section id="process" className="section section-alt">
        <div className="container">
          <STEMWorkflowDiagram />
        </div>
      </section>

      {/* Events & Outreach Showcase */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
            <span className="badge badge-stem" style={{ marginBottom: "0.75rem" }}>
              Hands-on Workshops & School Outreach
            </span>
            <h2 style={{ fontSize: "2.25rem" }}>Robotics Workshops & School Training</h2>
            <p style={{ color: "var(--color-slate-600)", marginTop: "0.5rem" }}>
              Explore our structured learning programs including Ardubotics, Algo 2 Arduino, and Kendriya Vidyalaya outreach.
            </p>
          </div>

          <EventGrid initialFilter="School Outreach" />

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/events" className="btn btn-outline btn-lg">
              View All Events & Workshops <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "780px" }}>
          <h2 style={{ color: "var(--color-white)", fontSize: "2.25rem", marginBottom: "1rem" }}>
            Bring Practical STEM Education to Your School
          </h2>
          <p style={{ color: "var(--color-slate-300)", fontSize: "1.05rem", marginBottom: "2rem" }}>
            Contact our STEM education team today to schedule an initial consultation and receive a customized laboratory proposal for your institution.
          </p>
          <Link href="/contact?type=school" className="btn btn-stem btn-lg">
            Request a STEM Lab Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { Cpu, GraduationCap, ArrowRight, Check, ShieldCheck, Activity, Layers } from "lucide-react";
import ProjectGrid from "@/components/ProjectGrid";
import JourneyTimeline from "@/components/JourneyTimeline";
import EventCard from "@/components/EventCard";
import { ALISTRON_EVENTS } from "@/data/events";

export default function Home() {
  const featuredEvents = [
    ALISTRON_EVENTS.find((e) => e.slug === "ardubotics")!,
    ALISTRON_EVENTS.find((e) => e.slug === "algo-2-arduino")!,
    ALISTRON_EVENTS.find((e) => e.slug === "stem-training-kv")!,
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="hero-eyebrow">Engineering Human Potential</span>

            <h1 className="hero-title">Engineering a Smarter Future.</h1>

            <p className="hero-lede">
              Bringing together emerging assistive technology and practical STEM education to turn engineering ideas into meaningful real-world possibilities.
            </p>

            <div className="hero-actions">
              <a href="#divisions" className="btn btn-brand btn-lg">
                Explore our divisions <ArrowRight size={18} />
              </a>
              <Link href="/contact" className="btn btn-ghost-light btn-lg">
                Talk to us
              </Link>
            </div>

            <ul className="hero-meta">
              <li>MSME / Udyam registered</li>
              <li>Bionics research</li>
              <li>STEM labs for schools</li>
            </ul>
          </div>

          <div className="hero-visual">
            <Image
              src={withBasePath("/images/brand/emblem.webp")}
              alt="Alistron emblem: the Alistron A with a robotic prosthetic hand and orbit ring"
              width={580}
              height={410}
              preload
            />
          </div>
        </div>
      </section>

      {/* Two Divisions Section */}
      <section id="divisions" className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-head-text">
              <span className="badge">What we do</span>
              <h2>Two divisions, one engineering mission</h2>
              <p>
                Alistron Bionics builds assistive technology. Alistron STEM brings hands-on engineering into schools.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Division Card A: Bionics */}
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
                  <h3 style={{ fontSize: "1.5rem", color: "var(--color-navy-900)" }}>Alistron Bionics</h3>
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
                    <Check size={16} color="var(--neuro-primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--color-slate-200)" }}>
                <Link href="/neurotech" className="btn btn-outline">
                  Explore Bionics <ArrowRight size={16} />
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
                    <Check size={16} color="var(--stem-primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--color-slate-200)" }}>
                <Link href="/stem" className="btn btn-outline">
                  Explore STEM <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Operating Principles */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="section-head-text">
              <span className="badge">How we work</span>
              <h2>Practical engineering, stated honestly</h2>
              <p>Transparency, hands-on rigour and clear approvals guide every project and every school we work with.</p>
            </div>
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
                Bionics exploration is presented transparently as experimental engineering and non-clinical research. We make no unverified medical or commercial efficacy claims.
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

      {/* Featured IoT Projects Showcase */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-head-text">
              <span className="badge">Projects</span>
              <h2>Connected hardware we&apos;ve built</h2>
              <p>Long-range wireless telemetry, smart sensing nodes and IoT prototypes from our engineering team.</p>
            </div>
            <Link href="/projects" className="section-head-link">
              All projects <ArrowRight size={16} />
            </Link>
          </div>

          <ProjectGrid defaultFilter="all" />


        </div>
      </section>

      {/* Featured Events, Workshops & School Outreach */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="section-head-text">
              <span className="badge">Events</span>
              <h2>Workshops and outreach at SRMIST</h2>
              <p>Arduino workshops, multi-edition robotics programmes and STEM training for school and college students.</p>
            </div>
            <Link href="/events" className="section-head-link">
              All events <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} featured={true} />
            ))}
          </div>


        </div>
      </section>

      {/* Our Evolution & Journey Timeline */}
      <JourneyTimeline />

      {/* Collaboration Call to Action */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--color-white)", marginBottom: "1rem" }}>
            Work with Alistron
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--color-slate-300)", marginBottom: "2.25rem", lineHeight: 1.6 }}>
            Planning a STEM lab for your school, or interested in collaborating on assistive technology? Tell us what you have in mind.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=school" className="btn btn-brand btn-lg">
              School STEM enquiry
            </Link>
            <Link href="/contact?type=neurotech" className="btn btn-ghost-light btn-lg">
              Bionics collaboration
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

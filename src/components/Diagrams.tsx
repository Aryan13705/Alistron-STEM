"use client";

import { Activity, Cpu, Zap, Layers, FileSearch, Check, GraduationCap, Wrench, Users } from "lucide-react";

export function NeuroTechArchitectureDiagram() {
  return (
    <div
      style={{
        background: "var(--color-navy-950)",
        borderRadius: "var(--radius-xl)",
        padding: "2.5rem 2rem",
        color: "var(--color-white)",
        border: "1px solid var(--color-navy-800)",
        boxShadow: "var(--shadow-xl)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <div className="badge badge-neuro" style={{ marginBottom: "0.75rem" }}>
          Exploratory Architecture
        </div>
        <h3 style={{ color: "var(--color-white)", fontSize: "1.5rem" }}>
          Biosignal Processing Pipeline
        </h3>
        <p style={{ color: "var(--color-slate-400)", fontSize: "0.9rem", maxWidth: "600px", margin: "0.5rem auto 0" }}>
          Multi-stage data flow representation from non-invasive physical sensors to intent classification models.
        </p>
      </div>

      {/* Grid Flow */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.25rem",
          alignItems: "stretch",
        }}
      >
        {/* Step 1 */}
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(76, 148, 240, 0.3)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--neuro-bright)" }}>
              STAGE 01
            </span>
            <Activity size={20} color="var(--neuro-bright)" />
          </div>
          <h4 style={{ color: "var(--color-white)", fontSize: "1.1rem" }}>Biosignal Acquisition</h4>
          <p style={{ color: "var(--color-slate-400)", fontSize: "0.85rem" }}>
            Multi-channel EEG/EMG surface electrodes capture low-amplitude microvolt micro-signals.
          </p>
        </div>

        {/* Step 2 */}
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(76, 148, 240, 0.3)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--neuro-bright)" }}>
              STAGE 02
            </span>
            <Zap size={20} color="var(--neuro-bright)" />
          </div>
          <h4 style={{ color: "var(--color-white)", fontSize: "1.1rem" }}>Signal Conditioning</h4>
          <p style={{ color: "var(--color-slate-400)", fontSize: "0.85rem" }}>
            High-pass / low-pass notch filtering, baseline removal, and artifact isolation algorithms.
          </p>
        </div>

        {/* Step 3 */}
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(76, 148, 240, 0.3)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--neuro-bright)" }}>
              STAGE 03
            </span>
            <Cpu size={20} color="var(--neuro-bright)" />
          </div>
          <h4 style={{ color: "var(--color-white)", fontSize: "1.1rem" }}>Intent Classification</h4>
          <p style={{ color: "var(--color-slate-400)", fontSize: "0.85rem" }}>
            Feature extraction & machine learning classification of user motor or visual intent.
          </p>
        </div>

        {/* Step 4 */}
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            border: "1px solid rgba(76, 148, 240, 0.3)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--neuro-bright)" }}>
              STAGE 04
            </span>
            <Layers size={20} color="var(--neuro-bright)" />
          </div>
          <h4 style={{ color: "var(--color-white)", fontSize: "1.1rem" }}>Assistive Telemetry</h4>
          <p style={{ color: "var(--color-slate-400)", fontSize: "0.85rem" }}>
            Command transmission to robotic actuators, tactile haptic drivers, or software visualizers.
          </p>
        </div>
      </div>
    </div>
  );
}

export function STEMWorkflowDiagram() {
  const steps = [
    {
      num: "01",
      title: "Initial Conversation",
      desc: "Consultation with school principals and STEM coordinators to map academic goals.",
      icon: Users,
    },
    {
      num: "02",
      title: "Needs Assessment",
      desc: "Detailed evaluation of existing school infrastructure, space, and student cohort size.",
      icon: FileSearch,
    },
    {
      num: "03",
      title: "Customised Proposal",
      desc: "Tailored blueprint detailing equipment specs, curriculum modules, and commercial terms.",
      icon: Layers,
    },
    {
      num: "04",
      title: "School Approval",
      desc: "Formal agreement and institutional sign-off prior to hardware procurement.",
      icon: Check,
    },
    {
      num: "05",
      title: "Lab Setup & Hardware",
      desc: "Installation of modular electronics benches, Arduino kits, and safety tools.",
      icon: Wrench,
    },
    {
      num: "06",
      title: "Training & Support",
      desc: "Hands-on teacher workshops, student project guides, and ongoing lab maintenance.",
      icon: GraduationCap,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-slate-200)",
        borderRadius: "var(--radius-xl)",
        padding: "2.5rem 2rem",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <span className="badge badge-stem" style={{ marginBottom: "0.75rem" }}>
          Transparent Process
        </span>
        <h3 style={{ fontSize: "1.6rem" }}>The 6-Step School Partnership Journey</h3>
        <p style={{ color: "var(--color-slate-600)", maxWidth: "620px", margin: "0.5rem auto 0" }}>
          We ensure complete alignment and school approval before undertaking physical lab implementation.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              style={{
                backgroundColor: "var(--color-slate-50)",
                border: "1px solid var(--color-slate-200)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 650,
                    color: "var(--stem-primary)",
                    backgroundColor: "var(--stem-bg-subtle)",
                    padding: "0.25rem 0.625rem",
                    borderRadius: "var(--radius-full)",
                    border: "1px solid var(--stem-border)",
                  }}
                >
                  Step {step.num}
                </span>
                <Icon size={22} color="var(--stem-primary)" />
              </div>
              <h4 style={{ fontSize: "1.1rem", color: "var(--color-navy-900)" }}>{step.title}</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--color-slate-600)" }}>{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

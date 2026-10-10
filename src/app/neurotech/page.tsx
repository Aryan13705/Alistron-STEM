import Link from "next/link";
import { Cpu, Activity, Zap, Layers, AlertCircle, ArrowRight, ShieldCheck, Brain, Radio } from "lucide-react";
import { NeuroTechArchitectureDiagram } from "@/components/Diagrams";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "Alistron NeuroTech | Biosignal Research & Assistive Interfaces",
  description: "Exploring brain-computer interfaces (BCI), surface EMG decoding, EEG signal processing, and haptic feedback for non-invasive assistive technology.",
};

export default function NeuroTechPage() {
  return (
    <>
      {/* Division Hero Header */}
      <section
        style={{
          background: "linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)",
          paddingTop: "5rem",
          paddingBottom: "4.5rem",
          borderBottom: "1px solid var(--neuro-border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <span className="badge badge-neuro" style={{ marginBottom: "1rem" }}>
              <Cpu size={14} /> Division A • Frontier Research
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)", marginBottom: "1.25rem" }}>
              Alistron NeuroTech
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--color-slate-700)", lineHeight: 1.6, marginBottom: "1.75rem" }}>
              Investigating non-invasive biosignal processing, neural intent classification, electromyography (EMG), and haptic human-machine interfaces.
            </p>

            {/* Disclaimer Banner */}
            <div className="disclaimer-box">
              <AlertCircle size={20} />
              <p>
                <strong>Responsible Research Safeguard:</strong> Alistron NeuroTech activities represent exploratory engineering research, software algorithms, and hardware prototypes. We do not claim clinical validation, medical diagnosis efficacy, or regulatory approval.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <Link href="/contact?type=neurotech" className="btn btn-neuro btn-lg">
                Explore Research Collaboration <ArrowRight size={18} />
              </Link>
              <a href="#focus-areas" className="btn btn-outline btn-lg">
                View Focus Areas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus-areas" className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            <span className="badge badge-neuro" style={{ marginBottom: "0.75rem" }}>
              R&D Pillars
            </span>
            <h2 style={{ fontSize: "2.25rem" }}>Core Focus Areas & Research Directions</h2>
            <p style={{ color: "var(--color-slate-600)", marginTop: "0.5rem" }}>
              Our engineering initiatives center around non-invasive biosignal acquisition, signal conditioning, and accessible assistive hardware.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Pillar 1 */}
            <div className="card card-neuro">
              <Brain size={32} color="var(--neuro-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Brain-Computer Interfaces (BCI)
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Investigating non-invasive electroencephalography (EEG) paradigms such as SSVEP and P300 event-related potentials for hands-free assistive communication.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="card card-neuro">
              <Activity size={32} color="var(--neuro-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                EEG & EMG Signal Processing
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Developing digital signal processing (DSP) filters for microvolt baseline restoration, notch powerline attenuation, and real-time muscle activation isolation.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="card card-neuro">
              <Radio size={32} color="var(--neuro-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                AI-Assisted Intent Decoding
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Constructing lightweight, on-device machine learning classifiers that translate complex sEMG temporal patterns into discretized motor grip commands.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="card card-neuro">
              <Zap size={32} color="var(--neuro-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Neuroprosthetics & Haptic Feedback
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Prototyping closed-loop prosthetic interaction where tactile sensors send physical vibrotactile feedback to the user to close the sensory loop.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="card card-neuro">
              <Layers size={32} color="var(--neuro-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Open-Hardware Instrumentation
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Designing affordable biosignal amplifier boards and modular sensor interfaces to lower the barrier for academic and open-science research.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="card card-neuro">
              <ShieldCheck size={32} color="var(--neuro-primary)" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                Ethical Neuro-Technology
              </h3>
              <p style={{ fontSize: "0.925rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
                Framing neural signal acquisition around user privacy, non-invasive safety standards, and transparent data sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biosignal Diagram Section */}
      <section className="section section-alt">
        <div className="container">
          <NeuroTechArchitectureDiagram />
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
            <h2 style={{ fontSize: "2.25rem" }}>NeuroTech Prototype Showcase</h2>
            <p style={{ color: "var(--color-slate-600)", marginTop: "0.5rem" }}>
              Explore active research projects labeled accurately by development stage.
            </p>
          </div>

          <ProjectGrid defaultFilter="neurotech" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "760px" }}>
          <h2 style={{ color: "var(--color-white)", fontSize: "2.25rem", marginBottom: "1rem" }}>
            Interested in NeuroTech Collaboration?
          </h2>
          <p style={{ color: "var(--color-slate-300)", fontSize: "1.05rem", marginBottom: "2rem" }}>
            We collaborate with academic researchers, biomechatronics engineers, and open-source hardware contributors.
          </p>
          <Link href="/contact?type=neurotech" className="btn btn-neuro btn-lg">
            Submit Collaboration Enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

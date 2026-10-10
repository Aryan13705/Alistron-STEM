import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "Projects & Blueprints | ALISTRON IoT, NeuroTech & STEM",
  description: "Browse Alistron IoT projects, Wireless Environmental Telemetry, Smart Water Management, NeuroTech biosignal prototypes, and school STEM lab blueprints.",
};

export default function ProjectsPage() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          paddingTop: "5rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--color-slate-200)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span className="badge badge-parent" style={{ marginBottom: "1rem" }}>
              Technical Portfolio
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)", marginBottom: "1.25rem" }}>
              Projects, IoT Systems & Blueprints
            </h1>
            <p style={{ fontSize: "1.15rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
              Explore our Wireless IoT systems, Smart Water Management, Environmental Wearables, NeuroTech biosignal research, and structured school STEM laboratory blueprints. All entries are explicitly labeled by category and implementation status.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProjectGrid defaultFilter="all" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <div className="card" style={{ padding: "2.5rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
              Have a Project or Collaboration Inquiry?
            </h3>
            <p style={{ color: "var(--color-slate-600)", marginBottom: "1.75rem" }}>
              We welcome dialogue with school administrators, IoT hardware engineers, and technical research collaborators.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact?type=school" className="btn btn-stem">
                School Lab Enquiry
              </Link>
              <Link href="/contact?type=neurotech" className="btn btn-neuro">
                NeuroTech & IoT Collaboration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

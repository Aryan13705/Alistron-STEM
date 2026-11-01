import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "IoT Systems & Telemetry Portfolio | ALISTRON",
  description: "Browse Alistron IoT projects, Wireless Environmental Telemetry, Smart Water Management, and Connected Infrastructure systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <section
        style={{
          background: "var(--color-slate-50)",
          paddingTop: "5rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--color-slate-200)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span className="badge badge-parent" style={{ marginBottom: "1rem" }}>
              IoT & Hardware Portfolio
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)", marginBottom: "1.25rem" }}>
              IoT Systems & Telemetry Blueprints
            </h1>
            <p style={{ fontSize: "1.15rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
              Explore our connected hardware prototypes, long-range wireless telemetry nodes, smart water distribution monitors, and environmental wearable systems. For robotics workshops and school outreach, visit our dedicated <Link href="/events" style={{ color: "var(--stem-primary)", fontWeight: 600, textDecoration: "underline" }}>Events & Workshops</Link> section.
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
                Bionics & IoT Collaboration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

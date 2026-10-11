import React from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, Info } from "lucide-react";
import EventGrid from "@/components/EventGrid";

export const metadata = {
  title: "Events, Workshops & School Outreach | ALISTRON STEM",
  description:
    "Explore Alistron's practical robotics workshops, Arduino computing sessions, and school outreach initiatives including Ardubotics, Algo 2 Arduino, and STEM Training.",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          paddingTop: "5rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--color-slate-200)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.775rem",
                fontWeight: 700,
                backgroundColor: "var(--stem-bg-subtle)",
                color: "var(--stem-primary)",
                border: "1px solid var(--stem-border)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "1rem",
              }}
            >
              <GraduationCap size={14} /> Practical Learning & Outreach
            </span>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)",
                fontWeight: 800,
                color: "var(--color-navy-900)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              Events, Workshops & School Outreach
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-slate-700)",
                lineHeight: 1.6,
                marginBottom: "1.75rem",
              }}
            >
              Discover Alistron&apos;s hands-on Arduino workshops, iterative robotics learning editions, and practical STEM training initiatives delivered to school and collegiate learners.
            </p>

            {/* Factual Disclaimer Banner */}
            <div
              style={{
                backgroundColor: "rgba(241, 245, 249, 0.85)",
                border: "1px solid var(--color-slate-300)",
                borderRadius: "var(--radius-md)",
                padding: "0.875rem 1.25rem",
                textAlign: "left",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                fontSize: "0.85rem",
                color: "var(--color-slate-600)",
                lineHeight: 1.5,
              }}
            >
              <Info size={18} color="var(--color-navy-900)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
              <div>
                <strong>Archival & Record Notice:</strong> All activities are documented based on factual session records. Specific venue names, session dates, and syllabus modules (including Kendriya Vidyalaya school branch details) are recorded conservatively and subject to ongoing archival verification. Alistron does not claim official institutional endorsement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="section">
        <div className="container">
          <EventGrid initialFilter="All Events" />
        </div>
      </section>

      {/* Institutional Enquiry & School Partnership Section */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div
            className="card"
            style={{
              padding: "3rem 2rem",
              textAlign: "center",
              backgroundColor: "var(--color-white)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--color-slate-200)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--stem-bg-subtle)",
                color: "var(--stem-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}
            >
              <GraduationCap size={28} />
            </div>

            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--color-navy-900)",
                marginBottom: "0.75rem",
              }}
            >
              Host an Arduino or Robotics Workshop at Your School
            </h3>

            <p
              style={{
                color: "var(--color-slate-600)",
                fontSize: "1rem",
                lineHeight: 1.6,
                maxWidth: "680px",
                margin: "0 auto 2rem",
              }}
            >
              Alistron collaborates with schools, colleges, and STEM educators to deliver structured, hardware-focused training programs. Inquire for curriculum planning, lab setups, or event coordination.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact?type=school" className="btn btn-stem btn-lg">
                Request School Workshop <ArrowRight size={16} />
              </Link>
              <Link href="/stem" className="btn btn-outline btn-lg">
                Explore STEM Division
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALISTRON_EVENTS, AlistronEvent } from "@/data/events";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Cpu,
  Sparkles,
  Info,
  ShieldCheck,
  CameraOff,
  Users,
  Layers,
  ArrowRight,
} from "lucide-react";

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ALISTRON_EVENTS.map((e) => ({
    id: e.slug,
  }));
}

export async function generateMetadata({ params }: EventDetailPageProps) {
  const resolvedParams = await params;
  const event = ALISTRON_EVENTS.find(
    (e) => e.slug === resolvedParams.id || e.id === resolvedParams.id
  );

  if (!event) {
    return {
      title: "Event Not Found | ALISTRON",
    };
  }

  return {
    title: `${event.name} | Events & Outreach | ALISTRON`,
    description: event.shortDescription,
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const resolvedParams = await params;
  const event = ALISTRON_EVENTS.find(
    (e) => e.slug === resolvedParams.id || e.id === resolvedParams.id
  );

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* Top Breadcrumb & Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          paddingTop: "4.5rem",
          paddingBottom: "3.5rem",
          borderBottom: "1px solid var(--color-slate-200)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <Link
              href="/events"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-slate-600)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}
            >
              <ArrowLeft size={16} /> Back to All Events & Outreach
            </Link>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.775rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  backgroundColor: "rgba(13, 148, 136, 0.08)",
                  color: "#0D9488",
                  border: "1px solid rgba(13, 148, 136, 0.25)",
                }}
              >
                {event.category === "School Outreach" ? <GraduationCap size={14} /> : <Cpu size={14} />}
                {event.category}
              </span>

              <span
                style={{
                  fontSize: "0.775rem",
                  fontWeight: 600,
                  padding: "0.3rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--color-slate-100)",
                  color: "var(--color-slate-600)",
                  border: "1px solid var(--color-slate-200)",
                }}
              >
                {event.status}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 4vw + 1rem, 3.25rem)",
                fontWeight: 800,
                color: "var(--color-navy-900)",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: "0.75rem",
              }}
            >
              {event.name}
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--stem-primary)",
                marginBottom: "1.25rem",
              }}
            >
              {event.activityType}
            </p>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-slate-700)",
                lineHeight: 1.6,
              }}
            >
              {event.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="section">
        <div className="container">
          <div
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
            }}
          >
            {/* Overview Card */}
            <div
              className="card"
              style={{
                padding: "2.25rem",
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-slate-200)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "var(--color-navy-900)",
                  marginBottom: "1rem",
                }}
              >
                Activity Overview
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-slate-700)",
                  lineHeight: 1.7,
                  marginBottom: "1.75rem",
                }}
              >
                {event.fullDescription}
              </p>

              {/* Schedule and Venue Card */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1.25rem",
                  padding: "1.25rem",
                  backgroundColor: "#F8FAFC",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-slate-200)",
                  marginBottom: "1.75rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Calendar size={20} color="var(--color-navy-900)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <div>
                    <strong style={{ fontSize: "0.85rem", color: "var(--color-slate-900)", display: "block" }}>
                      Session Schedule
                    </strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-slate-600)" }}>
                      {event.date}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <MapPin size={20} color="var(--stem-primary)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <div>
                    <strong style={{ fontSize: "0.85rem", color: "var(--color-slate-900)", display: "block" }}>
                      Hosting Venue / Institution
                    </strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-slate-600)" }}>
                      {event.venue}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Users size={20} color="var(--color-slate-600)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <div>
                    <strong style={{ fontSize: "0.85rem", color: "var(--color-slate-900)", display: "block" }}>
                      Target Participants
                    </strong>
                    <span style={{ fontSize: "0.9rem", color: "var(--color-slate-600)" }}>
                      {event.targetAudience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Photographic Documentation Notice */}
              <div
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-slate-50)",
                  border: "1px solid var(--color-slate-200)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <CameraOff size={18} color="var(--color-slate-400)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--color-slate-600)" }}>
                  <strong>Event Photography: </strong>
                  Original high-resolution session photographs will be added as institutional archival records are finalized and verified for publication.
                </span>
              </div>
            </div>

            {/* Curriculum and Topics */}
            <div
              className="card"
              style={{
                padding: "2.25rem",
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-slate-200)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "var(--color-navy-900)",
                  marginBottom: "1rem",
                }}
              >
                Topics & Hands-on Modules Covered
              </h2>
              <p style={{ color: "var(--color-slate-600)", fontSize: "0.925rem", marginBottom: "1.25rem" }}>
                The curriculum structure focuses on step-by-step practical implementation and physical electronics fundamentals:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {event.topicsCovered.map((topic, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "0.85rem 1rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-slate-50)",
                      border: "1px solid var(--color-slate-200)",
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      color="var(--stem-primary)"
                      style={{ flexShrink: 0, marginTop: "0.15rem" }}
                    />
                    <span style={{ fontSize: "0.925rem", color: "var(--color-slate-800)", fontWeight: 500 }}>
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification and Responsible Record Notice */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "#FFFBEB",
                border: "1px solid #FDE68A",
                display: "flex",
                gap: "0.85rem",
                alignItems: "flex-start",
              }}
            >
              <Info size={20} color="#D97706" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
              <div>
                <strong style={{ fontSize: "0.875rem", color: "#92400E", display: "block", marginBottom: "0.25rem" }}>
                  Record Verification Notice
                </strong>
                <p style={{ fontSize: "0.85rem", color: "#92400E", lineHeight: 1.5, margin: 0 }}>
                  {event.verificationNotice}
                </p>
              </div>
            </div>

            {/* Contact / Inquire CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                padding: "1.75rem 2rem",
                borderRadius: "var(--radius-xl)",
                backgroundColor: "var(--color-navy-900)",
                color: "var(--color-white)",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-white)", marginBottom: "0.25rem" }}>
                  Interested in this Workshop format?
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-slate-300)", margin: 0 }}>
                  Contact our STEM team to plan an event or inquire about syllabus customization.
                </p>
              </div>

              <Link href="/contact?type=school" className="btn btn-stem">
                Contact Outreach Desk <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

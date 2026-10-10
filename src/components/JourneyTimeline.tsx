"use client";

import React, { useState } from "react";
import Image from "next/image";
import { JOURNEY_MILESTONES, JourneyMilestone } from "@/data/journey";
import { CheckCircle2, ChevronRight, Maximize2, Sparkles, Briefcase, Users, Microchip, GraduationCap, X } from "lucide-react";

export default function JourneyTimeline() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [modalImage, setModalImage] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const iconsMap: Record<string, React.ReactNode> = {
    "college-club": <Users className="w-5 h-5" />,
    "first-prototype": <Microchip className="w-5 h-5" />,
    "stem-workshops": <GraduationCap className="w-5 h-5" />,
    "full-company": <Briefcase className="w-5 h-5" />,
  };

  const filteredMilestones =
    activeTab === "all"
      ? JOURNEY_MILESTONES
      : JOURNEY_MILESTONES.filter((m) => m.id === activeTab);

  return (
    <section className="section" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
          <span className="badge badge-parent" style={{ marginBottom: "1rem", display: "inline-flex", gap: "0.5rem" }}>
            <Sparkles size={14} /> Our Evolution & Journey
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 3vw + 1rem, 2.75rem)", marginBottom: "1rem" }}>
            From a Student Club to an MSME-Registered Venture
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
            What began as a group of passionate engineering students soldering hardware in a lab has grown into <strong>ALISTRON</strong>—an MSME-registered venture focused on practical STEM education and emerging NeuroTech research.
          </p>

          {/* Interactive Phase Selector */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "2rem",
              padding: "0.5rem",
              backgroundColor: "var(--color-slate-100)",
              borderRadius: "var(--radius-full)",
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <button
              onClick={() => setActiveTab("all")}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.875rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                backgroundColor: activeTab === "all" ? "var(--color-navy-900)" : "transparent",
                color: activeTab === "all" ? "var(--color-white)" : "var(--color-slate-700)",
                transition: "all 0.2s ease",
              }}
            >
              All Milestones
            </button>
            {JOURNEY_MILESTONES.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: activeTab === m.id ? "var(--color-navy-900)" : "transparent",
                  color: activeTab === m.id ? "var(--color-white)" : "var(--color-slate-700)",
                  transition: "all 0.2s ease",
                }}
              >
                {m.phase}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
          {/* Vertical central guide line (visible when showing all) */}
          {activeTab === "all" && (
            <div
              className="timeline-line"
              style={{
                position: "absolute",
                top: "20px",
                bottom: "20px",
                left: "50%",
                width: "4px",
                backgroundColor: "var(--color-slate-200)",
                transform: "translateX(-50%)",
                borderRadius: "2px",
                zIndex: 0,
              }}
            />
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {filteredMilestones.map((m, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={m.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: activeTab === "all" ? "repeat(auto-fit, minmax(320px, 1fr))" : "1fr",
                    gap: "2rem",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Photo Card */}
                  <div
                    className="card"
                    style={{
                      order: activeTab === "all" && !isEven ? 2 : 1,
                      padding: "0.75rem",
                      overflow: "hidden",
                      boxShadow: "var(--shadow-lg)",
                      border: "1px solid var(--color-slate-200)",
                      backgroundColor: "var(--color-white)",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "260px",
                        borderRadius: "calc(var(--radius-md) - 4px)",
                        overflow: "hidden",
                        backgroundColor: m.id === "first-prototype" ? "#D9D9D9" : "var(--color-slate-900)",
                      }}
                    >
                      <Image
                        src={m.image}
                        alt={m.title}
                        fill
                        style={{ objectFit: m.id === "first-prototype" ? "contain" : "cover" }}
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority={index === 0}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: m.id === "first-prototype" ? "none" : "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)",
                        }}
                      />
                      <button
                        onClick={() =>
                          setModalImage({
                            src: m.image,
                            title: m.title,
                            caption: m.imageCaption || (m.isOriginalPhoto ? "Original Archival Image" : "Illustrative Concept Image"),
                          })
                        }
                        style={{
                          position: "absolute",
                          top: "12px",
                          right: "12px",
                          background: "rgba(15, 23, 42, 0.75)",
                          backdropFilter: "blur(4px)",
                          color: "#fff",
                          border: "none",
                          borderRadius: "50%",
                          width: "36px",
                          height: "36px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "transform 0.2s ease",
                        }}
                        title="Expand Image"
                      >
                        <Maximize2 size={16} />
                      </button>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          left: "12px",
                          right: "12px",
                          color: "var(--color-white)",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "rgba(15, 23, 42, 0.75)",
                          backdropFilter: "blur(4px)",
                          padding: "0.35rem 0.65rem",
                          borderRadius: "var(--radius-sm)",
                        }}
                      >
                        <span>
                          {m.isOriginalPhoto ? "📸 " : "🎨 "}
                          {m.imageCaption || (m.isOriginalPhoto ? "Original Archival Photograph" : "Illustrative Concept Image")}
                        </span>
                        <span style={{ fontSize: "0.75rem", opacity: 0.85 }}>Click to enlarge</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Details Card */}
                  <div
                    className="card"
                    style={{
                      order: activeTab === "all" && !isEven ? 1 : 2,
                      padding: "2rem",
                      borderLeft: isEven ? "4px solid var(--neuro-primary)" : "4px solid var(--stem-primary)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          padding: "0.35rem 0.75rem",
                          borderRadius: "var(--radius-full)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          backgroundColor: isEven ? "var(--neuro-bg-subtle)" : "var(--stem-bg-subtle)",
                          color: isEven ? "var(--neuro-primary)" : "var(--stem-primary)",
                          border: `1px solid ${isEven ? "var(--neuro-border)" : "var(--stem-border)"}`,
                        }}
                      >
                        {iconsMap[m.id]} {m.badge}
                      </span>
                      <span style={{ fontSize: "0.875rem", color: "var(--color-slate-500)", fontWeight: 600 }}>
                        {m.year}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.4rem", color: "var(--color-navy-900)", marginBottom: "0.5rem" }}>
                      {m.title}
                    </h3>
                    <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-slate-600)", marginBottom: "1rem" }}>
                      {m.tagline}
                    </p>

                    <p style={{ fontSize: "0.925rem", color: "var(--color-slate-700)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                      {m.description}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {m.highlights.map((h, hIdx) => (
                        <div key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-slate-700)" }}>
                          <CheckCircle2 size={16} color={isEven ? "var(--neuro-primary)" : "var(--stem-primary)"} style={{ marginTop: "2px", flexShrink: 0 }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note for User's Own Photo Uploads */}
        <div
          style={{
            marginTop: "4rem",
            maxWidth: "780px",
            marginInline: "auto",
            padding: "1.5rem",
            borderRadius: "var(--radius-lg)",
            backgroundColor: "var(--color-navy-900)",
            color: "var(--color-white)",
            textAlign: "center",
            boxShadow: "var(--shadow-xl)",
          }}
        >
          <h4 style={{ color: "var(--color-white)", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            Add & Swap Genuine Project Photography
          </h4>
          <p style={{ color: "var(--color-slate-300)", fontSize: "0.925rem", lineHeight: 1.6, marginBottom: "0" }}>
            Genuine project and workshop photographs can be placed in <code>public/images/journey/</code> replacing <code>club-founding.jpg</code>, <code>early-prototype.jpg</code>, <code>stem-workshop.jpg</code>, or <code>venture-concept.jpg</code>. They will automatically render across this timeline.
          </p>
        </div>
      </div>

      {/* Lightbox Photo Modal */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "rgba(7, 12, 27, 0.88)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "900px",
              width: "100%",
              backgroundColor: "var(--color-slate-900)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              border: "1px solid var(--color-slate-700)",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "500px" }}>
              <Image src={modalImage.src} alt={modalImage.title} fill style={{ objectFit: "contain" }} />
            </div>
            <div
              style={{
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid var(--color-slate-800)",
                backgroundColor: "var(--color-navy-950)",
              }}
            >
              <div>
                <h4 style={{ color: "var(--color-white)", fontSize: "1.1rem" }}>{modalImage.title}</h4>
                <p style={{ color: "var(--color-slate-400)", fontSize: "0.8rem", margin: 0 }}>
                  {modalImage.caption || "Archival Milestone Record"}
                </p>
              </div>
              <button
                onClick={() => setModalImage(null)}
                style={{
                  background: "var(--color-slate-800)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { JOURNEY_MILESTONES } from "@/data/journey";
import { Check, Maximize2, Briefcase, Users, Microchip, GraduationCap, X } from "lucide-react";

export default function JourneyTimeline() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

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
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
          <span className="badge" style={{ marginBottom: "0.875rem" }}>
            Our journey
          </span>
          <h2 style={{ marginBottom: "1rem" }}>
            From a student club to an MSME-registered venture
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
            What began as a group of passionate engineering students soldering hardware in a lab has grown into Alistron, an MSME-registered venture focused on practical STEM education and emerging Bionics research.
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
                        src={withBasePath(m.image)}
                        alt={m.title}
                        fill
                        style={{ objectFit: m.id === "first-prototype" ? "contain" : "cover" }}
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority={index === 0}
                      />
                      <button
                        onClick={() =>
                          setModalImage({
                            src: m.image,
                            title: m.title,
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
                        title="Expand image"
                        aria-label="Expand image"
                      >
                        <Maximize2 size={16} />
                      </button>
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
                          <Check size={16} color={isEven ? "var(--neuro-primary)" : "var(--stem-primary)"} style={{ marginTop: "2px", flexShrink: 0 }} />
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
              <Image src={withBasePath(modalImage.src)} alt={modalImage.title} fill style={{ objectFit: "contain" }} />
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

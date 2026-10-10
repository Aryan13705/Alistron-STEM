"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA, Project } from "@/data/projects";
import { Cpu, GraduationCap, Radio, ArrowRight, AlertCircle, Sparkles } from "lucide-react";

export type FilterCategory =
  | "all"
  | "Wireless IoT"
  | "Smart Agriculture"
  | "Water Management"
  | "Wearable IoT"
  | "Smart Infrastructure";

export default function ProjectGrid({ defaultFilter }: { defaultFilter?: FilterCategory }) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>(defaultFilter || "all");

  const categoriesList: { id: FilterCategory; label: string; icon?: React.ReactNode }[] = [
    { id: "all", label: `All IoT Projects (${PROJECTS_DATA.length})` },
    { id: "Wireless IoT", label: "Wireless IoT", icon: <Radio size={14} /> },
    { id: "Smart Agriculture", label: "Smart Agriculture" },
    { id: "Water Management", label: "Water Management" },
    { id: "Wearable IoT", label: "Wearable IoT" },
    { id: "Smart Infrastructure", label: "Smart Infrastructure" },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categoryTag === activeFilter;
  });

  return (
    <div>
      {/* Category Filter Pills (Scrollable on Mobile, Responsive Wrap on Desktop) */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "2.5rem",
          overflowX: "auto",
          paddingBottom: "0.75rem",
          scrollbarWidth: "thin",
          maxWidth: "100%",
        }}
      >
        {categoriesList.map((cat) => {
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1.1rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                border: isActive ? "1px solid var(--color-navy-900)" : "1px solid var(--color-slate-200)",
                backgroundColor: isActive ? "var(--color-navy-900)" : "var(--color-white)",
                color: isActive ? "var(--color-white)" : "var(--color-slate-700)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: isActive ? "var(--shadow-md)" : "none",
                flexShrink: 0,
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filteredProjects.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem", backgroundColor: "var(--color-slate-100)", borderRadius: "var(--radius-lg)" }}>
          <p style={{ color: "var(--color-slate-600)" }}>No projects found for this category filter.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {filteredProjects.map((project) => {
            const isNeuro = project.division === "neurotech";
            const isIoT = project.division === "iot";

            return (
              <div
                key={project.id}
                className={"card card-interactive " + (isNeuro ? "card-neuro" : isIoT ? "card-parent" : "card-stem")}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  padding: "1.5rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Optional Project Thumbnail */}
                {project.image && (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "180px",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      marginBottom: "1.25rem",
                      backgroundColor: "var(--color-slate-900)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                )}

                {/* Header Badges */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.875rem",
                  }}
                >
                  <span
                    className={
                      "badge " +
                      (isNeuro
                        ? "badge-neuro"
                        : isIoT
                        ? "badge-parent"
                        : "badge-stem")
                    }
                  >
                    {isNeuro ? (
                      <Cpu size={12} />
                    ) : isIoT ? (
                      <Radio size={12} />
                    ) : (
                      <GraduationCap size={12} />
                    )}
                    {isNeuro ? "NeuroTech" : isIoT ? "Wireless & IoT" : "STEM"}
                  </span>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.625rem",
                      borderRadius: "var(--radius-full)",
                      backgroundColor:
                        project.status === "Concept"
                          ? "#F1F5F9"
                          : project.status === "Prototype" || project.status === "In Progress"
                          ? "#E0F2FE"
                          : "#CCFBF1",
                      color:
                        project.status === "Concept"
                          ? "#475569"
                          : project.status === "Prototype" || project.status === "In Progress"
                          ? "#0284C7"
                          : "#0D9488",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & Category */}
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.35rem", color: "var(--color-navy-900)" }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.775rem",
                    fontWeight: 700,
                    color: "var(--color-slate-500)",
                    marginBottom: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {project.category}
                </p>

                {/* Overview / Description */}
                <p style={{ fontSize: "0.9rem", color: "var(--color-slate-700)", flexGrow: 1, marginBottom: "1.25rem", lineHeight: 1.5 }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <p
                    style={{
                      fontSize: "0.725rem",
                      fontWeight: 700,
                      color: "var(--color-slate-400)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Key Specifications
                  </p>
                  <ul style={{ listStyle: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {project.keyHighlights.slice(0, 3).map((hl, idx) => (
                      <li key={idx} style={{ fontSize: "0.825rem", color: "var(--color-slate-700)", display: "flex", gap: "0.4rem", alignItems: "flex-start" }}>
                        <span style={{ color: isNeuro ? "var(--neuro-primary)" : isIoT ? "var(--color-navy-900)" : "var(--stem-primary)", fontWeight: 700 }}>•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.25rem" }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "0.725rem",
                        fontWeight: 600,
                        backgroundColor: "var(--color-slate-100)",
                        color: "var(--color-slate-700)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Disclaimer if medical/research */}
                {project.disclaimer && (
                  <div
                    style={{
                      marginBottom: "1.25rem",
                      padding: "0.5rem 0.75rem",
                      backgroundColor: "#FFFBEB",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid #FDE68A",
                      display: "flex",
                      gap: "0.4rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <AlertCircle size={14} color="#D97706" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
                    <span style={{ fontSize: "0.725rem", color: "#92400E" }}>{project.disclaimer}</span>
                  </div>
                )}

                {/* View Project Detail Button */}
                <div style={{ marginTop: "auto", paddingTop: "0.875rem", borderTop: "1px solid var(--color-slate-200)" }}>
                  <Link
                    href={`/projects/${project.id}`}
                    className="btn btn-outline"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    View Project <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

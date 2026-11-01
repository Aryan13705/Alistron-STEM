"use client";

import React from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { TEAM_MEMBERS, TEAM_TIERS } from "@/data/team";
import { Lightbulb, Users, TrendingUp, Cpu, Wrench } from "lucide-react";

export default function TeamSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "vision":
        return <Lightbulb size={20} color="var(--brand-blue)" />;
      case "strategy":
        return <Users size={20} color="var(--brand-blue)" />;
      case "product":
        return <TrendingUp size={20} color="var(--brand-blue)" />;
      case "embedded":
        return <Cpu size={20} color="var(--brand-blue)" />;
      case "hardware":
        return <Wrench size={20} color="var(--brand-blue)" />;
      default:
        return <Cpu size={20} color="var(--brand-blue)" />;
    }
  };

  return (
    <section
      className="section"
      style={{
        background: "var(--color-slate-50)",
        borderTop: "1px solid var(--color-slate-200)",
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem" }}>
          <span className="badge" style={{ marginBottom: "0.875rem" }}>
            Our team
          </span>
          <h2 style={{ marginBottom: "1rem" }}>
            The people behind Alistron
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
            Engineers and researchers building practical technology for STEM education and assistive bionics.
          </p>
        </div>

        {/* One row per tier, in hierarchy order */}
        {TEAM_TIERS.map((tier) => (
          <div key={tier.role} className="team-tier">
            <h3 className="team-tier-label">{tier.label}</h3>
            <div className="team-tier-row">
              {TEAM_MEMBERS.filter((m) => m.role === tier.role).map((member) => (
                <div
                  key={member.id}
                  className="card card-interactive team-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0",
                    overflow: "hidden",
                    border: "1px solid var(--color-slate-200)",
                    borderRadius: "var(--radius-lg)",
                    backgroundColor: "var(--color-white)",
                    boxShadow: "var(--shadow-sm)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  {/* Photo Container */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1 / 1.05",
                      backgroundColor: "var(--color-slate-200)",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={withBasePath(member.image)}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 240px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Details Body */}
                  <div
                    style={{
                      padding: "1.25rem 1rem 1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      flexGrow: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--color-navy-900)",
                        marginBottom: "0.4rem",
                        lineHeight: 1.25,
                      }}
                    >
                      {member.name}
                    </h3>

                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.2rem 0.75rem",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        backgroundColor: "var(--color-slate-100)",
                        color: "var(--brand-blue)",
                        border: "1px solid var(--color-slate-200)",
                        marginBottom: "1rem",
                      }}
                    >
                      {member.roleBadge}
                    </span>

                    {/* Divider Line */}
                    <div
                      style={{
                        width: "36px",
                        height: "2px",
                        backgroundColor: "var(--color-slate-200)",
                        marginBottom: "1rem",
                      }}
                    />

                    {/* Role Description with Icon */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        textAlign: "left",
                        marginTop: "auto",
                        width: "100%",
                        padding: "0.6rem 0.75rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--color-slate-50)",
                        border: "1px solid var(--color-slate-100)",
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          marginTop: "2px",
                          width: "32px",
                          height: "32px",
                          borderRadius: "var(--radius-md)",
                          backgroundColor: "var(--color-slate-100)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {getIcon(member.iconType)}
                      </div>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--color-slate-600)",
                          lineHeight: 1.35,
                          margin: 0,
                          fontWeight: 500,
                        }}
                      >
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

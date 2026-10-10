"use client";

import React from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/data/team";
import { Lightbulb, Users, TrendingUp, Cpu, Wrench } from "lucide-react";

export default function TeamSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "vision":
        return <Lightbulb size={20} color="#2563EB" />;
      case "strategy":
        return <Users size={20} color="#2563EB" />;
      case "product":
        return <TrendingUp size={20} color="#2563EB" />;
      case "embedded":
        return <Cpu size={20} color="#2563EB" />;
      case "hardware":
        return <Wrench size={20} color="#2563EB" />;
      default:
        return <Cpu size={20} color="#2563EB" />;
    }
  };

  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        borderTop: "1px solid var(--color-slate-200)",
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.35rem 1rem",
              borderRadius: "var(--radius-full)",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              backgroundColor: "#E0ECFD",
              color: "#1D4ED8",
              marginBottom: "1rem",
            }}
          >
            OUR TEAM
          </span>
          <h2 style={{ fontSize: "clamp(2.25rem, 3.5vw + 1rem, 3rem)", fontWeight: 800, color: "var(--color-navy-900)", marginBottom: "1rem" }}>
            Meet the <span style={{ color: "#2563EB" }}>Team</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--color-slate-600)", lineHeight: 1.6 }}>
            A dedicated team of engineers, researchers, and innovators working towards practical technology solutions in STEM education and emerging NeuroTech research.
          </p>
        </div>

        {/* 5-Member Responsive Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="card card-interactive"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0",
                overflow: "hidden",
                border: "1px solid #E2E8F0",
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
                  backgroundColor: "#E2E8F0",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={member.image}
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
                    backgroundColor: "#EFF6FF",
                    color: "#2563EB",
                    border: "1px solid #BFDBFE",
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
                    backgroundColor: "#E2E8F0",
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
                    backgroundColor: "#F8FAFC",
                    border: "1px solid #F1F5F9",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      marginTop: "2px",
                      width: "32px",
                      height: "32px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "#EFF6FF",
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
    </section>
  );
}

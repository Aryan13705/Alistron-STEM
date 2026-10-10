"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  ShieldAlert,
  GraduationCap,
  Cpu,
  CheckCircle2,
  CameraOff,
  ExternalLink,
} from "lucide-react";
import { AlistronEvent } from "@/data/events";

interface EventCardProps {
  event: AlistronEvent;
  featured?: boolean;
}

export default function EventCard({ event, featured = false }: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "School Outreach":
        return {
          bg: "rgba(13, 148, 136, 0.08)",
          text: "#0D9488",
          border: "rgba(13, 148, 136, 0.25)",
        };
      case "Workshops":
        return {
          bg: "rgba(79, 70, 229, 0.08)",
          text: "#4F46E5",
          border: "rgba(79, 70, 229, 0.25)",
        };
      case "Robotics":
        return {
          bg: "rgba(2, 132, 199, 0.08)",
          text: "#0284C7",
          border: "rgba(2, 132, 199, 0.25)",
        };
      case "Arduino":
        return {
          bg: "rgba(217, 119, 6, 0.08)",
          text: "#D97706",
          border: "rgba(217, 119, 6, 0.25)",
        };
      default:
        return {
          bg: "var(--color-slate-100)",
          text: "var(--color-navy-900)",
          border: "var(--color-slate-300)",
        };
    }
  };

  const catStyle = getCategoryColor(event.category);

  return (
    <div
      className="card card-interactive"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "1.75rem",
        borderRadius: "var(--radius-lg)",
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-slate-200)",
        boxShadow: featured ? "0 10px 25px -5px rgba(11, 19, 43, 0.08)" : "var(--shadow-sm)",
        transition: "all 0.25s ease",
        position: "relative",
      }}
    >
      {/* Top Header Row: Category Badge & Status */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.3rem 0.75rem",
            borderRadius: "var(--radius-full)",
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            backgroundColor: catStyle.bg,
            color: catStyle.text,
            border: `1px solid ${catStyle.border}`,
          }}
        >
          {event.category === "School Outreach" ? (
            <GraduationCap size={13} />
          ) : (
            <Cpu size={13} />
          )}
          {event.category}
        </span>

        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "0.25rem 0.65rem",
            borderRadius: "var(--radius-full)",
            backgroundColor: "var(--color-slate-100)",
            color: "var(--color-slate-600)",
            border: "1px solid var(--color-slate-200)",
          }}
        >
          {event.status}
        </span>
      </div>

      {/* Activity Title */}
      <h3
        style={{
          fontSize: "1.35rem",
          fontWeight: 800,
          color: "var(--color-navy-900)",
          marginBottom: "0.4rem",
          lineHeight: 1.25,
        }}
      >
        {event.name}
      </h3>

      {/* Activity Type Subtitle */}
      <p
        style={{
          fontSize: "0.825rem",
          fontWeight: 700,
          color: "var(--stem-primary)",
          marginBottom: "0.875rem",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {event.activityType}
      </p>

      {/* Short Description */}
      <p
        style={{
          fontSize: "0.925rem",
          color: "var(--color-slate-700)",
          lineHeight: 1.55,
          marginBottom: "1.25rem",
        }}
      >
        {event.shortDescription}
      </p>

      {/* Photography Status Indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.6rem 0.85rem",
          borderRadius: "var(--radius-md)",
          backgroundColor: event.hasOriginalPhoto ? "#ECFDF5" : "var(--color-slate-50)",
          border: `1px solid ${event.hasOriginalPhoto ? "#A7F3D0" : "var(--color-slate-200)"}`,
          marginBottom: "1.25rem",
          fontSize: "0.775rem",
          color: event.hasOriginalPhoto ? "#065F46" : "var(--color-slate-500)",
        }}
      >
        {event.hasOriginalPhoto && event.image ? (
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Sparkles size={14} color="#059669" />
            <span>Verified Original Photograph Attached</span>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <CameraOff size={14} color="var(--color-slate-400)" />
            <span>Original Event Photographs: Pending Archival Verification</span>
          </div>
        )}
      </div>

      {/* Date & Venue Section (Transparently noted when unverified) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.45rem",
          padding: "0.75rem 0.9rem",
          borderRadius: "var(--radius-md)",
          backgroundColor: "#F8FAFC",
          border: "1px solid var(--color-slate-200)",
          marginBottom: "1.25rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.825rem", color: "var(--color-slate-700)" }}>
          <Calendar size={14} color="var(--color-navy-900)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
          <span>
            <strong style={{ color: "var(--color-slate-900)" }}>Date: </strong>
            {event.date}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.825rem", color: "var(--color-slate-700)" }}>
          <MapPin size={14} color="var(--stem-primary)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
          <span>
            <strong style={{ color: "var(--color-slate-900)" }}>Venue: </strong>
            {event.venue}
          </span>
        </div>
      </div>

      {/* Topics Covered Preview */}
      <div style={{ marginBottom: "1.25rem", flexGrow: 1 }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--color-slate-500)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "0.6rem",
          }}
        >
          Curriculum & Topics Covered:
        </p>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            margin: 0,
          }}
        >
          {event.topicsCovered.slice(0, isExpanded ? event.topicsCovered.length : 3).map((topic, idx) => (
            <li
              key={idx}
              style={{
                fontSize: "0.825rem",
                color: "var(--color-slate-700)",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.45rem",
                lineHeight: 1.4,
              }}
            >
              <CheckCircle2
                size={14}
                color="var(--stem-primary)"
                style={{ flexShrink: 0, marginTop: "0.15rem" }}
              />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Expandable Section if Toggled */}
      {isExpanded && (
        <div
          style={{
            padding: "1rem",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--color-slate-50)",
            border: "1px solid var(--color-slate-200)",
            marginBottom: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div>
            <strong style={{ fontSize: "0.8rem", color: "var(--color-navy-900)", display: "block", marginBottom: "0.25rem" }}>
              Detailed Description:
            </strong>
            <p style={{ fontSize: "0.85rem", color: "var(--color-slate-600)", lineHeight: 1.5 }}>
              {event.fullDescription}
            </p>
          </div>

          <div>
            <strong style={{ fontSize: "0.8rem", color: "var(--color-navy-900)", display: "block", marginBottom: "0.25rem" }}>
              Target Audience:
            </strong>
            <p style={{ fontSize: "0.85rem", color: "var(--color-slate-600)" }}>
              {event.targetAudience}
            </p>
          </div>

          <div
            style={{
              padding: "0.6rem 0.75rem",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "#FFFBEB",
              border: "1px solid #FDE68A",
              display: "flex",
              gap: "0.4rem",
              alignItems: "flex-start",
            }}
          >
            <ShieldAlert size={14} color="#D97706" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
            <p style={{ fontSize: "0.725rem", color: "#92400E", margin: 0, lineHeight: 1.4 }}>
              <strong>Notice:</strong> {event.verificationNotice}
            </p>
          </div>
        </div>
      )}

      {/* Action Footer: Expand Toggle & Full Detail Page Link */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "1rem",
          borderTop: "1px solid var(--color-slate-200)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.35rem",
            padding: "0.5rem 0.75rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-slate-300)",
            backgroundColor: isExpanded ? "var(--color-slate-100)" : "var(--color-white)",
            color: "var(--color-slate-700)",
            fontSize: "0.825rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={14} />
            </>
          ) : (
            <>
              Quick Overview <ChevronDown size={14} />
            </>
          )}
        </button>

        <Link
          href={`/events/${event.slug}`}
          className="btn btn-primary-navy"
          style={{
            flex: 1,
            justifyContent: "center",
            fontSize: "0.825rem",
            padding: "0.5rem 0.75rem",
          }}
        >
          Full Details <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

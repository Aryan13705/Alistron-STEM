"use client";

import React, { useState } from "react";
import { ALISTRON_EVENTS } from "@/data/events";
import EventCard from "@/components/EventCard";
import { Sparkles, Calendar, GraduationCap, Cpu, Layers } from "lucide-react";

export type EventFilter = "All Events" | "Workshops" | "Robotics" | "Arduino" | "School Outreach";

interface EventGridProps {
  initialFilter?: EventFilter;
  maxItems?: number;
  featuredOnly?: boolean;
}

export default function EventGrid({
  initialFilter = "All Events",
  maxItems,
  featuredOnly = false,
}: EventGridProps) {
  const [activeFilter, setActiveFilter] = useState<EventFilter>(initialFilter);

  const filters: { id: EventFilter; label: string; icon: React.ReactNode }[] = [
    {
      id: "All Events",
      label: `All Activities (${ALISTRON_EVENTS.length})`,
      icon: <Layers size={14} />,
    },
    {
      id: "Workshops",
      label: "Workshops",
      icon: <Sparkles size={14} />,
    },
    {
      id: "Robotics",
      label: "Robotics",
      icon: <Cpu size={14} />,
    },
    {
      id: "Arduino",
      label: "Arduino",
      icon: <Cpu size={14} />,
    },
    {
      id: "School Outreach",
      label: "School Outreach",
      icon: <GraduationCap size={14} />,
    },
  ];

  const filteredEvents = ALISTRON_EVENTS.filter((event) => {
    if (activeFilter === "All Events") return true;
    return event.categories.includes(activeFilter);
  });

  const displayedEvents = maxItems ? filteredEvents.slice(0, maxItems) : filteredEvents;

  return (
    <div>
      {/* Category Filter Pills (Horizontal Scroll on Mobile, Flex on Desktop) */}
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
        {filters.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.5rem 1.15rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                border: isActive
                  ? "1px solid var(--color-navy-900)"
                  : "1px solid var(--color-slate-200)",
                backgroundColor: isActive ? "var(--color-navy-900)" : "var(--color-white)",
                color: isActive ? "var(--color-white)" : "var(--color-slate-700)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: isActive ? "var(--shadow-md)" : "none",
                flexShrink: 0,
              }}
            >
              {f.icon}
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Events */}
      {displayedEvents.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3.5rem 1.5rem",
            backgroundColor: "var(--color-slate-100)",
            borderRadius: "var(--radius-lg)",
            border: "1px dashed var(--color-slate-300)",
          }}
        >
          <Calendar size={32} color="var(--color-slate-400)" style={{ margin: "0 auto 1rem" }} />
          <h4 style={{ fontSize: "1.1rem", color: "var(--color-navy-900)", marginBottom: "0.35rem" }}>
            No activities in this category
          </h4>
          <p style={{ color: "var(--color-slate-600)", fontSize: "0.9rem" }}>
            Select another category or view all registered activities.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {displayedEvents.map((event) => (
            <EventCard key={event.id} event={event} featured={featuredOnly} />
          ))}
        </div>
      )}
    </div>
  );
}

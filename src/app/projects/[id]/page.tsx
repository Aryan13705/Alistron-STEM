import React from "react";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import {
  ArrowLeft,
  Cpu,
  GraduationCap,
  Radio,
  AlertCircle,
  Check,
  GitBranch,
  ExternalLink,
  Layers,
  Wrench,
  Activity,
  FileCode,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.id === resolvedParams.id);
  if (!project) {
    return {
      title: "Project Not Found | ALISTRON",
    };
  }

  return {
    title: `${project.title} | ${project.category} | ALISTRON`,
    description: project.overview || project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const isNeuro = project.division === "neurotech";
  const isIoT = project.division === "iot";

  return (
    <>
      {/* Top Header / Hero */}
      <section
        style={{
          background: "var(--color-slate-50)",
          paddingTop: "4rem",
          paddingBottom: "3.5rem",
          borderBottom: "1px solid var(--color-slate-200)",
        }}
      >
        <div className="container">
          <Link
            href="/projects"
            className="btn btn-outline btn-sm"
            style={{ marginBottom: "1.5rem", display: "inline-flex", gap: "0.5rem" }}
          >
            <ArrowLeft size={16} /> Back to Projects Portfolio
          </Link>

          <div style={{ maxWidth: "880px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className={"badge " + (isNeuro ? "badge-neuro" : isIoT ? "badge-parent" : "badge-stem")}>
                {isNeuro ? <Cpu size={14} /> : isIoT ? <Radio size={14} /> : <GraduationCap size={14} />}
                {isNeuro ? "Alistron Bionics" : isIoT ? "Wireless & IoT Division" : "Alistron STEM"}
              </span>

              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor:
                    project.status === "Concept"
                      ? "var(--color-slate-100)"
                      : project.status === "Prototype" || project.status === "In Progress"
                      ? "var(--color-slate-100)"
                      : "var(--color-slate-100)",
                  color:
                    project.status === "Concept"
                      ? "var(--color-slate-600)"
                      : project.status === "Prototype" || project.status === "In Progress"
                      ? "var(--color-slate-700)"
                      : "var(--color-slate-700)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                Status: {project.status}
              </span>

              <span style={{ fontSize: "0.85rem", color: "var(--color-slate-500)", fontWeight: 600 }}>
                Category: {project.category}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 3.5vw + 1rem, 3.25rem)", color: "var(--color-navy-900)", marginBottom: "1rem", lineHeight: 1.2 }}>
              {project.title}
            </h1>

            <p style={{ fontSize: "1.2rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
              {project.overview || project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left Main Details Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Disclaimer Alert Banner */}
              {project.disclaimer && (
                <div
                  style={{
                    padding: "1.25rem",
                    backgroundColor: "var(--color-slate-50)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-slate-200)",
                    display: "flex",
                    gap: "0.875rem",
                    alignItems: "flex-start",
                  }}
                >
                  <AlertCircle size={24} color="var(--color-slate-500)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <div>
                    <h4 style={{ color: "var(--color-slate-700)", fontSize: "1rem", marginBottom: "0.25rem" }}>
                      Important Technical Disclaimer
                    </h4>
                    <p style={{ color: "var(--color-slate-600)", fontSize: "0.875rem", margin: 0, lineHeight: 1.5 }}>
                      {project.disclaimer}
                    </p>
                  </div>
                </div>
              )}

              {/* Project Image / Diagram */}
              {project.image ? (
                <div
                  className="card"
                  style={{
                    padding: 0,
                    overflow: "hidden",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "400px",
                    }}
                  >
                    <Image
                      src={withBasePath(project.image)}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                      sizes="(max-width: 1200px) 100vw, 800px"
                    />
                  </div>
                </div>
              ) : null}

              {/* Problem Statement */}
              {project.problemStatement && (
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--color-navy-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <AlertCircle size={20} color="var(--color-navy-900)" /> Problem Statement
                  </h3>
                  <p style={{ fontSize: "1rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {/* Objectives */}
              {project.objectives && project.objectives.length > 0 && (
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--color-navy-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Check size={20} color="var(--stem-primary)" /> Project Objectives
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {project.objectives.map((obj, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.95rem", color: "var(--color-slate-700)" }}>
                        <span style={{ color: "var(--stem-primary)", fontWeight: 700, marginTop: "2px" }}>✓</span>
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hardware and Sensors */}
              {project.hardwareAndSensors && project.hardwareAndSensors.length > 0 && (
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--color-navy-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Wrench size={20} color="var(--neuro-primary)" /> Hardware & Sensors
                  </h3>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {project.hardwareAndSensors.map((hw, idx) => (
                      <li key={idx} style={{ fontSize: "0.95rem", color: "var(--color-slate-700)" }}>
                        {hw}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Communication Architecture */}
              {project.communicationArchitecture && (
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--color-navy-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Radio size={20} color="var(--color-navy-900)" /> Communication Architecture
                  </h3>
                  <p style={{ fontSize: "1rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
                    {project.communicationArchitecture}
                  </p>
                </div>
              )}

              {/* Software & Data Processing */}
              {project.softwareAndDataProcessing && project.softwareAndDataProcessing.length > 0 && (
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--color-navy-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <FileCode size={20} color="var(--neuro-primary)" /> Software & Data Processing
                  </h3>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {project.softwareAndDataProcessing.map((sw, idx) => (
                      <li key={idx} style={{ fontSize: "0.95rem", color: "var(--color-slate-700)" }}>
                        {sw}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Implementation Workflow */}
              {project.implementationWorkflow && project.implementationWorkflow.length > 0 && (
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--color-navy-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Layers size={20} color="var(--stem-primary)" /> Implementation Workflow
                  </h3>
                  <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {project.implementationWorkflow.map((step, idx) => (
                      <li key={idx} style={{ fontSize: "0.95rem", color: "var(--color-slate-700)" }}>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Testing & Results */}
              {project.testingAndResults && (
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--color-navy-900)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Activity size={20} color="var(--neuro-primary)" /> Testing & results
                  </h3>
                  <p style={{ fontSize: "1rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
                    {project.testingAndResults}
                  </p>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Sidebar Card: Technical Stack */}
              <div className="card" style={{ padding: "1.75rem" }}>
                <h4 style={{ fontSize: "1.15rem", marginBottom: "1rem", color: "var(--color-navy-900)" }}>
                  Tech stack
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: project.githubUrl || project.demoUrl ? "1.5rem" : 0 }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "0.3rem 0.75rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--color-slate-100)",
                        color: "var(--color-slate-800)",
                        fontSize: "0.825rem",
                        fontWeight: 600,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

{(project.githubUrl || project.demoUrl) && (
                  <>
                    <h4 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                      Links
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          <GitBranch size={16} /> GitHub repository
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary-navy"
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          <ExternalLink size={16} /> Live demo
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Sidebar Card: Division & Consultation */}
              <div className="card" style={{ padding: "1.75rem", backgroundColor: "var(--color-slate-900)", color: "#fff" }}>
                <h4 style={{ color: "#fff", fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                  Interested in this project?
                </h4>
                <p style={{ color: "var(--color-slate-300)", fontSize: "0.875rem", lineHeight: 1.5, marginBottom: "1.25rem" }}>
                  Connect with the Alistron engineering team to discuss technical specifications, school workshops, or joint R&D collaboration.
                </p>
                <Link href="/contact" className="btn btn-stem" style={{ width: "100%", justifyContent: "center" }}>
                  Talk to our engineers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

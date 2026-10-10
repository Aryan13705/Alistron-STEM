"use me";
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, GraduationCap, Cpu, HelpCircle } from "lucide-react";

export default function ContactForm({ initialType }: { initialType?: "school" | "neurotech" | "general" }) {
  const searchParams = useSearchParams();
  const queryType = searchParams.get("type") as "school" | "neurotech" | "general" | null;
  const activeType = (queryType && ["school", "neurotech", "general"].includes(queryType)) ? queryType : (initialType || "school");

  const [selectedType, setSelectedType] = useState<"school" | "neurotech" | "general" | null>(null);
  const enquiryType = selectedType || activeType;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orgPhone: "",
    message: "",
    privacyConsent: false,
    website: "", // Honeypot spam field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseDetails, setResponseDetails] = useState<{ simulated?: boolean; message?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    if (!formData.privacyConsent) {
      setStatus("error");
      setErrorMessage("Please acknowledge the Privacy Notice consent checkbox to submit your enquiry.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          orgPhone: formData.orgPhone,
          enquiryType,
          message: formData.message,
          website: formData.website,
          privacyConsent: formData.privacyConsent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit enquiry. Please check form inputs.");
      }

      setStatus("success");
      setResponseDetails(data);
      setFormData({
        name: "",
        email: "",
        orgPhone: "",
        message: "",
        privacyConsent: false,
        website: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage((err instanceof Error ? err.message : String(err)) || "An unexpected network error occurred.");
    }
  };

  const buttonClass = "btn " + (
    enquiryType === "neurotech"
      ? "btn-neuro"
      : enquiryType === "school"
      ? "btn-stem"
      : "btn-primary-navy"
  ) + " btn-lg";

  return (
    <div
      style={{
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-slate-200)",
        borderRadius: "var(--radius-xl)",
        padding: "2.5rem 2rem",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--color-navy-900)" }}>
        Send an Enquiry
      </h3>
      <p style={{ color: "var(--color-slate-600)", fontSize: "0.925rem", marginBottom: "1.75rem" }}>
        Select your enquiry path to reach the relevant Alistron representative directly.
      </p>

      {/* Selector Pills */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "0.75rem",
          marginBottom: "2rem",
        }}
      >
        <button
          type="button"
          onClick={() => setSelectedType("school")}
          style={{
            padding: "0.875rem 1rem",
            borderRadius: "var(--radius-md)",
            border: enquiryType === "school" ? "2px solid var(--stem-primary)" : "1px solid var(--color-slate-200)",
            backgroundColor: enquiryType === "school" ? "var(--stem-bg-subtle)" : "var(--color-slate-50)",
            color: enquiryType === "school" ? "var(--stem-primary)" : "var(--color-slate-700)",
            fontWeight: 700,
            fontSize: "0.875rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "all 0.2s ease",
          }}
        >
          <GraduationCap size={18} /> STEM Lab Setup
        </button>

        <button
          type="button"
          onClick={() => setSelectedType("neurotech")}
          style={{
            padding: "0.875rem 1rem",
            borderRadius: "var(--radius-md)",
            border: enquiryType === "neurotech" ? "2px solid var(--neuro-primary)" : "1px solid var(--color-slate-200)",
            backgroundColor: enquiryType === "neurotech" ? "var(--neuro-bg-subtle)" : "var(--color-slate-50)",
            color: enquiryType === "neurotech" ? "var(--neuro-primary)" : "var(--color-slate-700)",
            fontWeight: 700,
            fontSize: "0.875rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "all 0.2s ease",
          }}
        >
          <Cpu size={18} /> NeuroTech Collaboration
        </button>

        <button
          type="button"
          onClick={() => setSelectedType("general")}
          style={{
            padding: "0.875rem 1rem",
            borderRadius: "var(--radius-md)",
            border: enquiryType === "general" ? "2px solid var(--color-navy-900)" : "1px solid var(--color-slate-200)",
            backgroundColor: enquiryType === "general" ? "var(--color-slate-100)" : "var(--color-slate-50)",
            color: enquiryType === "general" ? "var(--color-navy-900)" : "var(--color-slate-700)",
            fontWeight: 700,
            fontSize: "0.875rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "all 0.2s ease",
          }}
        >
          <HelpCircle size={18} /> General Contact
        </button>
      </div>

      {/* Success Notification */}
      {status === "success" && (
        <div
          style={{
            backgroundColor: "#F0FDF4",
            border: "1px solid #BBF7D0",
            borderRadius: "var(--radius-md)",
            padding: "1.25rem",
            marginBottom: "1.75rem",
            display: "flex",
            gap: "0.875rem",
            alignItems: "flex-start",
          }}
        >
          <CheckCircle2 size={22} color="#16A34A" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
          <div>
            <h4 style={{ color: "#15803D", fontSize: "1.05rem", marginBottom: "0.25rem" }}>
              Enquiry Transmitted Successfully!
            </h4>
            <p style={{ color: "#166534", fontSize: "0.875rem", margin: 0 }}>
              Thank you for reaching out to Alistron. Our team has received your enquiry and will respond to your provided email address shortly.
            </p>
            {responseDetails?.simulated && (
              <p style={{ color: "#15803D", fontSize: "0.775rem", marginTop: "0.5rem", fontStyle: "italic" }}>
                Notice: Server operating in verified mock logging mode (Resend optional variables ready).
              </p>
            )}
          </div>
        </div>
      )}

      {/* Error Notification */}
      {status === "error" && (
        <div
          style={{
            backgroundColor: "#FEF2F2",
            border: "1px solid #FECACA",
            borderRadius: "var(--radius-md)",
            padding: "1rem 1.25rem",
            marginBottom: "1.75rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          <AlertCircle size={20} color="#DC2626" style={{ flexShrink: 0 }} />
          <p style={{ color: "#991B1B", fontSize: "0.875rem", margin: 0 }}>{errorMessage}</p>
        </div>
      )}

      {/* Form Elements */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Honeypot hidden input */}
        <div style={{ display: "none" }} aria-hidden="true">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>

        {/* Full Name */}
        <div>
          <label
            htmlFor="form-name"
            style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-slate-800)", marginBottom: "0.375rem" }}
          >
            Full Name <span style={{ color: "#DC2626" }}>*</span>
          </label>
          <input
            id="form-name"
            type="text"
            required
            placeholder="e.g. Dr. Ramesh Kumar / Principal Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-slate-300)",
              fontSize: "0.95rem",
              backgroundColor: "var(--color-white)",
            }}
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="form-email"
            style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-slate-800)", marginBottom: "0.375rem" }}
          >
            Work / Institutional Email <span style={{ color: "#DC2626" }}>*</span>
          </label>
          <input
            id="form-email"
            type="email"
            required
            placeholder="e.g. principal@school.edu.in or researcher@lab.org"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-slate-300)",
              fontSize: "0.95rem",
              backgroundColor: "var(--color-white)",
            }}
          />
        </div>

        {/* Organization / Phone */}
        <div>
          <label
            htmlFor="form-org"
            style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-slate-800)", marginBottom: "0.375rem" }}
          >
            School / Institution / Phone Number
          </label>
          <input
            id="form-org"
            type="text"
            placeholder={
              enquiryType === "school"
                ? "e.g. Modern Public School, New Delhi"
                : enquiryType === "neurotech"
                ? "e.g. Neural Systems Research Lab"
                : "Organization or phone number"
            }
            value={formData.orgPhone}
            onChange={(e) => setFormData({ ...formData, orgPhone: e.target.value })}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-slate-300)",
              fontSize: "0.95rem",
              backgroundColor: "var(--color-white)",
            }}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="form-message"
            style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-slate-800)", marginBottom: "0.375rem" }}
          >
            Enquiry Details <span style={{ color: "#DC2626" }}>*</span>
          </label>
          <textarea
            id="form-message"
            required
            rows={5}
            placeholder={
              enquiryType === "school"
                ? "Describe your school grade levels, student cohort size, and interest in STEM lab planning or Arduino workshops..."
                : enquiryType === "neurotech"
                ? "Outline your technical collaboration interests, signal processing focus, or research queries..."
                : "How can Alistron assist you?"
            }
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-slate-300)",
              fontSize: "0.95rem",
              backgroundColor: "var(--color-white)",
              resize: "vertical",
            }}
          />
        </div>

        {/* Privacy Checkbox */}
        <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
          <input
            id="form-privacy"
            type="checkbox"
            required
            checked={formData.privacyConsent}
            onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
            style={{ marginTop: "0.25rem", width: "16px", height: "16px", cursor: "pointer" }}
          />
          <label htmlFor="form-privacy" style={{ fontSize: "0.825rem", color: "var(--color-slate-600)", lineHeight: 1.4 }}>
            I acknowledge that my submitted details will be processed to respond to this enquiry in accordance with Alistron&apos;s Privacy Notice. Data will not be shared with third parties.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className={buttonClass}
          style={{ width: "100%", marginTop: "0.5rem" }}
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Transmitting Enquiry...
            </>
          ) : (
            <>
              <Send size={18} /> Send {enquiryType === "school" ? "STEM Lab" : enquiryType === "neurotech" ? "NeuroTech" : "General"} Enquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
}

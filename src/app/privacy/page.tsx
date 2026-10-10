import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | ALISTRON",
  description: "Alistron privacy policy detailing enquiry data handling, email infrastructure, and user privacy rights.",
};

export default function PrivacyPage() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          paddingTop: "5rem",
          paddingBottom: "3.5rem",
          borderBottom: "1px solid var(--color-slate-200)",
        }}
      >
        <div className="container" style={{ maxWidth: "840px" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--color-slate-600)", textDecoration: "none", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
            <ArrowLeft size={16} /> Back to Homepage
          </Link>
          <span className="badge badge-parent" style={{ marginBottom: "0.75rem", display: "block", width: "fit-content" }}>
            Legal Notice & Data Policy
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 3.5vw + 1rem, 3rem)", marginBottom: "1rem" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "var(--color-slate-600)", fontSize: "0.95rem" }}>
            Last Updated: October 2026 • MSME / Udyam Registered Venture • Domain: <strong>https://alistron.in</strong>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "840px" }}>
          <div className="card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                1. Overview & Commitment
              </h3>
              <p style={{ color: "var(--color-slate-700)", lineHeight: 1.6 }}>
                ALISTRON (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website <strong>https://alistron.in</strong>. We respect your personal privacy and are committed to protecting the information you share when inquiring about our NeuroTech research or STEM laboratory services.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                2. Data We Collect
              </h3>
              <p style={{ color: "var(--color-slate-700)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                When you submit an enquiry through our contact forms, we collect:
              </p>
              <ul style={{ paddingLeft: "1.5rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
                <li>Full Name</li>
                <li>Work or Institutional Email Address</li>
                <li>School / Organization Name or Phone Number</li>
                <li>Selected Enquiry Category (STEM Lab, NeuroTech, or General)</li>
                <li>Detailed message contents and privacy consent checkbox confirmation</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                3. Purpose of Processing & Third-Party Services
              </h3>
              <p style={{ color: "var(--color-slate-700)", lineHeight: 1.6 }}>
                Your submitted data is used solely to respond to your specific enquiry, prepare school STEM proposals, or discuss research collaboration. When email delivery is active, messages are routed through <strong>Resend API</strong> as our transactional email infrastructure provider. We do not sell, rent, or trade your data to marketers or external third parties.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                4. Data Retention & Your Privacy Rights
              </h3>
              <p style={{ color: "var(--color-slate-700)", lineHeight: 1.6 }}>
                We retain submitted enquiries only as long as necessary to fulfill your request or maintain active school partnership records. You have the right to request access to your submitted data or ask for deletion at any time by emailing us.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                5. Contact Privacy Mailbox
              </h3>
              <p style={{ color: "var(--color-slate-700)", lineHeight: 1.6, marginBottom: "1rem" }}>
                For any privacy questions or data deletion requests, please contact our data coordinator:
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--neuro-primary)", fontWeight: 600 }}>
                <Mail size={18} />
                <a href="mailto:contact@alistron.in" style={{ color: "var(--neuro-primary)", textDecoration: "none" }}>
                  contact@alistron.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, ShieldCheck, Clock } from "lucide-react";

export const metadata = {
  title: "Contact & Enquiries | ALISTRON NeuroTech & STEM",
  description: "Reach Alistron for school STEM lab setup proposals, NeuroTech research collaboration, or general technical enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          paddingTop: "5rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--color-slate-200)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span className="badge badge-parent" style={{ marginBottom: "1rem" }}>
              Unified Enquiry Desk
            </span>
            <h1 style={{ fontSize: "clamp(2.25rem, 4vw + 1rem, 3.5rem)", marginBottom: "1.25rem" }}>
              Get in Touch with Alistron
            </h1>
            <p style={{ fontSize: "1.15rem", color: "var(--color-slate-700)", lineHeight: 1.6 }}>
              Whether you represent a school planning a STEM lab, an academic researcher exploring BCI collaboration, or a general visitor, our desk is ready to respond.
            </p>
          </div>
        </div>
      </section>

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
            {/* Left Info Column */}
            <div>
              <h2 style={{ fontSize: "1.85rem", marginBottom: "1rem", color: "var(--color-navy-900)" }}>
                Direct Communication Channels
              </h2>
              <p style={{ color: "var(--color-slate-600)", marginBottom: "2rem", lineHeight: 1.6 }}>
                We prioritize clear, transparent communication. Institutional school queries receive dedicated proposal review within 24-48 hours.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                <div className="card" style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                    <Mail size={22} color="var(--neuro-primary)" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>Email Channels</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        <a href="mailto:contact@alistron.in" style={{ color: "var(--neuro-primary)", fontWeight: 600, textDecoration: "none" }}>
                          contact@alistron.in
                        </a>
                        <a href="mailto:alistronllp@gmail.com" style={{ color: "var(--color-slate-700)", fontWeight: 500, textDecoration: "none", fontSize: "0.95rem" }}>
                          alistronllp@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                    <Phone size={22} color="var(--stem-primary)" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>Mobile & WhatsApp</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        <a href="tel:+919319836470" style={{ color: "var(--color-navy-900)", fontWeight: 600, textDecoration: "none" }}>
                          +91 93198 36470
                        </a>
                        <a href="tel:+918434691751" style={{ color: "var(--color-navy-900)", fontWeight: 600, textDecoration: "none" }}>
                          +91 84346 91751
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <MapPin size={22} color="var(--stem-primary)" />
                    <div>
                      <h4 style={{ fontSize: "1rem", marginBottom: "0.15rem" }}>Official Web Domain</h4>
                      <span style={{ color: "var(--color-slate-700)", fontWeight: 600 }}>
                        https://alistron.in
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <Clock size={22} color="var(--color-navy-900)" />
                    <div>
                      <h4 style={{ fontSize: "1rem", marginBottom: "0.15rem" }}>Desk Operating Hours</h4>
                      <span style={{ color: "var(--color-slate-600)", fontSize: "0.875rem" }}>
                        Monday – Saturday • 09:00 to 18:00 IST
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div
                style={{
                  backgroundColor: "var(--color-slate-100)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  border: "1px solid var(--color-slate-200)",
                }}
              >
                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--color-navy-900)" }}>
                  Institutional Promises
                </h4>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem", color: "var(--color-slate-700)" }}>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <ShieldCheck size={16} color="var(--stem-primary)" />
                    <span>No unrequested marketing spam or third-party data distribution.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <ShieldCheck size={16} color="var(--stem-primary)" />
                    <span>School STEM proposals include itemized equipment specs and terms.</span>
                  </li>
                  <li style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    <ShieldCheck size={16} color="var(--neuro-primary)" />
                    <span>NeuroTech discussions respect research intellectual property.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Form Column wrapped in Suspense */}
            <div>
              <Suspense fallback={<div className="card" style={{ padding: "3rem", textAlign: "center" }}>Loading enquiry form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

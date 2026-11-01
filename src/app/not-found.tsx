import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found | ALISTRON",
};

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "6rem", paddingBottom: "7rem" }}>
      <div className="container" style={{ maxWidth: "640px", textAlign: "center" }}>
        <span className="badge badge-parent" style={{ marginBottom: "1.25rem" }}>
          Error 404
        </span>
        <h1 style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3rem)", marginBottom: "1rem" }}>
          We couldn&apos;t find that page
        </h1>
        <p style={{ color: "var(--color-slate-600)", fontSize: "1.05rem", marginBottom: "2rem" }}>
          The link may be outdated or the page may have moved. Try one of these instead.
        </p>
        <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-brand">
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

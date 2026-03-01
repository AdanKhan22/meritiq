"use client";
import Link from "next/link";
import { University, formatFee } from "@/data/universities";

export default function UniversityHero({ uni }: { uni: University }) {
  return (
    <div style={{
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background orbs */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "20%",
        width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 2rem 2.5rem" }}>
        {/* Breadcrumb */}
        <div style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          marginBottom: "1.75rem",
          fontSize: "0.8rem", fontFamily: "var(--font-body)",
        }}>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#475569"}
          >Home</Link>
          <span style={{ color: "#334155" }}>›</span>
          <Link href="/universities" style={{ color: "#475569", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#475569"}
          >Universities</Link>
          <span style={{ color: "#334155" }}>›</span>
          <span style={{ color: "#94A3B8" }}>{uni.shortName}</span>
        </div>

        {/* Main hero row */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Logo */}
          <div style={{
            width: "80px", height: "80px", flexShrink: 0,
            background: "rgba(52,211,153,0.08)",
            border: "1px solid rgba(52,211,153,0.2)",
            borderRadius: "20px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.5rem",
          }}>
            {uni.logo}
          </div>

          {/* Title block */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                fontWeight: 900, color: "#F1F5F9",
                letterSpacing: "-0.02em", lineHeight: 1.1,
                margin: 0,
              }}>
                {uni.name}
              </h1>
              {/* Admission status */}
              <span style={{
                background: uni.admissionOpen ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${uni.admissionOpen ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "20px", padding: "0.25rem 0.85rem",
                fontSize: "0.75rem", fontWeight: 700,
                color: uni.admissionOpen ? "#34D399" : "#475569",
                fontFamily: "var(--font-body)",
                whiteSpace: "nowrap", flexShrink: 0,
              }}>
                {uni.admissionOpen ? "● Admissions Open" : "● Admissions Closed"}
              </span>
            </div>

            <p style={{
              color: "#64748B", fontFamily: "var(--font-body)",
              fontSize: "0.95rem", lineHeight: 1.65,
              marginBottom: "1.25rem", maxWidth: "680px",
            }}>
              {uni.description}
            </p>

            {/* Meta pills */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {[
                { icon: "📍", label: `${uni.city}, ${uni.province}` },
                { icon: "🏛️", label: uni.type === "public" ? "Public University" : "Private University" },
                { icon: "📅", label: `Est. ${uni.established}` },
                { icon: "👥", label: `${uni.students.toLocaleString()} students` },
                ...(uni.ranking ? [{ icon: "🏆", label: `Ranked #${uni.ranking} in Pakistan` }] : []),
              ].map((item) => (
                <span key={item.label} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px", padding: "0.3rem 0.75rem",
                  fontSize: "0.78rem", color: "#94A3B8",
                  fontFamily: "var(--font-body)",
                }}>
                  <span>{item.icon}</span>{item.label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div style={{
            display: "flex", flexDirection: "column", gap: "0.75rem",
            flexShrink: 0, minWidth: "180px",
          }}>
            <a
              href={uni.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #34D399, #059669)",
                color: "#060A16", textDecoration: "none",
                borderRadius: "10px", padding: "0.75rem 1.5rem",
                fontWeight: 700, fontSize: "0.9rem",
                fontFamily: "var(--font-body)",
                textAlign: "center", display: "block",
                boxShadow: "0 8px 30px rgba(52,211,153,0.25)",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = "0.88";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Apply Now ↗
            </a>
            <a
              href={uni.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94A3B8", textDecoration: "none",
                borderRadius: "10px", padding: "0.75rem 1.5rem",
                fontWeight: 600, fontSize: "0.875rem",
                fontFamily: "var(--font-body)",
                textAlign: "center", display: "block",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "#F1F5F9";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#94A3B8";
              }}
            >
              Official Website
            </a>
          </div>
        </div>

        {/* Quick stats strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}>
        {[
  // Only show merit stats that actually have data
  ...(uni.closingMerit.cs ? [{ label: "CS Merit", value: `${uni.closingMerit.cs}%`, color: "#34D399" }] : []),
  ...(uni.closingMerit.engineering ? [{ label: "Eng. Merit", value: `${uni.closingMerit.engineering}%`, color: "#34D399" }] : []),
  ...(uni.closingMerit.medical ? [{ label: "Medical Merit", value: `${uni.closingMerit.medical}%`, color: "#F43F5E" }] : []),
  ...(uni.closingMerit.business ? [{ label: "Business Merit", value: `${uni.closingMerit.business}%`, color: "#818CF8" }] : []),
  { label: "Annual Fee", value: formatFee(uni.annualFee.min, uni.annualFee.max), color: "#F59E0B" },
  { label: "Programs", value: `${uni.programs}+`, color: "#818CF8" },
  { label: "Hostel", value: uni.hasHostel ? "Available" : "Not Available", color: uni.hasHostel ? "#34D399" : "#475569" },
  { label: "A-Levels", value: uni.acceptsALevels ? "Accepted" : "FSc Only", color: uni.acceptsALevels ? "#34D399" : "#F59E0B" },
].map((stat) => (
            <div key={stat.label} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "12px",
              padding: "0.85rem 1rem",
            }}>
              <div style={{
                fontSize: "0.65rem", color: "#475569",
                fontFamily: "var(--font-body)",
                textTransform: "uppercase", letterSpacing: "0.06em",
                marginBottom: "0.3rem",
              }}>{stat.label}</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800, fontSize: "1.1rem",
                color: stat.color,
              }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { University, formatFee } from "@/data/universities";

export default function UniversityCard({ uni }: { uni: University }) {
  return (
    <Link href={`/universities/${uni.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "20px",
          padding: "1.5rem",
          cursor: "pointer",
          transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
          position: "relative",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.3)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(52,211,153,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        {/* Top row — logo + badges */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Logo placeholder */}
            <div style={{
              width: "48px", height: "48px",
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.15)",
              borderRadius: "14px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.5rem", flexShrink: 0,
            }}>
              {uni.logo}
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800, fontSize: "1rem",
                color: "#F1F5F9", lineHeight: 1.2,
              }}>
                {uni.shortName}
              </div>
              <div style={{
                fontSize: "0.75rem", color: "#64748B",
                fontFamily: "var(--font-body)",
                marginTop: "0.15rem",
              }}>
                {uni.city} · Est. {uni.established}
              </div>
            </div>
          </div>

          {/* Admission status badge */}
          <div style={{
            background: uni.admissionOpen
              ? "rgba(52,211,153,0.1)"
              : "rgba(255,255,255,0.04)",
            border: `1px solid ${uni.admissionOpen
              ? "rgba(52,211,153,0.25)"
              : "rgba(255,255,255,0.08)"}`,
            borderRadius: "20px",
            padding: "0.2rem 0.65rem",
            fontSize: "0.7rem", fontWeight: 600,
            color: uni.admissionOpen ? "#34D399" : "#475569",
            fontFamily: "var(--font-body)",
            whiteSpace: "nowrap",
            letterSpacing: "0.02em",
          }}>
            {uni.admissionOpen ? "● Open" : "● Closed"}
          </div>
        </div>

        {/* University full name */}
        <div style={{
          fontSize: "0.825rem",
          color: "#94A3B8",
          fontFamily: "var(--font-body)",
          lineHeight: 1.5,
          flexGrow: 1,
        }}>
          {uni.name}
        </div>

        {/* Merit & fee row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.75rem",
        }}>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "10px",
            padding: "0.6rem 0.75rem",
          }}>
            <div style={{ fontSize: "0.65rem", color: "#475569", fontFamily: "var(--font-body)", marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              CS Merit
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-display)", color: uni.closingMerit.cs ? "#34D399" : "#475569" }}>
              {uni.closingMerit.cs ? `${uni.closingMerit.cs}%` : "N/A"}
            </div>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "10px",
            padding: "0.6rem 0.75rem",
          }}>
            <div style={{ fontSize: "0.65rem", color: "#475569", fontFamily: "var(--font-body)", marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Annual Fee
            </div>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, fontFamily: "var(--font-display)", color: "#F59E0B" }}>
              {formatFee(uni.annualFee.min, uni.annualFee.max)}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {uni.tags.slice(0, 3).map((tag) => (
            <span key={tag} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "0.15rem 0.6rem",
              fontSize: "0.7rem",
              color: "#64748B",
              fontFamily: "var(--font-body)",
            }}>
              {tag}
            </span>
          ))}
          {uni.type === "public" ? (
            <span style={{
              background: "rgba(129,140,248,0.08)",
              border: "1px solid rgba(129,140,248,0.2)",
              borderRadius: "20px",
              padding: "0.15rem 0.6rem",
              fontSize: "0.7rem",
              color: "#818CF8",
              fontFamily: "var(--font-body)",
            }}>Public</span>
          ) : (
            <span style={{
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.2)",
              borderRadius: "20px",
              padding: "0.15rem 0.6rem",
              fontSize: "0.7rem",
              color: "#F59E0B",
              fontFamily: "var(--font-body)",
            }}>Private</span>
          )}
        </div>

        {/* Bottom row — programs count + hostel */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "0.75rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}>
          <span style={{ fontSize: "0.78rem", color: "#475569", fontFamily: "var(--font-body)" }}>
            {uni.programs} programs
          </span>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            {uni.hasHostel && (
              <span style={{ fontSize: "0.75rem", color: "#475569", fontFamily: "var(--font-body)" }}>
                🏠 Hostel
              </span>
            )}
            {uni.acceptsALevels && (
              <span style={{ fontSize: "0.75rem", color: "#475569", fontFamily: "var(--font-body)" }}>
                ✓ A-Levels
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
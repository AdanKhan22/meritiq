"use client";

import Link from "next/link";
import { University, formatFee } from "@/data/universities";

export default function SimilarUniversities({
  current,
  all,
}: {
  current: University;
  all: University[];
}) {
  // Find similar: same type or overlapping tags, exclude current
  const similar = all
    .filter((u) => u.slug !== current.slug)
    .map((u) => ({
      uni: u,
      score:
        (u.type === current.type ? 2 : 0) +
        u.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.uni);

  if (similar.length === 0) return null;

  return (
    <div>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "1.4rem", color: "#F1F5F9",
        letterSpacing: "-0.02em", marginBottom: "1.25rem",
      }}>Similar Universities</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "1rem",
      }}>
        {similar.map((uni) => (
          <Link key={uni.id} href={`/universities/${uni.slug}`} style={{ textDecoration: "none" }}>
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px", padding: "1.25rem",
              transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
              cursor: "pointer",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.25)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(52,211,153,0.07)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
                <div style={{
                  width: "40px", height: "40px", flexShrink: 0,
                  background: "rgba(52,211,153,0.08)",
                  border: "1px solid rgba(52,211,153,0.15)",
                  borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem",
                }}>{uni.logo}</div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: "0.95rem", color: "#F1F5F9",
                  }}>{uni.shortName}</div>
                  <div style={{ fontSize: "0.75rem", color: "#64748B", fontFamily: "var(--font-body)" }}>
                    {uni.city}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em" }}>CS Merit</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#34D399", fontSize: "1rem" }}>
                    {uni.closingMerit.cs ? `${uni.closingMerit.cs}%` : "N/A"}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.65rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Fee</div>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#F59E0B", fontSize: "0.82rem" }}>
                    {formatFee(uni.annualFee.min, uni.annualFee.max)}
                  </div>
                </div>
                <span style={{ color: "#334155", fontSize: "1.1rem" }}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Program, formatPKR } from "@/data/universityDetails";

export default function ProgramsSection({ programs }: { programs: Program[] }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = programs.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.department.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || p.degree === filter;
    return matchSearch && matchFilter;
  });

  const degrees = [...new Set(programs.map((p) => p.degree))];

  return (
    <div>
      {/* Section header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "1.4rem", color: "#F1F5F9",
            letterSpacing: "-0.02em", margin: 0,
          }}>Programs Offered</h2>
          <p style={{ color: "#64748B", fontFamily: "var(--font-body)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            {programs.length} undergraduate programs · Last merit updated 2025
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {/* Search */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "10px", padding: "0.5rem 0.85rem",
          }}>
            <svg style={{ width: "14px", color: "#475569" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search programs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                background: "transparent", border: "none", outline: "none",
                color: "#F1F5F9", fontSize: "0.8rem",
                fontFamily: "var(--font-body)", width: "150px",
                caretColor: "#34D399",
              }}
            />
          </div>

          {/* Degree filter */}
          {["all", ...degrees].map((d) => (
            <button key={d} onClick={() => setFilter(d)} style={{
              background: filter === d ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${filter === d ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.07)"}`,
              borderRadius: "8px", padding: "0.4rem 0.85rem",
              color: filter === d ? "#34D399" : "#64748B",
              fontFamily: "var(--font-body)", fontSize: "0.78rem",
              fontWeight: filter === d ? 600 : 400,
              cursor: "pointer", transition: "all 0.2s",
            }}>
              {d === "all" ? "All" : d}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        overflow: "hidden",
      }}>
        {/* Table header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 80px 100px 120px 100px",
          padding: "0.75rem 1.25rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}>
          {["Program", "Department", "Seats", "Merit", "Annual Fee", "Entry Test"].map((h) => (
            <div key={h} style={{
              fontSize: "0.65rem", color: "#475569",
              fontFamily: "var(--font-body)", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em",
            }}>{h}</div>
          ))}
        </div>

        {/* Rows */}
        {filtered.length === 0 ? (
          <div style={{ padding: "3rem", textAlign: "center", color: "#475569", fontFamily: "var(--font-body)", fontSize: "0.875rem" }}>
            No programs match your search
          </div>
        ) : (
          filtered.map((program, i) => (
            <div key={program.id} style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 80px 100px 120px 100px",
              padding: "1rem 1.25rem",
              borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
            >
              {/* Program name */}
              <div>
                <div style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "0.9rem", color: "#F1F5F9",
                  marginBottom: "0.2rem",
                }}>
                  {program.name}
                  <span style={{
                    marginLeft: "0.5rem",
                    background: "rgba(129,140,248,0.1)",
                    border: "1px solid rgba(129,140,248,0.2)",
                    borderRadius: "6px", padding: "0.1rem 0.4rem",
                    fontSize: "0.65rem", color: "#818CF8", fontWeight: 600,
                  }}>{program.degree}</span>
                </div>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {program.acceptsFsc && <span style={{ fontSize: "0.65rem", color: "#475569", fontFamily: "var(--font-body)" }}>FSc</span>}
                  {program.acceptsALevels && <span style={{ fontSize: "0.65rem", color: "#475569", fontFamily: "var(--font-body)" }}>· A-Levels</span>}
                  {program.acceptsDAE && <span style={{ fontSize: "0.65rem", color: "#475569", fontFamily: "var(--font-body)" }}>· DAE</span>}
                  <span style={{ fontSize: "0.65rem", color: "#475569", fontFamily: "var(--font-body)" }}>· {program.duration} years</span>
                </div>
              </div>

              {/* Department */}
              <div style={{
                fontSize: "0.78rem", color: "#64748B",
                fontFamily: "var(--font-body)", lineHeight: 1.4,
                paddingRight: "1rem",
              }}>
                {program.department}
              </div>

              {/* Seats */}
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "1rem", color: "#94A3B8",
              }}>
                {program.seats}
              </div>

              {/* Merit */}
              <div>
                {program.closingMerit ? (
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: "1rem", color: "#34D399",
                  }}>
                    {program.closingMerit}%
                  </span>
                ) : (
                  <span style={{ color: "#334155", fontFamily: "var(--font-body)", fontSize: "0.875rem" }}>—</span>
                )}
              </div>

              {/* Fee */}
              <div style={{
                fontFamily: "var(--font-body)", fontWeight: 600,
                fontSize: "0.85rem", color: "#F59E0B",
              }}>
                {formatPKR(program.annualFee)}
              </div>

              {/* Entry test */}
              <div>
                {program.entryTest ? (
                  <span style={{
                    background: "rgba(245,158,11,0.08)",
                    border: "1px solid rgba(245,158,11,0.2)",
                    borderRadius: "8px", padding: "0.2rem 0.5rem",
                    fontSize: "0.7rem", color: "#F59E0B",
                    fontFamily: "var(--font-body)", fontWeight: 600,
                  }}>
                    {program.entryTest}
                  </span>
                ) : (
                  <span style={{ color: "#334155", fontFamily: "var(--font-body)", fontSize: "0.875rem" }}>—</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

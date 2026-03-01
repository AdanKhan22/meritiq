"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { universities } from "@/data/universities";
import UniversityCard from "@/components/university/universitycard";
import UniversityFilters, { FilterState } from "@/components/university/universityfilters";

const defaultFilters: FilterState = {
  search: "",
  city: "",
  type: "",
  tag: "",
  admissionOpen: false,
  acceptsALevels: false,
  sortBy: "ranking",
};

export default function UniversitiesPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter + sort logic
  const filtered = useMemo(() => {
    let result = [...universities];

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.shortName.toLowerCase().includes(q) ||
          u.city.toLowerCase().includes(q)
      );
    }
    if (filters.city) result = result.filter((u) => u.city === filters.city);
    if (filters.type) result = result.filter((u) => u.type === filters.type);
    if (filters.tag) result = result.filter((u) => u.tags.includes(filters.tag));
    if (filters.admissionOpen) result = result.filter((u) => u.admissionOpen);
    if (filters.acceptsALevels) result = result.filter((u) => u.acceptsALevels);

    result.sort((a, b) => {
      switch (filters.sortBy) {
        case "merit-high": return (b.closingMerit.cs ?? 0) - (a.closingMerit.cs ?? 0);
        case "merit-low": return (a.closingMerit.cs ?? 999) - (b.closingMerit.cs ?? 999);
        case "fee-low": return a.annualFee.min - b.annualFee.min;
        case "fee-high": return b.annualFee.max - a.annualFee.max;
        case "name": return a.name.localeCompare(b.name);
        default: return (a.ranking ?? 999) - (b.ranking ?? 999);
      }
    });

    return result;
  }, [filters]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060A16",
      paddingTop: "68px",
    }}>

      {/* ── Page Header ── */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.01)",
        backdropFilter: "blur(10px)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 2rem 2rem" }}>

          {/* Breadcrumb */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            marginBottom: "1rem",
            fontSize: "0.8rem", fontFamily: "var(--font-body)",
          }}>
            <Link href="/" style={{ color: "#475569", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#475569"}
            >Home</Link>
            <span style={{ color: "#334155" }}>›</span>
            <span style={{ color: "#94A3B8" }}>Universities</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 900,
                color: "#F1F5F9",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "0.5rem",
              }}>
                Browse{" "}
                <span style={{
                  background: "linear-gradient(135deg, #34D399 0%, #F59E0B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Universities
                </span>
              </h1>
              <p style={{
                color: "#64748B",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}>
                Explore {universities.length} universities across Pakistan — compare merits, fees, and programs.
              </p>
            </div>

            {/* Search bar */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "0.6rem 1rem",
              width: "300px",
              transition: "border-color 0.2s",
            }}
              onFocus={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.4)"}
              onBlur={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"}
            >
              <svg style={{ width: "16px", height: "16px", color: "#475569", flexShrink: 0 }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search universities..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  color: "#F1F5F9", fontSize: "0.875rem",
                  fontFamily: "var(--font-body)",
                  caretColor: "#34D399",
                }}
              />
              {filters.search && (
                <button
                  onClick={() => setFilters({ ...filters, search: "" })}
                  style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: "1rem", lineHeight: 1 }}
                >×</button>
              )}
            </div>
          </div>

          {/* Stats strip */}
          <div style={{
            display: "flex", gap: "2rem", marginTop: "1.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            flexWrap: "wrap",
          }}>
            {[
              { label: "Total Universities", value: universities.length },
              { label: "Admissions Open", value: universities.filter((u) => u.admissionOpen).length },
              { label: "Public Universities", value: universities.filter((u) => u.type === "public").length },
              { label: "Accepts A-Levels", value: universities.filter((u) => u.acceptsALevels).length },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: "1.4rem", color: "#34D399",
                }}>{stat.value}</div>
                <div style={{
                  fontSize: "0.75rem", color: "#475569",
                  fontFamily: "var(--font-body)", marginTop: "0.1rem",
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>

          {/* Sidebar filters */}
          <UniversityFilters
            filters={filters}
            onChange={setFilters}
            totalResults={filtered.length}
          />

          {/* Results */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Toolbar */}
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "center", marginBottom: "1.25rem",
            }}>
              <span style={{
                fontSize: "0.85rem", color: "#64748B",
                fontFamily: "var(--font-body)",
              }}>
                Showing <span style={{ color: "#94A3B8", fontWeight: 600 }}>{filtered.length}</span> results
              </span>

              {/* View mode toggle */}
              <div style={{
                display: "flex", gap: "0.25rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px", padding: "0.2rem",
              }}>
                {(["grid", "list"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    style={{
                      padding: "0.35rem 0.65rem",
                      borderRadius: "6px",
                      border: "none",
                      background: viewMode === mode ? "rgba(52,211,153,0.12)" : "transparent",
                      color: viewMode === mode ? "#34D399" : "#475569",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                    }}
                  >
                    {mode === "grid" ? "⊞ Grid" : "≡ List"}
                  </button>
                ))}
              </div>
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div style={{
                textAlign: "center", padding: "5rem 2rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
              }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  color: "#F1F5F9", fontSize: "1.25rem", marginBottom: "0.5rem",
                }}>No universities found</h3>
                <p style={{ color: "#64748B", fontFamily: "var(--font-body)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  Try adjusting your filters or search term
                </p>
                <button
                  onClick={() => setFilters(defaultFilters)}
                  style={{
                    background: "rgba(52,211,153,0.1)",
                    border: "1px solid rgba(52,211,153,0.25)",
                    borderRadius: "10px", padding: "0.6rem 1.25rem",
                    color: "#34D399", fontFamily: "var(--font-body)",
                    fontWeight: 600, fontSize: "0.875rem", cursor: "pointer",
                  }}
                >Clear all filters</button>
              </div>
            )}

            {/* Grid view */}
            {viewMode === "grid" && filtered.length > 0 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1rem",
              }}>
                {filtered.map((uni) => (
                  <UniversityCard key={uni.id} uni={uni} />
                ))}
              </div>
            )}

            {/* List view */}
            {viewMode === "list" && filtered.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {filtered.map((uni) => (
                  <Link key={uni.id} href={`/universities/${uni.slug}`} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "16px",
                        padding: "1.25rem 1.5rem",
                        display: "flex", alignItems: "center", gap: "1.25rem",
                        transition: "border-color 0.2s, transform 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.25)";
                        (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                        (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                      }}
                    >
                      {/* Logo */}
                      <div style={{
                        width: "44px", height: "44px", flexShrink: 0,
                        background: "rgba(52,211,153,0.08)",
                        border: "1px solid rgba(52,211,153,0.15)",
                        borderRadius: "12px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.3rem",
                      }}>{uni.logo}</div>

                      {/* Name + city */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.95rem", color: "#F1F5F9" }}>
                          {uni.shortName}
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "#64748B", fontFamily: "var(--font-body)", marginTop: "0.1rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {uni.city} · {uni.type === "public" ? "Public" : "Private"} · {uni.programs} programs
                        </div>
                      </div>

                      {/* CS merit */}
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ fontSize: "0.65rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em" }}>CS Merit</div>
                        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#34D399", fontSize: "1rem" }}>
                          {uni.closingMerit.cs ? `${uni.closingMerit.cs}%` : "—"}
                        </div>
                      </div>

                      {/* Status */}
                      <div style={{
                        padding: "0.2rem 0.65rem",
                        borderRadius: "20px",
                        background: uni.admissionOpen ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${uni.admissionOpen ? "rgba(52,211,153,0.25)" : "rgba(255,255,255,0.07)"}`,
                        color: uni.admissionOpen ? "#34D399" : "#475569",
                        fontSize: "0.7rem", fontWeight: 600, flexShrink: 0,
                        fontFamily: "var(--font-body)",
                      }}>
                        {uni.admissionOpen ? "Open" : "Closed"}
                      </div>

                      {/* Arrow */}
                      <span style={{ color: "#334155", fontSize: "1rem", flexShrink: 0 }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import { entryTests, EntryTest, CATEGORY_CONFIG } from "@/data/entryTests";
import EntryTestCard from "@/components/entryTests/EntryTestCard";
import EntryTestDetail from "@/components/entryTests/EntryTestDetail";

const CATEGORIES = ["all", "engineering", "medical", "cs", "business", "general"] as const;

export default function EntryTestsPage() {
  const [selected, setSelected] = useState<EntryTest>(entryTests[0]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? entryTests
    : entryTests.filter(t => t.category === activeCategory);

  const openCount   = entryTests.filter(t => t.status === "registration-open").length;
  const upcomingCount = entryTests.filter(t => t.status === "upcoming" || t.status === "registration-open").length;

  return (
    <div style={{ minHeight: "100vh", background: "#060A16", paddingTop: "68px" }}>

      {/* ── Page header ── */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.01)",
        backdropFilter: "blur(10px)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Orbs */}
        <div style={{
          position: "absolute", top: "-60px", right: "5%",
          width: "380px", height: "380px",
          background: "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-40px", left: "10%",
          width: "250px", height: "250px",
          background: "radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 2rem 2rem" }}>

          {/* Breadcrumb */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            marginBottom: "1.25rem",
            fontSize: "0.8rem", fontFamily: "var(--font-body)",
          }}>
            <Link href="/" style={{ color: "#475569", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#475569"}
            >Home</Link>
            <span style={{ color: "#334155" }}>›</span>
            <span style={{ color: "#94A3B8" }}>Entry Tests</span>
          </div>

          {/* Title + stats */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 900, color: "#F1F5F9",
                letterSpacing: "-0.02em", lineHeight: 1.1,
                marginBottom: "0.5rem",
              }}>
                Entry{" "}
                <span style={{
                  background: "linear-gradient(135deg, #818CF8 0%, #34D399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Tests 2025
                </span>
              </h1>
              <p style={{
                color: "#64748B", fontFamily: "var(--font-body)",
                fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "520px",
              }}>
                Schedules, syllabi, and preparation guides for every major Pakistani university entry test — all in one place.
              </p>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: "2rem" }}>
              {[
                { value: entryTests.length, label: "Total Tests", color: "#818CF8" },
                { value: openCount, label: "Reg. Open", color: "#34D399" },
                { value: upcomingCount, label: "Upcoming", color: "#F59E0B" },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.75rem", color: s.color, lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.2rem" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category filter tabs */}
          <div style={{
            display: "flex", gap: "0.4rem", marginTop: "1.75rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            flexWrap: "wrap",
          }}>
            <button
              onClick={() => setActiveCategory("all")}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "20px",
                border: `1px solid ${activeCategory === "all" ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)"}`,
                background: activeCategory === "all" ? "rgba(255,255,255,0.08)" : "transparent",
                color: activeCategory === "all" ? "#F1F5F9" : "#64748B",
                fontFamily: "var(--font-body)", fontSize: "0.8rem",
                fontWeight: activeCategory === "all" ? 600 : 400,
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              All Tests
            </button>
            {(["engineering", "medical", "cs", "business", "general"] as const).map(cat => {
              const cfg = CATEGORY_CONFIG[cat];
              const isActive = activeCategory === cat;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                  padding: "0.4rem 1rem",
                  borderRadius: "20px",
                  border: `1px solid ${isActive ? cfg.border : "rgba(255,255,255,0.07)"}`,
                  background: isActive ? cfg.bg : "transparent",
                  color: isActive ? cfg.color : "#64748B",
                  fontFamily: "var(--font-body)", fontSize: "0.8rem",
                  fontWeight: isActive ? 600 : 400,
                  cursor: "pointer", transition: "all 0.2s",
                }}>
                  {cfg.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>

          {/* ── Left: test cards ── */}
          <div style={{ width: "340px", flexShrink: 0 }}>
            {/* Results count */}
            <div style={{
              fontSize: "0.78rem", color: "#475569",
              fontFamily: "var(--font-body)", marginBottom: "1rem",
            }}>
              Showing <span style={{ color: "#94A3B8", fontWeight: 600 }}>{filtered.length}</span> test{filtered.length !== 1 ? "s" : ""}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {filtered.map(test => (
                <EntryTestCard
                  key={test.id}
                  test={test}
                  onClick={t => setSelected(t)}
                  isSelected={selected?.id === test.id}
                />
              ))}

              {filtered.length === 0 && (
                <div style={{
                  textAlign: "center", padding: "3rem 1rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px dashed rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🔍</div>
                  <div style={{ color: "#475569", fontFamily: "var(--font-body)", fontSize: "0.875rem" }}>
                    No tests in this category
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Right: detail panel ── */}
          <div style={{
            flex: 1, minWidth: 0,
            position: "sticky", top: "88px",
            alignSelf: "flex-start",
            maxHeight: "calc(100vh - 110px)",
            overflowY: "auto",
            paddingRight: "4px",
          }}>
            {selected
              ? <EntryTestDetail test={selected} />
              : <EmptyDetailState />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyDetailState() {
  return (
    <div style={{
      textAlign: "center", padding: "5rem 2rem",
      background: "rgba(255,255,255,0.02)",
      border: "1px dashed rgba(255,255,255,0.07)",
      borderRadius: "20px",
    }}>
      <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>✏️</div>
      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "1.25rem", color: "#F1F5F9", marginBottom: "0.5rem",
      }}>
        Select a test to view details
      </h3>
      <p style={{
        color: "#64748B", fontFamily: "var(--font-body)",
        fontSize: "0.875rem", lineHeight: 1.65,
      }}>
        Click any entry test on the left to see full details, syllabus, dates, and preparation tips.
      </p>
    </div>
  );
}

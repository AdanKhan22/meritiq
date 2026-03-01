"use client";
import { useState } from "react";
import Link from "next/link";
import {
  meritListConfigs,
  MeritListConfig,
} from "@/data/meritLists";
import UniversitySelector from "@/components/merit/UniversitySelector";
import PortalRedirectCard from "@/components/merit/PortalRedirectCard";
import MeritSearchPanel from "@/components/merit/MeritSearchPanel";

export default function MeritListsPage() {
  const [selected, setSelected] = useState<MeritListConfig | null>(null);

  const publicCount = meritListConfigs.filter(c => c.accessType === "public").length;
  const portalCount = meritListConfigs.filter(c => c.accessType === "portal").length;

  return (
    <div style={{ minHeight: "100vh", background: "#060A16", paddingTop: "68px" }}>

      {/* ── Page header ── */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.01)",
        backdropFilter: "blur(10px)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background orb */}
        <div style={{
          position: "absolute", top: "-80px", right: "10%",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none",
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
            <span style={{ color: "#94A3B8" }}>Merit Lists</span>
          </div>

          {/* Title row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 900, color: "#F1F5F9",
                letterSpacing: "-0.02em", lineHeight: 1.1,
                marginBottom: "0.5rem",
              }}>
                Merit{" "}
                <span style={{
                  background: "linear-gradient(135deg, #34D399 0%, #F59E0B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Lists 2025</span>
              </h1>
              <p style={{
                color: "#64748B", fontFamily: "var(--font-body)",
                fontSize: "0.95rem", lineHeight: 1.6,
              }}>
                Search your name in published merit lists or get redirected to your university's official portal.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", color: "#34D399" }}>
                  {publicCount}
                </div>
                <div style={{ fontSize: "0.72rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Searchable
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", color: "#F59E0B" }}>
                  {portalCount}
                </div>
                <div style={{ fontSize: "0.72rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Portal-Based
                </div>
              </div>
            </div>
          </div>

          {/* Legend strip */}
          <div style={{
            display: "flex", gap: "1.5rem", marginTop: "1.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#34D399", display: "inline-block",
              }} />
              <span style={{ fontSize: "0.78rem", color: "#64748B", fontFamily: "var(--font-body)" }}>
                Live — search by name or roll number directly on MeritIQ
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#F59E0B", display: "inline-block",
              }} />
              <span style={{ fontSize: "0.78rem", color: "#64748B", fontFamily: "var(--font-body)" }}>
                Portal — redirects you to the university's official admissions portal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>

          {/* ── Sidebar — university list ── */}
          <div style={{
            width: "280px", flexShrink: 0,
            position: "sticky", top: "88px",
            alignSelf: "flex-start",
          }}>
            <UniversitySelector selected={selected} onSelect={setSelected} />
          </div>

          {/* ── Right panel ── */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {!selected ? (
              <EmptySelectionState onSelect={setSelected} />
            ) : selected.accessType === "portal" ? (
              <PortalRedirectCard config={selected} />
            ) : (
              <MeritSearchPanel config={selected} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Shown before any university is selected
function EmptySelectionState({ onSelect }: { onSelect: (c: MeritListConfig) => void }) {
  const featured = meritListConfigs.slice(0, 6);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Prompt card */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px dashed rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "4rem 2rem",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎓</div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "1.5rem", color: "#F1F5F9",
          letterSpacing: "-0.02em", marginBottom: "0.6rem",
        }}>
          Select a university to get started
        </h2>
        <p style={{
          color: "#64748B", fontFamily: "var(--font-body)",
          fontSize: "0.9rem", lineHeight: 1.65,
          maxWidth: "460px", margin: "0 auto",
        }}>
          Choose a university from the list on the left to search merit lists or get redirected to their official portal.
        </p>
      </div>

      {/* Quick select grid */}
      <div>
        <div style={{
          fontSize: "0.7rem", color: "#475569",
          fontFamily: "var(--font-body)", fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.06em",
          marginBottom: "0.85rem",
        }}>Quick Select</div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "0.75rem",
        }}>
          {featured.map((config) => (
            <button key={config.slug} onClick={() => onSelect(config)} style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "14px",
              padding: "1rem",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(52,211,153,0.04)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{config.logo}</span>
              <div>
                <div style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "0.85rem", color: "#F1F5F9",
                  marginBottom: "0.15rem",
                }}>
                  {config.shortName}
                </div>
                <div style={{
                  fontSize: "0.65rem",
                  color: config.accessType === "portal" ? "#F59E0B" : "#34D399",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                }}>
                  {config.accessType === "portal" ? "🔒 Portal" : "🔍 Searchable"}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import { MeritListConfig } from "@/data/meritLists";

export default function PortalRedirectCard({ config }: { config: MeritListConfig }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

      {/* Header card */}
      <div style={{
        background: "rgba(245,158,11,0.05)",
        border: "1px solid rgba(245,158,11,0.15)",
        borderRadius: "20px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "200px", height: "200px",
          background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
          {/* Logo */}
          <div style={{
            width: "56px", height: "56px", flexShrink: 0,
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.2)",
            borderRadius: "14px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.75rem",
          }}>
            {config.logo}
          </div>

          <div style={{ flex: 1 }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.25)",
              borderRadius: "20px", padding: "0.2rem 0.75rem",
              marginBottom: "0.6rem",
            }}>
              <span style={{ fontSize: "0.65rem" }}>🔒</span>
              <span style={{
                color: "#F59E0B", fontSize: "0.7rem",
                fontFamily: "var(--font-body)", fontWeight: 600,
                letterSpacing: "0.05em", textTransform: "uppercase",
              }}>Portal-Based Merit List</span>
            </div>

            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "1.5rem", color: "#F1F5F9",
              letterSpacing: "-0.02em", lineHeight: 1.1,
              marginBottom: "0.75rem",
            }}>
              {config.shortName} Merit Lists
            </h2>

            <p style={{
              color: "#94A3B8", fontFamily: "var(--font-body)",
              fontSize: "0.9rem", lineHeight: 1.65,
              maxWidth: "560px",
            }}>
              {config.portalMessage}
            </p>
          </div>
        </div>
      </div>

      {/* Steps + CTA row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "1.25rem",
        alignItems: "start",
      }}>
        {/* Steps */}
        {config.portalSteps && config.portalSteps.length > 0 && (
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            padding: "1.5rem",
          }}>
            <div style={{
              fontSize: "0.7rem", color: "#475569",
              fontFamily: "var(--font-body)", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em",
              marginBottom: "1rem",
            }}>How to check your merit</div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {config.portalSteps.map((step, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "0.85rem",
                }}>
                  {/* Step number */}
                  <div style={{
                    width: "26px", height: "26px", flexShrink: 0,
                    background: "rgba(52,211,153,0.1)",
                    border: "1px solid rgba(52,211,153,0.2)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: "0.75rem", color: "#34D399",
                  }}>
                    {i + 1}
                  </div>
                  <div style={{
                    fontSize: "0.875rem", color: "#94A3B8",
                    fontFamily: "var(--font-body)", lineHeight: 1.5,
                    paddingTop: "0.2rem",
                  }}>
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA card */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
          padding: "1.5rem",
          width: "220px",
          display: "flex", flexDirection: "column", gap: "1rem",
          alignItems: "center", textAlign: "center",
        }}>
          <div style={{ fontSize: "2rem" }}>🔗</div>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "0.95rem", color: "#F1F5F9",
              marginBottom: "0.4rem",
            }}>
              Go to Portal
            </div>
            <div style={{
              fontSize: "0.78rem", color: "#64748B",
              fontFamily: "var(--font-body)", lineHeight: 1.5,
            }}>
              Check your admission status directly on {config.shortName}'s official portal.
            </div>
          </div>

          <a
            href={config.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block", width: "100%",
              background: "linear-gradient(135deg, #34D399, #059669)",
              color: "#060A16", textDecoration: "none",
              borderRadius: "10px", padding: "0.7rem 1rem",
              fontWeight: 700, fontSize: "0.875rem",
              fontFamily: "var(--font-body)",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(52,211,153,0.2)",
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
            Open {config.shortName} Portal ↗
          </a>

          <div style={{
            fontSize: "0.68rem", color: "#334155",
            fontFamily: "var(--font-body)", lineHeight: 1.4,
          }}>
            You'll be redirected to {config.shortName}'s official website
          </div>
        </div>
      </div>

      {/* Info note */}
      <div style={{
        display: "flex", alignItems: "flex-start", gap: "0.75rem",
        background: "rgba(129,140,248,0.05)",
        border: "1px solid rgba(129,140,248,0.12)",
        borderRadius: "12px", padding: "1rem 1.25rem",
      }}>
        <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "0.1rem" }}>💡</span>
        <p style={{
          color: "#818CF8", fontFamily: "var(--font-body)",
          fontSize: "0.82rem", lineHeight: 1.6, margin: 0,
        }}>
          Want to know the <strong style={{ color: "#A5B4FC" }}>closing merit</strong> for {config.shortName} programs without logging in?
          Visit the <a href={`/universities/${config.slug}`} style={{ color: "#818CF8", textDecoration: "underline" }}>
            {config.shortName} university page
          </a> to see historical merit trends for every program.
        </p>
      </div>
    </div>
  );
}

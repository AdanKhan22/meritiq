"use client";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Enter your FSc or A-Level grades, preferred city, budget, and field of interest. Takes under 2 minutes.",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    accent: "#34D399",
    detail: "Supports FSc Pre-Engineering, Pre-Medical, ICS, A-Levels, DAE",
  },
  {
    number: "02",
    title: "Discover & Compare",
    description: "Browse all universities matching your profile. See historical merit, fees, programs, and your AI-predicted admission probability.",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: "#F59E0B",
    detail: "Side-by-side comparison, merit trend charts, program details",
  },
  {
    number: "03",
    title: "Track & Get Alerted",
    description: "Save universities to your tracker. The moment a merit list drops, you get a WhatsApp alert — no more refreshing 20 websites.",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    accent: "#818CF8",
    detail: "WhatsApp + email alerts, deadline reminders, result notifications",
  },
];

export default function HowItWorks() {
  return (
    <section style={{
      padding: "6rem 2rem",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.25)",
            borderRadius: "20px", padding: "0.35rem 1rem",
            marginBottom: "1rem",
          }}>
            <span style={{
              color: "#F59E0B", fontSize: "0.8rem",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              letterSpacing: "0.05em", textTransform: "uppercase",
            }}>How It Works</span>
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900, color: "#F1F5F9",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: "1rem",
          }}>
            From confusion to clarity<br />
            <span style={{ color: "#64748B", fontWeight: 700 }}>in three steps</span>
          </h2>
          <p style={{
            color: "#64748B", fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem", maxWidth: "480px", margin: "0 auto",
          }}>
            Designed for Pakistani students navigating one of the most stressful seasons of their lives.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          position: "relative",
        }}>
          {/* Connector line (desktop) */}
          <div style={{
            position: "absolute",
            top: "3.5rem", left: "20%", right: "20%", height: "1px",
            background: "linear-gradient(90deg, rgba(52,211,153,0.3), rgba(245,158,11,0.3), rgba(129,140,248,0.3))",
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "24px",
              padding: "2rem",
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
              cursor: "default",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = `${step.accent}40`;
                e.currentTarget.style.boxShadow = `0 20px 60px ${step.accent}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Step number */}
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "4rem", fontWeight: 900,
                color: "rgba(255,255,255,0.04)",
                lineHeight: 1,
                position: "absolute", top: "1rem", right: "1.5rem",
              }}>{step.number}</div>

              {/* Icon */}
              <div style={{
                width: "56px", height: "56px",
                background: `${step.accent}15`,
                border: `1px solid ${step.accent}30`,
                borderRadius: "16px",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: step.accent, marginBottom: "1.5rem",
              }}>{step.icon}</div>

              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.25rem", fontWeight: 800,
                color: "#F1F5F9", marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}>{step.title}</h3>

              <p style={{
                color: "#64748B", fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem",
              }}>{step.description}</p>

              <div style={{
                background: `${step.accent}08`,
                border: `1px solid ${step.accent}20`,
                borderRadius: "8px", padding: "0.5rem 0.75rem",
              }}>
                <span style={{
                  color: step.accent, fontSize: "0.75rem",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                }}>✓ {step.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const features = [
  {
    title: "AI Merit Predictor",
    description: "Enter your grades and instantly see your admission probability for every program, trained on 5 years of real merit data.",
    icon: "🧠",
    accent: "#34D399",
    tag: "Powered by ML",
    size: "large",
  },
  {
    title: "Live Merit List Alerts",
    description: "Get WhatsApp notifications the moment your followed universities post merit lists.",
    icon: "⚡",
    accent: "#F59E0B",
    tag: "Real-time",
    size: "small",
  },
  {
    title: "AI Admissions Chatbot",
    description: "Ask anything — closing merits, application steps, fee structures. Answers grounded in real university data.",
    icon: "💬",
    accent: "#818CF8",
    tag: "RAG-powered",
    size: "small",
  },
  {
    title: "University Comparison",
    description: "Compare universities side by side on merit, fees, programs, hostel, and location. Make informed decisions, not guesses.",
    icon: "⚖️",
    accent: "#F43F5E",
    tag: "Side by side",
    size: "small",
  },
  {
    title: "Application Tracker",
    description: "Track every university you've applied to in one dashboard. Never miss a step in the process.",
    icon: "📋",
    accent: "#06B6D4",
    tag: "Stay organized",
    size: "small",
  },
  {
    title: "Entry Test Hub",
    description: "MDCAT, ECAT, NUMS, NTS — all schedules, syllabi, and past papers in one place.",
    icon: "📝",
    accent: "#34D399",
    tag: "All tests",
    size: "large",
  },
];

export default function Features() {
  return (
    <section style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(52,211,153,0.1)",
            border: "1px solid rgba(52,211,153,0.25)",
            borderRadius: "20px", padding: "0.35rem 1rem",
            marginBottom: "1rem",
          }}>
            <span style={{
              color: "#34D399", fontSize: "0.8rem",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              letterSpacing: "0.05em", textTransform: "uppercase",
            }}>Features</span>
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900, color: "#F1F5F9",
            letterSpacing: "-0.02em", lineHeight: 1.1,
          }}>
            Everything you need.<br />
            <span style={{ color: "#64748B", fontWeight: 700 }}>Nothing you don't.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "1rem",
          }}
        >
          {features.map((feature, i) => {
            const isLarge = feature.size === "large";
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  padding: isLarge ? "2.5rem" : "1.75rem",
                  gridColumn: isLarge ? "span 2" : "span 1",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                  cursor: "default",
                  minHeight: isLarge ? "200px" : "180px",
                  minWidth: "0", // Prevent shrinking
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = `${feature.accent}40`;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${feature.accent}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Background glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "120px",
                    height: "120px",
                    background: `radial-gradient(circle, ${feature.accent}15 0%, transparent 70%)`,
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: isLarge ? "2.5rem" : "2rem" }}>{feature.icon}</span>
                  <span
                    style={{
                      background: `${feature.accent}15`,
                      border: `1px solid ${feature.accent}30`,
                      color: feature.accent,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      fontFamily: "'DM Sans', sans-serif",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "20px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {feature.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: isLarge ? "1.4rem" : "1.1rem",
                    fontWeight: 800,
                    color: "#F1F5F9",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    color: "#64748B",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    maxWidth: isLarge ? "480px" : "100%",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            div[style*="grid-column"] {
              grid-column: span 1 !important;
            }
          }

          @media (max-width: 768px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
            div[style*="grid-column"] {
              grid-column: span 1 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

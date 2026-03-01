"use client";
import { EntryTest, STATUS_CONFIG, CATEGORY_CONFIG, formatTestDate, getDaysUntil } from "@/data/entryTests";

export default function EntryTestDetail({ test }: { test: EntryTest }) {
  const statusCfg = STATUS_CONFIG[test.status];
  const categoryCfg = CATEGORY_CONFIG[test.category];
  const daysUntilTest = getDaysUntil(test.testDate);
  const daysUntilReg = getDaysUntil(test.registrationEnd);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

      {/* Hero card */}
      <div style={{
        background: `${test.accent}06`,
        border: `1px solid ${test.accent}20`,
        borderRadius: "20px",
        padding: "2rem",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "220px", height: "220px",
          background: `radial-gradient(circle, ${test.accent}15 0%, transparent 70%)`,
          borderRadius: "50%", pointerEvents: "none",
        }} />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
          <div style={{
            width: "60px", height: "60px", flexShrink: 0,
            background: `${test.accent}12`,
            border: `1px solid ${test.accent}25`,
            borderRadius: "16px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.8rem",
          }}>{test.icon}</div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
              <span style={{
                background: statusCfg.bg, border: `1px solid ${statusCfg.border}`,
                borderRadius: "20px", padding: "0.2rem 0.65rem",
                fontSize: "0.68rem", fontWeight: 700, color: statusCfg.color,
                fontFamily: "var(--font-body)",
              }}>{statusCfg.label}</span>
              <span style={{
                background: categoryCfg.bg, border: `1px solid ${categoryCfg.border}`,
                borderRadius: "20px", padding: "0.2rem 0.65rem",
                fontSize: "0.68rem", fontWeight: 600, color: categoryCfg.color,
                fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.05em",
              }}>{categoryCfg.label}</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "1.75rem", color: test.accent,
              letterSpacing: "-0.02em", lineHeight: 1, margin: 0,
            }}>{test.name}</h2>
            <div style={{ fontSize: "0.82rem", color: "#64748B", fontFamily: "var(--font-body)", marginTop: "0.25rem" }}>
              {test.fullName} · Conducted by {test.conductedBy}
            </div>
          </div>
        </div>

        <p style={{
          color: "#94A3B8", fontFamily: "var(--font-body)",
          fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.5rem",
        }}>
          {test.description}
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href={test.registrationUrl} target="_blank" rel="noopener noreferrer" style={{
            background: `linear-gradient(135deg, ${test.accent}, ${test.accent}99)`,
            color: "#060A16", textDecoration: "none",
            borderRadius: "10px", padding: "0.65rem 1.25rem",
            fontWeight: 700, fontSize: "0.875rem",
            fontFamily: "var(--font-body)",
            boxShadow: `0 8px 20px ${test.accent}25`,
            transition: "opacity 0.2s",
            display: "inline-block",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
          >
            Register Now ↗
          </a>
          <a href={test.officialWebsite} target="_blank" rel="noopener noreferrer" style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#94A3B8", textDecoration: "none",
            borderRadius: "10px", padding: "0.65rem 1.25rem",
            fontWeight: 600, fontSize: "0.875rem",
            fontFamily: "var(--font-body)",
            transition: "color 0.2s, border-color 0.2s",
            display: "inline-block",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = "#F1F5F9";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = "#94A3B8";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            Official Website
          </a>
          {test.syllabusUrl && (
            <a href={test.syllabusUrl} target="_blank" rel="noopener noreferrer" style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94A3B8", textDecoration: "none",
              borderRadius: "10px", padding: "0.65rem 1.25rem",
              fontWeight: 600, fontSize: "0.875rem",
              fontFamily: "var(--font-body)",
              display: "inline-block",
            }}>
              📄 Syllabus
            </a>
          )}
        </div>
      </div>

      {/* Dates timeline + test stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>

        {/* Important dates */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px", padding: "1.25rem",
        }}>
          <div style={{
            fontSize: "0.7rem", color: "#475569",
            fontFamily: "var(--font-body)", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.06em",
            marginBottom: "1rem",
          }}>📅 Important Dates</div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {[
              { label: "Registration Opens", date: test.registrationStart, highlight: false },
              { label: "Registration Closes", date: test.registrationEnd, highlight: daysUntilReg !== null && daysUntilReg > 0 && daysUntilReg <= 7 },
              { label: "Test Date", date: test.testDate, highlight: false },
              { label: "Result Date", date: test.resultDate, highlight: false },
            ].map(item => (
              <div key={item.label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{
                  fontSize: "0.82rem", color: "#64748B",
                  fontFamily: "var(--font-body)",
                }}>{item.label}</span>
                <div style={{ textAlign: "right" }}>
                  <span style={{
                    fontSize: "0.82rem", fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    color: item.highlight ? "#F43F5E" : "#94A3B8",
                  }}>
                    {formatTestDate(item.date)}
                  </span>
                  {item.label === "Test Date" && daysUntilTest !== null && daysUntilTest > 0 && (
                    <div style={{ fontSize: "0.65rem", color: test.accent, fontFamily: "var(--font-body)", fontWeight: 600 }}>
                      {daysUntilTest} days away
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test stats */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px", padding: "1.25rem",
        }}>
          <div style={{
            fontSize: "0.7rem", color: "#475569",
            fontFamily: "var(--font-body)", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.06em",
            marginBottom: "1rem",
          }}>📊 Test Details</div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { label: "Conducted By", value: test.conductedBy },
              { label: "Duration", value: `${test.duration} minutes` },
              { label: "Total Marks", value: test.totalMarks },
              { label: "Passing Marks", value: test.passingMarks ? `${test.passingMarks}%` : "No minimum" },
              { label: "Negative Marking", value: test.negativeMarking ? "⚠️ Yes" : "✓ No" },
              { label: "Frequency", value: test.frequency },
              { label: "Medium", value: test.mediumOfInstruction },
            ].map(item => (
              <div key={item.label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}>
                <span style={{ fontSize: "0.78rem", color: "#64748B", fontFamily: "var(--font-body)" }}>
                  {item.label}
                </span>
                <span style={{
                  fontSize: "0.82rem", fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  color: item.label === "Negative Marking" && item.value.includes("Yes") ? "#F43F5E" : "#94A3B8",
                  textAlign: "right", maxWidth: "55%",
                }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Syllabus breakdown */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px", padding: "1.5rem",
      }}>
        <div style={{
          fontSize: "0.7rem", color: "#475569",
          fontFamily: "var(--font-body)", fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.06em",
          marginBottom: "1.25rem",
        }}>📚 Syllabus Breakdown</div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {test.syllabus.map((section) => (
            <div key={section.subject}>
              {/* Subject header + weightage bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "0.875rem", color: "#F1F5F9",
                }}>
                  {section.subject}
                </span>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: "0.95rem", color: test.accent,
                }}>
                  {section.weightage}%
                </span>
              </div>

              {/* Progress bar */}
              <div style={{
                width: "100%", height: "5px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "3px", marginBottom: "0.5rem",
                overflow: "hidden",
              }}>
                <div style={{
                  width: `${section.weightage}%`, height: "100%",
                  background: `linear-gradient(90deg, ${test.accent}, ${test.accent}80)`,
                  borderRadius: "3px",
                  transition: "width 0.5s ease",
                }} />
              </div>

              {/* Topics */}
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {section.topics.map(topic => (
                  <span key={topic} style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "20px", padding: "0.15rem 0.6rem",
                    fontSize: "0.72rem", color: "#64748B",
                    fontFamily: "var(--font-body)",
                  }}>{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accepted by */}
      {test.acceptedBy.length > 0 && (
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px", padding: "1.25rem",
        }}>
          <div style={{
            fontSize: "0.7rem", color: "#475569",
            fontFamily: "var(--font-body)", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.06em",
            marginBottom: "1rem",
          }}>🏛️ Accepted By</div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {test.acceptedBy.map(uni => (
              <a key={uni.slug} href={`/universities/${uni.slug}`} style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px", padding: "0.6rem 0.85rem",
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${test.accent}30`;
                  (e.currentTarget as HTMLElement).style.background = `${test.accent}06`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{uni.logo}</span>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#94A3B8", fontFamily: "var(--font-body)" }}>
                  {uni.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Preparation tips */}
      <div style={{
        background: `${test.accent}05`,
        border: `1px solid ${test.accent}15`,
        borderRadius: "16px", padding: "1.25rem",
      }}>
        <div style={{
          fontSize: "0.7rem", color: "#475569",
          fontFamily: "var(--font-body)", fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.06em",
          marginBottom: "1rem",
        }}>💡 Preparation Tips</div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {test.preparationTips.map((tip, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "0.75rem",
            }}>
              <span style={{
                color: test.accent, fontFamily: "var(--font-display)",
                fontWeight: 800, fontSize: "0.85rem", flexShrink: 0,
                marginTop: "0.05rem",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{
                fontSize: "0.875rem", color: "#94A3B8",
                fontFamily: "var(--font-body)", lineHeight: 1.6,
              }}>
                {tip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

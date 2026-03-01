"use client";
import { Deadline, formatDeadlineDate, getDaysUntil } from "@/data/universityDetails";

const TYPE_CONFIG = {
  application: { color: "#34D399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.25)", icon: "📝" },
  test:        { color: "#F59E0B", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.25)",  icon: "✏️" },
  result:      { color: "#818CF8", bg: "rgba(129,140,248,0.1)", border: "rgba(129,140,248,0.25)", icon: "📋" },
  fee:         { color: "#F43F5E", bg: "rgba(244,63,94,0.1)",   border: "rgba(244,63,94,0.25)",   icon: "💳" },
  other:       { color: "#06B6D4", bg: "rgba(6,182,212,0.1)",   border: "rgba(6,182,212,0.25)",   icon: "📌" },
};

export default function DeadlinesSection({ deadlines }: { deadlines: Deadline[] }) {
  const upcoming = deadlines.filter((d) => !d.isPast);
  const past     = deadlines.filter((d) => d.isPast);

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "1.4rem", color: "#F1F5F9",
          letterSpacing: "-0.02em", margin: 0,
        }}>Important Dates</h2>
        <p style={{ color: "#64748B", fontFamily: "var(--font-body)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
          {upcoming.length} upcoming · {past.length} past
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {/* Upcoming */}
        {upcoming.map((deadline) => {
          const cfg      = TYPE_CONFIG[deadline.type];
          const daysLeft = getDaysUntil(deadline.date);
          const isUrgent = daysLeft <= 7 && daysLeft >= 0;

          return (
            <div key={deadline.id} style={{
              display: "flex", alignItems: "center", gap: "1rem",
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${isUrgent ? "rgba(244,63,94,0.2)" : "rgba(255,255,255,0.07)"}`,
              borderRadius: "14px", padding: "1rem 1.25rem",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = cfg.border}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = isUrgent ? "rgba(244,63,94,0.2)" : "rgba(255,255,255,0.07)"}
            >
              {/* Type icon */}
              <div style={{
                width: "40px", height: "40px", flexShrink: 0,
                background: cfg.bg, border: `1px solid ${cfg.border}`,
                borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1rem",
              }}>
                {cfg.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "0.9rem", color: "#F1F5F9",
                  marginBottom: "0.15rem",
                }}>
                  {deadline.title}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#64748B", fontFamily: "var(--font-body)" }}>
                  {deadline.description}
                </div>
              </div>

              {/* Date + countdown */}
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "0.875rem", color: "#94A3B8",
                  marginBottom: "0.2rem",
                }}>
                  {formatDeadlineDate(deadline.date)}
                </div>
                <div style={{
                  fontSize: "0.72rem", fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  color: isUrgent ? "#F43F5E" : cfg.color,
                  background: isUrgent ? "rgba(244,63,94,0.1)" : cfg.bg,
                  border: `1px solid ${isUrgent ? "rgba(244,63,94,0.25)" : cfg.border}`,
                  borderRadius: "20px", padding: "0.15rem 0.6rem",
                }}>
                  {daysLeft === 0 ? "Today!" : daysLeft < 0 ? "Passed" : `${daysLeft}d left`}
                </div>
              </div>
            </div>
          );
        })}

        {/* Past deadlines — collapsed */}
        {past.length > 0 && (
          <div style={{ marginTop: "0.5rem" }}>
            <div style={{
              fontSize: "0.72rem", color: "#334155",
              fontFamily: "var(--font-body)", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em",
              marginBottom: "0.5rem", paddingLeft: "0.25rem",
            }}>Past Dates</div>
            {past.map((deadline) => {
              const cfg = TYPE_CONFIG[deadline.type];
              return (
                <div key={deadline.id} style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  borderRadius: "12px", padding: "0.75rem 1rem",
                  opacity: 0.45,
                }}>
                  <div style={{
                    width: "32px", height: "32px", flexShrink: 0,
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.9rem",
                  }}>{cfg.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.85rem", color: "#64748B", fontFamily: "var(--font-body)", fontWeight: 500 }}>
                      {deadline.title}
                    </div>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#475569", fontFamily: "var(--font-body)" }}>
                    {formatDeadlineDate(deadline.date)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

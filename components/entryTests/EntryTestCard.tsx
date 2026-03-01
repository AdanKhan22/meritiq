"use client";
import { EntryTest, STATUS_CONFIG, CATEGORY_CONFIG, formatTestDate, getDaysUntil } from "@/data/entryTests";

type Props = {
  test: EntryTest;
  onClick: (test: EntryTest) => void;
  isSelected: boolean;
};

export default function EntryTestCard({ test, onClick, isSelected }: Props) {
  const statusCfg = STATUS_CONFIG[test.status];
  const categoryCfg = CATEGORY_CONFIG[test.category];
  const daysUntilTest = getDaysUntil(test.testDate);
  const daysUntilReg = getDaysUntil(test.registrationEnd);

  return (
    <div
      onClick={() => onClick(test)}
      style={{
        background: isSelected ? `${test.accent}08` : "rgba(255,255,255,0.02)",
        border: `1px solid ${isSelected ? `${test.accent}35` : "rgba(255,255,255,0.07)"}`,
        borderRadius: "20px",
        padding: "1.5rem",
        cursor: "pointer",
        transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s, background 0.25s",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        if (!isSelected) {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
          (e.currentTarget as HTMLElement).style.borderColor = `${test.accent}30`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${test.accent}10`;
        }
      }}
      onMouseLeave={e => {
        if (!isSelected) {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "-30px", right: "-30px",
        width: "120px", height: "120px",
        background: `radial-gradient(circle, ${test.accent}18 0%, transparent 70%)`,
        borderRadius: "50%", pointerEvents: "none",
      }} />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <div style={{
          width: "48px", height: "48px",
          background: `${test.accent}12`,
          border: `1px solid ${test.accent}25`,
          borderRadius: "14px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.5rem",
        }}>
          {test.icon}
        </div>

        {/* Status badge */}
        <span style={{
          background: statusCfg.bg,
          border: `1px solid ${statusCfg.border}`,
          borderRadius: "20px", padding: "0.2rem 0.65rem",
          fontSize: "0.68rem", fontWeight: 700,
          color: statusCfg.color,
          fontFamily: "var(--font-body)",
          display: "flex", alignItems: "center", gap: "0.3rem",
        }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: statusCfg.dot, display: "inline-block" }} />
          {statusCfg.label}
        </span>
      </div>

      {/* Test name */}
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "1.5rem", color: test.accent,
        letterSpacing: "-0.02em", lineHeight: 1,
        marginBottom: "0.25rem",
      }}>
        {test.name}
      </div>
      <div style={{
        fontSize: "0.78rem", color: "#64748B",
        fontFamily: "var(--font-body)", marginBottom: "0.85rem",
        lineHeight: 1.4,
      }}>
        {test.fullName}
      </div>

      {/* Category badge */}
      <span style={{
        background: categoryCfg.bg,
        border: `1px solid ${categoryCfg.border}`,
        borderRadius: "20px", padding: "0.2rem 0.65rem",
        fontSize: "0.68rem", fontWeight: 600,
        color: categoryCfg.color,
        fontFamily: "var(--font-body)",
        display: "inline-block",
        marginBottom: "1rem",
        textTransform: "uppercase", letterSpacing: "0.05em",
      }}>
        {categoryCfg.label}
      </span>

      {/* Key dates */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "0.6rem", marginBottom: "1rem",
      }}>
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "10px", padding: "0.6rem 0.75rem",
        }}>
          <div style={{ fontSize: "0.6rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>
            Test Date
          </div>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            {formatTestDate(test.testDate)}
          </div>
          {daysUntilTest !== null && daysUntilTest > 0 && (
            <div style={{ fontSize: "0.65rem", color: test.accent, fontFamily: "var(--font-body)", marginTop: "0.1rem", fontWeight: 600 }}>
              {daysUntilTest}d away
            </div>
          )}
        </div>

        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "10px", padding: "0.6rem 0.75rem",
        }}>
          <div style={{ fontSize: "0.6rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>
            Reg. Deadline
          </div>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, fontFamily: "var(--font-display)", color: "#F1F5F9" }}>
            {formatTestDate(test.registrationEnd)}
          </div>
          {daysUntilReg !== null && daysUntilReg > 0 && daysUntilReg <= 14 && (
            <div style={{ fontSize: "0.65rem", color: "#F43F5E", fontFamily: "var(--font-body)", marginTop: "0.1rem", fontWeight: 600 }}>
              {daysUntilReg}d left!
            </div>
          )}
        </div>
      </div>

      {/* Quick stats row */}
      <div style={{
        display: "flex", gap: "0.85rem",
        paddingTop: "0.85rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        flexWrap: "wrap",
      }}>
        {[
          { label: "Duration", value: `${test.duration}m` },
          { label: "Marks", value: test.totalMarks },
          { label: "Negative", value: test.negativeMarking ? "Yes" : "No" },
        ].map(stat => (
          <div key={stat.label}>
            <div style={{ fontSize: "0.58rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {stat.label}
            </div>
            <div style={{
              fontSize: "0.82rem", fontWeight: 700,
              fontFamily: "var(--font-display)",
              color: stat.label === "Negative" && stat.value === "Yes" ? "#F43F5E" : "#94A3B8",
            }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { MeritHistory } from "@/data/universityDetails";

type Track = "cs" | "engineering" | "medical" | "business";

const TRACKS: { key: Track; label: string; color: string }[] = [
  { key: "cs", label: "Computer Science", color: "#34D399" },
  { key: "engineering", label: "Engineering", color: "#F59E0B" },
  { key: "medical", label: "Medical", color: "#F43F5E" },
  { key: "business", label: "Business", color: "#818CF8" },
];

export default function MeritTrendSection({ history }: { history: MeritHistory[] }) {
  // Default to whichever track has data — not always CS
const firstAvailableTrack = TRACKS.find((t) =>
  history.some((h) => h[t.key] !== null)
)?.key ?? "cs";

const [activeTrack, setActiveTrack] = useState<Track>(firstAvailableTrack);

  // Only show tracks that have at least one data point
  const availableTracks = TRACKS.filter((t) =>
    history.some((h) => h[t.key] !== null)
  );

  const track = TRACKS.find((t) => t.key === activeTrack)!;
  const dataPoints = history.map((h) => ({ year: h.year, value: h[activeTrack] }));

  // Chart calculations
  const values = dataPoints.map((d) => d.value ?? 0).filter((v) => v > 0);
  const minVal = Math.max(0, Math.min(...values) - 5);
  const maxVal = Math.min(100, Math.max(...values) + 3);
  const range = maxVal - minVal;

  const getBarHeight = (val: number | null) => {
    if (!val) return 0;
    return ((val - minVal) / range) * 100;
  };

  const latestValue = dataPoints[dataPoints.length - 1]?.value;
  const previousValue = dataPoints[dataPoints.length - 2]?.value;
  const trend = latestValue && previousValue ? latestValue - previousValue : null;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "1.4rem", color: "#F1F5F9",
            letterSpacing: "-0.02em", margin: 0,
          }}>Merit Trends</h2>
          <p style={{ color: "#64748B", fontFamily: "var(--font-body)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Closing merit history · {history[0]?.year} – {history[history.length - 1]?.year}
          </p>
        </div>

        {/* Track selector */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {availableTracks.map((t) => (
            <button key={t.key} onClick={() => setActiveTrack(t.key)} style={{
              background: activeTrack === t.key ? `${t.color}15` : "rgba(255,255,255,0.03)",
              border: `1px solid ${activeTrack === t.key ? `${t.color}40` : "rgba(255,255,255,0.07)"}`,
              borderRadius: "8px", padding: "0.4rem 0.85rem",
              color: activeTrack === t.key ? t.color : "#64748B",
              fontFamily: "var(--font-body)", fontSize: "0.78rem",
              fontWeight: activeTrack === t.key ? 600 : 400,
              cursor: "pointer", transition: "all 0.2s",
            }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        padding: "1.75rem",
      }}>
        {/* Trend indicator */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontSize: "0.7rem", color: "#475569", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>
              2025 Closing Merit
            </div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "2.5rem", color: track.color,
              lineHeight: 1,
            }}>
              {latestValue ? `${latestValue}%` : "N/A"}
            </div>
          </div>
          {trend !== null && (
            <div style={{
              display: "flex", alignItems: "center", gap: "0.4rem",
              background: trend >= 0 ? "rgba(52,211,153,0.1)" : "rgba(244,63,94,0.1)",
              border: `1px solid ${trend >= 0 ? "rgba(52,211,153,0.25)" : "rgba(244,63,94,0.25)"}`,
              borderRadius: "10px", padding: "0.5rem 0.85rem",
            }}>
              <span style={{ color: trend >= 0 ? "#34D399" : "#F43F5E", fontSize: "1rem" }}>
                {trend >= 0 ? "↑" : "↓"}
              </span>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "0.95rem",
                color: trend >= 0 ? "#34D399" : "#F43F5E",
              }}>
                {Math.abs(trend).toFixed(1)}%
              </span>
              <span style={{ color: "#64748B", fontSize: "0.75rem", fontFamily: "var(--font-body)" }}>
                vs last year
              </span>
            </div>
          )}
        </div>

        {/* Bar chart */}
        <div style={{
          display: "flex", alignItems: "flex-end", gap: "1.5rem",
          height: "160px", position: "relative",
        }}>
          {/* Y-axis guide lines */}
          {[0, 25, 50, 75, 100].map((pct) => (
            <div key={pct} style={{
              position: "absolute",
              bottom: `${pct}%`, left: 0, right: 0,
              borderTop: "1px dashed rgba(255,255,255,0.04)",
              pointerEvents: "none",
            }} />
          ))}

          {dataPoints.map((point, i) => {
            const height = getBarHeight(point.value);
            const isLatest = i === dataPoints.length - 1;
            return (
              <div key={point.year} style={{
                flex: 1, display: "flex",
                flexDirection: "column", alignItems: "center", gap: "0.5rem",
                height: "100%", justifyContent: "flex-end",
              }}>
                {/* Value label */}
                <div style={{
                  fontSize: "0.75rem", fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: point.value ? (isLatest ? track.color : "#94A3B8") : "#334155",
                  marginBottom: "0.35rem",
                }}>
                  {point.value ? `${point.value}%` : "—"}
                </div>

                {/* Bar */}
                <div style={{
                  width: "100%", position: "relative",
                  height: `${height}%`,
                  minHeight: point.value ? "8px" : "0",
                  background: isLatest
                    ? `linear-gradient(180deg, ${track.color} 0%, ${track.color}60 100%)`
                    : `${track.color}30`,
                  borderRadius: "6px 6px 3px 3px",
                  transition: "height 0.5s ease",
                  boxShadow: isLatest ? `0 0 20px ${track.color}30` : "none",
                }} />

                {/* Year label */}
                <div style={{
                  fontSize: "0.75rem", fontFamily: "var(--font-body)",
                  color: isLatest ? "#94A3B8" : "#475569",
                  fontWeight: isLatest ? 600 : 400,
                  marginTop: "0.4rem",
                }}>
                  {point.year}
                </div>
              </div>
            );
          })}
        </div>

        {/* Insight text */}
        {trend !== null && (
          <div style={{
            marginTop: "1.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            fontSize: "0.82rem", color: "#64748B",
            fontFamily: "var(--font-body)", lineHeight: 1.65,
          }}>
            {trend > 0
              ? `📈 ${track.label} merit has risen by ${trend.toFixed(1)}% compared to last year, indicating increasing competition. Students should aim ${(trend + 1).toFixed(1)}% above last year's closing merit as a safety buffer.`
              : `📉 ${track.label} merit has decreased slightly by ${Math.abs(trend).toFixed(1)}% compared to last year. This may indicate slightly lower competition this cycle.`
            }
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import { meritListConfigs, MeritListConfig } from "@/data/meritLists";

type Props = {
  selected: MeritListConfig | null;
  onSelect: (config: MeritListConfig) => void;
};

export default function UniversitySelector({ selected, onSelect }: Props) {
  return (
    <div>
      <div style={{
        fontSize: "0.7rem", color: "#475569",
        fontFamily: "var(--font-body)", fontWeight: 600,
        textTransform: "uppercase", letterSpacing: "0.06em",
        marginBottom: "0.85rem",
      }}>
        Select University
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {meritListConfigs.map((config) => {
          const isSelected = selected?.slug === config.slug;
          const isPortal = config.accessType === "portal";

          return (
            <button
              key={config.slug}
              onClick={() => onSelect(config)}
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.75rem 1rem",
                background: isSelected ? "rgba(52,211,153,0.08)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${isSelected ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.2s",
                textAlign: "left",
                width: "100%",
              }}
              onMouseEnter={e => {
                if (!isSelected) {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }
              }}
              onMouseLeave={e => {
                if (!isSelected) {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                }
              }}
            >
              {/* Logo */}
              <div style={{
                width: "34px", height: "34px", flexShrink: 0,
                background: isSelected ? "rgba(52,211,153,0.12)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${isSelected ? "rgba(52,211,153,0.2)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "9px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem",
              }}>
                {config.logo}
              </div>

              {/* Name */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: "var(--font-body)", fontWeight: 600,
                  fontSize: "0.85rem",
                  color: isSelected ? "#34D399" : "#94A3B8",
                  marginBottom: "0.1rem",
                }}>
                  {config.shortName}
                </div>
                <div style={{
                  fontSize: "0.65rem",
                  color: isPortal ? "#F59E0B" : "#475569",
                  fontFamily: "var(--font-body)",
                }}>
                  {isPortal ? "Portal Only" : `${config.totalEntries?.toLocaleString()} entries`}
                </div>
              </div>

              {/* Type badge */}
              <div style={{
                padding: "0.15rem 0.5rem",
                borderRadius: "20px",
                fontSize: "0.6rem", fontWeight: 600,
                fontFamily: "var(--font-body)",
                flexShrink: 0,
                background: isPortal ? "rgba(245,158,11,0.1)" : "rgba(52,211,153,0.1)",
                border: `1px solid ${isPortal ? "rgba(245,158,11,0.25)" : "rgba(52,211,153,0.2)"}`,
                color: isPortal ? "#F59E0B" : "#34D399",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}>
                {isPortal ? "Portal" : "Live"}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

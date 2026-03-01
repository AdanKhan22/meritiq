"use client";
import { UniversityDetails } from "@/data/universityDetails";
import { University } from "@/data/universities";

type Props = {
  details: UniversityDetails;
  uni: University;
};

export default function UniversitySidebar({ details, uni }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

      {/* Facilities */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px", padding: "1.25rem",
      }}>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "0.95rem", color: "#F1F5F9",
          letterSpacing: "-0.01em", marginBottom: "1rem",
        }}>Facilities</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
          {details.facilities.map((f) => (
            <div key={f.label} style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "8px", padding: "0.5rem 0.75rem",
            }}>
              <span style={{ fontSize: "0.9rem" }}>{f.icon}</span>
              <span style={{ fontSize: "0.78rem", color: "#94A3B8", fontFamily: "var(--font-body)" }}>
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Campuses */}
      {details.campuses.length > 0 && (
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px", padding: "1.25rem",
        }}>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "0.95rem", color: "#F1F5F9",
            letterSpacing: "-0.01em", marginBottom: "0.85rem",
          }}>Campuses</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {details.campuses.map((c, i) => (
              <div key={c} style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                fontSize: "0.82rem", color: "#94A3B8",
                fontFamily: "var(--font-body)",
              }}>
                <span style={{
                  width: "20px", height: "20px",
                  background: i === 0 ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${i === 0 ? "rgba(52,211,153,0.25)" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.55rem",
                  color: i === 0 ? "#34D399" : "#475569",
                  flexShrink: 0, fontWeight: 700,
                }}>
                  {i === 0 ? "★" : i + 1}
                </span>
                {c}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scholarships */}
      {details.scholarships.length > 0 && (
        <div style={{
          background: "rgba(52,211,153,0.03)",
          border: "1px solid rgba(52,211,153,0.1)",
          borderRadius: "16px", padding: "1.25rem",
        }}>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "0.95rem", color: "#F1F5F9",
            letterSpacing: "-0.01em", marginBottom: "0.85rem",
          }}>🎓 Scholarships</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {details.scholarships.map((s) => (
              <div key={s} style={{
                display: "flex", alignItems: "flex-start", gap: "0.5rem",
                fontSize: "0.82rem", color: "#94A3B8",
                fontFamily: "var(--font-body)", lineHeight: 1.4,
              }}>
                <span style={{ color: "#34D399", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick info */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px", padding: "1.25rem",
      }}>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "0.95rem", color: "#F1F5F9",
          letterSpacing: "-0.01em", marginBottom: "0.85rem",
        }}>Quick Info</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { label: "Address", value: details.address, icon: "📍" },
            { label: "Email", value: details.contactEmail, icon: "✉️" },
            { label: "Phone", value: details.contactPhone, icon: "📞" },
          ].map((item) => (
            <div key={item.label}>
              <div style={{
                fontSize: "0.65rem", color: "#475569",
                fontFamily: "var(--font-body)", fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.06em",
                marginBottom: "0.2rem",
              }}>{item.icon} {item.label}</div>
              <div style={{
                fontSize: "0.8rem", color: "#94A3B8",
                fontFamily: "var(--font-body)", lineHeight: 1.4,
              }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert CTA */}
      <div style={{
        background: "linear-gradient(135deg, rgba(52,211,153,0.08), rgba(245,158,11,0.05))",
        border: "1px solid rgba(52,211,153,0.15)",
        borderRadius: "16px", padding: "1.25rem",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔔</div>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "0.95rem", color: "#F1F5F9", marginBottom: "0.4rem",
        }}>
          Get Merit List Alerts
        </div>
        <div style={{
          fontSize: "0.78rem", color: "#64748B",
          fontFamily: "var(--font-body)", lineHeight: 1.5,
          marginBottom: "1rem",
        }}>
          Get WhatsApp notifications the moment {uni.shortName} posts a new merit list.
        </div>
        <button style={{
          width: "100%",
          background: "linear-gradient(135deg, #34D399, #059669)",
          color: "#060A16", border: "none",
          borderRadius: "10px", padding: "0.65rem",
          fontWeight: 700, fontSize: "0.875rem",
          fontFamily: "var(--font-body)", cursor: "pointer",
          boxShadow: "0 8px 20px rgba(52,211,153,0.2)",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
        >
          Set Up Alert — Free
        </button>
      </div>
    </div>
  );
}

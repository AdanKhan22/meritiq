"use client";

export default function Footer() {
  const links = {
    Product: ["Universities", "Merit Lists", "Entry Tests", "Merit Predictor", "Chatbot"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service"],
  };

  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "4rem 2rem 2rem",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{
                width: "32px", height: "32px",
                background: "linear-gradient(135deg, #34D399, #F59E0B)",
                borderRadius: "8px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: "16px", color: "#060A16",
                fontFamily: "'Syne', sans-serif",
              }}>M</div>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800, fontSize: "1.25rem", color: "#F1F5F9",
              }}>Merit<span style={{ color: "#34D399" }}>IQ</span></span>
            </div>
            <p style={{
              color: "#475569", fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "280px",
              marginBottom: "1.5rem",
            }}>
              Pakistan's unified university admissions platform. Every merit list, every deadline, one place.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["𝕏", "in", "f"].map(s => (
                <a key={s} href="#" style={{
                  width: "36px", height: "36px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#475569", textDecoration: "none",
                  fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(52,211,153,0.3)";
                    e.currentTarget.style.color = "#34D399";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#475569";
                  }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700, fontSize: "0.8rem",
                color: "#94A3B8", letterSpacing: "0.08em",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>{category}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {items.map(item => (
                  <a key={item} href="#" style={{
                    color: "#475569", textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem", fontWeight: 400,
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.target.style.color = "#94A3B8"}
                    onMouseLeave={e => e.target.style.color = "#475569"}
                  >{item}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "1.5rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "0.5rem",
        }}>
          <span style={{
            color: "#334155", fontSize: "0.8rem",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            © 2025 MeritIQ. Built with ❤️ for Pakistani students.
          </span>
          <span style={{
            color: "#334155", fontSize: "0.8rem",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            🇵🇰 Made in Pakistan
          </span>
        </div>
      </div>
    </footer>
  );
}

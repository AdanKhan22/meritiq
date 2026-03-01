"use client";
import { useState, useEffect } from "react";

const floatingUniversities = [
  "NUST", "LUMS", "FAST", "UET", "IBA", "COMSATS",
  "Bahria", "GCU", "PIEAS", "NED", "ITU", "GIKI"
];

const placeholders = [
  "Search NUST merit list 2025...",
  "Find LUMS admission deadlines...",
  "Check FAST CS closing merit...",
  "Browse UET Lahore programs...",
];

export default function Hero() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const current = placeholders[placeholderIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setPlaceholderIndex((i) => (i + 1) % placeholders.length);
        }
      }
    }, isDeleting ? 40 : 70);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, placeholderIndex]);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "7rem 1.5rem 4rem",
      textAlign: "center",
    }}>
      {/* Animated background orbs */}
      <div style={{
        position: "absolute", top: "15%", left: "10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)",
        animation: "float 8s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "8%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)",
        animation: "float 10s ease-in-out infinite reverse",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: "800px", height: "800px",
        background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      {/* Floating university tags */}
      {floatingUniversities.map((uni, i) => (
        <div key={uni} style={{
          position: "absolute",
          left: `${8 + (i % 4) * 24}%`,
          top: `${12 + Math.floor(i / 4) * 30 + (i % 3) * 8}%`,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "0.3rem 0.75rem",
          fontSize: "0.75rem",
          color: "rgba(148,163,184,0.6)",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          pointerEvents: "none",
          animation: `float ${6 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`,
          zIndex: 0,
          display: i > 7 ? "none" : "block",
        }}>{uni}</div>
      ))}

      {/* Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        background: "rgba(52,211,153,0.1)",
        border: "1px solid rgba(52,211,153,0.25)",
        borderRadius: "20px", padding: "0.35rem 1rem",
        marginBottom: "1.75rem",
        zIndex: 1,
      }}>
        <span style={{ fontSize: "0.7rem" }}>🇵🇰</span>
        <span style={{
          color: "#34D399", fontSize: "0.8rem",
          fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
          letterSpacing: "0.03em",
        }}>Pakistan's First Unified Admissions Platform</span>
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
        fontWeight: 900,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        color: "#F1F5F9",
        marginBottom: "1.25rem",
        zIndex: 1,
        maxWidth: "900px",
      }}>
        Every University.{" "}
        <span style={{
          background: "linear-gradient(135deg, #34D399 0%, #F59E0B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Every Merit List.
        </span>
        <br />One Place.
      </h1>

      {/* Subheadline */}
      <p style={{
        color: "#94A3B8",
        fontSize: "clamp(1rem, 2vw, 1.2rem)",
        fontFamily: "'DM Sans', sans-serif",
        lineHeight: 1.7,
        maxWidth: "580px",
        marginBottom: "2.5rem",
        zIndex: 1,
        fontWeight: 400,
      }}>
        Stop checking 20 university websites. MeritIQ tracks admissions, predicts your merit chances, and alerts you the moment results drop.
      </p>

      {/* Search Bar */}
    <div style={{
  width: "100%", 
  maxWidth: "600px",
  position: "relative", 
  zIndex: 1,
  marginBottom: "1.5rem",
  padding: "0 5px" // Prevention for side-overflow on tiny screens
}}>
  <div style={{
    position: "relative",
    background: "rgba(255,255,255,0.05)",
    border: "1.5px solid rgba(52,211,153,0.3)",
    borderRadius: "20px", // Smoother rounding for mobile
    display: "flex", 
    alignItems: "center",
    padding: "6px", // Equal padding around for a balanced look
    boxShadow: "0 0 40px rgba(52,211,153,0.08), 0 20px 60px rgba(0,0,0,0.3)",
    backdropFilter: "blur(12px)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  }}
    onFocusCapture={e => {
      e.currentTarget.style.borderColor = "rgba(52,211,153,0.7)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onBlurCapture={e => {
      e.currentTarget.style.borderColor = "rgba(52,211,153,0.3)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {/* Search Icon - Hidden on very small screens to save space if needed, 
        but here we keep it for visual cue */}
    <div style={{ paddingLeft: "12px", display: "flex", alignItems: "center" }}>
      <svg style={{ width: "20px", height: "20px", color: "#34D399", opacity: 0.8 }}
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

    <input
      type="text"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      placeholder={displayText}
      style={{
        flex: 1, 
        background: "transparent", 
        border: "none", 
        outline: "none",
        color: "#F1F5F9", 
        fontSize: "16px", // Critical: Prevents iOS zoom-on-focus
        fontFamily: "'DM Sans', sans-serif",
        padding: "12px 10px",
        caretColor: "#34D399",
        width: "100%",
        minWidth: "0" // Prevents input from pushing out the container
      }}
    />

    <button style={{
      background: "linear-gradient(135deg, #34D399, #059669)",
      color: "#060A16", 
      border: "none", 
      borderRadius: "14px",
      padding: "12px 20px", 
      fontWeight: 800,
      fontSize: "0.9rem", 
      cursor: "pointer",
      fontFamily: "'DM Sans', sans-serif",
      whiteSpace: "nowrap",
      boxShadow: "0 4px 12px rgba(5, 150, 105, 0.2)",
      transition: "transform 0.2s"
    }}
      onMouseEnter={e => e.target.style.transform = "scale(1.02)"}
      onMouseLeave={e => e.target.style.transform = "scale(1)"}
    >
      {/* Mobile-friendly text logic: can be shortened via CSS media queries 
          or just kept concise like this */}
      Search
    </button>
  </div>
</div>

      {/* Quick links */}
      <div style={{
        display: "flex", gap: "0.6rem", flexWrap: "wrap",
        justifyContent: "center", zIndex: 1,
        marginBottom: "3rem",
      }}>
        <span style={{ color: "#475569", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif", alignSelf: "center" }}>
          Popular:
        </span>
        {["NUST Merit 2025", "MDCAT Schedule", "LUMS Admissions", "FAST CS Merit"].map(tag => (
          <button key={tag} style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px", padding: "0.3rem 0.85rem",
            color: "#64748B", fontSize: "0.8rem",
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => {
              e.target.style.borderColor = "rgba(52,211,153,0.4)";
              e.target.style.color = "#34D399";
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.color = "#64748B";
            }}
          >{tag}</button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        animation: "bounce 2s ease-in-out infinite",
        zIndex: 1,
      }}>
        <span style={{ color: "#475569", fontSize: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>Scroll to explore</span>
        <svg style={{ width: "20px", color: "#475569" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

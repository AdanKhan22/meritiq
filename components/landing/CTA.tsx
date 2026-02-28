"use client";

import React from "react";

export default function CTA(): JSX.Element {
  // Define event handler types for the hover effects
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.opacity = "0.9";
    target.style.transform = "translateY(-2px)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.opacity = "1";
    target.style.transform = "translateY(0)";
  };

  const handleSecondaryMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.borderColor = "rgba(255,255,255,0.3)";
    target.style.color = "#F1F5F9";
  };

  const handleSecondaryMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.borderColor = "rgba(255,255,255,0.15)";
    target.style.color = "#CBD5E1";
  };

  return (
    <section style={{ padding: "4rem 2rem 6rem" }}>
      <div style={{
        maxWidth: "900px", margin: "0 auto",
        background: "linear-gradient(135deg, rgba(52,211,153,0.08) 0%, rgba(245,158,11,0.06) 50%, rgba(129,140,248,0.08) 100%)",
        border: "1px solid rgba(52,211,153,0.2)",
        borderRadius: "32px",
        padding: "4rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background decoration */}
        <div style={{
          position: "absolute", top: "-60px", left: "-60px",
          width: "250px", height: "250px",
          background: "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-60px", right: "-60px",
          width: "250px", height: "250px",
          background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none",
        }} />

        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎓</div>

        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 900, color: "#F1F5F9",
          letterSpacing: "-0.02em", lineHeight: 1.1,
          marginBottom: "1rem",
          position: "relative",
        }}>
          Your university journey starts here.
          <br />
          <span style={{ color: "#34D399" }}>Not on 20 different websites.</span>
        </h2>

        <p style={{
          color: "#64748B", fontFamily: "'DM Sans', sans-serif",
          fontSize: "1rem", maxWidth: "480px", margin: "0 auto 2.5rem",
          lineHeight: 1.7, position: "relative",
        }}>
          Join thousands of Pakistani students who found their path with MeritIQ. Free forever for the basics.
        </p>

        <div style={{
          display: "flex", gap: "1rem", justifyContent: "center",
          flexWrap: "wrap", position: "relative",
        }}>
          <a 
            href="/signup" 
            style={{
              background: "linear-gradient(135deg, #34D399, #059669)",
              color: "#060A16", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700, fontSize: "1rem",
              padding: "0.875rem 2rem", borderRadius: "12px",
              display: "inline-block",
              transition: "opacity 0.2s, transform 0.2s",
              boxShadow: "0 8px 30px rgba(52,211,153,0.3)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Get Started Free →
          </a>
          <a 
            href="/universities" 
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#CBD5E1", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: "1rem",
              padding: "0.875rem 2rem", borderRadius: "12px",
              display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={handleSecondaryMouseEnter}
            onMouseLeave={handleSecondaryMouseLeave}
          >
            Browse Universities
          </a>
        </div>
      </div>
    </section>
  );
}
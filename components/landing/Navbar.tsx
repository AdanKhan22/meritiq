"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(6, 10, 22, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(52, 211, 153, 0.1)" : "none",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
          fontWeight: 800, fontSize: "1.25rem",
          color: "#F1F5F9",
          letterSpacing: "-0.02em",
        }}>
          Merit<span style={{ color: "#34D399" }}>IQ</span>
        </span>
      </div>

      {/* Desktop Links */}
      <div style={{
        display: "flex", alignItems: "center", gap: "2rem",
        fontFamily: "'DM Sans', sans-serif",
      }} className="desktop-nav">
        {["Universities", "Merit Lists", "Entry Tests", "About"].map(link => (
          <a key={link} href="#" style={{
            color: "#94A3B8", fontSize: "0.9rem", textDecoration: "none",
            transition: "color 0.2s",
            fontWeight: 500,
          }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = "#34D399"}
            onMouseLeave={e => (e.target as HTMLElement).style.color = "#94A3B8"}
          >{link}</a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <a href="/login" style={{
          color: "#94A3B8", textDecoration: "none",
          fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500, padding: "0.5rem 1rem",
          transition: "color 0.2s",
        }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = "#F1F5F9"}
          onMouseLeave={e => (e.target as HTMLElement).style.color = "#94A3B8"}
        >Log in</a>
        <a href="/signup" style={{
          background: "linear-gradient(135deg, #34D399, #059669)",
          color: "#060A16", textDecoration: "none",
          fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700, padding: "0.6rem 1.25rem",
          borderRadius: "8px",
          transition: "opacity 0.2s, transform 0.2s",
          display: "inline-block",
        }}
          onMouseEnter={e => {
            const target = e.target as HTMLElement;
            target.style.opacity = "0.9";
            target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            const target = e.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
          }}
        >Get Started Free</a>
      </div>
    </nav>
  );
}

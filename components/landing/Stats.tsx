"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 40, suffix: "+", label: "Universities Covered", icon: "🏛️" },
  { value: 500, suffix: "K+", label: "Students Every Year", icon: "🎓" },
  { value: 200, suffix: "+", label: "Programs Listed", icon: "📚" },
  { value: 99, suffix: "%", label: "Merit List Accuracy", icon: "🎯" },
];

function AnimatedNumber({ value, suffix, isVisible }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <>{display}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      padding: "5rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Divider line */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.3), transparent)",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              padding: "2rem 1.5rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s, border-color 0.3s",
              cursor: "default",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(52,211,153,0.25)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{stat.icon}</div>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "2.5rem", fontWeight: 900,
                background: "linear-gradient(135deg, #34D399, #F59E0B)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={visible} />
              </div>
              <div style={{
                color: "#64748B", fontSize: "0.875rem",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is MeritIQ completely free to use?",
    a: "Yes — browsing universities, searching merit lists, checking deadlines, and using the basic merit predictor are all completely free. We'll always have a generous free tier.",
  },
  {
    q: "How accurate is the merit predictor?",
    a: "Our ML model is trained on 5 years of actual closing merit data from Pakistani universities. Accuracy varies by university and program but typically comes within 2-3% of actual closing merits. It's a strong indicator, not a guarantee.",
  },
  {
    q: "How fast do merit list results appear on MeritIQ?",
    a: "Our automated pipeline monitors university websites continuously. Most merit lists appear within minutes of being published. For universities with unusual formats, our team manually processes them within a few hours.",
  },
  {
    q: "Which universities are covered?",
    a: "We currently cover the 15 most popular universities in Pakistan including NUST, LUMS, FAST, UET Lahore, IBA, COMSATS, Bahria, GCU, ITU, and more. We're expanding continuously.",
  },
  {
    q: "Can I actually apply to universities through MeritIQ?",
    a: "No — MeritIQ is an information and guidance platform. We help you discover, compare, and track. When you're ready to apply, we link you directly to the university's official admissions portal.",
  },
  {
    q: "Does MeritIQ support A-Level students?",
    a: "Yes. Our merit predictor and university profiles fully support A-Level equivalency, and we note which programs accept A-Level students versus FSc only.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={{ padding: "6rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(129,140,248,0.1)",
            border: "1px solid rgba(129,140,248,0.25)",
            borderRadius: "20px", padding: "0.35rem 1rem",
            marginBottom: "1rem",
          }}>
            <span style={{
              color: "#818CF8", fontSize: "0.8rem",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              letterSpacing: "0.05em", textTransform: "uppercase",
            }}>FAQ</span>
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900, color: "#F1F5F9",
            letterSpacing: "-0.02em",
          }}>
            Questions? We've got answers.
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{
                background: isOpen ? "rgba(129,140,248,0.06)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${isOpen ? "rgba(129,140,248,0.3)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.25s ease",
              }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%", padding: "1.25rem 1.5rem",
                    background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    gap: "1rem",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600, fontSize: "0.975rem",
                    color: isOpen ? "#F1F5F9" : "#CBD5E1",
                    transition: "color 0.2s",
                  }}>{faq.q}</span>
                  <span style={{
                    color: isOpen ? "#818CF8" : "#475569",
                    fontSize: "1.25rem", flexShrink: 0,
                    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.25s, color 0.2s",
                    fontWeight: 300, lineHeight: 1,
                  }}>+</span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: "0 1.5rem 1.25rem",
                  }}>
                    <p style={{
                      color: "#64748B", fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem", lineHeight: 1.75,
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "1rem",
                    }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

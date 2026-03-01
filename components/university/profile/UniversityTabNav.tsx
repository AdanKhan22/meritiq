"use client";

export default function UniversityTabNav() {
  const tabs = [
    { label: "Programs", href: "#programs" },
    { label: "Merit Trends", href: "#merit" },
    { label: "Deadlines", href: "#deadlines" },
    { label: "Similar", href: "#similar" },
  ];

  return (
    <div
      style={{
        position: "sticky",
        top: "68px",
        zIndex: 80,
        background: "rgba(6,10,22,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", gap: "0", overflowX: "auto" }}>
          {tabs.map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              style={{
                padding: "1rem 1.25rem",
                fontSize: "0.85rem",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                color: "#64748B",
                textDecoration: "none",
                borderBottom: "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                (e.currentTarget as HTMLElement).style.color = "#F1F5F9";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(52,211,153,0.5)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                (e.currentTarget as HTMLElement).style.color = "#64748B";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
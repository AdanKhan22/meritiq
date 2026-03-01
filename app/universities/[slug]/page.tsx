// app/universities/[slug]/page.tsx
//
// HOW THIS PAGE WORKS:
// - generateStaticParams() tells Next.js which slugs to pre-render at build time
// - The page receives { params } with the slug from the URL
// - getUniversity() and getUniversityDetails() fetch the data
//
// TO SWITCH FROM MOCK DATA TO API:
// 1. In generateStaticParams() — fetch slugs from your Django API instead
// 2. In the page body — replace getUniversity/getUniversityDetails with API calls
// 3. Add `export const revalidate = 3600` for ISR (re-fetch every hour)
// 4. The UI components below need ZERO changes — they just receive props

import { notFound } from "next/navigation";
import { universities } from "@/data/universities";
import { getUniversityDetails } from "@/data/universityDetails";
import UniversityHero from "@/components/university/profile/UniversityHero";
import UniversityTabNav from "@/components/university/profile/UniversityTabNav";
import ProgramsSection from "@/components/university/profile/ProgramsSection";
import MeritTrendSection from "@/components/university/profile/MeritTrendSection";
import DeadlinesSection from "@/components/university/profile/DeadlinesSection";
import UniversitySidebar from "@/components/university/profile/UniversitySidebar";
import SimilarUniversities from "@/components/university/profile/SimilarUniversities";
import type { Metadata } from "next";

// ── Static params — tells Next.js which pages to pre-render ──────────────
// TO MIGRATE TO API: replace with fetch from Django
// const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/universities/slugs/`)
// const slugs = await res.json()
// return slugs.map((slug: string) => ({ slug }))
export async function generateStaticParams() {
  return universities.map((uni) => ({ slug: uni.slug }));
}

// ── Dynamic metadata per university ──────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const uni = universities.find((u) => u.slug === slug);
  if (!uni) return { title: "University Not Found" };

  return {
    title: `${uni.name} — Admissions, Merit Lists & Programs | MeritIQ`,
    description: `${uni.description} Check ${uni.shortName} closing merits, programs, fees, and admission deadlines on MeritIQ.`,
  };
}

// ── Page component ────────────────────────────────────────────────────────
export default async function UniversityProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Data fetching — swap these two lines for API calls when ready
  const uni = universities.find((u) => u.slug === slug);
  const details = getUniversityDetails(slug);

  // 404 if university not found in data
  if (!uni) notFound();

  // Details may be null if not yet added — page still works with fallbacks
  const hasDetails = details !== null;

  return (
    <div style={{ minHeight: "100vh", background: "#060A16", paddingTop: "68px" }}>

      {/* ── Hero section ── */}
      <UniversityHero uni={uni} />

      {/* ── Tab nav ── */}
      <UniversityTabNav />

      {/* ── Main content layout ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>

          {/* ── Left column — main content ── */}
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "3rem" }}>

            {/* Programs table */}
            {hasDetails && details.programs.length > 0 ? (
              <section id="programs">
                <ProgramsSection programs={details.programs} />
              </section>
            ) : (
              <ComingSoonCard title="Programs" message={`Program details for ${uni.shortName} will be added soon.`} />
            )}

            {/* Merit trend chart */}
            {hasDetails && details.meritHistory.length > 0 ? (
              <section id="merit">
                <MeritTrendSection history={details.meritHistory} />
              </section>
            ) : (
              <ComingSoonCard title="Merit Trends" message="Historical merit data will appear here once available." />
            )}

            {/* Deadlines */}
            {hasDetails && details.deadlines.length > 0 ? (
              <section id="deadlines">
                <DeadlinesSection deadlines={details.deadlines} />
              </section>
            ) : (
              <ComingSoonCard title="Deadlines" message="Admission deadlines will be updated when announced." />
            )}

            {/* Divider */}
            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.15), transparent)" }} />

            {/* Similar universities */}
            <section id="similar">
              <SimilarUniversities current={uni} all={universities} />
            </section>
          </div>

          {/* ── Right column — sidebar ── */}
          <div style={{ width: "280px", flexShrink: 0 }}>
            {hasDetails ? (
              <UniversitySidebar details={details} uni={uni} />
            ) : (
              <SidebarSkeleton uni={uni} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


// Shown when a section has no data yet
function ComingSoonCard({ title, message }: { title: string; message: string }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.02)",
      border: "1px dashed rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "3rem 2rem",
      textAlign: "center",
    }}>
      <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🔜</div>
      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "1.1rem", color: "#F1F5F9", marginBottom: "0.4rem",
      }}>{title}</h3>
      <p style={{ color: "#475569", fontFamily: "var(--font-body)", fontSize: "0.875rem" }}>
        {message}
      </p>
    </div>
  );
}

// Sidebar shown when no detail data exists for a university
function SidebarSkeleton({ uni }: { uni: { website: string; applyUrl: string; shortName: string } }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <a href={uni.applyUrl} target="_blank" rel="noopener noreferrer" style={{
        display: "block", textAlign: "center",
        background: "linear-gradient(135deg, #34D399, #059669)",
        color: "#060A16", textDecoration: "none",
        borderRadius: "10px", padding: "0.75rem 1.5rem",
        fontWeight: 700, fontSize: "0.9rem",
        fontFamily: "var(--font-body)",
        boxShadow: "0 8px 30px rgba(52,211,153,0.25)",
      }}>
        Apply Now ↗
      </a>
      <a href={uni.website} target="_blank" rel="noopener noreferrer" style={{
        display: "block", textAlign: "center",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "#94A3B8", textDecoration: "none",
        borderRadius: "10px", padding: "0.75rem",
        fontWeight: 600, fontSize: "0.875rem",
        fontFamily: "var(--font-body)",
      }}>
        Official Website
      </a>
      {/* Alert CTA */}
      <div style={{
        background: "linear-gradient(135deg, rgba(52,211,153,0.08), rgba(245,158,11,0.05))",
        border: "1px solid rgba(52,211,153,0.15)",
        borderRadius: "16px", padding: "1.25rem", textAlign: "center",
      }}>
        <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔔</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.95rem", color: "#F1F5F9", marginBottom: "0.4rem" }}>
          Get Merit List Alerts
        </div>
        <div style={{ fontSize: "0.78rem", color: "#64748B", fontFamily: "var(--font-body)", lineHeight: 1.5, marginBottom: "1rem" }}>
          Be first to know when {uni.shortName} posts results.
        </div>
        <button style={{
          width: "100%",
          background: "linear-gradient(135deg, #34D399, #059669)",
          color: "#060A16", border: "none", borderRadius: "10px",
          padding: "0.65rem", fontWeight: 700, fontSize: "0.875rem",
          fontFamily: "var(--font-body)", cursor: "pointer",
        }}>
          Set Up Alert — Free
        </button>
      </div>
    </div>
  );
}

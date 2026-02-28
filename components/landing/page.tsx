import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

/**
 * MeritIQ Landing Page
 *
 * MODULAR ARCHITECTURE — each section is its own component.
 * To add a new section:
 *   1. Create /components/landing/YourSection.jsx
 *   2. Import it here
 *   3. Drop it below in the desired position
 *
 * Current section order:
 *   Navbar → Hero → Stats → HowItWorks → Features → FAQ → CTA → Footer
 */

export const metadata = {
  title: "MeritIQ — Every University. Every Merit List. One Place.",
  description:
    "Pakistan's first unified university admissions platform. Track merit lists, predict your chances, compare universities, and get WhatsApp alerts when results drop.",
};

export default function LandingPage() {
  return (
    <main style={{
      background: "#060A16",
      minHeight: "100vh",
      color: "#F1F5F9",
    }}>
      {/* Global font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #060A16; }
        ::-webkit-scrollbar-thumb { background: rgba(52,211,153,0.3); border-radius: 3px; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>

      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />

      {/* ─── Add new sections here ─────────────────────────────
          Import your component above and drop it in this flow.
          Example:
          <Testimonials />
          <UniversityShowcase />
          <PricingSection />
      ──────────────────────────────────────────────────────── */}

      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

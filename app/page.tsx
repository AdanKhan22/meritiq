// app/page.tsx
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
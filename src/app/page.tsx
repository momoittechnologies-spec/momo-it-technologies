import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import FlagshipShowcase from "@/components/home/FlagshipShowcase";
import IndustriesServed from "@/components/home/IndustriesServed";
import TechEcosystem from "@/components/home/TechEcosystem";
import ProcessSection from "@/components/home/ProcessSection";
import AgencyComparison from "@/components/home/AgencyComparison";
import ReviewsSection from "@/components/home/ReviewsSection";
import HomeFaq from "@/components/home/HomeFaq";
import ServiceRegions from "@/components/home/ServiceRegions";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Premium Digital Product Hero */}
      <HeroSection />

      {/* 2. Verified Trust Indicators & Production Tech Marquee */}
      <TrustStrip />

      {/* 3. Four Core Service Pillars Bento Grid */}
      <ServicesGrid />

      {/* 4. Featured Production Projects (AS Refrigerations & MANA Tours) */}
      <FlagshipShowcase />

      {/* 5. Industry Solutions (7 Verticals) */}
      <IndustriesServed />

      {/* 6. Engineering Technology Ecosystem (6 Layers) */}
      <TechEcosystem />

      {/* 7. Disciplined Development Process (4-Step Pipeline) */}
      <ProcessSection />

      {/* 8. Why Choose MOMO IT Technologies (The Engineering Advantage Comparison) */}
      <AgencyComparison />

      {/* 9. Commercial Client Testimonials & Google Ratings */}
      <ReviewsSection />

      {/* 10. Business FAQs with Structured Data */}
      <HomeFaq />

      {/* 11. Geographic Footprint (Kadapa HQ & Corridors) */}
      <ServiceRegions />

      {/* 12. Strong Closing Enquiry CTA */}
      <CtaBanner />
    </>
  );
}

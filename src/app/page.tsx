import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import FlagshipShowcase from "@/components/home/FlagshipShowcase";
import IndustriesServed from "@/components/home/IndustriesServed";
import TechEcosystem from "@/components/home/TechEcosystem";
import InteractiveArchitecture from "@/components/home/InteractiveArchitecture";
import ProcessSection from "@/components/home/ProcessSection";
import AgencyComparison from "@/components/home/AgencyComparison";
import DualVerticals from "@/components/home/DualVerticals";
import ReviewsSection from "@/components/home/ReviewsSection";
import HomeFaq from "@/components/home/HomeFaq";
import ServiceRegions from "@/components/home/ServiceRegions";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesGrid />
      <FlagshipShowcase />
      <IndustriesServed />
      <TechEcosystem />
      <InteractiveArchitecture />
      <ProcessSection />
      <AgencyComparison />
      <DualVerticals />
      <ReviewsSection />
      <HomeFaq />
      <ServiceRegions />
      <CtaBanner />
    </>
  );
}

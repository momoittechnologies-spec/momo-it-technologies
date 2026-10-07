import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import IndustriesServed from "@/components/home/IndustriesServed";
import FlagshipShowcase from "@/components/home/FlagshipShowcase";
import TechEcosystem from "@/components/home/TechEcosystem";
import ProcessSection from "@/components/home/ProcessSection";
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
      <IndustriesServed />
      <FlagshipShowcase />
      <TechEcosystem />
      <ProcessSection />
      <DualVerticals />
      <ReviewsSection />
      <HomeFaq />
      <ServiceRegions />
      <CtaBanner />
    </>
  );
}

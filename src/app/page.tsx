import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import MasterclassBanner from "@/components/home/MasterclassBanner";
import FlagshipShowcase from "@/components/home/FlagshipShowcase";
import DualVerticals from "@/components/home/DualVerticals";
import ServicesGrid from "@/components/home/ServicesGrid";
import ReviewsSection from "@/components/home/ReviewsSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <MasterclassBanner />
      <FlagshipShowcase />
      <DualVerticals />
      <ServicesGrid />
      <ReviewsSection />
      <CtaBanner />
    </>
  );
}

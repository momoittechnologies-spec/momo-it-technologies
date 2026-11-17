"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  MessageCircle,
} from "lucide-react";
import HeroVisual from "./HeroVisual";

const rotatingWords = [
  "High-Concurrency Cloud SaaS Platforms",
  "Autonomous AI & Agentic Workflows",
  "Cross-Platform Flutter Mobile Apps",
  "Automated QA Regression Suites",
  "Custom Enterprise ERPs & Cloud Systems",
];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#040a18] via-[#061026] to-[#040a18] text-white">
      {/* Subtle Ambient Lighting Wells (Restrained & Enterprise) */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/[0.08] rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.06] rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Balanced Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* ======================================================== */}
          {/* Left Column: Headline, Value Proposition & CTAs (50%)    */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Restrained Brand Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-cyan-300 font-mono mb-6 backdrop-blur-md">
              <span className="font-semibold uppercase tracking-wider text-white text-[11px]">
                MOMO IT TECHNOLOGIES
              </span>
              <span className="text-gray-500">·</span>
              <span className="text-cyan-300 font-medium text-[11px]">
                Kadapa HQ · Software Engineering
              </span>
            </div>

            {/* Grand Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[56px] 2xl:text-[62px] font-extrabold text-white tracking-tight leading-[1.08] mb-5 font-heading">
              <span className="block">Engineering Digital Products.</span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-200">
                Transforming Businesses.
              </span>
            </h1>

            {/* Dynamic Engineering Subheading */}
            <div className="h-7 sm:h-8 flex items-center justify-center lg:justify-start mb-5">
              <span className="text-xs sm:text-sm font-mono text-gray-300">
                Engineering &amp; shipping{" "}
                <span className="font-semibold text-cyan-300 border-b border-cyan-400/60 pb-0.5 transition-all duration-300">
                  {rotatingWords[currentWordIndex]}
                </span>
              </span>
            </div>

            {/* Approved Brand Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
              We build intelligent software, scalable SaaS platforms, mobile applications and AI-powered business systems that solve real-world problems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/15 shadow-sm hover:border-white/30 hover:-translate-y-0.5 transition-all"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Explore Our Work</span>
              </Link>

              <a
                href="https://wa.me/918639831132?text=Hi%20MOMO%20IT,%20I%20would%20like%20to%20discuss%20a%20software%20development%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 hover:border-emerald-400/50 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Live Client Deployments Reference */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-gray-400 pt-3 border-t border-white/[0.08]">
              <span className="font-semibold text-gray-300">Live Client Deployments:</span>
              <Link
                href="/case-studies/as-refrigerations"
                className="text-cyan-400 hover:text-cyan-300 hover:underline font-medium transition-colors"
              >
                AS REFRIGERATIONS
              </Link>
              <span className="text-gray-600">·</span>
              <Link
                href="/case-studies/mana-tours"
                className="text-cyan-400 hover:text-cyan-300 hover:underline font-medium transition-colors"
              >
                MANA Tours &amp; Travels
              </Link>
              <span className="text-gray-600">·</span>
              <span className="text-gray-400">Kadapa HQ &amp; Global Delivery</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Right Column: Seamless 3D Digital Infrastructure (50%)   */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full mt-8 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

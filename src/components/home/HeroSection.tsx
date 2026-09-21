"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  GraduationCap,
  Star,
  Zap,
} from "lucide-react";
import HeroCodeTerminal from "./HeroCodeTerminal";

const rotatingWords = [
  "Dedicated QA Automation",
  "High-Performance Web Apps",
  "Custom Business ERPs",
  "Next-Gen Software Engineers",
];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-white">
      {/* Background Decorative Ambient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none overflow-hidden -z-10 opacity-75">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-brand-300/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-20 right-1/4 w-[480px] h-[480px] bg-sky-200/40 rounded-full blur-[130px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/25 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200 shadow-sm shadow-brand-500/10 animate-in fade-in slide-in-from-bottom-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-navy-950">
                MOMO IT TECHNOLOGIES · Kadapa, AP
              </span>
              <span className="text-xs text-brand-700 font-semibold border-l border-brand-200 pl-2">
                4.8★ Google Rated
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-[1.15]">
              Engineering Excellence &amp; Practical IT Training,{" "}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700">
                Built for Real Business.
              </span>
            </h1>

            {/* Dynamic Sub-heading */}
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <span className="text-base sm:text-lg font-medium text-gray-600">
                Powering clients &amp; learners with{" "}
                <span className="font-bold text-navy-950 border-b-2 border-brand-500 transition-all duration-300">
                  {rotatingWords[currentWordIndex]}
                </span>
              </span>
            </div>

            {/* Value proposition */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We operate two high-impact verticals under one brand: delivering dedicated <strong>Software Development, QA Test Automation, and Staff Augmentation</strong> for businesses, while grooming industry-ready engineers through <strong>MOMO Academy</strong>.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/services/qa-testing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Tech Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/academy"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-navy-950 font-bold text-sm border border-gray-200 shadow-sm hover:border-brand-300 transition-all"
              >
                <GraduationCap className="w-4 h-4 text-brand-600" />
                <span>Join MOMO Academy</span>
              </Link>

              <a
                href="tel:+918639831132"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-gray-700 hover:text-brand-600 font-semibold text-xs transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
                <span>086398 31132</span>
              </a>
            </div>

            {/* Metrics Mini-Strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-100 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-xl font-extrabold text-navy-950 flex items-center justify-center lg:justify-start gap-1">
                  <span>4.8</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[11px] text-gray-500">Kadapa Google Rating</div>
              </div>

              <div>
                <div className="text-xl font-extrabold text-navy-950">2 Flagships</div>
                <div className="text-[11px] text-gray-500">MomoPe &amp; Mana Tours</div>
              </div>

              <div>
                <div className="text-xl font-extrabold text-brand-600">Hybrid</div>
                <div className="text-[11px] text-gray-500">Online &amp; Kadapa Lab</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Code Terminal Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Floating Trust Badge Top Left */}
            <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-gray-100 text-xs font-bold text-navy-950">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>100% Production Code</span>
            </div>

            {/* Floating Trust Badge Bottom Right */}
            <div className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-2 bg-navy-950 text-white px-3.5 py-1.5 rounded-full shadow-xl border border-brand-500/30 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-brand-400" />
              <span>CI/CD Automated QA</span>
            </div>

            <HeroCodeTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}

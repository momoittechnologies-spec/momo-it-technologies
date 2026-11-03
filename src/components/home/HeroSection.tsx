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
  Code2,
  TestTube2,
  Users,
  Layers,
  MessageCircle,
  Smartphone,
  ChevronRight,
  Zap,
  MapPin,
  Award,
} from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";

const rotatingWords = [
  "High-Concurrency Cloud SaaS Platforms",
  "Autonomous AI & Agentic Workflows",
  "Automated QA Regression Suites",
  "Custom Business ERPs & 60 FPS Mobile",
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
    <section className="relative pt-26 pb-10 md:pt-30 md:pb-12 lg:pt-32 lg:pb-14 overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-white bg-cyber-grid">
      {/* Background Decorative Ambient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl 2xl:max-w-[1536px] h-[700px] pointer-events-none overflow-hidden -z-10 opacity-75">
        <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-brand-300/30 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-1/4 w-[520px] h-[520px] bg-cyan-200/25 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/30 rounded-full blur-[160px]" />
      </div>

      {/* Far Margin Ambient Tech Coordinates (Utilizing wide screen gutters) */}
      <div className="hidden 2xl:flex items-center gap-2 absolute top-36 left-6 text-[11px] font-mono text-gray-400 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200/60 shadow-xs pointer-events-none">
        <MapPin className="w-3 h-3 text-brand-600" />
        <span>14.4677° N, 78.7875° E · Kadapa HQ</span>
      </div>

      <div className="hidden 2xl:flex items-center gap-2 absolute top-36 right-6 text-[11px] font-mono text-gray-400 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200/60 shadow-xs pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon-pulse" />
        <span>ACTIVE RUNTIME · EDGE VERIFIED</span>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Split Screen Hero Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 2xl:gap-14 items-center">
          {/* Left Column: Headline, Value Proposition & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-brand-200 shadow-sm shadow-brand-500/10 mb-5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-beacon-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-navy-950">
                MOMO IT TECHNOLOGIES · Enterprise Software &amp; AI Systems
              </span>
              <span className="text-[11px] sm:text-xs text-brand-700 font-semibold border-l border-brand-200 pl-2">
                Kadapa HQ · 5.0★ Google
              </span>
            </div>

            {/* Grand Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-[64px] font-extrabold text-navy-950 tracking-tight leading-[1.1] mb-4">
              <span className="block text-base sm:text-lg 2xl:text-xl font-bold text-brand-700 tracking-normal mb-1.5">
                Full-Lifecycle Software Engineering &amp; AI Solutions
              </span>
              Engineering Mission-Critical Software &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-brand-600 to-teal-700">
                Scalable Enterprise Platforms.
              </span>
            </h1>

            {/* Dynamic Subheading */}
            <div className="h-7 sm:h-8 flex items-center justify-center lg:justify-start mb-4">
              <span className="text-sm sm:text-base 2xl:text-lg font-medium text-gray-600">
                Architecting &amp; delivering{" "}
                <span className="font-bold text-navy-950 border-b-2 border-brand-500 transition-all duration-300">
                  {rotatingWords[currentWordIndex]}
                </span>
              </span>
            </div>

            {/* Clear Value Proposition */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0 mb-6">
              We design, build, and deploy high-concurrency SaaS platforms, autonomous AI workflows, and resilient business applications. Backed by automated QA verification, 100% intellectual property transfer, and dedicated technical stewardship from Kadapa to global markets.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Schedule Architecture Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Layers className="w-4 h-4 text-brand-400" />
                <span>View Commercial Deployments</span>
              </Link>

              <a
                href="https://wa.me/918639831132?text=Hi%20MOMO%20IT,%20I%20would%20like%20to%20discuss%20a%20software%20development%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-white hover:bg-gray-50 text-navy-950 font-bold text-sm border border-gray-200 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Live Client Proof Bar (Using the space with high-value credibility) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 py-2 px-3.5 rounded-xl bg-white/90 border border-gray-200/80 shadow-xs mb-5 max-w-2xl 2xl:max-w-3xl text-xs text-gray-700">
              <div className="flex items-center gap-1.5 font-bold text-navy-950">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-beacon-pulse" />
                <span>Live Deployments:</span>
              </div>
              <Link
                href="/case-studies/as-refrigerations"
                className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-800 hover:underline"
              >
                <span>AS REFRIGERATIONS</span>
                <span className="text-[10px] text-gray-400 font-mono">(0% UPI Engine)</span>
              </Link>
              <span className="text-gray-300">·</span>
              <Link
                href="/case-studies/mana-tours"
                className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-800 hover:underline"
              >
                <span>MANA Tours</span>
                <span className="text-[10px] text-gray-400 font-mono">(Fleet Dispatch)</span>
              </Link>
              <span className="text-gray-300">·</span>
              <span className="text-amber-800 font-mono text-[11px] font-semibold">UDYAM-AP-05-0090352</span>
            </div>

            {/* Trust Badges Strip (5 Metric Badges spanning comfortably across) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-4 border-t border-gray-200/60 max-w-full">
              <div className="p-2.5 2xl:p-3 rounded-2xl bg-white/90 border border-gray-100 shadow-xs text-center lg:text-left">
                <div className="text-lg sm:text-xl font-extrabold text-navy-950 flex items-center justify-center lg:justify-start gap-1">
                  <span>5.0</span>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">Google Rating (Kadapa)</div>
              </div>

              <div className="p-2.5 2xl:p-3 rounded-2xl bg-white/90 border border-gray-100 shadow-xs text-center lg:text-left">
                <div className="text-lg sm:text-xl font-extrabold text-emerald-600">0% Fee</div>
                <div className="text-[10px] text-gray-500 mt-0.5">NPCI UPI Engine</div>
              </div>

              <div className="p-2.5 2xl:p-3 rounded-2xl bg-white/90 border border-gray-100 shadow-xs text-center lg:text-left">
                <div className="text-lg sm:text-xl font-extrabold text-brand-600">&lt; 800ms</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Edge SSR TTFB</div>
              </div>

              <div className="p-2.5 2xl:p-3 rounded-2xl bg-white/90 border border-gray-100 shadow-xs text-center lg:text-left">
                <div className="text-lg sm:text-xl font-extrabold text-navy-950">Auto QA</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Selenium 4 CI/CD</div>
              </div>

              <div className="p-2.5 2xl:p-3 rounded-2xl bg-white/90 border border-gray-100 shadow-xs text-center lg:text-left col-span-2 sm:col-span-1">
                <div className="text-lg sm:text-xl font-extrabold text-navy-950">100% IP</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Client Code Ownership</div>
              </div>
            </div>
          </div>

          {/* Right Column: Isometric 3D Cyber Glass Terminal Component */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <Hero3DCanvas />
          </div>
        </div>

        {/* 4 Core Pillars Cards - 3D Perspective Lift & Glow (Tightened spacing so visible above the fold) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-5 mt-8 lg:mt-10 text-left">
          <Link
            href="/services/web-development"
            className="p-5 2xl:p-6 rounded-2xl bg-white/95 border border-gray-200/80 shadow-3d-card card-3d-lift relative overflow-hidden group block"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-brand-500/20 transition-all" />
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-md transition-all">
              <Code2 className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1 flex items-center justify-between">
              <span>Web &amp; SaaS Products</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our core service: Next.js 15, React 19, Supabase &amp; Spring Boot apps built for speed and scale.
            </p>
          </Link>

          <Link
            href="/services/qa-automation"
            className="p-5 2xl:p-6 rounded-2xl bg-white/95 border border-gray-200/80 shadow-3d-card card-3d-lift relative overflow-hidden group block"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-md transition-all">
              <TestTube2 className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1 flex items-center justify-between">
              <span>QA &amp; Test Automation</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Selenium, Playwright, REST Assured, and CI/CD automated test suites with zero flakiness.
            </p>
          </Link>

          <Link
            href="/services/mobile-app-development"
            className="p-5 2xl:p-6 rounded-2xl bg-white/95 border border-gray-200/80 shadow-3d-card card-3d-lift relative overflow-hidden group block"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-md transition-all">
              <Smartphone className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1 flex items-center justify-between">
              <span>Mobile App Development</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Cross-platform Flutter iOS &amp; Android native apps with cloud sync, offline support &amp; notifications.
            </p>
          </Link>

          <Link
            href="/services/business-software"
            className="p-5 2xl:p-6 rounded-2xl bg-white/95 border border-gray-200/80 shadow-3d-card card-3d-lift relative overflow-hidden group block"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-md transition-all">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1 flex items-center justify-between">
              <span>Business &amp; ERP Systems</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Custom billing, inventory, POS, and automated WhatsApp receipts tailored to local businesses.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

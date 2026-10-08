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
} from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";

const rotatingWords = [
  "Scalable Web & SaaS Products",
  "Cross-Platform Mobile Apps",
  "Enterprise QA Automation",
  "Custom Business ERPs",
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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-white bg-cyber-grid">
      {/* Background Decorative Ambient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none overflow-hidden -z-10 opacity-75">
        <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-brand-300/30 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-1/4 w-[520px] h-[520px] bg-cyan-200/25 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/30 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Value Proposition & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-brand-200 shadow-sm shadow-brand-500/10 mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-beacon-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-navy-950">
                MOMO IT TECHNOLOGIES · Kadapa, AP
              </span>
              <span className="text-[11px] sm:text-xs text-brand-700 font-semibold border-l border-brand-200 pl-2">
                5.0★ Google Rated
              </span>
            </div>

            {/* Grand Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.12] mb-5">
              <span className="block text-base sm:text-xl font-bold text-brand-700 tracking-normal mb-2">
                Premier IT Company &amp; Software Development in Kadapa
              </span>
              Engineering Scalable Custom Software &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700">
                Modern Cloud Solutions.
              </span>
            </h1>

            {/* Dynamic Subheading */}
            <div className="h-8 sm:h-9 flex items-center justify-center lg:justify-start mb-5">
              <span className="text-sm sm:text-lg font-medium text-gray-600">
                Architecting &amp; delivering{" "}
                <span className="font-bold text-navy-950 border-b-2 border-brand-500 transition-all duration-300">
                  {rotatingWords[currentWordIndex]}
                </span>
              </span>
            </div>

            {/* Clear Value Proposition */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Kadapa&apos;s premier 5.0★ rated <strong>software company</strong> and technology partner. We engineer scalable <strong>custom software, Web &amp; SaaS products</strong>, enterprise ERPs, and Flutter mobile apps for growing businesses, backed by rigorous QA testing and dedicated technical support.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <Link
                href="/services/web-development"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Build Web / SaaS Product</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Layers className="w-4 h-4 text-brand-400" />
                <span>Explore Services</span>
              </Link>

              <a
                href="https://wa.me/918639831132?text=Hi%20MOMO%20IT,%20I%20would%20like%20to%20discuss%20a%20software%20development%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-navy-950 font-bold text-sm border border-gray-200 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Strip (4 Metric Badges) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gray-200/60 max-w-2xl mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-white/90 border border-gray-100 shadow-xs text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-navy-950 flex items-center justify-center lg:justify-start gap-1">
                  <span>5.0</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">Google Rating</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/90 border border-gray-100 shadow-xs text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-navy-950">Active</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Production Systems</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/90 border border-gray-100 shadow-xs text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-brand-600">Modern</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Next.js 15 &amp; Cloud</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/90 border border-gray-100 shadow-xs text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-navy-950">100%</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Code Ownership</div>
              </div>
            </div>
          </div>

          {/* Right Column: Isometric 3D Cyber Glass Terminal Component */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Hero3DCanvas />
          </div>
        </div>

        {/* 4 Core Pillars Cards - 3D Perspective Lift & Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 text-left">
          <Link
            href="/services/web-development"
            className="p-6 rounded-2xl bg-white/95 border border-gray-200/80 shadow-3d-card card-3d-lift relative overflow-hidden group block"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-brand-500/20 transition-all" />
            <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all">
              <Code2 className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1.5 flex items-center justify-between">
              <span>Web &amp; SaaS Products</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our core service: Next.js 15, React 19, Supabase &amp; Spring Boot apps built for speed and scale.
            </p>
          </Link>

          <Link
            href="/services/qa-automation"
            className="p-6 rounded-2xl bg-white/95 border border-gray-200/80 shadow-3d-card card-3d-lift relative overflow-hidden group block"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all">
              <TestTube2 className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1.5 flex items-center justify-between">
              <span>QA &amp; Test Automation</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Selenium, Playwright, REST Assured, and CI/CD automated test suites with zero flakiness.
            </p>
          </Link>

          <Link
            href="/services/mobile-app-development"
            className="p-6 rounded-2xl bg-white/95 border border-gray-200/80 shadow-3d-card card-3d-lift relative overflow-hidden group block"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all">
              <Smartphone className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1.5 flex items-center justify-between">
              <span>Mobile App Development</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Cross-platform Flutter iOS &amp; Android native apps with cloud sync, offline support &amp; notifications.
            </p>
          </Link>

          <Link
            href="/services/business-software"
            className="p-6 rounded-2xl bg-white/95 border border-gray-200/80 shadow-3d-card card-3d-lift relative overflow-hidden group block"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1.5 flex items-center justify-between">
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


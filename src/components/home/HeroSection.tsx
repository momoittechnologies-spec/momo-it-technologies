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
} from "lucide-react";

const rotatingWords = [
  "High-Performance Web Apps",
  "Dedicated QA Automation",
  "FoodTech & Mobility Portals",
  "Industry-Ready Software Engineers",
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
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-white">
      {/* Background Decorative Ambient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden -z-10 opacity-70">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-brand-300/25 rounded-full blur-[120px]"></div>
        <div className="absolute top-20 right-1/4 w-[480px] h-[480px] bg-emerald-200/30 rounded-full blur-[130px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-200 shadow-sm shadow-brand-500/10 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-navy-950">
            MOMO IT TECHNOLOGIES · Kadapa, AP
          </span>
          <span className="text-xs text-brand-700 font-semibold border-l border-brand-200 pl-2">
            4.8★ Google Rated
          </span>
        </div>

        {/* Grand Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6">
          Engineering Scalable Software &amp; Training{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700">
            Tomorrow&apos;s Tech Leaders.
          </span>
        </h1>

        {/* Dynamic Subheading */}
        <div className="h-9 flex items-center justify-center mb-6">
          <span className="text-base sm:text-xl font-medium text-gray-600">
            Building &amp; mentoring with{" "}
            <span className="font-bold text-navy-950 border-b-2 border-brand-500 transition-all duration-300">
              {rotatingWords[currentWordIndex]}
            </span>
          </span>
        </div>

        {/* Clear Value Proposition */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Kadapa&apos;s trusted technology partner. We engineer mission-critical web applications and test automation pipelines for growing businesses, while grooming industry-ready engineers through <strong>MOMO Academy</strong>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="/services/software-dev"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 hover:-translate-y-0.5 transition-all"
          >
            <span>Explore Tech Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/academy"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm shadow-md transition-all"
          >
            <GraduationCap className="w-4 h-4 text-brand-400" />
            <span>Join MOMO Academy</span>
          </Link>

          <a
            href="https://wa.me/918639831132?text=Hi%20MOMO%20IT,%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-navy-950 font-bold text-sm border border-gray-200 shadow-sm hover:border-brand-300 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-gray-100">
          <div className="p-4 rounded-2xl bg-white/80 border border-gray-100 shadow-xs">
            <div className="text-2xl font-extrabold text-navy-950 flex items-center justify-center gap-1">
              <span>4.8</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs text-gray-500 mt-0.5">Kadapa Google Rating</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-gray-100 shadow-xs">
            <div className="text-2xl font-extrabold text-navy-950">Active</div>
            <div className="text-xs text-gray-500 mt-0.5">Client Production Systems</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-gray-100 shadow-xs">
            <div className="text-2xl font-extrabold text-brand-600">Hybrid</div>
            <div className="text-xs text-gray-500 mt-0.5">Online &amp; Kadapa Lab</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-gray-100 shadow-xs">
            <div className="text-2xl font-extrabold text-navy-950">100%</div>
            <div className="text-xs text-gray-500 mt-0.5">Live Code Practice</div>
          </div>
        </div>

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 text-left">
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1">Web &amp; Custom Apps</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Full-stack Next.js, React, Supabase, and enterprise Java applications built for real-world traffic.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <TestTube2 className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1">QA &amp; Test Automation</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Selenium, Playwright, REST Assured, and CI/CD automated test suites with zero flakiness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1">MOMO Academy</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Practical software testing and Java full-stack courses tailored for B.Tech pass-outs and freshers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-300 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-navy-950 mb-1">Staff Augmentation</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Hire pre-vetted, trained QA engineers and full-stack developers on flexible monthly retainers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

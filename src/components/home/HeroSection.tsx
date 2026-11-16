"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Star,
  Code2,
  TestTube2,
  Layers,
  MessageCircle,
  Smartphone,
  ChevronRight,
  Zap,
  MapPin,
  Bot,
  Cloud,
  Lock,
} from "lucide-react";
import HeroProductEcosystem from "./HeroProductEcosystem";

const rotatingWords = [
  "High-Concurrency Cloud SaaS Platforms",
  "Autonomous AI & Agentic Workflows",
  "Cross-Platform Flutter Mobile Apps",
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
    <section className="relative pt-24 pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#071127] via-navy-950 to-[#071127] text-white bg-cyber-grid">
      {/* Background Decorative Ambient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl 2xl:max-w-[1536px] h-[750px] pointer-events-none overflow-hidden -z-10 opacity-60">
        <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-1/4 w-[520px] h-[520px] bg-cyan-500/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/15 rounded-full blur-[160px]" />
      </div>

      {/* Far Margin Ambient Tech Coordinates */}
      <div className="hidden 2xl:flex items-center gap-2 absolute top-36 left-6 text-[11px] font-mono text-gray-400 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-xs pointer-events-none">
        <MapPin className="w-3 h-3 text-cyan-400" />
        <span>14.4677° N, 78.7875° E · Kadapa HQ</span>
      </div>

      <div className="hidden 2xl:flex items-center gap-2 absolute top-36 right-6 text-[11px] font-mono text-gray-400 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-xs pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon-pulse" />
        <span>99.98% SLA · EDGE VERIFIED</span>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Split Screen Hero Layout: Left 45% (lg:col-span-5), Right 55% (lg:col-span-7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 2xl:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* Left Column: Headline, Value Proposition & CTAs (45%)    */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-cyan-300 font-mono mb-5 backdrop-blur-md shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-beacon-pulse" />
              <span className="font-semibold uppercase tracking-wider text-white text-[11px]">
                MOMO IT TECHNOLOGIES
              </span>
              <span className="text-gray-400">·</span>
              <span className="text-cyan-300 font-semibold text-[11px]">
                Kadapa HQ · 5.0★ Google
              </span>
            </div>

            {/* Grand Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-4">
              <span>Engineering Digital Products.</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">
                Transforming Businesses.
              </span>
            </h1>

            {/* Dynamic Rotating Subheading */}
            <div className="h-7 sm:h-8 flex items-center justify-center lg:justify-start mb-4">
              <span className="text-xs sm:text-sm font-mono text-gray-300">
                Engineering &amp; shipping{" "}
                <span className="font-bold text-cyan-300 border-b border-cyan-400 transition-all duration-300">
                  {rotatingWords[currentWordIndex]}
                </span>
              </span>
            </div>

            {/* Approved Brand Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 font-normal">
              We build intelligent software, scalable SaaS platforms, mobile applications and AI-powered business systems that solve real-world problems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Explore Our Work</span>
              </Link>

              <a
                href="https://wa.me/918639831132?text=Hi%20MOMO%20IT,%20I%20would%20like%20to%20discuss%20a%20software%20development%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Live Client Proof Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 py-2 px-3.5 rounded-xl bg-white/5 border border-white/10 mb-6 max-w-xl text-xs text-gray-300">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-beacon-pulse" />
                <span>Live Deployments:</span>
              </div>
              <Link
                href="/case-studies/as-refrigerations"
                className="inline-flex items-center gap-1 font-semibold text-cyan-300 hover:text-cyan-200 hover:underline"
              >
                <span>AS REFRIGERATIONS</span>
                <span className="text-[10px] text-gray-400 font-mono">(0% UPI Engine)</span>
              </Link>
              <span className="text-gray-600">·</span>
              <Link
                href="/case-studies/mana-tours"
                className="inline-flex items-center gap-1 font-semibold text-cyan-300 hover:text-cyan-200 hover:underline"
              >
                <span>MANA Tours</span>
                <span className="text-[10px] text-gray-400 font-mono">(Fleet Dispatch)</span>
              </Link>
              <span className="text-gray-600">·</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-beacon-pulse" />
                <span>99.98% Edge SLA</span>
              </span>
            </div>

            {/* Trust Badges Strip (5 Metric Badges) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-4 border-t border-white/10 max-w-full">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-center lg:text-left">
                <div className="text-base sm:text-lg font-extrabold text-white flex items-center justify-center lg:justify-start gap-1">
                  <span>5.0</span>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">Google Verified</div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-center lg:text-left">
                <div className="text-base sm:text-lg font-extrabold text-emerald-400">0% Fee</div>
                <div className="text-[10px] text-gray-400 mt-0.5">NPCI UPI Engine</div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-center lg:text-left">
                <div className="text-base sm:text-lg font-extrabold text-cyan-300">99.98%</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Production SLA</div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-center lg:text-left">
                <div className="text-base sm:text-lg font-extrabold text-cyan-400">&lt; 800ms</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Edge SSR TTFB</div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-center lg:text-left col-span-2 sm:col-span-1">
                <div className="text-base sm:text-lg font-extrabold text-white">100% IP</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Client Ownership</div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Right Column: Digital Product Ecosystem (55%)            */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex items-center justify-center relative w-full">
            <HeroProductEcosystem />
          </div>
        </div>

        {/* 4 Core Delivery Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-5 mt-12 lg:mt-16 text-left">
          <Link
            href="/services/web-development"
            className="p-5 2xl:p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 shadow-lg relative overflow-hidden group block transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
              Pillar 01
            </div>
            <h2 className="text-base font-bold text-white mb-1 flex items-center justify-between">
              <span>Software &amp; SaaS Platforms</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Next.js 15, React 19, Supabase &amp; Spring Boot cloud platforms built for sub-second speed and scale.
            </p>
          </Link>

          <Link
            href="/services/ai-automation"
            className="p-5 2xl:p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/50 shadow-lg relative overflow-hidden group block transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 mb-1">
              Pillar 02
            </div>
            <h2 className="text-base font-bold text-white mb-1 flex items-center justify-between">
              <span>AI &amp; Intelligent Automation</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Autonomous multi-agent workflows, private RAG pipelines, and conversational WhatsApp systems.
            </p>
          </Link>

          <Link
            href="/services/mobile-app-development"
            className="p-5 2xl:p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 shadow-lg relative overflow-hidden group block transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400 mb-1">
              Pillar 03
            </div>
            <h2 className="text-base font-bold text-white mb-1 flex items-center justify-between">
              <span>Mobile &amp; QA Engineering</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Cross-platform Flutter iOS &amp; Android native apps backed by Selenium 4 &amp; Playwright CI/CD test suites.
            </p>
          </Link>

          <Link
            href="/services/cloud-devops"
            className="p-5 2xl:p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 shadow-lg relative overflow-hidden group block transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Cloud className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
              Pillar 04
            </div>
            <h2 className="text-base font-bold text-white mb-1 flex items-center justify-between">
              <span>Cloud &amp; Digital Growth</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Docker containerization, CI/CD pipelines, SEO technical architecture, and high-conversion business systems.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Bot,
  Smartphone,
  Cloud,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  ShieldCheck,
  ChevronRight,
  Terminal,
  Cpu,
  RefreshCw,
  ShoppingBag,
  TestTube2,
  Zap,
} from "lucide-react";

const pillars = [
  {
    id: "pillar-1",
    num: "01",
    title: "Custom Software & SaaS Platforms",
    badge: "Core Engineering",
    tagline: "High-concurrency web platforms, multi-tenant SaaS, and modern microservices.",
    description:
      "We design and engineer enterprise-grade web applications and scalable SaaS systems using modern stacks like Next.js 15, React 19, TypeScript, and Spring Boot. Every platform features sub-second edge TTFB, clean domain architecture, and automated cloud sync.",
    icon: Code2,
    accentColor: "from-blue-600 to-indigo-600",
    bgHover: "hover:border-blue-400/80",
    features: [
      "Multi-Tenant SaaS Architecture & Subscriptions",
      "Next.js 15 App Router & React 19 SSR",
      "Enterprise Backends: Java 21, Spring Boot 3 & Node.js",
      "ACID Storage with PostgreSQL & Supabase Edge",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Spring Boot", "PostgreSQL", "Supabase"],
    primaryLink: "/services/web-development",
    secondaryLink: "/services/software-development",
    secondaryLabel: "Legacy Modernisation",
  },
  {
    id: "pillar-2",
    num: "02",
    title: "AI Solutions & Intelligent Automation",
    badge: "Frontier AI",
    tagline: "Autonomous agent workflows, private enterprise RAG, and WhatsApp AI bots.",
    description:
      "Transform manual bottlenecks into intelligent automated operations. We integrate frontier LLMs (Gemini Pro, OpenAI), LangChain, and LangGraph into your operational workflows—from 24/7 WhatsApp customer booking to document intelligence and predictive dashboards.",
    icon: Bot,
    accentColor: "from-indigo-600 to-violet-600",
    bgHover: "hover:border-indigo-400/80",
    features: [
      "Autonomous Multi-Agent Systems & LangGraph Workflows",
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "WhatsApp & Voice Conversational AI Engines",
      "Intelligent Document Processing & OCR Pipelines",
    ],
    tech: ["Gemini 2.0", "LangChain", "Python", "FastAPI", "pgvector", "WhatsApp Cloud API"],
    primaryLink: "/services/ai-automation",
    secondaryLink: "/services/business-software",
    secondaryLabel: "Business Automation ERP",
  },
  {
    id: "pillar-3",
    num: "03",
    title: "Mobile Applications & Quality Engineering",
    badge: "Mobile & Testing",
    tagline: "Cross-platform 60 FPS mobile apps backed by rigorous automated QA pods.",
    description:
      "Ship native iOS and Android apps with Google Flutter, connected to real-time cloud data and offline caching. Our dedicated SDET QA pods deploy automated test suites with Selenium WebDriver 4 and Playwright, guaranteeing zero production regressions.",
    icon: Smartphone,
    accentColor: "from-violet-600 to-purple-600",
    bgHover: "hover:border-purple-400/80",
    features: [
      "Cross-Platform Flutter 3.x iOS & Android Native Apps",
      "Offline Sync, Biometric Auth & Push Notifications",
      "Selenium WebDriver 4 & Playwright CI/CD Test Suites",
      "API Contract Verification with RestAssured & Postman",
    ],
    tech: ["Flutter", "Dart", "Selenium 4", "Playwright", "Appium", "RestAssured"],
    primaryLink: "/services/mobile-app-development",
    secondaryLink: "/services/qa-automation",
    secondaryLabel: "Enterprise QA Testing",
  },
  {
    id: "pillar-4",
    num: "04",
    title: "Cloud Infrastructure & Digital Growth",
    badge: "Cloud & Commerce",
    tagline: "Containerized deployments, high-conversion storefronts, and 24/7 reliability.",
    description:
      "From zero-downtime Docker container orchestration and Vercel Edge caching to custom Next.js eCommerce storefronts and POS billing engines with thermal printer hardware support. Engineered for fast commercial execution.",
    icon: Cloud,
    accentColor: "from-cyan-600 to-teal-600",
    bgHover: "hover:border-cyan-400/80",
    features: [
      "Docker Containerization & Zero-Downtime Cloud Releases",
      "Custom E-Commerce Platforms & Dynamic UPI Checkout",
      "ESC/POS Thermal Printing Billing Software (58mm/80mm)",
      "SEO Technical Architecture & 95+ Core Web Vitals",
    ],
    tech: ["Docker", "Vercel Edge", "AWS", "Next.js", "Redis", "ESC/POS"],
    primaryLink: "/services/cloud-devops",
    secondaryLink: "/services/ecommerce-development",
    secondaryLabel: "E-Commerce Platforms",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/60 border-b border-gray-100 bg-cyber-grid relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-blue-300/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Four Specialized Delivery Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            What We Build &amp; Engineer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We operate as dedicated software engineering pods rather than generalized ticket-takers. Every system is architected for scalability, strict type safety, and automated test coverage.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between group relative overflow-hidden transition-all ${pillar.bgHover}`}
              >
                {/* Luminous corner spotlight on hover */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-400/20 transition-all duration-500" />

                {/* Top specular accent border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.accentColor} opacity-90 group-hover:h-2 transition-all duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center border border-gray-200/80 shadow-xs group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-navy-950" />
                      </div>
                      <span className="text-2xl font-black text-gray-300 font-mono">
                        {pillar.num}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80 shadow-xs">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 mb-2 group-hover:text-electric transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 mb-3 font-mono">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-6 bg-slate-50/70 p-4 rounded-2xl border border-gray-200/60">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">
                      Key Engineering Capabilities
                    </div>
                    {pillar.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {pillar.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-gray-100/80 text-gray-700 border border-gray-200/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="relative z-10 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={pillar.primaryLink}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy-950 hover:text-electric transition-colors group/link"
                  >
                    <span>Explore Pillar Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={pillar.secondaryLink}
                    className="text-xs font-semibold text-gray-500 hover:text-blue-700 underline underline-offset-4 transition-colors"
                  >
                    {pillar.secondaryLabel} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Services Quick Navigation Directory */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold text-navy-950 mb-1">
              Looking for a specific technology discipline or service?
            </div>
            <div className="text-xs text-gray-500">
              Browse all 8 dedicated service specifications and architecture blueprints.
            </div>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs shadow-md transition-all shrink-0"
          >
            <span>View All Engineering Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

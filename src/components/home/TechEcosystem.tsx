"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Server,
  Smartphone,
  ShieldCheck,
  Bot,
  Database,
  Cloud,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    category: "Frontend & Web Architecture",
    icon: Code2,
    color: "from-blue-600 to-indigo-600",
    href: "/services/web-development",
    description:
      "Next-generation reactive architectures engineered for sub-second TTFB, edge caching, and perfect 95+ Core Web Vitals.",
    technologies: [
      { name: "Next.js 15 App Router", role: "SSR & Static Edge Caching", badge: "Edge Ready" },
      { name: "React 19 & TypeScript", role: "Type-Safe Reactive UI", badge: "Strict Type" },
      { name: "Tailwind CSS", role: "Utility-First Responsive Styling", badge: "Zero Runtime" },
      { name: "Vercel Edge Network", role: "Sub-Second Global TTFB", badge: "Global CDN" },
    ],
  },
  {
    id: "mobile",
    category: "Mobile Engineering",
    icon: Smartphone,
    color: "from-purple-600 to-indigo-600",
    href: "/services/mobile-app-development",
    description:
      "High-performance cross-platform iOS and Android applications with 60 FPS fluid animations and offline sync.",
    technologies: [
      { name: "Google Flutter & Dart", role: "Cross-Platform iOS & Android", badge: "60 FPS Native" },
      { name: "React Native", role: "Hybrid Mobile Framework", badge: "Modular" },
      { name: "Android Native (Kotlin)", role: "Hardware-Level Integration", badge: "Low Latency" },
      { name: "iOS Native (Swift)", role: "Cupertino Design & Apple SDKs", badge: "Apple Ready" },
    ],
  },
  {
    id: "backend",
    category: "Backend & Microservices",
    icon: Server,
    color: "from-blue-600 to-cyan-600",
    href: "/services/software-development",
    description:
      "High-concurrency microservices, ACID transactional databases, and resilient REST & GraphQL APIs.",
    technologies: [
      { name: "Java 21 & Spring Boot 3", role: "Enterprise Microservices", badge: "Enterprise" },
      { name: "Node.js & Express / NestJS", role: "High-Throughput API Gateways", badge: "Async I/O" },
      { name: "Python FastAPI", role: "High-Performance AI Backends", badge: "Sub-10ms" },
      { name: "Supabase Edge Functions", role: "Globally Distributed Serverless", badge: "Edge Compute" },
    ],
  },
  {
    id: "database",
    category: "Databases & Storage",
    icon: Database,
    color: "from-emerald-600 to-teal-600",
    href: "/services/software-development",
    description:
      "High-reliability transactional storage, low-latency in-memory caching, and vector embedding stores.",
    technologies: [
      { name: "PostgreSQL & Supabase", role: "ACID Relational Data Engine", badge: "ACID Compliant" },
      { name: "Redis In-Memory Cache", role: "Session Storage & Rate Limiting", badge: "< 1ms Latency" },
      { name: "MongoDB & Firebase", role: "Document & Realtime Sync", badge: "Flexible Schema" },
      { name: "pgvector & ChromaDB", role: "Vector Similarity Search", badge: "AI Embeddings" },
    ],
  },
  {
    id: "ai",
    category: "AI & Intelligent Automation",
    icon: Bot,
    color: "from-indigo-600 to-violet-600",
    href: "/services/ai-automation",
    description:
      "Frontier multimodal LLM agents, LangGraph orchestration, real-time WhatsApp bots, and hardware thermal printing.",
    technologies: [
      { name: "Google Gemini API & OpenAI", role: "Frontier Multimodal LLMs", badge: "Frontier AI" },
      { name: "LangChain & LangGraph", role: "Autonomous Multi-Agent Workflows", badge: "Agentic" },
      { name: "WhatsApp Business Cloud API", role: "24/7 Automated Customer Support", badge: "Direct Cloud" },
      { name: "ESC/POS Thermal Engine", role: "Receipt & Thermal Billing Printing", badge: "Hardware Sync" },
    ],
  },
  {
    id: "qa",
    category: "Quality Engineering & QA",
    icon: ShieldCheck,
    color: "from-teal-600 to-emerald-600",
    href: "/services/qa-automation",
    description:
      "Automated continuous regression suites, end-to-end browser testing, and API verification eliminating production defects.",
    technologies: [
      { name: "Selenium WebDriver 4", role: "End-to-End Browser Automation", badge: "Zero Defect" },
      { name: "Playwright", role: "Fast Headless Web Regression", badge: "CI/CD Native" },
      { name: "RestAssured & Postman", role: "API Contract Verification", badge: "Strict Schema" },
      { name: "GitHub Actions CI/CD", role: "Automated Build & Test Runners", badge: "Continuous" },
    ],
  },
];

export default function TechEcosystem() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? techCategories
      : techCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="tech-stack" className="py-20 lg:py-28 bg-white relative overflow-hidden bg-cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[600px] bg-blue-300/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered for Longevity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Our Modern Production Technology Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We avoid outdated legacy stacks. Every system is engineered with frontier, enterprise-grade tools built for longevity, sub-second speed, and maximum security.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-navy-950 text-white shadow-md"
                : "bg-slate-100 text-gray-600 hover:bg-slate-200"
            }`}
          >
            All Disciplines
          </button>
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-navy-950 text-white shadow-md"
                  : "bg-slate-100 text-gray-600 hover:bg-slate-200"
              }`}
            >
              {cat.category.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Technology Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Luminous corner spotlight on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-400/20 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 text-blue-700 flex items-center justify-center border border-blue-200/60 shadow-xs group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-gray-700 border border-gray-200">
                      Layer
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy-950 mb-2 group-hover:text-electric transition-colors">
                    {cat.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Tech stack rows */}
                  <div className="space-y-2 mb-6">
                    {cat.technologies.map((t, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 border border-gray-100 text-xs"
                      >
                        <span className="font-bold text-navy-950">{t.name}</span>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white text-blue-700 border border-gray-200 shadow-2xs">
                          {t.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-mono">100% Production Standard</span>
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy-950 hover:text-electric transition-colors"
                  >
                    <span>Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

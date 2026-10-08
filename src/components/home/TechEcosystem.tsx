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
} from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    category: "Frontend & Web Architecture",
    icon: Code2,
    color: "from-brand-500 to-emerald-500",
    href: "/services/web-development",
    description: "Next-generation reactive architectures engineered for sub-second TTFB, edge caching, and perfect 95+ Core Web Vitals.",
    technologies: [
      { name: "Next.js 15 App Router", role: "SSR & Static Edge Caching", badge: "Edge Ready" },
      { name: "React 19 & TypeScript", role: "Type-Safe Reactive UI", badge: "Strict Type" },
      { name: "Tailwind CSS", role: "Utility-First Responsive Design", badge: "Zero Runtime" },
      { name: "Vercel Edge Network", role: "Sub-Second Global TTFB", badge: "Global CDN" },
    ],
  },
  {
    id: "backend",
    category: "Enterprise Backend & APIs",
    icon: Server,
    color: "from-blue-500 to-indigo-600",
    href: "/services/software-development",
    description: "High-concurrency microservices, ACID transactional databases, and resilient REST & GraphQL APIs.",
    technologies: [
      { name: "Java 21 & Spring Boot 3", role: "High-Concurrency Microservices", badge: "Enterprise" },
      { name: "Node.js & Express", role: "Lightweight API Gateways", badge: "Microservices" },
      { name: "PostgreSQL & Supabase", role: "ACID Relational Storage", badge: "ACID Compliant" },
      { name: "Redis", role: "In-Memory Session & Cache Engine", badge: "Sub-millisecond" },
    ],
  },
  {
    id: "mobile-qa",
    category: "Mobile & Quality Automation",
    icon: Smartphone,
    color: "from-purple-500 to-pink-600",
    href: "/services/mobile-app-development",
    description: "Cross-platform iOS and Android apps alongside automated continuous regression suites eliminating regression bugs.",
    technologies: [
      { name: "Google Flutter & Dart", role: "Cross-Platform iOS & Android", badge: "60 FPS Native" },
      { name: "Selenium WebDriver 4", role: "End-to-End Browser Automation", badge: "Zero Defect" },
      { name: "Playwright", role: "Fast Headless Web Regression", badge: "CI/CD Native" },
      { name: "RestAssured & Postman", role: "Automated API Contract Verification", badge: "Strict Schema" },
    ],
  },
  {
    id: "ai-ops",
    category: "AI & Business Operations",
    icon: Bot,
    color: "from-emerald-500 to-teal-600",
    href: "/services/ai-automation",
    description: "Frontier multimodal LLM agents, LangGraph orchestration, real-time WhatsApp bots, and hardware thermal printing.",
    technologies: [
      { name: "Google Gemini API & OpenAI", role: "Frontier Multimodal LLMs", badge: "Frontier AI" },
      { name: "LangChain & LangGraph", role: "Autonomous Multi-Agent Workflows", badge: "Agentic" },
      { name: "WhatsApp Business Cloud API", role: "Automated 24/7 Customer Support", badge: "Direct Cloud" },
      { name: "ESC/POS Thermal Engine", role: "Sub-Second Receipt & Billing Printing", badge: "Hardware Sync" },
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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden bg-cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[600px] bg-brand-300/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200/80 shadow-xs">
            Engineered for Longevity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mt-3">
            Our Modern Production Technology Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We avoid outdated legacy stacks. Every system is engineered with frontier, enterprise-grade tools built for longevity, sub-second speed, and maximum security.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-navy-950 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Stacks (16 Components)
            </button>
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === cat.id
                    ? "bg-navy-950 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5 text-brand-500" />
                <span>{cat.category.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white/95 rounded-3xl p-8 border border-gray-200/90 shadow-3d-card card-3d-lift relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Luminous accent gradient top line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color} opacity-80 group-hover:h-1.5 transition-all`}
              />

              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-navy-950 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <cat.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy-950">{cat.category}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {cat.technologies.map((t, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50/80 hover:bg-brand-50/50 rounded-2xl p-4 border border-gray-200/60 hover:border-brand-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-xs font-bold text-navy-950">{t.name}</span>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white text-brand-700 border border-brand-200/60 shrink-0">
                            {t.badge}
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-500">{t.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono">
                <Link
                  href={cat.href}
                  className="text-brand-700 hover:text-brand-800 font-bold font-sans flex items-center gap-1 group/link transition-colors"
                >
                  <span>Explore {cat.category.split(" ")[0]} Pillar</span>
                  <ArrowRight className="w-3 h-3 text-brand-600 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% CI/CD Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

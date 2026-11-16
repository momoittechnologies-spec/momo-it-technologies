import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  Award,
  Lock,
  Wrench,
  Car,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function TrustStrip() {
  const techLogos = [
    { name: "Next.js 15", category: "Edge Web", icon: "▲" },
    { name: "React 19", category: "Frontend", icon: "⚛" },
    { name: "TypeScript", category: "Type-Safe", icon: "TS" },
    { name: "Flutter 3.x", category: "Mobile iOS/Android", icon: "📱" },
    { name: "Java 21", category: "Enterprise Backend", icon: "☕" },
    { name: "Spring Boot 3", category: "Microservices", icon: "🍃" },
    { name: "PostgreSQL", category: "ACID Database", icon: "🐘" },
    { name: "Supabase", category: "Realtime Edge", icon: "⚡" },
    { name: "Selenium 4", category: "E2E Automation", icon: "🛡️" },
    { name: "Playwright", category: "Regression Testing", icon: "🎭" },
    { name: "Docker", category: "Cloud Containers", icon: "🐳" },
    { name: "Redis", category: "In-Memory Cache", icon: "⚡" },
    { name: "Tailwind CSS", category: "Modern UI", icon: "🎨" },
    { name: "Google Gemini", category: "Multimodal AI", icon: "✨" },
  ];

  return (
    <div className="bg-white border-y border-gray-100/90 py-8 overflow-hidden relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 mb-6">
        {/* Top Proof Bar: Genuine Production Clients & Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Card 1: AS Refrigerations */}
          <Link
            href="/case-studies/as-refrigerations"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 hover:bg-blue-50/60 border border-gray-200/70 hover:border-blue-300 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500 flex items-center gap-1">
                <span>Client Case Study</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-beacon-pulse" />
              </div>
              <div className="text-sm font-bold text-navy-950 truncate group-hover:text-electric transition-colors">
                AS REFRIGERATIONS
              </div>
              <div className="text-[11px] text-gray-500 truncate">
                Kadapa &amp; BLR · 0% UPI Engine
              </div>
            </div>
          </Link>

          {/* Card 2: MANA Tours & Travels */}
          <Link
            href="/case-studies/mana-tours"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 hover:bg-blue-50/60 border border-gray-200/70 hover:border-blue-300 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500 flex items-center gap-1">
                <span>Client Case Study</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-beacon-pulse" />
              </div>
              <div className="text-sm font-bold text-navy-950 truncate group-hover:text-electric transition-colors">
                MANA Tours &amp; Travels
              </div>
              <div className="text-[11px] text-gray-500 truncate">
                Fleet Dispatch &amp; WhatsApp Engine
              </div>
            </div>
          </Link>

          {/* Card 3: Enterprise QA & Automated CI/CD */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/60 border border-gray-200/70 hover:border-emerald-300 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500 flex items-center gap-1">
                <span>QA Engineering Pod</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-beacon-pulse" />
              </div>
              <div className="text-sm font-bold text-navy-950 truncate group-hover:text-emerald-700 transition-colors">
                Selenium 4 &amp; Playwright
              </div>
              <div className="text-[11px] text-gray-500 truncate">
                Automated Regression Suites
              </div>
            </div>
          </div>

          {/* Card 4: Google 5.0 Rating */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-gray-200/70">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500 flex items-center gap-1">
                <span>5.0★ Google Verified</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-sm font-bold text-navy-950 truncate">
                100% Client IP Ownership
              </div>
              <div className="text-[11px] text-gray-500 truncate">
                Zero Vendor Lock-in
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Technology Marquee Strip with Left & Right Gradient Masks */}
      <div className="relative w-full overflow-hidden marquee-container py-2">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee marquee-track items-center gap-3">
          {techLogos.map((tech, i) => (
            <div
              key={`tech-1-${i}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50/90 hover:bg-blue-50/80 border border-gray-200/70 hover:border-blue-300 text-xs font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:shadow-xs shrink-0 cursor-default"
            >
              <span className="text-sm">{tech.icon}</span>
              <span>{tech.name}</span>
              <span className="text-[10px] text-gray-500 font-normal border-l border-gray-200 pl-1.5 font-mono">
                {tech.category}
              </span>
            </div>
          ))}

          {techLogos.map((tech, i) => (
            <div
              key={`tech-2-${i}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50/90 hover:bg-blue-50/80 border border-gray-200/70 hover:border-blue-300 text-xs font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:shadow-xs shrink-0 cursor-default"
            >
              <span className="text-sm">{tech.icon}</span>
              <span>{tech.name}</span>
              <span className="text-[10px] text-gray-500 font-normal border-l border-gray-200 pl-1.5 font-mono">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

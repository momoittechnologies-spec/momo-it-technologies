import React from "react";
import { ShieldCheck, Sparkles, Terminal } from "lucide-react";

export default function TrustStrip() {
  const techLogos = [
    { name: "Next.js 15", category: "Edge Web", icon: "▲" },
    { name: "React 19", category: "Frontend", icon: "⚛" },
    { name: "Flutter 3.x", category: "Mobile iOS/Android", icon: "📱" },
    { name: "Java 21", category: "Enterprise Backend", icon: "☕" },
    { name: "Spring Boot 3", category: "Microservices", icon: "🍃" },
    { name: "Supabase", category: "Real-time DB", icon: "⚡" },
    { name: "PostgreSQL", category: "ACID Storage", icon: "🐘" },
    { name: "Selenium 4", category: "E2E Automation", icon: "🛡️" },
    { name: "Playwright", category: "Regression Testing", icon: "🎭" },
    { name: "Docker", category: "Cloud Containers", icon: "🐳" },
    { name: "Redis", category: "In-Memory Cache", icon: "⚡" },
    { name: "TypeScript", category: "Type-Safe", icon: "TS" },
  ];

  return (
    <div className="bg-white border-y border-gray-100/90 py-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                Enterprise Production Stack
              </div>
              <div className="text-sm font-extrabold text-navy-950 flex items-center gap-1.5">
                5.0★ Google Rated · Battle-Tested Engineering Standards
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon-pulse" />
            <span>Active Deployments</span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Strip with Left & Right Gradient Masks */}
      <div className="relative w-full overflow-hidden marquee-container py-2">
        {/* Left Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        {/* Right Gradient Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Ticker Track */}
        <div className="flex w-max animate-marquee marquee-track items-center gap-3">
          {/* First set */}
          {techLogos.map((tech, i) => (
            <div
              key={`tech-1-${i}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50/90 hover:bg-brand-50/80 border border-gray-200/70 hover:border-brand-300 text-xs font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:shadow-sm shrink-0 cursor-default"
            >
              <span className="text-sm">{tech.icon}</span>
              <span>{tech.name}</span>
              <span className="text-[10px] text-gray-500 font-normal border-l border-gray-200 pl-1.5">
                {tech.category}
              </span>
            </div>
          ))}

          {/* Duplicated set for seamless infinite loop */}
          {techLogos.map((tech, i) => (
            <div
              key={`tech-2-${i}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50/90 hover:bg-brand-50/80 border border-gray-200/70 hover:border-brand-300 text-xs font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:shadow-sm shrink-0 cursor-default"
            >
              <span className="text-sm">{tech.icon}</span>
              <span>{tech.name}</span>
              <span className="text-[10px] text-gray-500 font-normal border-l border-gray-200 pl-1.5">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


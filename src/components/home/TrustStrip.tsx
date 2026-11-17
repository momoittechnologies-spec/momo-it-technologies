import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  Code2,
  CheckCircle2,
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
    <div className="bg-[#030712] border-y border-white/[0.08] text-white py-8 overflow-hidden relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 mb-6">
        {/* Restrained Trust Strip: 4 Verified Business Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
          
          {/* Indicator 1: 5.0 Google Rating */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-white flex items-center gap-1">
                <span>5.0 Google Rating</span>
              </div>
              <div className="text-[11px] text-gray-400 truncate">
                Verified Client Reviews · Kadapa HQ
              </div>
            </div>
          </div>

          {/* Indicator 2: Commercial Deployments */}
          <Link
            href="/case-studies"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-400/40 transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                Live Deployments
              </div>
              <div className="text-[11px] text-gray-400 truncate">
                AS Refrigerations &amp; MANA Tours
              </div>
            </div>
          </Link>

          {/* Indicator 3: 100% Code Ownership */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-white truncate">
                100% Code Ownership
              </div>
              <div className="text-[11px] text-gray-400 truncate">
                Full Source Code &amp; IP Handover
              </div>
            </div>
          </div>

          {/* Indicator 4: Senior Engineering */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-white truncate">
                Senior Engineering
              </div>
              <div className="text-[11px] text-gray-400 truncate">
                Direct Developer Collaboration
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Technology Ecosystem Marquee Strip */}
      <div className="relative w-full overflow-hidden marquee-container py-1 border-t border-white/[0.04]">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee marquee-track items-center gap-3">
          {techLogos.map((tech, i) => (
            <div
              key={`tech-1-${i}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-semibold text-gray-300 transition-all shrink-0 cursor-default"
            >
              <span className="text-sm">{tech.icon}</span>
              <span className="text-white font-medium">{tech.name}</span>
              <span className="text-[10px] text-gray-500 border-l border-white/10 pl-1.5 font-mono">
                {tech.category}
              </span>
            </div>
          ))}

          {techLogos.map((tech, i) => (
            <div
              key={`tech-2-${i}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-semibold text-gray-300 transition-all shrink-0 cursor-default"
            >
              <span className="text-sm">{tech.icon}</span>
              <span className="text-white font-medium">{tech.name}</span>
              <span className="text-[10px] text-gray-500 border-l border-white/10 pl-1.5 font-mono">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

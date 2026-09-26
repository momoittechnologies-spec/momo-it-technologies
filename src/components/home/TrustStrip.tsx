import React from "react";
import { Star, ShieldCheck, Award, Zap, CheckCircle2 } from "lucide-react";

export default function TrustStrip() {
  const techLogos = [
    { name: "Java", category: "Core Backend" },
    { name: "Spring Boot", category: "Microservices" },
    { name: "Playwright", category: "E2E Testing" },
    { name: "Selenium", category: "Automation" },
    { name: "Next.js", category: "Modern Web" },
    { name: "React", category: "Frontend" },
    { name: "Flutter", category: "Cross-Platform Mobile" },
    { name: "PostgreSQL", category: "Database" },
    { name: "RestAssured", category: "API Automation" },
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left badge */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Verified Expertise
              </div>
              <div className="text-sm font-extrabold text-navy-950 flex items-center gap-1.5">
                4.8★ Kadapa Academy · Premier IT Partner
              </div>
            </div>
          </div>

          {/* Scrolling / Flex Tech Tags */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-2.5">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-brand-50/60 border border-gray-100 hover:border-brand-200 text-xs font-semibold text-gray-700 hover:text-brand-800 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

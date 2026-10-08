import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Architecture Audit",
    desc: "We analyze your existing workflows, database schemas, performance bottlenecks, and business objectives. We deliver a detailed technical roadmap with zero hidden costs.",
  },
  {
    num: "02",
    title: "UI/UX & Interactive Prototype",
    desc: "Our design team crafts responsive Figma wireframes and clickable prototypes. You test and experience the application flow before any production code is committed.",
  },
  {
    num: "03",
    title: "Sprint Execution & Automated QA",
    desc: "Modular 2-week agile sprints with continuous automated test suites (Selenium, Playwright). We guarantee zero critical defects and clean, maintainable code.",
  },
  {
    num: "04",
    title: "Edge Deployment & Growth Handoff",
    desc: "Zero-downtime cutover, automated cloud database backups, staff onboarding, and complete source code IP handoff with post-launch technical support.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-light border-y border-gray-200/60 bg-cyber-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200/80 shadow-xs">
            Predictable Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mt-3">
            Our 4-Step Engineering Pipeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Transparent milestones, weekly sprint updates, and guaranteed delivery timelines from concept to production.
          </p>
        </div>

        {/* 3D Stepper Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white/95 rounded-3xl p-8 border border-gray-200/90 shadow-3d-card card-3d-lift relative flex flex-col justify-between group overflow-hidden"
            >
              {/* Luminous corner spotlight on hover */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-400/25 transition-all duration-300" />

              {/* Specular top border line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-emerald-500 opacity-60 group-hover:h-1.5 transition-all" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-600 via-emerald-500 to-teal-600 font-mono">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-mono">
                    Phase {s.num}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-navy-950 mb-3 group-hover:text-brand-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 relative z-10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span>Milestone Gate</span>
                <span className="text-brand-600 font-bold">100% Sign-Off</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Your Project With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Solution Architecture",
    badge: "Milestone 01",
    deliverables: "Architecture Spec, DB Schema & Fixed-Price Roadmap",
    desc: "We analyze your business workflows, transactional volume, database schemas, and performance bottlenecks. We deliver a detailed system architecture blueprint with zero ambiguity and fixed milestones.",
  },
  {
    num: "02",
    title: "UI/UX Design & Interactive Prototype",
    badge: "Milestone 02",
    deliverables: "Figma Wireframes, Token System & Interactive UX Flow",
    desc: "Our product design team crafts high-fidelity responsive wireframes and clickable prototypes. You test and experience the complete user journeys and dashboard flows before any production code is committed.",
  },
  {
    num: "03",
    title: "Agile Engineering & Automated QA",
    badge: "Milestone 03",
    deliverables: "Bi-Weekly Sprints, Clean Code & Selenium / Playwright Suites",
    desc: "Modular 2-week agile sprints backed by automated continuous test suites. Every pull request undergoes peer code review, type checks, and regression verification, guaranteeing zero critical defects.",
  },
  {
    num: "04",
    title: "Cloud Deployment, SLA & IP Handoff",
    badge: "Milestone 04",
    deliverables: "Zero-Downtime Launch, 100% IP Transfer & 24/7 Support",
    desc: "Zero-downtime cloud cutover (Vercel Edge, AWS, Docker), automated database backup pipelines, staff onboarding, and complete source code repository handoff with post-launch SLA protection.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50/60 border-y border-gray-200/60 bg-cyber-grid relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Disciplined Delivery Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            How We Engineer &amp; Ship Software
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Transparent milestones, weekly sprint updates, and guaranteed delivery timelines from concept to production.
          </p>
        </div>

        {/* 4-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8 relative">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-3d-card card-3d-lift relative flex flex-col justify-between group overflow-hidden"
            >
              {/* Luminous corner spotlight on hover */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-400/25 transition-all duration-300" />

              {/* Top specular line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-70 group-hover:h-1.5 transition-all" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 font-mono">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-gray-700">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-navy-950 mb-3 group-hover:text-electric transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {s.desc}
                </p>

                <div className="p-3 rounded-xl bg-slate-50 border border-gray-100 text-[11px] text-gray-600 mb-2">
                  <div className="font-bold text-navy-950 mb-0.5">Key Deliverable:</div>
                  <div>{s.deliverables}</div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 relative z-10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span>Milestone Gate</span>
                <span className="text-blue-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Sign-Off</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Your Project With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

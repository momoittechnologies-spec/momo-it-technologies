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
    <section className="py-20 lg:py-28 bg-surface-light border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            How We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mt-3">
            Our 4-Step Engineering Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Transparent milestones, weekly sprint updates, and guaranteed delivery timelines from concept to production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl font-black text-brand-600/20 mb-4">{s.num}</div>
                <h3 className="text-lg font-bold text-navy-950 mb-3">{s.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
          >
            <span>Start Your Project With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

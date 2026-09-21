import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Zap,
  Lock,
  Database,
  Smartphone,
  Layers,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

export const metadata = {
  title: "MOMOPE Case Study — Digital Payments & Rewards | MOMO IT Technologies",
  description:
    "How MOMO IT Technologies engineered MOMOPE: a high-concurrency digital payments and guaranteed customer rewards platform for retail businesses.",
};

export default function MomoPeCaseStudy() {
  const momope = caseStudiesData.find((c) => c.id === "momope")!;

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
              <CreditCard className="w-3.5 h-3.5" />
              Fintech &amp; Digital Payments
            </span>
            <a
              href="https://www.momope.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-brand-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-xl transition-colors border border-gray-200"
            >
              <span>www.momope.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mb-3">
            MOMOPE — Payments + Guaranteed Rewards Platform
          </h1>
          <p className="text-lg text-brand-700 font-semibold mb-6">
            Engineered by MOMO IT Technologies to connect customers, merchants, and local businesses in a thriving digital transaction ecosystem.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {momope.description}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
            {momope.highlights.map((h, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider block">
                  {h.label}
                </span>
                <span className="text-sm sm:text-base font-extrabold text-navy-950">
                  {h.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card">
            <h2 className="text-xl font-extrabold text-navy-950 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm">
                !
              </span>
              The Challenge
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {momope.challenge}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card">
            <h2 className="text-xl font-extrabold text-navy-950 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-sm">
                ✓
              </span>
              Our Engineering Solution
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {momope.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Key Features */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-10">
          <h2 className="text-2xl font-extrabold text-navy-950 mb-6">
            Key Architecture &amp; System Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {momope.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100 text-sm text-gray-800"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
            Technology Stack Employed:
          </h3>
          <div className="flex flex-wrap gap-2">
            {momope.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Business Results */}
        <div className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-12">
          <h2 className="text-2xl font-extrabold mb-4">Measurable Results &amp; Reliability</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {momope.results.map((res, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{res}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white">
                Want to build a custom Fintech or Billing Platform?
              </div>
              <div className="text-xs text-gray-400">
                Our senior engineering team can architect your solution from ground up.
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
            >
              Discuss Your Fintech Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

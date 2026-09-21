import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  UtensilsCrossed,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Zap,
  Smartphone,
  Layers,
  Database,
  Truck,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

export const metadata = {
  title: "Vijaya's Yummy Food Case Study — FoodTech & Cloud Kitchen | MOMO IT Technologies",
  description:
    "How MOMO IT Technologies engineered Vijaya's Yummy Food: a direct online ordering web app and installable PWA built with Next.js 15 and Supabase for a Bengaluru cloud kitchen.",
};

export default function VijayasYummyFoodCaseStudy() {
  const project = caseStudiesData.find((c) => c.id === "vijayas-yummy-food")!;

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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200/60">
              <UtensilsCrossed className="w-3.5 h-3.5 text-orange-600" />
              FoodTech &amp; Cloud Kitchen PWA
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1.5 rounded-xl border border-brand-200">
              Ongoing Client Project
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mb-3">
            Vijaya&apos;s Yummy Food — Direct Food Ordering Platform
          </h1>
          <p className="text-lg text-brand-700 font-semibold mb-6">
            Engineered by MOMO IT Technologies for direct, commission-free online food ordering and delivery dispatch in Kadugodi, Bengaluru.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
            {project.highlights.map((h, idx) => (
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
              {project.challenge}
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
              {project.solution}
            </p>
          </div>
        </div>

        {/* Features & Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Key Features */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card">
            <h3 className="text-lg font-extrabold text-navy-950 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-600" />
              Core System Features
            </h3>
            <div className="space-y-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Measured Results */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card">
            <h3 className="text-lg font-extrabold text-navy-950 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-600" />
              Engineering Impact
            </h3>
            <div className="space-y-3">
              {project.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block mb-1">
              Production Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Built with Next.js 15, Supabase, &amp; PWA
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-navy-900 border border-navy-800 text-xs font-mono text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 transition-all"
          >
            Discuss Your Custom App
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Car,
  Star,
  CheckCircle2,
  ExternalLink,
  PhoneCall,
  Bot,
  Zap,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

export const metadata = {
  title: "MANA Tours & Travels Case Study — Mobility & AI Booking | MOMO IT Technologies",
  description:
    "How MOMO IT Technologies engineered Kadapa's premier travel & self-drive car booking platform for MANA Tours & Travels with 24/7 AI Voice Assistant.",
};

export default function ManaToursCaseStudy() {
  const manaTours = caseStudiesData.find((c) => c.id === "mana-tours")!;

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
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60">
                <Car className="w-3.5 h-3.5" />
                Mobility &amp; Travel ERP
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                5.0★ Google Rated (50+ Reviews)
              </span>
            </div>
            <a
              href="https://www.manatoursandtravels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-brand-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-xl transition-colors border border-gray-200"
            >
              <span>www.manatoursandtravels.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mb-3">
            MANA Tours &amp; Travels Kadapa — Digital Mobility Platform
          </h1>
          <p className="text-lg text-blue-700 font-semibold mb-6">
            Built by MOMO IT Technologies: featuring interactive vehicle fleet bookings, self-drive rentals, and an innovative 24/7 AI Voice Enquiry Assistant.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {manaTours.description}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
            {manaTours.highlights.map((h, idx) => (
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
              {manaTours.challenge}
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
              {manaTours.solution}
            </p>
          </div>
        </div>

        {/* Feature Spotlight: 24/7 AI Voice Assistant */}
        <div className="bg-gradient-to-r from-blue-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-10">
          <div className="flex items-center gap-2 text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Bot className="w-4 h-4" />
            Breakthrough Feature Integration
          </div>
          <h2 className="text-2xl font-extrabold mb-3">
            24/7 AI Voice Enquiry &amp; Booking Agent
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mb-6">
            To solve after-hours inquiry drop-offs, we integrated a real-time conversational AI voice assistant right into the browser. Passengers can speak directly in Telugu or English to get instant route estimates for Tirupati, Bangalore Airport, or Gandikota day tours.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-navy-800 text-xs text-brand-300 border border-brand-500/30">
              Bilingual (Telugu + English)
            </span>
            <span className="px-3 py-1 rounded-full bg-navy-800 text-xs text-blue-300 border border-blue-500/30">
              Zero Latency WebSocket Audio
            </span>
            <span className="px-3 py-1 rounded-full bg-navy-800 text-xs text-gray-300 border border-gray-700">
              Direct WhatsApp Summary Handoff
            </span>
          </div>
        </div>

        {/* Results & Reliability */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12">
          <h2 className="text-2xl font-extrabold text-navy-950 mb-6">
            Production Results &amp; Business Growth
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {manaTours.results.map((res, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100 text-sm text-gray-800"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>{res}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-navy-950">
                Need a Custom Booking Engine or Portal for Your Business?
              </div>
              <div className="text-xs text-gray-500">
                We build high-conversion booking workflows tailored to your sector.
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
            >
              Get Custom Portal Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

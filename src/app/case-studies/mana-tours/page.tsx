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
  alternates: {
    canonical: "https://www.momoittechnologies.com/case-studies/mana-tours",
  },
  openGraph: {
    title: "MANA Tours & Travels Case Study — Mobility & AI Booking | MOMO IT Technologies",
    description:
      "Enterprise travel reservation portal engineered by MOMO IT Technologies Kadapa with automated fleet management, driver dispatch, and 5.0★ Google rating.",
    url: "https://www.momoittechnologies.com/case-studies/mana-tours",
  },
};

export default function ManaToursCaseStudy() {
  const manaTours = caseStudiesData.find((c) => c.id === "mana-tours")!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "MANA Tours & Travels Online Booking & Fleet ERP",
        operatingSystem: "Web / Mobile",
        applicationCategory: "TravelApplication / BusinessApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        author: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.momoittechnologies.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: "https://www.momoittechnologies.com/case-studies",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "MANA Tours & Travels",
            item: "https://www.momoittechnologies.com/case-studies/mana-tours",
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-surface-light min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 mb-8">
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

          {/* Simulated Fleet Booking & Dispatch Interface */}
          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                Booking Engine Architecture · Live on manatoursandtravels.com
              </span>
              <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                Kadapa Mobility Hub
              </span>
            </div>

            <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 text-white border border-slate-800 shadow-xl">
              <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-cyan-300 font-bold">MANA Tours Online Dispatch Kernel</span>
                </div>
                <div className="font-mono text-gray-400 text-[11px]">
                  Real-Time Dynamic Pricing Engine
                </div>
              </div>

              {/* Corridors Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-[11px] text-gray-400 font-mono">Tirupati Airport &amp; Darshan</div>
                  <div className="text-sm font-bold text-white mt-1">₹3,200 <span className="text-[10px] text-gray-400 font-normal">/ Sedan</span></div>
                  <div className="text-[10px] text-emerald-400 mt-1">140 km · 3.5 hrs</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-[11px] text-gray-400 font-mono">Bangalore Airport (BLR)</div>
                  <div className="text-sm font-bold text-white mt-1">₹5,800 <span className="text-[10px] text-gray-400 font-normal">/ Sedan</span></div>
                  <div className="text-[10px] text-emerald-400 mt-1">260 km · 5.0 hrs</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-[11px] text-gray-400 font-mono">Hyderabad Corridor (RGI)</div>
                  <div className="text-sm font-bold text-white mt-1">₹6,500 <span className="text-[10px] text-gray-400 font-normal">/ SUV</span></div>
                  <div className="text-[10px] text-emerald-400 mt-1">380 km · 7.5 hrs</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-[11px] text-gray-400 font-mono">Gandikota &amp; Belum Caves</div>
                  <div className="text-sm font-bold text-white mt-1">₹3,500 <span className="text-[10px] text-gray-400 font-normal">/ Full Day</span></div>
                  <div className="text-[10px] text-emerald-400 mt-1">Sightseeing Package</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-gray-400">
                  Automated WhatsApp dispatch triggers driver allocation and passenger SMS in under 2 seconds.
                </span>
                <span className="text-cyan-400 font-mono text-[11px] font-semibold">
                  Zero Third-Party Commission
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonial Spotlight */}
        <div className="bg-gradient-to-br from-blue-900 via-navy-950 to-navy-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              Verified Client Testimonial · 5.0★ Google Rating
            </div>
            <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic mb-6 text-gray-100">
              &ldquo;MOMO IT TECHNOLOGIES engineered our web portal and WhatsApp reservation engine from scratch. Our passengers now book cabs for Tirupati, Bangalore Airport, and local rentals seamlessly. The speed, reliability, and local support right here in Kadapa have helped us scale our fleet operations with confidence.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white text-base shadow-md">
                PK
              </div>
              <div>
                <div className="font-extrabold text-white text-base flex items-center gap-2">
                  Pavan Kalyan
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    Verified Founder
                  </span>
                </div>
                <div className="text-xs text-gray-300">
                  Managing Director · MANA Tours &amp; Travels Kadapa
                </div>
              </div>
            </div>
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

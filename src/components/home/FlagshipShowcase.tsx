import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
  Car,
  Wrench,
  Lock,
  Zap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

export default function FlagshipShowcase() {
  const asRef = caseStudiesData.find((c) => c.id === "as-refrigerations")!;
  const manaTours = caseStudiesData.find((c) => c.id === "mana-tours")!;

  return (
    <section id="featured-work" className="py-20 lg:py-28 bg-white border-b border-gray-100 relative bg-cyber-grid">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Featured Production Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Commercial Software Engineered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              MOMO IT Technologies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We build, test, and ship mission-critical software for real commercial enterprises—from multi-city field operations platforms to real-time mobility and travel portals.
          </p>
        </div>

        {/* Client Deployments Grid - 2 Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 2xl:gap-12">
          
          {/* Card 1: AS REFRIGERATIONS (Multi-City Field Service) */}
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between overflow-hidden group relative">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/20 transition-all duration-500" />

            {/* Browser Frame Top Bar */}
            <div className="px-5 py-3.5 bg-slate-50 border-b border-gray-200/80 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-xs" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-xs" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-xs" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] text-gray-700 font-mono shadow-xs">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>asrefrigerations.com</span>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-beacon-pulse" />
            </div>

            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold border border-cyan-200/60 font-mono">
                    <Wrench className="w-3.5 h-3.5 text-cyan-600" />
                    Field Operations &amp; HVAC ERP
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>5.0 ★ Client Verified</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 group-hover:text-electric transition-colors">
                  AS REFRIGERATIONS
                </h3>
                <p className="text-sm font-semibold text-blue-700 mt-0.5 mb-4">
                  Multi-City Service &amp; Field Dispatch Platform
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {asRef.description}
                </p>

                {/* Real Live Screenshot Preview */}
                <div className="mb-5 overflow-hidden rounded-xl border border-gray-200 bg-slate-950 max-h-48 group-hover:border-cyan-400/50 transition-colors shadow-sm">
                  <div className="flex items-center justify-between px-3 py-1 bg-slate-900 border-b border-slate-800 text-[10px] font-mono text-gray-400">
                    <span className="text-gray-300">asrefrigerations.com</span>
                    <span className="text-emerald-400">Kadapa &amp; Bangalore East</span>
                  </div>
                  <img
                    src="/clients/as-refrigerations/as-refrigerations-hero-desktop.png"
                    alt="AS REFRIGERATIONS Platform Interface"
                    className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* 3D Simulated Interactive Preview Strip */}
                <div className="mb-6 p-4 rounded-2xl bg-navy-950 text-white font-mono text-xs border border-white/10 shadow-inner">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px] text-gray-400">
                    <span className="text-cyan-400 font-bold">⚡ NPCI UPI &amp; FIELD ENGINE</span>
                    <span className="text-emerald-400 font-bold">0% Payment Gateway Fee</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="text-emerald-400">✓ Dynamic UPI QR: Instant Bank-to-Bank Settlement</div>
                    <div className="text-cyan-300">✓ Multi-City Hubs: Kadapa (19 Wards) + Bangalore (25 Localities)</div>
                    <div className="text-gray-300">✓ Sameer Priority 1 Auto Dispatch &amp; ReviewSmart AI Funnel</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Multi-city 19 Kadapa wards &amp; 25 Bangalore localities switching</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Zero-SMS 4-digit PIN authentication eliminating recurring OTP bills</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Urban Company-grade dual mobile app shells for customers &amp; field technicians</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {asRef.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 text-navy-950 font-mono text-[11px] font-semibold border border-gray-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/case-studies/as-refrigerations"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-electric transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </Link>
                <a
                  href="https://asrefrigerations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-700 font-semibold transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Mana Tours & Travels (Mobility & Fleet Booking) */}
          <div className="bg-white rounded-3xl border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between overflow-hidden group relative">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-400/20 transition-all duration-500" />

            {/* Browser Frame Top Bar */}
            <div className="px-5 py-3.5 bg-slate-50 border-b border-gray-200/80 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-xs" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-xs" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-xs" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] text-gray-700 font-mono shadow-xs">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>manatoursandtravels.com</span>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-beacon-pulse" />
            </div>

            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60 font-mono">
                    <Car className="w-3.5 h-3.5" />
                    Mobility &amp; Fleet Logistics
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>5.0 ★ Google Rating</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 group-hover:text-electric transition-colors">
                  MANA Tours &amp; Travels
                </h3>
                <p className="text-sm font-semibold text-blue-700 mt-0.5 mb-4">
                  Kadapa Travel &amp; Cab Booking Portal
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {manaTours.description}
                </p>

                {/* 3D Simulated Interactive Preview Strip */}
                <div className="mb-6 p-4 rounded-2xl bg-navy-950 text-white font-mono text-xs border border-white/10 shadow-inner">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px] text-gray-400">
                    <span className="text-cyan-400 font-bold">🚖 FLEET DISPATCH ENGINE</span>
                    <span className="text-blue-300 font-bold">Sub-Second Quotations</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="text-cyan-300">✓ Tirupati / BLR / HYD Outstation Corridors</div>
                    <div className="text-gray-300">✓ Instant WhatsApp Booking Gateway</div>
                    <div className="text-emerald-400">✓ 5.0★ Verified Customer Satisfaction</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Local cab booking, outstation taxi, and airport drop services</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Pilgrimage packages: Tirupati, Srisailam &amp; Ahobilam routes</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Self-drive car rentals &amp; instant WhatsApp booking flow</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {manaTours.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 text-navy-950 font-mono text-[11px] font-semibold border border-gray-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/case-studies/mana-tours"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-electric transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </Link>
                <a
                  href="https://www.manatoursandtravels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-700 font-semibold transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

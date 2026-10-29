import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
  UtensilsCrossed,
  Car,
  Wrench,
  Lock,
  Zap,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

export default function FlagshipShowcase() {
  const asRef = caseStudiesData.find((c) => c.id === "as-refrigerations")!;
  const vijayaFood = caseStudiesData.find((c) => c.id === "vijayas-yummy-food")!;
  const manaTours = caseStudiesData.find((c) => c.id === "mana-tours")!;

  return (
    <section className="py-20 lg:py-28 bg-surface-light border-b border-gray-100 relative bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Live Client Work &amp; Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Production Software Engineered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700">
              MOMO IT Technologies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We build, test, and ship mission-critical software for real businesses—from multi-city field service platforms to cloud kitchens and travel booking engines.
          </p>
        </div>

        {/* Client Deployments Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: AS REFRIGERATIONS (Multi-City Field Service) */}
          <div className="bg-white/95 rounded-3xl border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between overflow-hidden group relative">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/20 transition-all duration-500" />

            {/* Browser Frame Top Bar */}
            <div className="px-5 py-3.5 bg-gray-50/90 border-b border-gray-200/80 flex items-center justify-between backdrop-blur-md">
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

            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold border border-cyan-200/60">
                    <Wrench className="w-3.5 h-3.5 text-cyan-600" />
                    Field Ops &amp; HVAC
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>5.0 ★ Client Verified</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 group-hover:text-brand-700 transition-colors">
                  AS REFRIGERATIONS
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-700 mt-0.5 mb-3">
                  Multi-City Service &amp; Field Dispatch Platform
                </p>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  Dual-hub operations platform covering Kadapa Flagship HQ and Bangalore East Hub with 0% gateway fee NPCI UPI QR payments.
                </p>

                {/* 3D Simulated Interactive Preview Strip */}
                <div className="mb-5 p-3.5 rounded-2xl bg-navy-950 text-white font-mono text-xs border border-white/10 shadow-inner">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-gray-400">
                    <span className="text-cyan-400 font-bold">⚡ NPCI UPI &amp; DISPATCH</span>
                    <span>0% Gateway Fee</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-emerald-400">✓ Dynamic UPI QR: Direct Bank Payout</div>
                    <div className="text-cyan-300">✓ Multi-City Hubs: Kadapa + Bangalore</div>
                    <div className="text-gray-300">✓ Sameer Priority 1 Auto Dispatch: Active</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Multi-city 19 Kadapa wards &amp; 25 Bangalore localities switching</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Zero-SMS 4-digit PIN authentication eliminating recurring OTP bills</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Urban Company-grade dual mobile app shells for customers &amp; techs</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {asRef.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-lg bg-gray-100 text-navy-950 font-mono text-[10px] font-semibold border border-gray-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/case-studies/as-refrigerations"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-brand-700 transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-600" />
                </Link>
                <span className="text-xs text-gray-500 font-medium">Kadapa &amp; Bangalore</span>
              </div>
            </div>
          </div>

          {/* Card 2: Vijaya's Yummy Food (FoodTech & Cloud Kitchen) */}
          <div className="bg-white/95 rounded-3xl border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between overflow-hidden group relative">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-400/20 transition-all duration-500" />

            {/* Browser Frame Top Bar */}
            <div className="px-5 py-3.5 bg-gray-50/90 border-b border-gray-200/80 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-xs" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-xs" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-xs" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] text-gray-700 font-mono shadow-xs">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>Client Work · Bengaluru &amp; Kadapa</span>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-beacon-pulse" />
            </div>

            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200/60">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    FoodTech &amp; Kitchen
                  </span>
                  <span className="text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-full">
                    Active Deployment
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 group-hover:text-brand-700 transition-colors">
                  Vijaya&apos;s Yummy Food
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-700 mt-0.5 mb-3">
                  Direct Online Food Ordering &amp; Delivery PWA
                </p>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  Direct food ordering web app and PWA serving authentic Rayalaseema meals in Kadugodi, Bengaluru with zero aggregator commission cuts.
                </p>

                {/* 3D Simulated Interactive Preview Strip */}
                <div className="mb-5 p-3.5 rounded-2xl bg-navy-950 text-white font-mono text-xs border border-white/10 shadow-inner">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-gray-400">
                    <span className="text-brand-400 font-bold">⚡ PWA LIVE ENGINE</span>
                    <span>Zero 30% Cuts</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-emerald-400">✓ Supabase Real-Time Cart Sync: Active</div>
                    <div className="text-gray-300">✓ Automated WhatsApp Delivery Alert: Triggered</div>
                    <div className="text-gray-300">✓ Thermal ESC/POS Bill Generation: Instant</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Real-time database sync and direct checkout with Supabase</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Installable Progressive Web App (PWA) on mobile devices</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Zero third-party commissions with automated delivery radius check</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {vijayaFood.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-lg bg-gray-100 text-navy-950 font-mono text-[10px] font-semibold border border-gray-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/case-studies/vijayas-yummy-food"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-brand-700 transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-600" />
                </Link>
                <span className="text-xs text-gray-500 font-medium">Kadugodi, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Card 3: Mana Tours & Travels (Mobility & Fleet Booking) */}
          <div className="bg-white/95 rounded-3xl border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between overflow-hidden group relative">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-400/20 transition-all duration-500" />

            {/* Browser Frame Top Bar */}
            <div className="px-5 py-3.5 bg-gray-50/90 border-b border-gray-200/80 flex items-center justify-between backdrop-blur-md">
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

            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60">
                    <Car className="w-3.5 h-3.5" />
                    Mobility &amp; Travel
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>5.0 ★ Google Rating</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 group-hover:text-brand-700 transition-colors">
                  MANA Tours &amp; Travels
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-700 mt-0.5 mb-3">
                  Kadapa Travel &amp; Cab Booking Portal
                </p>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  Lightweight, mobile-first booking portal with interactive fleet selection, route fare estimation, and instant WhatsApp booking dispatch.
                </p>

                {/* 3D Simulated Interactive Preview Strip */}
                <div className="mb-5 p-3.5 rounded-2xl bg-navy-950 text-white font-mono text-xs border border-white/10 shadow-inner">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-gray-400">
                    <span className="text-cyan-400 font-bold">🚖 FLEET DISPATCH</span>
                    <span>Sub-Second Quotations</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-cyan-300">✓ Tirupati / BLR / HYD Outstation Routes</div>
                    <div className="text-gray-300">✓ Instant WhatsApp Booking Gateway</div>
                    <div className="text-emerald-400">✓ 5.0★ Verified Customer Satisfaction</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Local cab booking, outstation taxi, and airport drop services</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Pilgrimage packages: Tirupati, Srisailam &amp; Ahobilam routes</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Self-drive car rentals &amp; instant WhatsApp booking flow</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {manaTours.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-lg bg-gray-100 text-navy-950 font-mono text-[10px] font-semibold border border-gray-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/case-studies/mana-tours"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-brand-700 transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-600" />
                </Link>
                <a
                  href="https://www.manatoursandtravels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-brand-700 font-semibold transition-colors"
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

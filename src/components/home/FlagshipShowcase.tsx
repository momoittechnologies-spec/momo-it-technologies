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
  Lock,
  Zap,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

export default function FlagshipShowcase() {
  const vijayaFood = caseStudiesData.find((c) => c.id === "vijayas-yummy-food")!;
  const manaTours = caseStudiesData.find((c) => c.id === "mana-tours")!;

  return (
    <section className="py-20 lg:py-28 bg-surface-light border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-100/80 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200/60">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Live Client Work &amp; Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Production Software Engineered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
              MOMO IT Technologies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We build, test, and ship mission-critical software for real businesses—from direct-to-consumer FoodTech PWAs to high-reliability travel platforms.
          </p>
        </div>

        {/* Client Deployments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Vijaya's Yummy Food (Ongoing Client Project) */}
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Browser Frame Top Bar */}
            <div className="px-5 py-3 bg-gray-50 border-b border-gray-200/70 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] text-gray-600 font-mono">
                <Lock className="w-3 h-3 text-orange-500" />
                <span>Client Work · Bengaluru</span>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200/60">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    FoodTech &amp; Cloud Kitchen
                  </span>
                  <span className="text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-full">
                    Ongoing Project
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 group-hover:text-brand-600 transition-colors">
                  Vijaya&apos;s Yummy Food
                </h3>
                <p className="text-sm font-semibold text-brand-700 mt-0.5 mb-4">
                  Direct Online Food Ordering &amp; Delivery PWA
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {vijayaFood.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Real-time database sync and direct checkout built with Supabase</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Installable Progressive Web App (PWA) on mobile for repeat customer retention</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Zero third-party commissions with automated delivery radius verification</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {vijayaFood.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-gray-100 text-navy-900 font-mono text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/case-studies/vijayas-yummy-food"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-brand-600 transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-600" />
                </Link>
                <span className="text-xs text-gray-400 font-medium">Kadugodi, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Card 2: Mana Tours & Travels (Minimal Showcase as requested) */}
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Browser Frame Top Bar */}
            <div className="px-5 py-3 bg-gray-50 border-b border-gray-200/70 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] text-gray-600 font-mono">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>manatoursandtravels.com</span>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60">
                    <Car className="w-3.5 h-3.5" />
                    Mobility &amp; Travel
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>5.0 ★ Google Rating</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 group-hover:text-brand-600 transition-colors">
                  MANA Tours &amp; Travels
                </h3>
                <p className="text-sm font-semibold text-brand-700 mt-0.5 mb-4">
                  Kadapa Travel &amp; Cab Booking Portal
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {manaTours.description}
                </p>

                {/* Minimal Services List */}
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Local cab booking, outstation taxi, and airport drop services</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Pilgrimage packages: Tirupati, Srisailam &amp; Ahobilam itineraries</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Self-drive car rentals &amp; instant WhatsApp booking flow</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {manaTours.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-gray-100 text-navy-900 font-mono text-[11px] font-medium"
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
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-brand-600 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-600" />
                </Link>
                <a
                  href="https://www.manatoursandtravels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-brand-600 font-semibold transition-colors"
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

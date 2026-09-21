import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Car,
  CreditCard,
  Lock,
  Zap,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

export default function FlagshipShowcase() {
  const momope = caseStudiesData.find((c) => c.id === "momope")!;
  const manaTours = caseStudiesData.find((c) => c.id === "mana-tours")!;

  return (
    <section className="py-20 lg:py-28 bg-surface-light border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-100/80 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200/60">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Proven Production Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Flagship Platforms Engineered by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
              MOMO IT Technologies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We don&apos;t just build toy demos. Our engineers design, deploy, and maintain mission-critical systems that process real-world payments and real travel bookings daily.
          </p>
        </div>

        {/* The Two Flagships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: MomoPe */}
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
                <span>https://www.momope.com</span>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                    <CreditCard className="w-3.5 h-3.5" />
                    Fintech &amp; Digital Payments
                  </span>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    Production Live
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 group-hover:text-brand-600 transition-colors">
                  MOMOPE
                </h3>
                <p className="text-sm font-semibold text-brand-700 mt-0.5 mb-4">
                  Payments + Guaranteed Rewards Ecosystem
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  MOMOPE connects customers, merchants, and local retail businesses through friction-free digital transactions coupled with an automated guaranteed cashback and rewards engine.
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Instant UPI reconciliation &amp; POS merchant billing platform</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Automated guaranteed rewards engine driving repeat customer visits</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>High-concurrency architecture built with Java Spring Boot &amp; PostgreSQL</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {momope.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-700 border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/case-studies/momope"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy-950 hover:text-brand-600 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.momope.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-600 transition-colors"
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Mana Tours & Travels */}
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Browser Frame Top Bar */}
            <div className="px-5 py-3 bg-gray-50 border-b border-gray-200/70 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] text-gray-600 font-mono">
                <Lock className="w-3 h-3 text-blue-600" />
                <span>https://www.manatoursandtravels.com</span>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60">
                    <Car className="w-3.5 h-3.5" />
                    Mobility &amp; Travel ERP
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    5.0★ Google Rated (50+ Reviews)
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 group-hover:text-brand-600 transition-colors">
                  MANA TOURS &amp; TRAVELS
                </h3>
                <p className="text-sm font-semibold text-blue-700 mt-0.5 mb-4">
                  Smart Booking, Fleet Management &amp; AI Voice Assistant
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Kadapa&apos;s #1 cab service and self-drive car rental platform across Rayalaseema. Engineered with Next.js 15, live WhatsApp quoting, and an integrated 24/7 AI Voice Enquiry Assistant.
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>24/7 AI Voice Booking Agent supporting Telugu &amp; English instant quotes</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Interactive booking flow: Tirupati darshans, airport drops &amp; self-drive</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Sub-second page speeds, dynamic SEO schema &amp; automated WhatsApp dispatch</span>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {manaTours.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-700 border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/case-studies/mana-tours"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy-950 hover:text-brand-600 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.manatoursandtravels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-600 transition-colors"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

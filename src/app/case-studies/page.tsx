import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Layers,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Database,
  Smartphone,
  Utensils,
  Car,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Case Studies & Live Deployments | MOMO IT Technologies",
  description:
    "Explore real-world software engineering case studies from MOMO IT Technologies: cloud kitchen enterprise PWAs, thermal printing engines, and fleet booking automation built for real clients.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/case-studies",
  },
  openGraph: {
    title: "Client Case Studies & Live Deployments | MOMO IT Technologies",
    description:
      "Real-world enterprise systems engineered by MOMO IT Technologies in Kadapa, AP. Featuring Vijaya's Yummy Food Cloud Kitchen and MANA Tours & Travels.",
    url: "https://www.momoittechnologies.com/case-studies",
  },
};

const caseStudies = [
  {
    slug: "vijayas-yummy-food",
    client: "Vijaya's Yummy Food",
    category: "Cloud Kitchen & Restaurant Tech",
    tagline: "Direct ordering PWA, multi-terminal Kitchen Display System (KDS), thermal printing engine & automated UPI billing.",
    location: "Kadapa, Andhra Pradesh",
    status: "Live Production System",
    impact: [
      "Zero 30% aggregator commission on direct customer orders",
      "Instant 2-second order transmission to kitchen display terminal",
      "Automated monthly UPI billing cron with dynamic QR codes",
      "Thermal printer ESC/POS integration for instant billing receipts",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "WebSockets / Realtime", "ESC/POS Thermal Engine", "UPI Autopay Cron"],
    href: "/case-studies/vijayas-yummy-food",
  },
  {
    slug: "mana-tours",
    client: "MANA Tours & Travels",
    category: "Logistics & Fleet Management",
    tagline: "Automated fleet reservation platform, dynamic fare calculator, driver dispatch, and instant WhatsApp ticketing engine.",
    location: "Andhra Pradesh & Regional Corridors",
    status: "Live Production System",
    impact: [
      "100% automated booking workflow replacing manual phone bookings",
      "Instant WhatsApp ticket generation with driver & vehicle details",
      "Transparent dynamic route & vehicle pricing calculator",
      "Unified operations dashboard for fleet management and trip assignments",
    ],
    techStack: ["Next.js", "React", "PostgreSQL", "WhatsApp Cloud API", "Google Maps Matrix API", "Tailwind CSS"],
    href: "/case-studies/mana-tours",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <li>
              <Link href="/" className="hover:text-brand-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy-950 font-bold">Case Studies</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200/60">
            Proven Commercial Engineering
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mt-3 mb-4">
            Real Software Solutions for Real Businesses
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We don&apos;t just build demo prototypes. MOMO IT TECHNOLOGIES designs, engineers, and operates mission-critical digital systems for businesses that demand reliability, speed, and clean architecture.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12 mb-16">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-gray-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                      {cs.category}
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{cs.status}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500">
                      {cs.location}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
                    {cs.client}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl leading-relaxed">
                    {cs.tagline}
                  </p>
                </div>

                <Link
                  href={cs.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Key Impact & Tech Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                    Key Deliverables &amp; Business Impact
                  </h3>
                  <ul className="space-y-2.5">
                    {cs.impact.map((imp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                    Production Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-50 text-navy-950 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-brand-50/50 border border-brand-100 text-xs text-brand-900 leading-relaxed">
                    <strong>Internship Practical Attachment:</strong> Candidates at MOMO IT Academy work directly on features, test suites, and regression passes for this live production codebase.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-brand-600 to-navy-950 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Have a Complex Software Project in Mind?
          </h2>
          <p className="text-brand-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            From Kadapa, Andhra Pradesh to global startups, we deliver battle-tested software systems on time and within budget.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-700 hover:bg-brand-50 font-bold text-sm shadow-md transition-all"
            >
              Request Free Technical Consultation
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20would%20like%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm border border-brand-500/40 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

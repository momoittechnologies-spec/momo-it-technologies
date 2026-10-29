import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Wrench,
  Star,
  CheckCircle2,
  ExternalLink,
  QrCode,
  Smartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

export const metadata = {
  title: "AS REFRIGERATIONS Case Study — Multi-City Appliance Service & Dispatch | MOMO IT Technologies",
  description:
    "How MOMO IT Technologies engineered the multi-city field service platform for AS REFRIGERATIONS across Kadapa and Bangalore with zero-commission NPCI UPI QR payments.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/case-studies/as-refrigerations",
  },
  openGraph: {
    title: "AS REFRIGERATIONS Case Study — Multi-City Appliance Service & Dispatch | MOMO IT Technologies",
    description:
      "Dual-hub web and mobile application ecosystem engineered by MOMO IT Technologies for AS REFRIGERATIONS with dynamic UPI billing and automated technician dispatch.",
    url: "https://www.momoittechnologies.com/case-studies/as-refrigerations",
  },
};

export default function AsRefrigerationsCaseStudy() {
  const asRef = caseStudiesData.find((c) => c.id === "as-refrigerations")!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "AS REFRIGERATIONS Multi-City Service Platform & Dispatch ERP",
        operatingSystem: "Web / Android / iOS Shell",
        applicationCategory: "BusinessApplication / FieldServiceApp",
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
            name: "AS REFRIGERATIONS",
            item: "https://www.momoittechnologies.com/case-studies/as-refrigerations",
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
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold border border-cyan-200/60">
                <Wrench className="w-3.5 h-3.5 text-cyan-600" />
                Home Services &amp; Field Ops Tech
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Production Deployment
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                5.0★ Client Verified
              </span>
            </div>
            <a
              href="https://asrefrigerations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-brand-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-xl transition-colors border border-gray-200"
            >
              <span>asrefrigerations.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mb-3">
            AS REFRIGERATIONS — Multi-City Appliance Service &amp; Field Dispatch Ecosystem
          </h1>
          <p className="text-lg text-brand-700 font-semibold mb-6">
            Engineered by MOMO IT Technologies: Dual-hub field operations across Kadapa Flagship HQ &amp; Bangalore East Hub with 0% gateway commission NPCI dynamic UPI QR billing.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {asRef.description}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
            {asRef.highlights.map((h, idx) => (
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

        {/* Client Testimonial Spotlight */}
        <div className="bg-gradient-to-br from-brand-900 via-navy-950 to-navy-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              Verified Client Testimonial
            </div>
            <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic mb-6 text-gray-100">
              &ldquo;MOMO IT TECHNOLOGIES engineered our multi-city web &amp; mobile booking platform across Kadapa and Bangalore. Their custom NPCI UPI QR engine eliminated gateway transaction charges completely, and the automated booking dispatch streamlined our entire field technician workflow. True engineering excellence from Kadapa!&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-brand-500 flex items-center justify-center font-bold text-white text-base shadow-md">
                SS
              </div>
              <div>
                <div className="font-extrabold text-white text-base flex items-center gap-2">
                  Shaik Sameer
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    Verified Owner
                  </span>
                </div>
                <div className="text-xs text-gray-300">
                  Founder &amp; Master HVAC Technician · AS REFRIGERATIONS (Kadapa &amp; Bangalore)
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
              {asRef.challenge}
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
              {asRef.solution}
            </p>
          </div>
        </div>

        {/* Feature Spotlight: 0% Fee Dynamic NPCI UPI QR */}
        <div className="bg-gradient-to-r from-emerald-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-10">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <QrCode className="w-4 h-4" />
            Proprietary Architecture Highlight
          </div>
          <h2 className="text-2xl font-extrabold mb-3">
            Zero-Commission Dynamic NPCI UPI QR Generation
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mb-6">
            Standard payment gateways charge 2% to 3% plus GST on every transaction. For AS REFRIGERATIONS, MOMO IT Technologies built an on-the-fly NPCI UPI QR generation protocol. Once on-site technician locks the repair invoice, the customer scans a dynamic QR code that launches PhonePe, Google Pay, or Paytm with the exact pre-filled amount directly into the owner&apos;s bank account with zero middleman deductions.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-navy-800 text-xs text-emerald-300 border border-emerald-500/30">
              0% Payment Gateway Fee
            </span>
            <span className="px-3 py-1 rounded-full bg-navy-800 text-xs text-cyan-300 border border-cyan-500/30">
              Instant Bank Settlement
            </span>
            <span className="px-3 py-1 rounded-full bg-navy-800 text-xs text-gray-300 border border-gray-700">
              Auto 5-Star ReviewSmart AI Funnel
            </span>
          </div>
        </div>

        {/* Mobile App Shells Spotlight */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-card mb-10">
          <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Smartphone className="w-4 h-4" />
            Mobile App Engineering
          </div>
          <h2 className="text-2xl font-extrabold text-navy-950 mb-3">
            Urban Company-Grade Dual Mobile Application Shells
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
            Engineered using Capacitor and modern responsive web views, delivering two dedicated native app experiences without multi-million rupee development budgets:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h3 className="font-extrabold text-navy-950 text-base mb-2">
                1. Customer App (`com.asrefrigerations.customer`)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>6-Stage Doorstep Repair Stepper (Booked → En Route → Diagnosing → Repaired)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Zero-SMS 4-Digit Local Storage PIN authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>1-Tap WhatsApp Emergency Repair Support dispatch</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h3 className="font-extrabold text-navy-950 text-base mb-2">
                2. Partner Technician App (`com.asrefrigerations.partner`)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Duty status toggle (Online / Offline / On Job)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>1-Tap Google Maps GPS navigation directly to customer doorsteps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>100% Rate Card Payouts with 0% corporate commission deductions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results & Reliability */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12">
          <h2 className="text-2xl font-extrabold text-navy-950 mb-6">
            Production Results &amp; Business Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {asRef.results.map((res, idx) => (
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
                Ready to Build Custom Operational Software for Your Enterprise?
              </div>
              <div className="text-xs text-gray-500">
                From field service dispatch to zero-commission billing engines, we engineer platforms that scale.
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
            >
              Consult with MOMO IT Engineers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

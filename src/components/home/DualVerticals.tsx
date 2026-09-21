import React from "react";
import Link from "next/link";
import {
  Code2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Layers,
  Users,
  Sparkles,
  Zap,
} from "lucide-react";

export default function DualVerticals() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Our Business Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mt-3">
            Two High-Impact Verticals. One Unified Brand.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            How MOMO IT Technologies merges top-tier client software engineering with premier practical technical education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vertical 1: Technology Services */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white shadow-2xl overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-500/15 transition-all"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30 mb-6">
                <Code2 className="w-3.5 h-3.5" />
                For Startups &amp; Enterprises
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-white">
                MOMO Tech Services
              </h3>
              <p className="text-sm text-brand-400 font-semibold mb-6">
                Design → Develop → Test → Deploy → Support
              </p>

              <p className="text-sm text-gray-300 leading-relaxed mb-8">
                We partner with business founders, startups, and enterprises to build reliable digital products and provide dedicated QA automation teams. From full-stack Next.js and Spring Boot applications to automated Playwright regression test pods.
              </p>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Dedicated QA Automation &amp; SDET Pods</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Modern Web &amp; Portal Development (Next.js / Java)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Custom Business ERP, Billing &amp; CRM Systems</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Staff Augmentation (Dedicated Remote Developers)</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-navy-800">
              <Link
                href="/services/qa-testing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-sm shadow-lg shadow-brand-500/25 transition-all w-full sm:w-auto"
              >
                <span>Explore Services &amp; Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Vertical 2: MOMO Academy */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-brand-50/60 via-white to-white border border-brand-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-200/20 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-200/30 transition-all"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold border border-brand-200 mb-6">
                <GraduationCap className="w-3.5 h-3.5 text-brand-700" />
                Practical IT Career Education
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-navy-950">
                MOMO Academy
              </h3>
              <p className="text-sm text-brand-700 font-semibold mb-6">
                Learn → Practice → Build → Become Industry Ready
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                Kadapa&apos;s leading software training institute with a proven 4.8★ Google rating. We teach students, freshers, and working professionals through code-first, real-project immersion across both live online Google Meet classes and offline Kadapa classrooms.
              </p>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Master Automation Testing (Java, Selenium 4, TestNG)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>REST API Automation (Postman &amp; RestAssured)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Full-Stack Development (Java Spring Boot + React)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Live Project Exposure with in-house Agency Case Studies</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-gray-100">
              <Link
                href="/academy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm shadow-md transition-all w-full sm:w-auto"
              >
                <span>View Courses &amp; Upcoming Batches</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

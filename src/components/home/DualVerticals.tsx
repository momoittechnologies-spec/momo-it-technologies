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
                Core Focus: Web &amp; SaaS Product Development
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-white">
                MOMO Tech Services
              </h3>
              <p className="text-sm text-brand-400 font-semibold mb-6">
                Ideate → Architect → Build → Rigorously Test → Deploy &amp; Scale
              </p>

              <p className="text-sm text-gray-300 leading-relaxed mb-8">
                Our primary core service is building <strong>scalable Web and SaaS products</strong> for founders, businesses, and enterprises worldwide. We architect modern web applications with sub-second performance using Next.js 15, React 19, Spring Boot, and cloud databases, backed by automated QA validation.
              </p>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-2.5 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span><strong>Web &amp; SaaS Products:</strong> Next.js, React, Spring Boot, Supabase</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span><strong>Mobile Applications:</strong> Cross-platform Android &amp; iOS via Flutter</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span><strong>Custom Business ERPs:</strong> Automated billing, dispatch &amp; CRM portals</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span><strong>QA Automation:</strong> Selenium 4 &amp; Playwright regression test suites</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span><strong>Staff Augmentation:</strong> Pre-vetted dedicated developer pods</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-navy-800 flex flex-wrap items-center gap-3">
              <Link
                href="/services/software-dev"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 transition-all w-full sm:w-auto"
              >
                <span>Build Your Web / SaaS Product</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-gray-300 hover:text-white text-xs font-semibold border border-navy-700 transition-colors"
              >
                <span>All Services</span>
              </Link>
            </div>
          </div>

          {/* Vertical 2: MOMO Academy */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-brand-50/60 via-white to-white border border-brand-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-200/20 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-200/30 transition-all"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold border border-brand-200 mb-6">
                <GraduationCap className="w-3.5 h-3.5 text-brand-700" />
                Industry-Led Practical Training &amp; Internships
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-navy-950">
                MOMO Academy
              </h3>
              <p className="text-sm text-brand-700 font-semibold mb-6">
                Learn → Practice → Get Certified → Live Internship → Placed
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                Kadapa&apos;s premier software training academy rated 4.8★ on Google. We deliver hands-on, live-project training led by working engineers. Every course includes an official <strong>Course Completion Certificate</strong> and <strong>hands-on internship</strong> on live agency client products.
              </p>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-2.5 text-sm text-navy-950 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span><strong>Automation Testing:</strong> Selenium 4, Java, TestNG &amp; Cucumber BDD</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span><strong>Full-Stack Software Dev:</strong> React 19, Next.js &amp; Spring Boot 3</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span><strong>Mobile App Development:</strong> Flutter Android &amp; iOS Apps</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                  <span><strong>Digital Marketing &amp; AI:</strong> SEO, Meta Ads, Google Ads &amp; GenAI</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-emerald-800 font-semibold bg-emerald-50/70 p-2 rounded-lg border border-emerald-200/60">
                  <span className="text-emerald-700">🎓 Certificate + 💼 Guaranteed Real Client Project Internship</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <Link
                href="/academy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm shadow-md transition-all w-full sm:w-auto"
              >
                <span>View Courses &amp; Internships</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/academy#courses"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-navy-950 text-xs font-semibold transition-colors"
              >
                <span>Batch Timings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

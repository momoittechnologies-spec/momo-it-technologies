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
  ShieldCheck,
  Cpu,
} from "lucide-react";

export default function DualVerticals() {
  return (
    <section className="py-20 lg:py-28 bg-white bg-cyber-grid relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[550px] bg-blue-300/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual Delivery Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Full-Lifecycle Software Engineering Powered by an In-House Tech Lab
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            How MOMO IT Technologies delivers dependable custom software, SaaS products, and mobile apps backed by a continuous engineering talent pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-10 items-stretch">
          {/* Main Showcase: Core Software Engineering (7 Cols) */}
          <div className="lg:col-span-7 relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 text-white shadow-3d-card-dark border border-white/10 card-3d-lift overflow-hidden flex flex-col justify-between group">
            {/* Luminous Glow Spotlights */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/25 transition-all duration-500" />
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-90" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30 mb-6 shadow-xs font-mono">
                <Code2 className="w-3.5 h-3.5" />
                <span>Primary Business: Commercial Software Engineering</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 text-white">
                MOMO Software Engineering
              </h3>
              <p className="text-sm text-cyan-300 font-semibold mb-6 font-mono">
                Architecture → Full-Stack Development → QA Automation → Cloud Launch
              </p>

              <p className="text-sm text-gray-300 leading-relaxed mb-8">
                Our primary core business is building <strong>scalable Web applications, custom SaaS platforms, and enterprise ERP systems</strong> for businesses and startups. We write clean, high-performance code using modern stacks like Next.js 15, React 19, Flutter, and Spring Boot, verified by automated test suites.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Web &amp; SaaS Platforms:</strong> Multi-tenant web architectures, APIs &amp; cloud dashboards</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Mobile App Development:</strong> Flutter cross-platform apps for iOS &amp; Android</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Custom Business ERPs:</strong> Automated billing, GST invoicing, CRM &amp; inventory portals</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Enterprise QA Automation:</strong> Selenium 4, Playwright &amp; continuous regression test suites</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>AI &amp; Cloud Workflows:</strong> Autonomous agent integration, RAG &amp; database pipelines</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all w-full sm:w-auto"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-200 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>

          {/* Secondary Advantage: Internal Talent Incubator (5 Cols) */}
          <div className="lg:col-span-5 relative rounded-3xl p-8 sm:p-10 bg-white border border-blue-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between group overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-200/25 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-200/35 transition-all" />
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-400 opacity-80" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200/80 mb-6 shadow-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                <span>Our Talent Advantage: R&amp;D Lab</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight mb-2 text-navy-950">
                In-House Engineering Lab
              </h3>
              <p className="text-xs text-blue-700 font-semibold mb-4 font-mono">
                Powered by MOMO Academy Mentorship
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Unlike agencies that struggle with hiring delays and unreliable contractors, we operate an internal technical training lab. Our senior architects train and handpick top engineering talent in automation testing, Java, and modern web frameworks to work on real client systems.
              </p>

              <div className="space-y-3 mb-6 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-gray-200/70">
                <div className="flex items-start gap-2.5 text-xs text-navy-950 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Agile Engineering Delivery:</strong> Full-lifecycle product pods driving feature builds and sprint milestones.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-navy-950 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Testing Rigor:</strong> Every engineer is trained in automated testing, CI/CD, and regression verification.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-navy-950 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Outsourcing Risk:</strong> 100% of our code is engineered in-house under senior engineering supervision.</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-medium">Interested in tech training or courses?</span>
              <Link
                href="/academy"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Visit Academy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

const comparisonRows = [
  {
    criteria: "Frontend Architecture & Speed",
    traditional: "Monolithic WordPress or bloated PHP templates with 3s–6s load times and poor mobile responsiveness.",
    momo: "Next.js 15 App Router & React 19 with Edge SSR, sub-800ms TTFB, and 95+ Core Web Vitals.",
    category: "Architecture",
  },
  {
    criteria: "Quality Assurance & Testing",
    traditional: "Manual clicking by developers. Frequent production regressions, broken checkout flows, and weekend bugs.",
    momo: "Dedicated SDET QA pods with Selenium 4, Playwright & RestAssured running automated CI/CD regression suites.",
    category: "Quality",
  },
  {
    criteria: "Payment Integration & Commission",
    traditional: "Standard payment gateways taking 2.0% – 3.5% transaction commissions on every customer payment.",
    momo: "Custom dynamic NPCI UPI QR engine with direct bank-to-bank settlement and 0% gateway commission fees.",
    category: "Cost & Profit",
  },
  {
    criteria: "Source Code & IP Ownership",
    traditional: "Proprietary vendor lock-in or obfuscated themes requiring ongoing maintenance hostage fees.",
    momo: "100% Client Code Ownership. Complete Git repository, Docker configs, and database access transferred to you.",
    category: "IP Rights",
  },
  {
    criteria: "Engineering Talent & Accountability",
    traditional: "Unvetted junior freelancers or outsourced third-party subcontractors with high turnover.",
    momo: "In-house engineering pods mentored and vetted through MOMO Academy under senior architectural stewardship.",
    category: "Talent",
  },
  {
    criteria: "AI & Workflow Automation",
    traditional: "Simple copy-pasted ChatGPT text boxes without database integration or workflow security.",
    momo: "Enterprise autonomous multi-agent pipelines, private RAG over your databases, and 24/7 WhatsApp AI bots.",
    category: "Innovation",
  },
];

export default function AgencyComparison() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100 bg-cyber-grid relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Engineering Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            How MOMO IT Technologies Compares
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            See the difference between standard agency website shops and our engineering-first software development methodology.
          </p>
        </div>

        {/* Comparison Matrix Table / Cards */}
        <div className="rounded-3xl border border-gray-200/90 shadow-3d-card overflow-hidden bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-gray-200/80 text-xs font-bold uppercase tracking-wider text-gray-500 p-4 sm:p-5">
            <div className="md:col-span-3 font-mono text-gray-400">Engineering Dimension</div>
            <div className="md:col-span-4 text-rose-700 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-rose-500" />
              <span>Typical Agencies &amp; Freelancers</span>
            </div>
            <div className="md:col-span-5 text-blue-700 flex items-center gap-1.5 font-extrabold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>MOMO IT Technologies Engineering</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-gray-100">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 hover:bg-slate-50/50 transition-colors items-center gap-4 md:gap-6"
              >
                {/* Criteria */}
                <div className="md:col-span-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-gray-600 border border-gray-200">
                    {row.category}
                  </span>
                  <div className="text-sm font-extrabold text-navy-950 mt-1.5">
                    {row.criteria}
                  </div>
                </div>

                {/* Traditional Agency */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs text-gray-600 bg-rose-50/40 p-3.5 rounded-2xl border border-rose-100 md:bg-transparent md:p-0 md:border-none">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>

                {/* MOMO IT Technologies */}
                <div className="md:col-span-5 flex items-start gap-2.5 text-xs font-medium text-navy-950 bg-blue-50/50 p-3.5 rounded-2xl border border-blue-100 md:bg-transparent md:p-0 md:border-none">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-semibold text-navy-950">{row.momo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Experience The Engineering Difference — Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

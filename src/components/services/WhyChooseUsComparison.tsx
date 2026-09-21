import React from "react";
import { Check, X, ShieldCheck, Zap, Sparkles } from "lucide-react";

interface ComparisonRow {
  dimension: string;
  legacy: string;
  momo: string;
  momoHighlight?: boolean;
}

const comparisonRows: ComparisonRow[] = [
  {
    dimension: "Technology Architecture",
    legacy: "Monolithic WordPress, outdated PHP scripts, or cookie-cutter templates",
    momo: "Modern Next.js 15, React 19, Spring Boot 3 & cloud-native Supabase/PostgreSQL",
    momoHighlight: true,
  },
  {
    dimension: "Page Load Speed & SEO",
    legacy: "Sluggish 4–6s load times, bloated plugins, failing Google Core Web Vitals",
    momo: "Sub-second load times (<800ms TTFB), 95+ Google Lighthouse scores, built-in SEO",
    momoHighlight: true,
  },
  {
    dimension: "Quality Assurance & Testing",
    legacy: "Manual 'click-around' QA only; regression bugs break production on updates",
    momo: "Automated Playwright, Selenium 4 & REST Assured CI/CD test suites with zero flakiness",
    momoHighlight: true,
  },
  {
    dimension: "Communication & Delivery",
    legacy: "Middlemen account managers, non-technical project handlers, slow turnaround",
    momo: "Direct, transparent communication with senior engineers & architects via WhatsApp/Meet",
    momoHighlight: true,
  },
  {
    dimension: "Code Ownership & Licensing",
    legacy: "Vendor lock-in, proprietary CMS restrictions, hidden monthly maintenance traps",
    momo: "100% full source code ownership, GitHub access from Day 1, zero recurring lock-in fees",
    momoHighlight: true,
  },
];

export default function WhyChooseUsComparison() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-xl relative overflow-hidden my-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-200/60 mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
          The MOMO Difference
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight">
          Why Modern Founders Choose MOMO IT Technologies
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Compare our engineering standards against traditional agencies and freelance shops.
        </p>
      </div>

      {/* Desktop Comparison Table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
              <th className="p-4 sm:p-5 w-1/4">Key Dimension</th>
              <th className="p-4 sm:p-5 w-3/8 text-gray-500">Legacy Agencies / Freelancers</th>
              <th className="p-4 sm:p-5 w-3/8 bg-brand-50/60 text-brand-900 border-l border-brand-200/60 font-extrabold">
                <span className="flex items-center gap-1.5 text-brand-800">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  MOMO IT Technologies
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/40 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-navy-950">{row.dimension}</td>
                <td className="p-4 sm:p-5 text-gray-500">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>{row.legacy}</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 bg-brand-50/30 text-navy-950 font-medium border-l border-brand-200/60">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-navy-950 font-semibold">{row.momo}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Stack */}
      <div className="md:hidden space-y-4">
        {comparisonRows.map((row, idx) => (
          <div key={idx} className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-3">
            <div className="text-sm font-bold text-navy-950 pb-2 border-b border-gray-200">
              {row.dimension}
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white border border-gray-200 text-gray-600 flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Traditional Agency:</div>
                  <div>{row.legacy}</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 font-medium flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-800">MOMO IT Technologies:</div>
                  <div className="font-semibold">{row.momo}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Star, MessageSquareQuote, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { reviewsData } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-50/60 bg-cyber-grid relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Reputation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Trusted by Commercial Clients &amp; Engineers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Rated 5.0★ on Google in Kadapa for custom software delivery, automation testing, and technical mentorship. Here is what our commercial partners and engineers say.
          </p>
        </div>

        {/* 3D Glassmorphic Rating Summary Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-3d-card mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-400 to-emerald-500" />
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-blue-200 flex flex-col items-center justify-center shrink-0">
              <span className="text-2xl font-black text-navy-950">5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-navy-950">
                Google Business Profile — Kadapa Headquarters
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Verified commercial feedback for Web Applications, UPI QR Engines &amp; QA Automation
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.reviewsmart.online/r/momo-it-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/25 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Verify on ReviewSmart</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/90" />
            </a>
          </div>
        </div>

        {/* 3D Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-400/20 transition-all" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-gray-700 border border-gray-200">
                    {rev.source}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-950 flex items-center gap-1">
                    {rev.name}
                    <CheckCircle className="w-3 h-3 text-blue-600 fill-blue-100" />
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono">
                    {rev.role} · {rev.companyOrLocation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

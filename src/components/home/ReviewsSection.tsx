import React from "react";
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from "lucide-react";
import { reviewsData } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Our Reputation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mt-3">
            Trusted by Learners &amp; Business Clients
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Rated 4.8★ on Google in Kadapa for software testing and technology delivery. Here is what our learners and client partners say.
          </p>
        </div>

        {/* Big Rating Summary Banner */}
        <div className="bg-gradient-to-r from-brand-50 via-white to-brand-50/50 rounded-3xl p-6 sm:p-8 border border-brand-200/80 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-brand-200 flex flex-col items-center justify-center shrink-0">
              <span className="text-2xl font-black text-navy-950">4.8</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-base font-extrabold text-navy-950">
                Google Business Profile — Kadapa
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                Verified reviews for Java, Automation Testing &amp; Software Delivery
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-navy-950 hover:border-brand-400 transition-colors shadow-sm"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-surface-light rounded-2xl p-7 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-gray-600 border border-gray-200">
                    {rev.source}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-600 to-teal-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-950 flex items-center gap-1">
                    {rev.name}
                    <CheckCircle className="w-3 h-3 text-brand-600 fill-brand-100" />
                  </div>
                  <div className="text-[11px] text-gray-500">
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

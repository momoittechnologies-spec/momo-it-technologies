import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Star,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Building2,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Share Your Review | MOMO IT Technologies Kadapa",
  description:
    "Have you worked with MOMO IT Technologies or studied at MOMO Academy in Kadapa? Share your authentic feedback through our verified ReviewSmart portal.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/review",
  },
  openGraph: {
    title: "Share Your Review | MOMO IT Technologies Kadapa",
    description:
      "Share your authentic experience with MOMO IT Technologies. Help local Kadapa businesses and aspiring engineers make informed decisions.",
    url: "https://www.momoittechnologies.com/review",
  },
};

export default function ReviewPage() {
  const reviewSmartUrl = "https://www.reviewsmart.online/r/momo-it-technologies";
  const googleReviewUrl = "https://share.google/qNjfQXuFmxNLyB8tO";

  return (
    <div className="pt-32 sm:pt-36 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
            <li>
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold" aria-current="page">
              Client &amp; Student Feedback
            </li>
          </ol>
        </nav>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-6">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Verified Feedback Portal
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            Review MOMO IT Technologies
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed mb-8">
            Whether you partnered with our engineering team to build custom software, or learned test automation and coding at MOMO Academy—your honest review helps Kadapa businesses and students make informed choices.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href={reviewSmartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <Star className="w-5 h-5 fill-amber-300 text-amber-300" />
              <span>Leave a Review on ReviewSmart</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-navy-950 font-semibold text-xs sm:text-sm border border-gray-200 transition-colors"
            >
              <span>Direct Google Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Review Tips Guidance */}
          <div className="bg-surface-light rounded-2xl p-6 sm:p-8 text-left border border-gray-100 space-y-4">
            <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider">
              Helpful suggestions for what to mention:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600">
              <div className="space-y-1">
                <div className="font-bold text-navy-950 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-brand-600" />
                  <span>For Business Clients</span>
                </div>
                <ul className="list-disc pl-4 space-y-1">
                  <li>The type of software or web app engineered for you.</li>
                  <li>Our communication and technical support quality in Kadapa.</li>
                  <li>How the software helped your business operations.</li>
                </ul>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-navy-950 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>For Academy Students</span>
                </div>
                <ul className="list-disc pl-4 space-y-1">
                  <li>The course you completed (e.g. Selenium, Java, Full-Stack).</li>
                  <li>Practical lab experience and trainer mentorship.</li>
                  <li>Live project internship experience letter received.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 text-xs text-gray-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>MOMO IT TECHNOLOGIES · 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, Andhra Pradesh</span>
          </div>

        </div>

      </div>
    </div>
  );
}

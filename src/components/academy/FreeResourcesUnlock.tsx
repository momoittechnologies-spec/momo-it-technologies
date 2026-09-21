"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  BookOpen,
  Lock,
  Unlock,
  CheckCircle2,
  ArrowRight,
  Download,
  Check,
  Sparkles,
} from "lucide-react";

export default function FreeResourcesUnlock() {
  const [unlocked, setUnlocked] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("momo_unlocked_resources");
      if (stored === "true") {
        setUnlocked(true);
      }
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;

    setLoading(true);
    const cleanPhone = `+91 ${phone}`;
    const text = `Hi MOMO Academy! I want to access the Free ATS Resume Template and Course Syllabus. My WhatsApp number is: ${cleanPhone}`;
    const url = `https://wa.me/918639831132?text=${encodeURIComponent(text)}`;

    if (typeof window !== "undefined") {
      localStorage.setItem("momo_unlocked_resources", "true");
      localStorage.setItem("momo_student_phone", cleanPhone);
    }

    window.open(url, "_blank");
    setUnlocked(true);
    setLoading(false);
  };

  return (
    <div className="my-16 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-200/60 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Free Verified Career Resources
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              ATS-Friendly Resume Template &amp; Complete Course Syllabus
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Free downloads reserved exclusively for registered students and WhatsApp community members.
            </p>
          </div>

          <div className="shrink-0">
            {unlocked ? (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <Unlock className="w-3.5 h-3.5 text-emerald-600" />
                Resources Unlocked
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                <Lock className="w-3.5 h-3.5 text-amber-600" />
                Locked · Free on WhatsApp Registration
              </span>
            )}
          </div>
        </div>

        {/* If locked: show quick 1-step unlock form */}
        {!unlocked && (
          <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white shadow-xl">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/40 text-brand-300 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Enter Your WhatsApp Number to Unlock Free Downloads
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Get instant access to our MNC-approved ATS Resume Template and the full 16-Week Course Curriculum. Zero charges, instant delivery.
              </p>

              <form onSubmit={handleUnlock} className="max-w-md mx-auto pt-2 space-y-3">
                <div className="relative flex rounded-xl border border-navy-700 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-400/20 bg-navy-900/90 overflow-hidden transition-all text-left">
                  <span className="inline-flex items-center gap-1 px-3.5 bg-navy-800 border-r border-navy-700 text-gray-200 font-semibold text-xs select-none">
                    <span className="text-sm">🇮🇳</span> +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="Enter 10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    className="w-full px-3.5 py-3 text-sm outline-none bg-transparent font-medium text-white placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || phone.length < 10}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-brand-500/30 transition-all cursor-pointer"
                >
                  <Unlock className="w-4 h-4" />
                  <span>Unlock Free Downloads on WhatsApp</span>
                </button>

                <p className="text-[11px] text-gray-400">
                  🔒 We respect your privacy. No spam. You will receive direct links and career guidance from our Kadapa mentors.
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: ATS Resume Template */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
            unlocked
              ? "bg-emerald-50/40 border-emerald-200 shadow-sm"
              : "bg-gray-50/80 border-gray-200 opacity-90"
          }`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                {unlocked ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    <Check className="w-3 h-3 stroke-[3]" /> Unlocked
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-500 bg-gray-200 px-2.5 py-0.5 rounded-full">
                    <Lock className="w-3 h-3" /> Requires Registration
                  </span>
                )}
              </div>

              <h3 className="text-lg font-extrabold text-navy-950">
                MOMO ATS-Optimized Resume Template
              </h3>
              <p className="text-xs text-gray-600 mt-1.5 mb-4 leading-relaxed">
                Standard single-column format tailored for Software QA, SDET, and Java Full-Stack roles. Pre-formatted with industry keywords to score 90+ on applicant tracking systems used by TCS, Infosys, and high-growth startups.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200/60">
              {unlocked ? (
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/downloads/resume-template.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>Preview &amp; Save PDF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/downloads/MOMO_ATS_Resume_Template_Software_QA.md"
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-xs font-bold text-gray-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .md</span>
                  </a>
                </div>
              ) : (
                <div className="text-xs text-gray-500 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-gray-400" />
                  <span>Register above with your WhatsApp number to unlock</span>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Complete Course Syllabus */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
            unlocked
              ? "bg-emerald-50/40 border-emerald-200 shadow-sm"
              : "bg-gray-50/80 border-gray-200 opacity-90"
          }`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                {unlocked ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    <Check className="w-3 h-3 stroke-[3]" /> Unlocked
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-500 bg-gray-200 px-2.5 py-0.5 rounded-full">
                    <Lock className="w-3 h-3" /> Requires Registration
                  </span>
                )}
              </div>

              <h3 className="text-lg font-extrabold text-navy-950">
                Full 16-Week Master Course Syllabus (2026 Edition)
              </h3>
              <p className="text-xs text-gray-600 mt-1.5 mb-4 leading-relaxed">
                Complete module-by-module breakdown covering Manual QA, Core Java, Selenium WebDriver 4, TestNG, Cucumber BDD, REST Assured, Digital Marketing, and Mobile App Development with live capstone details.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200/60">
              {unlocked ? (
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/downloads/syllabus.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>View Full Syllabus (PDF)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/downloads/MOMO_Academy_Complete_Course_Syllabus.md"
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-xs font-bold text-gray-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .md</span>
                  </a>
                </div>
              ) : (
                <div className="text-xs text-gray-500 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-gray-400" />
                  <span>Register above with your WhatsApp number to unlock</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

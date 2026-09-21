"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  FileText,
  Download,
  Check,
  Lock,
  Unlock,
} from "lucide-react";

export default function MasterclassBanner() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("momo_unlocked_resources") === "true") {
        setSubmitted(true);
      }
    }
  }, []);

  const handleQuickRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDigits = phone.replace(/\D/g, "");
    if (cleanDigits.length < 10) return;

    const formattedPhone = `+91 ${cleanDigits}`;
    const text = `Hi MOMO Academy! I want to register for the Free Saturday Masterclass (Automation Testing & Java). My WhatsApp Number is: ${formattedPhone}`;
    const url = `https://wa.me/918639831132?text=${encodeURIComponent(text)}`;

    if (typeof window !== "undefined") {
      localStorage.setItem("momo_unlocked_resources", "true");
      localStorage.setItem("momo_student_phone", formattedPhone);
    }

    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white via-brand-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white shadow-2xl border border-brand-500/30 overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/40">
                <Sparkles className="w-3.5 h-3.5" />
                UPCOMING SATURDAY DEMO CLASS
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Crack IT Automation Testing &amp; Java in 2026:{" "}
                <span className="text-brand-400">Free 2-Hour Live Workshop</span>
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Tired of applying without responses? Learn how we build enterprise test frameworks and live platforms from Kadapa. Real code, live Selenium browser automation, and career roadmap.
              </p>

              {/* Event Schedule Info Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800">
                  <div className="flex items-center gap-1.5 text-brand-400 text-xs font-bold mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Date &amp; Time
                  </div>
                  <div className="text-xs text-white font-semibold">This Saturday</div>
                  <div className="text-[11px] text-gray-400">6:30 PM - 8:30 PM IST</div>
                </div>

                <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800">
                  <div className="flex items-center gap-1.5 text-brand-400 text-xs font-bold mb-1">
                    <Video className="w-3.5 h-3.5" />
                    Mode
                  </div>
                  <div className="text-xs text-white font-semibold">Hybrid Access</div>
                  <div className="text-[11px] text-gray-400">Google Meet &amp; Kadapa Lab</div>
                </div>

                <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-brand-400 text-xs font-bold mb-1">
                    <Users className="w-3.5 h-3.5" />
                    Batch Starts
                  </div>
                  <div className="text-xs text-white font-semibold">This Monday</div>
                  <div className="text-[11px] text-gray-400">Limited to 15 Seats</div>
                </div>
              </div>
            </div>

            {/* Right Registration Card */}
            <div className="lg:col-span-5 bg-white text-navy-950 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                  100% Free Registration
                </span>
                <h3 className="text-xl font-extrabold mt-2 text-navy-950">
                  Reserve Your Free Seat Now
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Receive instant Google Meet link &amp; Kadapa Lab address on WhatsApp
                </p>
              </div>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-emerald-900">
                      WhatsApp Connected!
                    </h4>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Check your WhatsApp chat with our Kadapa team. Below are your promised free resources:
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href="/downloads/resume-template.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-white border border-emerald-300 text-emerald-900 font-bold text-xs shadow-xs hover:bg-emerald-50 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-emerald-600" />
                      <span>ATS Resume</span>
                    </a>
                    <a
                      href="/downloads/syllabus.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-white border border-emerald-300 text-emerald-900 font-bold text-xs shadow-xs hover:bg-emerald-50 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Syllabus</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleQuickRegister} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your WhatsApp Number *
                    </label>
                    <div className="relative flex rounded-xl border border-gray-200 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100 bg-white overflow-hidden transition-all">
                      <span className="inline-flex items-center gap-1 px-3.5 bg-gray-50 border-r border-gray-200 text-gray-700 font-semibold text-xs select-none">
                        <span className="text-sm">🇮🇳</span> +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        placeholder="98765 43210"
                        value={phone}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setPhone(digits);
                        }}
                        className="w-full px-3.5 py-3 text-sm outline-none bg-transparent font-medium text-navy-950 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/30 transition-all"
                  >
                    <span>Register Free on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-center space-y-1">
                      <div className="text-[11px] text-amber-900 font-bold flex items-center justify-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Included Free Resources (Locked):</span>
                      </div>
                      <p className="text-[11px] text-amber-800 leading-tight">
                        Enter your 10-digit WhatsApp number above to instantly unlock the <strong>ATS Resume Template</strong> &amp; <strong>Course Syllabus</strong>.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
} from "lucide-react";

export default function MasterclassBanner() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuickRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi MOMO Academy! I want to register for the Free Saturday Masterclass (Automation Testing & Java). My WhatsApp Number is: ${phone}`;
    const url = `https://wa.me/918639831132?text=${encodeURIComponent(text)}`;
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
              <div className="text-center mb-6">
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

              <form onSubmit={handleQuickRegister} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/30 transition-all"
                >
                  <span>Register Free on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center">
                  <span className="text-[11px] text-gray-500 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                    Free ATS Resume Template + Course Syllabus included
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

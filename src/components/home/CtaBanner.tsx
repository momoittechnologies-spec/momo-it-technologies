import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, MessageSquare, Calendar, ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export default function CtaBanner() {
  const whatsappUrl = `https://wa.me/918639831132?text=${encodeURIComponent(
    "Hello MOMO IT Technologies! I would like to discuss an engineering project for my business."
  )}`;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden bg-cyber-grid">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 text-white shadow-3d-floating border border-white/15 overflow-hidden text-center max-w-5xl 2xl:max-w-6xl mx-auto">
          {/* Luminous glow spotlights */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-md mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon-pulse" />
              <span>Full-Lifecycle Engineering · Kadapa HQ · Global Delivery</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Have a Project in Mind? Let&apos;s Engineer It.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Partner with an engineering-first technology company. From custom SaaS platforms and mobile applications to AI automation and enterprise ERPs, we deliver robust software on time and within budget.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-navy-950 hover:bg-slate-100 font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+918639831132"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 font-semibold text-sm transition-colors border border-white/20"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>+91 86398 31132</span>
              </a>
            </div>

            {/* Credibility Guarantee Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-400 font-mono">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Free 30-Min Technical Discovery</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>100% IP &amp; Code Ownership Transfer</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Mutual NDA Protection on Day One</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

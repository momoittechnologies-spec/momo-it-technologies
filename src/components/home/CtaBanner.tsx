import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, MessageSquare, Calendar } from "lucide-react";

export default function CtaBanner() {
  const whatsappUrl = `https://wa.me/918639831132?text=${encodeURIComponent(
    "Hello MOMO IT Technologies! I would like to discuss a custom software / web development project."
  )}`;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white shadow-3d-floating border border-white/15 overflow-hidden text-center max-w-5xl mx-auto">
          {/* Luminous glow spotlights */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-emerald-400 to-cyan-500" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full bg-white/10 text-brand-300 border border-white/15 backdrop-blur-md mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-beacon-pulse" />
              <span>Let&apos;s Build Together · Kadapa &amp; Global Delivery</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Have a Software Project or Digital Growth Goal?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              Whether you need a custom SaaS platform, a mobile application, business billing software, or enterprise QA automation—our Kadapa engineering team is ready to build it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-navy-950 hover:bg-brand-50 font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Instant WhatsApp Chat</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Free Discovery Call</span>
              </Link>

              <a
                href="tel:+918639831132"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 font-semibold text-sm transition-colors border border-white/20 rounded-xl"
              >
                <PhoneCall className="w-4 h-4 text-brand-400" />
                <span>+91 86398 31132</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

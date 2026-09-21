import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, MessageSquare, Calendar } from "lucide-react";

export default function CtaBanner() {
  const whatsappUrl = `https://wa.me/918639831132?text=${encodeURIComponent(
    "Hello MOMO IT Technologies! I would like to schedule a consultation / inquire about services."
  )}`;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700 text-white shadow-2xl overflow-hidden text-center max-w-5xl mx-auto">
          {/* Subtle glow background */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm mb-4">
              Let&apos;s Build Together
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Have a Project in Mind or Want to Upgrade Your Tech Skills?
            </h2>

            <p className="text-sm sm:text-base text-brand-50 leading-relaxed mb-8">
              Whether you need a dedicated QA testing pod, a custom business portal, or want to enroll in MOMO Academy&apos;s upcoming batch—our team in Kadapa is ready to assist you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-navy-950 hover:bg-brand-50 font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>Instant WhatsApp Chat</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm shadow-md transition-all"
              >
                <Calendar className="w-4 h-4 text-brand-400" />
                <span>Book Free Discovery Call</span>
              </Link>

              <a
                href="tel:+918639831132"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-white hover:bg-white/10 font-semibold text-sm transition-colors border border-white/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>086398 31132</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

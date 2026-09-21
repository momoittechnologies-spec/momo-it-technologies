"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  const whatsappUrl = `https://wa.me/918639831132?text=${encodeURIComponent(
    "Hi MOMO Academy! I want to register for the Free Saturday Masterclass & Demo Class."
  )}`;

  return (
    <div className="bg-gradient-to-r from-navy-950 via-brand-950 to-navy-950 text-white text-xs py-2 px-4 border-b border-brand-500/20 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="font-semibold text-gray-200">
            <strong className="text-brand-400">⚡ FREE LIVE MASTERCLASS:</strong>{" "}
            &ldquo;Crack Automation Testing &amp; Java in 2026&rdquo; — This Saturday 6:30 PM IST
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-gray-400 hidden md:inline">
            Online (Google Meet) &amp; Kadapa Lab
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-brand-300 hover:text-brand-200 hover:underline transition-colors shrink-0"
          >
            <span>Reserve Free Seat</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

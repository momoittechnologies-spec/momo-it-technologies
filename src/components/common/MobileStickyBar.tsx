"use client";

import React from "react";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function MobileStickyBar() {
  const whatsappMessage = encodeURIComponent(
    "Hello MOMO IT Technologies! I'm reaching out from Kadapa regarding software development / IT services for my business."
  );
  const whatsappUrl = `https://wa.me/918639831132?text=${whatsappMessage}`;

  return (
    <aside
      aria-label="Quick Contact Bar"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy-950/95 backdrop-blur-md border-t border-navy-800 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.35)] safe-area-bottom"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Direct Call Button */}
        <a
          href="tel:+918639831132"
          className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs py-2.5 px-2 rounded-xl shadow-lg shadow-emerald-950/40 active:scale-95 transition-all text-center"
          aria-label="Direct Phone Call to MOMO IT Technologies"
        >
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <PhoneCall className="relative w-3.5 h-3.5 text-white" />
          </span>
          <span className="truncate">Call Now</span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-2.5 px-2 rounded-xl shadow-lg shadow-green-950/40 active:scale-95 transition-all text-center"
          aria-label="Chat with MOMO IT Technologies on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}

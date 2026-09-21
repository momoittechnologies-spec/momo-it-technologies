"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppFloat() {
  const defaultMessage = encodeURIComponent(
    "Hello MOMO IT Technologies! I would like to inquire about your Software Development / QA Services / Academy training."
  );
  const whatsappUrl = `https://wa.me/918639831132?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-105 hover:-translate-y-1 transition-all group"
      aria-label="Chat with MOMO IT Technologies on WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping opacity-75"></span>
      </div>
      <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
        Chat with us
      </span>
    </a>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Code2,
  Bot,
  Smartphone,
  ShieldCheck,
  Layers,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  GraduationCap,
  Calendar,
  X,
  Sparkles,
} from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  category: "Solutions" | "Case Studies" | "Academy" | "Quick Actions";
  href: string;
  icon: React.ElementType;
  description?: string;
}

const searchItems: SearchItem[] = [
  // Quick Actions
  {
    id: "act-contact",
    title: "Schedule Architecture Consultation",
    category: "Quick Actions",
    href: "/contact",
    icon: Calendar,
    description: "Book a free 30-min discovery session with our lead architects",
  },
  {
    id: "act-whatsapp",
    title: "Chat on WhatsApp (+91 86398 31132)",
    category: "Quick Actions",
    href: "https://wa.me/918639831132?text=Hi%20MOMO%20IT%2C%20I%20would%20like%20to%20discuss%20a%20software%20project.",
    icon: MessageCircle,
    description: "Instant chat response from our Kadapa engineering team",
  },
  {
    id: "act-call",
    title: "Direct Call (+91 86398 31132)",
    category: "Quick Actions",
    href: "tel:+918639831132",
    icon: PhoneCall,
    description: "Speak directly with an engineering lead",
  },
  // Solutions
  {
    id: "sol-web",
    title: "Web & SaaS Platform Development",
    category: "Solutions",
    href: "/services/web-development",
    icon: Code2,
    description: "Next.js 15, React 19, Spring Boot, Supabase",
  },
  {
    id: "sol-ai",
    title: "AI & Intelligent Automation",
    category: "Solutions",
    href: "/services/ai-automation",
    icon: Bot,
    description: "Autonomous agents, enterprise RAG, WhatsApp AI bots",
  },
  {
    id: "sol-mobile",
    title: "Cross-Platform Mobile Apps",
    category: "Solutions",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    description: "Google Flutter 60 FPS iOS & Android native apps",
  },
  {
    id: "sol-qa",
    title: "QA & Test Automation Pods",
    category: "Solutions",
    href: "/services/qa-automation",
    icon: ShieldCheck,
    description: "Selenium WebDriver 4, Playwright, CI/CD regression suites",
  },
  {
    id: "sol-legacy",
    title: "Legacy Application Modernisation",
    category: "Solutions",
    href: "/services/software-development",
    icon: Layers,
    description: "Monolith to microservices migration with zero downtime",
  },
  // Case Studies
  {
    id: "case-as",
    title: "AS REFRIGERATIONS Case Study",
    category: "Case Studies",
    href: "/case-studies/as-refrigerations",
    icon: Sparkles,
    description: "Multi-city field service platform & 0% fee NPCI UPI engine",
  },
  {
    id: "case-mana",
    title: "MANA Tours & Travels Case Study",
    category: "Case Studies",
    href: "/case-studies/mana-tours",
    icon: Sparkles,
    description: "Real-time fleet booking & automated WhatsApp ticketing",
  },
  // Academy
  {
    id: "acad-qa",
    title: "Automation Testing Training (Selenium 4 & Java)",
    category: "Academy",
    href: "/academy/automation-testing-training-kadapa",
    icon: GraduationCap,
    description: "3-Month SDET coaching with live client internship",
  },
  {
    id: "acad-fullstack",
    title: "Full-Stack Development Training",
    category: "Academy",
    href: "/academy/full-stack-development-training-kadapa",
    icon: GraduationCap,
    description: "React 19, Next.js, Spring Boot & PostgreSQL",
  },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const filteredItems = searchItems.filter((item) => {
    const text = `${item.title} ${item.category} ${item.description || ""}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  const handleSelect = (item: SearchItem) => {
    setIsOpen(false);
    setQuery("");
    if (item.href.startsWith("http") || item.href.startsWith("tel:")) {
      window.open(item.href, "_blank");
    } else {
      router.push(item.href);
    }
  };

  return (
    <>
      {/* Trigger Button in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-gray-200 text-xs text-gray-500 font-mono transition-all cursor-pointer"
        aria-label="Open command palette"
      >
        <Search className="w-3.5 h-3.5 text-gray-400" />
        <span className="hidden xl:inline">Search solutions...</span>
        <span className="xl:hidden">Search...</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] font-semibold text-gray-600 border border-gray-300 shadow-2xs">
          Ctrl K
        </kbd>
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-md flex items-start justify-center pt-20 sm:pt-28 px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Header */}
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-slate-50">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search solutions, case studies, technologies, or actions..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-sm sm:text-base font-medium text-navy-950 placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-200 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-3 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-10 text-center text-xs text-gray-500 font-mono">
                  No matching services or actions found for &quot;{query}&quot;
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full p-3 rounded-2xl text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-blue-50 text-blue-900 border border-blue-200/80"
                          : "hover:bg-slate-50 text-navy-950 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-gray-600"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold truncate">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="text-[11px] text-gray-500 truncate">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 border border-gray-200">
                          {item.category}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <span>Navigate with</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-gray-600 border border-gray-200">
                  ↑
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-gray-600 border border-gray-200">
                  ↓
                </kbd>
                <span>Select with</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-gray-600 border border-gray-200">
                  ↵
                </kbd>
              </div>
              <div>
                <span>Press</span>{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-white text-gray-600 border border-gray-200">
                  ESC
                </kbd>{" "}
                <span>to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

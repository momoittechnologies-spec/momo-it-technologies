"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  CheckCircle2,
  Globe,
  Smartphone,
  Layers,
  Users,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Briefcase,
  FileText,
  Calculator,
  MessageSquare,
  Star,
  Bot,
  RefreshCw,
} from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [academyDropdownOpen, setAcademyDropdownOpen] = useState(false);
  const [caseStudiesDropdownOpen, setCaseStudiesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAcademyDropdownOpen(false);
    setCaseStudiesDropdownOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar />
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5"
            : "bg-white/90 backdrop-blur-md border-b border-gray-100/80 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform flex items-center justify-center bg-navy-950 border border-brand-500/30 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt="MOMO IT Technologies Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-navy-950 flex items-center gap-1.5 leading-none">
                  MOMO <span className="text-brand-600">IT</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200/60">
                    Kadapa
                  </span>
                </span>
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mt-1">
                  Technologies - IT Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/"
                    ? "text-brand-700 bg-brand-50/80 font-semibold"
                    : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* 1. Tech Services Mega-Menu Dropdown (Web & SaaS Focused) */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    pathname.startsWith("/services")
                      ? "text-brand-700 bg-brand-50/80 font-semibold"
                      : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-brand-600" : "text-gray-400"
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-[660px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <div className="pb-3 mb-3 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Engineering &amp; Technology Services
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                          AI &amp; Web SaaS
                        </span>
                      </div>
                      <Link
                        href="/services"
                        className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                      >
                        <span>All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {/* Custom AI Development */}
                      <Link
                        href="/services/ai-development-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/40 hover:bg-emerald-50/80 border border-emerald-100/80 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                          <Bot className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-emerald-700 flex items-center gap-1.5">
                            AI Development Kadapa
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-600 text-white font-bold">
                              AI
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                            Autonomous agents, RAG systems &amp; LLM workflows.
                          </p>
                        </div>
                      </Link>

                      {/* Web Development Kadapa */}
                      <Link
                        href="/services/web-development-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl bg-brand-50/40 hover:bg-brand-50/80 border border-brand-100/80 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700 flex items-center gap-1.5">
                            Web Development Kadapa
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-brand-600 text-white font-bold">
                              Core
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                            Next.js 15, React 19, high-speed corporate sites.
                          </p>
                        </div>
                      </Link>

                      {/* Software & SaaS Products */}
                      <Link
                        href="/services/software-development-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <RefreshCw className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700 flex items-center gap-1.5">
                            Software Development
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800 font-bold">
                              SaaS
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                            Custom software, APIs, and cloud-native systems.
                          </p>
                        </div>
                      </Link>

                      {/* QA Automation */}
                      <Link
                        href="/services/qa-automation-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700">
                            QA Automation Testing
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                            Selenium 4, TestNG, Cucumber BDD &amp; CI/CD pipelines.
                          </p>
                        </div>
                      </Link>

                      {/* Mobile Apps */}
                      <Link
                        href="/services/mobile-app-development-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700">
                            Mobile App Development
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                            Cross-platform Flutter iOS &amp; Android native apps.
                          </p>
                        </div>
                      </Link>

                      {/* Business ERP */}
                      <Link
                        href="/services/business-software-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700">
                            Business &amp; ERP Software
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                            Custom billing, inventory, POS &amp; WhatsApp receipts.
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* Quick Estimator CTA banner */}
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between bg-gray-50/70 p-2.5 rounded-xl text-xs">
                      <div className="flex items-center gap-1.5 text-gray-700 font-medium">
                        <Calculator className="w-3.5 h-3.5 text-brand-600" />
                        <span>Curious about your web app timeline &amp; cost?</span>
                      </div>
                      <Link
                        href="/services/software-dev"
                        className="font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                      >
                        <span>Open SaaS Estimator</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/industries"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/industries"
                    ? "text-brand-700 bg-brand-50/80 font-semibold"
                    : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                }`}
              >
                Industries
              </Link>

              {/* 2. MOMO Academy Mega-Menu Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAcademyDropdownOpen(true)}
                onMouseLeave={() => setAcademyDropdownOpen(false)}
              >
                <Link
                  href="/academy"
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    pathname.startsWith("/academy")
                      ? "text-brand-700 bg-brand-50/90 font-bold"
                      : "text-gray-800 hover:text-brand-700 hover:bg-brand-50/50"
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-brand-600" />
                  <span>Academy</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      academyDropdownOpen ? "rotate-180 text-brand-600" : "text-gray-400"
                    }`}
                  />
                </Link>

                {academyDropdownOpen && (
                  <div className="absolute top-full left-0 w-[660px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <div className="pb-3 mb-3 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          MOMO Academy Curriculum
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.8★ Google Rated
                        </span>
                      </div>
                      <Link
                        href="/academy"
                        className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                      >
                        <span>Explore Batches</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {/* Flagship Course: Agentic AI */}
                      <Link
                        href="/academy/ai-training-kadapa"
                        className="col-span-2 flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-brand-50/80 via-emerald-50/50 to-teal-50/60 hover:from-brand-50 hover:to-emerald-50 border border-brand-200/80 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-600 to-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                          <Bot className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              Agentic AI, RAG &amp; Enterprise AI (2026)
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-brand-600 text-white font-bold">
                                2026 Flagship
                              </span>
                            </span>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                              New Batch
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mt-0.5">
                            Autonomous agents, LangGraph, CrewAI, Production RAG &amp; Vector DBs.
                          </p>
                        </div>
                      </Link>

                      {/* Course 1 */}
                      <Link
                        href="/academy/automation-testing-training-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl bg-brand-50/30 hover:bg-brand-50/70 border border-brand-100/70 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700 flex items-center gap-1.5">
                            Automation Testing Kadapa
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-brand-100 text-brand-800 font-bold">
                              QA Flagship
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            Java, Selenium 4, TestNG &amp; Cucumber
                          </p>
                          <span className="text-[10px] font-semibold text-brand-700 mt-1 block">
                            10–12 Weeks · Hybrid Batches
                          </span>
                        </div>
                      </Link>

                      {/* Course 2 */}
                      <Link
                        href="/academy/full-stack-development-training-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700">
                            Full-Stack Software Dev
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            React 19, Next.js &amp; Spring Boot 3
                          </p>
                          <span className="text-[10px] font-semibold text-blue-700 mt-1 block">
                            14–16 Weeks · Enterprise Track
                          </span>
                        </div>
                      </Link>

                      {/* Course 3 */}
                      <Link
                        href="/academy/flutter-training-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700">
                            Mobile App Development
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            Flutter, Dart &amp; Supabase (Android + iOS)
                          </p>
                          <span className="text-[10px] font-semibold text-purple-700 mt-1 block">
                            10–12 Weeks · App Store Ready
                          </span>
                        </div>
                      </Link>

                      {/* Course 4 */}
                      <Link
                        href="/academy/java-training-kadapa"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-brand-700">
                            Core &amp; Advanced Java
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            Java 17+, OOPs, Streams &amp; JDBC
                          </p>
                          <span className="text-[10px] font-semibold text-amber-700 mt-1 block">
                            8–10 Weeks · Coding Lab
                          </span>
                        </div>
                      </Link>
                    </div>

                    {/* Bottom Guarantees Strip */}
                    <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-emerald-50/70 via-white to-purple-50/70 p-2.5 rounded-xl text-xs">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 font-bold text-emerald-900">
                          <Award className="w-3.5 h-3.5 text-emerald-600" />
                          Verified Certificate
                        </span>
                        <span className="flex items-center gap-1 font-bold text-purple-900">
                          <Briefcase className="w-3.5 h-3.5 text-purple-600" />
                          Live Client Project Internship
                        </span>
                      </div>
                      <Link
                        href="/academy"
                        className="font-bold text-brand-700 hover:text-brand-800 flex items-center gap-1"
                      >
                        <span>Free ATS Resume &amp; Syllabus</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Case Studies Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCaseStudiesDropdownOpen(true)}
                onMouseLeave={() => setCaseStudiesDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    pathname.startsWith("/case-studies")
                      ? "text-brand-700 bg-brand-50/80 font-semibold"
                      : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                  }`}
                >
                  <span>Case Studies</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      caseStudiesDropdownOpen ? "rotate-180 text-brand-600" : "text-gray-400"
                    }`}
                  />
                </button>

                {caseStudiesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 space-y-1 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <Link
                      href="/case-studies/vijayas-yummy-food"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50/60 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 font-bold text-sm">
                        🍲
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-700">
                          Vijaya&apos;s Yummy Food
                        </div>
                        <span className="text-xs text-gray-500 block">
                          FoodTech &amp; Cloud Kitchen PWA
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/case-studies/mana-tours"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50/60 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-sm">
                        🚖
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 flex items-center gap-1">
                          MANA Tours &amp; Travels
                          <span className="text-[10px] text-amber-600 font-bold">5.0★</span>
                        </div>
                        <span className="text-xs text-gray-500 block">
                          Kadapa Travel &amp; AI Voice Booking
                        </span>
                      </div>
                    </Link>
                    <div className="pt-2 mt-1 border-t border-gray-100 px-3 py-1.5">
                      <Link
                        href="/case-studies"
                        className="text-xs font-bold text-brand-600 hover:text-brand-800 flex items-center justify-between"
                      >
                        <span>View All Case Studies</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/kadapa"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/kadapa"
                    ? "text-brand-700 bg-brand-50/80 font-semibold"
                    : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                }`}
              >
                Kadapa Office
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/about"
                    ? "text-brand-700 bg-brand-50/80 font-semibold"
                    : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                }`}
              >
                About
              </Link>

              <Link
                href="/blog"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith("/blog")
                    ? "text-brand-700 bg-brand-50/80 font-semibold"
                    : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                }`}
              >
                Blog
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/918639831132"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                title="Direct WhatsApp with Kadapa office"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/25 hover:shadow-lg hover:shadow-brand-500/35 hover:-translate-y-0.5 transition-all"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/academy"
                className="px-2.5 py-1 text-xs font-bold rounded-lg bg-brand-100 text-brand-800 border border-brand-200"
              >
                Academy
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-navy-950 hover:bg-gray-100 focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-bold rounded-lg text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>

            {/* Tech Services Accordion */}
            <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200/70 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  Tech Services
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-100 text-brand-800">
                  Web &amp; SaaS Core
                </span>
              </div>
              <div className="space-y-1.5 pt-1 text-sm">
                <Link
                  href="/services/ai-development-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-emerald-50/70 font-semibold text-emerald-950 hover:text-emerald-700 border border-emerald-200/80"
                >
                  🤖 AI Software Development in Kadapa
                </Link>
                <Link
                  href="/services/web-development-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white font-semibold text-navy-950 hover:text-brand-600 border border-gray-100"
                >
                  🌐 Web Development Kadapa
                </Link>
                <Link
                  href="/services/software-development-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white font-semibold text-navy-950 hover:text-brand-600 border border-gray-100"
                >
                  💻 Custom Software &amp; SaaS Development
                </Link>
                <Link
                  href="/services/qa-automation-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white text-gray-700 hover:text-brand-600 border border-gray-100"
                >
                  🧪 QA Automation Testing (Selenium 4)
                </Link>
                <Link
                  href="/services/mobile-app-development-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white text-gray-700 hover:text-brand-600 border border-gray-100"
                >
                  📱 Mobile Apps (Flutter iOS &amp; Android)
                </Link>
                <Link
                  href="/services/saas-development-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white text-gray-700 hover:text-brand-600 border border-gray-100"
                >
                  ☁️ SaaS Product Development Kadapa
                </Link>
                <Link
                  href="/services/business-software-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white text-gray-700 hover:text-brand-600 border border-gray-100"
                >
                  💼 Business ERP, POS &amp; Billing Systems
                </Link>
              </div>
            </div>

            {/* MOMO Academy Accordion */}
            <div className="p-3 bg-brand-50/40 rounded-2xl border border-brand-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-800 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-brand-700" />
                  MOMO Academy
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  4.8★ Kadapa Lab
                </span>
              </div>
              <div className="space-y-1.5 pt-1 text-sm">
                <Link
                  href="/academy/ai-training-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-brand-100/70 font-bold text-brand-950 border border-brand-300"
                >
                  ⚡ Agentic AI, RAG &amp; Enterprise AI (2026)
                </Link>
                <Link
                  href="/academy/automation-testing-training-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white font-semibold text-navy-950 border border-brand-100"
                >
                  Automation Testing with Java (Selenium 4)
                </Link>
                <Link
                  href="/academy/java-training-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white text-gray-700 border border-brand-100"
                >
                  Core &amp; Advanced Java Training
                </Link>
                <Link
                  href="/academy/selenium-training-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white text-gray-700 border border-brand-100"
                >
                  Selenium WebDriver Testing Lab
                </Link>
                <Link
                  href="/academy/full-stack-development-training-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white text-gray-700 border border-brand-100"
                >
                  Full-Stack Software Dev (React 19 &amp; Java)
                </Link>
                <Link
                  href="/academy/flutter-training-kadapa"
                  className="block px-2.5 py-1.5 rounded-lg bg-white text-gray-700 border border-brand-100"
                >
                  Mobile App Dev (Flutter Android &amp; iOS)
                </Link>
                <div className="p-2 rounded-lg bg-white border border-emerald-200 text-[11px] text-emerald-800 font-semibold text-center">
                  🎓 Certificate + 💼 Real Project Internship Included
                </div>
              </div>
            </div>

            {/* Case Studies & Other links */}
            <div className="space-y-1 pt-1">
              <Link
                href="/industries"
                className="block px-3 py-2 text-sm font-bold text-navy-950 hover:text-brand-600 rounded-lg hover:bg-gray-50 flex items-center justify-between"
              >
                <span>🏢 Software Across 8 Industries</span>
                <span className="text-[10px] bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full font-bold">New</span>
              </Link>
              <Link
                href="/case-studies/vijayas-yummy-food"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 rounded-lg hover:bg-gray-50"
              >
                🍲 Vijaya&apos;s Yummy Food (Client PWA)
              </Link>
              <Link
                href="/case-studies/mana-tours"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 rounded-lg hover:bg-gray-50"
              >
                🚖 MANA Tours &amp; Travels (Kadapa Mobility)
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 rounded-lg hover:bg-gray-50"
              >
                About MOMO IT
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 rounded-lg hover:bg-gray-50 flex items-center justify-between"
              >
                <span>📰 Blog &amp; Tech Guides</span>
                <span className="text-[10px] bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full font-bold">New</span>
              </Link>
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-2 flex flex-col gap-2 border-t border-gray-100">
              <a
                href="https://wa.me/918639831132"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 86398 31132)</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-sm shadow-md"
              >
                <span>Request Free Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Briefcase,
  FileText,
  Star,
  Bot,
  RefreshCw,
  MapPin,
  Share2,
  Megaphone,
  Wrench,
  Car,
  Truck,
  ShoppingBag,
  UtensilsCrossed,
  Stethoscope,
  GraduationCap,
  ExternalLink,
  Code2,
  Cpu,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const pathname = usePathname();

  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const workTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    setWorkDropdownOpen(false);
  }, [pathname]);

  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setSolutionsDropdownOpen(true);
  };
  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdownOpen(false);
    }, 150);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesDropdownOpen(true);
  };
  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesDropdownOpen(false);
    }, 150);
  };

  const handleWorkEnter = () => {
    if (workTimeoutRef.current) clearTimeout(workTimeoutRef.current);
    setWorkDropdownOpen(true);
  };
  const handleWorkLeave = () => {
    workTimeoutRef.current = setTimeout(() => {
      setWorkDropdownOpen(false);
    }, 150);
  };

  const isDarkTheme = pathname === "/" || pathname === "/architecture";

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header
        className={`w-full transition-all duration-300 ${
          isDarkTheme
            ? isScrolled
              ? "bg-[#040a18]/95 backdrop-blur-xl shadow-lg border-b border-white/[0.08] py-2.5"
              : "bg-[#040a18]/85 backdrop-blur-lg border-b border-white/[0.06] py-3.5"
            : isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200/80 py-2.5"
              : "bg-white/90 backdrop-blur-lg border-b border-gray-200/50 py-3.5"
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-electric-500/15 group-hover:scale-105 transition-transform flex items-center justify-center bg-navy-950 border border-electric-500/30 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt="MOMO IT Technologies Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-extrabold text-lg sm:text-xl tracking-tight flex items-center gap-1.5 leading-none font-heading ${
                    isDarkTheme ? "text-white" : "text-navy-950"
                  }`}
                >
                  MOMO <span className="text-electric-500">IT</span> TECHNOLOGIES
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-widest mt-1 ${
                    isDarkTheme ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Software Engineering &amp; Digital Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname === "/"
                    ? isDarkTheme
                      ? "text-cyan-400 bg-white/10 font-semibold"
                      : "text-electric-600 bg-electric-50 font-semibold"
                    : isDarkTheme
                      ? "text-gray-300 hover:text-white hover:bg-white/5"
                      : "text-gray-700 hover:text-electric-600 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* 1. Solutions Mega-Menu (4 Primary Pillars) */}
              <div
                className="relative"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    pathname.startsWith("/services")
                      ? isDarkTheme
                        ? "text-cyan-400 bg-white/10 font-semibold"
                        : "text-electric-600 bg-electric-50 font-semibold"
                      : isDarkTheme
                        ? "text-gray-300 hover:text-white hover:bg-white/5"
                        : "text-gray-700 hover:text-electric-600 hover:bg-gray-50"
                  }`}
                  aria-expanded={solutionsDropdownOpen}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      solutionsDropdownOpen
                        ? isDarkTheme
                          ? "rotate-180 text-cyan-400"
                          : "rotate-180 text-electric-600"
                        : isDarkTheme
                          ? "text-gray-400"
                          : "text-gray-400"
                    }`}
                  />
                </button>

                {solutionsDropdownOpen && (
                  <div className="absolute top-full -left-20 w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <div className="pb-3 mb-4 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
                          What We Build · 4 Core Engineering Pillars
                        </span>
                      </div>
                      <Link
                        href="/services"
                        className="text-xs font-bold text-electric-600 hover:text-electric-700 flex items-center gap-1"
                      >
                        <span>All Solutions Directory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Pillar 01: Software Engineering */}
                      <Link
                        href="/services/web-development"
                        className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-electric-50/50 border border-transparent hover:border-electric-100 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-electric-100">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-electric-600 flex items-center gap-1.5">
                            01. Software Engineering
                          </div>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            Custom Web Apps, SaaS Platforms, Enterprise ERPs &amp; E-Commerce.
                          </p>
                        </div>
                      </Link>

                      {/* Pillar 02: AI & Automation */}
                      <Link
                        href="/services/ai-automation"
                        className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-emerald-50/50 border border-transparent hover:border-emerald-100 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-emerald-100">
                          <Bot className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-emerald-700 flex items-center gap-1.5">
                            02. AI &amp; Automation
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-600 text-white font-bold">
                              AI
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            Autonomous Agents, Workflow Automation, WhatsApp Bots &amp; RAG Systems.
                          </p>
                        </div>
                      </Link>

                      {/* Pillar 03: Mobile & Quality Engineering */}
                      <Link
                        href="/services/mobile-app-development"
                        className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-purple-50/50 border border-transparent hover:border-purple-100 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-purple-100">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-purple-700 flex items-center gap-1.5">
                            03. Mobile &amp; Quality Engineering
                          </div>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            Flutter iOS/Android Apps, Selenium 4 QA &amp; Playwright Regression.
                          </p>
                        </div>
                      </Link>

                      {/* Pillar 04: Digital Growth */}
                      <Link
                        href="/services/digital-marketing"
                        className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-amber-50/50 border border-transparent hover:border-amber-100 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-amber-100">
                          <Megaphone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy-950 group-hover:text-amber-700 flex items-center gap-1.5">
                            04. Digital Growth
                          </div>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            Performance SEO, Google Business 3-Pack, Ads &amp; Social Growth.
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 bg-gray-50/80 p-3 rounded-xl">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>100% Client Code Ownership · Direct IP Transfer</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Link
                          href="/architecture"
                          className="font-bold text-gray-700 hover:text-electric-600 flex items-center gap-1"
                        >
                          <span>System Architecture</span>
                        </Link>
                        <Link
                          href="/contact"
                          className="font-bold text-electric-600 hover:text-electric-700 flex items-center gap-1"
                        >
                          <span>Start Discovery</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Industries Mega-Menu */}
              <div
                className="relative"
                onMouseEnter={handleIndustriesEnter}
                onMouseLeave={handleIndustriesLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    isDarkTheme
                      ? "text-gray-300 hover:text-white hover:bg-white/5"
                      : "text-gray-700 hover:text-electric-600 hover:bg-gray-50"
                  }`}
                  aria-expanded={industriesDropdownOpen}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      industriesDropdownOpen
                        ? isDarkTheme
                          ? "rotate-180 text-cyan-400"
                          : "rotate-180 text-electric-600"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {industriesDropdownOpen && (
                  <div className="absolute top-full -left-20 w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <div className="pb-3 mb-3 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
                        Domain Solutions &amp; Industry Use Cases
                      </span>
                      <Link
                        href="/case-studies"
                        className="text-xs font-bold text-electric-600 hover:text-electric-700 flex items-center gap-1"
                      >
                        <span>View Real Projects</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <Link
                        href="/case-studies/as-refrigerations"
                        className="p-3 rounded-xl hover:bg-blue-50/60 border border-gray-100 flex items-start gap-3 transition-colors"
                      >
                        <Wrench className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-navy-950 block text-xs">Field Services &amp; HVAC</strong>
                          <span className="text-gray-500 text-[11px]">Doorstep booking, 0% UPI QR &amp; technician GPS routing.</span>
                        </div>
                      </Link>

                      <Link
                        href="/case-studies/mana-tours"
                        className="p-3 rounded-xl hover:bg-blue-50/60 border border-gray-100 flex items-start gap-3 transition-colors"
                      >
                        <Car className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-navy-950 block text-xs">Travel &amp; Transportation</strong>
                          <span className="text-gray-500 text-[11px]">Automated cab reservations &amp; WhatsApp ticket dispatch.</span>
                        </div>
                      </Link>

                      <Link
                        href="/services/ecommerce-development"
                        className="p-3 rounded-xl hover:bg-blue-50/60 border border-gray-100 flex items-start gap-3 transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-navy-950 block text-xs">Retail &amp; E-Commerce</strong>
                          <span className="text-gray-500 text-[11px]">Inventory synchronization, GST billing &amp; thermal POS.</span>
                        </div>
                      </Link>

                      <Link
                        href="/services/business-software"
                        className="p-3 rounded-xl hover:bg-blue-50/60 border border-gray-100 flex items-start gap-3 transition-colors"
                      >
                        <UtensilsCrossed className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-navy-950 block text-xs">Restaurants &amp; Food Businesses</strong>
                          <span className="text-gray-500 text-[11px]">QR table ordering, KDS engines &amp; automated billing.</span>
                        </div>
                      </Link>

                      <Link
                        href="/services/software-development"
                        className="p-3 rounded-xl hover:bg-blue-50/60 border border-gray-100 flex items-start gap-3 transition-colors"
                      >
                        <Stethoscope className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-navy-950 block text-xs">Healthcare &amp; Diagnostics</strong>
                          <span className="text-gray-500 text-[11px]">Appointment booking, lab report delivery &amp; patient CRM.</span>
                        </div>
                      </Link>

                      <Link
                        href="/academy"
                        className="p-3 rounded-xl hover:bg-blue-50/60 border border-gray-100 flex items-start gap-3 transition-colors"
                      >
                        <GraduationCap className="w-4 h-4 text-electric-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-navy-950 block text-xs">Education &amp; Training</strong>
                          <span className="text-gray-500 text-[11px]">LMS portals, live project internships &amp; certificate verification.</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Our Work */}
              <div
                className="relative"
                onMouseEnter={handleWorkEnter}
                onMouseLeave={handleWorkLeave}
              >
                <Link
                  href="/case-studies"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    pathname.startsWith("/case-studies")
                      ? isDarkTheme
                        ? "text-cyan-400 bg-white/10 font-semibold"
                        : "text-electric-600 bg-electric-50 font-semibold"
                      : isDarkTheme
                        ? "text-gray-300 hover:text-white hover:bg-white/5"
                        : "text-gray-700 hover:text-electric-600 hover:bg-gray-50"
                  }`}
                  aria-expanded={workDropdownOpen}
                >
                  <span>Our Work</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      workDropdownOpen
                        ? isDarkTheme
                          ? "rotate-180 text-cyan-400"
                          : "rotate-180 text-electric-600"
                        : "text-gray-400"
                    }`}
                  />
                </Link>

                {workDropdownOpen && (
                  <div className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 space-y-1 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                    <Link
                      href="/case-studies/as-refrigerations"
                      className="p-3 rounded-xl hover:bg-electric-50/60 transition-colors block group"
                    >
                      <div className="text-xs font-bold text-navy-950 group-hover:text-electric-600 flex items-center justify-between">
                        <span>AS REFRIGERATIONS</span>
                        <span className="text-[10px] text-emerald-700 font-mono">0% UPI</span>
                      </div>
                      <span className="text-[11px] text-gray-500 mt-0.5 block">
                        Multi-city appliance service &amp; HVAC dispatch platform.
                      </span>
                    </Link>

                    <Link
                      href="/case-studies/mana-tours"
                      className="p-3 rounded-xl hover:bg-electric-50/60 transition-colors block group"
                    >
                      <div className="text-xs font-bold text-navy-950 group-hover:text-electric-600 flex items-center justify-between">
                        <span>MANA Tours &amp; Travels</span>
                        <span className="text-[10px] text-amber-600 font-bold">5.0★</span>
                      </div>
                      <span className="text-[11px] text-gray-500 mt-0.5 block">
                        Automated cab booking &amp; WhatsApp fleet dispatch.
                      </span>
                    </Link>

                    <div className="pt-2 border-t border-gray-100 px-3 py-1">
                      <Link
                        href="/case-studies"
                        className="text-xs font-bold text-electric-600 hover:text-electric-700 flex items-center justify-between"
                      >
                        <span>Explore All Production Work</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Academy (Talent Lab) */}
              <Link
                href="/academy"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/academy")
                    ? isDarkTheme
                      ? "text-cyan-400 bg-white/10 font-semibold"
                      : "text-electric-600 bg-electric-50 font-semibold"
                    : isDarkTheme
                      ? "text-gray-300 hover:text-white hover:bg-white/5"
                      : "text-gray-700 hover:text-electric-600 hover:bg-gray-50"
                }`}
              >
                <GraduationCap className="w-4 h-4 text-electric-600" />
                <span>Academy</span>
              </Link>

              {/* 5. Insights (Blog) */}
              <Link
                href="/blog"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/blog")
                    ? isDarkTheme
                      ? "text-cyan-400 bg-white/10 font-semibold"
                      : "text-electric-600 bg-electric-50 font-semibold"
                    : isDarkTheme
                      ? "text-gray-300 hover:text-white hover:bg-white/5"
                      : "text-gray-700 hover:text-electric-600 hover:bg-gray-50"
                }`}
              >
                Insights
              </Link>

              {/* 6. About */}
              <Link
                href="/about"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname === "/about"
                    ? isDarkTheme
                      ? "text-cyan-400 bg-white/10 font-semibold"
                      : "text-electric-600 bg-electric-50 font-semibold"
                    : isDarkTheme
                      ? "text-gray-300 hover:text-white hover:bg-white/5"
                      : "text-gray-700 hover:text-electric-600 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="tel:+918639831132"
                className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  isDarkTheme
                    ? "text-gray-200 hover:text-white bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10"
                    : "text-navy-950 hover:text-electric-700 bg-gray-50/90 border border-gray-200/80 hover:border-electric-300 hover:bg-white"
                }`}
                title="Direct Phone Line Kadapa"
              >
                <PhoneCall className="w-3.5 h-3.5 text-electric-500" />
                <span>086398 31132</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/25 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Get a Project Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                className="px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-600 text-white shadow-xs"
              >
                Get Quote
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none cursor-pointer transition-colors ${
                  isDarkTheme
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-navy-950 hover:bg-gray-100"
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="pb-3 border-b border-gray-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2 font-mono">
                Primary Navigation
              </span>
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 flex items-center justify-between"
                >
                  <span>Solutions</span>
                  <span className="text-[10px] bg-electric-50 text-electric-700 px-2 py-0.5 rounded font-mono">4 Pillars</span>
                </Link>
                <Link
                  href="/case-studies"
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Our Work (Case Studies)
                </Link>
                <Link
                  href="/academy"
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 flex items-center justify-between"
                >
                  <span>Academy (Talent Lab)</span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-mono">5.0★</span>
                </Link>
                <Link
                  href="/blog"
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Insights (Tech Guides)
                </Link>
                <Link
                  href="/about"
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  About Us &amp; Leadership
                </Link>
                <Link
                  href="/kadapa"
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Kadapa Headquarters
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2 font-mono">
                Direct Contact
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+918639831132"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-navy-950"
                >
                  <PhoneCall className="w-4 h-4 text-electric-600" />
                  <span>Call +91 86398 31132</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-electric-600 text-white text-xs font-bold shadow-md shadow-electric-500/25"
                >
                  <span>Start a Project →</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

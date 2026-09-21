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
} from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform flex items-center justify-center bg-navy-950 border border-brand-500/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="MOMO IT Technologies Logo" className="w-full h-full object-contain p-0.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-navy-950 flex items-center gap-1.5">
                MOMO <span className="text-brand-600">IT</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-semibold border border-brand-200/60">
                  Kadapa
                </span>
              </span>
              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
                Software & Academy
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

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-brand-700 bg-brand-50/80 font-semibold"
                    : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-brand-600" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Mega-menu panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 grid grid-cols-2 gap-3 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                  <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Engineering & Quality Services
                    </span>
                    <Link
                      href="/services/qa-testing"
                      className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <Link
                    href="/services/qa-testing"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50/60 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 flex items-center gap-1.5">
                        QA & Automation
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-100 text-brand-800 font-bold">
                          Core
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        Playwright, Selenium, and RestAssured API testing pods.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/services/software-dev"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50/60 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-700">
                        Web & SaaS Apps
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        Next.js, React, Spring Boot, and modern cloud portals.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/services/business-systems"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50/60 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-700">
                        Business ERP & CRM
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        Custom billing, fleet management, and inventory portals.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/services/software-dev"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50/60 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-700">
                        Mobile Apps (Flutter)
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        Native iOS & Android apps with a single Flutter codebase.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Case Studies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCaseStudiesDropdownOpen(true)}
              onMouseLeave={() => setCaseStudiesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith("/case-studies")
                    ? "text-brand-700 bg-brand-50/80 font-semibold"
                    : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                }`}
              >
                Case Studies
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    caseStudiesDropdownOpen ? "rotate-180 text-brand-600" : "text-gray-400"
                  }`}
                />
              </button>

              {caseStudiesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 space-y-1 transition-all duration-200">
                  <Link
                    href="/case-studies/momope"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50/60 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-sm">
                      ₹
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-700">
                        MOMOPE Platform
                      </div>
                      <span className="text-xs text-gray-500 block">
                        Payments + Guaranteed Rewards
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
                        MANA Tours & Travels
                        <span className="text-[10px] text-amber-600 font-bold">5.0★</span>
                      </div>
                      <span className="text-xs text-gray-500 block">
                        Kadapa Travel & AI Voice Booking
                      </span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/hire-developers"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/hire-developers"
                  ? "text-brand-700 bg-brand-50/80 font-semibold"
                  : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
              }`}
            >
              Hire Developers
            </Link>

            {/* MOMO Academy Link */}
            <Link
              href="/academy"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-all border ${
                pathname === "/academy"
                  ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                  : "bg-brand-50/80 text-brand-800 border-brand-200/80 hover:bg-brand-100"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              MOMO Academy
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
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
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918639831132"
              className="flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-brand-600 px-3 py-2 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
              <span>086398 31132</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white text-xs font-bold shadow-md shadow-brand-500/25 hover:shadow-lg hover:shadow-brand-500/35 hover:-translate-y-0.5 transition-all"
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
              className="p-2 rounded-lg text-gray-600 hover:text-navy-950 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            className="block px-3 py-2 text-base font-medium rounded-lg text-gray-800 hover:bg-gray-50"
          >
            Home
          </Link>

          <div className="py-2 border-y border-gray-100 space-y-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3">
              Services
            </span>
            <Link
              href="/services/qa-testing"
              className="block px-3 py-1.5 text-sm text-gray-700 hover:text-brand-600"
            >
              QA & Automation Testing (Selenium / Playwright)
            </Link>
            <Link
              href="/services/software-dev"
              className="block px-3 py-1.5 text-sm text-gray-700 hover:text-brand-600"
            >
              Web & SaaS App Development
            </Link>
            <Link
              href="/services/business-systems"
              className="block px-3 py-1.5 text-sm text-gray-700 hover:text-brand-600"
            >
              Business Management Systems & ERP
            </Link>
          </div>

          <div className="py-2 border-b border-gray-100 space-y-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3">
              Case Studies
            </span>
            <Link
              href="/case-studies/momope"
              className="block px-3 py-1.5 text-sm text-gray-700 hover:text-brand-600"
            >
              MOMOPE (Fintech & Rewards)
            </Link>
            <Link
              href="/case-studies/mana-tours"
              className="block px-3 py-1.5 text-sm text-gray-700 hover:text-brand-600"
            >
              MANA Tours & Travels (Kadapa Mobility)
            </Link>
          </div>

          <Link
            href="/hire-developers"
            className="block px-3 py-2 text-base font-medium rounded-lg text-gray-800 hover:bg-gray-50"
          >
            Hire Dedicated Developers
          </Link>

          <Link
            href="/academy"
            className="block px-3 py-2 text-base font-semibold rounded-lg bg-brand-50 text-brand-800 border border-brand-200"
          >
            MOMO Academy (Hybrid Training)
          </Link>

          <Link
            href="/about"
            className="block px-3 py-2 text-base font-medium rounded-lg text-gray-800 hover:bg-gray-50"
          >
            About MOMO IT
          </Link>

          <div className="pt-3 flex flex-col gap-2">
            <a
              href="tel:+918639831132"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700"
            >
              <PhoneCall className="w-4 h-4 text-brand-600" />
              <span>Call Kadapa Desk: 086398 31132</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-sm shadow-md"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
      </header>
    </div>
  );
}

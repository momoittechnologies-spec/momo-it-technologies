import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  GraduationCap,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300 border-t border-navy-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800/80">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-brand-500/20 flex items-center justify-center bg-navy-900 border border-brand-500/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="MOMO IT Technologies Logo" className="w-full h-full object-contain p-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                  MOMO <span className="text-brand-400">IT TECHNOLOGIES</span>
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Software Engineering & Academy
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              From Kadapa, Andhra Pradesh to global businesses worldwide. We design, engineer, and rigorously test high-impact digital applications while grooming India&apos;s next generation of top-tier software and automation engineers.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-navy-800 text-brand-300 border border-brand-500/20">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.8★ Google Rated in Kadapa
              </span>
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-navy-800 text-gray-300 border border-gray-700">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                MSME Registered
              </span>
            </div>
          </div>

          {/* Technology Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Tech Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/software-dev"
                  className="text-gray-300 hover:text-brand-400 font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Web &amp; SaaS Products</span>
                  <span className="text-[9px] bg-brand-500/20 text-brand-300 px-1.5 py-0.5 rounded font-bold">Core</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/qa-testing"
                  className="text-gray-400 hover:text-brand-400 transition-colors"
                >
                  QA Automation (Selenium &amp; Playwright)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-dev"
                  className="text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Mobile Apps (Flutter &amp; React Native)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-systems"
                  className="text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Custom ERP &amp; Billing Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/hire-developers"
                  className="text-brand-400 hover:text-brand-300 font-medium transition-colors"
                >
                  Hire Dedicated Engineers →
                </Link>
              </li>
            </ul>
          </div>

          {/* MOMO Academy */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-brand-400" />
              MOMO Academy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/academy#courses"
                  className="text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Automation Testing with Java
                </Link>
              </li>
              <li>
                <Link
                  href="/academy#courses"
                  className="text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Full-Stack Java (Spring Boot + React)
                </Link>
              </li>
              <li>
                <Link
                  href="/academy#courses"
                  className="text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Mobile App Development (Flutter/iOS)
                </Link>
              </li>
              <li>
                <Link
                  href="/academy#courses"
                  className="text-gray-400 hover:text-brand-400 transition-colors"
                >
                  Digital Marketing &amp; AI Growth
                </Link>
              </li>
              <li>
                <Link
                  href="/academy"
                  className="text-brand-400 hover:text-brand-300 font-medium transition-colors"
                >
                  Explore Curriculum &amp; Internships →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kadapa Headquarters
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                <span>4/106, Krishnapuram, Kadapa, Andhra Pradesh — 516005</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+918639831132" className="hover:text-white transition-colors">
                  +91 86398 31132
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href="mailto:momoit.technologies@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  momoit.technologies@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <span className="text-xs text-brand-300 block font-semibold">
                  Operating Hours:
                </span>
                <span className="text-xs text-gray-400">Mon - Sat: 8:00 AM - 8:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} MOMO IT TECHNOLOGIES. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/services/software-dev" className="hover:text-gray-400 transition-colors">
              Web &amp; SaaS Products
            </Link>
            <Link href="/academy" className="hover:text-gray-400 transition-colors">
              MOMO Academy
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

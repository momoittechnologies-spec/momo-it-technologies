import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Star,
  Building2,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  ExternalLink,
  Code2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300 border-t border-white/10 pt-16 pb-12 relative overflow-hidden font-sans">
      {/* Specular top border highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 via-emerald-400 to-violetAccent-500 opacity-80" />
      
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-navy-800/80">
          
          {/* Brand & Overview (Col 1-2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-electric-500/20 flex items-center justify-center bg-navy-900 border border-electric-500/30 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="MOMO IT Technologies Logo" className="w-full h-full object-contain p-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5 font-heading">
                  MOMO <span className="text-electric-400">IT TECHNOLOGIES</span>
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Software Engineering &amp; AI Systems · Kadapa HQ
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              <strong>Engineering Digital Products. Transforming Businesses.</strong> We design, build, and deploy high-concurrency SaaS platforms, mobile applications, and AI-powered business systems for ambitious founders and enterprises.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                href="/kadapa"
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-navy-900 text-electric-300 border border-electric-500/30 hover:border-electric-500/60 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                5.0★ Google Rated (Kadapa)
              </Link>
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-navy-900 text-cyan-300 border border-cyan-500/40 font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                SLA 99.98% · 100% Client IP
              </span>
            </div>

            {/* Official Social Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs">
              <span className="font-semibold text-gray-400">Follow:</span>
              <a
                href="https://www.instagram.com/momoit.technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-pink-500/30 text-pink-400 hover:text-white hover:bg-pink-600 transition-all font-bold text-xs"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/momo-it-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-[#0A66C2] transition-all font-bold text-xs"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/momoittechnologies-spec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 transition-all font-bold text-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Solutions (Col 3) */}
          <div className="space-y-3.5 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/web-development" className="hover:text-electric-400 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="hover:text-electric-400 transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-electric-400 transition-colors">
                  AI &amp; Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-electric-400 transition-colors">
                  Mobile Applications (Flutter)
                </Link>
              </li>
              <li>
                <Link href="/services/qa-automation" className="hover:text-electric-400 transition-colors">
                  QA Automation &amp; Testing
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-electric-400 transition-colors">
                  Digital Growth &amp; SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Our Work (Col 4) */}
          <div className="space-y-3.5 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-electric-400 transition-colors">
                  About Us &amp; Founder
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-electric-400 transition-colors">
                  Our Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/case-studies/as-refrigerations" className="hover:text-electric-400 transition-colors flex items-center gap-1">
                  <span>AS REFRIGERATIONS</span>
                  <span className="text-[10px] bg-electric-500/20 text-electric-300 px-1 rounded">Live</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies/mana-tours" className="hover:text-electric-400 transition-colors">
                  MANA Tours &amp; Travels
                </Link>
              </li>
              <li>
                <Link href="/about#careers" className="hover:text-electric-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Careers (Hiring)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-electric-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Academy (Talent Lab) (Col 5) */}
          <div className="space-y-3.5 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              MOMO Academy
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/academy" className="hover:text-electric-400 transition-colors">
                  Academy Overview
                </Link>
              </li>
              <li>
                <Link href="/academy/automation-testing-training-kadapa" className="hover:text-electric-400 transition-colors">
                  Automation Testing (Selenium 4)
                </Link>
              </li>
              <li>
                <Link href="/academy/ai-training-kadapa" className="hover:text-electric-400 transition-colors flex items-center gap-1">
                  <span>Agentic AI &amp; RAG (2026)</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded font-bold font-mono">New</span>
                </Link>
              </li>
              <li>
                <Link href="/academy/full-stack-development-training-kadapa" className="hover:text-electric-400 transition-colors">
                  Full-Stack Java + React
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-electric-400 hover:text-electric-300 font-medium transition-colors">
                  Verify Certificates Online →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Kadapa Office (Col 6) */}
          <div className="space-y-3.5 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Contact &amp; Campus
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <Link href="/kadapa" className="hover:text-white transition-colors leading-relaxed">
                  4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, AP — 516003
                </Link>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-electric-400 shrink-0" />
                <a href="tel:+918639831132" className="hover:text-white transition-colors font-mono">
                  +91 86398 31132
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-electric-400 shrink-0" />
                <a href="mailto:momoit.technologies@gmail.com" className="hover:text-white transition-colors">
                  momoit.technologies@gmail.com
                </a>
              </div>
              <div className="pt-1">
                <span className="text-xs text-gray-300 block font-semibold">Hours:</span>
                <span className="text-xs text-gray-400">Mon - Sat: 8:00 AM - 8:00 PM IST</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-bold text-white bg-electric-600 hover:bg-electric-700 px-3.5 py-2 rounded-xl transition-colors shadow-sm"
                >
                  <span>Start a Project Consultation →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} MOMO IT TECHNOLOGIES. All rights reserved. Engineering Digital Products &amp; Scalable Cloud Platforms.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/kadapa" className="text-gray-400 hover:text-white transition-colors">
              Kadapa Office
            </Link>
            <Link href="/services" className="hover:text-gray-400 transition-colors">
              All Solutions
            </Link>
            <Link href="/case-studies" className="hover:text-gray-400 transition-colors">
              Our Work
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
              Insights &amp; Guides
            </Link>
            <Link href="/academy" className="hover:text-gray-400 transition-colors">
              Academy
            </Link>
            <Link href="/review" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
              Review Us
            </Link>
            <Link href="/pay" className="text-electric-400 hover:text-electric-300 font-semibold transition-colors flex items-center gap-1">
              <span>Client Pay &amp; Billing</span>
              <span className="text-[10px] bg-electric-500/20 text-electric-300 px-1.5 py-0.5 rounded font-bold font-mono">UPI / SBI</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

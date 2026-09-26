"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  Briefcase,
  CheckCircle2,
  Printer,
  ShieldCheck,
  QrCode,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function CertificatesPreviewPage() {
  const [activeTab, setActiveTab] = useState<"course" | "internship">("course");

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200/60">
            Verified Credentials &amp; Experience
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mt-3 mb-4">
            Official MOMO IT Certificates &amp; Credentials
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Every graduate from MOMO IT Academy receives two industry-recognized credentials: a Verified Course Completion Certificate and a Commercial Live Project Internship Letter recognized by MNC background verification teams.
          </p>

          {/* Tab Selector */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("course")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === "course"
                  ? "bg-brand-600 text-white shadow-md shadow-brand-500/25"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>1. Course Completion Certificate</span>
            </button>

            <button
              onClick={() => setActiveTab("internship")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === "internship"
                  ? "bg-brand-600 text-white shadow-md shadow-brand-500/25"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>2. Commercial Project Internship Letter</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Course Completion Certificate */}
        {activeTab === "course" && (
          <div className="bg-white rounded-3xl p-6 sm:p-12 border-4 sm:border-8 border-navy-950 shadow-2xl relative max-w-4xl mx-auto transition-all">
            {/* Inner Double Border */}
            <div className="border-2 border-dashed border-gray-300 p-6 sm:p-10 rounded-2xl relative bg-radial from-white via-white to-slate-50/50">
              
              {/* Certificate Top Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-gray-200 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-navy-950 text-white flex items-center justify-center font-bold text-lg p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="font-extrabold text-xl text-navy-950 tracking-tight">
                      MOMO <span className="text-brand-600">IT</span> TECHNOLOGIES
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Software Engineering &amp; IT Academy &bull; Kadapa
                    </div>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 inline-block">
                    ✓ Registered Technical Institution
                  </span>
                  <div className="text-[11px] text-gray-500 mt-1">4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa (AP)</div>
                </div>
              </div>

              {/* Certificate Title */}
              <div className="text-center my-8">
                <div className="text-xs font-extrabold uppercase tracking-widest text-amber-600 mb-1">
                  Certificate of Technical Excellence
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 tracking-tight font-serif">
                  COURSE COMPLETION CREDENTIAL
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-500 via-amber-500 to-emerald-500 mx-auto mt-3 rounded-full" />
              </div>

              {/* Awarded Text */}
              <div className="text-center max-w-2xl mx-auto my-6">
                <p className="text-sm italic text-gray-500 font-serif">This is proudly awarded to</p>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-700 underline decoration-amber-500 underline-offset-8 my-3">
                  K. VENKATA SAI REDDY
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mt-4">
                  for successfully mastering the curriculum, completing framework code benchmarks, and demonstrating high-precision engineering competence in:
                </p>
                <div className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-navy-950 font-extrabold text-base sm:text-lg border border-slate-200 inline-block">
                  Automation Testing with Java, Selenium 4 &amp; Cucumber BDD
                </div>
              </div>

              {/* Key Verified Skills Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 my-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-100">
                  Core Java OOPs
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-100">
                  Selenium 4 WebDriver
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-100">
                  Page Object Model (POM)
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-100">
                  Cucumber BDD
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-100">
                  REST Assured API
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                  Evaluation: Grade A+ Distinction
                </span>
              </div>

              {/* Certificate Bottom: Credential ID, QR & Signatures */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 mt-8 border-t border-gray-200 gap-6">
                
                {/* Security QR & ID */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg bg-navy-950 text-white flex flex-col items-center justify-center p-1 text-[9px] font-bold text-center">
                    <QrCode className="w-6 h-6 text-brand-400" />
                    <span>VERIFY</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <div className="font-bold text-navy-950">Credential ID: MOMO-ACAD-2026-QA-8842</div>
                    <div>Issue Date: September 23, 2026</div>
                    <div className="text-brand-600 font-semibold">momoittechnologies.com/verify</div>
                  </div>
                </div>

                {/* Golden Embossed Seal */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-amber-950 flex flex-col items-center justify-center border-2 border-amber-600 shadow-lg text-center p-1">
                  <div className="text-[7px] font-black uppercase">MOMO IT</div>
                  <div className="text-[11px]">★★★</div>
                  <div className="text-[6px] font-bold">SEAL</div>
                </div>

                {/* Signatures */}
                <div className="flex items-center gap-8 text-center">
                  <div>
                    <div className="font-serif italic font-bold text-brand-700 text-lg border-b border-gray-300 pb-1">
                      Sarath Kumar M.
                    </div>
                    <div className="text-[11px] font-bold text-navy-950 mt-1">Technical SDET Lead</div>
                    <div className="text-[9px] text-gray-500">MOMO Academy</div>
                  </div>
                  <div>
                    <div className="font-serif italic font-bold text-navy-950 text-lg border-b border-gray-300 pb-1">
                      D. Mohan
                    </div>
                    <div className="text-[11px] font-bold text-navy-950 mt-1">Managing Director</div>
                    <div className="text-[9px] text-gray-500">MOMO IT Technologies</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Commercial Live Project Internship Certificate */}
        {activeTab === "internship" && (
          <div className="bg-white rounded-2xl p-6 sm:p-14 border border-gray-200 shadow-xl max-w-4xl mx-auto font-sans">
            
            {/* Corporate Letterhead */}
            <div className="flex flex-col sm:flex-row items-start justify-between pb-6 border-b-2 border-brand-600 gap-4">
              <div>
                <div className="text-2xl font-extrabold text-navy-950 tracking-tight">
                  MOMO <span className="text-brand-600">IT</span> TECHNOLOGIES
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-0.5">
                  Software Engineering &bull; Web &amp; SaaS Products &bull; Quality Engineering
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Kadapa Engineering Centre &bull; Central B2B Software Services
                </div>
              </div>

              <div className="text-left sm:text-right text-xs text-gray-500 space-y-0.5">
                <div>4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa</div>
                <div>Andhra Pradesh — 516003, India</div>
                <div>Phone: +91 86398 31132</div>
                <div>Email: momoit.technologies@gmail.com</div>
              </div>
            </div>

            {/* Reference & Date */}
            <div className="flex justify-between items-center text-xs font-semibold text-gray-600 my-6">
              <div>Ref No: MOMO/HR/INT/2026/8842</div>
              <div>Date of Issue: September 23, 2026</div>
            </div>

            {/* Subject */}
            <div className="text-center my-6">
              <div className="text-sm font-extrabold text-navy-950 underline decoration-brand-600 underline-offset-4 tracking-wide">
                TO WHOMSOEVER IT MAY CONCERN
              </div>
              <div className="text-xs font-bold text-brand-700 mt-1">
                SUBJECT: INTERNSHIP COMPLETION CERTIFICATE &amp; EXPERIENCE LETTER
              </div>
            </div>

            {/* Letter Body */}
            <div className="text-sm text-gray-700 leading-relaxed space-y-4 text-justify">
              <p>
                This is to officially certify that <strong>Mr./Ms. K. Venkata Sai Reddy</strong> has successfully completed an intensive commercial software engineering internship as a <strong>Junior Software Development Engineer in Test (SDET) Intern</strong> with <strong>MOMO IT Technologies</strong> from <strong>July 01, 2026 to September 23, 2026</strong>.
              </p>

              <p>
                During this tenure, they were actively embedded into our client delivery engineering pod and contributed directly to our production commercial client system: <strong>Vijaya&apos;s Yummy Food (Cloud Kitchen Online Ordering &amp; Kitchen Display System PWA)</strong>.
              </p>

              <div className="bg-slate-50 border-l-4 border-brand-600 p-4 rounded-r-xl my-4 text-xs space-y-2">
                <div className="font-bold text-navy-950 text-sm">Key Verified Technical Contributions:</div>
                <ul className="space-y-1.5 list-disc list-inside text-gray-700">
                  <li>Authored and executed 180+ automated regression test cases using Java, Selenium 4, and TestNG.</li>
                  <li>Designed Page Object Model (POM) automation suites validating the 1-Tap GPS address flow and Dynamic Direct UPI Checkout.</li>
                  <li>Conducted automated REST Assured API tests verifying real-time database mutations and monthly billing cron endpoints.</li>
                  <li>Integrated automated test verification into the continuous deployment pipeline with GitHub Actions.</li>
                </ul>
              </div>

              <p>
                During their tenure with us, they demonstrated exceptional technical discipline, consistency, and a strong sense of ownership. They worked effectively in an Agile Scrum sprint setup, actively participated in daily standups, and delivered all assigned engineering milestones ahead of schedule.
              </p>

              <p>
                We appreciate their valuable contributions to our engineering department and wish them continued success in their future technology career.
              </p>
            </div>

            {/* Signatures & Seal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pt-8 mt-6 border-t border-gray-100 gap-6">
              <div>
                <div className="font-serif italic font-bold text-xl text-navy-950">D. Mohan</div>
                <div className="text-sm font-extrabold text-navy-950 mt-1">Damerla Mohan</div>
                <div className="text-xs font-semibold text-gray-600">Managing Director &amp; Technical Architect</div>
                <div className="text-xs text-gray-500">MOMO IT Technologies, Kadapa</div>
              </div>

              {/* Corporate Purple Ink Seal */}
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-purple-600 text-purple-700 flex flex-col items-center justify-center text-center p-2 text-[9px] font-extrabold rotate-[-6deg] opacity-85">
                <div>★ MOMO IT TECHNOLOGIES ★</div>
                <div className="text-xs my-0.5">SEAL</div>
                <div>KADAPA &bull; INDIA</div>
              </div>
            </div>

          </div>
        )}

        {/* Bottom Trust & Verification Guarantee */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-gray-600">
              Credentials are recognized by top MNCs and IT employers. Each certificate includes an online verifiable Credential ID and digital background check support.
            </span>
          </div>
          <Link
            href="/academy#courses"
            className="inline-flex items-center gap-1.5 font-bold text-brand-600 hover:text-brand-700 shrink-0"
          >
            <span>Explore Certified Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}

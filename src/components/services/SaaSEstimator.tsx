"use client";

import React, { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers,
  Smartphone,
  Globe,
  Database,
  Lock,
  CreditCard,
  Bell,
  BarChart3,
  TestTube2,
  Zap,
} from "lucide-react";

interface ProjectType {
  id: string;
  name: string;
  subtitle: string;
  baseWeeks: number;
  icon: any;
  defaultStack: string;
}

const projectTypes: ProjectType[] = [
  {
    id: "saas",
    name: "SaaS Platform",
    subtitle: "Multi-tenant cloud product with subscription billing & user accounts",
    baseWeeks: 4,
    icon: Globe,
    defaultStack: "Next.js 15, React 19, Supabase / PostgreSQL, Tailwind CSS",
  },
  {
    id: "web-portal",
    name: "Custom Web Application",
    subtitle: "High-performance customer portal, ordering system or booking app",
    baseWeeks: 3,
    icon: Layers,
    defaultStack: "Next.js, Spring Boot 3 / Node.js, PostgreSQL, Vercel",
  },
  {
    id: "mobile-app",
    name: "Cross-Platform Mobile App",
    subtitle: "Single codebase iOS and Android app published to App Stores",
    baseWeeks: 4,
    icon: Smartphone,
    defaultStack: "Flutter, Dart, Firebase / Supabase, Riverpod",
  },
  {
    id: "erp",
    name: "Business ERP & Billing",
    subtitle: "Internal operational system: invoices, dispatch, inventory & CRM",
    baseWeeks: 3,
    icon: Database,
    defaultStack: "React 19, Spring Boot, PostgreSQL, Cloudflare",
  },
];

interface FeatureOption {
  id: string;
  name: string;
  extraWeeks: number;
  icon: any;
}

const featureOptions: FeatureOption[] = [
  {
    id: "auth",
    name: "User Authentication & RBAC (Google, Phone OTP, Roles)",
    extraWeeks: 0.5,
    icon: Lock,
  },
  {
    id: "payments",
    name: "Payment Gateway (UPI, Razorpay, Stripe Subscriptions)",
    extraWeeks: 0.5,
    icon: CreditCard,
  },
  {
    id: "notifications",
    name: "Automated WhatsApp & SMS Alerts Funnel",
    extraWeeks: 0.5,
    icon: Bell,
  },
  {
    id: "dashboard",
    name: "Interactive Admin Analytics & Metric Reports",
    extraWeeks: 0.5,
    icon: BarChart3,
  },
  {
    id: "qa-testing",
    name: "Automated Playwright/Selenium CI/CD Test Suite",
    extraWeeks: 0.5,
    icon: TestTube2,
  },
];

export default function SaaSEstimator() {
  const [selectedType, setSelectedType] = useState<string>("saas");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "payments",
    "dashboard",
  ]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const currentType = projectTypes.find((t) => t.id === selectedType)!;
  const extraWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find((f) => f.id === featId);
    return acc + (feat ? feat.extraWeeks : 0);
  }, 0);

  const totalWeeksMin = Math.round(currentType.baseWeeks + extraWeeks);
  const totalWeeksMax = totalWeeksMin + 2;

  const handleWhatsAppQuote = () => {
    const selectedFeatureNames = selectedFeatures
      .map((fid) => featureOptions.find((f) => f.id === fid)?.name)
      .filter(Boolean)
      .join("\n• ");

    const text = `Hi MOMO IT Technologies team! I generated a SaaS & Web Product Estimate on your website:
• Project Type: ${currentType.name}
• Estimated Timeline: ${totalWeeksMin} to ${totalWeeksMax} Weeks
• Key Features Selected:
• ${selectedFeatureNames}

Please share a detailed architecture proposal and ballpark quote.`;

    const url = `https://wa.me/918639831132?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-200/60 mb-3">
            <Calculator className="w-3.5 h-3.5 text-brand-600" />
            Interactive Scope &amp; Timeline Calculator
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight">
            Estimate Your Web &amp; SaaS Product
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Select your platform and features to get instant estimated delivery timelines and recommended architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                1. Select Platform Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? "bg-brand-50/50 border-brand-500 ring-2 ring-brand-500/20 shadow-sm"
                          : "bg-gray-50/60 border-gray-200 hover:border-gray-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isSelected
                              ? "bg-brand-500 text-white shadow-sm"
                              : "bg-white text-gray-700 border border-gray-200"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-brand-600" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-navy-950">{type.name}</div>
                        <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                          {type.subtitle}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Features Toggles */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                2. Key Capabilities &amp; Architecture Modules
              </label>
              <div className="space-y-2">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? "bg-emerald-50/40 border-emerald-300 text-navy-950"
                          : "bg-gray-50/40 border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isChecked
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">
                          {feat.name}
                        </span>
                      </div>
                      <div className="shrink-0 ml-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-emerald-600 border-emerald-600 text-white"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Assessment & CTA */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-navy-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-navy-800">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                Scope Summary
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                <Sparkles className="w-3 h-3" /> Agile Sprints
              </span>
            </div>

            {/* Estimated Delivery Timeline */}
            <div className="p-4 rounded-2xl bg-navy-900/90 border border-navy-800">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-1">
                <Clock className="w-4 h-4 text-brand-400" />
                <span>Estimated Delivery Window:</span>
              </div>
              <div className="text-3xl font-extrabold text-white">
                {totalWeeksMin} – {totalWeeksMax} Weeks
              </div>
              <p className="text-[11px] text-gray-400 mt-1">
                From kickoff to production deployment with full QA verification.
              </p>
            </div>

            {/* Recommended Modern Tech Stack */}
            <div className="p-4 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-2">
              <div className="text-xs font-bold text-gray-400">
                Recommended Architecture:
              </div>
              <div className="text-xs font-mono font-medium text-brand-300 bg-navy-950 p-2.5 rounded-xl border border-navy-800">
                {currentType.defaultStack}
              </div>
              <ul className="space-y-1.5 text-[11px] text-gray-300 pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>100% Full Source Code Ownership &amp; IP Rights</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Sub-second load times (95+ Google Core Web Vitals)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Direct communication with senior engineers</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-500/30 transition-all cursor-pointer"
              >
                <span>Get Proposal &amp; Quote on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-gray-400">
                ⚡ Direct chat with our Kadapa engineering leads. No spam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Layers,
  Database,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Printer,
  FileSpreadsheet,
  Receipt,
  MessageCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Software & Custom ERP Systems | MOMO IT Technologies",
  description:
    "MOMO IT Technologies builds custom business ERP systems, thermal POS billing software, GST invoicing, and real-time inventory management platforms.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/business-software",
  },
  openGraph: {
    title: "Business Software & Custom ERP Systems | MOMO IT Technologies",
    description:
      "Replace chaotic spreadsheets with custom business software. High-speed thermal POS printing (58mm/80mm), automated GST billing, multi-store inventory, and WhatsApp notifications.",
    url: "https://www.momoittechnologies.com/services/business-software",
  },
};

const erpFeatures = [
  {
    icon: Receipt,
    title: "High-Speed POS & Thermal Printing",
    desc: "ESC/POS driver integration for 58mm and 80mm thermal receipt printers. Print bills in under 1 second with dynamic UPI QR codes and GST breakdowns.",
  },
  {
    icon: Database,
    title: "Real-Time Multi-Store Inventory",
    desc: "Track stock movements, low-stock threshold alerts, batch expiry dates, and barcode scanning across multiple retail counters or warehouses.",
  },
  {
    icon: FileSpreadsheet,
    title: "Automated GST Invoicing & Reports",
    desc: "Generate GSTR-1 and GSTR-3B compliant sales reports, automated PDF bill generators, and exportable financial ledgers for accountants.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Staff Access & Audit Logs",
    desc: "Ensure cashiers, store managers, and accountants see only what they need with strict permission levels and timestamped activity audit trails.",
  },
];

const faqs = [
  {
    q: "Why should we use custom ERP software instead of generic Tally or Excel?",
    a: "Excel sheets lead to data corruption, inventory discrepancies, and zero live access from mobile phones. Off-the-shelf ERPs charge high annual maintenance fees and force rigid workflows. MOMO IT custom business software matches your exact counter operations, prints bills instantly, and gives you real-time sales visibility on your phone.",
  },
  {
    q: "Does your software support thermal printers and barcode scanners?",
    a: "Yes. Our systems natively support all major USB, Bluetooth, and LAN thermal receipt printers (TVS, Epson, Xprinter) and standard 1D/2D wireless barcode scanners.",
  },
];

export default function BusinessSoftwarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/business-software#service",
        name: "Custom Business ERP & Billing Software",
        serviceType: "Business Software Development",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        description:
          "Custom ERP software, POS billing engines, thermal receipt printing, and real-time inventory management by MOMO IT Technologies.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.momoittechnologies.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.momoittechnologies.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Business Software",
            item: "https://www.momoittechnologies.com/services/business-software",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="pt-32 sm:pt-36 md:pt-40 pb-20 bg-surface-light min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
            <li>
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold" aria-current="page">
              Business Software
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200/60">
            <Layers className="w-3.5 h-3.5" />
            Operational ERP &amp; Billing Systems
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            Custom Business ERP &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
              Smart Billing Software
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Take complete control of your store and warehouse operations. High-speed thermal POS printing, dynamic UPI QR billing, and real-time inventory tracking.
          </p>

          {/* AEO Quick-Answer */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-cyan-200/80 shadow-sm text-left max-w-3xl mx-auto mb-8">
            <div className="text-xs font-extrabold text-cyan-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              Quick Definition for Business Leaders &amp; AI Search
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Custom Business ERP Software</strong> is a centralized digital management system tailored to an enterprise&apos;s specific sales, invoicing, inventory, and staff operations. MOMO IT Technologies builds web and desktop-connected ERP platforms that integrate thermal printing, GST tax compliance, and automated WhatsApp receipts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Schedule Live ERP Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20see%20a%20demo%20of%20your%20billing%20software."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {erpFeatures.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:border-cyan-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">{c.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 text-center tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-navy-950 flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-card text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-3">
            Streamline Your Business Operations Today
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Book a 1-on-1 demo to see how MOMO IT business software solves your specific billing and inventory bottlenecks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
            >
              Get Free Custom ERP Quote
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm sm:text-base transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

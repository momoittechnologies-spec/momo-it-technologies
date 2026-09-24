import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Database,
  Layers,
  Sparkles,
  Zap,
  Printer,
  Smartphone,
  ShieldCheck,
  Search,
  MessageCircle,
  HelpCircle,
  FileSpreadsheet,
  Receipt,
  Store,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Business & ERP Software Development in Kadapa | MOMO IT Technologies",
  description:
    "Looking for custom business software, ERP, billing, or inventory software in Kadapa? MOMO IT Technologies builds tailored business management systems with GST invoicing, thermal printing, and WhatsApp automation.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/business-software-kadapa",
  },
  openGraph: {
    title: "Custom Business & ERP Software Development in Kadapa | MOMO IT Technologies",
    description:
      "Kadapa's #1 custom business software and ERP development company. Replace messy spreadsheets and expensive subscriptions with tailor-made billing, inventory, and management systems.",
    url: "https://www.momoittechnologies.com/services/business-software-kadapa",
  },
};

const problemsSolved = [
  {
    title: "Messy Manual Ledgers & Spreadsheet Chaos",
    desc: "Managing sales, pending balances, supplier bills, and inventory in Excel or paper books leads to costly calculation errors, unaccounted stock shrinkage, and tax reconciliation delays.",
  },
  {
    title: "Rigid, Generic Software That Doesn't Fit Your Workflow",
    desc: "Off-the-shelf software packages force your team into foreign workflows with dozens of useless buttons, recurring monthly seat fees, and zero support for your specific business logic.",
  },
  {
    title: "Slow Billing Counters & Long Customer Queues",
    desc: "When retail or wholesale billing software crashes or takes 20 clicks to complete a transaction, customers get frustrated. Our systems provide sub-second keyboard-only checkout and instant thermal receipt printing.",
  },
  {
    title: "Zero Real-Time Visibility When Away From Office",
    desc: "Business owners in Kadapa cannot see live daily sales, collection summaries, or low-stock alerts when traveling. Our cloud-connected dashboards provide instant mobile insights anywhere, anytime.",
  },
];

const servicesIncluded = [
  {
    icon: Receipt,
    title: "Custom GST Billing & Point of Sale (POS)",
    desc: "Ultra-fast POS checkout, Bluetooth/USB ESC/POS thermal printing, barcode scanning, split payments (Cash, UPI, Card), and automated GST-compliant invoice generation.",
  },
  {
    icon: Boxes,
    title: "Inventory & Warehouse Stock Control",
    desc: "Real-time stock valuation, batch/expiry tracking, low-stock WhatsApp warnings, multi-location transfers, and automated supplier reorder calculations.",
  },
  {
    icon: Store,
    title: "Tailored ERP & Operations Software",
    desc: "Integrated business modules connecting sales orders, purchase ledgers, employee attendance, profit-and-loss reports, and customer loyalty programs.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Automated Receipts & Notifications",
    desc: "Automatically send PDF invoices, payment receipts, delivery dispatches, and outstanding payment reminders directly to customer and vendor WhatsApp numbers.",
  },
];

const technologies = [
  { name: "Next.js 15 & React 19", role: "Lightning-fast desktop and tablet browser interface" },
  { name: "TypeScript & Node.js", role: "Resilient business logic engine and local device bridges" },
  { name: "PostgreSQL & SQLite", role: "Hybrid online cloud database with offline-first resilience" },
  { name: "ESC/POS Thermal Protocol", role: "Direct thermal receipt printer and cash drawer integration" },
  { name: "WhatsApp Cloud Business API", role: "Automated digital invoice and alert dispatches" },
];

const processSteps = [
  { step: "01", title: "On-Site Business Workflow Audit", desc: "We visit your facility or store in Kadapa to map your exact order lifecycle, billing flow, and reporting needs." },
  { step: "02", title: "Custom Architecture & UI Mockup", desc: "We design straightforward, clutter-free screens optimized for fast keyboard input and minimal staff training." },
  { step: "03", title: "Development & Hardware Testing", desc: "Engineering the database, integrating your barcode scanners, thermal receipt printers, and weigh scales." },
  { step: "04", title: "Data Migration & Staff Training", desc: "Importing existing customer balances, product lists, and training your cashiers and store managers in Kadapa." },
  { step: "05", title: "Go-Live & Local Support", desc: "Live deployment with on-ground technical support and continuous data backups so your shop never stops running." },
];

const faqs = [
  {
    q: "Why should we build custom business software instead of using Tally or Vyapar?",
    a: "While generic software like Tally is good for general accounting, it cannot automate your unique business workflows—such as custom job work tracking, kitchen order ticketing, automated WhatsApp bill delivery, or multi-counter speed billing. Custom software built by MOMO IT Technologies matches your exact business model with no recurring per-user fees and full software ownership.",
  },
  {
    q: "Will the software work if our Kadapa broadband internet disconnects?",
    a: "Yes! We architect our business and POS software with offline-first capabilities. Cashiers can continue scanning, generating receipts, and accepting cash or offline payments without internet. When the connection resumes, transactions synchronize seamlessly with your cloud dashboard.",
  },
  {
    q: "Can the software connect with our existing thermal receipt printers and barcode scanners?",
    a: "Absolutely. Our systems natively support standard 58mm and 80mm ESC/POS thermal printers (TVS, Epson, Posiflex, NGX), USB and wireless 2D barcode scanners, cash drawers, and electronic weighing machines.",
  },
  {
    q: "Can we view live sales and daily collection reports on our mobile phone?",
    a: "Yes. Every business system includes a secure mobile-optimized executive dashboard. You can check daily gross sales, cash-in-hand, UPI collections, top-selling items, and pending receivables from anywhere in the world.",
  },
  {
    q: "What local technical support is provided in Kadapa?",
    a: "Unlike remote vendors who put you on hold for days, our engineering office is physically located at 4/106, Krishnapuram in Kadapa. We provide rapid phone, WhatsApp, and on-site support to keep your operations running smoothly.",
  },
];

export default function BusinessSoftwareKadapaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.momoittechnologies.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.momoittechnologies.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Custom Business & ERP Software Kadapa",
            "item": "https://www.momoittechnologies.com/services/business-software-kadapa"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Custom Business & ERP Software Development in Kadapa",
        "serviceType": "Enterprise Resource Planning & Business Automation Software",
        "description": "Tailor-made business ERP, POS billing software, inventory tracking systems, and GST automation for enterprises and retail businesses in Kadapa, Andhra Pradesh.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "MOMO IT TECHNOLOGIES",
          "image": "https://www.momoittechnologies.com/logo.png",
          "telephone": "+918639831132",
          "email": "momoit.technologies@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4/106, Krishnapuram",
            "addressLocality": "Kadapa",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "516005",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.4673,
            "longitude": 78.8242
          },
          "url": "https://www.momoittechnologies.com"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Kadapa"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Andhra Pradesh"
          },
          {
            "@type": "Country",
            "name": "India"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Business Software Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom ERP & Operations Systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Point of Sale (POS) & GST Billing Software"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Inventory & Multi-Store Stock Management"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-32 sm:pt-36 pb-20 bg-surface-light min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
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
                Business &amp; ERP Software Kadapa
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-50 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Kadapa&apos;s Custom Business Software Architects
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
              Custom Business &amp; ERP Software Development in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-600">
                Kadapa, Andhra Pradesh
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
              Replace rigid off-the-shelf software and chaotic manual spreadsheets with tailor-made business management systems. MOMO IT Technologies builds high-speed POS billing, inventory controls, GST invoicing, and custom ERP systems engineered specifically for Kadapa enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies,%20I%20want%20to%20automate%20my%20business%20in%20Kadapa%20with%20custom%20software."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book On-Site Demo on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm transition-all"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Section: Problems Solved */}
          <div className="mb-14">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Operational Friction We Eliminate
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Why Kadapa Businesses Outgrow Generic Software
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {problemsSolved.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-navy-950 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Core Features */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <div className="max-w-2xl mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Custom Modules
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Engineered for Your Exact Business Workflow
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                No unnecessary buttons. Every screen is custom designed around your real operational steps, speeding up cashier and warehouse productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesIncluded.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-surface-light border border-gray-100 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-navy-950 mb-1">{srv.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{srv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Technology & Hardware Integration */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-14">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                Hardware &amp; Software Compatibility
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Seamless Integration with Your Store Equipment
              </h2>
              <p className="text-sm text-gray-300 mt-2">
                We connect directly with thermal printers, barcode scanners, electronic weighing scales, and cloud databases without requiring expensive proprietary hardware.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-sm font-bold text-teal-300">{tech.name}</div>
                  <div className="text-xs text-gray-300 mt-1">{tech.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: 5-Step Process */}
          <div className="mb-14">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Implementation Blueprint
              </h3>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                How We Deploy Software Into Your Kadapa Business
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((stp, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black text-brand-600 mb-2">{stp.step}</div>
                    <h3 className="text-sm font-bold text-navy-950 mb-1.5">{stp.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{stp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Live Local Client Case Study */}
          <div className="bg-gradient-to-r from-emerald-50 via-white to-brand-50 border border-gray-200/80 rounded-3xl p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Live Kadapa Client Case Study</div>
              <h3 className="text-2xl font-extrabold text-navy-950">Vijaya&apos;s Yummy Food Cloud POS &amp; Kitchen System</h3>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Integrated an offline-first cashier terminal with automated thermal ESC/POS bill printing, live kitchen order displays, and direct WhatsApp customer receipts in Kadapa.
              </p>
            </div>
            <Link
              href="/case-studies/vijayas-yummy-food"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs sm:text-sm shrink-0 transition-all shadow-md"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Section: FAQ */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
              Frequently Asked Questions: Business Software in Kadapa
            </h2>
            <div className="space-y-6 mt-8">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-base font-bold text-navy-950 mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Services Internal Links */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200/80 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
              Explore Related Technology Services
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/services/software-development-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Software Development Kadapa →
              </Link>
              <Link href="/services/web-development-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Web Development Kadapa →
              </Link>
              <Link href="/services/saas-development-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                SaaS Product Development Kadapa →
              </Link>
              <Link href="/kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200 transition-colors">
                Kadapa Office &amp; Engineering Center →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Code2,
  Database,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Server,
  Cpu,
  MessageCircle,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Development Company in Kadapa | MOMO IT Technologies",
  description:
    "MOMO IT Technologies is a premier software development company in Kadapa. We engineer custom enterprise software, backend APIs, billing systems, and cloud databases for growing businesses.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/software-development-kadapa",
  },
  openGraph: {
    title: "Software Development Company in Kadapa | MOMO IT Technologies",
    description:
      "Custom software engineering firm in Kadapa, AP. Scalable cloud architectures, Java Spring Boot & Node.js backends, secure multi-tenant databases, and enterprise automation.",
    url: "https://www.momoittechnologies.com/services/software-development-kadapa",
  },
};

const problemsSolved = [
  {
    title: "Outgrowing Manual Excel Sheets & Paper Registers",
    desc: "Businesses in Kadapa often hit growth ceilings when inventory, orders, and customer accounts are scattered across manual books, leading to lost revenue and billing discrepancies.",
  },
  {
    title: "Expensive Off-The-Shelf Software That Doesn't Fit",
    desc: "Generic commercial software forces you to change how your business operates, charges excessive recurring monthly licenses, and lacks custom features you actually need.",
  },
  {
    title: "Data Silos & No Real-Time Operations Visibility",
    desc: "When sales, accounts, warehouse, and management operate on disconnected systems, business owners can't make fast data-driven decisions.",
  },
  {
    title: "System Crashes & Unreliable Security",
    desc: "Poorly built custom software crashes during peak demand, exposes customer data, or lacks daily automated cloud backups.",
  },
];

const softwareCapabilities = [
  {
    icon: Database,
    title: "Custom ERP & Operational Systems",
    desc: "Centralized platforms integrating inventory, purchase orders, customer ledgers, staff workflows, and automated GST-compliant invoicing.",
  },
  {
    icon: Server,
    title: "Backend APIs & Microservices Architecture",
    desc: "High-throughput RESTful and GraphQL APIs engineered with Java Spring Boot, Node.js, and PostgreSQL for rock-solid reliability under heavy loads.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Tenant SaaS & Role-Based Access Control",
    desc: "Enterprise security architecture featuring granular permissions (Owner, Manager, Cashier, Auditor), encrypted sessions, and multi-tenant isolation.",
  },
  {
    icon: Zap,
    title: "Hardware & Device Integration",
    desc: "Direct integration with thermal printers (ESC/POS), barcode scanners, biometric devices, and UPI dynamic QR code terminals.",
  },
];

const technologies = [
  { name: "Java 21 & Spring Boot 3", role: "High-concurrency enterprise backend engine" },
  { name: "Node.js & TypeScript", role: "Fast asynchronous API microservices" },
  { name: "PostgreSQL & Redis", role: "ACID-compliant relational storage and sub-millisecond caching" },
  { name: "Docker & Kubernetes", role: "Containerized zero-downtime deployment pipelines" },
  { name: "AWS & Supabase Cloud", role: "Scalable cloud infrastructure with automated snapshots" },
];

const processSteps = [
  { step: "01", title: "Architecture Blueprinting", desc: "Detailed entity-relationship modeling, database schema planning, API contract design, and security audit." },
  { step: "02", title: "Core Engine Engineering", desc: "Building the robust backend data models, business logic validations, and automated transaction management." },
  { step: "03", title: "Frontend Dashboard Integration", desc: "Developing clean, intuitive administrative portals with fast search, filters, and real-time live reporting." },
  { step: "04", title: "Stress & Load Testing", desc: "Simulating concurrent users, peak transaction volumes, and failover scenarios to guarantee zero downtime." },
  { step: "05", title: "Deployment & Onsite Staff Training", desc: "Production rollout with zero data loss, staff operational training, and dedicated monitoring." },
];

const faqs = [
  {
    q: "Why should a Kadapa business choose custom software over ready-made tools?",
    a: "Ready-made software charges perpetual per-user subscriptions and forces you into rigid workflows that don't match your business. Custom software developed by MOMO IT Technologies is 100% owned by you, customized to your exact operational requirements, scales indefinitely, and incurs zero monthly licensing penalties.",
  },
  {
    q: "How do you ensure our business data is safe and backed up?",
    a: "All software we engineer includes automated daily cloud backups, SSL/TLS end-to-end encryption, strict role-based access control (RBAC), and database-level transaction integrity to prevent accidental data corruption or loss.",
  },
  {
    q: "Can your custom software integrate with our existing printers and accounting tools?",
    a: "Yes. We specialize in hardware and API integrations, including thermal billing printers, barcode scanners, Tally export, SMS/WhatsApp gateways, and automated UPI payment collection.",
  },
  {
    q: "Where is MOMO IT Technologies based, and can we meet in person in Kadapa?",
    a: "Our permanent office is located at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa. Business owners are always welcome to schedule an in-person discovery consultation to review prototypes and discuss software requirements.",
  },
];

export default function SoftwareDevelopmentKadapaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Software Development in Kadapa",
    provider: {
      "@type": "LocalBusiness",
      name: "MOMO IT TECHNOLOGIES",
      url: "https://www.momoittechnologies.com",
      telephone: "+91-86398-31132",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4/106, Chowdeswari Temple Lane, Krishnapuram",
        addressLocality: "Kadapa",
        addressRegion: "Andhra Pradesh",
        postalCode: "516003",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Kadapa",
    },
    description:
      "Enterprise custom software development company in Kadapa offering scalable backend engineering, ERP platforms, billing systems, and cloud databases.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-surface-light min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-brand-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-navy-950 font-bold">Software Development Kadapa</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Code2 className="w-3.5 h-3.5" />
                <span>Enterprise Engineering · Kadapa, AP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
                Software Development Company in Kadapa
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                MOMO IT TECHNOLOGIES designs, architects, and deploys custom software solutions, high-throughput cloud backends, and business automation platforms built to solve operational bottlenecks for businesses in Kadapa and beyond.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-gray-100">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Consult Our Software Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20would%20like%20to%20discuss%20custom%20software%20development%20in%20Kadapa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Section: Problems Solved */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Bottlenecks We Eliminate</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Stop Losing Money on Fragmented Operations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemsSolved.map((prob, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 font-bold text-xs mt-1">
                      ✕
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-950 mb-1">{prob.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{prob.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Capabilities */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Core Capabilities</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Custom Engineering Tailored to Your Business
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softwareCapabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 mb-2">{cap.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Tech Stack */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 mb-14 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Enterprise Standards</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-6">
              Robust Backend Technologies &amp; Cloud Architecture
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech, i) => (
                <div key={i} className="bg-navy-900/80 border border-navy-800 rounded-xl p-4">
                  <div className="text-sm font-bold text-brand-300">{tech.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{tech.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Process */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Engineering Lifecycle</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                From Database Schema to Zero-Downtime Deployment
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

          {/* Section: Case Study Callout */}
          <div className="bg-gradient-to-r from-blue-50 via-white to-brand-50 border border-gray-200/80 rounded-3xl p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">Live Kadapa Production Deployment</div>
              <h3 className="text-2xl font-extrabold text-navy-950">MANA Tours &amp; Travels Logistics Platform</h3>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                A custom multi-tier fleet management engine featuring dynamic fare calculation, customer route management, and automated WhatsApp ticketing dispatch.
              </p>
            </div>
            <Link
              href="/case-studies/mana-tours"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs sm:text-sm shrink-0 transition-all shadow-md"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Section: FAQs */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
              Frequently Asked Questions: Software Development in Kadapa
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

          {/* Related Links */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200/80 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
              Explore Related Services &amp; Location Hub
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/services/web-development-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Web Development Kadapa →
              </Link>
              <Link href="/services/qa-testing" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                QA Automation Services →
              </Link>
              <Link href="/services/business-systems" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Business &amp; ERP Systems →
              </Link>
              <Link href="/kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200 transition-colors">
                Kadapa Office Details →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

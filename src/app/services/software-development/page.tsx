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
  Check,
  X,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development Company | MOMO IT Technologies",
  description:
    "MOMO IT Technologies is a premier custom software development company engineering scalable enterprise applications, business ERPs, cloud microservices, and backend APIs for modern businesses.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/software-development",
  },
  openGraph: {
    title: "Custom Software Development Company | MOMO IT Technologies",
    description:
      "Enterprise custom software engineering. Scalable cloud architectures, Java Spring Boot & Node.js backends, secure multi-tenant databases, and automated ERP workflows.",
    url: "https://www.momoittechnologies.com/services/software-development",
  },
};

const softwareCapabilities = [
  {
    icon: Database,
    title: "Custom ERP & Operational Systems",
    desc: "Centralized platforms integrating inventory, purchase orders, customer ledgers, staff workflows, and automated GST-compliant invoicing.",
  },
  {
    icon: Server,
    title: "High-Concurrency Cloud Backends & APIs",
    desc: "Robust REST and GraphQL microservices powered by Java Spring Boot 3 and Node.js with PostgreSQL and Redis caching.",
  },
  {
    icon: Layers,
    title: "Multi-Tenant SaaS Engineering",
    desc: "Cloud platforms engineered from the ground up for multi-tenancy, with automated user billing, tenant isolation, and granular role permissions.",
  },
  {
    icon: ShieldCheck,
    title: "Legacy System Modernization",
    desc: "Decompose outdated monolithic software into agile cloud-native microservices with zero operational downtime and continuous data integrity.",
  },
  {
    icon: Zap,
    title: "Hardware & POS Peripheral Integration",
    desc: "Direct integration with ESC/POS thermal printers, barcode scanners, weight scales, and IoT sensor telemetry.",
  },
  {
    icon: Cpu,
    title: "Automated Background Jobs & Workflows",
    desc: "High-reliability batch processing, automated invoice generation, payment reconciliation, and real-time WhatsApp alert pipelines.",
  },
];

const comparisonData = [
  {
    factor: "Alignment to Business Logic",
    custom: "100% matched to your exact company operations",
    offTheShelf: "Forces you to change your workflow to fit generic software",
  },
  {
    factor: "Recurring Licensing Cost",
    custom: "Zero per-user monthly subscription fees — you own the code",
    offTheShelf: "Expensive recurring monthly fees that increase as you hire",
  },
  {
    factor: "Data Ownership & Security",
    custom: "Your private cloud database; zero third-party data lock-in",
    offTheShelf: "Vendor owns database format; high migration penalties",
  },
  {
    factor: "Integration Flexibility",
    custom: "Directly connect to any local payment gateway, POS, or ERP",
    offTheShelf: "Restricted to pre-approved, expensive app marketplaces",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Domain Analysis & System Blueprint",
    desc: "We dissect your operational workflows, audit database requirements, and draft complete entity-relationship diagrams (ERDs).",
  },
  {
    step: "02",
    title: "Architecture & Database Design",
    desc: "Structuring clean domain microservices, normalized relational schemas (PostgreSQL), and role-based security layers.",
  },
  {
    step: "03",
    title: "Agile Sprints & Automated QA",
    desc: "Modular sprint delivery with automated integration testing (Selenium, RestAssured) ensuring every release is production-ready.",
  },
  {
    step: "04",
    title: "Cloud Deployment & Staff Training",
    desc: "Zero-downtime deployment, continuous automated database backups, and hands-on staff onboarding for your internal teams.",
  },
];

const faqs = [
  {
    q: "Why should a business choose custom software over off-the-shelf SaaS?",
    a: "Off-the-shelf software charges expensive per-seat monthly subscription fees, restricts custom workflow integrations, and creates vendor lock-in. Custom software engineered by MOMO IT Technologies is a permanent business asset that you fully own, tailored specifically to eliminate your operational bottlenecks.",
  },
  {
    q: "What technologies does MOMO IT Technologies use for software engineering?",
    a: "We engineer enterprise backends using Java 21, Spring Boot 3, Node.js, and Python, paired with PostgreSQL, Supabase, and Redis for high-concurrency data storage. Our frontends are powered by Next.js 15, React 19, and Google Flutter for mobile apps.",
  },
  {
    q: "How much does custom software development cost?",
    a: "Custom software project pricing starts around ₹35,000 for focused business management tools (e.g. customized billing and inventory trackers) and scales to ₹1,50,000 – ₹5,00,000+ for comprehensive multi-department ERP systems and SaaS platforms.",
  },
  {
    q: "Who owns the intellectual property and source code?",
    a: "You do. Upon project completion and payment, 100% of the proprietary source code, database architectures, and deployment credentials belong entirely to your company.",
  },
  {
    q: "Where is MOMO IT Technologies based?",
    a: "Our permanent engineering office is located at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, Andhra Pradesh — 516003. We serve clients across Andhra Pradesh, South India, and internationally.",
  },
];

export default function SoftwareDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/software-development#service",
        name: "Custom Software Development Services",
        serviceType: "Software Development",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "State", name: "Andhra Pradesh" },
        ],
        description:
          "Enterprise custom software development, cloud ERP billing systems, backend API architectures, and business automation platforms engineered by MOMO IT Technologies.",
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
            name: "Software Development",
            item: "https://www.momoittechnologies.com/services/software-development",
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
        {/* Breadcrumb */}
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
              Software Development
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
            <Code2 className="w-3.5 h-3.5" />
            Core Enterprise Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            Custom Software Development &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-600 to-indigo-700">
              Enterprise Business Systems
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Replace chaotic spreadsheets and inflexible commercial software with bespoke digital platforms built precisely around your operational workflows.
          </p>

          {/* AEO Quick-Answer Definition Box */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-blue-200/80 shadow-sm text-left max-w-3xl mx-auto mb-8">
            <div className="text-xs font-extrabold text-blue-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Quick Definition for Business Leaders &amp; AI Search
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Custom Software Development</strong> is the creation of tailor-made application software engineered specifically to automate a company&apos;s proprietary business processes, inventory tracking, financial billing, and data workflows. Unlike off-the-shelf software, custom software provides 100% intellectual property ownership, zero recurring user licenses, and infinite scaling flexibility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20discuss%20a%20custom%20software%20project."
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Enterprise Engineering Capabilities
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              From high-concurrency microservices to integrated hardware printing engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareCapabilities.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">{c.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Matrix */}
        <div className="mb-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Strategic Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-3">
              Custom Software vs Off-the-Shelf Commercial Packages
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <th className="py-3 px-4">Decision Criterion</th>
                  <th className="py-3 px-4 text-blue-700 bg-blue-50/50 rounded-t-lg">MOMO IT Custom Software</th>
                  <th className="py-3 px-4 text-gray-600">Standard SaaS / Generic Packages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-navy-950">{row.factor}</td>
                    <td className="py-4 px-4 text-emerald-800 font-medium bg-blue-50/20">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.custom}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.offTheShelf}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4-Step Engineering Lifecycle */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Our 4-Stage Software Engineering Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Iterative, milestone-governed development with zero downtime risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl font-black text-blue-600/20 mb-3">{s.step}</div>
                <h3 className="text-base font-bold text-navy-950 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Proof Banner */}
        <div className="mb-20 bg-gradient-to-br from-navy-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-950/60 border border-brand-800 px-3 py-1 rounded-full">
              Production Case Study
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              MANA Tours &amp; Travels: Automated Dispatch &amp; Fleet ERP
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Replaced manual phone call scheduling and paper driver logs with a real-time fleet reservation engine, dynamic fare computation, and instant WhatsApp booking notifications.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/case-studies/mana-tours"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-xs sm:text-sm transition-all"
              >
                <span>View Logistics Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/software-development-kadapa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/20 transition-all"
              >
                <span>Kadapa Software Desk Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Expert Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-navy-950 flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
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
            Build Software That Gives You an Unfair Advantage
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Contact MOMO IT Technologies to review your requirements, design an architecture proposal, and get a fixed-price delivery plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
            >
              Get Free Project Estimate
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm sm:text-base transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

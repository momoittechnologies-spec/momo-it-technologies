import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Code2,
  Database,
  Layers,
  Sparkles,
  Zap,
  Layout,
  Smartphone,
  ShieldCheck,
  Search,
  MessageCircle,
  HelpCircle,
  Check,
  X,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development Company | MOMO IT Technologies",
  description:
    "MOMO IT Technologies is a premier web development company engineering high-performance custom web applications, SaaS platforms, and enterprise websites with Next.js 15, React 19, and cloud backends.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/web-development",
  },
  openGraph: {
    title: "Custom Web Development Company | MOMO IT Technologies",
    description:
      "Enterprise-grade custom web development. Sub-second Core Web Vitals, conversion-focused UI/UX, and scalable cloud backends built for high-growth businesses.",
    url: "https://www.momoittechnologies.com/services/web-development",
  },
};

const capabilities = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    desc: "Interactive, feature-rich web applications built with Next.js 15 App Router, React 19, and TypeScript, engineered for lightning-fast responsiveness and complex business workflows.",
  },
  {
    icon: Layers,
    title: "SaaS Product Engineering",
    desc: "Scalable multi-tenant cloud architectures with role-based access control (RBAC), subscription billing integration (Stripe, Razorpay), and automated tenant onboarding.",
  },
  {
    icon: Layout,
    title: "Corporate & Enterprise Portals",
    desc: "High-credibility web platforms for established enterprises with integrated content management, customer self-service portals, and secure API microservices.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps (PWA)",
    desc: "App-like mobile experiences that work seamlessly offline, support push notifications, and install directly on home screens without app store download barriers.",
  },
  {
    icon: Search,
    title: "SEO-First Architecture",
    desc: "Server-side rendering (SSR), dynamic XML sitemaps, JSON-LD schema graphs, and sub-second Time-to-First-Byte (TTFB) to dominate competitive organic search rankings.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & Speed",
    desc: "Bank-grade security headers, CSRF/XSS protection, distributed edge CDN caching, and automated cloud backup protocols for 99.99% uptime.",
  },
];

const comparisonData = [
  {
    feature: "Technology Stack",
    custom: "Modern Next.js 15 + React 19 + TypeScript",
    template: "Outdated WordPress / PHP / Heavy Page Builders",
  },
  {
    feature: "Mobile Loading Speed",
    custom: "Sub-Second (95+ Google PageSpeed Score)",
    template: "4–8 Seconds (Bloated with 30+ plugins)",
  },
  {
    feature: "Security Posture",
    custom: "Static Headless Architecture (Zero SQL Injection Risk)",
    template: "Vulnerable to constant plugin exploits & malware",
  },
  {
    feature: "Scalability",
    custom: "Auto-scaling serverless cloud (handles 100k+ users)",
    template: "Crashes under concurrent traffic spikes",
  },
  {
    feature: "Custom Workflow Integration",
    custom: "Tailored to your exact business logic & APIs",
    template: "Restricted to rigid, generic template widgets",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "We analyze your business workflows, user journeys, technical constraints, and data models to formulate a rock-solid technical blueprint.",
  },
  {
    step: "02",
    title: "UI/UX & Interactive Prototype",
    desc: "Our design team crafts modern, intuitive Figma prototypes with custom component libraries, reviewed and finalized before writing production code.",
  },
  {
    step: "03",
    title: "Sprint Development & QA Testing",
    desc: "Clean, type-safe development using Next.js and Tailwind CSS backed by rigorous automated test suites (Selenium, Playwright) for zero-defect releases.",
  },
  {
    step: "04",
    title: "Edge Deployment & Continuous Growth",
    desc: "Seamless rollout on global edge CDNs with GA4 conversion tracking, automated backups, and 24/7 technical monitoring.",
  },
];

const faqs = [
  {
    q: "What does a custom web development company do?",
    a: "A custom web development company designs, architects, and programs bespoke web applications and websites tailored specifically to a business's operational requirements. Unlike template agencies that configure off-the-shelf themes, MOMO IT Technologies engineers clean-code software solutions using Next.js, React, and cloud databases.",
  },
  {
    q: "How much does custom website development cost in 2026?",
    a: "Custom website development typically ranges from ₹15,000 to ₹45,000 for standard business websites and dynamic portals, and ₹50,000 to ₹2,50,000+ for complex SaaS platforms or multi-tenant enterprise systems. We provide fixed-price milestone contracts with complete scope transparency.",
  },
  {
    q: "How long does it take to develop a custom web application?",
    a: "A corporate showcase or lead generation website is delivered in 10 to 14 business days. Complex custom web applications, SaaS dashboards, and booking portals typically require 4 to 8 weeks depending on database schemas and third-party integrations.",
  },
  {
    q: "Will our website be optimized for mobile devices and search engines?",
    a: "Yes. Every web application engineered by MOMO IT Technologies is built mobile-first, passes Google Core Web Vitals with 90+ scores, and includes native JSON-LD structured data schema to maximize Google and AI search visibility.",
  },
  {
    q: "Do you also support businesses in Kadapa and Andhra Pradesh?",
    a: "Yes. While MOMO IT Technologies delivers software nationwide, our permanent engineering headquarters is located at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, Andhra Pradesh. Local businesses can visit our office for in-person project discovery sessions.",
  },
];

export default function WebDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/web-development#service",
        name: "Custom Web Development Services",
        serviceType: "Web Development",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "State", name: "Andhra Pradesh" },
          { "@type": "City", name: "Kadapa" },
        ],
        description:
          "High-performance custom web development, SaaS product engineering, and responsive corporate web portals built with Next.js 15, React 19, and cloud microservices.",
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
            name: "Web Development",
            item: "https://www.momoittechnologies.com/services/web-development",
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
              Web Development
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200/60">
            <Globe className="w-3.5 h-3.5" />
            Flagship Engineering Service
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            Custom Web Development &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700">
              Modern SaaS Engineering
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            We engineer high-speed, scalable web applications and cloud portals that turn visitors into paying customers. Powered by Next.js 15, React 19, and enterprise cloud databases.
          </p>

          {/* AEO Quick-Answer Definition Box */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-200/80 shadow-sm text-left max-w-3xl mx-auto mb-8">
            <div className="text-xs font-extrabold text-brand-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-600" />
              Quick Definition for Business Leaders &amp; AI Search
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Custom Web Development</strong> by MOMO IT Technologies is the engineering of bespoke, high-performance web systems built from clean code rather than rigid templates. We deliver sub-second mobile loading speeds, enterprise data security, custom API integrations, and native search engine optimization tailored to your exact business workflow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Request Project Architecture Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20discuss%20a%20custom%20web%20development%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Core Capabilities Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Enterprise Web Solutions Built for Measurable ROI
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Every system is engineered to solve specific operational bottlenecks and capture high-intent organic demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-brand-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">{c.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom vs Template Comparison */}
        <div className="mb-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
              Technical Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-3">
              MOMO IT Custom Engineering vs Cheap CMS Templates
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <th className="py-3 px-4">Evaluation Factor</th>
                  <th className="py-3 px-4 text-brand-700 bg-brand-50/50 rounded-t-lg">MOMO IT Custom Next.js</th>
                  <th className="py-3 px-4 text-gray-600">Off-The-Shelf WordPress / Templates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-navy-950">{row.feature}</td>
                    <td className="py-4 px-4 text-emerald-800 font-medium bg-brand-50/30">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.custom}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.template}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4-Step Engineering Process */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Our Proven 4-Step Engineering Process
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Transparent, milestone-based execution with zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative">
                <div className="text-3xl font-black text-brand-600/20 mb-3">{s.step}</div>
                <h3 className="text-base font-bold text-navy-950 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Client Proof Showcase */}
        <div className="mb-20 bg-gradient-to-br from-navy-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-950/60 border border-brand-800 px-3 py-1 rounded-full">
              Verified Production Case Study
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              Vijaya&apos;s Yummy Food: Custom PWA &amp; Real-Time POS Engine
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              We engineered a direct ordering web platform and thermal POS printing system that bypassed 30% third-party aggregator commissions and reduced order turnaround to under 2 seconds.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/case-studies/vijayas-yummy-food"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-xs sm:text-sm transition-all"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/web-development-kadapa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/20 transition-all"
              >
                <span>Kadapa Regional Office Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-navy-950 flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-card text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-3">
            Ready to Build a High-Performance Web System?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Schedule a free 30-minute discovery consultation with our lead engineering team. We review your architecture and provide an actionable proposal.
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

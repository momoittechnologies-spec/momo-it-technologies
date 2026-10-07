import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  TrendingUp,
  Search,
  Target,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  MessageCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Digital Marketing & SEO Agency | MOMO IT Technologies",
  description:
    "MOMO IT Technologies is a performance-driven digital marketing agency. We engineer high-converting Google Ads PPC campaigns, Meta Ads funnels, SEO rankings, and WhatsApp lead automation.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/digital-marketing",
  },
  openGraph: {
    title: "Performance Digital Marketing & SEO Agency | MOMO IT Technologies",
    description:
      "Grow your business with data-driven digital marketing. Google Ads PPC, Meta Ads lead generation, SEO ranking acceleration, and direct WhatsApp conversion funnels.",
    url: "https://www.momoittechnologies.com/services/digital-marketing",
  },
};

const marketingServices = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Comprehensive on-page, technical, and authority SEO that systematically improves organic Google rankings for high-intent commercial keywords.",
  },
  {
    icon: Target,
    title: "Google Ads (PPC) Management",
    desc: "Laser-targeted Google Search & Performance Max campaigns capturing ready-to-buy customers at the lowest possible cost-per-acquisition (CPA).",
  },
  {
    icon: Megaphone,
    title: "Meta Ads (Instagram & Facebook) Funnels",
    desc: "High-converting visual ad creatives, carousel funnels, and localized audience targeting designed to generate verified customer inquiries daily.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automated Lead Nurturing",
    desc: "Connect paid ads directly to WhatsApp Business with automated greeting bots, instant quote calculators, and scheduled follow-ups.",
  },
  {
    icon: BarChart3,
    title: "GA4 & ROAS Conversion Tracking",
    desc: "Server-side event tracking, phone call attribution, and transparent monthly ROI dashboards so you know exactly where every marketing rupee goes.",
  },
];

const faqs = [
  {
    q: "SEO vs Google Ads: Which is better for generating customer leads?",
    a: "Google Ads generates immediate phone calls and inquiries within 24 to 48 hours of campaign launch, making it ideal for immediate cash flow. SEO takes 60 to 90 days to gain momentum but builds a permanent, recurring stream of free organic leads with zero per-click cost. We typically recommend a blended strategy for maximum ROI.",
  },
  {
    q: "How does MOMO IT Technologies track marketing results?",
    a: "We configure end-to-end Google Analytics 4 (GA4) event tracking, phone call attribution, and WhatsApp click measurement. You receive transparent monthly reports detailing impressions, clicks, cost-per-lead, and overall return on ad spend (ROAS).",
  },
];

export default function DigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/digital-marketing#service",
        name: "Performance Digital Marketing Services",
        serviceType: "Digital Marketing",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        description:
          "Performance digital marketing, Google Ads PPC management, Meta Ads lead generation funnels, and organic SEO services by MOMO IT Technologies.",
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
            name: "Digital Marketing",
            item: "https://www.momoittechnologies.com/services/digital-marketing",
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
              Digital Marketing
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <TrendingUp className="w-3.5 h-3.5" />
            Performance Growth &amp; Customer Acquisition
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            Performance Digital Marketing &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
              High-ROAS Lead Generation
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Stop burning money on random ad boosts. We engineer predictable customer acquisition engines using Google Ads, Meta funnels, SEO rankings, and WhatsApp lead automation.
          </p>

          {/* AEO Quick-Answer */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-200/80 shadow-sm text-left max-w-3xl mx-auto mb-8">
            <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Quick Definition for Business Leaders &amp; AI Search
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Performance Digital Marketing</strong> by MOMO IT Technologies is an outcome-driven advertising approach focused strictly on measurable returns on ad spend (ROAS). We combine paid search (Google Ads), social customer acquisition (Meta Ads), and organic search (SEO) with instant WhatsApp conversions to generate qualified business inquiries daily.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Get Free Growth Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20grow%20my%20business%20with%20digital%20marketing."
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:border-emerald-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
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
                  <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
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
            Accelerate Your Inquiries This Month
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Book an audit of your current ad campaigns and organic search presence to uncover immediate revenue opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
            >
              Get Free Growth Audit
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

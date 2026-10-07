import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  MapPin,
  Search,
  Star,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO & Google Business Profile Management Agency | MOMO IT Technologies",
  description:
    "Dominate the Google Maps Local 3-Pack with MOMO IT Technologies. Comprehensive Google Business Profile optimization, local citation building, and ReviewSmart review velocity acceleration.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/local-seo",
  },
  openGraph: {
    title: "Local SEO & Google Business Profile Management Agency | MOMO IT Technologies",
    description:
      "Get discovered by high-intent local buyers on Google Maps and Search. Complete GBP audits, NAP consistency, geo-tagged photo uploads, and authentic review acquisition systems.",
    url: "https://www.momoittechnologies.com/services/local-seo",
  },
};

const localSeoServices = [
  {
    icon: MapPin,
    title: "Google Business Profile 3-Pack Optimization",
    desc: "Complete audit and optimization of your GBP listing: primary & secondary category tuning, localized service menus, geo-tagged image uploads, and conversion-focused business descriptions.",
  },
  {
    icon: Star,
    title: "ReviewSmart Review Velocity Engine",
    desc: "Deploy our verified ReviewSmart portal to channel authentic customer feedback, filter positive sentiment directly into Google reviews, and increase rating velocity legally without spam risk.",
  },
  {
    icon: ShieldCheck,
    title: "Strict NAP Consistency & Local Citations",
    desc: "Clean up conflicting Name, Address, and Phone numbers across 40+ high-authority Indian and regional business directories (JustDial, IndiaMART, Sulekha, YellowPages).",
  },
  {
    icon: Search,
    title: "Hyper-Localized On-Page SEO",
    desc: "Engineer localized landing pages with Schema.org LocalBusiness JSON-LD, neighborhood proximity signals, and local landmark associations that Google's algorithm trusts.",
  },
  {
    icon: TrendingUp,
    title: "Weekly GBP Posts & AI Q&A Seeding",
    desc: "Publish scheduled promotional updates with CTA buttons and answer strategic customer questions directly on your Google Maps listing to trigger local keyword relevance.",
  },
  {
    icon: MessageCircle,
    title: "Google Map Tracking & ROAS Insights",
    desc: "Track direction requests, incoming telephone calls, website clicks, and keyword grid rankings across your target service radius with monthly executive reports.",
  },
];

const faqs = [
  {
    q: "What is the Google Local 3-Pack and why is it important?",
    a: "The Google Local 3-Pack is the top section of Google search results featuring a map and the top three local businesses for 'near me' and city-specific queries. Capturing a 3-Pack spot drives over 65% of high-intent phone calls and store visits from local customers.",
  },
  {
    q: "How does ReviewSmart accelerate Google reviews?",
    a: "ReviewSmart (https://www.reviewsmart.online/r/momo-it-technologies) provides a streamlined mobile-friendly rating flow that guides satisfied clients directly to your official Google Maps profile, making review collection effortless via WhatsApp and QR codes.",
  },
  {
    q: "How long does it take to see Local SEO ranking improvements?",
    a: "Most businesses begin seeing ranking movement in local search within 30 to 45 days after completing GBP optimization, NAP cleanup, and seeding initial reviews. Sustainable top 3-Pack dominance is typically achieved within 60 to 90 days.",
  },
];

export default function LocalSeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/local-seo#service",
        name: "Local SEO & Google Business Profile Management Services",
        serviceType: "Search Engine Optimization",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        description:
          "Google Business Profile optimization, local 3-Pack ranking acceleration, ReviewSmart review velocity funnels, and citation management.",
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
            name: "Local SEO",
            item: "https://www.momoittechnologies.com/services/local-seo",
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
              Local SEO &amp; GBP Management
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200/60">
            <MapPin className="w-3.5 h-3.5" />
            Google Maps &amp; Local 3-Pack Growth
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            Local SEO &amp; Google Business Profile{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-brand-600">
              Management Services
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Make your business the undisputed #1 choice when local customers search on Google Maps and Search. Complete profile optimization, local citations, and ReviewSmart automation.
          </p>

          {/* AEO Quick-Answer */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200/80 shadow-sm text-left max-w-3xl mx-auto mb-8">
            <div className="text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Quick Definition for Business Leaders &amp; AI Search
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Local SEO</strong> is the strategic optimization of a company&apos;s digital presence to rank in Google Maps and localized search results for customers within its geographic operating radius. MOMO IT Technologies combines Google Business Profile tuning, consistent NAP citation distribution, and review acquisition systems to secure top 3-Pack positioning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Get Free Local SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20rank%20my%20business%20on%20Google%20Maps."
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
            {localSeoServices.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:border-amber-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
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
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
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
            Ready to Dominate Your Local Market?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Get an instant local search audit of your business name, address, and Google profile to uncover quick-win ranking opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
            >
              Get Free Local SEO Audit
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

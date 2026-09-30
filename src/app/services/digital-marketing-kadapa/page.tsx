import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Search,
  Target,
  BarChart3,
  MessageCircle,
  HelpCircle,
  Layers,
  Zap,
  Globe,
  MapPin,
  ShieldCheck,
  Building2,
  DollarSign,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Kadapa | SEO & Google Ads | MOMO IT Technologies",
  description:
    "Grow your business with Kadapa's premier digital marketing agency. We specialize in Local SEO, Google Business Profile (GMB) 3-Pack ranking, Google Ads PPC, Meta lead generation, and automated WhatsApp funnels.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/digital-marketing-kadapa",
  },
  openGraph: {
    title: "Digital Marketing & Performance SEO in Kadapa | MOMO IT Technologies",
    description:
      "Data-driven lead generation and search engine domination for businesses in Kadapa and Andhra Pradesh. Google Ads, Local SEO, and WhatsApp automation.",
    url: "https://www.momoittechnologies.com/services/digital-marketing-kadapa",
  },
};

const problemsSolved = [
  {
    title: "Invisible on Google When Customers Search in Kadapa",
    desc: "When prospects search 'best doctor in Kadapa', 'builder in Kadapa', or 'software company in Kadapa', your competitors take 90% of calls if you aren't in Google's Local 3-Pack.",
  },
  {
    title: "Wasted Money on Unfocused Ads with Zero Leads",
    desc: "Running Google or Meta ads without negative keyword pruning, conversion tracking, or dedicated landing pages results in clicks that burn cash without booking a single consultation.",
  },
  {
    title: "Slow, Non-Converting Websites That Leak Enquiries",
    desc: "Driving paid traffic to a slow, generic website loses up to 70% of potential leads. Every campaign requires high-speed, mobile-optimized landing pages with 1-click WhatsApp CTAs.",
  },
  {
    title: "Lost Leads Due to Slow Follow-Ups",
    desc: "Studies show 78% of customers buy from the first business that responds. If your inquiries sit in an email inbox for hours, you lose the deal to faster competitors.",
  },
];

const pillars = [
  {
    icon: Search,
    title: "Local SEO & Google Maps (GMB 3-Pack) Domination",
    desc: "We optimize your Google Business Profile, build local citations, manage review velocity, and execute hyper-localized on-page SEO to rank your business in the coveted Google Local 3-Pack.",
  },
  {
    icon: Target,
    title: "High-Intent Google Search & Performance Max Ads",
    desc: "Capture customers actively searching to buy today. We structure laser-focused Google Ads campaigns targeting high-intent commercial keywords with strict negative keyword filtering.",
  },
  {
    icon: Zap,
    title: "High-Converting Next.js Landing Pages (CRO)",
    desc: "We don't send ad clicks to a generic homepage. We engineer dedicated, sub-second conversion landing pages with compelling value propositions and frictionless inquiry forms.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Automation & Nurturing",
    desc: "Connect ads directly to WhatsApp. Automatically welcome leads, capture their requirements, answer FAQs, and trigger follow-up reminders to close sales in minutes.",
  },
  {
    icon: Layers,
    title: "Omnichannel Retargeting (Meta & Display)",
    desc: "Over 95% of first-time visitors don't convert immediately. We place smart retargeting pixels to gently follow interested prospects across Instagram, Facebook, and news websites.",
  },
  {
    icon: BarChart3,
    title: "Transparent GA4 Analytics & Attribution",
    desc: "Know exactly where every rupee went. We configure Google Analytics 4 and Tag Manager so you can see exact cost-per-lead, conversion channels, and campaign return on investment (ROI).",
  },
];

const industries = [
  {
    title: "Hospitals & Super-Specialty Clinics",
    desc: "Targeting patients searching for orthopedic, dental, IVF, and cardiology specialists in Kadapa and Rayalaseema with urgent appointment booking funnels.",
    badge: "Healthcare",
  },
  {
    title: "Real Estate Builders & Plots",
    desc: "Generating verified NRI and regional homebuyer leads for open plots, gated community villas, and apartment projects with virtual tour landing pages.",
    badge: "Real Estate",
  },
  {
    title: "Retail Showrooms & Jewellery",
    desc: "Driving high footfalls to physical showrooms on Seven Roads and Main Bazaar with festival Meta offer ads and Click-to-Directions campaigns.",
    badge: "Retail & Commerce",
  },
  {
    title: "Colleges & Educational Academies",
    desc: "Campus admission lead generation campaigns, entrance exam prep enrollment funnels, and student career counseling webinars across Andhra Pradesh.",
    badge: "Education",
  },
  {
    title: "B2B Manufacturers & Distributors",
    desc: "LinkedIn lead generation and Google Search Ads capturing wholesale buyers, suppliers, and commercial contractors across South India.",
    badge: "B2B Enterprise",
  },
  {
    title: "Hotels, Resorts & Tourism Fleet",
    desc: "Google Maps booking ads and tourism package lead funnels for travellers visiting Gandikota, Vontimitta, and Kadapa pilgrimage circuits.",
    badge: "Travel & Hospitality",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Market & Keyword Intelligence",
    desc: "We conduct in-depth search volume analysis for your niche in Kadapa, identify high-intent buyer keywords, and dissect top competitor ad strategies.",
  },
  {
    step: "02",
    title: "Conversion Engine & Tracking Setup",
    desc: "We deploy fast landing pages, integrate Google Tag Manager, set up Meta Pixel, and configure WhatsApp webhook routing for instant lead notifications.",
  },
  {
    step: "03",
    title: "Campaign Architecture & Launch",
    desc: "We write persuasive ad copy, design creative assets, define geo-radius boundaries, and launch targeted Google Search and Meta campaigns.",
  },
  {
    step: "04",
    title: "Negative Keyword Pruning & Bid Tuning",
    desc: "Daily campaign optimization eliminates wasteful clicks, prunes irrelevant search queries, and re-allocates ad spend to your highest-converting keywords.",
  },
  {
    step: "05",
    title: "Scale & Revenue Domination",
    desc: "Once a winning cost-per-lead is locked in, we systematically scale budgets to generate a predictable flow of inquiries week after week.",
  },
];

const packages = [
  {
    name: "Local SEO & GMB Booster",
    badge: "Organic Search Authority",
    price: "₹9,999",
    period: "per month",
    desc: "Ideal for local clinics, retail shops, and professional service firms wanting to dominate Google Maps in Kadapa.",
    features: [
      "Complete Google Business Profile (GMB) Optimization",
      "Local 3-Pack Keyword Rank Acceleration",
      "Targeted On-Page SEO for 10 Local Keywords",
      "25+ Verified High-DA Local Citations",
      "Google Review Velocity Strategy & QR Kit",
      "Google Search Console & Bing Webmaster Setup",
      "Monthly Local Search Ranking Audit",
    ],
    popular: false,
    cta: "Start Local SEO",
  },
  {
    name: "Lead Accelerator (Ads + Funnel)",
    badge: "Most Popular for Fast Enquiries",
    price: "₹18,999",
    period: "per month",
    desc: "Complete paid acquisition engine for businesses needing instant, high-intent inquiries from Google & Social media.",
    features: [
      "Everything in Local SEO Booster",
      "Google Search & Performance Max Ads Setup",
      "Meta Ads Management (Facebook & Instagram)",
      "High-Converting Next.js Landing Page Included",
      "Click-to-WhatsApp Instant Lead Routing",
      "Negative Keyword Pruning & Ad Budget Optimization",
      "Conversion Tracking (GA4 & Meta Pixel)",
      "Weekly Performance & Lead Pipeline Calls",
    ],
    popular: true,
    cta: "Start Lead Accelerator",
  },
  {
    name: "Omnichannel Market Leader",
    badge: "Aggressive Regional Growth",
    price: "₹34,999",
    period: "per month",
    desc: "Aggressive full-funnel digital marketing for hospitals, builders, and large enterprises seeking regional market dominance.",
    features: [
      "Comprehensive Multi-Channel Paid Ads (Google + Meta + LinkedIn)",
      "Multi-Page Dynamic Lead Capture Funnel",
      "Advanced Retargeting Across 50,000+ Partner Websites",
      "WhatsApp Business API Automated Drip Sequences",
      "Full Technical SEO & Backlink Building",
      "Dedicated Senior Growth Strategist & Copywriter",
      "Competitor Ad Hijacking & Defensive Branding",
      "Real-Time CRM & Lead Attribution Dashboard",
    ],
    popular: false,
    cta: "Select Market Leader",
  },
];

const faqs = [
  {
    q: "How fast can we expect leads from digital marketing in Kadapa?",
    a: "With Google Search Ads and Meta Paid Campaigns, qualified leads begin arriving within 48 to 72 hours of campaign launch. For organic Local SEO and Google Maps (GMB 3-Pack) ranking, meaningful ranking movement and free organic calls typically establish within 30 to 60 days.",
  },
  {
    q: "How is MOMO IT Technologies different from other digital marketing agencies in Kadapa?",
    a: "Unlike typical marketing agencies that only post generic social graphics, MOMO IT is a full-stack software and technology company. We build sub-second custom Next.js landing pages, implement automated WhatsApp lead routing webhooks, set up deep server-side conversion tracking, and optimize both technical SEO and paid ad algorithms with engineering precision.",
  },
  {
    q: "How much budget should I spend on Google or Meta Ads?",
    a: "We recommend starting with an ad budget of ₹10,000 to ₹25,000 per month for local Kadapa campaigns, which is paid directly to Google or Meta. Our agency fee covers strategy, landing page engineering, copy, creative design, daily campaign optimization, and weekly reporting.",
  },
  {
    q: "Will you help us fix our Google Business Profile (GMB) if it has errors or poor ranking?",
    a: "Yes. We conduct a complete audit of your Google Business Profile: correcting NAP inconsistencies, updating primary and secondary categories, geo-tagging photos, building verified local citations, and implementing review generation campaigns to push you into the Google Local 3-Pack.",
  },
  {
    q: "Do you provide real-time lead notifications?",
    a: "Yes. When a prospect submits an inquiry or clicks your ad, an instant notification is routed directly to your mobile phone via WhatsApp or SMS within 30 seconds, including the customer's name, phone number, and specific service request.",
  },
];

export default function DigitalMarketingKadapaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/digital-marketing-kadapa#service",
        name: "Digital Marketing & Performance SEO Services in Kadapa",
        serviceType: "Digital Marketing Agency",
        provider: {
          "@type": "LocalBusiness",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          telephone: "+91-86398-31132",
          email: "momoit.technologies@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4/106, Chowdeswari Temple Lane, Krishnapuram",
            addressLocality: "Kadapa",
            addressRegion: "Andhra Pradesh",
            postalCode: "516003",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 14.4713,
            longitude: 78.8237,
          },
        },
        areaServed: {
          "@type": "City",
          name: "Kadapa",
        },
        description:
          "Premier Digital Marketing Agency in Kadapa specializing in Local SEO, Google Business Profile ranking, Google Search Ads (PPC), Meta lead generation, and WhatsApp conversion automation.",
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
            name: "Digital Marketing Kadapa",
            item: "https://www.momoittechnologies.com/services/digital-marketing-kadapa",
          },
        ],
      },
    ],
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
              <li className="text-navy-950 font-bold">Digital Marketing Kadapa</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Megaphone className="w-3.5 h-3.5 text-orange-600" />
                <span>Performance Marketing &amp; SEO · Kadapa, AP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
                Digital Marketing &amp; Local SEO Company in Kadapa
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Stop wasting marketing budget on vanity metrics. MOMO IT TECHNOLOGIES combines search engine domination, high-ROI Google &amp; Meta ad campaigns, sub-second conversion landing pages, and automated WhatsApp funnels to deliver qualified customer inquiries straight to your phone.
              </p>

              {/* Quick stats pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-6 border-y border-gray-100">
                <div>
                  <div className="text-2xl font-black text-navy-950">#1 Pack</div>
                  <div className="text-xs text-gray-500">Google Maps Ranking</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-orange-600">&lt; ₹45</div>
                  <div className="text-xs text-gray-500">Avg Cost Per Qualified Lead</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-600">48-72h</div>
                  <div className="text-xs text-gray-500">Fast Ad Go-Live Time</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-600">100%</div>
                  <div className="text-xs text-gray-500">Verified Phone Leads</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-brand-600 hover:opacity-95 text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Request Free Digital Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20am%20interested%20in%20Digital%20Marketing%20and%20Lead%20Generation%20services%20in%20Kadapa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Pain Points Section */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60">
                Common Marketing Pitfalls
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3">
                Why Traditional Advertising in Kadapa Fails
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {problemsSolved.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:border-orange-200 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 font-bold text-sm">
                      ✕
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-950 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Core Pillars */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
                Engineering-Grade Growth
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3">
                The 6 Pillars of Our Digital Marketing Engine
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-navy-950 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Industry Focus in Kadapa */}
          <div className="mb-16 bg-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Proven Regional Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Specialized Digital Marketing for Kadapa Industry Leaders
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 uppercase tracking-wider mb-3 inline-block">
                      {ind.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Step Lead Generation Process */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
                Systematic Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3">
                How We Deliver Predictable Business Growth
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-orange-600 block mb-2 font-mono">
                      {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-navy-950 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Retainers */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                Transparent ROI Packages
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3">
                Monthly Digital Marketing Retainers
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Flexible retainers with zero long-term lock-in. Full access to raw ad accounts and direct analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-7 border transition-all flex flex-col justify-between relative ${
                    pkg.popular
                      ? "bg-white border-2 border-brand-500 shadow-xl ring-4 ring-brand-500/10"
                      : "bg-white border-gray-200/80 shadow-card"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                      Recommended
                    </div>
                  )}

                  <div>
                    <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
                      {pkg.badge}
                    </div>
                    <h3 className="text-xl font-extrabold text-navy-950 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline gap-1.5 mb-3">
                      <span className="text-3xl sm:text-4xl font-black text-navy-950">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">/{pkg.period}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6 pb-6 border-b border-gray-100">
                      {pkg.desc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/contact?service=digital-marketing&plan=${encodeURIComponent(pkg.name)}`}
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      pkg.popular
                        ? "bg-brand-600 hover:bg-brand-700 text-white shadow-md"
                        : "bg-gray-100 hover:bg-gray-200 text-navy-950"
                    }`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs"
                >
                  <h3 className="text-base font-bold text-navy-950 mb-2 flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-brand-600 shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Conversion CTA */}
          <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-brand-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Ready to Dominate Google and Generate Daily Paying Customers?
            </h2>
            <p className="text-sm sm:text-base text-orange-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Schedule a free 20-minute digital marketing strategy session at our Krishnapuram, Kadapa office or connect instantly with our growth team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white text-navy-950 hover:bg-gray-100 font-extrabold text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Book Free Marketing Audit</span>
                <ArrowRight className="w-4 h-4 text-orange-600" />
              </Link>
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies%2C%20I%20would%20like%20to%20book%20a%20digital%20marketing%20strategy%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-orange-900/60 hover:bg-orange-900/80 border border-white/20 text-white font-bold text-sm shadow-sm transition-all"
              >
                Direct WhatsApp Hotline
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

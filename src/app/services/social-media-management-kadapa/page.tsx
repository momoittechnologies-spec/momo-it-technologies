import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Share2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
  HelpCircle,
  BarChart3,
  Video,
  Target,
  Users,
  Eye,
  Calendar,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Management Company in Kadapa | MOMO IT Technologies",
  description:
    "Grow your brand and generate qualified leads with Kadapa's premier social media management agency. We craft viral Reels, manage Instagram/Facebook pages, run high-ROI Meta ads, and convert followers into paying customers.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/social-media-management-kadapa",
  },
  openGraph: {
    title: "Social Media Management & Marketing in Kadapa | MOMO IT Technologies",
    description:
      "Transform your social media into a predictable customer acquisition channel. Dedicated content strategy, creative Reels production, Meta ad campaigns, and community management in Kadapa, AP.",
    url: "https://www.momoittechnologies.com/services/social-media-management-kadapa",
  },
};

const problemsSolved = [
  {
    title: "Inconsistent Posting & Zero Follower Growth",
    desc: "Posting once every few weeks without a content calendar leaves your social profiles dormant, losing customer trust and algorithmic reach in the local market.",
  },
  {
    title: "Generic Templates with Zero Brand Identity",
    desc: "Overused generic Canva templates fail to grab attention. Modern social audiences in Rayalaseema demand authentic, high-definition visual storytelling and localized hooks.",
  },
  {
    title: "High Follower Count But Zero Business Enquiries",
    desc: "Likes and views don't pay bills. Without targeted call-to-actions, conversion funnels, and active DM follow-ups, your social traffic never turns into paying customers.",
  },
  {
    title: "Wasted Budget on Ineffective 'Boost Post' Buttons",
    desc: "Clicking 'Boost Post' blindly exhausts marketing budgets. Professional Meta Ads require structured audience segmentation, pixel retargeting, and Click-to-WhatsApp funnels.",
  },
];

const coreServices = [
  {
    icon: Video,
    title: "Viral Reels, Shorts & Video Production",
    desc: "Short-form video dominates social algorithms. We script, edit, and optimize viral Instagram Reels and YouTube Shorts with trending audio, engaging Telugu/English captions, and motion graphics.",
  },
  {
    icon: Calendar,
    title: "Content Strategy & 30-Day Editorial Calendars",
    desc: "Structured monthly calendars planned 2 weeks in advance. Balanced mix of educational carousels, customer testimonials, product showcases, and behind-the-scenes brand stories.",
  },
  {
    icon: Target,
    title: "Meta Paid Ads (Lead Generation & Sales)",
    desc: "Precision-targeted Facebook and Instagram ad campaigns. We build Click-to-WhatsApp lead ads, local geographic radius targeting, and custom audience retargeting with guaranteed low cost-per-lead.",
  },
  {
    icon: Users,
    title: "Community Management & DM Conversion",
    desc: "Zero lead leakage. Our dedicated team monitors comments, answers direct messages, and routes high-intent customer inquiries directly to your sales desk or WhatsApp within minutes.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity & Profile Optimization",
    desc: "Complete visual overhaul of your bio, display photo, highlight covers, and grid aesthetic to establish undeniable authority the moment a prospect lands on your profile.",
  },
  {
    icon: BarChart3,
    title: "Monthly ROI & Performance Analytics",
    desc: "Transparent, jargon-free monthly reports detailing follower growth, account reach, post impressions, engagement rates, and exact ad spend per qualified lead.",
  },
];

const platforms = [
  {
    name: "Instagram",
    role: "Reels, story polls, highlight funnels & aesthetic carousels targeting active retail, food, fashion, and lifestyle audiences.",
    icon: Instagram,
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Facebook",
    role: "Local community group engagement, long-form educational posts, and high-conversion Meta Lead Ads for family & business demographics.",
    icon: Facebook,
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "LinkedIn",
    role: "Executive B2B branding, thought leadership articles, and corporate decision-maker outreach for institutional and IT clients.",
    icon: Linkedin,
    color: "from-sky-700 to-blue-800",
  },
  {
    name: "YouTube",
    role: "High-retention vertical Shorts and detailed long-form video explainers establishing long-term organic search authority.",
    icon: Youtube,
    color: "from-red-600 to-rose-700",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Social Brand & Competitor Audit",
    desc: "We analyze your current social metrics, profile health, target demographic in Kadapa/AP, and benchmark against the top 3 regional competitors.",
  },
  {
    step: "02",
    title: "Content Calendar & Concept Approval",
    desc: "We deliver a comprehensive 30-day content calendar including hook scripts, visual themes, captions, and hashtag clusters for your direct sign-off.",
  },
  {
    step: "03",
    title: "High-Definition Production & Design",
    desc: "Our creative team produces custom brand graphics, edits high-impact video Reels, and adds captions, animations, and licensed background tracks.",
  },
  {
    step: "04",
    title: "Scheduled Publishing & DM Moderation",
    desc: "Posts are deployed at peak engagement hours. We monitor inquiries, reply to comments, and direct qualified leads to your WhatsApp.",
  },
  {
    step: "05",
    title: "Paid Campaign Scaling & Review",
    desc: "Top-performing organic posts are amplified with Meta ads. We deliver monthly performance reviews and refine strategy for compounding growth.",
  },
];

const packages = [
  {
    name: "Starter Growth",
    badge: "Local Businesses & Retail",
    price: "₹7,999",
    period: "per month",
    desc: "Ideal for retail stores, clinics, restaurants, and local services establishing a professional social presence.",
    features: [
      "12 High-Impact Static / Carousel Posts",
      "4 Custom Video Reels / Shorts",
      "Content Calendar & Caption Writing",
      "Hashtag & Keyword Optimization",
      "Profile & Bio Optimization",
      "Basic DM & Comment Monitoring",
      "Monthly Performance Report",
    ],
    popular: false,
    cta: "Select Starter Growth",
  },
  {
    name: "Business Scale",
    badge: "Most Popular in Kadapa",
    price: "₹14,999",
    period: "per month",
    desc: "Comprehensive growth package for brands aiming to generate predictable daily inquiries and build a viral following.",
    features: [
      "20 Designed Posts & Educational Carousels",
      "10 High-Production Video Reels & Shorts",
      "Full Profile & Highlight Architecture",
      "Meta Ads Management (₹5k–₹20k ad spend)",
      "Click-to-WhatsApp Lead Generation Setup",
      "Active Daily DM Moderation & Lead Routing",
      "Bi-Weekly Strategy Calls & Growth Review",
      "Dedicated Social Media Account Manager",
    ],
    popular: true,
    cta: "Select Business Scale",
  },
  {
    name: "Enterprise Dominance",
    badge: "Aggressive Market Leadership",
    price: "₹24,999",
    period: "per month",
    desc: "End-to-end multi-platform management with high-volume video production, paid ad scaling, and omni-channel campaigns.",
    features: [
      "Daily Multi-Platform Posting (30+ Posts)",
      "16 Cinematic Reels, Shorts & Brand Stories",
      "Full Management: Instagram, Facebook, LinkedIn, YouTube",
      "Advanced Meta Ads + Retargeting + Pixel Tracking",
      "Dedicated WhatsApp Business Drip Automation",
      "Local Creator / Influencer Outreach Strategy",
      "24/7 Rapid Response Lead Management",
      "Weekly Analytics & Conversion Attribution",
    ],
    popular: false,
    cta: "Select Enterprise Dominance",
  },
];

const faqs = [
  {
    q: "Why should my Kadapa business invest in professional Social Media Management?",
    a: "Over 80% of consumers in Kadapa and Andhra Pradesh research businesses on Instagram and Facebook before visiting a store, booking a clinic appointment, or hiring a service. A consistent, high-quality social presence builds instant credibility, keeps your brand top-of-mind, and converts casual scrollers into paying customers.",
  },
  {
    q: "Do you shoot video content and Reels at our business location in Kadapa?",
    a: "Yes. For clients located in Kadapa and surrounding regions, we coordinate on-site video capture sessions to film authentic footage of your facility, products, customer interactions, and leadership interviews. We then professionally edit this raw footage into high-retention vertical Reels and Shorts.",
  },
  {
    q: "How do social media management and Meta Ads generate direct leads for my business?",
    a: "We combine organic authority with targeted paid campaigns. When a prospect clicks our targeted Instagram or Facebook ad, they can be immediately routed to a WhatsApp conversation with your sales team or fill out a fast instant lead form. We set up automated notifications so you can call or message them within 5 minutes.",
  },
  {
    q: "Can you create content in Telugu and English?",
    a: "Yes. Localized bilingual content consistently generates 2x to 3x higher engagement in Rayalaseema. We craft catchy Telugu hooks, cultural festival creatives, and regional voiceovers alongside clean professional English text.",
  },
  {
    q: "Are there any long-term contracts or lock-in periods?",
    a: "No. Our social media management plans operate on flexible month-to-month retainers. We earn your partnership every single month through measurable reach, engagement, and qualified lead volume.",
  },
];

export default function SocialMediaManagementKadapaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/social-media-management-kadapa#service",
        name: "Social Media Management & Marketing Services in Kadapa",
        serviceType: "Social Media Management",
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
          "Professional Social Media Management agency in Kadapa offering Instagram Reels production, Facebook marketing, Meta paid advertising, and community lead generation.",
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
            name: "Social Media Management Kadapa",
            item: "https://www.momoittechnologies.com/services/social-media-management-kadapa",
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
              <li className="text-navy-950 font-bold">Social Media Management Kadapa</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200/60 text-pink-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Share2 className="w-3.5 h-3.5" />
                <span>Social Media Growth Agency · Kadapa, AP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
                Social Media Management &amp; Content Production in Kadapa
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Turn your social media channels into a 24/7 client generation engine. MOMO IT TECHNOLOGIES produces scroll-stopping viral Reels, designs on-brand graphic carousels, manages daily posting, and runs targeted Meta ads that deliver real revenue for businesses in Kadapa and across Andhra Pradesh.
              </p>

              {/* Quick stats pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-6 border-y border-gray-100">
                <div>
                  <div className="text-2xl font-black text-navy-950">3x</div>
                  <div className="text-xs text-gray-500">Average Reach Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-pink-600">1080p</div>
                  <div className="text-xs text-gray-500">Cinematic 4K Reels</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-600">&lt; 15m</div>
                  <div className="text-xs text-gray-500">DM Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-600">100%</div>
                  <div className="text-xs text-gray-500">Transparent Reports</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:opacity-95 text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Claim Free Social Media Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20am%20interested%20in%20Social%20Media%20Management%20services%20for%20my%20business%20in%20Kadapa."
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

          {/* Problems Solved Section */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60">
                Why DIY Social Fails
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3">
                Stop Wasting Time on Social Media that Doesn&apos;t Convert
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {problemsSolved.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:border-pink-200 transition-all"
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

          {/* 6 Core Capabilities */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
                End-to-End Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3">
                Complete Social Media Management Suite
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-navy-950 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Platforms We Manage */}
          <div className="mb-16 bg-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                Omni-Channel Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Dominate Every Platform Where Your Customers Spend Time
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {platforms.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white mb-1.5">{p.name}</div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {p.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5-Step Process */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3">
                Our 5-Step Social Growth Engine
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black text-pink-500 block mb-2 font-mono">
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

          {/* Pricing & Packages */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                Transparent Retainers
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3">
                Simple, High-ROI Social Media Packages
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Month-to-month retainers. Zero long-term lock-in. Full creative rights to all produced assets.
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
                    href={`/contact?service=social-media&plan=${encodeURIComponent(pkg.name)}`}
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
          <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Ready to Turn Social Media into Your #1 Customer Acquisition Channel?
            </h2>
            <p className="text-sm sm:text-base text-pink-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Schedule a free 20-minute Social Media Growth Consultation with Mohan Damerla &amp; the MOMO IT marketing team at our Krishnapuram, Kadapa office or online.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white text-navy-950 hover:bg-gray-100 font-extrabold text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Book Free Social Consultation</span>
                <ArrowRight className="w-4 h-4 text-pink-600" />
              </Link>
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies%2C%20I%20would%20like%20to%20book%20a%20social%20media%20management%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-pink-900/60 hover:bg-pink-900/80 border border-white/20 text-white font-bold text-sm shadow-sm transition-all"
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

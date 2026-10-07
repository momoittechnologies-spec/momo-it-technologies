import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Palette,
  Layout,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Smartphone,
  Eye,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Web Design & UI/UX Company | MOMO IT Technologies",
  description:
    "MOMO IT Technologies delivers human-centered UI/UX design, interactive Figma prototypes, and responsive modern website design engineered to maximize conversions.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/web-design",
  },
  openGraph: {
    title: "Professional Web Design & UI/UX Company | MOMO IT Technologies",
    description:
      "Modern UI/UX design systems, Figma wireframing, high-converting landing pages, and responsive web aesthetics engineered by MOMO IT Technologies.",
    url: "https://www.momoittechnologies.com/services/web-design",
  },
};

const designServices = [
  {
    icon: Palette,
    title: "Figma UI/UX & Design Systems",
    desc: "Complete component libraries, typography hierarchies, and color tokens that ensure brand consistency across web, mobile, and print applications.",
  },
  {
    icon: Eye,
    title: "Interactive Clickable Prototypes",
    desc: "Test and experience every screen interaction, button click, and navigation flow in interactive Figma prototypes before writing a single line of code.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive Layouts",
    desc: "Thoughtfully crafted interfaces that adapt elegantly from compact 360px mobile screens up to 4K ultra-wide desktop monitors with zero visual clipping.",
  },
  {
    icon: Zap,
    title: "Conversion Rate Optimization (CRO)",
    desc: "Strategic placement of visual focal points, trust badges, and primary action buttons to minimize bounce rates and guide visitors toward conversion.",
  },
];

const faqs = [
  {
    q: "What is the difference between Web Design and Web Development?",
    a: "Web Design focuses on the user interface (UI), user experience (UX), visual branding, layout aesthetics, and interactive wireframes in tools like Figma. Web Development is the software engineering process that turns those visual designs into functional, fast, and secure code using Next.js, React, and backend databases.",
  },
  {
    q: "Do you design prototypes in Figma before coding?",
    a: "Yes. Every web project begins with wireframes and full-color Figma prototypes so you can review and approve the exact look, feel, and navigation before development begins.",
  },
];

export default function WebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/web-design#service",
        name: "Professional Web Design & UI/UX Services",
        serviceType: "Web Design",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        description:
          "Human-centered UI/UX design, interactive Figma prototypes, and responsive modern web design engineered by MOMO IT Technologies.",
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
            name: "Web Design",
            item: "https://www.momoittechnologies.com/services/web-design",
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
              Web Design
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-50 text-pink-700 text-xs font-bold uppercase tracking-wider mb-4 border border-pink-200/60">
            <Palette className="w-3.5 h-3.5" />
            Human-Centered UI/UX Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            Modern Web Design &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Interactive UI/UX Prototyping
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Create memorable digital impressions with user interfaces that look stunning, navigate intuitively, and guide prospective customers directly to action.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Request UI/UX Prototype Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20discuss%20a%20web%20design%20project."
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
            {designServices.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:border-pink-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-5">
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
                  <HelpCircle className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
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
            Transform Your Digital Visual Identity
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Get an expert design review of your existing website or discuss wireframes for your next product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
            >
              Get Free Design Review
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

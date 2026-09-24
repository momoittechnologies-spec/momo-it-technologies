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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company in Kadapa | MOMO IT Technologies",
  description:
    "Looking for the best web development company in Kadapa? MOMO IT Technologies builds ultra-fast, responsive, and SEO-ready business websites, web applications, and online portals.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/web-development-kadapa",
  },
  openGraph: {
    title: "Web Development Company in Kadapa | MOMO IT Technologies",
    description:
      "Kadapa's leading web development company. We engineer custom web applications, business websites, and ecommerce portals with Next.js, React, and modern cloud hosting.",
    url: "https://www.momoittechnologies.com/services/web-development-kadapa",
  },
};

const problemsSolved = [
  {
    title: "Slow, Outdated Websites Losing Customers",
    desc: "Old WordPress or template sites take 5+ seconds to load on mobile networks in Rayalaseema, causing 60% of visitors to bounce before seeing your services.",
  },
  {
    title: "Zero Google Visibility for Local Searches",
    desc: "Having a website that doesn't appear when people search for your business in Kadapa means your competitors win all the high-intent inquiries.",
  },
  {
    title: "Broken Mobile UI on Android & iPhone",
    desc: "Over 82% of internet traffic in Andhra Pradesh comes from smartphones. We engineer mobile-first responsive interfaces that look crisp on every screen.",
  },
  {
    title: "Security Vulnerabilities & Constant Crashes",
    desc: "Generic plugin-heavy sites frequently get hacked or break during traffic spikes. Our custom Next.js builds provide bank-grade static safety.",
  },
];

const servicesIncluded = [
  {
    icon: Globe,
    title: "Custom Business & Corporate Websites",
    desc: "Handcrafted web experiences reflecting your true brand authority. Built with Next.js and Tailwind CSS for instant sub-second load times.",
  },
  {
    icon: Layout,
    title: "Web Applications & Client Portals",
    desc: "Dynamic web systems with secure user authentication, role-based dashboards, automated notifications, and seamless database integration.",
  },
  {
    icon: Smartphone,
    title: "E-Commerce & Digital Storefronts",
    desc: "Direct online selling platforms with Razorpay, PhonePe, and UPI payment gateways, eliminating heavy 30% aggregator marketplace commissions.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (Local SEO)",
    desc: "Complete on-page technical SEO, Google Search Console indexing, semantic HTML5, fast Core Web Vitals, and localized Kadapa search ranking.",
  },
];

const technologies = [
  { name: "Next.js 15 & React 19", role: "High-performance frontend and server-rendered HTML" },
  { name: "TypeScript & Tailwind CSS", role: "Type-safe code and responsive UI layouts" },
  { name: "PostgreSQL & Supabase", role: "Relational data persistence with real-time sync" },
  { name: "Node.js & Java Spring Boot", role: "Robust backend APIs and microservices" },
  { name: "Vercel & Cloudflare Edge", role: "Global Anycast CDN with automatic SSL certificates" },
];

const processSteps = [
  { step: "01", title: "Discovery & Requirements", desc: "We study your business goals, target Kadapa/AP audience, competitor benchmarks, and required features." },
  { step: "02", title: "UI/UX Prototype Design", desc: "Interactive wireframes and modern visual interfaces crafted before writing a single line of production code." },
  { step: "03", title: "Agile Development", desc: "Fast sprint cycles building production-ready components with real-time progress preview links." },
  { step: "04", title: "QA Testing & Speed Audit", desc: "Rigorously tested across desktop and mobile devices for 95+ Google PageSpeed scores and zero errors." },
  { step: "05", title: "Launch & Google Verification", desc: "Production rollout with custom domain, SSL, Google Search Console indexing, and local map schema." },
];

const faqs = [
  {
    q: "How much does a custom business website cost in Kadapa?",
    a: "Website costs depend on complexity, number of pages, and functionality. A modern 5-page corporate website with local SEO starts affordably, while dynamic web applications or custom ecommerce portals are scoped based on custom features. We provide transparent, fixed-price quotes with zero hidden fees.",
  },
  {
    q: "How long does it take to design and launch our website?",
    a: "A standard corporate business website is typically delivered within 7 to 14 days. More complex custom web applications or SaaS portals generally take 3 to 6 weeks, structured into transparent Agile milestones.",
  },
  {
    q: "Will our website rank on Google for Kadapa local searches?",
    a: "Yes. Every website we build includes our foundational Local SEO architecture: semantic HTML, Google Search Console setup, Schema.org LocalBusiness structured data, mobile speed optimization, and localized metadata targeting your Kadapa service keywords.",
  },
  {
    q: "Do you provide website maintenance and support after launch?",
    a: "Yes. MOMO IT TECHNOLOGIES provides ongoing technical support, security patching, content updates, and cloud hosting management so you can focus entirely on running your business.",
  },
];

export default function WebDevelopmentKadapaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services in Kadapa",
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
      "Premier web development company in Kadapa offering custom website design, web applications, e-commerce portals, and local SEO services.",
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
              <li className="text-navy-950 font-bold">Web Development Kadapa</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Globe className="w-3.5 h-3.5" />
                <span>Premier Web Development · Kadapa, AP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
                Web Development Company in Kadapa
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                MOMO IT TECHNOLOGIES builds lightning-fast, beautifully designed, and search-optimized business websites and custom web applications for businesses in Kadapa, Andhra Pradesh, and across India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-gray-100">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Request Free Web Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20am%20interested%20in%20web%20development%20services%20in%20Kadapa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Section: Problems We Solve */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">The Problem</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Why Generic Websites Fail in Today&apos;s Market
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                A slow or poorly structured website actively repels customers. Here is how we fix it.
              </p>
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

          {/* Section: Services Included */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">What We Build</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Full-Lifecycle Web Engineering Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesIncluded.map((srv, i) => {
                const Icon = srv.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 mb-2">{srv.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{srv.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Tech Stack */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 mb-14 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Engineering Quality</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-6">
              Modern Cloud &amp; Web Technologies We Deploy
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

          {/* Section: Development Process */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">The Roadmap</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Our 5-Step Delivery Process
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

          {/* Section: Relevant Case Study Callout */}
          <div className="bg-gradient-to-r from-emerald-50 via-white to-brand-50 border border-gray-200/80 rounded-3xl p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Live Kadapa Client Case Study</div>
              <h3 className="text-2xl font-extrabold text-navy-950">Vijaya&apos;s Yummy Food Cloud Kitchen PWA</h3>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                A custom multi-terminal web application that eliminated 30% aggregator commission, integrated real-time kitchen displays, and automated thermal billing in Kadapa.
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
              Frequently Asked Questions: Web Development in Kadapa
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
              <Link href="/services/software-dev" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Software Development →
              </Link>
              <Link href="/services/qa-testing" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                QA Automation &amp; Testing →
              </Link>
              <Link href="/services/business-systems" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Business &amp; ERP Systems →
              </Link>
              <Link href="/kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200 transition-colors">
                Kadapa Office &amp; Campus →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

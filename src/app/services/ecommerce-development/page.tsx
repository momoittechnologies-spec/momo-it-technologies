import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  CreditCard,
  Layers,
  Database,
  Smartphone,
  MessageCircle,
  HelpCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Website Development Company | MOMO IT Technologies",
  description:
    "MOMO IT Technologies builds custom e-commerce websites and online stores with Next.js 15, Shopify, WooCommerce, instant UPI payment gateways, and automated inventory sync.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/ecommerce-development",
  },
  openGraph: {
    title: "E-Commerce Website Development Company | MOMO IT Technologies",
    description:
      "Engineered for high conversion and zero cart abandonment. Custom Next.js storefronts, UPI QR codes, Razorpay integration, inventory management, and automated WhatsApp order alerts.",
    url: "https://www.momoittechnologies.com/services/ecommerce-development",
  },
};

const ecommerceFeatures = [
  {
    icon: ShoppingCart,
    title: "High-Speed Headless Storefronts",
    desc: "Next.js 15 e-commerce architectures delivering sub-second page transitions, instant product search filters, and optimized checkout funnels that increase conversions by 30%.",
  },
  {
    icon: CreditCard,
    title: "Seamless Indian Payment Integrations",
    desc: "Instant UPI dynamic QR codes, credit/debit cards, NetBanking, and automated Cash on Delivery (COD) verification via Razorpay, PhonePe, and Cashfree.",
  },
  {
    icon: MessageCircle,
    title: "Automated WhatsApp Order Updates",
    desc: "Direct integration with WhatsApp Business API to send instant order confirmations, tracking links, delivery notifications, and customer review requests.",
  },
  {
    icon: Database,
    title: "Real-Time Inventory & Multi-Warehouse Sync",
    desc: "Prevent overselling with synchronized stock levels across your physical retail store, warehouse, and online storefront.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Shopping Experience",
    desc: "Over 85% of online purchases in India happen on mobile. We engineer thumb-friendly navigation, 1-click buy buttons, and persistent shopping carts.",
  },
  {
    icon: ShieldCheck,
    title: "GST Invoicing & Thermal Printing",
    desc: "Automated GST tax calculation, PDF invoice generation, and direct printing integration with thermal POS receipt printers for warehouse dispatch.",
  },
];

const faqs = [
  {
    q: "Custom Next.js vs Shopify vs WooCommerce: Which is best for my business?",
    a: "Shopify is ideal for standard retail brands that want a quick template launch and don't mind recurring monthly apps fees. WooCommerce is suitable for small WordPress blogs adding a basic catalog. Custom Next.js e-commerce is the gold standard for high-growth brands who demand sub-second speed, zero monthly plugin fees, custom ERP inventory sync, and zero commission lock-in.",
  },
  {
    q: "How much does an e-commerce website cost to build?",
    a: "E-commerce store development starts around ₹25,000 to ₹45,000 for standard retail storefronts with up to 100 products and payment gateway integration. Custom high-volume headless storefronts with ERP inventory sync range from ₹60,000 to ₹1,80,000+.",
  },
  {
    q: "Can the online store integrate with our physical shop's billing counter?",
    a: "Yes. MOMO IT Technologies specializes in unified commerce. We can synchronize your online store with your in-store POS billing software and thermal receipt printer so stock levels update in real time.",
  },
];

export default function EcommerceDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/ecommerce-development#service",
        name: "E-Commerce Website Development Services",
        serviceType: "E-Commerce Development",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        description:
          "Custom e-commerce store engineering, Next.js headless storefronts, UPI payment gateway integration, and automated inventory sync.",
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
            name: "E-Commerce Development",
            item: "https://www.momoittechnologies.com/services/ecommerce-development",
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
              E-Commerce Development
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <ShoppingCart className="w-3.5 h-3.5" />
            Conversion-Optimized Online Stores
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            E-Commerce Website Development &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
              Direct Digital Sales
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Sell directly to your customers with zero third-party commission. Sub-second load speeds, instant UPI checkouts, and automated WhatsApp order tracking.
          </p>

          {/* AEO Quick Answer */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-200/80 shadow-sm text-left max-w-3xl mx-auto mb-8">
            <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Quick Definition for Business Leaders &amp; AI Search
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>E-Commerce Website Development</strong> is the creation of specialized digital storefronts equipped with secure product catalogs, shopping carts, encrypted payment processing, and inventory synchronization. MOMO IT Technologies engineers high-converting e-commerce systems tailored for Indian consumers with native UPI and WhatsApp integration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Get E-Commerce Store Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20build%20an%20e-commerce%20website."
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
            {ecommerceFeatures.map((c, i) => (
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
            Start Selling Online with Zero Commission
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Review our live client e-commerce deployments and receive a complete architecture and pricing breakdown for your store.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
            >
              Get Free Store Proposal
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

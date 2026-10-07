import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Code2,
  Database,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  MessageCircle,
  HelpCircle,
  Check,
  X,
  ExternalLink,
  Apple,
  Play,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Flutter Mobile App Development Company | MOMO IT Technologies",
  description:
    "MOMO IT Technologies engineers native-performance iOS and Android mobile apps from a single codebase using Google Flutter, Dart, Firebase, and cloud backends.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/mobile-app-development",
  },
  openGraph: {
    title: "Flutter Mobile App Development Company | MOMO IT Technologies",
    description:
      "Cross-platform iOS and Android mobile app development with Google Flutter. 60 FPS fluid UI, offline-first SQLite caching, push notifications, and App Store / Play Store deployment.",
    url: "https://www.momoittechnologies.com/services/mobile-app-development",
  },
};

const appCapabilities = [
  {
    icon: Smartphone,
    title: "Single Codebase iOS & Android",
    desc: "Cut development time and maintenance budget by 50%. A single production Dart codebase compiles directly to native ARM machine code for Apple iOS and Google Android.",
  },
  {
    icon: Zap,
    title: "60 FPS Fluid UI & Micro-Interactions",
    desc: "Silky-smooth scrolling, responsive gesture controls, and pixel-perfect design rendered directly via Flutter's Impeller graphics engine with zero webview lag.",
  },
  {
    icon: Database,
    title: "Offline-First Synchronization",
    desc: "Local SQLite/Hive data storage ensures your app works smoothly even in low-connectivity conditions, synchronizing seamlessly with cloud servers once back online.",
  },
  {
    icon: ShieldCheck,
    title: "Biometric Auth & Payment Gateways",
    desc: "Fingerprint/FaceID authentication, encrypted local storage, and integration with leading Indian payment SDKs (Razorpay, PhonePe, Cashfree, Stripe).",
  },
  {
    icon: Layers,
    title: "Real-Time Telemetry & Geolocation",
    desc: "Background GPS tracking, live delivery route calculation, WebSockets, and Firebase Cloud Messaging (FCM) automated push notifications.",
  },
  {
    icon: Play,
    title: "End-to-End App Store Publishing",
    desc: "Complete handling of Google Play Console and Apple App Store compliance, privacy declarations, screenshot assets, and version lifecycle management.",
  },
];

const faqs = [
  {
    q: "Why choose Flutter for mobile app development?",
    a: "Google Flutter compiles directly to native ARM code, delivering 60 FPS performance identical to Swift or Kotlin, but from a single codebase. This halves development costs, doubles feature deployment velocity, and eliminates UI inconsistency between iOS and Android.",
  },
  {
    q: "How much does mobile app development cost?",
    a: "A standard cross-platform mobile application typically ranges between ₹35,000 and ₹85,000 for business catalogs, booking engines, or customer service apps. Complex on-demand apps with live GPS tracking, payment gateways, and multi-user roles range from ₹90,000 to ₹2,50,000+.",
  },
  {
    q: "How long does it take to launch an app on Google Play and App Store?",
    a: "An MVP mobile app is typically engineered and tested in 4 to 6 weeks. Following internal QA, app submission and store approval take 2 to 5 days on Google Play and 1 to 3 days on Apple App Store.",
  },
  {
    q: "Do you handle app updates and post-launch maintenance?",
    a: "Yes. MOMO IT Technologies provides complete lifecycle support including OS version upgrades, security patches, bug fixes, and feature expansions.",
  },
];

export default function MobileAppDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/mobile-app-development#service",
        name: "Mobile App Development Services",
        serviceType: "Mobile Application Development",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        description:
          "Cross-platform iOS and Android mobile app development using Google Flutter, Dart, Firebase, and scalable cloud microservices.",
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
            name: "Mobile App Development",
            item: "https://www.momoittechnologies.com/services/mobile-app-development",
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
              Mobile App Development
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <Smartphone className="w-3.5 h-3.5" />
            Cross-Platform Mobile Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            Flutter Mobile App Development for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
              Android &amp; iOS
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Engineered from a single clean Dart codebase with native 60 FPS graphics, offline database sync, and seamless Play Store &amp; App Store deployment.
          </p>

          {/* AEO Quick Answer */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-200/80 shadow-sm text-left max-w-3xl mx-auto mb-8">
            <div className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Quick Definition for Business Leaders &amp; AI Search
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Flutter Mobile App Development</strong> by MOMO IT Technologies utilizes Google&apos;s UI toolkit to construct natively compiled applications for mobile from a single code foundation. This eliminates duplicate iOS and Android development expenses while achieving true native execution speed, offline responsiveness, and zero platform friction.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Get Mobile App Prototype Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20build%20a%20mobile%20app."
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
            {appCapabilities.map((c, i) => (
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
            Ready to Launch Your Mobile App?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Book a consultation with our mobile engineering leads to review your feature backlog and receive a comprehensive delivery timeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
            >
              Get Free App Estimate
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

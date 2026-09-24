import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Smartphone,
  Apple,
  Play,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Database,
  Bell,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Kadapa | MOMO IT Technologies",
  description:
    "Looking for the best mobile app development company in Kadapa? MOMO IT Technologies engineers native-quality iOS & Android mobile apps using Flutter and cloud backends.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/mobile-app-development-kadapa",
  },
  openGraph: {
    title: "Mobile App Development Company in Kadapa | MOMO IT Technologies",
    description:
      "Cross-platform Flutter mobile app development in Kadapa, AP. High-performance iOS and Android apps for retail, food delivery, logistics, and healthcare businesses.",
    url: "https://www.momoittechnologies.com/services/mobile-app-development-kadapa",
  },
};

const problemsSolved = [
  {
    title: "Paying Double to Build Separate iOS & Android Apps",
    desc: "Traditional development requires two separate teams (one Swift for iOS, one Kotlin for Android), doubling initial cost and maintenance bills.",
  },
  {
    title: "Sluggish, Laggy Hybrid Apps That Frustrate Users",
    desc: "Cheap web wrappers or poorly coded hybrid apps stutter during scrolling and animation, resulting in immediate 1-star reviews on the Google Play Store.",
  },
  {
    title: "Crashes on Unstable 3G/4G Network Conditions",
    desc: "Apps that fail without persistent internet leave users stranded. We engineer offline-first data caching and automatic background synchronization.",
  },
  {
    title: "App Store Rejections & Compliance Pitfalls",
    desc: "Apple and Google enforce strict privacy and security guidelines. We manage the entire store submission process to guarantee smooth approval.",
  },
];

const mobileCapabilities = [
  {
    icon: Smartphone,
    title: "Single Codebase Flutter Engineering",
    desc: "Google's Flutter framework compiles directly to native machine code on ARM processors, delivering silky 60fps/120fps performance on both iPhone and Android.",
  },
  {
    icon: Bell,
    title: "Push Notifications & Real-Time Sync",
    desc: "Firebase Cloud Messaging (FCM) integration for transactional alerts, order updates, customer re-engagement campaigns, and live tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment Gateway Integration",
    desc: "Seamless, secure in-app checkout using PhonePe, Google Pay UPI, Razorpay, and Apple Pay with automated webhook reconciliation.",
  },
  {
    icon: Play,
    title: "End-to-End App Store & Play Store Launch",
    desc: "Complete handling of app signing, privacy policies, store listing graphics, test flight distributions, and production app store releases.",
  },
];

const technologies = [
  { name: "Flutter 3.x & Dart", role: "Cross-platform native compilation engine" },
  { name: "Firebase (Auth, FCM, Firestore)", role: "Real-time backend, push notifications and telemetry" },
  { name: "PostgreSQL & Supabase", role: "Cloud relational database with row-level security" },
  { name: "REST & GraphQL APIs", role: "Lightweight, high-speed mobile data endpoints" },
  { name: "Bloc & Provider", role: "Predictable, enterprise-scale mobile state management" },
];

const processSteps = [
  { step: "01", title: "User Experience Wireframing", desc: "Interactive mobile wireframes focused on thumb-zone navigation, clean typography, and fast checkout." },
  { step: "02", title: "Flutter Architecture", desc: "Setting up clean architecture layers: Data Source, Repository, BLoC State Management, and Presentation." },
  { step: "03", title: "API & Payment Integration", desc: "Hooking up secure backend endpoints, authentication tokens, maps, and native camera/sensor integrations." },
  { step: "04", title: "Device Matrix Testing", desc: "Tested across real iOS and Android smartphones (Samsung, Xiaomi, iPhone, OnePlus) for responsiveness." },
  { step: "05", title: "Store Submission & Launch", desc: "Preparing metadata, screenshots, and privacy policies for rapid Apple App Store and Google Play approval." },
];

const faqs = [
  {
    q: "Why does MOMO IT Technologies recommend Flutter for mobile app development?",
    a: "Flutter allows us to build natively compiled, high-performance apps for both iOS (iPhone) and Android from a single codebase. This reduces development time and client costs by up to 50% while delivering true native speed and smooth animations.",
  },
  {
    q: "How long does it take to build a custom mobile app in Kadapa?",
    a: "A typical MVP mobile app is delivered within 3 to 6 weeks. More extensive enterprise platforms with complex booking, payment, and real-time mapping integrations take approximately 6 to 10 weeks.",
  },
  {
    q: "Will you help upload and publish our app to the Google Play Store and Apple App Store?",
    a: "Yes. We handle the complete store submission process, including developer account setup, app signing, store screenshots, description copywriting, and privacy compliance.",
  },
  {
    q: "Does MOMO IT Academy teach Flutter app development in Kadapa?",
    a: "Yes. MOMO Academy runs a dedicated 3-Month Flutter Mobile App Engineering course in Kadapa with hands-on projects and guaranteed live app store publishing experience.",
  },
];

export default function MobileAppDevelopmentKadapaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Development Services in Kadapa",
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
      "Leading mobile app development company in Kadapa building cross-platform iOS and Android apps with Flutter, Firebase, and cloud backends.",
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
              <li className="text-navy-950 font-bold">Mobile App Development Kadapa</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Smartphone className="w-3.5 h-3.5" />
                <span>iOS &amp; Android Apps · Kadapa, AP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
                Mobile App Development Company in Kadapa
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                MOMO IT TECHNOLOGIES engineers beautiful, native-performance iOS and Android mobile apps with Google Flutter. We build mobile storefronts, delivery tracking apps, and enterprise management tools for businesses across Kadapa and India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-gray-100">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Request Free Mobile App Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20am%20interested%20in%20mobile%20app%20development%20in%20Kadapa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Section: Problems Solved */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Common App Mistakes</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Why Many Mobile Apps Get Abandoned
              </h2>
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

          {/* Section: Capabilities */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Mobile Engineering</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Full-Featured iOS &amp; Android Apps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mobileCapabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 mb-2">{cap.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Tech Stack */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 mb-14 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Mobile Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-6">
              Modern Mobile Technologies &amp; Backend Integrations
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

          {/* Section: Process */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">The Roadmap</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Our 5-Step Mobile Development Lifecycle
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

          {/* Section: FAQs */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
              Frequently Asked Questions: Mobile App Development in Kadapa
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

          {/* Related Links */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200/80 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
              Explore Related Services &amp; Academy Programs
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/services/web-development-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Web Development Kadapa →
              </Link>
              <Link href="/services/software-development-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Software Development Kadapa →
              </Link>
              <Link href="/academy" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 transition-colors">
                Flutter Course at MOMO Academy →
              </Link>
              <Link href="/kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200 transition-colors">
                Kadapa Office Details →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  GraduationCap,
  Star,
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  MapPin,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Users,
  ShieldCheck,
  Zap,
  FileText,
  Briefcase,
  Code2,
  Terminal,
  HelpCircle,
  MessageCircle,
  Smartphone,
  Layers,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Flutter & Mobile App Development Course in Kadapa | MOMO Academy",
  description:
    "Master Flutter, Dart, Firebase, and cross-platform Android & iOS mobile app development in Kadapa with MOMO Academy. 100% hands-on lab, verified certificate, and live app store deployment.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/academy/flutter-training-kadapa",
  },
  openGraph: {
    title: "Flutter & Mobile App Development Course in Kadapa | MOMO Academy",
    description:
      "Kadapa's premier Flutter mobile app development training. Build native Android and iOS mobile apps from a single codebase with Flutter & Firebase at MOMO Academy Kadapa.",
    url: "https://www.momoittechnologies.com/academy/flutter-training-kadapa",
  },
};

const curriculumModules = [
  {
    title: "Module 1: Dart Programming & Flutter Widget Architecture",
    topics: [
      "Dart Programming Language: Syntax, Variables, Collections, OOPs & Null Safety",
      "Async Programming in Dart: Futures, Streams, and Async/Await",
      "Flutter Engine: How Flutter renders 60/120 FPS native UI without bridge overhead",
      "Stateless & Stateful Widgets, Widget Lifecycle, and Custom Layouts (Row, Column, Stack)",
      "Declarative Routing & Navigation using GoRouter",
    ],
  },
  {
    title: "Module 2: State Management & Offline-First Data Storage",
    topics: [
      "State Management Strategies: setState vs Provider vs Riverpod & Bloc Patterns",
      "Clean Architecture: Presentation, Domain, and Data Layers for Scalable Apps",
      "Local Persistence: SharedPreferences, SQLite, and Hive NoSQL database",
      "Caching, Network Connectivity Detection & Offline-First Mobile Architectures",
    ],
  },
  {
    title: "Module 3: Backend Integration, Firebase & Device Hardware",
    topics: [
      "Connecting REST APIs & Handling JSON Serialization with HTTP client",
      "Firebase Integration: Phone OTP Authentication, Cloud Firestore & Cloud Storage",
      "Push Notifications with Firebase Cloud Messaging (FCM) & Background Handlers",
      "Device Hardware Interop: Camera capture, GPS Geolocation, Google Maps & Biometrics",
      "In-App Payment Gateway Integration: Razorpay, Cashfree & Direct UPI",
    ],
  },
  {
    title: "Module 4: Live Commercial App Capstone & App Store Publishing",
    topics: [
      "Building a Commercial Food Delivery & Order Tracking App (Vijaya's Yummy Food)",
      "App Performance Profiling, Memory Optimization & Battery Consumption Auditing",
      "Google Play Console Setup, App Signing (AAB format), and Play Store Publishing",
      "Apple App Store Submission Guidelines & TestFlight Beta Distribution",
      "Verified Course Completion Certificate & Mobile App Developer Internship Letter",
    ],
  },
];

const faqs = [
  {
    q: "Why choose Flutter for mobile app development training in Kadapa?",
    a: "Flutter allows you to build high-performance native apps for both Android and iOS from a single codebase, saving 50% development time. Companies across Bangalore, Hyderabad, and globally are aggressively hiring Flutter developers because it replaces the need to hire separate Android (Kotlin) and iOS (Swift) teams.",
  },
  {
    q: "Do I need a Mac computer to learn Flutter and iOS development?",
    a: "No! At MOMO Academy Kadapa, we provide fully configured lab workstations with Android Studio and Flutter SDK. You can build and test all Flutter mobile apps on standard Windows laptops and test directly on physical Android phones. For iOS compilation, we provide cloud build workflows.",
  },
  {
    q: "Will we publish a real mobile application to the Google Play Store?",
    a: "Yes! Every student completes a commercial capstone mobile application (e.g. food delivery or local service booking app) and learns how to generate release bundles (AAB), sign certificates, and submit to the Google Play Store.",
  },
  {
    q: "What is the duration and fee for Flutter training in Kadapa?",
    a: "The course spans 12 to 14 weeks of intensive hands-on lab sessions, including live project development and internship. We offer student-friendly installment options and early-bird discounts. Contact our WhatsApp coordinator for exact batch dates.",
  },
  {
    q: "Where is the MOMO Academy training lab located in Kadapa?",
    a: "Our classroom and hands-on lab are located at 4/106, Krishnapuram, Kadapa, Andhra Pradesh — 516005.",
  },
];

export default function FlutterTrainingKadapaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.momoittechnologies.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Academy",
            "item": "https://www.momoittechnologies.com/academy"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Flutter Training Kadapa",
            "item": "https://www.momoittechnologies.com/academy/flutter-training-kadapa"
          }
        ]
      },
      {
        "@type": "Course",
        "name": "Flutter & Mobile App Development Course in Kadapa",
        "description": "Comprehensive practical mobile app engineering course covering Flutter, Dart, Firebase, state management, and Play Store publishing in Kadapa.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "MOMO Academy - MOMO IT TECHNOLOGIES",
          "image": "https://www.momoittechnologies.com/logo.png",
          "telephone": "+918639831132",
          "email": "momoit.technologies@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4/106, Krishnapuram",
            "addressLocality": "Kadapa",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "516005",
            "addressCountry": "IN"
          },
          "url": "https://www.momoittechnologies.com"
        },
        "educationalCredentialAwarded": "Mobile App Developer Certificate & Live Internship Experience Letter",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["Onsite", "Online"],
          "location": {
            "@type": "Place",
            "name": "MOMO Academy Kadapa Campus",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4/106, Krishnapuram",
              "addressLocality": "Kadapa",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "516005",
              "addressCountry": "IN"
            }
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-32 sm:pt-36 pb-20 bg-surface-light min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/academy" className="hover:text-brand-600 transition-colors">Academy</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-semibold" aria-current="page">
                Flutter Training Kadapa
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-50 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                MOMO Academy Kadapa
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.8★ Google Rated
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <Smartphone className="w-3.5 h-3.5" />
                Android &amp; iOS Apps
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
              Flutter &amp; Mobile App Development Course in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-600">
                Kadapa, Andhra Pradesh
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
              Build and publish high-performance cross-platform mobile apps for both Android and iOS from a single codebase. Master Dart, Flutter widgets, Firebase, push notifications, and payment gateways with 100% hands-on lab sessions in Kadapa.
            </p>

            {/* Quick Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 my-6 border-y border-gray-100">
              <div>
                <div className="text-xs text-gray-400 font-medium">Duration</div>
                <div className="text-sm font-bold text-navy-950">12 – 14 Weeks</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Mode</div>
                <div className="text-sm font-bold text-navy-950">Lab + Online Meet</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Platforms</div>
                <div className="text-sm font-bold text-emerald-600">Android + iOS</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Campus Location</div>
                <div className="text-sm font-bold text-navy-950">Krishnapuram, Kadapa</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20Academy,%20I%20am%20interested%20in%20the%20Flutter%20Mobile%20App%20Development%20Course%20in%20Kadapa.%20Please%20share%20timings%20and%20fee%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Flutter Batch on WhatsApp</span>
              </a>
              <Link
                href="/services/mobile-app-development-kadapa"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm transition-all"
              >
                <span>View Mobile App Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Section: Practical Highlights */}
          <div className="mb-14">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Practical Advantages
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Why Kadapa Students Choose Flutter at MOMO Academy
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Build for Both Android &amp; iPhone</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Write code once and run natively on Android devices and iPhones with smooth 60 FPS performance and native UI aesthetics.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Real Hardware &amp; API Integration</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Connect live REST APIs, Firebase authentication, camera capture, GPS map tracking, and Razorpay/UPI payment gateways.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">App Store Publishing Experience</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Learn how to prepare release APKs, App Bundles (AAB), setup Google Play Console accounts, and publish live mobile applications.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Comprehensive Curriculum */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <div className="max-w-2xl mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Syllabus
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Flutter &amp; Dart Mobile Development Modules
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Designed to give you end-to-end expertise in modern mobile app development and cloud backend integration.
              </p>
            </div>

            <div className="space-y-6">
              {curriculumModules.map((mod, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-surface-light border border-gray-100">
                  <h4 className="text-base font-bold text-navy-950 mb-3">{mod.title}</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {mod.topics.map((t, tidx) => (
                      <li key={tidx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: FAQs */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
              Frequently Asked Questions: Flutter Training in Kadapa
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

          {/* Cross-linking to related courses */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200/80 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
              Explore More Courses at MOMO Academy Kadapa
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/academy/full-stack-development-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Full-Stack Web Development Kadapa →
              </Link>
              <Link href="/academy/automation-testing-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Automation Testing Kadapa →
              </Link>
              <Link href="/academy/ai-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Agentic AI &amp; RAG Training Kadapa →
              </Link>
              <Link href="/kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200 transition-colors">
                Kadapa Lab Campus &amp; Map →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

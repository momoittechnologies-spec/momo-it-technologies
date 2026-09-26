import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Laptop,
  GraduationCap,
  Building2,
  ShieldCheck,
  Star,
  Layers,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MOMO IT Technologies | Software & IT Services in Kadapa, Andhra Pradesh",
  description:
    "Visit MOMO IT Technologies at Krishnapuram, Kadapa. Premier software development company and IT training academy providing Web & SaaS engineering, QA automation, and career courses.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/kadapa",
  },
  openGraph: {
    title: "MOMO IT Technologies | Software & IT Services in Kadapa, Andhra Pradesh",
    description:
      "Kadapa's registered software engineering company and training academy. Discover custom software, web apps, QA automation, and live training programs at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa.",
    url: "https://www.momoittechnologies.com/kadapa",
  },
};

const kadapaServices = [
  {
    title: "Web Development in Kadapa",
    desc: "Production-ready, sub-second corporate websites and web applications built on Next.js 15, React 19, and Tailwind CSS.",
    href: "/services/web-development-kadapa",
  },
  {
    title: "Software & SaaS Development",
    desc: "Custom backend architectures, multi-tenant cloud SaaS engines, and API microservices engineered in Kadapa.",
    href: "/services/software-development-kadapa",
  },
  {
    title: "QA & Automation Testing Services",
    desc: "Comprehensive manual and automated testing suites using Selenium 4, TestNG, Cucumber BDD, and CI/CD pipelines.",
    href: "/services/qa-automation-kadapa",
  },
  {
    title: "Agentic AI & LLM Systems",
    desc: "Autonomous multi-agent workflows, enterprise RAG with Vector DBs, and private local LLM deployments.",
    href: "/services/ai-development-kadapa",
  },
  {
    title: "Mobile App Development",
    desc: "High-performance iOS and Android cross-platform mobile apps engineered with Flutter, Dart, and Firebase.",
    href: "/services/mobile-app-development-kadapa",
  },
  {
    title: "Custom Business & ERP Software",
    desc: "Tailored POS billing, thermal receipt printing, inventory tracking, and GST invoicing for Kadapa enterprises.",
    href: "/services/business-software-kadapa",
  },
];

const kadapaCourses = [
  {
    title: "QA Automation & Selenium Testing",
    duration: "3 Months",
    highlights: "Java 17, Selenium 4, TestNG, Cucumber BDD, API Testing, Live Client Internship",
    href: "/academy/automation-testing-training-kadapa",
  },
  {
    title: "Core Java & Advanced Java",
    duration: "2 Months",
    highlights: "Java 17+, OOPs, Collections Framework, Stream API, JDBC Database Connectivity",
    href: "/academy/java-training-kadapa",
  },
  {
    title: "Selenium 4 WebDriver Lab",
    duration: "2.5 Months",
    highlights: "Page Object Model, Dynamic Locators, Synchronization, ExtentReports, CI/CD",
    href: "/academy/selenium-training-kadapa",
  },
  {
    title: "Full-Stack Web Development",
    duration: "4 Months",
    highlights: "React 19, Next.js, Spring Boot 3 microservices, PostgreSQL, Cloud Deployment",
    href: "/academy/full-stack-development-training-kadapa",
  },
  {
    title: "Flutter Mobile App Engineering",
    duration: "3 Months",
    highlights: "Dart, Flutter SDK, State Management, REST APIs, App Store & Play Store Deployment",
    href: "/academy/flutter-training-kadapa",
  },
  {
    title: "Agentic AI & Enterprise Solutions",
    duration: "2.5 Months",
    highlights: "LangGraph, CrewAI, Vector Databases, Production RAG, Private LLM Inference",
    href: "/academy/ai-training-kadapa",
  },
];

const faqs = [
  {
    q: "Where is MOMO IT Technologies located in Kadapa?",
    a: "Our office and learning campus is located at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, Andhra Pradesh — 516003. We are easily accessible from key areas in Kadapa including Seven Roads, RTC Bus Stand, and RIMS road.",
  },
  {
    q: "Does MOMO IT Technologies develop custom software for local Kadapa businesses?",
    a: "Yes. We design and engineer end-to-end custom software, billing systems, ecommerce storefronts, and cloud PWAs. For example, we built and deployed the complete digital ordering, KDS, and billing engine for Vijaya's Yummy Food right here in Kadapa.",
  },
  {
    q: "What training courses are conducted at MOMO Academy in Kadapa?",
    a: "We offer intensive hands-on programs in Selenium Automation Testing with Java, Full-Stack Web Development, Flutter Mobile Apps, and Agentic AI. All courses include live client project internships and verified credentials recognized by MNC recruiters.",
  },
  {
    q: "How can I schedule a consultation or visit the Kadapa campus?",
    a: "You can call us directly at +91 86398 31132, message us on WhatsApp, or email momoit.technologies@gmail.com. We welcome scheduled visits Monday through Saturday between 9:00 AM and 7:00 PM.",
  },
];

export default function KadapaLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EducationalOrganization", "ProfessionalService"],
        "@id": "https://www.momoittechnologies.com/kadapa#localbusiness",
        name: "MOMO IT TECHNOLOGIES",
        url: "https://www.momoittechnologies.com/kadapa",
        telephone: "+91-86398-31132",
        email: "momoit.technologies@gmail.com",
        image: "https://www.momoittechnologies.com/logo.svg",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4/106, Chowdeswari Temple Lane, Krishnapuram",
          addressLocality: "Kadapa",
          addressRegion: "Andhra Pradesh",
          postalCode: "516003",
          addressCountry: "IN",
        },
        foundingDate: "2025-06-01",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "14.4713",
          longitude: "78.8237",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/momo-it-technologies",
          "https://github.com/momoittechnologies-spec",
          "https://maps.google.com/?q=MOMO+IT+TECHNOLOGIES+Kadapa",
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
            name: "Kadapa Headquarters",
            item: "https://www.momoittechnologies.com/kadapa",
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
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-navy-950 font-bold">Kadapa Office</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Headquarters &amp; Innovation Lab · Kadapa, AP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
                Software Development &amp; IT Training in Kadapa
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                MOMO IT TECHNOLOGIES is a registered software engineering firm and technical academy rooted in Krishnapuram, Kadapa. We build modern digital products for forward-thinking enterprises while mentoring aspiring engineers with commercial project internships.
              </p>
            </div>

            {/* Quick Contact & Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Office Address</div>
                  <div className="text-sm font-bold text-navy-950 mt-0.5">4/106, Chowdeswari Temple Lane, Krishnapuram</div>
                  <div className="text-xs text-gray-600">Kadapa, Andhra Pradesh — 516003</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone &amp; WhatsApp</div>
                  <div className="text-sm font-bold text-navy-950 mt-0.5">+91 86398 31132</div>
                  <div className="text-xs text-gray-600">Mon–Sat: 9:00 AM – 7:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Legal Accreditation</div>
                  <div className="text-sm font-bold text-navy-950 mt-0.5">MSME Govt. Registered</div>
                  <div className="text-xs text-gray-600">Reg: UDYAM-AP-04-0013231</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20would%20like%20to%20inquire%20about%20your%20services/courses%20in%20Kadapa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 font-bold text-sm transition-all"
              >
                <span>Schedule Campus Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Section: Software Services in Kadapa */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">B2B Technology</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                  Enterprise Software Services in Kadapa
                </h2>
              </div>
              <Link href="/services" className="text-sm font-bold text-brand-600 hover:text-brand-800 hidden sm:flex items-center gap-1">
                <span>All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kadapaServices.map((srv, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-bold text-navy-950 mb-2">{srv.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{srv.desc}</p>
                  <Link href={srv.href} className="text-xs font-bold text-brand-600 hover:text-brand-800 inline-flex items-center gap-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Local Client Case Studies in Kadapa */}
          <div className="mb-14 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Proven Local Results</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 mb-4">
              Real Commercial Deployments Built from Kadapa
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-8 leading-relaxed">
              We engineer real, mission-critical systems right here in Kadapa that power operational businesses every day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-900/80 border border-navy-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-brand-400">Kadapa Cloud Kitchen Platform</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">Live Production</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Vijaya&apos;s Yummy Food</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Multi-tenant cloud kitchen storefront, automated kitchen display system (KDS), thermal receipt printing engine, and automated monthly UPI billing cron.
                </p>
                <Link
                  href="/case-studies/vijayas-yummy-food"
                  className="text-xs font-bold text-brand-300 hover:text-brand-200 inline-flex items-center gap-1"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="bg-navy-900/80 border border-navy-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-sky-400">Travel &amp; Logistics SaaS</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">Live Production</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">MANA Tours &amp; Travels</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  End-to-end fleet booking portal, dynamic pricing calculation, automated WhatsApp reservation ticketing, and customer driver live coordination.
                </p>
                <Link
                  href="/case-studies/mana-tours"
                  className="text-xs font-bold text-brand-300 hover:text-brand-200 inline-flex items-center gap-1"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section: MOMO Academy Training in Kadapa */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Career Acceleration</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                  MOMO IT Academy: IT Training Programs in Kadapa
                </h2>
              </div>
              <Link href="/academy" className="text-sm font-bold text-brand-600 hover:text-brand-800 hidden sm:flex items-center gap-1">
                <span>View Full Curriculum</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kadapaCourses.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-brand-600">{c.duration} Intensive</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-semibold border border-purple-200">
                        Internship Included
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 mb-2">{c.title}</h3>
                    <p className="text-xs text-gray-600 mb-4">{c.highlights}</p>
                  </div>
                  <Link href={c.href} className="text-xs font-bold text-brand-600 hover:text-brand-800 inline-flex items-center gap-1 mt-2">
                    <span>Explore Course Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Frequently Asked Questions */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
              Frequently Asked Questions (Kadapa)
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Common questions about our software development services and IT training academy in Kadapa.
            </p>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

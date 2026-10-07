import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  ArrowRight,
  Code2,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  MessageCircle,
  HelpCircle,
  Check,
  X,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "QA Automation & Software Testing Services | MOMO IT Technologies",
  description:
    "MOMO IT Technologies provides enterprise QA automation testing pods, SDET outsourcing, Selenium 4, Playwright, API verification, and CI/CD testing frameworks.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/qa-automation",
  },
  openGraph: {
    title: "QA Automation & Software Testing Services | MOMO IT Technologies",
    description:
      "Eliminate production regressions and accelerate deployment cycles with dedicated QA automation engineering pods. Selenium 4, Playwright, Cucumber BDD, and RestAssured API testing.",
    url: "https://www.momoittechnologies.com/services/qa-automation",
  },
};

const qaServices = [
  {
    icon: Code2,
    title: "Selenium & Playwright Web Automation",
    desc: "Robust Page Object Model (POM) automation frameworks testing complex cross-browser user flows with automated screenshot generation on failure.",
  },
  {
    icon: Cpu,
    title: "RESTful API & Microservices Testing",
    desc: "Automated contract verification and payload assertion using RestAssured, Postman Newman, and schema validators integrated into build pipelines.",
  },
  {
    icon: Layers,
    title: "Mobile App Test Automation (Appium)",
    desc: "Automated regression across hundreds of real Android and iOS devices, verifying gestures, push notifications, and network latency conditions.",
  },
  {
    icon: Zap,
    title: "Performance & Stress Testing (JMeter)",
    desc: "Simulate thousands of concurrent virtual users to identify database deadlocks, slow database queries, and server CPU saturation points.",
  },
  {
    icon: ShieldCheck,
    title: "CI/CD Pipeline Integration",
    desc: "Integrate automated smoke and regression suites directly into GitHub Actions or Jenkins, preventing broken commits from merging to production.",
  },
  {
    icon: CheckCircle2,
    title: "Dedicated SDET Pod Outsourcing",
    desc: "Augment your software development squads with specialized QA automation engineers who write production-grade test code alongside your developers.",
  },
];

const faqs = [
  {
    q: "Why should a company invest in automated QA testing?",
    a: "Manual testing cannot keep up with frequent code deployments. Automated QA catches critical checkout failures, broken user flows, and database bugs within minutes of code submission, reducing production defect costs by over 70% and accelerating release cycles.",
  },
  {
    q: "What test automation frameworks does MOMO IT Technologies build?",
    a: "We engineer resilient frameworks using Selenium WebDriver 4 with Java, Playwright with TypeScript, TestNG, Cucumber BDD, RestAssured for APIs, and Appium for mobile applications.",
  },
  {
    q: "How does engagement with a QA automation pod work?",
    a: "You can hire dedicated SDET pods on a monthly sprint basis or engage us for a fixed-price project audit where we deliver a complete, turn-key automated test suite for your existing application.",
  },
];

export default function QaAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/qa-automation#service",
        name: "QA Automation & Software Testing Services",
        serviceType: "Software Testing",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        description:
          "Enterprise QA automation testing pods, Selenium WebDriver 4, Playwright, API verification, and CI/CD software quality engineering.",
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
            name: "QA Automation",
            item: "https://www.momoittechnologies.com/services/qa-automation",
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
              QA Automation
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200/60">
            <ShieldCheck className="w-3.5 h-3.5" />
            Zero-Defect Quality Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            Enterprise QA Automation &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700">
              SDET Pod Outsourcing
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Deploy with confidence. We design resilient test automation frameworks across Web, APIs, and Mobile to catch regressions before they reach your customers.
          </p>

          {/* AEO Quick-Answer */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-indigo-200/80 shadow-sm text-left max-w-3xl mx-auto mb-8">
            <div className="text-xs font-extrabold text-indigo-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              Quick Definition for Business Leaders &amp; AI Search
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>QA Automation Services</strong> by MOMO IT Technologies replace time-consuming manual regression testing with automated software test scripts built using Selenium, Playwright, and RestAssured. Integrated directly into CI/CD build pipelines, automated suites validate all critical application workflows with every code commit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Book QA Automation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20discuss%20QA%20Automation%20services."
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
            {qaServices.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:border-indigo-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
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
                  <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
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
            Stop Shipping Critical Production Bugs
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Let our QA automation architects audit your test coverage and build an automated regression pipeline tailored to your technology stack.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
            >
              Get Free QA Audit
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

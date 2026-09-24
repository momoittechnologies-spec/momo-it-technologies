import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  TestTube2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Bug,
  GitBranch,
  Terminal,
  Zap,
  Cpu,
  Layers,
  MessageCircle,
  HelpCircle,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "QA & Automation Testing Company in Kadapa | MOMO IT Technologies",
  description:
    "MOMO IT Technologies is Kadapa's premier QA and software testing company. We provide dedicated automation testing pods, Selenium WebDriver 4, TestNG, Cucumber BDD, and REST Assured API testing.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/qa-automation-kadapa",
  },
  openGraph: {
    title: "QA & Automation Testing Company in Kadapa | MOMO IT Technologies",
    description:
      "Enterprise software testing & test automation services in Kadapa, AP. Led by senior SDET architects. Selenium, Playwright, TestNG, Cucumber, and CI/CD pipelines.",
    url: "https://www.momoittechnologies.com/services/qa-automation-kadapa",
  },
};

const problemsSolved = [
  {
    title: "Critical Production Bugs Slipping to End-Users",
    desc: "Deploying untested code results in broken checkout flows, customer frustration, negative Google reviews, and direct revenue loss.",
  },
  {
    title: "Slow, Expensive Manual Regression Testing",
    desc: "Manual testing cycles take days or weeks for every release, bottlenecking your engineering team and delaying feature launches.",
  },
  {
    title: "Flaky Test Scripts & Lack of Robust Frameworks",
    desc: "In-house automation often suffers from brittle XPath selectors, synchronization timeouts, and unmaintainable test scripts that developers ignore.",
  },
  {
    title: "Broken API Integrations & Silent Failures",
    desc: "Third-party payment gateways, SMS webhooks, and backend microservices frequently fail without automated contract tests catching them before deployment.",
  },
];

const qaServices = [
  {
    icon: TestTube2,
    title: "End-to-End Web Automation (Selenium & Playwright)",
    desc: "Custom Page Object Model (POM) hybrid automation frameworks simulating real user actions across Chrome, Firefox, Safari, and Edge.",
  },
  {
    icon: Terminal,
    title: "REST Assured API Automation Testing",
    desc: "Automated validation of JSON payload schemas, HTTP response codes, token headers, database assertions, and API performance limits.",
  },
  {
    icon: GitBranch,
    title: "Continuous Testing & CI/CD Pipeline Integration",
    desc: "Automated regression test triggers on every GitHub pull request via Jenkins and GitHub Actions with detailed Allure test execution reports.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated SDET Pods on Demand",
    desc: "Senior test architects and automation engineers seamlessly integrated into your sprint ceremonies to achieve 90%+ regression test coverage.",
  },
];

const technologies = [
  { name: "Selenium WebDriver 4.x", role: "Industry-standard browser automation engine" },
  { name: "TestNG & JUnit 5", role: "Parallel execution, test assertions, and data providers" },
  { name: "Cucumber BDD & Gherkin", role: "Business-readable behavior-driven test scenarios" },
  { name: "REST Assured & Postman", role: "High-speed backend API contract validation" },
  { name: "Playwright & Cypress", role: "Modern fast-executing web test automation" },
  { name: "Jenkins, Docker & GitHub Actions", role: "Cloud CI/CD continuous test execution" },
];

const processSteps = [
  { step: "01", title: "Test Audit & Scope", desc: "We review your application workflows, identify critical paths, and draft a comprehensive test strategy document." },
  { step: "02", title: "Framework Architecture", desc: "We design a scalable Page Object Model (POM) hybrid framework with utilities for reporting, logging, and data-driven inputs." },
  { step: "03", title: "Scripting & BDD Authoring", desc: "Our SDETs write robust, non-flaky automated test scenarios in Cucumber BDD with explicit waits." },
  { step: "04", title: "CI/CD Pipeline Hookup", desc: "Tests are wired into your automated build pipeline to trigger regression suites on every code commit." },
  { step: "05", title: "Zero-Defect Release Signoff", desc: "Automated execution passes with interactive Allure HTML dashboards, bug logs, and QA signoff certificates." },
];

const faqs = [
  {
    q: "Why should a software company hire MOMO IT Technologies for QA automation?",
    a: "We are led by senior SDET architects with extensive MNC delivery experience. We build maintainable, enterprise-grade hybrid frameworks that achieve 90%+ automation coverage, slashing regression cycles from days to minutes.",
  },
  {
    q: "What tools and frameworks do your QA engineers specialize in?",
    a: "Our core specialization includes Java 17+, Selenium WebDriver 4, TestNG, Cucumber BDD, REST Assured, Playwright, Maven, Git, Docker, and Jenkins CI/CD.",
  },
  {
    q: "Can you test both web applications and mobile apps?",
    a: "Yes. In addition to desktop and mobile browser testing, we provide mobile test automation using Appium and Flutter integration driver suites for iOS and Android.",
  },
  {
    q: "How does MOMO IT Academy connect with your QA services in Kadapa?",
    a: "MOMO IT Technologies operates both an enterprise QA engineering wing and MOMO Academy. Our academy trainees learn directly on real client projects under the supervision of senior SDETs, ensuring unmatched practical rigor.",
  },
];

export default function QaAutomationKadapaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "QA Automation and Software Testing Services in Kadapa",
    provider: {
      "@type": "LocalBusiness",
      name: "MOMO IT TECHNOLOGIES",
      url: "https://www.momoittechnologies.com",
      telephone: "+91-86398-31132",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4/106, Krishnapuram",
        addressLocality: "Kadapa",
        addressRegion: "Andhra Pradesh",
        postalCode: "516005",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Kadapa",
    },
    description:
      "Premier QA automation and software testing company in Kadapa offering Selenium, TestNG, Cucumber BDD, REST Assured, and dedicated SDET engineering pods.",
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
              <li className="text-navy-950 font-bold">QA Automation Kadapa</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                <TestTube2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>SDET &amp; QA Engineering · Kadapa, AP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
                QA &amp; Automation Testing Company in Kadapa
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Led by veteran SDET architects, MOMO IT TECHNOLOGIES delivers high-coverage test automation frameworks, REST API validation, and dedicated QA pods that guarantee zero-defect production releases.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-gray-100">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Hire QA Automation Pod</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20would%20like%20to%20discuss%20QA%20and%20Automation%20Testing%20services%20in%20Kadapa."
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
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">The Release Risk</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Stop Releasing Untested Code to Your Customers
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

          {/* Section: Services Included */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Testing Services</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Full-Spectrum QA Automation Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qaServices.map((srv, i) => {
                const Icon = srv.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
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
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Toolchain Mastery</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-6">
              Industry-Standard QA &amp; SDET Technologies
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
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">The Framework</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Our 5-Step QA Automation Lifecycle
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

          {/* Section: Case Study Callout */}
          <div className="bg-gradient-to-r from-emerald-50 via-white to-brand-50 border border-gray-200/80 rounded-3xl p-8 sm:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Live Automation in Production</div>
              <h3 className="text-2xl font-extrabold text-navy-950">350+ Automated Test Cases for Vijaya&apos;s Yummy Food</h3>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                We engineered an end-to-end regression test suite covering order state transitions, thermal ESC/POS print payload validations, and automated monthly UPI cron executions.
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

          {/* Section: FAQs */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
              Frequently Asked Questions: QA Automation in Kadapa
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
              <Link href="/services/software-development-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Software Development Kadapa →
              </Link>
              <Link href="/academy" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                MOMO Academy Courses →
              </Link>
              <Link href="/certificates" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Verified Certificates →
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

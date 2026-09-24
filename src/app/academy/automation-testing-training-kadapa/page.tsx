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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automation Testing Training in Kadapa | MOMO Academy",
  description:
    "Join Kadapa's #1 Automation Testing training program with MOMO Academy. Master Core Java, Selenium 4, TestNG, Cucumber BDD, REST Assured, and CI/CD pipelines with guaranteed live project internships.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/academy/automation-testing-training-kadapa",
  },
  openGraph: {
    title: "Automation Testing Training in Kadapa | MOMO Academy",
    description:
      "Best Automation Testing course in Kadapa. Learn from Senior SDETs at MOMO Academy. 100% practical lab, verified certificates, and live MNC project internship in Krishnapuram, Kadapa.",
    url: "https://www.momoittechnologies.com/academy/automation-testing-training-kadapa",
  },
};

const curriculumModules = [
  {
    title: "Module 1: Manual Testing & Agile QA Architecture",
    topics: [
      "SDLC vs STLC, Agile Scrum Framework (User Stories, Sprints, Epics)",
      "Black-Box Test Design: Equivalence Partitioning & Boundary Value Analysis (BVA)",
      "Enterprise Test Plan & Test Scenario Design with Traceability Matrices",
      "Defect Life Cycle & Real-World Jira Bug Tracking with reproducible logs",
    ],
  },
  {
    title: "Module 2: Core Java for SDETs & Automation Engineers",
    topics: [
      "Java Syntax, Flow Control, Data Types & Operator Logic",
      "OOPs Pillars: Polymorphism, Inheritance, Encapsulation, Abstraction",
      "Java Collections Framework (ArrayList, HashSet, HashMap, Iterators)",
      "Exception Handling & Apache POI for Excel Data-Driven Frameworks",
      "Java 8+ Streams, Lambda Expressions & String Manipulations",
    ],
  },
  {
    title: "Module 3: Selenium WebDriver 4 & Advanced Locators",
    topics: [
      "WebDriver Architecture & Browser Drivers (Chrome, Firefox, Edge)",
      "Complex Dynamic XPath Axes (ancestor, descendant, following-sibling) & CSS Selectors",
      "Handling Dynamic Dropdowns, Checkboxes, iFrames, Alerts & Multiple Browser Windows",
      "Explicit (WebDriverWait), Implicit, and Fluent Synchronization Strategies",
      "Actions Class: Mouse Hover, Drag-and-Drop, Right-Click & JavaScriptExecutor",
    ],
  },
  {
    title: "Module 4: Enterprise Frameworks: TestNG, Cucumber BDD & CI/CD",
    topics: [
      "Page Object Model (POM) Design Pattern with PageFactory",
      "TestNG Annotations, DataProviders, Priority, Groups & Parallel Cross-Browser Execution",
      "Cucumber BDD: Feature Files, Gherkin Syntax, Step Definitions & Test Runners",
      "ExtentReports & Allure Interactive HTML Reporting with Failure Screenshots",
      "Maven Build Lifecycle, Git Version Control & GitHub Actions CI/CD Automated Pipelines",
    ],
  },
];

const faqs = [
  {
    q: "Why is MOMO Academy the best institute for Automation Testing training in Kadapa?",
    a: "Unlike typical theory coaching institutes where trainers just dictate PowerPoint slides, MOMO Academy is the education arm of MOMO IT Technologies—an active software engineering company in Kadapa. You learn directly from working SDET leads, write production automation code every day, and gain real experience on our live client systems like Vijaya's Yummy Food and MANA Tours.",
  },
  {
    q: "Do I need prior coding knowledge or a Computer Science degree to join?",
    a: "No prior coding experience is necessary. We start with absolute programming fundamentals and build your Java skills step by step. We have successfully trained graduates from mechanical, civil, electrical, B.Com, and MCA backgrounds who are now working as Automation Engineers in top MNCs.",
  },
  {
    q: "What is the training mode and classroom address in Kadapa?",
    a: "We offer Hybrid training: In-person classroom training with dedicated high-speed lab workstations at our Kadapa campus (4/106, Krishnapuram, Kadapa, AP - 516005) as well as live interactive Google Meet sessions with full session recordings.",
  },
  {
    q: "Is an internship experience letter provided with the course?",
    a: "Yes! Every student who completes the capstone framework assignment receives a Verified Course Completion Certificate with a unique Credential ID and a formal Live Project Internship Experience Letter from MOMO IT Technologies.",
  },
  {
    q: "How does MOMO Academy help with placements and interviews?",
    a: "We conduct 1-on-1 ATS-friendly resume refactoring, optimize your LinkedIn and GitHub profiles, and conduct weekly technical mock interviews with real MNC scenario questions until you secure your job offer.",
  },
];

export default function AutomationTestingTrainingKadapaPage() {
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
            "name": "Automation Testing Training Kadapa",
            "item": "https://www.momoittechnologies.com/academy/automation-testing-training-kadapa"
          }
        ]
      },
      {
        "@type": "Course",
        "name": "Automation Testing Training in Kadapa (Java & Selenium)",
        "description": "Comprehensive practical QA Automation program covering Core Java, Selenium WebDriver 4, TestNG, Cucumber BDD, and CI/CD pipelines in Kadapa.",
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
        "educationalCredentialAwarded": "Verified Course Completion Certificate & Live Internship Experience Letter",
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
                Automation Testing Training Kadapa
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
                4.8★ Google Rated in Kadapa
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <Award className="w-3.5 h-3.5" />
                Verified Certificate &amp; Internship
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
              Automation Testing Training in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-600">
                Kadapa (Java + Selenium 4)
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
              Become a high-earning SDET &amp; QA Automation Test Engineer. Master Core Java, Selenium WebDriver 4, TestNG, Cucumber BDD frameworks, and CI/CD automation directly from working industry leads at our Kadapa campus.
            </p>

            {/* Quick Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 my-6 border-y border-gray-100">
              <div>
                <div className="text-xs text-gray-400 font-medium">Duration</div>
                <div className="text-sm font-bold text-navy-950">10 – 12 Weeks</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Mode</div>
                <div className="text-sm font-bold text-navy-950">Hybrid (Lab + Online)</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Live Internship</div>
                <div className="text-sm font-bold text-emerald-600">Guaranteed Experience</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Lab Location</div>
                <div className="text-sm font-bold text-navy-950">Krishnapuram, Kadapa</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20Academy,%20I%20am%20interested%20in%20joining%20the%20Automation%20Testing%20Training%20in%20Kadapa.%20Please%20share%20batch%20timings%20and%20fee%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Batch Timings on WhatsApp</span>
              </a>
              <Link
                href="/certificates"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm transition-all"
              >
                <span>View Sample Certificates</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Section: Why MOMO Academy vs Ordinary Institutes */}
          <div className="mb-14">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                The Practical Advantage
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Why Kadapa Freshers &amp; Testers Choose MOMO Academy
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Active IT Company, Not Just an Institute</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  You are trained inside an actual operating software company. You see how real engineering teams build, commit code, and deploy daily.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">100% Framework Building from Scratch</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We don&apos;t just write simple 5-line scripts. You will architect enterprise Page Object Model (POM) frameworks with Cucumber BDD and CI/CD pipelines.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Live Client Project Internship</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Write automated test suites for live commercial products (like Vijaya&apos;s Yummy Food PWA) and earn a verified work experience letter.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Comprehensive Curriculum */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <div className="max-w-2xl mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Industry-Aligned Syllabus
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Complete Automation Testing Course Curriculum
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Designed to cover everything asked in top Tier-1 MNC and startup SDET technical interview rounds.
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

          {/* Section: Tools Mastered */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-14">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                Toolbox &amp; Technologies
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Tools &amp; Libraries You Will Master Hands-On
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Core Java 17+", "Selenium WebDriver 4", "TestNG", "Cucumber BDD", "Maven", "Git & GitHub", "GitHub Actions CI/CD", "Jira & Confluence"].map((tool, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-sm font-bold text-teal-300">{tool}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: FAQs */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
              Frequently Asked Questions: Automation Testing in Kadapa
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
              <Link href="/academy/java-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Java Training Kadapa →
              </Link>
              <Link href="/academy/selenium-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Selenium Training Kadapa →
              </Link>
              <Link href="/academy/full-stack-development-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Full-Stack Training Kadapa →
              </Link>
              <Link href="/kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200 transition-colors">
                Kadapa Campus &amp; Lab Address →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

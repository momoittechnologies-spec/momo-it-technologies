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
  title: "Selenium WebDriver Training in Kadapa | MOMO Academy",
  description:
    "Master Selenium 4 WebDriver, TestNG, Cucumber BDD, and Page Object Model frameworks in Kadapa with MOMO Academy. 100% hands-on lab, live client projects, and placement assistance.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/academy/selenium-training-kadapa",
  },
  openGraph: {
    title: "Selenium WebDriver Training in Kadapa | MOMO Academy",
    description:
      "Kadapa's #1 Selenium 4 automation coaching. Build real-time enterprise test frameworks from scratch at our Krishnapuram campus.",
    url: "https://www.momoittechnologies.com/academy/selenium-training-kadapa",
  },
};

const curriculumModules = [
  {
    title: "Module 1: Selenium 4 WebDriver Architecture & Locators",
    topics: [
      "W3C Standardized WebDriver Architecture & Browser Drivers (Chrome, Edge, Firefox)",
      "Dynamic XPath Engineering: absolute vs relative, text(), contains(), starts-with()",
      "Advanced XPath Axes: parent, ancestor, child, descendant, following-sibling, preceding-sibling",
      "CSS Selectors: ID, Class, Attribute, Substrings & Pseudo-classes",
      "Element Inspection, DevTools Mastery & Browser Console DOM Queries",
    ],
  },
  {
    title: "Module 2: Web Element Interactions & Synchronization",
    topics: [
      "Interacting with TextBoxes, Buttons, Hyperlinks, Radio Buttons & Checkboxes",
      "Dynamic Dropdowns: Select Class (index, value, visible text) & Custom non-select tags",
      "Handling Web Alerts, Confirmations, Prompts, and Authentication Popups",
      "Managing Multiple Browser Windows, Tabs & iFrames switching",
      "Synchronization Mastery: Thread.sleep vs Implicit Wait vs WebDriverWait (ExpectedConditions)",
    ],
  },
  {
    title: "Module 3: Advanced Automation Interactions & Data-Driven Testing",
    topics: [
      "Actions Class: Mouse Hover, Double Click, Context Click, Drag and Drop, Key chords",
      "JavaScriptExecutor: Scrolling, Force Clicking, and DOM highlighting",
      "Capturing Screenshots: Full page, specific WebElements & Failure triggers",
      "Data-Driven Automation using Apache POI to read/write test data from Excel workbooks",
      "Cross-Browser Testing on Chrome, Firefox, and Edge headless modes",
    ],
  },
  {
    title: "Module 4: Enterprise Frameworks: POM, TestNG & Cucumber BDD",
    topics: [
      "Page Object Model (POM) & PageFactory Design Architecture",
      "TestNG Framework: Annotations (@Test, @BeforeMethod, etc.), Priority, Grouping, Parallel runs",
      "DataProviders in TestNG for parameterized test execution",
      "Cucumber BDD: Feature files with Gherkin language (Given, When, Then, And)",
      "ExtentReports 5 HTML Reporting, Maven Build lifecycle & GitHub Actions CI/CD automation",
    ],
  },
];

const faqs = [
  {
    q: "What makes Selenium training at MOMO Academy Kadapa unique?",
    a: "Unlike generic training centres that teach basic click-and-type scripts, we teach you how to architect enterprise-grade test automation frameworks from scratch. You work directly with senior test leads and test live commercial web applications built by our parent company, MOMO IT Technologies.",
  },
  {
    q: "Is Java covered in this Selenium training course?",
    a: "Yes! Core Java is an integral part of the course. The first 3 to 4 weeks are dedicated to mastering Java syntax, OOPs, Collections, and Exception Handling so you have a solid programming foundation before writing Selenium scripts.",
  },
  {
    q: "Do you teach Selenium 4 or older versions?",
    a: "We teach Selenium 4 exclusively, utilizing modern features like native Chromium DevTools Protocol (CDP) integration, W3C compliance, relative locators (above, below, near), and new window/tab management APIs.",
  },
  {
    q: "Will I get an opportunity to work on a live project?",
    a: "Yes. Every student automates real web applications such as Vijaya's Yummy Food Cloud PWA and MANA Tours reservation portals. You receive a verified Live Project Internship certificate along with your course certificate.",
  },
  {
    q: "Where is the classroom training conducted in Kadapa?",
    a: "Classroom sessions and dedicated computer labs are held at our Kadapa engineering campus: 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, AP — 516003.",
  },
];

export default function SeleniumTrainingKadapaPage() {
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
            "name": "Selenium Training Kadapa",
            "item": "https://www.momoittechnologies.com/academy/selenium-training-kadapa"
          }
        ]
      },
      {
        "@type": "Course",
        "name": "Selenium 4 WebDriver Training in Kadapa",
        "description": "Comprehensive practical Selenium 4 WebDriver training with Java, TestNG, Cucumber BDD, and enterprise framework design in Kadapa.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "MOMO Academy - MOMO IT TECHNOLOGIES",
          "image": "https://www.momoittechnologies.com/logo.png",
          "telephone": "+918639831132",
          "email": "momoit.technologies@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4/106, Chowdeswari Temple Lane, Krishnapuram",
            "addressLocality": "Kadapa",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "516003",
            "addressCountry": "IN"
          },
          "url": "https://www.momoittechnologies.com"
        },
        "educationalCredentialAwarded": "Verified Selenium Automation Engineer Certificate & Project Letter",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["Onsite", "Online"],
          "location": {
            "@type": "Place",
            "name": "MOMO Academy Kadapa Campus",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4/106, Chowdeswari Temple Lane, Krishnapuram",
              "addressLocality": "Kadapa",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "516003",
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
                Selenium Training Kadapa
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
                <Award className="w-3.5 h-3.5" />
                Selenium 4 WebDriver
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
              Selenium WebDriver Training in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-600">
                Kadapa, Andhra Pradesh
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
              Learn how to design, build, and scale enterprise automation testing frameworks. Master Selenium 4, TestNG, Cucumber BDD, Apache POI data-driven testing, and CI/CD automation directly from SDET professionals in Kadapa.
            </p>

            {/* Quick Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 my-6 border-y border-gray-100">
              <div>
                <div className="text-xs text-gray-400 font-medium">Duration</div>
                <div className="text-sm font-bold text-navy-950">10 – 12 Weeks</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Mode</div>
                <div className="text-sm font-bold text-navy-950">Lab + Online Meet</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Frameworks Built</div>
                <div className="text-sm font-bold text-emerald-600">POM + BDD + CI/CD</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Campus Location</div>
                <div className="text-sm font-bold text-navy-950">Krishnapuram, Kadapa</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20Academy,%20I%20am%20interested%20in%20joining%20the%20Selenium%20WebDriver%20Training%20in%20Kadapa.%20Please%20share%20timings%20and%20fees."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
              <Link
                href="/academy/automation-testing-training-kadapa"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm transition-all"
              >
                <span>View Full Automation Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Section: Practical Highlights */}
          <div className="mb-14">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Real-World Engineering
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Framework Architecture Over Simple Scripting
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Complex Dynamic Locators</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Master advanced dynamic XPath axes and CSS selectors capable of identifying elusive elements inside shadow DOMs, iFrames, and dynamic tables.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Hybrid Framework Design</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Combine Page Object Model, TestNG annotations, and Apache POI data drivers into a unified modular framework that scales to thousands of tests.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">CI/CD &amp; Cloud Execution</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Configure Maven builds and GitHub Actions to trigger automated parallel test runs upon every code commit with rich HTML reports.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Comprehensive Curriculum */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <div className="max-w-2xl mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                In-Depth Syllabus
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Selenium 4 WebDriver Modules
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Progress systematically from web element identification to full-fledged CI/CD test automation pipelines.
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
              Frequently Asked Questions: Selenium Training in Kadapa
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
              <Link href="/academy/automation-testing-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Automation Testing Overview →
              </Link>
              <Link href="/academy/java-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Core Java Training Kadapa →
              </Link>
              <Link href="/academy/full-stack-development-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Full-Stack Development Kadapa →
              </Link>
              <Link href="/kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200 transition-colors">
                Kadapa Lab Location &amp; Map →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

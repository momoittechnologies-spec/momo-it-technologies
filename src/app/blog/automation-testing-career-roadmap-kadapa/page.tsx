import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  GraduationCap,
  Award,
  TrendingUp,
  Terminal,
  Code2,
  Layers,
  MessageCircle,
  Briefcase,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automation Testing Career Roadmap in Kadapa: From Zero to 12 LPA SDET",
  description:
    "A complete, practical QA Automation and SDET career roadmap for freshers and manual testers in Kadapa and Rayalaseema. Learn Core Java, Selenium 4, TestNG, Cucumber BDD, and CI/CD pipelines.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/blog/automation-testing-career-roadmap-kadapa",
  },
  openGraph: {
    title: "Automation Testing Career Roadmap in Kadapa: From Zero to 12 LPA SDET",
    description:
      "Step-by-step technical roadmap to transition into high-paying QA Automation and SDET engineering roles from Kadapa. Master modern Java, Selenium 4, and frameworks.",
    url: "https://www.momoittechnologies.com/blog/automation-testing-career-roadmap-kadapa",
  },
};

const roadmapPhases = [
  {
    phase: "Phase 1: Core Java 17+ & OOPs Architecture",
    duration: "Weeks 1 – 4",
    why: "Without rock-solid programming logic, automation engineers struggle to write modular test scripts and fail technical coding rounds.",
    skills: [
      "JDK internals, JVM architecture, Bytecode execution",
      "Object-Oriented Programming (OOP): Inheritance, Polymorphism, Encapsulation, Abstraction",
      "Java Collections Framework: ArrayList, HashSet, HashMap, and Iterators",
      "Exception Handling (try-catch-finally) & Apache POI for Excel data parsing",
      "Java 8+ Streams, Lambda Expressions, and String manipulation algorithms",
    ],
  },
  {
    phase: "Phase 2: Selenium 4 WebDriver & Dynamic Locator Engineering",
    duration: "Weeks 5 – 8",
    why: "Modern single-page applications (React, Angular) load dynamically. Engineers must master robust locator strategies that never break.",
    skills: [
      "Selenium 4 W3C WebDriver Architecture & Chromium DevTools Protocol (CDP)",
      "Advanced Dynamic XPath Axes: ancestor, descendant, following-sibling, preceding-sibling",
      "Complex CSS Selectors, handling Shadow DOMs and dynamic iFrames",
      "Explicit Synchronization: WebDriverWait, ExpectedConditions, and FluentWait",
      "Actions Class: Mouse hover, Drag-and-drop, Keyboard chord events, JavaScriptExecutor",
    ],
  },
  {
    phase: "Phase 3: Enterprise Test Frameworks (POM + TestNG + Cucumber BDD)",
    duration: "Weeks 9 – 12",
    why: "Companies do not hire people who write simple test scripts; they hire engineers who can architect maintainable automation frameworks.",
    skills: [
      "Page Object Model (POM) Design Pattern with PageFactory",
      "TestNG Annotations, DataProviders for data-driven testing, and Parallel test execution",
      "Cucumber BDD: Feature files with Gherkin language (Given, When, Then) & Step Definitions",
      "Interactive HTML reporting with ExtentReports 5 & Allure with failure screenshots",
      "Maven Build lifecycle, dependency management, and Surefire test runners",
    ],
  },
  {
    phase: "Phase 4: API Testing, CI/CD Automation & Live Internship",
    duration: "Weeks 13 – 16",
    why: "Top product companies test 80% of their logic at the API layer. CI/CD pipelines automate testing upon every GitHub pull request.",
    skills: [
      "REST Assured library for API validation (GET, POST, PUT, DELETE, OAuth2)",
      "JSON Schema validation & deserialization with Jackson / Gson",
      "Git version control, feature branches, Pull Requests & Code Reviews",
      "GitHub Actions & Jenkins automated CI/CD build triggers",
      "Writing real test suites for commercial client projects (Vijaya's Yummy Food & MANA Tours)",
    ],
  },
];

const faqs = [
  {
    q: "Can a fresher from a non-IT background (Mechanical, Civil, B.Com, B.Sc) learn Automation Testing in Kadapa?",
    a: "Yes! Over 40% of our successful students at MOMO Academy come from mechanical, civil, electrical, or commerce backgrounds. Because we teach programming logic from Day 1 scratch, anyone with basic analytical reasoning and discipline can master Java and Selenium within 3 to 4 months.",
  },
  {
    q: "What is the average starting salary for an Automation Test Engineer / SDET?",
    a: "In India, freshers entering QA Automation typically start between ₹3.5 LPA to ₹6 LPA at service MNCs (TCS, Infosys, Cognizant, Wipro) and between ₹6 LPA to ₹12+ LPA at tech startups and product companies. Experienced SDETs with 3+ years frequently earn ₹12 LPA to ₹22+ LPA.",
  },
  {
    q: "Why is manual testing getting saturated?",
    a: "With companies releasing software multiple times a day using DevOps and Agile sprints, manual verification cannot keep up with regression testing. Companies are actively phasing out manual-only roles in favor of SDETs who can write automated test code.",
  },
  {
    q: "How does MOMO Academy help students in Kadapa secure jobs?",
    a: "We provide comprehensive 1-on-1 support: complete ATS resume rewriting, live coding challenge practice on HackerRank/LeetCode, weekly technical mock interviews with senior SDETs, and a formal Verified Internship Experience Letter from our parent company, MOMO IT Technologies.",
  },
];

export default function AutomationTestingRoadmapPage() {
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
            "name": "Blog",
            "item": "https://www.momoittechnologies.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Automation Testing Career Roadmap Kadapa",
            "item": "https://www.momoittechnologies.com/blog/automation-testing-career-roadmap-kadapa"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Automation Testing Career Roadmap in Kadapa: From Zero to 12 LPA SDET",
        "description": "Comprehensive technical career roadmap for graduates and manual testers in Kadapa looking to transition into high-paying QA Automation and SDET roles.",
        "author": {
          "@type": "Organization",
          "name": "MOMO Academy Faculty",
          "url": "https://www.momoittechnologies.com/academy"
        },
        "publisher": {
          "@type": "Organization",
          "name": "MOMO IT TECHNOLOGIES",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.momoittechnologies.com/logo.svg"
          }
        },
        "datePublished": "2026-09-24",
        "dateModified": "2026-09-24",
        "mainEntityOfPage": "https://www.momoittechnologies.com/blog/automation-testing-career-roadmap-kadapa"
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-semibold truncate" aria-current="page">
                Automation Testing Career Roadmap
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60 uppercase tracking-wider">
                Career Roadmap &amp; SDET Guide
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                <Clock className="w-3.5 h-3.5" />
                9 min read
              </span>
              <span className="text-xs text-gray-400">· Updated September 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-6">
              Automation Testing Career Roadmap in Kadapa: From Zero to 12 LPA SDET
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Are you a B.Tech, MCA, or degree graduate in Kadapa or Rayalaseema looking for a recession-proof, high-paying career in IT? Or a manual tester wanting to upgrade before your skills become obsolete? Here is the exact, step-by-step blueprint to master test automation and secure high-paying MNC offers.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  QA
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-950">MOMO Academy SDET Mentors</div>
                  <div className="text-xs text-gray-500">Kadapa Campus Lead Instructors</div>
                </div>
              </div>

              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20Academy,%20I%20read%20the%20Automation%20Testing%20Roadmap%20and%20want%20to%20enroll%20in%20the%20next%20batch%20in%20Kadapa."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Join Next Batch</span>
              </a>
            </div>
          </header>

          {/* Article Body */}
          <article className="space-y-10 text-gray-700 leading-relaxed text-base">
            
            {/* Section 1: The Macro Trend */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-extrabold text-navy-950">
                Why QA Automation is the Smartest Career Move in 2026
              </h2>
              <p>
                Every engineering company in Bangalore, Hyderabad, and Chennai has shifted to Agile development and continuous CI/CD deployments. Where code used to be released once a month, modern apps deploy updates multiple times a week.
              </p>
              <p>
                Manual verification simply cannot keep pace with this release frequency. As a result, <strong>manual test testing roles are disappearing</strong>, while demand for <strong>Software Development Engineers in Test (SDETs)</strong> who can write code and build automation frameworks has surged by over 300%.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-surface-light border border-gray-100 text-center">
                  <div className="text-2xl font-black text-brand-600 mb-1">₹6 – 12 LPA</div>
                  <div className="text-xs font-bold text-navy-950">Fresher / 1-Yr SDET</div>
                  <div className="text-[11px] text-gray-500 mt-1">Product startups &amp; Tier-1 IT</div>
                </div>
                <div className="p-4 rounded-2xl bg-surface-light border border-gray-100 text-center">
                  <div className="text-2xl font-black text-emerald-600 mb-1">3.2x</div>
                  <div className="text-xs font-bold text-navy-950">Higher Interview Calls</div>
                  <div className="text-[11px] text-gray-500 mt-1">Compared to manual testing resumes</div>
                </div>
                <div className="p-4 rounded-2xl bg-surface-light border border-gray-100 text-center">
                  <div className="text-2xl font-black text-indigo-600 mb-1">100%</div>
                  <div className="text-xs font-bold text-navy-950">Recession-Resilient</div>
                  <div className="text-[11px] text-gray-500 mt-1">Software quality is always essential</div>
                </div>
              </div>
            </div>

            {/* Section 2: The 4-Phase Roadmap */}
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                  Step-by-Step Curriculum
                </h2>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                  The 4-Phase Roadmap to Becoming an SDET
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {roadmapPhases.map((phase, i) => (
                  <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:border-brand-300 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100 mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-navy-950">{phase.phase}</h4>
                        <div className="text-xs text-brand-600 font-semibold mt-0.5">{phase.duration}</div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 italic mb-4">
                      <strong>Why this matters:</strong> {phase.why}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Core Skills Mastered:</div>
                      {phase.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: The MOMO Academy Difference */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-extrabold text-navy-950">
                Why Students in Kadapa Learn with MOMO Academy
              </h2>
              <p>
                Most training institutes in Andhra Pradesh follow outdated methods: a trainer lectures for an hour, gives you photocopied notes, and lets you copy simple 5-line scripts.
              </p>
              <p>
                At <strong>MOMO Academy</strong> (the education arm of MOMO IT Technologies), we treat you like a junior software engineer from Day 1:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-surface-light border border-gray-100 text-xs text-gray-700 space-y-1">
                  <div className="font-bold text-navy-950 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-brand-600" />
                    <span>Dedicated Lab at Krishnapuram</span>
                  </div>
                  <div>High-speed workstations with IntelliJ IDEA, Eclipse, Maven, and Selenium 4 configured for live coding sessions.</div>
                </div>
                <div className="p-4 rounded-2xl bg-surface-light border border-gray-100 text-xs text-gray-700 space-y-1">
                  <div className="font-bold text-navy-950 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                    <span>Live Client Project Internship</span>
                  </div>
                  <div>Automate real commercial web applications like Vijaya&apos;s Yummy Food and earn a verified company experience letter.</div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm space-y-6">
              <h3 className="text-2xl font-extrabold text-navy-950 tracking-tight">
                Frequently Asked Questions: Automation Testing Careers in Kadapa
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="text-base font-bold text-navy-950 mb-1.5">{faq.q}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Box */}
            <div className="bg-gradient-to-r from-brand-50 via-white to-emerald-50 border border-brand-200/80 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1">
                  Start Your IT Career in Kadapa
                </div>
                <h4 className="text-2xl font-extrabold text-navy-950">
                  Join the Next Automation Testing Batch
                </h4>
                <p className="text-sm text-gray-600 mt-1 max-w-xl">
                  Hybrid batches available: Offline lab training at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa + Live Google Meet interactive sessions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="https://wa.me/918639831132?text=Hello%20MOMO%20Academy,%20I%20want%20to%20enroll%20in%20the%20Automation%20Testing%20Training%20in%20Kadapa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link
                  href="/academy/automation-testing-training-kadapa"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm transition-all"
                >
                  <span>View Course Syllabus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </article>

        </div>
      </div>
    </>
  );
}

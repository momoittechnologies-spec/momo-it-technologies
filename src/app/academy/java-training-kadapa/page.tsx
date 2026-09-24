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
  title: "Core Java & Advanced Java Training in Kadapa | MOMO Academy",
  description:
    "Master Core Java, OOPs, Collections, Multi-threading, Streams, and JDBC with MOMO Academy in Kadapa. 100% practical coding lab, verified certificate, and MNC placement preparation in Krishnapuram.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/academy/java-training-kadapa",
  },
  openGraph: {
    title: "Core Java & Advanced Java Training in Kadapa | MOMO Academy",
    description:
      "Kadapa's premier Java programming institute. Master Java 17+ from basics to advanced enterprise concepts with hands-on labs and placement support.",
    url: "https://www.momoittechnologies.com/academy/java-training-kadapa",
  },
};

const curriculumModules = [
  {
    title: "Module 1: Java Foundations & Language Fundamentals",
    topics: [
      "JDK vs JRE vs JVM Internal Architecture & Bytecode Execution",
      "Primitive Data Types, Variables, Type Casting & Operators",
      "Control Flow: if-else, switch expressions, while, for, and enhanced for-loops",
      "Array Manipulations, 1D & 2D Arrays, and Memory Allocation",
    ],
  },
  {
    title: "Module 2: Object-Oriented Programming (OOP) Mastery",
    topics: [
      "Classes, Objects, Constructors, 'this' and 'super' Keywords",
      "Four Pillars of OOP: Encapsulation, Inheritance, Polymorphism & Abstraction",
      "Abstract Classes vs Interfaces & Default / Static Interface Methods",
      "Packages, Access Modifiers (public, protected, default, private)",
      "Garbage Collection, Object Lifecycle & memory management",
    ],
  },
  {
    title: "Module 3: Advanced Java, Collections & Exception Handling",
    topics: [
      "Robust Exception Handling: try, catch, finally, throw, throws & Custom Exceptions",
      "Java Collections Framework: List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap)",
      "Generics, Comparable & Comparator Interfaces for custom sorting",
      "Java 8+ Features: Lambda Expressions, Functional Interfaces & Stream API",
      "File I/O, Serialization & Apache POI integration",
    ],
  },
  {
    title: "Module 4: Multithreading, JDBC & Enterprise Connectivity",
    topics: [
      "Multithreading Basics, Thread Lifecycle, Runnable & Callable Interfaces",
      "Thread Synchronization, Deadlock Prevention & Concurrent Collections",
      "JDBC Architecture: Connecting Java Applications to PostgreSQL & MySQL",
      "CRUD Operations, PreparedStatements, Transaction Management & Connection Pooling",
      "Building a Mini Console Enterprise Application & MNC Coding Challenge Prep",
    ],
  },
];

const faqs = [
  {
    q: "Why is MOMO Academy the preferred place to learn Java in Kadapa?",
    a: "Most local coaching centres teach outdated Java 6/7 syntax from textbooks without actual coding practice. At MOMO Academy, we teach modern Java 17/21 LTS, focusing heavily on hands-on coding, solving 100+ algorithmic problems, and understanding JVM memory internals required for high-paying MNC technical rounds.",
  },
  {
    q: "Can a beginner with zero coding background learn Java here?",
    a: "Absolutely yes! Our Java course is structured for complete beginners. We start from basic computer logic, algorithms, and syntax before progressing to complex Object-Oriented architectures.",
  },
  {
    q: "Will this Java course help me clear campus placements and MNC coding tests?",
    a: "Yes. In addition to core Java concepts, we dedicate weekly sessions to Data Structures basics, HackerRank/LeetCode coding problems, and mock technical interviews targeting TCS, Infosys, Wipro, Capgemini, Cognizant, and product startups.",
  },
  {
    q: "What is the fee and duration for the Java training in Kadapa?",
    a: "The course spans 8 to 10 weeks of intensive hands-on lab sessions. We offer transparent, student-friendly fees with flexible installment options. Contact us on WhatsApp for ongoing batch schedules and early-bird scholarship discounts.",
  },
  {
    q: "Where is the MOMO Academy training lab located in Kadapa?",
    a: "Our lab and classroom facility is located at 4/106, Krishnapuram, Kadapa, Andhra Pradesh — 516005, easily accessible from all major colleges and RTC bus stand in Kadapa.",
  },
];

export default function JavaTrainingKadapaPage() {
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
            "name": "Java Training Kadapa",
            "item": "https://www.momoittechnologies.com/academy/java-training-kadapa"
          }
        ]
      },
      {
        "@type": "Course",
        "name": "Core & Advanced Java Training in Kadapa",
        "description": "Comprehensive practical Java programming course covering Java 17+, OOPs, Collections Framework, Stream API, and JDBC connectivity in Kadapa.",
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
        "educationalCredentialAwarded": "Verified Java Developer Certification & Project Experience Letter",
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
                Java Training Kadapa
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
                Verified Certificate
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
              Core Java &amp; Advanced Java Training in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-600">
                Kadapa, Andhra Pradesh
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
              Master the world&apos;s most reliable enterprise programming language. Learn modern Java 17+, Object-Oriented design, Collections Framework, Stream API, and JDBC database programming with 100% hands-on coding inside our Kadapa lab.
            </p>

            {/* Quick Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 my-6 border-y border-gray-100">
              <div>
                <div className="text-xs text-gray-400 font-medium">Duration</div>
                <div className="text-sm font-bold text-navy-950">8 – 10 Weeks</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Mode</div>
                <div className="text-sm font-bold text-navy-950">Hybrid (Lab + Online)</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Live Coding</div>
                <div className="text-sm font-bold text-emerald-600">100+ Programs</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Lab Address</div>
                <div className="text-sm font-bold text-navy-950">Krishnapuram, Kadapa</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20Academy,%20I%20want%20to%20enroll%20in%20the%20Java%20Training%20in%20Kadapa.%20Please%20share%20the%20syllabus%20and%20next%20batch%20date."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Java Batch on WhatsApp</span>
              </a>
              <Link
                href="/academy/full-stack-development-training-kadapa"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm transition-all"
              >
                <span>View Full-Stack Java Track</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Section: Learning Advantage */}
          <div className="mb-14">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                The Practical Approach
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Why Students Learn Faster with MOMO Academy Kadapa
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Modern Java 17/21 Standards</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Learn modern Java features including records, pattern matching, switch expressions, and stream processing used in current tech companies.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Deep Object-Oriented Design</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Understand real-world OOP design patterns, SOLID principles, and clean coding practices that interviewers look for in candidate evaluations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">MNC Coding Round Preparation</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Practice real coding interview challenges from TCS NQT, Cognizant, Wipro, and product companies with live mentor debugging.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Comprehensive Curriculum */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <div className="max-w-2xl mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Detailed Course Syllabus
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Core Java to Enterprise Database Connectivity
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                A structured 4-module progression taking you from foundational syntax to multi-threaded enterprise database applications.
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
              Frequently Asked Questions: Java Training in Kadapa
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
              Explore More Career Programs in Kadapa
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/academy/automation-testing-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Automation Testing Kadapa →
              </Link>
              <Link href="/academy/selenium-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Selenium Training Kadapa →
              </Link>
              <Link href="/academy/full-stack-development-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Full-Stack Development Kadapa →
              </Link>
              <Link href="/kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200 transition-colors">
                Visit Kadapa Office &amp; Lab →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

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
  Database,
  Layers,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Full-Stack Web Development Course in Kadapa | MOMO Academy",
  description:
    "Master Full-Stack Software Development with Java, Spring Boot 3, React 19, Next.js, and PostgreSQL in Kadapa. 100% practical lab, verified certificate, and guaranteed live internship in Krishnapuram.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/academy/full-stack-development-training-kadapa",
  },
  openGraph: {
    title: "Full-Stack Web Development Course in Kadapa | MOMO Academy",
    description:
      "Kadapa's #1 Full-Stack Developer Course. Build commercial full-stack web applications with React 19 and Java Spring Boot at MOMO Academy Kadapa.",
    url: "https://www.momoittechnologies.com/academy/full-stack-development-training-kadapa",
  },
};

const curriculumModules = [
  {
    title: "Module 1: Modern Frontend Engineering (React 19 & Next.js)",
    topics: [
      "Modern JavaScript (ES6+, Promises, Async/Await, Closures, Destructuring)",
      "React 19 Component Architecture, JSX, Props, and State Management with Hooks",
      "Tailwind CSS for responsive mobile-first UI design",
      "Next.js App Router, Server Components, and Dynamic Client Routing",
      "API Client Integration: Axios, Fetch API, and Error Boundaries",
    ],
  },
  {
    title: "Module 2: Enterprise Backend with Java Spring Boot 3",
    topics: [
      "Spring Framework Core: Inversion of Control (IoC) & Dependency Injection (DI)",
      "Spring Boot 3 Web Starter: Building RESTful APIs and Controller Endpoints",
      "Spring Data JPA & Hibernate ORM: Entity relationships (OneToMany, ManyToMany)",
      "Spring Security 6: JWT Token Authentication, Password Hashing & Role-Based Access Control",
      "Global Exception Handling, Input Validation with Hibernate Validator, and Logging",
    ],
  },
  {
    title: "Module 3: Relational Database Architecture & Cloud Deployment",
    topics: [
      "PostgreSQL & MySQL Database Design, Normalization & Indexing for High Performance",
      "Writing Complex SQL Queries, Joins, Aggregations, and Stored Procedures",
      "Database Migrations with Flyway / Liquibase",
      "Containerization Basics with Docker & Cloud Deployment to Vercel and AWS",
      "Git & GitHub Collaboration, Pull Requests, Code Reviews, and GitHub Actions CI/CD",
    ],
  },
  {
    title: "Module 4: Live Enterprise Capstone Project & Internship",
    topics: [
      "Building a Commercial Multi-Tenant E-Commerce / Operations Portal from Scratch",
      "Integrating Payment Gateways: Razorpay, Cashfree & Direct UPI",
      "Live Deployment to Production Domains with SSL and Cloud Monitoring",
      "Verified Internship Experience Letter on MOMO IT Technologies Client Projects",
      "1-on-1 ATS Resume Review, Mock Technical Interviews & Placement Support",
    ],
  },
];

const faqs = [
  {
    q: "Why is MOMO Academy the best Full-Stack training institute in Kadapa?",
    a: "Unlike typical theory-based institutes that only teach static HTML/CSS or outdated technologies, MOMO Academy teaches the exact tech stack used by modern product companies: React 19, Next.js, and Java Spring Boot 3. You work inside an operating IT software company and build real commercial web applications.",
  },
  {
    q: "What is the duration of the Full-Stack Developer course in Kadapa?",
    a: "The program spans 14 to 16 weeks of intensive practical training and includes a dedicated 4-week live client internship where you write production code for commercial clients.",
  },
  {
    q: "Do I get a verified certificate and internship experience letter?",
    a: "Yes. Graduates receive a Verified Course Completion Certificate with a unique Credential ID verifiable online, along with a formal Live Project Internship Experience Letter from MOMO IT Technologies.",
  },
  {
    q: "Can I attend this course if I am currently a college student or working professional?",
    a: "Yes. We offer flexible morning and evening batches, as well as weekend schedules. Students can attend in-person at our Krishnapuram lab or join live via Google Meet with session recordings.",
  },
  {
    q: "How does MOMO Academy assist with job placements in Bangalore, Hyderabad, and Kadapa?",
    a: "We provide complete end-to-end placement assistance: ATS-optimized resume building, GitHub portfolio development, algorithmic coding practice, and live mock technical interviews targeting product companies and MNCs.",
  },
];

export default function FullStackDevelopmentTrainingKadapaPage() {
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
            "name": "Full-Stack Development Training Kadapa",
            "item": "https://www.momoittechnologies.com/academy/full-stack-development-training-kadapa"
          }
        ]
      },
      {
        "@type": "Course",
        "name": "Full-Stack Web Development Course in Kadapa (Java + Spring Boot + React 19)",
        "description": "Full-stack software engineering program covering React 19, Next.js, Spring Boot 3 microservices, PostgreSQL, and cloud deployments in Kadapa.",
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
        "educationalCredentialAwarded": "Full-Stack Software Engineer Certificate & Live Internship Experience Letter",
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
                Full-Stack Development Training Kadapa
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
                React 19 + Spring Boot 3
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
              Full-Stack Web Development Course in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-600">
                Kadapa, Andhra Pradesh
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
              Become a complete software engineer capable of building and deploying modern web applications end-to-end. Master React 19, Next.js, Java Spring Boot 3 microservices, and PostgreSQL database architecture at our Kadapa campus.
            </p>

            {/* Quick Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 my-6 border-y border-gray-100">
              <div>
                <div className="text-xs text-gray-400 font-medium">Duration</div>
                <div className="text-sm font-bold text-navy-950">14 – 16 Weeks</div>
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
                <div className="text-xs text-gray-400 font-medium">Campus Location</div>
                <div className="text-sm font-bold text-navy-950">Krishnapuram, Kadapa</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20Academy,%20I%20am%20interested%20in%20joining%20the%20Full-Stack%20Development%20Course%20in%20Kadapa.%20Please%20share%20the%20syllabus%20and%20fees."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Full-Stack Batch on WhatsApp</span>
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm transition-all"
              >
                <span>View Company Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Section: Practical Highlights */}
          <div className="mb-14">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                The Practical Advantage
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Why Employers Hire MOMO Academy Graduates
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Modern 2026 Tech Stack</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  No outdated technologies. We teach modern React 19, Next.js, and Spring Boot 3—the identical stack used by high-paying product startups.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Architect End-to-End Systems</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  From designing relational PostgreSQL database tables to writing JWT auth microservices and responsive frontends, you build the whole system.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Live Commercial Internship</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Gain genuine commercial engineering experience building software for active businesses in Kadapa and earn a verified work experience letter.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Comprehensive Curriculum */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <div className="max-w-2xl mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Full-Stack Syllabus
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Frontend, Backend, Database &amp; Cloud Deployment
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                A rigorous 4-module curriculum engineered to transition college freshers and junior coders into autonomous full-stack engineers.
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

          {/* Section: Technologies Mastered */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-14">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                Technology Stack
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Tools &amp; Frameworks You Will Master Hands-On
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["React 19 & Next.js", "Tailwind CSS", "Java 17+ & Spring Boot 3", "Spring Security & JWT", "PostgreSQL & JPA", "Docker Basics", "Git & GitHub", "Cloud Deployment"].map((tool, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-sm font-bold text-teal-300">{tool}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: FAQs */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
              Frequently Asked Questions: Full-Stack Training in Kadapa
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
                Core Java Training Kadapa →
              </Link>
              <Link href="/academy/automation-testing-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Automation Testing Kadapa →
              </Link>
              <Link href="/academy/flutter-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Flutter App Development Kadapa →
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

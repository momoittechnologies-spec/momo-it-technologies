import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Star,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Building2,
  Award,
  Code2,
  FileCheck,
  Briefcase,
  ExternalLink,
  Linkedin,
  GraduationCap,
  BadgeCheck,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Careers | MOMO IT Technologies — Kadapa Software & IT Academy",
  description:
    "Learn about MOMO IT Technologies: A registered software engineering company and premier IT Academy based in 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa — 516003.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/about",
  },
  openGraph: {
    title: "About Us & Careers | MOMO IT Technologies — Kadapa Software & IT Academy",
    description:
      "Kadapa's 4.8★ rated software engineering company and training academy. Discover our mission, leadership, active career openings, and commercial case studies in Rayalaseema.",
    url: "https://www.momoittechnologies.com/about",
  },
};

export default function AboutPage() {
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
            "name": "About Us",
            "item": "https://www.momoittechnologies.com/about"
          }
        ]
      },
      {
        "@type": "AboutPage",
        "@id": "https://www.momoittechnologies.com/about#webpage",
        "url": "https://www.momoittechnologies.com/about",
        "name": "About MOMO IT Technologies",
        "description": "Background, corporate credentials, leadership, and mission of MOMO IT Technologies in Kadapa, Andhra Pradesh.",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "MOMO IT TECHNOLOGIES",
          "image": "https://www.momoittechnologies.com/logo.svg",
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
          "foundingDate": "2025-06-01",
          "founder": {
            "@type": "Person",
            "@id": "https://www.momoittechnologies.com/about#founder",
            "name": "Mohan Damerla"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.4713,
            "longitude": 78.8237
          }
        }
      },
      {
        "@type": "JobPosting",
        "title": "Business Development & Marketing Executive",
        "description": "MOMO IT TECHNOLOGIES is hiring a target-driven Business Development & Marketing Executive at our Krishnapuram, Kadapa office to lead B2B software/website client acquisition and MOMO Academy campus outreach.",
        "datePosted": "2026-09-25",
        "validThrough": "2026-12-31T23:59:59Z",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "MOMO IT TECHNOLOGIES",
          "sameAs": "https://www.momoittechnologies.com",
          "logo": "https://www.momoittechnologies.com/logo.svg"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4/106, Chowdeswari Temple Lane, Krishnapuram",
            "addressLocality": "Kadapa",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "516003",
            "addressCountry": "IN"
          }
        },
        "directApply": true,
        "url": "https://www.linkedin.com/jobs/view/4470198185/"
      },
      {
        "@type": "Person",
        "@id": "https://www.momoittechnologies.com/about#founder",
        "name": "Mohan Damerla",
        "jobTitle": "Founder & CEO",
        "image": "https://www.momoittechnologies.com/mohan-damerla.png",
        "url": "https://www.linkedin.com/in/mohan-damerla/",
        "sameAs": [
          "https://www.linkedin.com/in/mohan-damerla/"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "MOMO IT TECHNOLOGIES",
          "url": "https://www.momoittechnologies.com"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "B.Tech in Information Technology (2012)"
        },
        "knowsAbout": [
          "Software Development",
          "Custom ERP Development",
          "Automation Testing",
          "Mobile Application Development",
          "Selenium WebDriver",
          "Java",
          "AWS",
          "Microsoft MCSE"
        ],
        "description": "Founder & CEO of MOMO IT Technologies with 10+ years of IT industry experience spanning software development, custom ERP systems, automation testing, and mobile application engineering."
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-semibold" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200/80">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Corporate Identity &amp; Heritage
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
              Building World-Class Technology from Kadapa, Andhra Pradesh
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              MOMO IT TECHNOLOGIES started with a foundational conviction: world-class software engineering and premier tech education shouldn&apos;t be restricted to tier-1 metro cities.
            </p>
          </div>

          {/* Key Trust Signals Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs text-center">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 mx-auto mb-1.5" />
              <div className="text-lg font-black text-navy-950">4.8★ Google</div>
              <div className="text-xs text-gray-500">Highest Rated in Kadapa</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs text-center">
              <ShieldCheck className="w-5 h-5 text-brand-600 mx-auto mb-1.5" />
              <div className="text-lg font-black text-navy-950">Est. June 2025</div>
              <div className="text-xs text-gray-500">Registered Enterprise</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs text-center">
              <Building2 className="w-5 h-5 text-teal-600 mx-auto mb-1.5" />
              <div className="text-lg font-black text-navy-950">Krishnapuram</div>
              <div className="text-xs text-gray-500">Kadapa Headquarters</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs text-center">
              <Code2 className="w-5 h-5 text-indigo-600 mx-auto mb-1.5" />
              <div className="text-lg font-black text-navy-950">Dual Vertical</div>
              <div className="text-xs text-gray-500">Tech Services &amp; Academy</div>
            </div>
          </div>

          {/* The Story */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12 space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-extrabold text-navy-950 tracking-tight">
              From Local Mentorship Excellence to Full-Scale Technology Partner
            </h2>
            <p>
              Originally established as an elite software training lab in Krishnapuram, Kadapa, <strong>MOMO IT TECHNOLOGIES</strong> quickly earned a stellar regional reputation for practical, code-first mentoring in Automation Testing, Core Java, Selenium WebDriver, and Software Quality Assurance.
            </p>
            <p>
              Recognizing that our academy students needed real commercial code exposure—and that local enterprises and global startups needed honest, transparent engineering without metro agency inflation—we expanded our operations into a dedicated <strong>Software Engineering &amp; IT Services division</strong>.
            </p>
            <p>
              Today, our Kadapa engineering center actively designs, builds, and maintains commercial software products, including:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-950">Vijaya&apos;s Yummy Food Cloud PWA:</strong>
                  <span className="text-sm text-gray-600 block mt-0.5">
                    A multi-terminal online ordering and POS system that eliminated 30% aggregator marketplace commissions, integrated kitchen display systems (KDS), and automated Bluetooth thermal billing in Kadapa.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-950">MANA TOURS &amp; TRAVELS (www.manatoursandtravels.com):</strong>
                  <span className="text-sm text-gray-600 block mt-0.5">
                    Kadapa&apos;s 5.0★ premier travel, cab rental, and tour fleet booking platform featuring real-time vehicle reservations and 24/7 AI Voice assistance.
                  </span>
                </div>
              </li>
            </ul>
            <p>
              Operating from our dedicated facility at <strong>4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa</strong> gives our clients a unique competitive advantage: near-zero metro overhead, founder-led engineering transparency, and fierce, distraction-free technical execution.
            </p>
          </div>

          {/* Meet the Founder */}
          <div id="founder" className="bg-white rounded-3xl border border-gray-200/80 shadow-card mb-12 overflow-hidden scroll-mt-36">
            <div className="p-8 sm:p-10 md:p-12">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-navy-50 text-navy-800 text-xs font-bold uppercase tracking-wider mb-6 border border-navy-200/80">
                <Award className="w-3.5 h-3.5" />
                Leadership
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Photo & Quick Identity */}
                <div className="shrink-0 flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-navy-100 shadow-lg mb-4">
                    <Image
                      src="/mohan-damerla.png"
                      alt="Mohan Damerla — Founder & CEO, MOMO IT Technologies, Kadapa"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-extrabold text-navy-950">Mohan Damerla</h3>
                  <p className="text-sm font-semibold text-brand-600 mt-0.5">Founder &amp; CEO</p>
                  <a
                    href="https://www.linkedin.com/in/mohan-damerla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    Connect on LinkedIn
                  </a>
                </div>

                {/* Bio & Credentials */}
                <div className="flex-1 space-y-5">
                  <p className="text-gray-700 leading-relaxed">
                    A proud son of <strong className="text-navy-950">Kadapa</strong>, Mohan Damerla brings <strong className="text-navy-950">10+ years of hands-on IT industry experience</strong> spanning enterprise software engineering, custom ERP implementation, test automation architecture, and mobile application development. After graduating with a <strong className="text-navy-950">B.Tech in Information Technology (2012)</strong> and building a career across multiple enterprise environments, Mohan returned to his hometown with a singular mission: prove that world-class software can be engineered right here in Rayalaseema.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In <strong className="text-navy-950">June 2025</strong>, he founded <strong className="text-navy-950">MOMO IT TECHNOLOGIES</strong> — combining deep technical execution with a genuine passion for mentoring the next generation of software engineers from Kadapa and the surrounding Rayalaseema region. Under his leadership, MOMO IT has rapidly grown into a dual-vertical company delivering commercial software products for businesses across India while simultaneously training job-ready engineers through the MOMO IT Academy.
                  </p>

                  {/* Core Expertise */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Cpu className="w-4 h-4 text-brand-600" />
                      <span className="text-xs font-bold text-navy-950 uppercase tracking-wider">Core Technical Expertise</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Software Development",
                        "Custom ERP Systems",
                        "Automation Testing",
                        "Mobile App Development",
                        "Selenium & Java",
                        "Web Applications",
                        "SaaS Products",
                        "Cloud Architecture",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-surface-light border border-gray-200 text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credentials Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-gray-100">
                      <GraduationCap className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-navy-950">B.Tech — IT</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">Engineering Graduate, 2012</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-gray-100">
                      <BadgeCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-navy-950">AWS Certified</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">Amazon Web Services</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-light border border-gray-100">
                      <BadgeCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-navy-950">Microsoft MCSE</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">Microsoft Certified Solutions Expert</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To empower enterprises across Andhra Pradesh and global founders with high-speed, bug-free web applications and custom software while transforming aspiring Rayalaseema graduates into autonomous, industry-ready software engineers.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">The Synergistic Flywheel</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Practical education grooms top 5% engineering talent inside our Kadapa lab. In turn, real commercial client projects provide our learners with genuine, verified internship experience before they face MNC hiring rounds.
              </p>
            </div>
          </div>

          {/* Official Verification Details */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl mb-12">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
              <FileCheck className="w-4 h-4" />
              Official Business Identity &amp; Heritage
            </div>
            <h3 className="text-2xl font-extrabold mb-4">
              Registered Technology Entity in Andhra Pradesh
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-2xl">
              MOMO IT TECHNOLOGIES operates as a registered technology company and professional IT academy headquartered in Kadapa, Andhra Pradesh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-gray-400">Official Registered Name</div>
                <div className="text-sm font-bold text-white mt-1">MOMO IT TECHNOLOGIES</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-gray-400">Registered Office Address</div>
                <div className="text-sm font-bold text-white mt-1">4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa - 516003</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-gray-400">Year of Establishment</div>
                <div className="text-sm font-bold text-teal-300 mt-1">June 2025</div>
              </div>
            </div>
          </div>

          {/* Careers & Active Job Openings */}
          <div id="careers" className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-brand-500/30 shadow-card mb-12 scroll-mt-36">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                We Are Hiring in Kadapa
              </div>
              <span className="text-xs font-semibold text-gray-500">
                Location: 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa — 516003
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-2xl bg-surface-light border border-gray-200/80">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-brand-600 shrink-0" />
                  <h3 className="text-xl font-extrabold text-navy-950">
                    Business Development &amp; Marketing Executive (Kadapa Office)
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Drive B2B Website/Software client acquisition across Kadapa businesses and lead MOMO Academy campus outreach across engineering &amp; degree colleges. Fixed monthly salary + uncapped performance incentives.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700">Full-Time • On-site (Kadapa)</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700">Telugu &amp; English Fluency</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-brand-50 border border-brand-200 text-brand-700">0–3 Yrs Experience</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                <a
                  href="https://www.linkedin.com/jobs/view/4470198185/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs shadow-sm transition-all"
                >
                  <span>Apply on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies%2C%20I%20am%20interested%20in%20applying%20for%20the%20Marketing%20%26%20Business%20Development%20role%20in%20Kadapa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-navy-950 border border-gray-200 font-bold text-xs transition-all"
                >
                  <span>Apply via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Partner with MOMO IT Technologies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/kadapa"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-navy-950 font-bold text-sm shadow-xs transition-all"
            >
              <span>Visit Our Kadapa Office</span>
              <Building2 className="w-4 h-4 text-brand-600" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, Sparkles, ArrowRight } from "lucide-react";

export const homeFaqs = [
  {
    q: "How do you estimate project costs and delivery timelines?",
    a: "We work on transparent, fixed-milestone pricing or dedicated monthly engineering pods. Following a free 30-minute discovery consultation, our solutions architects audit your specifications and provide a detailed technical roadmap with defined deliverables, milestones, and guarantees—ensuring zero unexpected scope creep or hidden fees.",
  },
  {
    q: "Who owns the source code and intellectual property?",
    a: "You retain 100% ownership of all source code, database architectures, system configurations, and intellectual property from day one. Upon final sprint milestone sign-off, full repository access and cloud credentials are transferred directly to your organization with zero proprietary locks.",
  },
  {
    q: "What is your primary technology stack and why modern stacks?",
    a: "We engineer using modern, enterprise-grade stacks: Next.js 15, React 19, and TypeScript on the frontend; Java 21, Spring Boot 3, and Python FastAPI on the backend; and PostgreSQL, Supabase, and Redis for storage. We avoid outdated PHP or monolithic CMS architectures because modern stacks deliver sub-second edge speeds, 99.98% uptime, and long-term maintainability.",
  },
  {
    q: "How does your QA automation prevent production regressions?",
    a: "Our dedicated QA engineering pods integrate Selenium WebDriver 4 and Playwright automated regression suites directly into GitHub Actions CI/CD pipelines. Every code commit runs through hundreds of automated functional, API, and cross-browser assertions before deployment, preventing production downtime.",
  },
  {
    q: "Can you modernize or re-architect an existing legacy system?",
    a: "Yes. We frequently modernize legacy monolithic applications (PHP, ASP.NET, Java EE) using the Strangler Fig pattern. We decouple monolithic databases into modern PostgreSQL / Supabase, rebuild frontends in Next.js 15, and execute zero-downtime cutovers without interrupting daily operations.",
  },
  {
    q: "How does MOMO Academy relate to MOMO IT Technologies?",
    a: "MOMO Academy is our specialized in-house R&D talent incubator. Under the direct leadership of founder Mohan Damerla, we train and mentor top engineering talent in automation testing, Java, and modern web architectures. This talent engine powers our production client squads, guaranteeing thoroughly vetted engineers with deep testing discipline.",
  },
  {
    q: "Do you provide post-launch maintenance, SLAs, and cloud support?",
    a: "Yes. Every deployment includes an initial 30-day warranty period covering bug fixes and performance tuning. Afterward, we offer flexible Service Level Agreements (SLAs) including 24/7 uptime monitoring, security patching, cloud database backups, and feature sprint enhancements.",
  },
  {
    q: "Can we hire a dedicated developer or engineering squad?",
    a: "Yes. We provide dedicated engineering pods consisting of full-stack developers, UI/UX designers, and QA automation engineers who integrate directly with your company's Slack/Jira. Squads operate on agile 2-week sprint cadences with daily standups and transparent commit histories.",
  },
  {
    q: "What makes MOMO IT Technologies different from typical agencies?",
    a: "We are an engineering-first technology company, not a generic marketing agency. We build custom software with automated test coverage, zero-commission payment architectures (like our proprietary NPCI UPI QR engine for AS Refrigerations), and sovereign code ownership backed by a physical engineering office in Kadapa, AP.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative overflow-hidden bg-cyber-grid">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Intent Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Direct, factual answers to common questions about our software development process, intellectual property rights, and engineering standards.
          </p>
        </div>

        <div className="space-y-3.5">
          {homeFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-slate-50/80 rounded-2xl border border-gray-200/80 shadow-xs transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-navy-950 flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-100/70 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                      Q{i + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 border-blue-300 text-blue-700" : "text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-gray-600 leading-relaxed pl-13 sm:pl-14 border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-gray-200/80">
          <p className="text-sm font-semibold text-navy-950 mb-2">
            Have a specific architecture question or custom NDA requirement?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-electric hover:underline underline-offset-4"
          >
            <span>Speak Directly with an Engineering Lead</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

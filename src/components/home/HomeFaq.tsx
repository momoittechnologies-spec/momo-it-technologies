import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export const homeFaqs = [
  {
    q: "What services does MOMO IT Technologies provide?",
    a: "MOMO IT Technologies is a comprehensive technology company providing custom web application development, multi-tenant SaaS engineering, cross-platform Flutter mobile apps, enterprise ERP billing systems, QA test automation pods, AI business automation workflows, and performance digital marketing.",
  },
  {
    q: "Where is MOMO IT Technologies located?",
    a: "Our permanent engineering office and training academy is located at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, Andhra Pradesh — 516003, India. While our headquarters is in Kadapa, we engineer and deploy software solutions for commercial clients across Andhra Pradesh, South India, and overseas.",
  },
  {
    q: "How does MOMO IT Technologies ensure software quality?",
    a: "We maintain dedicated QA Automation pods employing Selenium WebDriver 4, Playwright, and RestAssured. Every feature goes through automated regression testing and API payload verification before reaching production, ensuring zero defects and sub-second performance.",
  },
  {
    q: "What is your typical project delivery timeline?",
    a: "Standard business websites and landing platforms are completed within 7 to 14 business days. Custom business ERP systems, mobile applications, and SaaS platforms typically take 4 to 8 weeks depending on integration requirements and complexity.",
  },
  {
    q: "Do you build custom billing software with thermal receipt printers?",
    a: "Yes. We engineer high-speed POS billing software with native ESC/POS thermal printer integration (58mm/80mm), automated GST calculations, dynamic UPI QR codes, and real-time inventory management.",
  },
  {
    q: "How does MOMO Academy relate to MOMO IT Technologies?",
    a: "MOMO Academy is our specialized internal talent incubation lab. We train aspiring software engineers and SDETs in Core Java, Selenium Automation, and Full-Stack development. Top learners work on real client codebases, giving our software development clients access to vetted, highly trained talent pods.",
  },
  {
    q: "How can I get an accurate cost estimate for my project?",
    a: "You can schedule a free 30-minute discovery call via our Contact page, message us directly on WhatsApp at +91 86398 31132, or visit our Kadapa office. We review your requirements and provide a transparent, fixed-price milestone estimate.",
  },
];

export default function HomeFaq() {
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
    <section className="py-20 lg:py-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mt-3">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Direct, factual answers to common questions about our software development, pricing, and company operations.
          </p>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface-light rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-bold text-navy-950 flex items-start gap-3 mb-3">
                <HelpCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 pl-8 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Have a specific technical question or project requirement?</p>
          <Link
            href="/contact"
            className="text-sm font-bold text-brand-600 hover:text-brand-700 underline underline-offset-4"
          >
            Speak Directly with an Engineering Lead →
          </Link>
        </div>
      </div>
    </section>
  );
}

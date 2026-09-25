import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import SaaSEstimator from "@/components/services/SaaSEstimator";

export const metadata = {
  title: "IT & Software Engineering Services in Kadapa | MOMO IT Technologies",
  description:
    "Explore our complete suite of software engineering services in Kadapa: Web & SaaS Product Engineering, QA Automation Testing, Flutter Mobile Apps, and AI Solutions.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services",
  },
  openGraph: {
    title: "IT & Software Engineering Services in Kadapa | MOMO IT Technologies",
    description:
      "Web & SaaS development, QA automation pods, Flutter mobile apps, and AI software engineering in Kadapa, Andhra Pradesh.",
    url: "https://www.momoittechnologies.com/services",
  },
};

export default function ServicesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "MOMO IT Technologies Software Engineering Services",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Web Development in Kadapa",
            url: "https://www.momoittechnologies.com/services/web-development-kadapa",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Custom Software Development in Kadapa",
            url: "https://www.momoittechnologies.com/services/software-development-kadapa",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "QA Automation & Software Testing in Kadapa",
            url: "https://www.momoittechnologies.com/services/qa-automation-kadapa",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "AI Software Engineering in Kadapa",
            url: "https://www.momoittechnologies.com/services/ai-development-kadapa",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Mobile App Development in Kadapa",
            url: "https://www.momoittechnologies.com/services/mobile-app-development-kadapa",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "SaaS Product Engineering in Kadapa",
            url: "https://www.momoittechnologies.com/services/saas-development-kadapa",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Business Software & ERP Systems in Kadapa",
            url: "https://www.momoittechnologies.com/services/business-software-kadapa",
          },
        ],
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
        ],
      },
    ],
  };

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-surface-light min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mt-3 mb-4">
            End-to-End Technology &amp; Quality Engineering
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From test automation and custom web platforms to dedicated developer staffing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesData.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between scroll-mt-36"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                    {s.badge || "Featured"}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-navy-950 mb-2">
                  {s.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {s.description}
                </p>

                <div className="space-y-2 mb-6">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-brand-600 transition-colors"
                >
                  <span>Explore {s.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-brand-600 hover:text-brand-700"
                >
                  Get Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope & Timeline Estimator */}
        <div className="mt-16">
          <SaaSEstimator />
        </div>
      </div>
    </div>
  );
}

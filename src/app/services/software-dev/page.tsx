import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Code2,
  Database,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import SaaSEstimator from "@/components/services/SaaSEstimator";
import WhyChooseUsComparison from "@/components/services/WhyChooseUsComparison";

export const metadata = {
  title: "Web & SaaS Product Engineering | MOMO IT Technologies",
  description:
    "Our core service: production-grade Web Applications, scalable SaaS platforms, and mobile apps engineered with Next.js 15, React 19, Spring Boot 3, and Flutter by MOMO IT Technologies.",
};

export default function SoftwareDevPage() {
  const stacks = [
    {
      title: "Modern Web & SaaS Development",
      desc: "Fast, accessible, and SEO-optimized web applications built with Next.js and React. Clean component architecture and sub-second load times.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Enterprise Backend & APIs",
      desc: "High-concurrency microservices, RESTful APIs, and secure database designs powered by Java Spring Boot and PostgreSQL.",
      tech: ["Java 21", "Spring Boot 3", "PostgreSQL", "Hibernate", "JWT"],
    },
    {
      title: "Cross-Platform Mobile Apps",
      desc: "Native-quality iOS and Android applications developed with Flutter from a single codebase, cutting build costs and time in half.",
      tech: ["Flutter", "Dart", "Firebase", "App Store", "Play Store"],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/60">
            <Globe className="w-3.5 h-3.5" />
            Software Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            Custom Web &amp; Software Development
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From initial requirement analysis and UI/UX design to robust cloud deployment, we turn complex business logic into clean digital experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-md transition-all"
            >
              Get Free Project Estimate
            </Link>
            <Link
              href="/case-studies/mana-tours"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-navy-950 font-bold text-sm border border-gray-200 shadow-sm transition-all"
            >
              Explore Live Case Studies
            </Link>
          </div>
        </div>

        {/* Development Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stacks.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-navy-950 mb-2">
                  {st.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {st.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                {st.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-50 text-gray-700 border border-gray-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope & Timeline Estimator */}
        <div className="mb-16">
          <SaaSEstimator />
        </div>

        {/* Why Choose Us Comparison */}
        <WhyChooseUsComparison />

        {/* Cross-Link to Flagships */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
              Real-World Reference
            </span>
            <h3 className="text-xl font-extrabold text-navy-950">
              See how we built Vijaya&apos;s Yummy Food and MANA Tours &amp; Travels
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Explore our architecture decisions, performance benchmarks, and user experience workflows.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/case-studies/vijayas-yummy-food"
              className="px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs font-bold text-navy-950 transition-colors"
            >
              Vijaya&apos;s Food Details
            </Link>
            <Link
              href="/case-studies/mana-tours"
              className="px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold transition-colors"
            >
              Mana Tours Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Layers, Cpu, Database, Server, Globe } from "lucide-react";
import InteractiveArchitecture from "@/components/home/InteractiveArchitecture";

export const metadata: Metadata = {
  title: "System Architecture & Engineering Blueprint | MOMO IT Technologies",
  description:
    "Explore our 6-layer enterprise software architecture: Next.js 15 Edge SSR, Spring Boot 3 microservices, PostgreSQL ACID databases, autonomous AI agents, and automated QA pipelines.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/architecture",
  },
  openGraph: {
    title: "System Architecture & Engineering Blueprint | MOMO IT Technologies",
    description:
      "Full technical specification and architecture blueprint for enterprise systems, multi-tenant SaaS, and real-time mobile applications engineered by MOMO IT Technologies.",
    url: "https://www.momoittechnologies.com/architecture",
  },
};

export default function ArchitecturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
            name: "Architecture",
            item: "https://www.momoittechnologies.com/architecture",
          },
        ],
      },
      {
        "@type": "TechArticle",
        headline: "MOMO IT Technologies 6-Layer Enterprise Software Architecture",
        description: "Technical specification covering ingress, reactive presentation, microservices, transactional ACID databases, autonomous agent pipelines, and continuous QA verification.",
        author: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
        },
      },
    ],
  };

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 bg-navy-950 text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 pb-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-gray-400 font-mono">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-cyan-300 font-bold">Architecture Blueprint</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enterprise Technical Specification</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Production Software Architecture &amp; System Design
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            A comprehensive overview of how MOMO IT Technologies architects, secures, and operates mission-critical digital systems. From sub-second edge ingress to ACID-compliant storage and autonomous AI agents.
          </p>
        </div>
      </div>

      {/* Interactive System Blueprint */}
      <InteractiveArchitecture />

      {/* CTA Footer */}
      <div className="bg-slate-900 border-t border-white/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need a Custom Architecture for Your Platform?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-xl mx-auto">
            Our principal solutions architects review your requirements, design database schemas, and establish your deployment pipeline with zero vendor lock-in.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all"
            >
              <span>View Commercial Case Studies</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

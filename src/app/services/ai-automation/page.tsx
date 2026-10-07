import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Bot,
  Sparkles,
  Zap,
  Layers,
  Database,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  HelpCircle,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Business Automation & Agentic AI Solutions | MOMO IT Technologies",
  description:
    "MOMO IT Technologies engineers custom AI business automation systems, WhatsApp AI bots, enterprise RAG search engines, and multi-agent workflows for modern enterprises.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/ai-automation",
  },
  openGraph: {
    title: "AI Business Automation & Agentic AI Solutions | MOMO IT Technologies",
    description:
      "Transform business efficiency with custom autonomous AI agents, enterprise RAG, WhatsApp Cloud bots, and intelligent document extraction. Engineered by MOMO IT Technologies.",
    url: "https://www.momoittechnologies.com/services/ai-automation",
  },
};

const aiCapabilities = [
  {
    icon: Bot,
    title: "Autonomous Multi-Agent Workflows",
    desc: "Deploy collaborative AI agents (planner, researcher, coder, validator) that automate repetitive multi-step knowledge tasks without human fatigue.",
  },
  {
    icon: Database,
    title: "Enterprise RAG (Retrieval-Augmented Generation)",
    desc: "Connect LLMs securely to your private company PDFs, databases, and operational SOPs for 100% accurate, hallucination-free internal question answering.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Cloud AI Bots",
    desc: "Conversational 24/7 lead qualification, instant appointment scheduling, order tracking, and customer support connected directly to your PostgreSQL database.",
  },
  {
    icon: Cpu,
    title: "Intelligent Document Processing & OCR",
    desc: "Automate invoice extraction, receipts, GST filings, and paper forms into structured database rows with 99%+ accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Private Local LLM Deployments",
    desc: "Run open-weights models (Llama 3, Mistral) on private on-premise or sovereign cloud hardware for complete privacy and zero data leakage.",
  },
  {
    icon: Zap,
    title: "AI Cost & Token Optimization",
    desc: "Smart caching layers, semantic routers, and prompt engineering frameworks that reduce external LLM API costs by up to 60%.",
  },
];

const faqs = [
  {
    q: "How can AI automation help a growing business?",
    a: "AI automation eliminates routine operational bottlenecks—handling customer WhatsApp inquiries 24/7, categorizing invoices instantly, drafting proposals, and extracting data from legacy systems. This allows your team to handle 5x more business volume without linear staffing costs.",
  },
  {
    q: "Is our private business data secure when using AI?",
    a: "Yes. MOMO IT Technologies implements strict enterprise security guardrails. We engineer Retrieval-Augmented Generation (RAG) architectures with enterprise API privacy commitments or deploy private local LLMs on your own infrastructure so customer data is never used for model training.",
  },
  {
    q: "How much does a custom AI automation project cost?",
    a: "Targeted business AI integrations (such as intelligent WhatsApp customer service bots or automated document parsers) typically range from ₹30,000 to ₹75,000. Comprehensive multi-agent enterprise automation platforms range from ₹1,00,000 to ₹3,00,000+.",
  },
];

export default function AiAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/services/ai-automation#service",
        name: "AI Business Automation Services",
        serviceType: "Artificial Intelligence Solutions",
        provider: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
          logo: "https://www.momoittechnologies.com/logo.svg",
        },
        description:
          "Autonomous agentic workflows, enterprise RAG search systems, WhatsApp business bots, and operational AI automation engineered by MOMO IT Technologies.",
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
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Automation",
            item: "https://www.momoittechnologies.com/services/ai-automation",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="pt-32 sm:pt-36 md:pt-40 pb-20 bg-surface-light min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
            <li>
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-semibold" aria-current="page">
              AI Automation
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200/60">
            <Bot className="w-3.5 h-3.5" />
            Frontier AI Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15] mb-6">
            AI Business Automation &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-brand-600">
              Agentic Intelligence
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Deploy autonomous AI systems that eliminate repetitive operational work, capture leads 24/7 on WhatsApp, and extract intelligence from your private corporate data.
          </p>

          {/* AEO Quick-Answer */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-purple-200/80 shadow-sm text-left max-w-3xl mx-auto mb-8">
            <div className="text-xs font-extrabold text-purple-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600" />
              Quick Definition for Business Leaders &amp; AI Search
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>AI Business Automation</strong> is the application of frontier generative AI models, autonomous software agents, and retrieval systems to execute multi-step operational tasks without human intervention. MOMO IT Technologies architects bespoke AI systems that integrate with your databases, CRM, and communication channels to reduce costs and accelerate turnaround.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Schedule AI Automation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hi%20MOMO%20IT%20Technologies,%20I%20want%20to%20discuss%20AI%20Automation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:border-purple-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">{c.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 text-center tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-navy-950 flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-card text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-3">
            Bring Enterprise AI Directly Into Your Business
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Book a feasibility consultation to explore how automated agentic workflows can streamline your specific operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all"
            >
              Get Free AI Proposal
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm sm:text-base transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

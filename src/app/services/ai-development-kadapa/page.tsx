import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Bot,
  Sparkles,
  Cpu,
  Brain,
  CheckCircle2,
  ArrowRight,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  MessageCircle,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Software Development Company in Kadapa | MOMO IT Technologies",
  description:
    "MOMO IT Technologies is Kadapa's leading Artificial Intelligence and software engineering firm. We build autonomous Agentic AI systems, enterprise RAG knowledge bases, and custom LLM solutions.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/services/ai-development-kadapa",
  },
  openGraph: {
    title: "AI Software Development Company in Kadapa | MOMO IT Technologies",
    description:
      "Enterprise AI engineering firm in Kadapa, AP. Autonomous AI agents, LangChain, LangGraph, Vector Databases, Private RAG pipelines, and intelligent business automation.",
    url: "https://www.momoittechnologies.com/services/ai-development-kadapa",
  },
};

const problemsSolved = [
  {
    title: "High Human Labor Costs on Repetitive Business Tasks",
    desc: "Staff spend dozens of hours every week manually sorting invoices, answering repetitive customer questions, and updating spreadsheets.",
  },
  {
    title: "Hallucinating, Generic AI Tools (ChatGPT Out of the Box)",
    desc: "Off-the-shelf public AI models don't know your business data, invent false details, and can leak confidential corporate secrets.",
  },
  {
    title: "Unsearchable Business Documents & PDF Archives",
    desc: "Decades of legal, operational, and customer records remain buried in scattered PDFs and Google Drive folders without smart semantic search.",
  },
  {
    title: "Missing 24/7 Intelligent Customer Lead Response",
    desc: "Inquiries arriving after hours on WhatsApp or websites go unanswered for 12+ hours, causing prospective clients to reach out to competitors.",
  },
];

const aiCapabilities = [
  {
    icon: Bot,
    title: "Autonomous Agentic AI Workflows",
    desc: "Multi-agent systems built with LangGraph and CrewAI that can execute multi-step business logic: check databases, call APIs, send emails, and generate reports autonomously.",
  },
  {
    icon: Database,
    title: "Enterprise RAG (Retrieval-Augmented Generation)",
    desc: "Private knowledge engines connecting your company's contracts, policies, and product catalogs to LLMs using Vector DBs (Pinecone, pgvector) with zero hallucinations.",
  },
  {
    icon: Brain,
    title: "Intelligent WhatsApp & Web Customer Bots",
    desc: "Conversational AI integrated directly into the WhatsApp Cloud API that qualifies leads, handles customer support, and confirms bookings 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "Private & On-Premises Local LLMs",
    desc: "Open-source AI models (Llama 3, DeepSeek, Mistral) hosted securely within your own cloud boundary to guarantee complete data privacy and GDPR/DPDP compliance.",
  },
];

const technologies = [
  { name: "LangChain & LangGraph", role: "Orchestration framework for stateful multi-agent systems" },
  { name: "LlamaIndex & Vector DBs", role: "Hybrid semantic indexing with Pinecone, Chroma & pgvector" },
  { name: "Python, FastAPI & PyTorch", role: "High-throughput machine learning and API backend layer" },
  { name: "OpenAI, Anthropic & Gemini API", role: "State-of-the-art multimodal reasoning models" },
  { name: "Self-Hosted Llama 3 / Mistral", role: "Zero-data-leakage enterprise private deployments" },
];

const processSteps = [
  { step: "01", title: "Feasibility & Data Audit", desc: "We review your business data sources, documents, APIs, and determine the exact ROI of an AI integration." },
  { step: "02", title: "RAG & Vector Pipeline", desc: "Chunking, embedding, and indexing your internal knowledge base with hybrid keyword and semantic retrieval." },
  { step: "03", title: "Agentic Tool Calling", desc: "Equipping AI agents with secure custom tools to query your database, trigger webhooks, and perform actions." },
  { step: "04", title: "Evaluation & Guardrails", desc: "Rigorous testing using RAG evaluation frameworks (Ragas, TruLens) to ensure 99%+ accuracy and zero hallucinations." },
  { step: "05", title: "Production Deployment", desc: "Rollout into your production web/mobile apps with live monitoring, latency optimization, and automated fallback." },
];

const faqs = [
  {
    q: "How can local businesses in Kadapa benefit from custom AI software?",
    a: "Custom AI allows local businesses to automate customer inquiries on WhatsApp, automatically extract data from paper bills and supplier invoices, analyze sales trends, and provide 24/7 instant customer support without hiring large support teams.",
  },
  {
    q: "Is our business data safe when using your AI solutions?",
    a: "Yes. We build enterprise-grade private RAG pipelines where your proprietary data is never used to train public models. For sensitive environments, we deploy self-hosted open-source models (such as Llama 3) inside private VPCs with zero data egress.",
  },
  {
    q: "What is the difference between ChatGPT and an Agentic AI solution?",
    a: "ChatGPT is a chat interface that generates text. An Agentic AI solution built by MOMO IT Technologies can autonomously take real-world actions: it can query your SQL database, send a WhatsApp confirmation, create a PDF invoice, and update your inventory without human intervention.",
  },
  {
    q: "Does MOMO IT Academy also teach these AI technologies in Kadapa?",
    a: "Yes. MOMO IT Academy runs our flagship 2026 course: 'Agentic AI, RAG & Enterprise AI Solutions', teaching local students and engineers how to build these exact real-world systems.",
  },
];

export default function AiDevelopmentKadapaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Software Development Services in Kadapa",
    provider: {
      "@type": "LocalBusiness",
      name: "MOMO IT TECHNOLOGIES",
      url: "https://www.momoittechnologies.com",
      telephone: "+91-86398-31132",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4/106, Chowdeswari Temple Lane, Krishnapuram",
        addressLocality: "Kadapa",
        addressRegion: "Andhra Pradesh",
        postalCode: "516003",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Kadapa",
    },
    description:
      "Leading AI development company in Kadapa specializing in autonomous Agentic AI, LangChain, enterprise RAG knowledge bases, and conversational AI chatbots.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-surface-light min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-brand-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-navy-950 font-bold">AI Development Kadapa</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Brain className="w-3.5 h-3.5" />
                <span>Next-Gen Enterprise AI · Kadapa, AP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
                AI Software Development Company in Kadapa
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                MOMO IT TECHNOLOGIES designs and deploys autonomous Agentic AI systems, enterprise RAG knowledge bases, and intelligent business automations that transform corporate productivity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-gray-100">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-brand-600 hover:from-purple-700 hover:to-brand-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Consult AI Solutions Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Technologies!%20I%20am%20interested%20in%20custom%20AI%20solutions%20in%20Kadapa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Section: Problems Solved */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">The Automation Opportunity</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Why Static Business Systems Are Holding You Back
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemsSolved.map((prob, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 font-bold text-xs mt-1">
                      ✕
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-950 mb-1">{prob.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{prob.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: AI Capabilities */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Enterprise AI Capabilities</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                From Conversational Bots to Autonomous Agents
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiCapabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 mb-2">{cap.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cap.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Tech Stack */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 mb-14 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">AI Stack</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-6">
              Production AI Frameworks &amp; Vector Databases
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech, i) => (
                <div key={i} className="bg-navy-900/80 border border-navy-800 rounded-xl p-4">
                  <div className="text-sm font-bold text-brand-300">{tech.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{tech.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Process */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">The Roadmap</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Our 5-Step AI Implementation Methodology
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((stp, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black text-purple-600 mb-2">{stp.step}</div>
                    <h3 className="text-sm font-bold text-navy-950 mb-1.5">{stp.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{stp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: FAQs */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mb-2">
              Frequently Asked Questions: AI Development in Kadapa
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

          {/* Related Links */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200/80 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
              Explore Related Services &amp; Academy Programs
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/services/web-development-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Web Development Kadapa →
              </Link>
              <Link href="/services/software-development-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Software Development Kadapa →
              </Link>
              <Link href="/academy" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 transition-colors">
                Agentic AI Course at MOMO Academy →
              </Link>
              <Link href="/kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200 transition-colors">
                Kadapa Office Details →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

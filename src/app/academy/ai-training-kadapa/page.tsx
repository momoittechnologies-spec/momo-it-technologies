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
  Cpu,
  Bot,
  Layers,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agentic AI & Generative AI Training in Kadapa | MOMO Academy",
  description:
    "Master Agentic AI, Autonomous Multi-Agent Workflows, Production RAG, LangChain, LangGraph, and Vector Databases in Kadapa with MOMO Academy. 100% practical lab, verified certificate, and live enterprise AI internship in Krishnapuram.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/academy/ai-training-kadapa",
  },
  openGraph: {
    title: "Agentic AI & Generative AI Training in Kadapa | MOMO Academy",
    description:
      "Kadapa's premier 2026 AI masterclass. Build autonomous AI agents, enterprise RAG systems, and private LLMs at MOMO Academy Kadapa.",
    url: "https://www.momoittechnologies.com/academy/ai-training-kadapa",
  },
};

const curriculumModules = [
  {
    title: "Module 1: Foundations of Generative AI, LLMs & Prompt Engineering",
    topics: [
      "LLM Architectures, Tokens, Context Windows, Temperature & Hallucination Mitigation",
      "Advanced Prompt Engineering: Few-shot, Chain-of-Thought (CoT), ReAct & System Steering",
      "Structured JSON Outputs, Function Calling & Schema Validation with Pydantic",
      "API Integration: OpenAI, Google Gemini 2.0, Anthropic Claude & Open-Source HuggingFace models",
    ],
  },
  {
    title: "Module 2: Production-Grade RAG (Retrieval-Augmented Generation)",
    topics: [
      "Beyond Basic RAG: Document Parsing, Semantic Chunking & Metadata Enrichment",
      "Embedding Models, Vector Spaces & Cosine Similarity Metrics",
      "Vector Databases: pgvector (PostgreSQL), Pinecone, Weaviate & ChromaDB",
      "Hybrid Search (BM25 + Dense Vectors), Cross-Encoder Re-ranking & Contextual Compression",
      "Evaluation Frameworks: Ragas, TruLens, Groundedness & Faithfulness Scoring",
    ],
  },
  {
    title: "Module 3: Autonomous Agentic AI & Multi-Agent Orchestration",
    topics: [
      "What is Agentic AI? Autonomy, Planning, Short-term and Long-term Episodic Memory",
      "LangChain vs LlamaIndex vs LangGraph vs CrewAI: Choosing the right framework",
      "Building Stateful Multi-Agent Teams: Planner, Researcher, Coder, Critic & Reviewer agents",
      "Tool Calling & Sandboxed Execution: Code Interpreters, Web Search & Database queries",
      "Human-in-the-Loop (HITL) checkpoints & guardrails for enterprise safety",
    ],
  },
  {
    title: "Module 4: Enterprise AI Deployment & Business Automation",
    topics: [
      "Private & On-Premise LLM Inference with Ollama, vLLM, and Llama 3 / Mistral",
      "Connecting AI Agents to Business Systems: ERP, CRM, WhatsApp API, and Billing Ledgers",
      "Observability & Monitoring: LangSmith, Phoenix & Token Cost Optimization",
      "Live Capstone: Building and shipping an Autonomous Operations & Support Agent for Enterprises",
      "Verified AI Engineer Certificate & Live Internship Experience Letter",
    ],
  },
];

const faqs = [
  {
    q: "Why is MOMO Academy the best institute for Artificial Intelligence training in Kadapa?",
    a: "Most institutes in Andhra Pradesh only teach generic machine learning mathematics from 10 years ago (linear regression, scikit-learn). MOMO Academy is Kadapa's only institute teaching cutting-edge 2026 Agentic AI, Autonomous Multi-Agent Teams (LangGraph, CrewAI), and Production RAG with Vector Databases—the exact skills companies are desperately looking for right now.",
  },
  {
    q: "What prerequisites are required to join the AI masterclass?",
    a: "Basic programming familiarity with Python or JavaScript/TypeScript is helpful. We cover foundational GenAI concepts, embeddings, and prompt design before diving into advanced agentic frameworks.",
  },
  {
    q: "Will we learn how to run private LLMs locally without expensive API bills?",
    a: "Yes! A dedicated module covers running open-source models (Llama 3, Mistral, Qwen, DeepSeek) locally on private servers using Ollama and vLLM with quantization for complete data privacy and zero API token costs.",
  },
  {
    q: "Is an internship provided upon completing the AI training?",
    a: "Yes! Every graduate completes an enterprise multi-agent capstone project and receives a Verified AI Specialist Certificate along with an official Live Project Internship Experience Letter from MOMO IT Technologies.",
  },
  {
    q: "Where is the MOMO Academy training lab located in Kadapa?",
    a: "Our classroom and AI workstations are located at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, Andhra Pradesh — 516003.",
  },
];

export default function AiTrainingKadapaPage() {
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
            "name": "AI Training Kadapa",
            "item": "https://www.momoittechnologies.com/academy/ai-training-kadapa"
          }
        ]
      },
      {
        "@type": "Course",
        "name": "Agentic AI & Generative AI Training in Kadapa",
        "description": "Frontier Artificial Intelligence masterclass covering Agentic AI, LangChain, LangGraph, CrewAI, Production RAG, and Vector Databases in Kadapa.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "MOMO Academy - MOMO IT TECHNOLOGIES",
          "image": "https://www.momoittechnologies.com/logo.png",
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
          "url": "https://www.momoittechnologies.com"
        },
        "educationalCredentialAwarded": "Verified AI & Agentic Systems Engineer Certificate and Internship Letter",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["Onsite", "Online"],
          "location": {
            "@type": "Place",
            "name": "MOMO Academy Kadapa Campus",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4/106, Chowdeswari Temple Lane, Krishnapuram",
              "addressLocality": "Kadapa",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "516003",
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
                AI Training Kadapa
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
                <Bot className="w-3.5 h-3.5" />
                2026 Flagship AI Track
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
              Agentic AI &amp; Generative AI Training in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-600">
                Kadapa, Andhra Pradesh
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
              Learn how to architect autonomous AI agents, multi-agent teams with LangGraph &amp; CrewAI, enterprise RAG with Vector Databases (pgvector, Pinecone), and private LLM deployments. 100% practical, hands-on lab sessions in Kadapa.
            </p>

            {/* Quick Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 my-6 border-y border-gray-100">
              <div>
                <div className="text-xs text-gray-400 font-medium">Duration</div>
                <div className="text-sm font-bold text-navy-950">10 – 12 Weeks</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Mode</div>
                <div className="text-sm font-bold text-navy-950">Hybrid (Lab + Online)</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Frameworks</div>
                <div className="text-sm font-bold text-emerald-600">LangGraph + RAG</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Campus Location</div>
                <div className="text-sm font-bold text-navy-950">Krishnapuram, Kadapa</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/918639831132?text=Hello%20MOMO%20Academy,%20I%20am%20interested%20in%20joining%20the%20Agentic%20AI%20Training%20in%20Kadapa.%20Please%20share%20the%20syllabus%20and%20fees."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire AI Batch on WhatsApp</span>
              </a>
              <Link
                href="/services/ai-development-kadapa"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm transition-all"
              >
                <span>View AI Services in Kadapa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Section: Practical Highlights */}
          <div className="mb-14">
            <div className="max-w-2xl mb-8">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Cutting-Edge Curriculum
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Why Master Agentic AI in 2026?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Bypass Saturated Legacy Skills</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  While thousands compete for generic junior roles, Agentic AI and RAG engineers command top-tier salaries with virtually zero competition in Andhra Pradesh.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Multi-Agent Systems with LangGraph</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Learn to orchestrate stateful teams of autonomous agents that plan, write code, query databases, and review outputs with human-in-the-loop controls.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-2">Production-Grade RAG &amp; Vector DBs</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Implement hybrid search, semantic chunking, cross-encoder re-ranking, and vector embeddings with pgvector and Pinecone for zero-hallucination accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Comprehensive Curriculum */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-14">
            <div className="max-w-2xl mb-10">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                Masterclass Syllabus
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Complete AI &amp; Agentic Systems Modules
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                A structured 4-module progression from LLM prompt engineering to autonomous enterprise multi-agent deployment.
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
              Frequently Asked Questions: AI Training in Kadapa
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
              <Link href="/academy/full-stack-development-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Full-Stack Web Development Kadapa →
              </Link>
              <Link href="/academy/automation-testing-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Automation Testing Kadapa →
              </Link>
              <Link href="/academy/flutter-training-kadapa" className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Flutter Mobile App Development Kadapa →
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

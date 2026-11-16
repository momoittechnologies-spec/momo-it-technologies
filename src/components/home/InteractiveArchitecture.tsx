"use client";

import React, { useState } from "react";
import {
  Globe,
  Server,
  Database,
  Cpu,
  Bot,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  Lock,
  Sparkles,
  CheckCircle2,
  Terminal,
} from "lucide-react";

interface ArchNode {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  tech: string;
  metric: string;
  status: string;
  description: string;
  details: string[];
}

const architectureNodes: ArchNode[] = [
  {
    id: "edge",
    name: "Global Edge Network",
    category: "Layer 01 · Ingress & CDN",
    icon: Globe,
    tech: "Vercel Edge / Cloudflare Anycast",
    metric: "Sub-Second Edge TTFB",
    status: "Active · Low Latency",
    description: "Multi-region edge routing with automated TLS 1.3 encryption, HTTP/3 protocol, and sub-second caching.",
    details: [
      "Anycast DNS routing with DDoS mitigation",
      "Automatic Brotli/Gzip edge asset compression",
      "Dynamic SSR caching with instantaneous revalidation",
    ],
  },
  {
    id: "frontend",
    name: "Reactive Frontend Core",
    category: "Layer 02 · Presentation",
    icon: Layers,
    tech: "Next.js 15 App Router & React 19",
    metric: "Core Web Vitals Optimized",
    status: "Strict TypeScript",
    description: "Server-driven component streaming with zero runtime CSS overhead and strict type safety across all user journeys.",
    details: [
      "React 19 Server Actions & Suspense boundaries",
      "Fluid Tailwind CSS with zero runtime layout shift",
      "WCAG 2.1 AA accessible component tokens",
    ],
  },
  {
    id: "backend",
    name: "Microservices & API Gateway",
    category: "Layer 03 · Business Logic",
    icon: Server,
    tech: "Spring Boot 3 / Node.js / FastAPI",
    metric: "High-Throughput Concurrency",
    status: "Zero-Downtime Releases",
    description: "High-concurrency microservices with automated rate limiting, JWT/OAuth2 session tokens, and gRPC internal channels.",
    details: [
      "Enterprise Java 21 virtual threads & Spring Security",
      "RESTful and GraphQL schema-verified contracts",
      "Sub-millisecond Redis session caching",
    ],
  },
  {
    id: "database",
    name: "Transactional Storage",
    category: "Layer 04 · Data Integrity",
    icon: Database,
    tech: "PostgreSQL ACID & Supabase Edge",
    metric: "99.98% High Availability",
    status: "WAL Replicated",
    description: "Enterprise relational database with point-in-time recovery, connection pooling, and pgvector embeddings.",
    details: [
      "Strict relational integrity with ACID guarantees",
      "Automated automated snapshots every 6 hours",
      "pgvector similarity indexing for AI search",
    ],
  },
  {
    id: "ai",
    name: "Autonomous AI Engine",
    category: "Layer 05 · Intelligent Agents",
    icon: Bot,
    tech: "Gemini 2.0 / LangChain / LangGraph",
    metric: "Real-Time Inference",
    status: "Guardrailed",
    description: "Multimodal LLM pipelines and autonomous agents performing document parsing, auto-dispatch, and WhatsApp responses.",
    details: [
      "Private enterprise RAG over proprietary databases",
      "Semantic intent routing and tool calling",
      "Latency-optimized token streaming",
    ],
  },
  {
    id: "qa",
    name: "Continuous Automated QA",
    category: "Layer 06 · Verification",
    icon: ShieldCheck,
    tech: "Selenium WebDriver 4 & Playwright",
    metric: "Stable Regression Suite",
    status: "CI/CD Gatekeeper",
    description: "Automated regression pipelines executing 400+ cross-browser and mobile assertions prior to production deployment.",
    details: [
      "Headless Chrome / Safari regression runs",
      "Automated API contract verification via RestAssured",
      "Automated regression gate before release sign-off",
    ],
  },
];

export default function InteractiveArchitecture() {
  const [activeNode, setActiveNode] = useState<ArchNode>(architectureNodes[0]);

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden bg-cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[650px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-blue-500/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Under The Hood</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Interactive Enterprise Architecture Blueprint
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Click through our 6-layer production stack to inspect how data flows securely from the edge to transactional storage and autonomous AI agents.
          </p>
        </div>

        {/* 6-Layer Architecture Pipeline Diagram */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {architectureNodes.map((node, i) => {
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? "bg-blue-600/20 border-cyan-400 shadow-lg shadow-cyan-500/20"
                    : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-cyan-400 text-navy-950 font-bold"
                        : "bg-white/10 text-gray-300 group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-400">
                    0{i + 1}
                  </span>
                </div>
                <div className="text-xs font-bold text-white mb-1 truncate">
                  {node.name}
                </div>
                <div className="text-[10px] font-mono text-cyan-300 truncate">
                  {node.metric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Deep-Dive Terminal Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/15 p-6 sm:p-10 shadow-3d-card-dark relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Layer Spec */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  {activeNode.category}
                </span>
                <span className="text-gray-500">·</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-beacon-pulse" />
                  <span>{activeNode.status}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 flex items-center gap-2.5">
                <span>{activeNode.name}</span>
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-cyan-200 text-xs font-mono mb-5 border border-white/10">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Primary Technology: {activeNode.tech}</span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {activeNode.description}
              </p>

              <div className="space-y-2.5">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Engineering Benchmarks &amp; Safeguards:
                </div>
                {activeNode.details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Telemetry HUD */}
            <div className="lg:col-span-5 bg-navy-950/80 rounded-2xl p-6 border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-gray-400 text-[11px]">
                <span className="text-cyan-400 font-bold">[SYS_STREAM: {activeNode.id.toUpperCase()}]</span>
                <span>TLS 1.3 · AES-256</span>
              </div>

              <div className="space-y-3 text-gray-300 text-[11px]">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Target SLA:</span>
                  <span className="text-emerald-400 font-bold">99.98% High Availability</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Latency Threshold:</span>
                  <span className="text-cyan-300 font-bold">{activeNode.metric}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">IP Ownership:</span>
                  <span className="text-white font-bold">100% Client Transferred</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Security Standard:</span>
                  <span className="text-emerald-400 font-bold">OWASP Top 10 Hardened</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">
                  Live Request Cycle
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-4/5 animate-pulse" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>Edge Ingress</span>
                  <span className="text-emerald-400">Database Synced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

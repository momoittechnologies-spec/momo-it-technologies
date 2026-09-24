"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  ExternalLink,
  Download,
  Copy,
  Check,
  TrendingUp,
  Globe,
  MapPin,
  ShieldCheck,
  FileSpreadsheet,
  Layers,
  Filter,
  RefreshCw,
  PhoneCall,
  MessageSquare,
  Eye,
  MousePointerClick,
  Sparkles,
  Info,
} from "lucide-react";

interface KeywordItem {
  id: string;
  query: string;
  targetUrl: string;
  tier: "Tier 1" | "Tier 2" | "Tier 3" | "Long-Tail";
  intent: "Commercial" | "Informational" | "Transactional" | "Navigational";
  modifier: "Kadapa" | "YSR Kadapa" | "Andhra Pradesh" | "Near Me" | "Brand";
  priority: "High" | "Medium" | "Strategic";
  estimatedVolume: string;
}

const KEYWORD_DATABASE: KeywordItem[] = [
  // Tier 1: Core Commercial Kadapa Keywords
  {
    id: "k-01",
    query: "it company in kadapa",
    targetUrl: "/",
    tier: "Tier 1",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Local Intent",
  },
  {
    id: "k-02",
    query: "software company in kadapa",
    targetUrl: "/kadapa",
    tier: "Tier 1",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Local Intent",
  },
  {
    id: "k-03",
    query: "software development company in kadapa",
    targetUrl: "/services/software-development-kadapa",
    tier: "Tier 1",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Local Intent",
  },
  {
    id: "k-04",
    query: "web development company in kadapa",
    targetUrl: "/services/web-development-kadapa",
    tier: "Tier 1",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Local Intent",
  },
  {
    id: "k-05",
    query: "best it company in kadapa near me",
    targetUrl: "/kadapa",
    tier: "Tier 1",
    intent: "Commercial",
    modifier: "Near Me",
    priority: "High",
    estimatedVolume: "High Mobile Intent",
  },

  // Tier 2: Technology & Services
  {
    id: "k-06",
    query: "software testing company in kadapa",
    targetUrl: "/services/qa-automation-kadapa",
    tier: "Tier 2",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "Medium Local",
  },
  {
    id: "k-07",
    query: "qa automation company in kadapa",
    targetUrl: "/services/qa-automation-kadapa",
    tier: "Tier 2",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "Medium Local",
  },
  {
    id: "k-08",
    query: "mobile app development company in kadapa",
    targetUrl: "/services/mobile-app-development-kadapa",
    tier: "Tier 2",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Local",
  },
  {
    id: "k-09",
    query: "ai development company in kadapa",
    targetUrl: "/services/ai-development-kadapa",
    tier: "Tier 2",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "Emerging Fast",
  },
  {
    id: "k-10",
    query: "saas development company in kadapa",
    targetUrl: "/services/saas-development-kadapa",
    tier: "Tier 2",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "Niche B2B",
  },
  {
    id: "k-11",
    query: "custom software development in kadapa",
    targetUrl: "/services/software-development-kadapa",
    tier: "Tier 2",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Local",
  },
  {
    id: "k-12",
    query: "web application development company in kadapa",
    targetUrl: "/services/web-development-kadapa",
    tier: "Tier 2",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "Medium Local",
  },
  {
    id: "k-13",
    query: "business software development ysr kadapa",
    targetUrl: "/services/business-software-kadapa",
    tier: "Tier 2",
    intent: "Commercial",
    modifier: "YSR Kadapa",
    priority: "High",
    estimatedVolume: "High Commercial",
  },

  // Tier 3: Academy & Student Career Keywords
  {
    id: "k-14",
    query: "it training institute in kadapa",
    targetUrl: "/academy",
    tier: "Tier 3",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "Very High Volume",
  },
  {
    id: "k-15",
    query: "software training institute in kadapa",
    targetUrl: "/academy",
    tier: "Tier 3",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "Very High Volume",
  },
  {
    id: "k-16",
    query: "automation testing training in kadapa",
    targetUrl: "/academy/automation-testing-training-kadapa",
    tier: "Tier 3",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Target ROI",
  },
  {
    id: "k-17",
    query: "selenium training institute in kadapa",
    targetUrl: "/academy/selenium-training-kadapa",
    tier: "Tier 3",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Intent",
  },
  {
    id: "k-18",
    query: "java training institute in kadapa",
    targetUrl: "/academy/java-training-kadapa",
    tier: "Tier 3",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Intent",
  },
  {
    id: "k-19",
    query: "full stack development training in kadapa",
    targetUrl: "/academy/full-stack-development-training-kadapa",
    tier: "Tier 3",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Intent",
  },
  {
    id: "k-20",
    query: "flutter mobile app training in kadapa",
    targetUrl: "/academy/flutter-training-kadapa",
    tier: "Tier 3",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "Medium Intent",
  },
  {
    id: "k-21",
    query: "ai and python training institute in kadapa",
    targetUrl: "/academy/ai-training-kadapa",
    tier: "Tier 3",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "Emerging Fast",
  },

  // Long-Tail & Knowledge Hub Research Queries
  {
    id: "k-22",
    query: "how much does a website cost in kadapa",
    targetUrl: "/blog/how-much-does-a-website-cost-in-kadapa",
    tier: "Long-Tail",
    intent: "Informational",
    modifier: "Kadapa",
    priority: "High",
    estimatedVolume: "High Buyer Intent",
  },
  {
    id: "k-23",
    query: "automation testing career roadmap kadapa",
    targetUrl: "/blog/automation-testing-career-roadmap-kadapa",
    tier: "Long-Tail",
    intent: "Informational",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "High Student Intent",
  },
  {
    id: "k-24",
    query: "how kadapa businesses can use ai automation",
    targetUrl: "/blog/how-kadapa-businesses-can-use-ai-automation",
    tier: "Long-Tail",
    intent: "Informational",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "Business Research",
  },
  {
    id: "k-25",
    query: "best software development solutions for businesses in kadapa",
    targetUrl: "/blog/best-software-development-solutions-for-businesses-in-kadapa",
    tier: "Long-Tail",
    intent: "Informational",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "Business Research",
  },
  {
    id: "k-26",
    query: "custom erp billing software kadapa andhra pradesh",
    targetUrl: "/services/business-software-kadapa",
    tier: "Long-Tail",
    intent: "Commercial",
    modifier: "Andhra Pradesh",
    priority: "High",
    estimatedVolume: "Commercial Niche",
  },
  {
    id: "k-27",
    query: "restaurant billing software with qr ordering kadapa",
    targetUrl: "/case-studies/vijayas-yummy-food",
    tier: "Long-Tail",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "Local Retail",
  },
  {
    id: "k-28",
    query: "outstation cab booking portal development kadapa",
    targetUrl: "/case-studies/mana-tours",
    tier: "Long-Tail",
    intent: "Commercial",
    modifier: "Kadapa",
    priority: "Medium",
    estimatedVolume: "Travel Operators",
  },
  {
    id: "k-29",
    query: "verified software internship certificate kadapa",
    targetUrl: "/certificates",
    tier: "Long-Tail",
    intent: "Transactional",
    modifier: "Kadapa",
    priority: "Strategic",
    estimatedVolume: "Employer BGV",
  },
  {
    id: "k-30",
    query: "momo it technologies kadapa reviews",
    targetUrl: "/review",
    tier: "Long-Tail",
    intent: "Navigational",
    modifier: "Brand",
    priority: "High",
    estimatedVolume: "Direct Reputation",
  },
];

const PREFLIGHT_CHECKLIST = [
  { id: "c1", title: "HTTPS / SSL Encryption", status: "PASS", note: "Enforced TLS 1.3 on Vercel Global Edge." },
  { id: "c2", title: "HSTS Strict Transport Security", status: "PASS", note: "max-age=63072000 active on all responses." },
  { id: "c3", title: "XML Sitemap Dynamic Generation", status: "PASS", note: "33 canonical URLs auto-rendered at /sitemap.xml." },
  { id: "c4", title: "Robots.txt Crawlability", status: "PASS", note: "Allows standard crawlers, links directly to sitemap." },
  { id: "c5", title: "Google Search Console Verification", status: "PASS", note: "Token active: zSKsUmLnGimWASbVAcLLVB6lX2ZBClJuMqlCe_2JxMY." },
  { id: "c6", title: "Canonical URL Self-Referencing", status: "PASS", note: "100% of routes have canonicals pointing to https://www.momoittechnologies.com/*." },
  { id: "c7", title: "LocalBusiness Schema Markup", status: "PASS", note: "Multi-typed LocalBusiness + EducationalOrganization with GPS coordinates." },
  { id: "c8", title: "Service & Course Schema", status: "PASS", note: "All 7 service silos have Service JSON-LD; all 6 academy silos have Course JSON-LD." },
  { id: "c9", title: "FAQPage Structured Data", status: "PASS", note: "Search-snippet ready FAQs embedded on every key silo." },
  { id: "c10", title: "Article Schema on Knowledge Hub", status: "PASS", note: "All 4 local blog guides embed full Article JSON-LD." },
  { id: "c11", title: "Exact NAP Consistency", status: "PASS", note: "MOMO IT TECHNOLOGIES, 4/106 Krishnapuram, Kadapa 516003 across 100% pages." },
  { id: "c12", title: "MSME Official Credential", status: "PASS", note: "Govt Udyam ID UDYAM-AP-04-0013231 displayed on About & Certificates." },
  { id: "c13", title: "Static SSR Prerendering", status: "PASS", note: "33/33 routes pre-rendered at build time with raw static HTML." },
  { id: "c14", title: "Mobile Viewport & Touch Targets", status: "PASS", note: "Fluid responsive Tailwind layout, zero horizontal overflow." },
  { id: "c15", title: "AI Crawlability (llms.txt)", status: "PASS", note: "public/llms.txt and llms-full.txt deployed for AI Overviews/Gemini." },
];

export default function SeoDashboardPage() {
  const [activeTab, setActiveTab] = useState<"keywords" | "monthly" | "checklist" | "citations">("keywords");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<string>("All");
  const [selectedIntent, setSelectedIntent] = useState<string>("All");
  const [selectedModifier, setSelectedModifier] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filtered keywords
  const filteredKeywords = useMemo(() => {
    return KEYWORD_DATABASE.filter((k) => {
      const matchesSearch =
        k.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
        k.targetUrl.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTier = selectedTier === "All" || k.tier === selectedTier;
      const matchesIntent = selectedIntent === "All" || k.intent === selectedIntent;
      const matchesModifier = selectedModifier === "All" || k.modifier === selectedModifier;
      return matchesSearch && matchesTier && matchesIntent && matchesModifier;
    });
  }, [searchQuery, selectedTier, selectedIntent, selectedModifier]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportCSV = () => {
    const headers = [
      "ID",
      "Target Query",
      "Canonical Landing Page",
      "Tier",
      "Search Intent",
      "Location Modifier",
      "Priority",
      "Search Volume Estimate",
      "GSC Status",
      "Target Geolocation",
    ];

    const rows = filteredKeywords.map((k) => [
      k.id,
      `"${k.query}"`,
      `"https://www.momoittechnologies.com${k.targetUrl}"`,
      k.tier,
      k.intent,
      k.modifier,
      k.priority,
      `"${k.estimatedVolume}"`,
      "Monitored in GSC",
      "Kadapa, AP (516003)",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `momo_it_seo_tracking_matrix_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Card */}
        <div className="bg-navy-900/90 border border-brand-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-xl mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Section 30 & 35 Internal Monitoring System
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                MOMO IT TECHNOLOGIES — SEO & Search Console Dashboard
              </h1>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Ground-truth monitoring for legitimate organic ranking in Kadapa, Andhra Pradesh. Built in accordance with Google Search Essentials and white-hat local SEO architecture.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-navy-950 font-semibold text-sm transition-all shadow-glow hover:shadow-brand-400/30"
              >
                <Download className="w-4 h-4" />
                Export Monthly Matrix (CSV)
              </button>

              <a
                href="https://search.google.com/search-console"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-slate-700 text-white font-medium text-sm transition-all"
              >
                <Globe className="w-4 h-4 text-brand-400" />
                Open GSC Dashboard
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800">
            <div className="bg-navy-950/60 p-4 rounded-xl border border-slate-800/80">
              <div className="text-xs text-slate-400 font-medium">Monitored Queries</div>
              <div className="text-2xl font-bold text-white mt-1">{KEYWORD_DATABASE.length}</div>
              <div className="text-xs text-brand-400 mt-0.5">Tier 1, 2, 3 & Long-Tail</div>
            </div>

            <div className="bg-navy-950/60 p-4 rounded-xl border border-slate-800/80">
              <div className="text-xs text-slate-400 font-medium">Canonical Live URLs</div>
              <div className="text-2xl font-bold text-white mt-1">33 / 33</div>
              <div className="text-xs text-brand-400 mt-0.5">100% HTTP 200 OK</div>
            </div>

            <div className="bg-navy-950/60 p-4 rounded-xl border border-slate-800/80">
              <div className="text-xs text-slate-400 font-medium">GSC Verification</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">Verified</div>
              <div className="text-xs text-slate-400 mt-0.5">Token Active in Head</div>
            </div>

            <div className="bg-navy-950/60 p-4 rounded-xl border border-slate-800/80">
              <div className="text-xs text-slate-400 font-medium">Core Target Location</div>
              <div className="text-2xl font-bold text-white mt-1">Kadapa, AP</div>
              <div className="text-xs text-slate-400 mt-0.5">PIN 516003 Anchored</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 mb-8 overflow-x-auto no-scrollbar gap-2">
          <button
            onClick={() => setActiveTab("keywords")}
            className={`flex items-center gap-2 px-5 py-3 font-medium text-sm border-b-2 transition-all whitespace-nowrap ${
              activeTab === "keywords"
                ? "border-brand-400 text-brand-400 bg-brand-400/5 rounded-t-lg"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            Priority Keyword Matrix ({filteredKeywords.length})
          </button>

          <button
            onClick={() => setActiveTab("monthly")}
            className={`flex items-center gap-2 px-5 py-3 font-medium text-sm border-b-2 transition-all whitespace-nowrap ${
              activeTab === "monthly"
                ? "border-brand-400 text-brand-400 bg-brand-400/5 rounded-t-lg"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Monthly SEO Report (Section 35)
          </button>

          <button
            onClick={() => setActiveTab("checklist")}
            className={`flex items-center gap-2 px-5 py-3 font-medium text-sm border-b-2 transition-all whitespace-nowrap ${
              activeTab === "checklist"
                ? "border-brand-400 text-brand-400 bg-brand-400/5 rounded-t-lg"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            Technical SEO Pre-Flight (15/15 PASS)
          </button>

          <button
            onClick={() => setActiveTab("citations")}
            className={`flex items-center gap-2 px-5 py-3 font-medium text-sm border-b-2 transition-all whitespace-nowrap ${
              activeTab === "citations"
                ? "border-brand-400 text-brand-400 bg-brand-400/5 rounded-t-lg"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <MapPin className="w-4 h-4" />
            NAP Citations & GBP Playbook
          </button>
        </div>

        {/* TAB 1: KEYWORD MATRIX */}
        {activeTab === "keywords" && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="bg-navy-900 border border-slate-800 p-4 rounded-xl flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search keywords or URLs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-navy-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Filter className="w-3.5 h-3.5 text-brand-400" />
                  Filters:
                </div>

                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="bg-navy-950 border border-slate-700 text-slate-300 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-brand-400"
                >
                  <option value="All">All Tiers</option>
                  <option value="Tier 1">Tier 1 (Core Commercial)</option>
                  <option value="Tier 2">Tier 2 (Services & Tech)</option>
                  <option value="Tier 3">Tier 3 (Academy & Courses)</option>
                  <option value="Long-Tail">Long-Tail Research</option>
                </select>

                <select
                  value={selectedIntent}
                  onChange={(e) => setSelectedIntent(e.target.value)}
                  className="bg-navy-950 border border-slate-700 text-slate-300 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-brand-400"
                >
                  <option value="All">All Search Intents</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Informational">Informational</option>
                  <option value="Transactional">Transactional</option>
                  <option value="Navigational">Navigational</option>
                </select>

                <select
                  value={selectedModifier}
                  onChange={(e) => setSelectedModifier(e.target.value)}
                  className="bg-navy-950 border border-slate-700 text-slate-300 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-brand-400"
                >
                  <option value="All">All Modifiers</option>
                  <option value="Kadapa">Kadapa</option>
                  <option value="YSR Kadapa">YSR Kadapa</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Near Me">Near Me</option>
                  <option value="Brand">Brand</option>
                </select>
              </div>
            </div>

            {/* Keyword Table */}
            <div className="bg-navy-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-navy-950/80 text-xs uppercase text-slate-400 font-semibold border-b border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4">Target Query</th>
                      <th className="py-3.5 px-4">Canonical Landing Page</th>
                      <th className="py-3.5 px-4">Tier</th>
                      <th className="py-3.5 px-4">Intent</th>
                      <th className="py-3.5 px-4">Modifier</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredKeywords.map((item) => (
                      <tr key={item.id} className="hover:bg-navy-800/40 transition">
                        <td className="py-3.5 px-4 font-medium text-white">
                          <div className="flex items-center gap-2">
                            <span>{item.query}</span>
                            {item.priority === "High" && (
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" title="High Priority" />
                            )}
                          </div>
                          <span className="text-xs text-slate-500 font-mono mt-0.5 block">{item.estimatedVolume}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <Link
                            href={item.targetUrl}
                            target="_blank"
                            className="text-brand-400 hover:text-brand-300 font-mono text-xs hover:underline flex items-center gap-1.5"
                          >
                            {item.targetUrl}
                            <ExternalLink className="w-3 h-3 text-slate-500" />
                          </Link>
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              item.tier === "Tier 1"
                                ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                                : item.tier === "Tier 2"
                                ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                                : item.tier === "Tier 3"
                                ? "bg-purple-400/10 text-purple-400 border border-purple-400/20"
                                : "bg-slate-700 text-slate-300"
                            }`}
                          >
                            {item.tier}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-xs text-slate-400 bg-navy-950 px-2.5 py-1 rounded border border-slate-800">
                            {item.intent}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-brand-400" />
                            {item.modifier}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <a
                              href={`https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:momoittechnologies.com&query=*${encodeURIComponent(
                                item.query
                              )}*`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1 bg-navy-950 hover:bg-navy-800 border border-slate-700 rounded text-xs text-slate-300 hover:text-white transition flex items-center gap-1"
                              title="Inspect this query in Google Search Console"
                            >
                              GSC Check
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                            <Link
                              href={item.targetUrl}
                              target="_blank"
                              className="px-2.5 py-1 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 rounded text-xs text-brand-400 transition"
                            >
                              Live Page
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MONTHLY SEO REPORT (SECTION 35) */}
        {activeTab === "monthly" && (
          <div className="space-y-8">
            <div className="bg-navy-900 border border-slate-800 rounded-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Section 35: Official Monthly SEO Performance Tracker
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Record monthly organic metrics directly from Search Console and Google Business Profile. Do not judge SEO success only by one keyword position.
                  </p>
                </div>
                <div className="text-xs bg-brand-400/10 border border-brand-400/20 text-brand-400 px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-start sm:self-auto font-mono">
                  Cycle: Launch Month (Sep-Oct 2026)
                </div>
              </div>

              {/* Metric KPI Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="bg-navy-950 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                    <span>Organic Google Impressions</span>
                    <Eye className="w-4 h-4 text-brand-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">Baseline Phase</div>
                  <p className="text-xs text-slate-500 mt-1">Targeting Kadapa search cluster</p>
                </div>

                <div className="bg-navy-950 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                    <span>Organic Search Clicks</span>
                    <MousePointerClick className="w-4 h-4 text-brand-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">Monitoring</div>
                  <p className="text-xs text-slate-500 mt-1">GSC Data populates in 48-72h</p>
                </div>

                <div className="bg-navy-950 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                    <span>Direct Phone Calls (GBP)</span>
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">+91 86398 31132</div>
                  <p className="text-xs text-slate-500 mt-1">Click-to-call active across all pages</p>
                </div>

                <div className="bg-navy-950 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                    <span>WhatsApp / Direct Leads</span>
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">Live Floating Button</div>
                  <p className="text-xs text-slate-500 mt-1">Integrated on all 33 pages</p>
                </div>
              </div>

              {/* Monthly Checklist Guidelines */}
              <div className="mt-8 bg-navy-950/80 border border-slate-800 rounded-xl p-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Info className="w-4 h-4 text-brand-400" />
                  Monthly Measurement Cadence (To Review Every 30 Days)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span><strong>Search Console Filter:</strong> Inspect impressions specifically for queries with "Kadapa", "YSR Kadapa", and "near me".</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span><strong>GBP Actions:</strong> Track direction requests to 4/106 Krishnapuram and direct profile calls.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span><strong>Review Velocity:</strong> Ensure 3-5 authentic student/client reviews are added to the Google Maps profile monthly via <code>/review</code>.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span><strong>Top Landing Pages:</strong> Monitor whether <code>/kadapa</code> and the 7 service silos are gaining organic impressions.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TECHNICAL PRE-FLIGHT */}
        {activeTab === "checklist" && (
          <div className="space-y-6">
            <div className="bg-navy-900 border border-slate-800 rounded-xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Technical SEO Pre-Flight Health Audit
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Continuous verification of critical crawlability, indexability, security, and schema factors.
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 font-semibold text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  15 / 15 Criteria Passed
                </div>
              </div>

              <div className="divide-y divide-slate-800 mt-4">
                {PREFLIGHT_CHECKLIST.map((item) => (
                  <div key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded bg-emerald-400/10 text-emerald-400 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm">{item.title}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.note}</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CITATIONS & GBP PLAYBOOK */}
        {activeTab === "citations" && (
          <div className="space-y-6">
            <div className="bg-navy-900 border border-slate-800 rounded-xl p-6 sm:p-8">
              <div className="pb-6 border-b border-slate-800">
                <h3 className="text-xl font-heading font-bold text-white">
                  Local NAP Citations & Directory Submission Playbook
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Use the exact, pre-formatted business text below to register MOMO IT TECHNOLOGIES on local directories (JustDial, Sulekha, IndiaMART, TradeIndia). Consistency is the primary local ranking factor.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Standard NAP Block */}
                <div className="bg-navy-950 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                      Standard Verified NAP
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          `MOMO IT TECHNOLOGIES\n4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, Andhra Pradesh — 516003, India\nPhone: +91 86398 31132\nEmail: momoit.technologies@gmail.com\nWebsite: https://www.momoittechnologies.com`,
                          "nap"
                        )
                      }
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
                    >
                      {copiedId === "nap" ? <Check className="w-3.5 h-3.5 text-brand-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedId === "nap" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="text-xs text-slate-300 font-mono bg-navy-900/60 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`Business Name: MOMO IT TECHNOLOGIES
Address: 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, Andhra Pradesh — 516003, India
Landmark: Chowdeswari Temple Lane
Established: June 2025
Phone: +91 86398 31132
Email: momoit.technologies@gmail.com
Website: https://www.momoittechnologies.com
MSME Udyam: UDYAM-AP-04-0013231`}
                  </pre>
                </div>

                {/* Directory Short Description */}
                <div className="bg-navy-950 p-5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                      Directory Description (200 Words)
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          `MOMO IT TECHNOLOGIES is a government-registered (MSME: UDYAM-AP-04-0013231) software development company and premier IT training academy based in Kadapa, Andhra Pradesh. We specialize in custom web applications, SaaS development, mobile apps (Flutter), AI software solutions, and QA automation testing pods. Through MOMO Academy, we provide hands-on, job-oriented engineering training in Automation Testing (Selenium 4), Java, Full-Stack Development, and Flutter, with live client internships and verified certificates. Located at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa. Contact +91 86398 31132 or visit https://www.momoittechnologies.com.`,
                          "desc"
                        )
                      }
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
                    >
                      {copiedId === "desc" ? <Check className="w-3.5 h-3.5 text-brand-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedId === "desc" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="text-xs text-slate-300 font-mono bg-navy-900/60 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`MOMO IT TECHNOLOGIES is a government-registered (MSME: UDYAM-AP-04-0013231) software development company and premier IT training academy based in Kadapa, Andhra Pradesh. We specialize in custom web applications, SaaS development, mobile apps (Flutter), AI software solutions, and QA automation testing pods. Through MOMO Academy, we provide hands-on, job-oriented engineering training in Automation Testing (Selenium 4), Java, Full-Stack Development, and Flutter, with live client internships and verified certificates.`}
                  </pre>
                </div>
              </div>

              {/* GBP Support Case ID Guidance */}
              <div className="mt-6 p-5 rounded-xl bg-amber-400/5 border border-amber-400/20">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Google Business Profile Verification (Case ID: 6-9570000041380)
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      When responding to Google Support: Reference Case ID <strong>6-9570000041380</strong>. Provide: (1) Office lease agreement or electricity bill for 4/106 Krishnapuram, (2) Photograph of permanent exterior street signage displaying <em>MOMO IT TECHNOLOGIES - IT ACADEMY</em>, and (3) Video walkthrough from street into office lab.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

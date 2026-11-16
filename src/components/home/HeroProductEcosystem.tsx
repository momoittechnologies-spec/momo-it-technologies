"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  TrendingUp,
  Wrench,
  Car,
  QrCode,
  Lock,
  ArrowRight,
  Sparkles,
  Bot,
  Activity,
  Layers,
  MapPin,
  Clock,
  ChevronRight,
  Server,
} from "lucide-react";

export default function HeroProductEcosystem() {
  const [activeTab, setActiveTab] = useState<"asRef" | "manaTours" | "qaTelemetry">("asRef");

  return (
    <div className="relative w-full select-none">
      {/* Background Multi-Layer Ambient Lighting */}
      <div className="absolute -top-12 -left-8 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-12 -right-8 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle SVG Data Connectors (Hidden on small mobile, visible on desktop) */}
      <svg
        className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none z-10 opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Stream line from Mobile to Desktop Dashboard */}
        <path
          d="M 160 380 Q 220 320 280 340"
          stroke="url(#connectorGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          className="animate-pulse"
        />
        {/* Stream line from Workflow to Desktop */}
        <path
          d="M 440 180 Q 400 240 360 270"
          stroke="url(#connectorGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          className="animate-pulse"
        />
      </svg>

      {/* Main Composition Container */}
      <div className="relative pt-4 pb-2 sm:pt-6 sm:pb-4">
        
        {/* ======================================================== */}
        {/* 1. CENTRAL DESKTOP SAAS DASHBOARD (Large Core Platform) */}
        {/* ======================================================== */}
        <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-slate-900/95 border border-white/15 shadow-2xl shadow-blue-950/50 backdrop-blur-xl overflow-hidden transition-all duration-300">
          
          {/* Dashboard Window Header Bar */}
          <div className="px-3.5 sm:px-5 py-2.5 sm:py-3 bg-slate-950/80 border-b border-white/10 flex items-center justify-between gap-3">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs" />
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs" />
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f] inline-block shadow-xs" />
            </div>

            {/* URL & Workspace Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-white/10 text-[10px] sm:text-[11px] font-mono text-gray-300 max-w-[280px] sm:max-w-none truncate">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="text-gray-400 hidden sm:inline">app.momoit.com/</span>
              <span className="text-cyan-300 font-semibold truncate">
                {activeTab === "asRef"
                  ? "as-refrigerations/dispatch-hub"
                  : activeTab === "manaTours"
                  ? "mana-tours/fleet-booking"
                  : "qa-telemetry/regression-ci"}
              </span>
            </div>

            {/* Live Status Beacon */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-emerald-400 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon-pulse" />
              <span className="hidden sm:inline font-semibold">99.98% SLA</span>
            </div>
          </div>

          {/* Interactive Project Switcher Tabs */}
          <div className="px-3.5 sm:px-5 pt-3 pb-2 bg-slate-950/40 border-b border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab("asRef")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                activeTab === "asRef"
                  ? "bg-blue-600/30 text-cyan-300 border border-cyan-400/50 shadow-xs"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
              <span>AS REFRIGERATIONS (Field ERP)</span>
            </button>

            <button
              onClick={() => setActiveTab("manaTours")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                activeTab === "manaTours"
                  ? "bg-blue-600/30 text-cyan-300 border border-cyan-400/50 shadow-xs"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              <Car className="w-3.5 h-3.5 text-indigo-400" />
              <span>MANA Tours (Fleet Dispatch)</span>
            </button>

            <button
              onClick={() => setActiveTab("qaTelemetry")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                activeTab === "qaTelemetry"
                  ? "bg-blue-600/30 text-cyan-300 border border-cyan-400/50 shadow-xs"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>QA &amp; Edge Telemetry</span>
            </button>
          </div>

          {/* Dashboard Main Content Area */}
          <div className="p-4 sm:p-6 space-y-4">
            
            {/* KPI Metric Strips (3 Columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 flex items-center justify-between">
                  <span>{activeTab === "asRef" ? "Monthly Transacted" : activeTab === "manaTours" ? "Monthly Bookings" : "Regression Tests"}</span>
                  <span className="text-emerald-400 font-bold text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    +18.4%
                  </span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-white font-mono mt-1">
                  {activeTab === "asRef" ? "₹14,82,450" : activeTab === "manaTours" ? "648 Trips" : "480 / 480"}
                </div>
                <div className="text-[10px] text-cyan-300 font-mono mt-0.5">
                  {activeTab === "asRef" ? "0% Gateway Fee (Direct UPI)" : activeTab === "manaTours" ? "100% WhatsApp Verified" : "100% Zero-Defect Pass"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 flex items-center justify-between">
                  <span>{activeTab === "asRef" ? "Active Dispatch" : activeTab === "manaTours" ? "Active Vehicles" : "Edge Response"}</span>
                  <span className="text-cyan-400 font-bold text-[9px] bg-cyan-500/10 px-1.5 py-0.5 rounded">
                    Realtime
                  </span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-white font-mono mt-1">
                  {activeTab === "asRef" ? "32 Technicians" : activeTab === "manaTours" ? "24 Fleets" : "12ms TTFB"}
                </div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5 truncate">
                  {activeTab === "asRef" ? "Kadapa (19) · BLR (25)" : activeTab === "manaTours" ? "Kadapa · Tirupati · BLR" : "Vercel Edge Anycast"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 flex items-center justify-between">
                  <span>Architecture</span>
                  <span className="text-emerald-400 font-bold text-[9px]">Sovereign</span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-white font-mono mt-1">
                  100% Client IP
                </div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                  Full Source Code Transfer
                </div>
              </div>
            </div>

            {/* Tab 1: AS REFRIGERATIONS Content */}
            {activeTab === "asRef" && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pb-1 border-b border-white/10">
                  <span>LIVE FIELD DISPATCH &amp; DYNAMIC UPI ENGINE</span>
                  <span className="text-cyan-400 font-semibold">Dual Branch Active</span>
                </div>

                {/* Dispatch Rows */}
                <div className="space-y-2 text-xs">
                  {/* Row 1 */}
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                        AC
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-white text-xs truncate">
                          #AR-4892 · Daikin Inverter AC Jet Servicing
                        </div>
                        <div className="text-[11px] text-gray-400 flex items-center gap-1.5 font-mono">
                          <MapPin className="w-3 h-3 text-cyan-400" />
                          <span>Ward 7, Kadapa · Tech: Sameer</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                        <QrCode className="w-3 h-3" />
                        <span>₹1,850 UPI</span>
                      </div>
                      <div className="text-[9px] text-gray-400 font-mono mt-0.5">0% Gateway Fee</div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                        REF
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-white text-xs truncate">
                          #AR-4893 · Samsung Double Door Cooling Unit
                        </div>
                        <div className="text-[11px] text-gray-400 flex items-center gap-1.5 font-mono">
                          <MapPin className="w-3 h-3 text-blue-400" />
                          <span>Indiranagar, Bangalore Hub</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">
                        <span>In Route · 8m</span>
                      </div>
                      <div className="text-[9px] text-emerald-400 font-mono mt-0.5">PIN Verified</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: MANA TOURS Content */}
            {activeTab === "manaTours" && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pb-1 border-b border-white/10">
                  <span>REALTIME MOBILITY &amp; WHATSAPP TICKETING</span>
                  <span className="text-cyan-400 font-semibold">Tirupati / BLR / HYD Corridors</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                        CAB
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-white text-xs truncate">
                          #MT-1204 · Innova Crysta Outstation Booking
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono">
                          Kadapa ➔ Tirupati International Airport (142 km)
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                        WhatsApp Sent
                      </span>
                      <div className="text-[9px] text-cyan-300 font-mono mt-0.5">₹3,800 Flat</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                        TOUR
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-white text-xs truncate">
                          #MT-1205 · Tirumala Srivari VIP Darshan Package
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono">
                          Confirmed 4 Pax · Driver Assigned
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold">
                        Dispatched
                      </span>
                      <div className="text-[9px] text-gray-400 font-mono mt-0.5">5.0★ Verified</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: QA Telemetry Content */}
            {activeTab === "qaTelemetry" && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pb-1 border-b border-white/10">
                  <span>CONTINUOUS REGRESSION RUNNER · SELENIUM 4 &amp; PLAYWRIGHT</span>
                  <span className="text-emerald-400 font-semibold">Build #842 Passing</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 font-mono text-xs space-y-1.5 text-[11px]">
                  <div className="text-emerald-400">✓ TestSuite: BookingFlow_E2E (Chrome / Safari / Edge) ... PASS [0.82s]</div>
                  <div className="text-cyan-300">✓ TestSuite: Dynamic_UPI_QR_Signature_Validation ... PASS [0.14s]</div>
                  <div className="text-purple-300">✓ TestSuite: WhatsApp_Cloud_Webhook_Payload ... PASS [0.21s]</div>
                  <div className="text-gray-300">✓ TestSuite: MultiCity_Ward_Boundary_Sanity ... PASS [0.35s]</div>
                  <div className="pt-1 text-gray-400 border-t border-white/10 flex items-center justify-between text-[10px]">
                    <span>Assertions: 480 verified</span>
                    <span className="text-emerald-400 font-bold">Defects: 0 critical</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. FLOATING SMARTPHONE MOCKUP (Overlapping Bottom-Left)  */}
        {/* ======================================================== */}
        <div className="relative md:absolute -bottom-8 md:-bottom-10 -left-2 md:-left-6 w-full md:w-64 z-20 mt-4 md:mt-0 transition-transform duration-300 hover:-translate-y-1">
          <div className="rounded-3xl bg-slate-950 border-2 border-slate-700/80 p-2.5 shadow-2xl shadow-blue-950/80 text-white">
            
            {/* Phone Screen Frame */}
            <div className="rounded-2xl bg-slate-900 border border-white/10 p-3 overflow-hidden">
              {/* Dynamic Island Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                <div className="text-[10px] font-mono text-gray-400">9:41</div>
                <div className="w-16 h-3.5 bg-black rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 ml-auto mr-2" />
                </div>
                <div className="text-[10px] font-mono text-emerald-400 font-bold">5G</div>
              </div>

              {/* Mobile App Screen Content */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-[10px]">
                      AS
                    </div>
                    <span className="text-[11px] font-bold text-white">Technician App</span>
                  </div>
                  <span className="text-[9px] font-mono bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">
                    Doorstep
                  </span>
                </div>

                {/* Active Job Card */}
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-cyan-500/30">
                  <div className="text-[10px] font-bold text-cyan-300 flex items-center justify-between">
                    <span>JOB #4892 · AC REPAIR</span>
                    <span className="text-emerald-400">In Progress</span>
                  </div>
                  <div className="text-[11px] text-white font-semibold mt-1">
                    Daikin 1.5T Jet Clean
                  </div>
                  <div className="text-[9px] text-gray-400 font-mono mt-0.5">
                    Krishnapuram, Kadapa
                  </div>

                  {/* QR Collect Button */}
                  <div className="mt-2.5 p-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center gap-1.5 text-white font-mono text-[10px] font-bold shadow-xs">
                    <QrCode className="w-3 h-3" />
                    <span>Dynamic UPI: ₹1,850</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] text-gray-400 font-mono pt-1">
                  <span>0% NPCI Direct Bank</span>
                  <span className="text-emerald-400">4-Digit PIN OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. BUSINESS AUTOMATION WORKFLOW CARD (Top-Right Floating) */}
        {/* ======================================================== */}
        <div className="hidden lg:block absolute -top-6 -right-6 z-20 w-64 rounded-2xl bg-slate-900/95 border border-cyan-400/30 p-3.5 shadow-xl backdrop-blur-xl text-white font-mono transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px]">
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <Bot className="w-3 h-3 text-cyan-400" />
              <span>AI WORKFLOW ENGINE</span>
            </span>
            <span className="text-emerald-400 font-semibold">Active</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center gap-1.5 text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>1. Customer WhatsApp Inbound</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>2. Gemini Agent Intent Classify</span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-beacon-pulse" />
              <span>3. Auto Dispatch &amp; UPI QR Link</span>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-gray-400">
            <span>Latency: 280ms</span>
            <span className="text-emerald-400 font-bold">100% Automated</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. SECONDARY PERFORMANCE ANALYTICS BADGE (Bottom-Right)  */}
        {/* ======================================================== */}
        <div className="hidden sm:flex absolute -bottom-5 right-4 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-white/15 shadow-xl backdrop-blur-md text-white font-mono">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div className="text-left text-xs">
            <div className="font-bold text-white flex items-center gap-1.5">
              <span>Next.js 15 + Edge SSR</span>
              <span className="text-emerald-400 text-[10px]">● 12ms</span>
            </div>
            <div className="text-[10px] text-gray-400">
              Zero Flakiness · Automated QA Verified
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

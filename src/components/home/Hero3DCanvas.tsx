"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Terminal,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  Smartphone,
  Database,
  Lock,
} from "lucide-react";

export default function Hero3DCanvas() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"code" | "telemetry">("code");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Subtle rotation angles derived from mouse position
  const rotateY = mousePos.x * 14; // -7deg to +7deg
  const rotateX = -mousePos.y * 12; // -6deg to +6deg

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto perspective-1500 select-none py-4 px-2"
    >
      {/* Dynamic 3D Perspective Tilt Container */}
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="relative preserve-3d"
      >
        {/* Background Multi-layer Glow Spotlights */}
        <div className="absolute -inset-4 bg-gradient-to-r from-brand-400/20 via-emerald-500/15 to-cyan-500/20 rounded-3xl blur-2xl opacity-75 -z-10 pointer-events-none transform -translate-z-10" />

        {/* 1. Main 3D Glass Terminal Box */}
        <div className="rounded-3xl bg-navy-950/90 text-gray-200 border border-white/15 shadow-3d-card-dark backdrop-blur-xl overflow-hidden relative">
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 bg-navy-900/90 border-b border-white/10 flex items-center justify-between">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-xs" />
            </div>

            {/* Terminal Tab Switchers */}
            <div className="flex items-center gap-1.5 bg-navy-950/80 px-2 py-1 rounded-lg border border-white/5 text-[11px] font-mono">
              <button
                onClick={() => setActiveTab("code")}
                className={`px-2.5 py-0.5 rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "code"
                    ? "bg-brand-500/20 text-brand-300 font-bold border border-brand-500/30"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Terminal className="w-3 h-3 text-brand-400" />
                <span>MomoKernel.ts</span>
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`px-2.5 py-0.5 rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "telemetry"
                    ? "bg-brand-500/20 text-brand-300 font-bold border border-brand-500/30"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Zap className="w-3 h-3 text-emerald-400" />
                <span>Live_Telemetry.log</span>
              </button>
            </div>

            {/* Live Operational Status Beacon */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon-pulse" />
              <span className="hidden sm:inline font-semibold">99.98% SLA</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed min-h-[290px] flex flex-col justify-between">
            {activeTab === "code" ? (
              <div className="space-y-1.5">
                <div className="text-gray-400 text-[11px]">
                  <span className="text-emerald-400">⚡</span> MOMO IT Technologies · Kadapa Core Architecture
                </div>

                <div className="pt-1">
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-cyan-300">&#123; createEngine, deploySystem &#125;</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-emerald-300">&quot;@momo-it/enterprise&quot;</span>;
                </div>

                <div className="pt-1">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-amber-300">momoStack</span> = &#123;
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-gray-400">hub:</span>{" "}
                  <span className="text-emerald-300">&quot;Kadapa, AP (Primary HQ)&quot;</span>,
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-gray-400">coreTech:</span> [
                  <span className="text-brand-300">&quot;Next.js 15&quot;</span>,{" "}
                  <span className="text-cyan-300">&quot;Flutter 3.x&quot;</span>,{" "}
                  <span className="text-purple-300">&quot;Spring Boot&quot;</span>],
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-gray-400">database:</span>{" "}
                  <span className="text-teal-300">&quot;PostgreSQL ACID + Supabase Edge&quot;</span>,
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-gray-400">qaAutomation:</span>{" "}
                  <span className="text-amber-300">&quot;Selenium 4 + Playwright CI/CD&quot;</span>,
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-gray-400">uptimeSLA:</span>{" "}
                  <span className="text-emerald-400 font-bold">&quot;99.98% Verified&quot;</span>
                </div>
                <div className="text-gray-300">&#125;;</div>

                <div className="pt-2 text-emerald-400/90 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  <span>Build passing · Sub-second edge compilation: 380ms</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-[11px] sm:text-xs">
                <div className="flex items-center justify-between text-gray-400 pb-1.5 border-b border-white/10">
                  <span className="text-emerald-400 font-bold">[SYS_STREAM: ACTIVE]</span>
                  <span>TLS 1.3 · AES-256</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-emerald-400">✓ 23:44:01</span> [AUTH] Zero-Trust Session Initialized
                </div>
                <div className="text-gray-300">
                  <span className="text-cyan-400">✓ 23:44:02</span> [PWA] Vijaya&apos;s Yummy Food Cache Hit: 14ms
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">✓ 23:44:03</span> [FLEET] MANA Tours Dispatch Engine OK
                </div>
                <div className="text-gray-300">
                  <span className="text-amber-400">✓ 23:44:04</span> [TEST] 480 Automated Selenium Suites PASS
                </div>
                <div className="text-emerald-400 font-semibold pt-1">
                  &gt; System Healthy: Zero critical CVE vulnerabilities detected.
                </div>
              </div>
            )}

            {/* Bottom Telemetry HUD Matrix */}
            <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
              <div className="bg-navy-900/60 p-2 rounded-xl border border-white/5">
                <div className="text-[10px] text-gray-400 font-mono">Edge Latency</div>
                <div className="text-xs font-bold text-brand-400 font-mono mt-0.5">12ms TTFB</div>
              </div>
              <div className="bg-navy-900/60 p-2 rounded-xl border border-white/5">
                <div className="text-[10px] text-gray-400 font-mono">Code Ownership</div>
                <div className="text-xs font-bold text-white font-mono mt-0.5">100% Client IP</div>
              </div>
              <div className="bg-navy-900/60 p-2 rounded-xl border border-white/5">
                <div className="text-[10px] text-gray-400 font-mono">Test Defects</div>
                <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">0 Zero-Bug</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Floating 3D Spatial Badges (Layered with Z-axis depth) */}
        {/* Floating Badge A: Top-Right (Next.js 15 & React 19) */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * 20 + 24}px, ${mousePos.y * 20 - 20}px, 45px)`,
            transition: "transform 0.2s ease-out",
          }}
          className="absolute -top-6 -right-3 sm:-right-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 text-navy-950 shadow-3d-floating border border-brand-300/80 backdrop-blur-md animate-float-slow z-20"
        >
          <div className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
            ⚡
          </div>
          <div className="text-left">
            <div className="text-xs font-extrabold text-navy-950 flex items-center gap-1">
              Next.js 15 &amp; React 19
            </div>
            <div className="text-[10px] text-brand-700 font-semibold">Sub-Second Edge Caching</div>
          </div>
        </div>

        {/* Floating Badge B: Bottom-Left (Selenium 4 QA Suite) */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * -18 - 20}px, ${mousePos.y * -18 + 15}px, 55px)`,
            transition: "transform 0.2s ease-out",
          }}
          className="absolute -bottom-6 -left-3 sm:-left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 text-navy-950 shadow-3d-floating border border-emerald-300/80 backdrop-blur-md animate-float-medium z-20"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
            🛡️
          </div>
          <div className="text-left">
            <div className="text-xs font-extrabold text-navy-950 flex items-center gap-1">
              Selenium 4 QA Suite
            </div>
            <div className="text-[10px] text-emerald-700 font-semibold">100% E2E Automation</div>
          </div>
        </div>

        {/* Floating Badge C: Bottom-Right (Flutter Cross-Platform) */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * 15 + 16}px, ${mousePos.y * 15 + 24}px, 35px)`,
            transition: "transform 0.25s ease-out",
          }}
          className="absolute -bottom-8 right-8 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-navy-900/90 text-white shadow-xl border border-cyan-400/30 backdrop-blur-md animate-float-reverse z-10"
        >
          <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-mono text-cyan-200">Flutter 60 FPS Native iOS &amp; Android</span>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import {
  Cloud,
  Bot,
  Layers,
  Smartphone,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  Lock,
  CheckCircle2,
} from "lucide-react";

export default function HeroInfrastructureVisual() {
  return (
    <div className="relative w-full max-w-2xl lg:max-w-none mx-auto select-none">
      {/* Ambient Lighting Spheres Behind 3D Composition */}
      <div className="absolute -top-16 -right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute -bottom-14 -left-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Main 3D Digital Infrastructure Frame */}
      <div className="relative rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/10 via-white/[0.04] to-white/[0.02] border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden group">
        
        {/* Sleek Top Telemetry Bar */}
        <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-slate-950/80 rounded-t-2xl border-b border-white/10 flex items-center justify-between gap-3 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 inline-block shadow-xs" />
          </div>

          <div className="flex items-center gap-2 text-gray-300 truncate">
            <Lock className="w-3 h-3 text-cyan-400 shrink-0" />
            <span className="text-gray-400 hidden sm:inline">cloud.momoit.com/</span>
            <span className="text-cyan-300 font-semibold truncate">infrastructure-mesh</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 shrink-0 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-beacon-pulse" />
            <span className="hidden sm:inline">99.98% HA SLA</span>
          </div>
        </div>

        {/* 3D Visual Centerpiece Container with Seamless Feathered Edges */}
        <div className="relative rounded-b-2xl overflow-hidden bg-slate-950">
          <picture>
            <source srcSet="/hero/enterprise-infrastructure.webp" type="image/webp" />
            <img
              src="/hero/enterprise-infrastructure.jpg"
              alt="MOMO IT Technologies 3D Digital Cloud Infrastructure"
              width={1376}
              height={768}
              className="w-full h-auto object-cover transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              loading="eager"
              fetchPriority="high"
            />
          </picture>

          {/* Seamless Edge Gradients to eliminate any harsh borders */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-transparent pointer-events-none" />

          {/* Floating Subtle Micro-Telemetry HUD inside the visual */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
            <div className="px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono text-gray-300 flex items-center gap-2 shadow-lg">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Multi-Region Cloud Mesh</span>
              <span className="text-gray-500">·</span>
              <span className="text-emerald-400 font-semibold">&lt; 800ms Edge TTFB</span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Floating Glassmorphic Technology Cards Layer             */}
        {/* ======================================================== */}

        {/* Card 1: Top-Right Cloud & Edge Architecture */}
        <div className="absolute -top-3 -right-2 sm:-top-5 sm:-right-4 hidden sm:flex items-center gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl bg-slate-900/90 text-white shadow-2xl border border-white/15 backdrop-blur-xl animate-float-slow z-30">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center shrink-0 border border-blue-400/30">
            <Cloud className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Cloud &amp; SaaS Systems</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-beacon-pulse" />
            </div>
            <div className="text-[10px] text-gray-300 font-mono mt-0.5">
              Next.js 15 · Spring Boot · Microservices
            </div>
          </div>
        </div>

        {/* Card 2: Bottom-Left Autonomous AI & Workflow Engine */}
        <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 hidden sm:flex items-center gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl bg-slate-900/90 text-white shadow-2xl border border-white/15 backdrop-blur-xl animate-float-medium z-30">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-400/30">
            <Bot className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Autonomous AI Systems</span>
              <span className="px-1.5 py-0.2 rounded bg-indigo-500/30 text-indigo-300 text-[9px] font-mono font-bold">
                AI
              </span>
            </div>
            <div className="text-[10px] text-gray-300 font-mono mt-0.5">
              Agentic RAG · WhatsApp Cloud API
            </div>
          </div>
        </div>

        {/* Bottom Integrated Architecture HUD (Mobile + Desktop friendly) */}
        <div className="mt-2.5 pt-2.5 pb-1 px-3 sm:px-4 bg-slate-950/90 rounded-b-2xl border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs">
          <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="text-gray-400 font-mono text-[9px] sm:text-[10px]">Mobile Engine</div>
            <div className="font-bold text-white mt-0.5">Flutter 60 FPS</div>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="text-gray-400 font-mono text-[9px] sm:text-[10px]">Payment Protocol</div>
            <div className="font-bold text-emerald-400 mt-0.5">0% Fee NPCI UPI</div>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="text-gray-400 font-mono text-[9px] sm:text-[10px]">IP Rights</div>
            <div className="font-bold text-cyan-300 mt-0.5">100% Client Code</div>
          </div>
        </div>

      </div>
    </div>
  );
}

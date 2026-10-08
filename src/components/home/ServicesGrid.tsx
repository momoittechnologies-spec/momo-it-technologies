import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Globe,
  Smartphone,
  Layers,
  Users,
  Palette,
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  RefreshCw,
  Share2,
  Megaphone,
} from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-6 h-6 text-emerald-600" />;
      case "RefreshCw":
        return <RefreshCw className="w-6 h-6 text-indigo-600" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-teal-600" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-blue-600" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-purple-600" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-amber-600" />;
      case "Users":
        return <Users className="w-6 h-6 text-indigo-600" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-pink-600" />;
      case "Share2":
        return <Share2 className="w-6 h-6 text-rose-600" />;
      case "Megaphone":
        return <Megaphone className="w-6 h-6 text-orange-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-surface-light border-b border-gray-100 bg-cyber-grid relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-brand-300/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200/80 shadow-xs">
            Comprehensive Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mt-3">
            Tailored Engineering &amp; Technology Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            From automated QA testing pods to multi-platform business software, we provide flexible, high-precision delivery models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white/95 rounded-3xl p-8 border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Luminous corner spotlight on hover */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-brand-400/15 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-400/25 transition-all duration-500" />

              {/* Specular gradient top edge indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-emerald-400 to-teal-500 opacity-80 group-hover:h-1.5 transition-all duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-gray-50 to-brand-50/50 flex items-center justify-center border border-gray-200/80 shadow-xs group-hover:scale-110 group-hover:border-brand-300 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/80 shadow-xs">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-navy-950 mb-2 group-hover:text-brand-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <div className="space-y-2.5 mb-6">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-1.5 shadow-xs" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-gray-50 text-navy-950 border border-gray-200/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-gray-100 relative z-10 flex items-center justify-between">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 group-hover:text-brand-700 transition-colors"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-600 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[10px] text-gray-400 font-mono font-medium">Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

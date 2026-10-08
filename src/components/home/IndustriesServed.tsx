import React from "react";
import Link from "next/link";
import {
  Utensils,
  Car,
  ShoppingBag,
  Building2,
  Stethoscope,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Utensils,
    title: "Dining & Cloud Kitchens",
    desc: "Direct online ordering PWAs, Kitchen Display Systems (KDS), and thermal POS printing bypassing 30% aggregator fees.",
    example: "Vijaya's Yummy Food Kadapa",
    href: "/case-studies/vijayas-yummy-food",
  },
  {
    icon: Car,
    title: "Logistics, Fleets & Travel",
    desc: "Automated booking portals, real-time driver dispatch, route calculators, and instant WhatsApp ticketing.",
    example: "MANA Tours & Travels",
    href: "/case-studies/mana-tours",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Omnichannel inventory sync, dynamic UPI QR checkout counters, barcode tracking, and automated GST billing.",
    example: "Direct Next.js Storefronts",
    href: "/services/ecommerce-development",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Diagnostics",
    desc: "Patient appointment scheduling, secure digital health records, lab test booking, and WhatsApp report delivery.",
    example: "Clinic Management Systems",
    href: "/services/software-development",
  },
  {
    icon: GraduationCap,
    title: "Education & Academies",
    desc: "Student admissions CRM, verified certificate generation registries, course fee management, and parent alerts.",
    example: "MOMO Academy & Local Institutes",
    href: "/academy",
  },
  {
    icon: Building2,
    title: "Real Estate & Construction",
    desc: "Property listing portals, 3D interactive layout walkthroughs, lead qualification funnels, and CRM pipeline tracking.",
    example: "Regional Property Portals",
    href: "/services/web-development",
  },
];

export default function IndustriesServed() {
  return (
    <section className="py-20 lg:py-28 bg-surface-light border-y border-gray-200/60 bg-cyber-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200/80 shadow-xs">
            Domain Precision
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight mt-3">
            Tailored Digital Solutions for High-Growth Industries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We don&apos;t build generic software. We engineer domain-specific systems that solve the exact operational hurdles of your industry.
          </p>
        </div>

        {/* 3D Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const isFeatured = i === 0 || i === 1;
            return (
              <div
                key={i}
                className={`bg-white/95 rounded-3xl p-7 sm:p-8 border border-gray-200/90 shadow-3d-card card-3d-lift flex flex-col justify-between group relative overflow-hidden ${
                  isFeatured ? "md:col-span-1 lg:col-span-1 border-brand-200/80" : ""
                }`}
              >
                {/* Luminous corner spotlight on hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-400/20 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-50 to-emerald-50 text-brand-700 flex items-center justify-center border border-brand-200/60 shadow-xs group-hover:scale-110 transition-transform">
                      <ind.icon className="w-6 h-6" />
                    </div>
                    {isFeatured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 border border-brand-200">
                        Live Case Study
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-navy-950 mb-2.5 group-hover:text-brand-700 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-semibold text-gray-400 font-mono">
                    System: <span className="text-navy-950 font-bold">{ind.example}</span>
                  </span>
                  <Link
                    href={ind.href}
                    className="text-xs font-bold text-brand-700 hover:text-brand-800 inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-20 lg:py-28 bg-surface-light border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Domain Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mt-3">
            Tailored Digital Solutions for High-Growth Industries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We don&apos;t build generic software. We engineer domain-specific systems that solve the exact operational hurdles of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-brand-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                  <ind.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-2">{ind.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">{ind.desc}</p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-400">
                  Proof: <span className="text-navy-900">{ind.example}</span>
                </span>
                <Link
                  href={ind.href}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

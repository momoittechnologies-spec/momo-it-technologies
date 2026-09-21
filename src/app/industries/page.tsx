import React from "react";
import Link from "next/link";
import {
  CreditCard,
  Car,
  GraduationCap,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Industries We Serve | MOMO IT Technologies",
  description:
    "Discover how MOMO IT Technologies builds software for Fintech, Mobility, EdTech, and Local Commerce.",
};

export default function IndustriesPage() {
  const industries = [
    {
      title: "Fintech & Digital Payments",
      desc: "High-security transaction engines, merchant billing portals, and automated rewards ecosystems (proven by our MOMOPE platform).",
      icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
      caseStudy: {
        title: "MOMOPE Platform",
        href: "/case-studies/momope",
      },
    },
    {
      title: "Mobility, Travel & Logistics",
      desc: "Fleet dispatch management, intercity cab booking platforms, and 24/7 AI Voice enquiry assistants (proven by MANA Tours & Travels).",
      icon: <Car className="w-6 h-6 text-blue-600" />,
      caseStudy: {
        title: "MANA Tours & Travels",
        href: "/case-studies/mana-tours",
      },
    },
    {
      title: "Education & EdTech",
      desc: "Student management systems, hybrid live learning setups, automated evaluation portals, and curriculum delivery systems.",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
      caseStudy: {
        title: "MOMO Academy",
        href: "/academy",
      },
    },
    {
      title: "Retail & Multi-Store Commerce",
      desc: "Custom POS, stock tracking, automated GST invoicing, and customer retention mechanisms for growing retail chains.",
      icon: <ShoppingBag className="w-6 h-6 text-amber-600" />,
      caseStudy: {
        title: "Custom ERP Systems",
        href: "/services/business-systems",
      },
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Sector Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mt-3 mb-4">
            Industries We Transform With Software &amp; QA
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Deep domain understanding backed by production-tested software applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 mb-6">
                  {ind.icon}
                </div>
                <h2 className="text-2xl font-extrabold text-navy-950 mb-2">
                  {ind.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Proven in production</span>
                <Link
                  href={ind.caseStudy.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
                >
                  <span>Explore {ind.caseStudy.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

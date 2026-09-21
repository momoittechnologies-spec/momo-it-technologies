import React from "react";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Truck,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Custom Business Management Systems & ERP | MOMO IT Technologies",
  description:
    "Tailored CRM, billing, inventory, and fleet management software built for small and medium businesses by MOMO IT Technologies Kadapa.",
};

export default function BusinessSystemsPage() {
  const systems = [
    {
      title: "Smart Billing & Invoicing Systems",
      desc: "Fast point-of-sale (POS) and automated invoice generation with tax calculation, digital receipts, and WhatsApp/SMS delivery.",
      icon: <CreditCard className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Fleet & Route Dispatch Portals",
      desc: "Real-time driver assignment, booking calendars, trip fare computation, and live vehicle tracking workflows (as built for Mana Tours).",
      icon: <Truck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Custom CRM & Lead Pipelines",
      desc: "Manage leads, student/customer communications, automated follow-ups, and conversion analytics without monthly third-party subscriptions.",
      icon: <Users className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Inventory & Multi-Store Management",
      desc: "Track stock levels across branches, low-stock threshold alerts, vendor POs, and daily revenue reporting.",
      icon: <Layers className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200/60">
            <Layers className="w-3.5 h-3.5" />
            Operations &amp; Automation
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            Custom Business Management Systems &amp; ERP
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Eliminate operational chaos. We engineer customized digital workflows that automate your billing, customer relationships, and inventory.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-md transition-all"
            >
              Discuss Your Business Workflow
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {systems.map((sys, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card flex items-start gap-4"
            >
              <div className="p-3 rounded-2xl bg-gray-50 shrink-0 border border-gray-100">
                {sys.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-950 mb-1">
                  {sys.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {sys.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

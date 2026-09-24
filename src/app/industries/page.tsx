import React from "react";
import Link from "next/link";
import {
  Activity,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Building2,
  Truck,
  Building,
  Film,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Software Solutions Across Industries | MOMO IT Technologies",
  description:
    "Explore enterprise software and automation solutions engineered by MOMO IT Technologies across Healthcare, Financial Services, Retail, Education, Government, Logistics, Real Estate, and Media.",
};

export default function IndustriesPage() {
  const industries = [
    {
      id: "healthcare",
      title: "Healthcare & Life Sciences",
      category: "Healthcare",
      desc: "HIPAA-compliant telemedicine platforms, Electronic Health Record (EHR) integrations, doctor appointment scheduling, diagnostic lab reporting portals, and clinic management automation.",
      icon: <Activity className="w-6 h-6 text-rose-600" />,
      features: [
        "Teleconsultation & Video Health Checkups",
        "EHR / EMR Data Integration & Patient Portals",
        "Automated Prescription & Diagnostic Lab Dispatch",
        "HIPAA-Compliant Encrypted Cloud Backends",
      ],
      caseStudy: {
        title: "Healthcare Solutions",
        href: "/services/software-dev",
      },
    },
    {
      id: "financial-services",
      title: "Financial Services & FinTech",
      category: "Financial Services",
      desc: "High-security digital banking interfaces, instant UPI & payment gateway integrations, automated loan origination workflows, GST invoicing, and real-time reconciliation ledgers.",
      icon: <Landmark className="w-6 h-6 text-emerald-600" />,
      features: [
        "UPI, NetBanking & International Gateway Integrations",
        "Automated Accounting, GST Invoicing & Ledger Reconciliation",
        "KYC Document Verification & Fraud Prevention Guardrails",
        "Role-Based Audit Trails & SOC2 Compliance Architecture",
      ],
      caseStudy: {
        title: "FinTech Architecture",
        href: "/services/business-systems",
      },
    },
    {
      id: "retail-ecommerce",
      title: "Retail & E-commerce",
      category: "Retail & E-commerce",
      desc: "Omnichannel e-commerce platforms, multi-store inventory synchronization, custom point-of-sale (POS) systems, automated cart recovery, and lightning-fast customer PWAs.",
      icon: <ShoppingBag className="w-6 h-6 text-amber-600" />,
      features: [
        "Custom D2C E-Commerce & Progressive Web Apps (PWAs)",
        "Real-Time Multi-Outlet Inventory & Barcode Scanning",
        "Automated WhatsApp Order Confirmation & Dispatch Alerts",
        "Integrated Loyalty Programs & Dynamic Discount Engines",
      ],
      caseStudy: {
        title: "Vijaya's Yummy Food PWA",
        href: "/case-studies/vijayas-yummy-food",
      },
    },
    {
      id: "education",
      title: "Education & EdTech",
      category: "Education",
      desc: "Comprehensive Learning Management Systems (LMS), hybrid live classroom portals, automated student assessments, proctored examinations, and institute admission funnels.",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
      features: [
        "Interactive Video Streaming & Live Class Integration",
        "Student Enrollment, Fee Gateways & Attendance Tracking",
        "Automated Evaluation, Quiz Engines & Digital Certificates",
        "Offline-Ready Student Handbooks & Learning Portals",
      ],
      caseStudy: {
        title: "MOMO IT Academy",
        href: "/academy",
      },
    },
    {
      id: "government-public-sector",
      title: "Government & Public Sector",
      category: "Government & Public Sector",
      desc: "Secure citizen service portals, municipal utility billing, public grievance tracking, transparent tender workflows, and high-concurrency e-governance platforms.",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      features: [
        "High-Concurrency Public Service & Permit Portals",
        "Citizen Grievance Ticketing & SLA Tracking Systems",
        "Multi-Tier Role-Based Access Control (RBAC) & Encryption",
        "Localised Multi-Language Support (Telugu, Hindi, English)",
      ],
      caseStudy: {
        title: "Public Sector Engineering",
        href: "/services/qa-testing",
      },
    },
    {
      id: "logistics-transportation",
      title: "Logistics & Transportation",
      category: "Logistics & Transportation",
      desc: "Fleet dispatch management, real-time GPS asset tracking, driver partner mobile apps, multi-stop route optimization, and AI voice booking enquiry assistants.",
      icon: <Truck className="w-6 h-6 text-sky-600" />,
      features: [
        "Real-Time GPS Tracking & Driver Dispatch Portals",
        "Intercity Cab & Travel Booking Engines with 24/7 AI Voice",
        "Warehouse Stock Movement & Waybill Automation",
        "Proof of Delivery (POD) & Digital Signature Capture",
      ],
      caseStudy: {
        title: "MANA Tours & Travels",
        href: "/case-studies/mana-tours",
      },
    },
    {
      id: "real-estate",
      title: "Real Estate & PropTech",
      category: "Real Estate",
      desc: "Modern property listing portals, builder CRM pipelines, tenant & lease management, automated site-visit scheduling, and immersive digital property showcases.",
      icon: <Building className="w-6 h-6 text-indigo-600" />,
      features: [
        "MLS Property Listings with Interactive Map Search",
        "Builder CRM, Lead Scoring & Site Visit Booking",
        "Automated Lease Agreements & Digital Invoicing",
        "Virtual Property Tours & High-Resolution Asset Gallleries",
      ],
      caseStudy: {
        title: "PropTech Development",
        href: "/services/software-dev",
      },
    },
    {
      id: "media-entertainment",
      title: "Media & Entertainment",
      category: "Media & Entertainment",
      desc: "High-throughput content streaming platforms, digital asset management (DAM), creator monetisation ecosystems, dynamic audio/video delivery, and live event ticketing.",
      icon: <Film className="w-6 h-6 text-pink-600" />,
      features: [
        "Over-The-Top (OTT) & Video On-Demand (VOD) Streaming Portals",
        "Digital Rights Management (DRM) & Encrypted Distribution",
        "Creator Subscription Portals & Direct In-App Monetisation",
        "Event Ticket Booking, QR Code Check-in & Gate Scanners",
      ],
      caseStudy: {
        title: "Media & Content Platforms",
        href: "/services/software-dev",
      },
    },
  ];

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200/60">
            Enterprise Sector Coverage
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mt-3 mb-4">
            Software Solutions for Businesses Across Industries
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From Kadapa to global markets, MOMO IT Technologies engineers mission-critical software, custom AI systems, and QA automation suites tailored to industry compliance and real-world operations.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform">
                    {ind.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                    {ind.category}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-navy-950 mb-2 group-hover:text-brand-600 transition-colors">
                  {ind.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {ind.desc}
                </p>

                <div className="space-y-2.5 mb-6 bg-gray-50/70 p-4 rounded-2xl border border-gray-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Key Software Solutions
                  </div>
                  {ind.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Production-Ready Solutions</span>
                <Link
                  href={ind.caseStudy.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  <span>Explore {ind.caseStudy.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Tailored Industry Architecture
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need a Custom Solution for Your Industry?
            </h3>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              Whether you are scaling a clinic, multi-outlet retail brand, logistics network, or financial ledger, our engineering pods build custom software with zero bloat and sub-second performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918639831132?text=Hello%20MOMO%20IT%20Team%2C%20I%20would%20like%20to%20discuss%20a%20custom%20software%20solution%20for%20our%20industry."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


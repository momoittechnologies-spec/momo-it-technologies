import React from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Hire Dedicated Developers & QA Engineers | MOMO IT Technologies",
  description:
    "Hire dedicated remote Java developers, QA automation testers, and Next.js engineers from MOMO IT Technologies Kadapa on flexible monthly retainers.",
};

export default function HireDevelopersPage() {
  const roles = [
    {
      title: "Senior QA Automation Engineer",
      skills: ["Selenium 4", "Playwright", "Java", "RestAssured", "TestNG", "CI/CD"],
      experience: "3 - 5 Years Experience equivalent",
      idealFor: "SaaS startups needing reliable automated regression test coverage.",
      deliveryTime: "Ready to deploy in 48 hours",
    },
    {
      title: "Full-Stack Java & React Developer",
      skills: ["Java 21", "Spring Boot 3", "React 19", "PostgreSQL", "REST APIs"],
      experience: "Senior Dev + Peer Review",
      idealFor: "Businesses building secure web platforms, customer portals, or ERPs.",
      deliveryTime: "Ready to deploy in 48 hours",
    },
    {
      title: "Frontend Next.js Engineer",
      skills: ["Next.js 15", "TypeScript", "Tailwind CSS", "Mobile-First UX"],
      experience: "Modern Web Specialist",
      idealFor: "Projects requiring fast page speeds, high SEO scores, and modern UI.",
      deliveryTime: "Ready to deploy in 48 hours",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200/60">
            <Users className="w-3.5 h-3.5" />
            Flexible Staff Augmentation
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            Hire Dedicated Engineers &amp; QA Testers
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Scale your development capacity with pre-vetted engineers trained on live production workflows. Direct communication, zero recruiter commissions, and 1-week risk-free trial.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-md transition-all"
            >
              Request Candidate Profiles &amp; Pricing
            </Link>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60 mb-3 inline-block">
                  {role.deliveryTime}
                </span>
                <h3 className="text-xl font-bold text-navy-950 mb-2">
                  {role.title}
                </h3>
                <p className="text-xs text-gray-500 mb-4">{role.idealFor}</p>

                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-700 block mb-2">
                    Core Technical Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-50 text-gray-700 border border-gray-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold transition-colors"
                >
                  <span>Hire {role.title.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Model */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card">
          <h2 className="text-2xl font-extrabold text-navy-950 mb-6 text-center">
            How Our Monthly Retainer Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 font-extrabold text-sm flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h4 className="text-sm font-bold text-navy-950 mb-1">Share Requirements</h4>
              <p className="text-xs text-gray-500">Specify tech stack, hours, and duration.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 font-extrabold text-sm flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h4 className="text-sm font-bold text-navy-950 mb-1">Meet Your Engineer</h4>
              <p className="text-xs text-gray-500">Technical interview over Google Meet.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 font-extrabold text-sm flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h4 className="text-sm font-bold text-navy-950 mb-1">1-Week Trial</h4>
              <p className="text-xs text-gray-500">Work directly on your repo risk-free.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 font-extrabold text-sm flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h4 className="text-sm font-bold text-navy-950 mb-1">Monthly Retainer</h4>
              <p className="text-xs text-gray-500">Seamless daily standups, weekly delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

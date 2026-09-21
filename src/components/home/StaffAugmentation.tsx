import React from "react";
import Link from "next/link";
import { Users, CheckCircle2, ShieldCheck, ArrowRight, Zap } from "lucide-react";

export default function StaffAugmentation() {
  const roles = [
    {
      title: "Dedicated QA Automation Engineer",
      skills: "Selenium, Playwright, Java, Cucumber BDD, RestAssured, CI/CD",
      turnaround: "Onboard in 48 Hours",
      benefit: "Automate regression suites & save 80% manual testing time.",
    },
    {
      title: "Full-Stack Java & Spring Boot Developer",
      skills: "Java 21, Spring Boot 3, REST APIs, Hibernate, PostgreSQL, React",
      turnaround: "Onboard in 48 Hours",
      benefit: "Build scalable microservices and robust enterprise backends.",
    },
    {
      title: "Modern Frontend / Next.js Developer",
      skills: "Next.js 15, React 19, TypeScript, Tailwind CSS, API Integration",
      turnaround: "Onboard in 48 Hours",
      benefit: "Deliver fast, pixel-perfect, responsive client and customer portals.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30 mb-4">
              <Zap className="w-3.5 h-3.5" />
              IT Staff Augmentation &amp; Dedicated Pods
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Scale Your Development &amp; QA Team in Days, Not Months.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Skip the expensive recruitment agencies and grueling 3-month hiring cycles. Hire pre-vetted, highly trained engineers from MOMO IT Technologies dedicated 100% to your product on a predictable monthly retainer.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="bg-navy-900/90 border border-navy-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-500/50 transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">
                    {role.turnaround}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {role.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">{role.benefit}</p>
                  <div className="text-[11px] text-gray-300 bg-navy-950/80 p-3 rounded-xl border border-navy-800">
                    <span className="text-gray-500 block text-[10px] uppercase font-bold mb-1">
                      Tech Stack:
                    </span>
                    {role.skills}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-navy-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-300">
                    Monthly Retainer
                  </span>
                  <Link
                    href="/hire-developers"
                    className="text-xs font-bold text-white hover:text-brand-400 flex items-center gap-1"
                  >
                    Inquire <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                1-Week Risk-Free Trial Period
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                Direct Daily Standups (Meet / Slack)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                Zero Recruiter Fees or Long Lock-ins
              </span>
            </div>

            <Link
              href="/hire-developers"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-xs sm:text-sm shadow-lg shadow-brand-500/25 transition-all shrink-0 w-full sm:w-auto"
            >
              <span>Schedule Talent Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

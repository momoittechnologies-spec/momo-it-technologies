import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  Layers,
  Bug,
  Cpu,
  FileCheck,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "QA & Automation Testing Services | MOMO IT Technologies",
  description:
    "Enterprise QA Automation, Selenium, Playwright, and RestAssured API testing pods delivered by MOMO IT Technologies Kadapa.",
};

export default function QaTestingServicePage() {
  const qaCapabilities = [
    {
      title: "End-to-End Web Automation",
      desc: "Robust Page Object Model frameworks using Playwright and Selenium WebDriver. Cross-browser, multi-device regression suites.",
      tools: ["Playwright", "Selenium", "TestNG", "Cucumber BDD"],
    },
    {
      title: "API & Microservices Verification",
      desc: "Automated contract, functional, and schema validation with RestAssured and Postman. Prevent silent backend breaking changes.",
      tools: ["RestAssured", "Postman", "Newman", "JSONSchema"],
    },
    {
      title: "Mobile App Testing (iOS & Android)",
      desc: "Functional, visual, and performance testing on real Android and iOS devices using Appium and automated test clouds.",
      tools: ["Appium", "Flutter Driver", "Android Studio", "XCUITest"],
    },
    {
      title: "Continuous CI/CD Pipeline Automation",
      desc: "Automated regression runs triggered on every Git pull request. Detailed Allure and HTML reports delivered to Slack/email.",
      tools: ["GitHub Actions", "Jenkins", "GitLab CI", "Maven"],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Category */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200/60">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Our Core Heritage
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            Enterprise QA &amp; Test Automation Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Stop releasing bugs to production. We engineer maintainable, flakiness-free automation suites that slash manual regression time from days to minutes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-md transition-all"
            >
              Request Free QA Audit
            </Link>
            <Link
              href="/hire-developers"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-navy-950 font-bold text-sm border border-gray-200 shadow-sm transition-all"
            >
              Hire Dedicated QA Testers
            </Link>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {qaCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {cap.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                {cap.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded bg-gray-50 text-gray-700 border border-gray-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why MOMO QA Banner */}
        <div className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
              The MOMO Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
              Why Global &amp; Indian Startups Choose Our QA Pods
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              We combine elite technical depth with rural operational efficiency: you get world-class automation engineers at a fraction of metro agency costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-navy-800">
            <div>
              <div className="text-2xl font-extrabold text-brand-400">80%+</div>
              <div className="text-xs text-gray-300 font-medium mt-1">
                Reduction in manual regression testing overhead
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-brand-400">48 Hours</div>
              <div className="text-xs text-gray-300 font-medium mt-1">
                Fast onboarding of dedicated QA pods
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-brand-400">Zero Lock-In</div>
              <div className="text-xs text-gray-300 font-medium mt-1">
                Flexible monthly retainers with 1-week trial
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

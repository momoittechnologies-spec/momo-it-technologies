import React from "react";
import {
  Code2,
  Server,
  Smartphone,
  ShieldCheck,
  Bot,
  Database,
  Cloud,
  CheckCircle2,
} from "lucide-react";

const techCategories = [
  {
    category: "Frontend & Web Architecture",
    icon: Code2,
    technologies: [
      { name: "Next.js 15 App Router", role: "SSR & Static Edge Caching" },
      { name: "React 19 & TypeScript", role: "Type-Safe Reactive UI" },
      { name: "Tailwind CSS", role: "Utility-First Responsive Design" },
      { name: "Vercel Edge Network", role: "Sub-Second Global TTFB" },
    ],
  },
  {
    category: "Enterprise Backend & APIs",
    icon: Server,
    technologies: [
      { name: "Java 21 & Spring Boot 3", role: "High-Concurrency Microservices" },
      { name: "Node.js & Express", role: "Lightweight API Gateways" },
      { name: "PostgreSQL & Supabase", role: "ACID Relational Storage" },
      { name: "Redis", role: "In-Memory Session & Cache Engine" },
    ],
  },
  {
    category: "Mobile & Quality Automation",
    icon: Smartphone,
    technologies: [
      { name: "Google Flutter & Dart", role: "Cross-Platform iOS & Android" },
      { name: "Selenium WebDriver 4", role: "End-to-End Browser Automation" },
      { name: "Playwright", role: "Fast Headless Web Regression" },
      { name: "RestAssured & Postman", role: "Automated API Contract Verification" },
    ],
  },
  {
    category: "AI & Business Operations",
    icon: Bot,
    technologies: [
      { name: "Google Gemini API & OpenAI", role: "Frontier Multimodal LLMs" },
      { name: "LangChain & LangGraph", role: "Autonomous Multi-Agent Workflows" },
      { name: "WhatsApp Business Cloud API", role: "Automated 24/7 Customer Support" },
      { name: "ESC/POS Thermal Engine", role: "Sub-Second Receipt & Billing Printing" },
    ],
  },
];

export default function TechEcosystem() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Engineered for Scale
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mt-3">
            Our Modern Production Technology Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We avoid outdated legacy stacks. Every system is engineered with frontier, enterprise-grade tools built for longevity, sub-second speed, and maximum security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((cat, i) => (
            <div
              key={i}
              className="bg-surface-light rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-950">{cat.category}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.technologies.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                  >
                    <div className="text-xs font-bold text-navy-950">{t.name}</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">{t.role}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

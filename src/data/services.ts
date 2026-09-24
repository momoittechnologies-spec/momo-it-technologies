export interface ServiceItem {
  id: string;
  title: string;
  category?: string;
  shortDesc: string;
  description: string;
  icon: string;
  badge?: string;
  features: string[];
  techStack: string[];
  href: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "custom-ai-development",
    title: "Custom AI Software Development",
    category: "AI & AUTOMATION",
    shortDesc: "Bespoke autonomous AI agents, enterprise RAG systems, predictive analytics, and LLM-powered business software.",
    description:
      "We architect and deploy custom enterprise AI solutions tailored to your operational bottlenecks. From conversational WhatsApp booking bots and automated document extraction to multi-agent workflow systems and private local LLM deployments, we bring frontier AI directly into your business software.",
    icon: "Bot",
    badge: "AI & AUTOMATION / Enterprise Grade",
    features: [
      "Autonomous Multi-Agent Systems & Workflow Automation (CrewAI / LangGraph)",
      "Enterprise Retrieval-Augmented Generation (RAG) over Private Data",
      "Custom Fine-Tuned LLMs & Local Privacy-Preserving Deployments (Ollama / vLLM)",
      "WhatsApp & Voice AI Chatbots with Real-Time Database Sync",
      "Computer Vision, OCR & Intelligent Document Processing",
      "AI Safety Guardrails, Token Cost Optimization & Low-Latency Caching",
    ],
    techStack: ["Python", "LangChain", "LangGraph", "Gemini 2.0", "OpenAI", "pgvector", "FastAPI"],
    href: "/services/software-dev",
  },
  {
    id: "legacy-modernisation",
    title: "Legacy Application Modernisation: Complete Migration Guide",
    category: "DIGITAL TRANSFORMATION",
    shortDesc: "Transform monolithic, outdated systems into agile cloud-native microservices, modern React/Next.js frontends, and automated CI/CD pipelines.",
    description:
      "Future-proof your enterprise with zero-downtime modernization. We audit, decouple, and migrate legacy PHP, ASP.NET, Java EE, and monolithic stacks to modern Next.js 15, Spring Boot 3 microservices, and managed cloud databases (PostgreSQL/Supabase). Complete migration guide and execution roadmap with continuous data integrity, security hardening, and sub-second performance.",
    icon: "RefreshCw",
    badge: "DIGITAL TRANSFORMATION / Migration Guide",
    features: [
      "Complete End-to-End Migration Guide & Architecture Audit",
      "Monolith-to-Microservices Decomposition (Strangler Fig Pattern)",
      "Frontend Overhaul to Next.js 15, React 19 & Tailwind CSS",
      "Database Modernization: Legacy SQL/Access to PostgreSQL & Supabase",
      "Cloud Migration (AWS / GCP / Cloudflare / Azure) with Zero-Downtime Cutover",
      "Automated CI/CD Pipelines & High-Reliability Regression Testing",
    ],
    techStack: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "AWS / GCP", "Playwright"],
    href: "/services/software-dev",
  },
  {
    id: "web-development",
    title: "Web & SaaS Product Development",
    shortDesc: "Scalable, secure, and blazing-fast web applications and SaaS platforms built on Next.js, React, and Spring Boot.",
    description:
      "Our primary engineering offering. From high-conversion SaaS products to complex multi-tenant business platforms. We architect cloud-native web applications with clean domain architecture, sub-second load times, and intuitive mobile-first UX.",
    icon: "Globe",
    badge: "Core Flagship Service",
    features: [
      "Custom SaaS Platforms & Multi-Tenant Architecture",
      "Modern Frontends with Next.js 15 & React 19",
      "Enterprise Backends with Spring Boot 3 & Node.js",
      "Cloud Database Design (PostgreSQL / Supabase)",
      "SEO Optimization & Sub-Second Core Web Vitals",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Spring Boot", "Supabase", "PostgreSQL"],
    href: "/services/software-dev",
  },
  {
    id: "qa-testing",
    title: "QA & Automation Testing",
    shortDesc: "End-to-end automation test suites, API verification, and manual QA pods.",
    description:
      "Eliminate critical production bugs and accelerate delivery cycles. We design resilient test automation frameworks using Playwright, Selenium, and RestAssured, integrated directly into your CI/CD pipelines.",
    icon: "CheckCircle2",
    badge: "Enterprise Testing",
    features: [
      "Selenium & Playwright Web Automation",
      "API & Microservices Testing (RestAssured)",
      "Mobile App Automation Testing (Appium)",
      "Performance & Load Testing (JMeter)",
      "Continuous CI/CD Integration & Test Reporting",
    ],
    techStack: ["Playwright", "Selenium", "Java", "RestAssured", "Postman", "GitHub Actions"],
    href: "/services/qa-testing",
  },
  {
    id: "custom-business-systems",
    title: "Business Management Systems & ERP",
    shortDesc: "Tailored CRM, billing, inventory, and fleet management workflows.",
    description:
      "Stop wrestling with messy spreadsheets and rigid off-the-shelf software. We build bespoke business operational platforms aligned precisely to your business processes.",
    icon: "Layers",
    badge: "Proven in Production",
    features: [
      "Smart Billing & Digital Invoicing Systems",
      "Fleet Dispatch & Route Logistics Management",
      "Custom CRM & Customer Pipeline Dashboards",
      "Inventory & Multi-Store Management",
      "Automated WhatsApp & SMS Notifications",
    ],
    techStack: ["React", "PostgreSQL", "Tailwind CSS", "RESTful APIs", "Cloudflare"],
    href: "/services/business-systems",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    shortDesc: "Cross-platform Android & iOS applications with native performance using Flutter.",
    description:
      "Deliver smooth mobile experiences on both Google Play Store and Apple App Store with a single, maintainable Flutter codebase. Reduces development budget and time by half.",
    icon: "Smartphone",
    features: [
      "Cross-Platform Android & iOS Delivery",
      "Offline-First Data Synchronization",
      "Push Notifications & Background Geolocation",
      "Payment Gateway & In-App Purchases",
      "Play Store & App Store Deployment",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs"],
    href: "/services/software-dev",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Product Design",
    shortDesc: "User-centric design systems, wireframes, and interactive clickable prototypes.",
    description:
      "We bridge business logic with modern aesthetics. From intuitive navigation flows to complete design systems in Figma, we ensure every digital touchpoint feels effortless and modern.",
    icon: "Palette",
    features: [
      "Figma Wireframing & Interactive Prototyping",
      "B2B Admin Dashboard & Portal UX Design",
      "Scalable Component Libraries & Design Systems",
      "Mobile App UI/UX & Responsive Layouts",
      "Usability Testing & Design Handoff",
    ],
    techStack: ["Figma", "Design Systems", "Tailwind UI", "Prototyping"],
    href: "/services/software-dev",
  },
];

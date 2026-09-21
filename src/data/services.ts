export interface ServiceItem {
  id: string;
  title: string;
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
    id: "staff-augmentation",
    title: "Dedicated IT Staff Augmentation",
    shortDesc: "Scale your team with dedicated QA engineers and developers on monthly retainers.",
    description:
      "Need immediate engineering power without the overhead of hiring full-time employees? Onboard vetted developers and QA engineers from MOMO IT Technologies who integrate seamlessly into your team.",
    icon: "Users",
    badge: "Predictable Cost",
    features: [
      "Dedicated Full-Time QA Automation Engineers",
      "Full-Stack Java & React Developers",
      "Flexible Monthly Retainer Models",
      "Zero Overhead, Direct Slack/Meet Integration",
      "1-Week Risk-Free Trial Period",
    ],
    techStack: ["Java", "React", "Next.js", "Playwright", "Spring Boot"],
    href: "/hire-developers",
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

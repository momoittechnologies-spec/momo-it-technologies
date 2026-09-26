import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.momoittechnologies.com";

  const routes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    // Flagship & Local Anchor
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/kadapa", priority: 0.95, changeFrequency: "daily" },

    // Core Services & Kadapa Local Silos
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/web-development-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/software-development-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/qa-automation-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/ai-development-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/mobile-app-development-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/saas-development-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/business-software-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/qa-testing", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/software-dev", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/business-systems", priority: 0.7, changeFrequency: "monthly" },

    // MOMO Academy & Kadapa Training Silos
    { path: "/academy", priority: 0.9, changeFrequency: "weekly" },
    { path: "/academy/automation-testing-training-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/academy/java-training-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/academy/selenium-training-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/academy/full-stack-development-training-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/academy/flutter-training-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/academy/ai-training-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/certificates", priority: 0.8, changeFrequency: "weekly" },

    // Knowledge Hub & Local Guides
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
    { path: "/blog/top-software-companies-in-kadapa", priority: 0.9, changeFrequency: "weekly" },
    { path: "/blog/how-much-does-a-website-cost-in-kadapa", priority: 0.85, changeFrequency: "monthly" },
    { path: "/blog/automation-testing-career-roadmap-kadapa", priority: 0.85, changeFrequency: "monthly" },
    { path: "/blog/how-kadapa-businesses-can-use-ai-automation", priority: 0.85, changeFrequency: "monthly" },
    { path: "/blog/best-software-development-solutions-for-businesses-in-kadapa", priority: 0.85, changeFrequency: "monthly" },

    // Case Studies & Proof
    { path: "/case-studies", priority: 0.85, changeFrequency: "weekly" },
    { path: "/case-studies/vijayas-yummy-food", priority: 0.8, changeFrequency: "monthly" },
    { path: "/case-studies/mana-tours", priority: 0.8, changeFrequency: "monthly" },

    // Company, Review & Contact
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.85, changeFrequency: "weekly" },
    { path: "/review", priority: 0.75, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

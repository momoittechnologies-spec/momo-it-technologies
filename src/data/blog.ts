export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Local Business Tech" | "QA & Automation" | "AI & Innovation" | "Web Development";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost-in-kadapa",
    title: "How Much Does a Business Website Cost in Kadapa? (2026 Transparent Pricing Guide)",
    excerpt:
      "A complete, transparent guide to website design and web application development costs in Kadapa. Learn what you actually get for ₹10k, ₹25k, or ₹50k+, hidden hosting fees, and why ₹2,999 template websites fail.",
    category: "Web Development",
    readTime: "7 min read",
    publishedAt: "September 2026",
    author: {
      name: "Engineering Team",
      role: "Lead Software Architects, MOMO IT Technologies",
    },
    keywords: [
      "website cost in kadapa",
      "how much does a website cost in kadapa",
      "website design price kadapa",
      "web development charges kadapa",
    ],
  },
  {
    slug: "automation-testing-career-roadmap-kadapa",
    title: "Automation Testing Career Roadmap in Kadapa: From Zero to 12 LPA SDET",
    excerpt:
      "The definitive career roadmap for B.Tech, MCA, and degree graduates in Kadapa and Rayalaseema looking to break into high-paying QA Automation and SDET engineering roles at top MNCs.",
    category: "QA & Automation",
    readTime: "9 min read",
    publishedAt: "September 2026",
    author: {
      name: "MOMO Academy Faculty",
      role: "Senior SDET & Framework Architects",
    },
    keywords: [
      "automation testing career roadmap kadapa",
      "selenium training roadmap kadapa",
      "how to become sdet from kadapa",
      "qa automation salary kadapa",
    ],
  },
  {
    slug: "how-kadapa-businesses-can-use-ai-automation",
    title: "How Local Kadapa Businesses Can Use AI Automation to Cut Costs & Boost Revenue",
    excerpt:
      "Practical, hype-free ways local retail shops, restaurants, distributors, and clinics in Kadapa can leverage AI: automated WhatsApp order bots, instant billing parsing, and escaping 30% aggregator cuts.",
    category: "AI & Innovation",
    readTime: "8 min read",
    publishedAt: "September 2026",
    author: {
      name: "AI Solutions Pod",
      role: "AI Engineers, MOMO IT Technologies",
    },
    keywords: [
      "ai automation for businesses in kadapa",
      "local business ai tools kadapa",
      "whatsapp automation kadapa",
      "ai billing software kadapa",
    ],
  },
  {
    slug: "best-software-development-solutions-for-businesses-in-kadapa",
    title: "Best Custom Software & ERP Solutions for Businesses in Kadapa (Excel vs Custom Software)",
    excerpt:
      "Why growing retail and wholesale businesses in Kadapa outgrow Excel spreadsheets and rigid accounting packages. How custom cloud software, offline POS, and thermal printing scale operations.",
    category: "Local Business Tech",
    readTime: "8 min read",
    publishedAt: "September 2026",
    author: {
      name: "Business Systems Team",
      role: "Enterprise Solutions, MOMO IT Technologies",
    },
    keywords: [
      "software development solutions for businesses in kadapa",
      "custom erp software kadapa",
      "pos billing software kadapa",
      "business software development kadapa",
    ],
  },
];

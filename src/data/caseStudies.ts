export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  industry: string;
  url?: string;
  rating?: string;
  ratingSource?: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  highlights: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "momope",
    slug: "momope",
    title: "MOMOPE — Digital Payments & Guaranteed Rewards Ecosystem",
    subtitle: "Connecting customers, merchants, and local businesses through seamless digital payments and instant rewards.",
    client: "MomoPe Fintech",
    category: "Fintech & Digital Payments",
    industry: "Financial Services & Local Commerce",
    url: "https://www.momope.com",
    rating: "Production",
    ratingSource: "Fintech Engine",
    description:
      "MOMOPE is a modern financial technology platform engineered by MOMO IT TECHNOLOGIES. Designed to revolutionize how local merchants and customers transact, MOMOPE combines friction-free digital payments with guaranteed rewards, boosting repeat sales for merchants while giving customers tangible cashback value on everyday transactions.",
    challenge:
      "Local businesses in tier-2 and tier-3 cities often pay high processing fees on payment platforms while getting zero customer retention mechanics. Traditional reward systems are overly complex, requiring loyalty cards or apps that customers rarely reuse.",
    solution:
      "We engineered a high-concurrency payment and merchant billing architecture. MOMOPE offers instant payment verification, a merchant POS portal, and an automated rule-based rewards engine that credits instant rewards upon payment completion.",
    results: [
      "Zero-latency transaction verification and receipt delivery",
      "Unified merchant dashboard for daily settlement and customer metrics",
      "Guaranteed automated rewards distribution without friction",
      "Bank-grade security protocols with encrypted payload verification",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "UPI / Payment Gateways", "Cloudflare"],
    highlights: [
      { label: "Core Model", value: "Payments + Rewards" },
      { label: "Merchant Segment", value: "Retail & Local SMBs" },
      { label: "Architecture", value: "High-Concurrency" },
      { label: "Security Level", value: "Bank-Grade Encryption" },
    ],
    features: [
      "Instant Payment & UPI Reconciliation",
      "Guaranteed Automated Customer Rewards Engine",
      "Merchant Real-Time Settlement Dashboard",
      "Multi-store Business Accounts & Staff Access",
      "Detailed Transaction History & Exportable Reports",
      "Mobile-Optimized PWA for On-the-Go Payments",
    ],
  },
  {
    id: "mana-tours",
    slug: "mana-tours",
    title: "MANA Tours & Travels — Smart Booking & Fleet Management",
    subtitle: "Kadapa's #1 premier travel, self-drive, and pilgrimage transportation platform with 24/7 AI voice quotes.",
    client: "MANA Tours & Travels Kadapa",
    category: "Mobility & Travel ERP",
    industry: "Transportation & Tourism",
    url: "https://www.manatoursandtravels.com",
    rating: "5.0 ★",
    ratingSource: "50+ Google Reviews",
    description:
      "MANA Tours & Travels is Kadapa's premier transportation network operating across Andhra Pradesh, Rayalaseema, and South India. MOMO IT TECHNOLOGIES built their complete modern digital platform—featuring interactive vehicle fleet booking, self-drive rentals from ₹1,499/day, pilgrimage package itineraries, and an innovative 24/7 AI Voice Enquiry Assistant.",
    challenge:
      "MANA Tours was managing bookings through informal phone calls and fragmented WhatsApp messages. Customers lacked upfront pricing visibility for intercity drops (Bangalore/Hyderabad airports, Tirupati darshans), and dispatchers struggled with vehicle scheduling.",
    solution:
      "We built a full-stack Next.js web application with a rich booking engine, dynamic pricing calculator, WhatsApp API integration, and an embedded AI Voice Agent that gives instant voice quotes in English and Telugu.",
    results: [
      "5.0★ Google Rating backed by 50+ authentic passenger reviews",
      "Sub-second page load times with Next.js Turbopack & Tailwind CSS",
      "Over 40% increase in direct WhatsApp automated bookings",
      "Top organic ranking on Google for Kadapa cab services & pilgrimage tours",
    ],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "AI Voice Agent", "Structured JSON-LD", "WhatsApp Business API"],
    highlights: [
      { label: "Google Rating", value: "5.0 ★ Verified" },
      { label: "Fleet Services", value: "9+ Categories" },
      { label: "AI Integration", value: "24/7 Voice Assistant" },
      { label: "Self-Drive Starting", value: "₹1,499 / day" },
    ],
    features: [
      "Interactive WhatsApp Booking Engine with Live Quoting",
      "24/7 Embedded AI Voice Booking Assistant",
      "Self-Drive Car Rental Portal with Pricing Tiers",
      "Specialized Pilgrimage Packages (Tirupati, Srisailam, Ahobilam)",
      "Fixed-Fare Airport Transfer Scheduling (BLR / HYD / MAA)",
      "Automated WhatsApp Driver Dispatching & Confirmation",
    ],
  },
];

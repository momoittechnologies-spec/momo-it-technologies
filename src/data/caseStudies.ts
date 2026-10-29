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
    id: "as-refrigerations",
    slug: "as-refrigerations",
    title: "AS REFRIGERATIONS — Multi-City Appliance Service & Dispatch Platform",
    subtitle: "Dual-hub field operations platform across Kadapa Flagship HQ & Bangalore East Hub with 0% gateway commission NPCI UPI QR billing.",
    client: "AS REFRIGERATIONS (Kadapa & Bengaluru)",
    category: "Home Services & Field Ops Tech",
    industry: "Appliance Servicing & Field Logistics",
    url: "https://asrefrigerations.com",
    rating: "5.0 ★",
    ratingSource: "Verified Client Deployment",
    description:
      "AS REFRIGERATIONS is a premier multi-city appliance repair and HVAC servicing enterprise operating across Kadapa (Flagship HQ) and Bangalore East (Branch Hub). MOMO IT TECHNOLOGIES engineered their complete digital ecosystem—including a multi-city customer booking engine, zero-commission dynamic NPCI UPI QR payments, Urban Company-grade mobile app shells (Customer & Technician), and Sameer-First Priority 1 automated job dispatch.",
    challenge:
      "Managing cross-city field technicians across 19 Kadapa municipal wards and 25 Bangalore localities was hindered by third-party aggregator commissions (20-30%), recurring SMS OTP costs, and manual job dispatch via phone calls.",
    solution:
      "We architected a high-performance, mobile-first platform using React 19, Vite, TypeScript, and Tailwind CSS v4 with Capacitor native app shells. The system features a 2-step doorstep pricing workflow with ₹0 advance deposit, dynamic on-the-fly NPCI UPI QR code generation eliminating gateway cuts, a zero-SMS 4-digit PIN authentication model, and automated 5-star Google Review funnels via ReviewSmart AI.",
    results: [
      "0% payment gateway fees via on-the-fly NPCI UPI QR generation directly into client account",
      "Multi-city dual branch switching covering 19 Kadapa wards & 25 Bangalore localities",
      "Zero-SMS recurring authentication costs with secure 4-digit PIN verification",
      "Urban Company-style dual mobile app shells for customers and field technicians",
      "Automated 5-star Google review funnel with ReviewSmart AI integration",
    ],
    techStack: ["React 19", "Vite", "TypeScript", "Tailwind CSS v4", "Capacitor Mobile", "NPCI UPI Engine", "Firestore"],
    highlights: [
      { label: "Client Status", value: "Fully Delivered & Live" },
      { label: "Coverage", value: "Kadapa & Bangalore" },
      { label: "Payment Model", value: "0% Commission NPCI UPI" },
      { label: "App Architecture", value: "Customer & Partner Shells" },
    ],
    features: [
      "Multi-City Dual Branch Selector (Kadapa 19 Wards & Bangalore 25 Localities)",
      "Two-Step Doorstep Pricing Workflow with ₹0 Advance Booking",
      "Dynamic NPCI UPI QR Code Generation for 0% Gateway Commissions",
      "Sameer-First Priority 1 Audio Dispatch & Overflow Technician Routing",
      "Zero-SMS 4-Digit Local Storage PIN Authentication",
      "Urban Company UX Dual Native App Shells (Customer Stepper & Partner GPS Navigation)",
      "Automated 5-Star ReviewSmart AI Google Review Gateway",
    ],
  },
  {
    id: "mana-tours",
    slug: "mana-tours",
    title: "MANA Tours & Travels — Mobility & Fleet Booking",
    subtitle: "Kadapa's travel and transportation platform for local cabs, outstation drops, and pilgrimage tours.",
    client: "MANA Tours & Travels Kadapa",
    category: "Mobility & Transport",
    industry: "Travel & Fleet Logistics",
    url: "https://www.manatoursandtravels.com",
    rating: "5.0 ★",
    ratingSource: "Verified Google Rating",
    description:
      "MANA Tours & Travels is a Kadapa-based transportation and cab service operating across Rayalaseema and South India. MOMO IT TECHNOLOGIES built their web booking portal—enabling online taxi bookings, pilgrimage packages (Tirupati, Srisailam, Ahobilam), outstation cab rentals, and WhatsApp booking confirmations.",
    challenge:
      "Managing cab reservations across outstation routes and airport transfers required a fast, straightforward web interface with upfront pricing visibility.",
    solution:
      "We developed a lightweight, mobile-first booking portal with interactive fleet selection, route estimation, and instant WhatsApp booking dispatch.",
    results: [
      "5.0★ Google Rating backed by 50+ passenger reviews",
      "Direct automated WhatsApp booking flow",
      "High local search visibility for Kadapa travel services",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "WhatsApp API", "JSON-LD"],
    highlights: [
      { label: "Google Rating", value: "5.0 ★ (Kadapa)" },
      { label: "Service Area", value: "Rayalaseema & South India" },
      { label: "Booking Mode", value: "Instant WhatsApp Flow" },
    ],
    features: [
      "Local Cab & Airport Transfer Scheduling",
      "Outstation Taxi & Round-Trip Booking",
      "Pilgrimage Itineraries (Tirupati, Srisailam, Ahobilam)",
      "Self-Drive Car Rentals & Corporate Travel",
      "Instant WhatsApp Driver & Fare Confirmation",
    ],
  },
];

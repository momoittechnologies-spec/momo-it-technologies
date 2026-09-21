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
    id: "vijayas-yummy-food",
    slug: "vijayas-yummy-food",
    title: "Vijaya's Yummy Food — Direct Food Ordering & Cloud Kitchen PWA",
    subtitle: "Authentic Rayalaseema & Biryani digital ordering platform in Kadugodi, Bengaluru with real-time Supabase checkout.",
    client: "Vijaya's Yummy Food (Bengaluru)",
    category: "FoodTech & Cloud Kitchen",
    industry: "Food & Beverage / Quick Commerce",
    url: "https://vijayasyummyfood.com",
    rating: "Active Client",
    ratingSource: "Ongoing Project",
    description:
      "Vijaya's Yummy Food is an ongoing client project developed by MOMO IT TECHNOLOGIES. It is an online food ordering web app and Progressive Web App (PWA) serving authentic Rayalaseema meals, Biryani, and starters in Kadugodi, Bengaluru. The platform allows customers to place direct orders without commission-heavy third-party aggregators, with instant delivery verification and real-time backend updates.",
    challenge:
      "Cloud kitchens face 25-35% commission cuts on food aggregator platforms, losing customer relationships and profitability. Vijaya's Yummy Food needed an independent, high-speed ordering platform with direct WhatsApp/SMS order notifications and real-time menu management.",
    solution:
      "We engineered a modern, ultra-fast web application using Next.js 15, React 19, Supabase Realtime database, and Firebase. The app includes delivery radius verification (within 5 km), a dynamic cart and checkout pipeline, and a mobile installable PWA for seamless customer re-orders.",
    results: [
      "Zero commission direct customer ordering channel",
      "Instant checkout pipeline with real-time database sync via Supabase",
      "Installable Progressive Web App (PWA) with push notification support",
      "Sub-second page speeds and mobile-optimized ordering experience",
    ],
    techStack: ["Next.js 15", "React 19", "Supabase", "Firebase", "Tailwind CSS", "PWA"],
    highlights: [
      { label: "Client Project", value: "Ongoing Deployment" },
      { label: "Location", value: "Kadugodi, Bengaluru" },
      { label: "Architecture", value: "Next.js 15 + Supabase" },
      { label: "Mobile Experience", value: "Installable PWA" },
    ],
    features: [
      "Interactive Digital Menu Catalog with Category Filtering",
      "Direct Cart & Realtime Checkout Engine",
      "Automatic Delivery Radius Verification (5 km Delivery Zone)",
      "Progressive Web App (PWA) Install Prompt on Mobile",
      "Direct Order Dispatch & WhatsApp Alerts",
      "Supabase Secure Cloud Database Management",
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

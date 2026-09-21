import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";


export const metadata: Metadata = {
  title: "MOMO IT TECHNOLOGIES — Software Training & Development Company | Kadapa",
  description:
    "Kadapa's premier 4.8★ rated software training institute and software development company. Specializing in Automation Testing (Selenium/Playwright), Java Full-Stack, Custom Web Apps, and Dedicated Engineering Pods. Builders of Vijaya's Yummy Food and Mana Tours & Travels.",
  keywords: [
    "MOMO IT Technologies",
    "Software training institute in Kadapa",
    "Automation testing course Kadapa",
    "Java training in Kadapa",
    "Vijaya's Yummy Food",
    "Mana Tours and Travels Kadapa",
    "Software development company Kadapa",
    "QA automation services India",
    "Hire dedicated QA testers",
  ],
  authors: [{ name: "MOMO IT TECHNOLOGIES" }],
  openGraph: {
    title: "MOMO IT TECHNOLOGIES — Software Training & IT Services",
    description:
      "Kadapa's premier 4.8★ rated software institute and technology partner. Engineering web apps and training job-ready software engineers.",
    url: "https://momoittechnologies.com",
    siteName: "MOMO IT TECHNOLOGIES",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EducationalOrganization", "ProfessionalService"],
        "@id": "https://momoittechnologies.com/#organization",
        name: "MOMO IT TECHNOLOGIES",
        alternateName: [
          "MOMO IT Technologies Kadapa",
          "Momo Technologies",
          "MOMO Academy",
        ],
        description:
          "Software training institute in Kadapa, Andhra Pradesh, and provider of end-to-end software development, QA testing, and staff augmentation services.",
        telephone: "+91-86398-31132",
        url: "https://momoittechnologies.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4/106, Road, Krishnapuram",
          addressLocality: "Kadapa",
          addressRegion: "Andhra Pradesh",
          postalCode: "516005",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "14.4673",
          longitude: "78.8242",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "16",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: ["https://maps.google.com"],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}

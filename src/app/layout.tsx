import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import MobileStickyBar from "@/components/common/MobileStickyBar";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.momoittechnologies.com"),
  title: {
    default: "MOMO IT Technologies | IT Company & Software Development in Kadapa",
    template: "%s | MOMO IT Technologies",
  },
  description:
    "MOMO IT Technologies is a premier software company in Kadapa offering custom web & SaaS development, mobile apps, enterprise ERPs, QA automation, and specialized tech talent development.",
  keywords: [
    "software companies in kadapa",
    "software company in kadapa",
    "top software companies in kadapa",
    "best software company in kadapa",
    "best it development in kadapa",
    "custom software development services in kadapa",
    "it companies in kadapa",
    "it company in kadapa",
    "best it company in kadapa",
    "software development company in kadapa",
    "software development companies in kadapa",
    "web development company in kadapa",
    "best web design company in kadapa",
    "custom software development in kadapa",
    "mobile app development company in kadapa",
    "qa automation company in kadapa",
    "software testing company in kadapa",
    "business software in kadapa",
    "erp software development in kadapa",
    "saas development in kadapa",
    "it training institute in kadapa",
    "software training institute in kadapa",
  ],
  authors: [{ name: "MOMO IT TECHNOLOGIES" }],
  alternates: {
    canonical: "https://www.momoittechnologies.com",
    types: {
      "application/rss+xml": "https://www.momoittechnologies.com/feed.xml",
    },
  },
  openGraph: {
    title: "MOMO IT Technologies | IT Company & Software Development in Kadapa",
    description:
      "MOMO IT Technologies is a premier software company in Kadapa offering custom web & SaaS development, mobile apps, enterprise ERPs, QA automation, and specialized tech talent development.",
    url: "https://www.momoittechnologies.com",
    siteName: "MOMO IT TECHNOLOGIES",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MOMO IT Technologies - Software Engineering & Digital Solutions in Kadapa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOMO IT TECHNOLOGIES — Custom Software, Web & SaaS Engineering in Kadapa",
    description:
      "Kadapa's premier 5.0★ rated software company and technology partner. Engineering scalable Web & SaaS products, mobile apps, and enterprise software systems.",
    images: ["/og-image.png"],
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
  verification: {
    google: "zSKsUmLnGimWASbVAcLLVB6lX2ZBClJuMqlCe_2JxMY",
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
        "@type": ["Organization", "Corporation", "ProfessionalService", "LocalBusiness"],
        "@id": "https://www.momoittechnologies.com/#organization",
        name: "MOMO IT TECHNOLOGIES",
        legalName: "MOMO IT TECHNOLOGIES",
        description:
          "Premier software company and technology partner based in Kadapa, Andhra Pradesh, engineering scalable Web & SaaS applications, Flutter mobile apps, enterprise ERPs, QA automation, and AI business solutions.",
        telephone: "+91-86398-31132",
        url: "https://www.momoittechnologies.com",
        email: "momoit.technologies@gmail.com",
        logo: "https://www.momoittechnologies.com/logo.svg",
        image: "https://www.momoittechnologies.com/og-image.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4/106, Chowdeswari Temple Lane, Krishnapuram",
          addressLocality: "Kadapa",
          addressRegion: "Andhra Pradesh",
          postalCode: "516003",
          addressCountry: "IN",
        },
        foundingDate: "2025-06-01",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "14.4713",
          longitude: "78.8237",
        },
        hasMap: "https://share.google/ar7YZvarRrJtzXq70",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
        priceRange: "₹₹",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-86398-31132",
          contactType: "customer service",
          areaServed: ["IN"],
          availableLanguage: ["en", "te"],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "2",
          bestRating: "5",
          worstRating: "1",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Kadapa" },
          { "@type": "State", name: "Andhra Pradesh" },
          { "@type": "Country", name: "India" },
        ],
        knowsAbout: [
          "Custom Software Development",
          "Web Application Development",
          "SaaS Engineering",
          "QA Automation & Testing",
          "Flutter Mobile App Development",
          "Enterprise ERP & Billing Software",
          "AI Business Automation",
          "Local SEO & Digital Marketing",
        ],
        sameAs: [
          "https://share.google/ar7YZvarRrJtzXq70",
          "https://www.reviewsmart.online/r/momo-it-technologies",
          "https://www.linkedin.com/company/momo-it-technologies",
          "https://www.instagram.com/momoit.technologies/",
          "https://github.com/momoittechnologies-spec",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/#service-web-development",
        name: "Custom Web & SaaS Product Development",
        serviceType: "Web Development",
        provider: {
          "@id": "https://www.momoittechnologies.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        description:
          "Production-grade Web Applications, scalable multi-tenant SaaS platforms, and modern frontends built with Next.js 15, React 19, and Spring Boot 3.",
      },
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/#service-software-development",
        name: "Custom Software & Business ERP Systems",
        serviceType: "Software Development",
        provider: {
          "@id": "https://www.momoittechnologies.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        description:
          "Bespoke enterprise software, POS billing engines, thermal printing integration, inventory management, and business process automation.",
      },
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/#service-qa-automation",
        name: "QA Automation & Software Testing",
        serviceType: "Software Testing",
        provider: {
          "@id": "https://www.momoittechnologies.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        description:
          "Enterprise test automation frameworks using Selenium WebDriver 4, Playwright, TestNG, Cucumber BDD, and CI/CD quality engineering.",
      },
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/#service-ai-solutions",
        name: "AI Solutions & Business Automation",
        serviceType: "Artificial Intelligence Development",
        provider: {
          "@id": "https://www.momoittechnologies.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        description:
          "Autonomous agentic workflows, WhatsApp business AI bots, enterprise RAG search systems, and predictive operations automation.",
      },
      {
        "@type": "Service",
        "@id": "https://www.momoittechnologies.com/#service-mobile-apps",
        name: "Cross-Platform Mobile App Development",
        serviceType: "Mobile Application Development",
        provider: {
          "@id": "https://www.momoittechnologies.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        description:
          "High-performance native iOS and Android mobile apps engineered from a single clean Dart codebase using Google Flutter and Firebase.",
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
        <main className="flex-grow pb-16 md:pb-0">{children}</main>
        <WhatsAppFloat />
        <MobileStickyBar />
        <Footer />
      </body>
    </html>
  );
}

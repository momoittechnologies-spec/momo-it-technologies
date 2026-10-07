import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";


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
      "Kadapa's premier 4.8★ rated software company and technology partner. Engineering scalable Web & SaaS products, mobile apps, and enterprise software systems.",
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
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.momoittechnologies.com/#organization",
        name: "MOMO IT TECHNOLOGIES",
        description:
          "Leading software company in Kadapa, Andhra Pradesh specializing in Web & SaaS product engineering, Flutter mobile apps, custom business ERPs, QA automation, and tech talent incubation.",
        telephone: "+91-86398-31132",
        url: "https://www.momoittechnologies.com",
        email: "momoit.technologies@gmail.com",
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
        hasMap: "https://maps.google.com/?q=MOMO+IT+TECHNOLOGIES+Kadapa",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-86398-31132",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "te"],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "16",
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
        priceRange: "₹₹",
        sameAs: [
          "https://www.instagram.com/momoit.technologies/",
          "https://www.linkedin.com/company/momo-it-technologies",
          "https://www.linkedin.com/jobs/view/4470198185/",
          "https://github.com/momoittechnologies-spec",
          "https://maps.google.com/?q=MOMO+IT+TECHNOLOGIES+Kadapa",
        ],
      },
      {
        "@type": "Course",
        name: "Mastering Automation Testing with Java & Selenium",
        description:
          "Kadapa's premier test automation program. Master Core Java, Selenium WebDriver 4, TestNG, Cucumber BDD, and CI/CD with guaranteed course completion certificate and client project internship.",
        provider: {
          "@type": "Organization",
          name: "MOMO Academy — MOMO IT Technologies",
          sameAs: "https://momoittechnologies.com",
        },
        timeRequired: "P12W",
        educationalCredentialAwarded: "Verified Course Completion Certificate",
        occupationalCredentialAwarded: "QA Automation Engineer Internship Experience",
      },
      {
        "@type": "Course",
        name: "Full-Stack Software Development (Java + Spring Boot 3 + React 19)",
        description:
          "End-to-end commercial web and enterprise application engineering with React 19, Next.js, Spring Boot 3, and PostgreSQL.",
        provider: {
          "@type": "Organization",
          name: "MOMO Academy — MOMO IT Technologies",
          sameAs: "https://momoittechnologies.com",
        },
        timeRequired: "P16W",
        educationalCredentialAwarded: "Verified Course Completion Certificate",
      },
      {
        "@type": "Course",
        name: "Cross-Platform Mobile App Development (Flutter & React Native for Android & iOS)",
        description:
          "Single-codebase mobile application engineering with Dart, Flutter, Supabase, Firebase, and publishing to Google Play and Apple App Store.",
        provider: {
          "@type": "Organization",
          name: "MOMO Academy — MOMO IT Technologies",
          sameAs: "https://momoittechnologies.com",
        },
        timeRequired: "P10W",
        educationalCredentialAwarded: "Verified Course Completion Certificate",
      },
      {
        "@type": "Course",
        name: "Advanced Digital Marketing & AI Growth Masterclass",
        description:
          "Tailored for Kadapa business owners, freelancers, and marketers. Master Google Ads, Meta Ads, Local SEO, and Generative AI marketing funnels.",
        provider: {
          "@type": "Organization",
          name: "MOMO Academy — MOMO IT Technologies",
          sameAs: "https://momoittechnologies.com",
        },
        timeRequired: "P8W",
        educationalCredentialAwarded: "Verified Course Completion Certificate",
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

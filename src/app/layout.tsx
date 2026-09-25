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
    "MOMO IT Technologies is a Kadapa-based IT company offering web & SaaS development, mobile apps, AI solutions, QA automation, software testing and industry-focused IT training.",
  keywords: [
    "IT company in Kadapa",
    "Software company in Kadapa",
    "Software development company in Kadapa",
    "Web development company in Kadapa",
    "SaaS development company in Kadapa",
    "Custom software development in Kadapa",
    "Mobile app development company in Kadapa",
    "AI development company in Kadapa",
    "QA automation company in Kadapa",
    "Software testing company in Kadapa",
    "IT training institute in Kadapa",
    "Java training institute in Kadapa",
    "Selenium training institute in Kadapa",
    "Full stack development training in Kadapa",
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
      "MOMO IT Technologies is a Kadapa-based IT company offering web & SaaS development, mobile apps, AI solutions, QA automation, software testing and industry-focused IT training.",
    url: "https://www.momoittechnologies.com",
    siteName: "MOMO IT TECHNOLOGIES",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MOMO IT Technologies - Web & SaaS Engineering and IT Academy Kadapa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOMO IT TECHNOLOGIES — Web & SaaS Products & Premier IT Academy",
    description:
      "Kadapa's premier 4.8★ rated software company and technology partner. Engineering scalable Web & SaaS products and training job-ready software engineers.",
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
        "@type": ["LocalBusiness", "EducationalOrganization", "ProfessionalService"],
        "@id": "https://www.momoittechnologies.com/#organization",
        name: "MOMO IT TECHNOLOGIES",
        description:
          "Leading software company in Kadapa, Andhra Pradesh specializing in Web & SaaS product engineering, Flutter mobile apps, QA automation, and IT career education with verified certificates and internships.",
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

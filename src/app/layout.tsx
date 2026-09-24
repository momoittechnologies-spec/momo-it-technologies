import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";


export const metadata: Metadata = {
  metadataBase: new URL("https://momoittechnologies.com"),
  title: "MOMO IT TECHNOLOGIES — Web & SaaS Product Engineering & Premier IT Academy | Kadapa",
  description:
    "Kadapa's leading 4.8★ rated software company and technical academy. Specialized in Web & SaaS Product Engineering (Next.js, Spring Boot, Supabase), Flutter Mobile Apps, QA Automation Testing, and career training with verified certificates & real-world client internships.",
  keywords: [
    "MOMO IT Technologies",
    "Web development company Kadapa",
    "SaaS product development company India",
    "Software training institute in Kadapa",
    "Automation testing course Kadapa",
    "Java training in Kadapa",
    "Mobile app development Flutter Kadapa",
    "Digital marketing masterclass Kadapa",
    "Software company Kadapa",
    "QA automation services India",
    "Enterprise AI Solutions Kadapa",
  ],
  authors: [{ name: "MOMO IT TECHNOLOGIES" }],
  openGraph: {
    title: "MOMO IT TECHNOLOGIES — Web & SaaS Products & Premier IT Academy",
    description:
      "Kadapa's premier 4.8★ rated software company and technology partner. Engineering scalable Web & SaaS products and training job-ready software engineers.",
    url: "https://momoittechnologies.com",
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
          "Leading software company in Kadapa, Andhra Pradesh specializing in Web & SaaS product engineering, Flutter mobile apps, QA automation, and IT career education with verified certificates and internships.",
        telephone: "+91-86398-31132",
        url: "https://momoittechnologies.com",
        email: "momoit.technologies@gmail.com",
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
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        priceRange: "₹₹",
        sameAs: ["https://maps.google.com"],
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

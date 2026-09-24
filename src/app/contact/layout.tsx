import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MOMO IT Technologies | Software & IT Training in Kadapa",
  description:
    "Get in touch with MOMO IT Technologies in Kadapa. Visit our campus at 4/106, Chowdeswari Temple Lane, Krishnapuram, Kadapa, AP — 516003 or connect via WhatsApp (+91 86398 31132) for software development and academy training.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/contact",
  },
  openGraph: {
    title: "Contact MOMO IT Technologies | Kadapa Office & Campus",
    description:
      "Reach out to MOMO IT Technologies for custom software development, QA automation, web applications, or IT career training in Kadapa, Andhra Pradesh.",
    url: "https://www.momoittechnologies.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.momoittechnologies.com/contact#webpage",
        "url": "https://www.momoittechnologies.com/contact",
        "name": "Contact MOMO IT Technologies",
        "description": "Contact desk and office location for MOMO IT Technologies in Kadapa, Andhra Pradesh.",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "MOMO IT TECHNOLOGIES",
          "telephone": "+918639831132",
          "email": "momoit.technologies@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4/106, Chowdeswari Temple Lane, Krishnapuram",
            "addressLocality": "Kadapa",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "516003",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.4673,
            "longitude": 78.8242
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "20:00"
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

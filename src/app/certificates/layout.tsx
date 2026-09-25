import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Verified Certificates & Internship Credentials | MOMO IT Academy Kadapa",
  description:
    "Verify official MOMO IT Academy course completion certificates and live client project internship experience letters (MSME Registered: UDYAM-AP-04-0013231) in Kadapa, Andhra Pradesh.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/certificates",
  },
  openGraph: {
    title: "Official Verified Certificates & Internship Credentials | MOMO IT Academy",
    description:
      "Every graduate from MOMO IT Academy Kadapa receives a Verified Course Completion Certificate and a Commercial Live Project Internship Experience Letter recognized for MNC background verification.",
    url: "https://www.momoittechnologies.com/certificates",
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOccupationalCredential",
        "@id": "https://www.momoittechnologies.com/certificates#credential",
        name: "MOMO IT Academy Verified Course Completion & Internship Credential",
        description:
          "Official government-registered MSME (UDYAM-AP-04-0013231) software engineering and QA automation training credential and internship experience certificate.",
        credentialCategory: "Certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "MOMO IT TECHNOLOGIES",
          url: "https://www.momoittechnologies.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.momoittechnologies.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "MOMO Academy",
            item: "https://www.momoittechnologies.com/academy",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Verified Certificates",
            item: "https://www.momoittechnologies.com/certificates",
          },
        ],
      },
    ],
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

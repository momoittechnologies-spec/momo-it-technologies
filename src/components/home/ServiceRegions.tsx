import React from "react";
import Link from "next/link";
import { MapPin, Globe, Building2, ArrowRight } from "lucide-react";

const regions = [
  {
    name: "Kadapa (Corporate HQ & Engineering Lab)",
    badge: "Physical Office",
    desc: "Our permanent software office and learning campus located at 4/106, Chowdeswari Temple Lane, Krishnapuram. Walk-ins and client consultations welcome.",
    link: "/kadapa",
    linkText: "Visit Kadapa Office Page",
  },
  {
    name: "Tirupati & Rayalaseema Regional Corridor",
    badge: "Regional Coverage",
    desc: "Providing dedicated enterprise software development, digital marketing, and automated booking systems for businesses across Rayalaseema.",
    link: "/services/software-development",
    linkText: "Explore Regional Services",
  },
  {
    name: "Hyderabad & Bengaluru Technology Hubs",
    badge: "Cloud & Remote Delivery",
    desc: "Delivering high-concurrency cloud microservices, SaaS platforms, and QA automation outsourcing pods for startups and tech enterprises.",
    link: "/services/web-development",
    linkText: "Explore SaaS & Web Architecture",
  },
  {
    name: "Pan-India & International Clients",
    badge: "Nationwide & Overseas",
    desc: "Serving clients across India, UAE, and the US with agile sprint delivery, modern Next.js 15 frontends, and automated CI/CD releases.",
    link: "/case-studies",
    linkText: "View Production Case Studies",
  },
];

export default function ServiceRegions() {
  return (
    <section className="py-20 bg-surface-light border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Geographic Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mt-3">
            Where MOMO IT Technologies Operates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Headquartered in Kadapa, engineering high-impact digital systems for growing businesses across Andhra Pradesh, South India, and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regions.map((reg, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    {reg.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">{reg.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">{reg.desc}</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={reg.link}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1.5"
                >
                  <span>{reg.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

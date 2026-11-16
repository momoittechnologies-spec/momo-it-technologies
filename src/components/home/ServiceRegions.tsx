import React from "react";
import Link from "next/link";
import { MapPin, Globe, Building2, ArrowRight, Sparkles } from "lucide-react";

const regions = [
  {
    name: "Kadapa (Corporate HQ & Engineering Lab)",
    badge: "Physical Headquarters",
    desc: "Our permanent software office and learning campus located at 4/106, Chowdeswari Temple Lane, Krishnapuram. Walk-ins and client technical consultations welcome.",
    link: "/kadapa",
    linkText: "Visit Kadapa Office Page",
  },
  {
    name: "Tirupati & Rayalaseema Regional Corridor",
    badge: "Regional Coverage",
    desc: "Providing dedicated enterprise software development, digital systems, and automated booking portals for businesses across the Rayalaseema industrial zone.",
    link: "/services/software-development",
    linkText: "Explore Regional Services",
  },
  {
    name: "Bengaluru & Hyderabad Technology Hubs",
    badge: "Cloud & Remote Delivery",
    desc: "Delivering high-concurrency cloud microservices, SaaS platforms, and automated QA testing frameworks for startups and tech enterprises.",
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
    <section className="py-20 lg:py-28 bg-slate-50/60 border-t border-gray-200/60 bg-cyber-grid">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Geographic Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Where MOMO IT Technologies Operates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Headquartered in Kadapa, engineering high-impact digital systems for growing businesses across Andhra Pradesh, South India, and international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
          {regions.map((reg, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/80 shadow-3d-card card-3d-lift flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 text-blue-700 flex items-center justify-center border border-blue-200/60 shadow-xs group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-gray-700 border border-gray-200">
                    {reg.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-navy-950 mb-2 group-hover:text-electric transition-colors">
                  {reg.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">{reg.desc}</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={reg.link}
                  className="text-xs font-bold text-navy-950 hover:text-electric inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{reg.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

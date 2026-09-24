import React from "react";
import Link from "next/link";
import {
  MapPin,
  Star,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Us — Our Story & Mission | MOMO IT Technologies",
  description:
    "Learn about MOMO IT Technologies: Kadapa's premier software institute evolving into a global technology services and software development company.",
};

export default function AboutPage() {
  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Our Journey &amp; Ethos
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
            Building World-Class Technology from Kadapa, Andhra Pradesh
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            MOMO IT TECHNOLOGIES started with a simple belief: world-class software engineering and premier tech education shouldn&apos;t be restricted to metro cities.
          </p>
        </div>

        {/* The Story */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-extrabold text-navy-950">
            From Local Training Excellence to Full-Scale Technology Partner
          </h2>
          <p>
            Originally established as a local software training institute in Krishnapuram, Kadapa, MOMO IT Technologies quickly gained a stellar reputation (earning a <strong>4.8★ rating on Google</strong>) for hands-on, career-focused mentoring in Automation Testing, Java, and Software Quality Assurance.
          </p>
          <p>
            Recognizing that our students needed real commercial exposure—and local and regional businesses needed honest, reliable engineering—we expanded our operations into a dedicated <strong>Software Development and IT Services division</strong>.
          </p>
          <p>
            Today, under MOMO IT Technologies, we have engineered and launched landmark products including:
          </p>
          <ul className="space-y-2 pl-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-1" />
              <span>
                <strong>Vijaya&apos;s Yummy Food:</strong> An online food ordering web app and installable PWA with real-time checkout built for a Bengaluru cloud kitchen.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-1" />
              <span>
                <strong>MANA TOURS &amp; TRAVELS (www.manatoursandtravels.com):</strong> Kadapa&apos;s 5.0★ premier travel, cab service, and self-drive platform featuring 24/7 AI Voice assistance.
              </span>
            </li>
          </ul>
          <p>
            Operating remotely from a village base gives us an unfair advantage: near-zero metro overhead, fierce dedication, and deep, distraction-free technical focus.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To empower businesses across India and globally with reliable, bug-free software applications while providing aspiring engineers with practical, code-first career training.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center font-bold mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-2">The Flywheel</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Practical education fuels our in-house engineering team with top 5% talent. In turn, real client projects provide our learners with genuine commercial experience.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
          >
            <span>Partner with MOMO IT Technologies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

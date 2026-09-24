import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Sparkles,
  Calendar,
  User,
  Search,
  CheckCircle2,
  Building2,
  GraduationCap,
} from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Engineering Blog & Local Tech Insights | MOMO IT Technologies Kadapa",
  description:
    "Practical tech guides, software development pricing, and IT career roadmaps from Kadapa's premier engineering team and academy at MOMO IT Technologies.",
  alternates: {
    canonical: "https://www.momoittechnologies.com/blog",
  },
  openGraph: {
    title: "Engineering Blog & Local Tech Insights | MOMO IT Technologies Kadapa",
    description:
      "Explore transparent guides on website costs in Kadapa, QA automation career paths, and practical AI automation for Rayalaseema enterprises.",
    url: "https://www.momoittechnologies.com/blog",
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.momoittechnologies.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog & Tech Guides",
            "item": "https://www.momoittechnologies.com/blog"
          }
        ]
      },
      {
        "@type": "Blog",
        "@id": "https://www.momoittechnologies.com/blog#blog",
        "name": "MOMO IT Technologies Knowledge Hub",
        "description": "Practical guides on software engineering, website development, local business automation, and IT career training in Kadapa.",
        "url": "https://www.momoittechnologies.com/blog",
        "publisher": {
          "@type": "LocalBusiness",
          "name": "MOMO IT TECHNOLOGIES",
          "url": "https://www.momoittechnologies.com"
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

      <div className="pt-32 sm:pt-36 pb-20 bg-surface-light min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-semibold" aria-current="page">
                Blog &amp; Knowledge Hub
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-card mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-50 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Kadapa Knowledge Hub &amp; Engineering Guides
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mb-4">
              Insights on Software, Local Business Tech &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-600">
                IT Careers in Kadapa
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              No generic fluff or AI-generated filler. We write genuine, transparent breakdowns on website pricing, custom business software, QA automation career roadmaps, and practical AI tools for Kadapa businesses and students.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">
              Browse Topics:
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-navy-950 text-white text-xs font-bold shadow-xs">
              All Articles
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-xs font-semibold hover:border-brand-500 transition-colors">
              Web Development
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-xs font-semibold hover:border-brand-500 transition-colors">
              QA &amp; Automation
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-xs font-semibold hover:border-brand-500 transition-colors">
              AI &amp; Innovation
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-gray-700 text-xs font-semibold hover:border-brand-500 transition-colors">
              Local Business Tech
            </span>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {blogPosts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-card hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 group-hover:text-brand-600 transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-800 font-black text-xs flex items-center justify-center">
                      M
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-950">{post.author.name}</div>
                      <div className="text-[11px] text-gray-400">{post.publishedAt}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:text-brand-700 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Dual CTA Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-brand-600 to-navy-950 text-white rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-2">For Business Owners</div>
                <h3 className="text-xl font-extrabold mb-2">Need a Custom Website or Business Software in Kadapa?</h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-6">
                  Get a transparent, fixed-price quote and architectural plan from our Kadapa engineering team. Zero hidden fees.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-navy-950 font-bold text-xs hover:bg-gray-100 transition-colors"
              >
                <span>Request Custom Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">For Students &amp; Graduates</div>
                <h3 className="text-xl font-extrabold mb-2">Ready to Start a 6–12 LPA Software Career from Kadapa?</h3>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-6">
                  Join MOMO Academy for 100% practical lab training in Automation Testing, Java, or Full-Stack with guaranteed live project internships.
                </p>
              </div>
              <Link
                href="/academy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-950 font-bold text-xs hover:bg-gray-100 transition-colors"
              >
                <span>Explore Academy Programs</span>
                <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

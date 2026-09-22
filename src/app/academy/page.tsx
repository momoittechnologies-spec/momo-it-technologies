import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Star,
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  MapPin,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Users,
  ShieldCheck,
  Zap,
  FileText,
  Download,
  Briefcase,
} from "lucide-react";
import { coursesData } from "@/data/courses";
import MasterclassBanner from "@/components/home/MasterclassBanner";
import FreeResourcesUnlock from "@/components/academy/FreeResourcesUnlock";
import CourseCurriculumAccordion from "@/components/academy/CourseCurriculumAccordion";

export const metadata = {
  title: "MOMO Academy — Best IT Training & Live Project Internships in Kadapa",
  description:
    "Master Selenium Automation Testing, Full-Stack Development, Flutter Mobile Apps, and Digital Marketing with MOMO Academy Kadapa. 4.8★ Google Rated. Verified certificates & guaranteed live internships.",
};

export default function AcademyPage() {
  const whatsappEnroll = (courseName: string) => {
    return `https://wa.me/918639831132?text=${encodeURIComponent(
      `Hello MOMO Academy, I would like to enroll / inquire about the course: "${courseName}". Please share batch timings and early bird discount details.`
    )}`;
  };

  const whatsappNotesInquiry = (courseName: string) => {
    return `https://wa.me/918639831132?text=${encodeURIComponent(
      `Hello MOMO Academy, I would like to get the Digital Notes & Self-Study Kit for "${courseName}". Please share access and details.`
    )}`;
  };

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academy Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-200">
            <GraduationCap className="w-4 h-4 text-brand-700" />
            MOMO ACADEMY — KADAPA
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-tight mb-6">
            Become an Industry-Ready Engineer with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700">
              100% Practical IT Training.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Rated 4.8★ on Google. We don&apos;t just teach textbook theory—we build live enterprise automation frameworks and full-stack applications with you step by step.
          </p>

          {/* Key Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-gray-700">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              4.8★ Google Rating in Kadapa
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
              <Video className="w-4 h-4 text-brand-600" />
              Live Interactive Google Meet Batches
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
              <MapPin className="w-4 h-4 text-brand-600" />
              Offline Classroom Labs in Krishnapuram
            </span>
          </div>
        </div>

        {/* Urgent Saturday Masterclass Banner */}
        <MasterclassBanner />

        {/* Free Promised Career Resources Section (Gated on WhatsApp Registration) */}
        <FreeResourcesUnlock />

        {/* The Course Catalog */}
        <div id="courses" className="space-y-12 my-20">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              Featured Course Curriculum
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              Designed by senior developers and test automation leads to match current MNC hiring standards.
            </p>
          </div>

          <div className="space-y-8">
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-gray-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {course.badge && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 border border-brand-200">
                          {course.badge}
                        </span>
                      )}
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                        {course.level}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                        Duration: {course.duration}
                      </span>
                      {course.certificateIncluded && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                          <Award className="w-3 h-3 text-emerald-600" />
                          <span>Verified Certificate</span>
                        </span>
                      )}
                      {course.internshipAvailable && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1">
                          <Briefcase className="w-3 h-3 text-purple-600" />
                          <span>Internship Included</span>
                        </span>
                      )}
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        Special Early Bird Fee Offer
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
                      {course.title}
                    </h3>
                    <p className="text-sm text-brand-700 font-semibold mt-1">
                      {course.tagline}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
                    <a
                      href={whatsappEnroll(course.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <span>Join Live Batch</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    {course.notesHtml && (
                      <a
                        href={course.notesHtml}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition-all"
                        title="View printable handbook and interview notes"
                      >
                        <BookOpen className="w-4 h-4 text-brand-600" />
                        <span>Digital Notes &amp; PDF</span>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed my-6">
                  {course.overview}
                </p>

                {/* Guaranteed Certification & Real Internship Perks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 mb-5 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-white to-purple-50/80 border border-gray-200/80 text-xs">
                  <div className="flex items-center gap-2 text-emerald-950 font-bold">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <span>Course Completion Certificate with Verified Credential ID</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-950 font-bold">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span>Guaranteed Hands-on Internship on Live Client Projects</span>
                  </div>
                </div>

                {/* Digital Notes & Self-Study Option Callout */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 mb-6 rounded-2xl bg-sky-50/70 border border-sky-200/80 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sky-950 text-sm">Self-Study Option: Digital Notes &amp; Interview Handbook Available</div>
                      <p className="text-sky-800 mt-0.5">
                        Can&apos;t attend scheduled batches? Learn at your own pace with our comprehensive handbook, MNC interview Q&amp;As, and code blueprints.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                    {course.notesHtml && (
                      <a
                        href={course.notesHtml}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-sky-300 text-sky-900 font-bold hover:bg-sky-50 transition-all shadow-sm"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-brand-600" />
                        <span>Read Online / PDF</span>
                      </a>
                    )}
                    <a
                      href={whatsappNotesInquiry(course.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-600 text-white font-bold hover:bg-sky-700 transition-all shadow-sm"
                    >
                      <span>Request Kit on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {course.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Curriculum Modules Accordion */}
                <CourseCurriculumAccordion curriculum={course.curriculum} />
              </div>
            ))}
          </div>
        </div>

        {/* Hybrid Training Details */}
        <div
          id="hybrid"
          className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl mb-16"
        >
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
              Flexible Learning Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Learn from Anywhere via Google Meet or Join Offline in Kadapa
            </h2>
            <p className="text-sm text-gray-300 mt-3">
              We eliminate geographic barriers. Students from across Andhra Pradesh, Telangana, and outside can attend live sessions online with complete 1-on-1 doubt resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Live Online via Google Meet
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Interactive real-time coding sessions with screen sharing, recorded classes for revision, and direct WhatsApp group doubt clearing.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                  HD screen sharing &amp; live coding exercises
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                  Class recordings provided after each session
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 border border-navy-800">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                In-Person Lab in Kadapa
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Hands-on practical lab at our Krishnapuram institute. Sit face-to-face with instructors, debug code in real time, and collaborate with peers.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  Address: 4/106, Krishnapuram, Kadapa, AP 516005
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  Daily in-person mentoring &amp; mock interviews
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Student Brand Ambassador & Client Referral Network */}
        <div className="my-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-brand-950 via-navy-950 to-slate-900 border border-brand-500/20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4 text-amber-400" />
              MOMO Student Brand Ambassador &amp; Client Referral Program
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Earn While You Learn.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-brand-400 to-teal-300">
                Become a MOMO Brand Ambassador.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              Our students are our greatest brand advocates. Every business in your network—from local retail shops, clinics, hospitals, coaching centers, to startups—needs custom software, mobile apps, or high-ROI digital marketing. Connect them with MOMO Tech Services and unlock exclusive perks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-amber-400 mb-1">10%</div>
                <div className="text-sm font-bold text-white mb-2">Direct Cash Referral Commission</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Earn 10% commission on the total contract value of any signed web, SaaS, mobile, or marketing project.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-brand-400 mb-1">Live</div>
                <div className="text-sm font-bold text-white mb-2">Real Client Project Shadowing</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Gain first-hand insight into commercial client delivery, architecture reviews, and production sprints.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-teal-400 mb-1">Dual</div>
                <div className="text-sm font-bold text-white mb-2">Fast-Track Internship &amp; Hiring</div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Top-performing ambassadors receive direct consideration for paid junior developer &amp; QA roles at MOMO IT.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/918639831132?text=Hi%20MOMO%20Team%2C%20I%20want%20to%20know%20more%20about%20the%20Student%20Ambassador%20%26%20Client%20Referral%20Program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-navy-950 font-bold text-xs sm:text-sm shadow-lg transition-all"
              >
                <span>Join Ambassador Network on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:momoit.technologies@gmail.com?subject=MOMO%20Client%20Referral%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
              >
                <span>Email Referral Lead</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

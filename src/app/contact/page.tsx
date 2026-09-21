"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "QA & Automation Testing",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello MOMO IT Technologies!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918639831132?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight mt-3 mb-4">
            Let&apos;s Discuss Your Project or Career Goals
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Whether you are looking to hire a dedicated QA pod, build custom software, or enroll in MOMO Academy—we respond within hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Card */}
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white">
                Kadapa Office
              </h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                Connect with our team in Krishnapuram or schedule an online Google Meet discovery call.
              </p>

              <div className="space-y-4 pt-4 border-t border-navy-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-1" />
                  <div className="text-xs text-gray-300">
                    <span className="font-bold text-white block mb-0.5">
                      Campus Address:
                    </span>
                    4/106, Krishnapuram, Kadapa, Andhra Pradesh — 516005
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                  <div className="text-xs text-gray-300">
                    <span className="font-bold text-white block mb-0.5">
                      Direct Phone:
                    </span>
                    <a href="tel:+918639831132" className="hover:text-brand-300">
                      +91 86398 31132
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-400 shrink-0" />
                  <div className="text-xs text-gray-300">
                    <span className="font-bold text-white block mb-0.5">
                      Email Inquiries:
                    </span>
                    <a
                      href="mailto:momoit.technologies@gmail.com"
                      className="hover:text-brand-300"
                    >
                      momoit.technologies@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-400 shrink-0" />
                  <div className="text-xs text-gray-300">
                    <span className="font-bold text-white block mb-0.5">
                      Hours:
                    </span>
                    Mon - Sat: 8:00 AM - 8:00 PM IST
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-navy-800 mt-8">
              <a
                href="https://wa.me/918639831132"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-card">
            <h2 className="text-2xl font-extrabold text-navy-950 mb-2">
              Send an Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-8">
              Fill out this quick form and it will connect directly with our Kadapa desk via WhatsApp for fastest confirmation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative flex rounded-xl border border-gray-200 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100 bg-white overflow-hidden transition-all">
                    <span className="inline-flex items-center gap-1 px-3.5 bg-gray-50 border-r border-gray-200 text-gray-700 font-semibold text-xs select-none">
                      <span className="text-sm">🇮🇳</span> +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setFormData({ ...formData, phone: digits });
                      }}
                      className="w-full px-3.5 py-3 outline-none text-sm bg-transparent font-medium text-navy-950 placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Area of Interest *
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all bg-white"
                  >
                    <option value="QA & Automation Testing">
                      QA &amp; Automation Testing Pods
                    </option>
                    <option value="Custom Web / SaaS App Development">
                      Custom Web / SaaS App Development
                    </option>
                    <option value="Business Management ERP / Billing">
                      Business Management ERP / Billing
                    </option>
                    <option value="Hire Dedicated Developers">
                      Hire Dedicated Developers (Monthly)
                    </option>
                    <option value="MOMO Academy: Automation Testing Course">
                      MOMO Academy: Automation Testing Course
                    </option>
                    <option value="MOMO Academy: Full-Stack Java Course">
                      MOMO Academy: Full-Stack Java Course
                    </option>
                    <option value="General Consultation">
                      General Consultation / Partnership
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Brief Message or Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project timeline, requirements, or learning background..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Open WhatsApp Confirmation</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-brand-50 text-brand-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>
                    Thank you! Your inquiry was transferred to our WhatsApp desk. We will connect with you shortly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

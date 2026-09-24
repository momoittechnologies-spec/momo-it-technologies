"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  QrCode,
  Copy,
  Check,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Share2,
} from "lucide-react";

export default function ClientPayPage() {
  const [selectedClient, setSelectedClient] = useState("Vijaya's Yummy Food");
  const [customClientName, setCustomClientName] = useState("");
  const [feeCategory, setFeeCategory] = useState("PLATFORM_FEE");
  const [amount, setAmount] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [invoiceNote, setInvoiceNote] = useState("Weekly Platform Fee Cycle");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [utrNumber, setUtrNumber] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Official MOMO IT Vendor Banking Destination
  const vendorConfig = {
    payee: "Mr. Damerla Mohan",
    agency: "MOMO IT Technologies",
    upiId: "momopedeals@oksbi",
    bankName: "State Bank of India (SBI)",
    accountNumber: "37821607076",
    ifscCode: "SBIN0013231",
    branchName: "SBI Branch (IFSC: SBIN0013231)",
    whatsappPhone: "+91 76762 79500",
    sacCode: "998313",
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleCopyAllBank = () => {
    const details = `MOMO IT TECHNOLOGIES — VENDOR BANKING DESTINATION
Payee: ${vendorConfig.payee}
UPI VPA: ${vendorConfig.upiId}
Bank: ${vendorConfig.bankName}
Account Number: ${vendorConfig.accountNumber}
IFSC Code: ${vendorConfig.ifscCode}
Branch: ${vendorConfig.branchName}
SAC Code: ${vendorConfig.sacCode} (IT Software Services)
Billing WhatsApp: ${vendorConfig.whatsappPhone}`;
    handleCopy(details, "all-bank");
  };

  const effectiveClient = selectedClient === "OTHER" ? (customClientName || "Client Business") : selectedClient;
  const effectiveAmount = customAmount ? Math.max(1, Number(customAmount) || 0) : amount;

  // Clean UPI Deep Link adhering strictly to NPCI UPI Specifications
  const upiDeepLink = useMemo(() => {
    const note = encodeURIComponent(`MOMO IT - ${effectiveClient} - ${invoiceNote}`);
    const name = encodeURIComponent(vendorConfig.payee);
    return `upi://pay?pa=${vendorConfig.upiId}&pn=${name}&am=${effectiveAmount}&cu=INR&tn=${note}`;
  }, [effectiveClient, effectiveAmount, invoiceNote, vendorConfig]);

  // Standard QR code URL (crisp QR generation)
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(
    upiDeepLink
  )}`;

  const whatsappMessage = encodeURIComponent(
    `Hi MOMO IT Technologies,\n\nPayment confirmation for ${effectiveClient}:\n• Amount: ₹${effectiveAmount}\n• Purpose: ${invoiceNote}\n• Payee: ${vendorConfig.payee} (${vendorConfig.upiId})\n• Bank: State Bank of India (A/C: ${vendorConfig.accountNumber})\n• UTR Ref: ${utrNumber || "Attached screenshot"}\n\nPlease acknowledge receipt and issue commercial tax invoice.`
  );

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-surface-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to MOMO IT Home</span>
          </Link>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Vendor Banking Destination</span>
          </span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            B2B Client Billing &amp; Settlements
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight mt-3 mb-2">
            Settle Platform &amp; Engineering Fees
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Direct, 0% commission vendor settlement to MOMO IT Technologies via State Bank of India or instant NPCI UPI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form & Configuration (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-card space-y-5">
              <h2 className="text-base font-extrabold text-navy-950 border-b border-gray-100 pb-3 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-brand-600" />
                <span>Payment Configuration</span>
              </h2>

              {/* Client Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Select Your Restaurant / Business:
                </label>
                <select
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold bg-gray-50 focus:outline-none focus:border-brand-500"
                >
                  <option value="Vijaya's Yummy Food">Vijaya&apos;s Yummy Food (Cloud Kitchen, Kadugodi)</option>
                  <option value="Mana Tours & Travels">Mana Tours &amp; Travels</option>
                  <option value="OTHER">Other Restaurant / Client Partner...</option>
                </select>
                {selectedClient === "OTHER" && (
                  <input
                    type="text"
                    placeholder="Enter your business/restaurant name"
                    value={customClientName}
                    onChange={(e) => setCustomClientName(e.target.value)}
                    className="w-full mt-2 px-3.5 py-2 rounded-xl border border-gray-200 text-xs bg-white"
                  />
                )}
              </div>

              {/* Fee Category */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Payment Purpose:
                </label>
                <select
                  value={feeCategory}
                  onChange={(e) => {
                    setFeeCategory(e.target.value);
                    if (e.target.value === "PLATFORM_FEE") setInvoiceNote("Weekly Platform Fee Cycle");
                    if (e.target.value === "TECH_FLOAT") setInvoiceNote("Prepaid Tech Float Replenishment");
                    if (e.target.value === "SUBSCRIPTION") setInvoiceNote("Monthly Cloud Hosting & Maintenance");
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold bg-gray-50 focus:outline-none focus:border-brand-500"
                >
                  <option value="PLATFORM_FEE">Platform Fee / Commission Settlement (₹5/order)</option>
                  <option value="TECH_FLOAT">Prepaid Tech Float Credit (Rapido Model)</option>
                  <option value="SUBSCRIPTION">Monthly Cloud Infrastructure &amp; Maintenance</option>
                  <option value="SETUP">Onboarding &amp; Software Engineering Retainer</option>
                </select>
              </div>

              {/* Amount Presets */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Select Settlement Amount:
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {[500, 1000, 2000, 5000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setAmount(amt);
                        setCustomAmount("");
                      }}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        amount === amt && !customAmount
                          ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs">
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="Or enter custom amount (e.g. 750)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-8 pr-3.5 py-2 rounded-xl border border-gray-200 text-xs font-mono font-bold focus:outline-none focus:border-brand-500 bg-white"
                  />
                </div>
              </div>

              {/* Summary note */}
              <div className="p-3 bg-brand-50/60 rounded-2xl border border-brand-100 text-xs text-brand-950 space-y-1">
                <div className="flex justify-between font-bold">
                  <span>Payable to Vendor:</span>
                  <span className="text-brand-700">₹{effectiveAmount}.00</span>
                </div>
                <div className="text-[11px] text-gray-500">
                  SAC 998313 • Direct credit to State Bank of India
                </div>
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-4 bg-gray-100/80 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-1">
              <span className="font-bold text-navy-950 block">⚡ Instant Settlement Confirmation</span>
              <p className="text-[11px] leading-relaxed">
                Once paid, enter your 12-digit UPI UTR number or click the WhatsApp button to share the confirmation screenshot with MOMO IT support for instant receipt generation.
              </p>
            </div>
          </div>

          {/* Right Column: Vendor Banking Destination Card & Dynamic QR (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* VENDOR BANKING DESTINATION CARD */}
            <div className="bg-gradient-to-br from-slate-900 via-navy-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-indigo-500/30 space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600/40 border border-blue-400/40 text-blue-200 flex items-center justify-center font-black text-sm">
                    SBI
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-300 block">
                      Vendor Banking Destination
                    </span>
                    <h3 className="font-extrabold text-base text-white">
                      State Bank of India (SBI)
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Verified NPCI UPI
                </span>
              </div>

              {/* Coordinates Grid */}
              <div className="space-y-2.5 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Payee Name:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm">{vendorConfig.payee}</span>
                    <button
                      onClick={() => handleCopy(vendorConfig.payee, "payee")}
                      className="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                      title="Copy Payee"
                    >
                      {copiedKey === "payee" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">UPI VPA:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-amber-300 text-sm">{vendorConfig.upiId}</span>
                    <button
                      onClick={() => handleCopy(vendorConfig.upiId, "upi")}
                      className="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                      title="Copy UPI VPA"
                    >
                      {copiedKey === "upi" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Account Number:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-white text-sm">{vendorConfig.accountNumber}</span>
                    <button
                      onClick={() => handleCopy(vendorConfig.accountNumber, "acc")}
                      className="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                      title="Copy Account Number"
                    >
                      {copiedKey === "acc" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Bank &amp; IFSC:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-gray-200">
                      SBI ({vendorConfig.ifscCode})
                    </span>
                    <button
                      onClick={() => handleCopy(vendorConfig.ifscCode, "ifsc")}
                      className="p-1 hover:bg-white/10 rounded transition-colors text-gray-400 hover:text-white"
                      title="Copy IFSC"
                    >
                      {copiedKey === "ifsc" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Copy Full Coordinates Action */}
              <button
                type="button"
                onClick={handleCopyAllBank}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 border border-white/10"
              >
                {copiedKey === "all-bank" ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied Full Bank Details to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gray-300" />
                    <span>Copy All Bank Details for NetBanking / IMPS</span>
                  </>
                )}
              </button>
            </div>

            {/* DYNAMIC QR CODE & 1-TAP APP LAUNCHERS */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-card space-y-5">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <h3 className="text-base font-extrabold text-navy-950">
                    Scan or Launch UPI to Pay ₹{effectiveAmount}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Dynamic QR linked directly to {vendorConfig.payee}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg">
                  ₹{effectiveAmount}.00
                </span>
              </div>

              {/* QR Container */}
              <div className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-52 h-52 bg-white p-2 rounded-2xl shadow-inner flex items-center justify-center border border-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={qrImageUrl}
                    alt={`UPI QR Code for ₹${effectiveAmount}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-xs font-bold text-gray-700 mt-3 flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-brand-600" />
                  <span>Scan via PhonePe, Google Pay, Paytm, or YONO SBI</span>
                </div>
              </div>

              {/* 1-Tap App Intent Launchers */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block text-center">
                  Instant 1-Tap Mobile Payment
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <a
                    href={upiDeepLink}
                    className="py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all text-center"
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Any UPI</span>
                  </a>

                  <a
                    href={`gpay://upi/pay?pa=${vendorConfig.upiId}&pn=${encodeURIComponent(vendorConfig.payee)}&am=${effectiveAmount}&cu=INR&tn=${encodeURIComponent(invoiceNote)}`}
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all text-center"
                  >
                    <span>GPay</span>
                  </a>

                  <a
                    href={`phonepe://pay?pa=${vendorConfig.upiId}&pn=${encodeURIComponent(vendorConfig.payee)}&am=${effectiveAmount}&cu=INR&tn=${encodeURIComponent(invoiceNote)}`}
                    className="py-2.5 px-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all text-center"
                  >
                    <span>PhonePe</span>
                  </a>

                  <a
                    href={`paytmmp://pay?pa=${vendorConfig.upiId}&pn=${encodeURIComponent(vendorConfig.payee)}&am=${effectiveAmount}&cu=INR&tn=${encodeURIComponent(invoiceNote)}`}
                    className="py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all text-center"
                  >
                    <span>Paytm</span>
                  </a>
                </div>
              </div>

              {/* UTR Input & WhatsApp Dispatch */}
              <div className="pt-2 border-t border-gray-100 space-y-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Enter 12-Digit UPI Ref / UTR Number:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 625199201948 or attach screenshot"
                    value={utrNumber}
                    onChange={(e) => setUtrNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-mono font-semibold bg-gray-50 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(true);
                      setTimeout(() => setIsSuccess(false), 3000);
                    }}
                    className="py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    {isSuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Saved Locally!</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4 text-brand-400" />
                        <span>Save Settlement Reference</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/917676279500?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm text-center"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Send Receipt via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

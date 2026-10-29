"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, Play, CheckCircle2 } from "lucide-react";

export default function HeroCodeTerminal() {
  const [activeTab, setActiveTab] = useState<"fieldOps" | "qa" | "mobility">("fieldOps");
  const [copied, setCopied] = useState(false);

  const snippets = {
    fieldOps: {
      file: "DynamicUpiQr.ts",
      lang: "typescript",
      code: `// AS REFRIGERATIONS — Zero-Commission NPCI Dynamic UPI Engine
export function generateDoorstepUpiQr(invoice: Invoice, merchantVpa: string) {
  const payload = \`upi://pay?pa=\${merchantVpa}&pn=AS+REFRIGERATIONS&am=\${invoice.total}&cu=INR\`;
  return generateQrSvg(payload);
}`,
      badge: "Field Ops & UPI Logic",
    },
    qa: {
      file: "SeleniumTest.java",
      lang: "java",
      code: `@Test(priority = 1)
public void testDoorstepBookingFlow() {
    WebDriver driver = new ChromeDriver();
    ServicePortal portal = new ServicePortal(driver);
    
    // 1. Select AC Deep Jet Servicing in Kadapa
    portal.selectService("AC Jet Cleaning", "Kadapa-Urban");
    
    // 2. Automated Ward & Local Pin Verification
    boolean inRadius = portal.verifyWard("516001");
    Assert.assertTrue(inRadius, "Location verified in 19 Kadapa wards");
    
    // 3. Automated Assertion for 0% Commission UPI Flow
    portal.proceedToBooking("+91 86398 31132");
    Assert.assertEquals(portal.getStatus(), "CONFIRMED");
    System.out.println("✓ 100% Automated QA Test Passed in 1.1s");
}`,
      badge: "Automation Test Suite",
    },
    mobility: {
      file: "FleetDispatcher.tsx",
      lang: "tsx",
      code: `export async function dispatchManaToursTrip(bookingId: string) {
  const trip = await db.trips.findUnique({ where: { id: bookingId } });
  
  // 1. Direct WhatsApp Dispatch to Driver & Passenger
  await sendWhatsAppAlert({
    driverPhone: trip.driver.phone,
    passengerPhone: trip.customer.phone,
    route: \`\${trip.origin} → \${trip.destination}\`,
    fare: trip.totalAmount
  });
  
  return { status: "DISPATCHED", etaMinutes: 15 };
}`,
      badge: "Mobility Dispatch Logic",
    },
  };

  const current = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-navy-800 bg-navy-950/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Mac-like Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-navy-900/90 border-b border-navy-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-gray-400 font-mono ml-2 font-medium">
            {current.file}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
            {current.badge}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-navy-800 transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-brand-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-navy-800 bg-navy-950/60 px-2 pt-2 gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab("fieldOps")}
          className={`flex items-center gap-2 px-3 py-2 rounded-t-lg text-xs font-medium transition-all ${
            activeTab === "fieldOps"
              ? "bg-navy-900 text-brand-400 border-t-2 border-brand-500 shadow"
              : "text-gray-400 hover:text-gray-200 hover:bg-navy-900/40"
          }`}
        >
          <Play className="w-3 h-3" />
          AS Refrigeration UPI
        </button>

        <button
          onClick={() => setActiveTab("qa")}
          className={`flex items-center gap-2 px-3 py-2 rounded-t-lg text-xs font-medium transition-all ${
            activeTab === "qa"
              ? "bg-navy-900 text-brand-400 border-t-2 border-brand-500 shadow"
              : "text-gray-400 hover:text-gray-200 hover:bg-navy-900/40"
          }`}
        >
          <Terminal className="w-3 h-3" />
          Selenium QA Suite
        </button>

        <button
          onClick={() => setActiveTab("mobility")}
          className={`flex items-center gap-2 px-3 py-2 rounded-t-lg text-xs font-medium transition-all ${
            activeTab === "mobility"
              ? "bg-navy-900 text-brand-400 border-t-2 border-brand-500 shadow"
              : "text-gray-400 hover:text-gray-200 hover:bg-navy-900/40"
          }`}
        >
          <Play className="w-3 h-3" />
          Mana Tours Mobility
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 overflow-x-auto font-mono text-[11px] sm:text-xs leading-relaxed text-gray-200">
        <pre className="text-gray-300">
          <code>{current.code}</code>
        </pre>
      </div>

      {/* Status Bar */}
      <div className="px-4 py-2 bg-navy-900/80 border-t border-navy-800 text-[11px] text-gray-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
          <span>Status: Verified Production Code</span>
        </div>
        <div className="text-[10px] text-gray-500">MOMO IT TECHNOLOGIES</div>
      </div>
    </div>
  );
}

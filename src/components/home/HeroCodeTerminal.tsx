"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, Play, CheckCircle2 } from "lucide-react";

export default function HeroCodeTerminal() {
  const [activeTab, setActiveTab] = useState<"food" | "qa" | "mobility">("food");
  const [copied, setCopied] = useState(false);

  const snippets = {
    food: {
      file: "OrderCheckout.ts",
      lang: "typescript",
      code: `// Vijaya's Yummy Food — Realtime Supabase Order Pipeline
export async function createDirectOrder(cart: CartItem[], customer: Customer) {
  const { data: order, error } = await supabase
    .from('orders')
    .insert({
      customer_phone: customer.phone,
      delivery_address: customer.address,
      items: cart,
      status: 'RECEIVED',
      commission_saved: calculateSavings(cart)
    })
    .select()
    .single();

  // Instant WhatsApp Notification to Kitchen Dispatch
  await notifyKitchenDispatch(order.id);
  return { success: true, orderId: order.id };
}`,
      badge: "FoodTech PWA Logic",
    },
    qa: {
      file: "SeleniumTest.java",
      lang: "java",
      code: `@Test(priority = 1)
public void testFoodOrderCheckoutFlow() {
    WebDriver driver = new ChromeDriver();
    OrderPortal portal = new OrderPortal(driver);
    
    // 1. Select Authentic Rayalaseema Biryani
    portal.addToCart("Rayalaseema Chicken Biryani", 2);
    
    // 2. Automated Delivery Radius Verification
    boolean inRadius = portal.verifyDeliveryZone("560067");
    Assert.assertTrue(inRadius, "Delivery location verified within 5km");
    
    // 3. Automated Assertion for 0% Flakiness
    portal.proceedToCheckout("+91 86398 31132");
    Assert.assertEquals(portal.getOrderStatus(), "RECEIVED");
    System.out.println("✓ 100% Automated QA Test Passed in 1.2s");
}`,
      badge: "Automation Test Suite",
    },
    mobility: {
      file: "FleetDispatcher.tsx",
      lang: "tsx",
      code: `export async function dispatchManaToursTrip(bookingId: string) {
  const trip = await db.trips.findUnique({ where: { id: bookingId } });
  
  // Trigger WhatsApp dispatch confirmation
  await dispatchWhatsAppNotification({
    passengerPhone: trip.customerPhone,
    pickupLocation: trip.pickupArea, // Kadapa Seven Roads
    destination: "Tirupati Sacred Darshan",
    driverAssigned: "Pavan (+91 99083 00718)"
  });
  
  return { status: "DISPATCHED", eta: "12 mins" };
}`,
      badge: "Mana Tours Mobility Engine",
    },
  };

  const current = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-navy-950/95 border border-navy-700/80 shadow-2xl shadow-navy-950/50 backdrop-blur-xl overflow-hidden text-left text-xs font-mono">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-navy-900/90 border-b border-navy-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-gray-400 text-[11px] font-medium hidden sm:inline">
            momo-engineering-lab ~/production
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-brand-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/20">
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
          onClick={() => setActiveTab("food")}
          className={`flex items-center gap-2 px-3 py-2 rounded-t-lg text-xs font-medium transition-all ${
            activeTab === "food"
              ? "bg-navy-900 text-brand-400 border-t-2 border-brand-500 shadow"
              : "text-gray-400 hover:text-gray-200 hover:bg-navy-900/40"
          }`}
        >
          <Play className="w-3 h-3" />
          Vijaya&apos;s Food Order
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

"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, Play, CheckCircle2 } from "lucide-react";

export default function HeroCodeTerminal() {
  const [activeTab, setActiveTab] = useState<"test" | "fintech" | "mobility">("test");
  const [copied, setCopied] = useState(false);

  const snippets = {
    test: {
      file: "SeleniumTest.java",
      lang: "java",
      code: `@Test(priority = 1)
public void testMomoPePaymentFlow() {
    WebDriver driver = new ChromeDriver();
    MomoPePortal portal = new MomoPePortal(driver);
    
    // 1. Authenticate Merchant Account
    portal.login("merchant@kadapa.in", "Auth@2026");
    
    // 2. Trigger Instant UPI Settlement
    Transaction tx = portal.initiatePayment("₹1,499.00");
    
    // 3. Automated Assertion for 0% Flakiness
    Assert.assertEquals(tx.getStatus(), "SUCCESS");
    Assert.assertTrue(portal.isGuaranteedRewardCredited());
    System.out.println("✓ 100% Automated Test Passed in 1.4s");
}`,
      badge: "Automation Test Suite",
    },
    fintech: {
      file: "RewardEngine.java",
      lang: "java",
      code: `@Service
public class MomoPeRewardService {
    @Transactional
    public RewardResult creditInstantCashback(PaymentTx tx) {
        // High-concurrency wallet ledger update
        Wallet wallet = walletRepository.findByUserId(tx.getUserId());
        BigDecimal reward = calculateGuaranteedReward(tx.getAmount());
        
        wallet.credit(reward);
        notificationService.sendWhatsAppAlert(tx.getMobile(), reward);
        
        return new RewardResult(tx.getId(), Status.SETTLED, reward);
    }
}`,
      badge: "MomoPe Production Logic",
    },
    mobility: {
      file: "FleetDispatcher.tsx",
      lang: "tsx",
      code: `export async function dispatchManaToursTrip(bookingId: string) {
  const trip = await db.trips.findUnique({ where: { id: bookingId } });
  
  // Trigger 24/7 AI Voice Dispatch confirmation
  await aiVoiceAgent.dispatchCall({
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
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-navy-900/90 border-b border-navy-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-2 text-[11px] font-sans font-medium text-gray-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-brand-400" />
            momo-it-technologies / {current.file}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 font-bold border border-brand-500/30 hidden sm:inline-block">
            {current.badge}
          </span>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white transition-colors"
            title="Copy Code"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-brand-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex border-b border-navy-800/80 bg-navy-950/80 px-2 pt-1 gap-1">
        <button
          onClick={() => setActiveTab("test")}
          className={`px-3 py-1.5 rounded-t-lg text-[11px] font-sans font-semibold transition-colors flex items-center gap-1.5 ${
            activeTab === "test"
              ? "bg-navy-900 text-brand-400 border-t-2 border-brand-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          <Play className="w-3 h-3" />
          Automation Test (Java)
        </button>

        <button
          onClick={() => setActiveTab("fintech")}
          className={`px-3 py-1.5 rounded-t-lg text-[11px] font-sans font-semibold transition-colors flex items-center gap-1.5 ${
            activeTab === "fintech"
              ? "bg-navy-900 text-brand-400 border-t-2 border-brand-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          MomoPe Backend (Java)
        </button>

        <button
          onClick={() => setActiveTab("mobility")}
          className={`px-3 py-1.5 rounded-t-lg text-[11px] font-sans font-semibold transition-colors flex items-center gap-1.5 ${
            activeTab === "mobility"
              ? "bg-navy-900 text-brand-400 border-t-2 border-brand-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Mana Tours (Next.js)
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 overflow-x-auto text-gray-300 leading-relaxed max-h-[300px]">
        <pre className="text-[11px] sm:text-xs font-mono">
          <code>{current.code}</code>
        </pre>
      </div>

      {/* Live execution status footer */}
      <div className="px-4 py-2 bg-navy-900/60 border-t border-navy-800/80 flex items-center justify-between text-[10px] text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          <span className="text-gray-300">Continuous CI/CD: Ready for Deployment</span>
        </div>
        <span className="text-brand-400 font-bold">100% Practical Engineering</span>
      </div>
    </div>
  );
}

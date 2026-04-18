"use client"

import Link from "next/link"

const tiers = [
  { qty: "1–4", label: "Single", discount: "Base price", highlight: false },
  { qty: "5–9", label: "Starter", discount: "Save 5%", highlight: false },
  { qty: "10–24", label: "Small batch", discount: "Save 10%", highlight: true },
  { qty: "25–49", label: "Mid-run", discount: "Save 15%", highlight: false },
  { qty: "50+", label: "Production", discount: "Save 20%", highlight: false },
]

export function BulkPricingBanner() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-block px-3 py-1 rounded-full border border-red-600/40 bg-red-600/10 text-red-400 text-xs uppercase tracking-widest">
            Volume pricing
          </span>
          <h2 className="text-3xl md:text-4xl text-white font-bold">More units, better price</h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm">
            Ordering more? Discounts apply automatically at checkout. No codes needed.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {tiers.map((tier) => (
            <div
              key={tier.qty}
              className={`rounded-xl p-4 text-center border transition-all ${
                tier.highlight
                  ? "border-red-500 bg-red-600/15 scale-105"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <p className={`text-2xl font-bold ${tier.highlight ? "text-red-400" : "text-white"}`}>
                {tier.qty}
              </p>
              <p className="text-white/50 text-xs mt-1">{tier.label}</p>
              <p className={`text-sm font-semibold mt-2 ${tier.highlight ? "text-red-300" : "text-white/80"}`}>
                {tier.discount}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { icon: "🕐", label: "Turnaround", time: "3–5 business days", note: "After order confirmed" },
            { icon: "⚡", label: "Express", time: "Contact us", note: "Rush orders on request" },
            { icon: "📦", label: "Shipping", time: "Island-wide delivery", note: "Sri Lanka only currently" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-white">{item.label}</p>
                <p className="text-red-400 text-sm">{item.time}</p>
                <p className="text-white/45 text-xs">{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/shop" className="inline-flex px-7 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors">
            Shop now
          </Link>
        </div>
      </div>
    </section>
  )
}

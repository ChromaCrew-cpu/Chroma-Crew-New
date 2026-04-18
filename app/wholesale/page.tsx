"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"

const tiers = [
  { range: "10–49 pcs", discount: "12% off retail film", note: "Same artwork repeat OK" },
  { range: "50–99 pcs", discount: "18% off retail film", note: "Mix sizes, one design" },
  { range: "100+ pcs", discount: "Custom quote", note: "Gang sheets & reseller SKUs" },
]

export default function WholesalePage() {
  const [sent, setSent] = useState(false)

  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="wholesale" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-3">Bulk & wholesale</h1>
          <p className="text-white/65">
            Tiered pricing for shops, brands, and resellers. Submit a quote for gang sheets, event runs, or store replenishment.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-500">Tiered pricing</h2>
          <div className="rounded-xl border border-white/15 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="text-left p-3">Quantity</th>
                  <th className="text-left p-3">Film / bundle</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {tiers.map((row) => (
                  <tr key={row.range} className="border-t border-white/10">
                    <td className="p-3 font-medium text-white">{row.range}</td>
                    <td className="p-3">{row.discount}</td>
                    <td className="p-3 text-white/60">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-red-500">Quote request</h2>
            {sent ? (
              <p className="text-green-400">Thanks — we&apos;ll reply within one business day.</p>
            ) : (
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <input required placeholder="Business name" className="w-full rounded-lg bg-white/10 border border-white/20 p-3" />
                <input required type="email" placeholder="Email" className="w-full rounded-lg bg-white/10 border border-white/20 p-3" />
                <input required placeholder="Estimated quantity" className="w-full rounded-lg bg-white/10 border border-white/20 p-3" />
                <textarea required placeholder="Design description, sizes, deadline" className="w-full rounded-lg bg-white/10 border border-white/20 p-3 min-h-28" />
                <button type="submit" className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 font-semibold">
                  Request quote
                </button>
              </form>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-red-500">Resellers</h2>
            <p className="text-white/75 leading-relaxed mb-4">
              Stock our catalog prints or white-label DTF rolls. We provide consistent color profiles, pack slips without branding on request, and dropship options in select regions.
            </p>
            <p className="text-white/75 leading-relaxed">
              Join the{" "}
              <Link href="/affiliate" className="text-red-400 underline">
                affiliate program
              </Link>{" "}
              for referral commissions, or apply for wholesale NET-30 after your second paid order.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

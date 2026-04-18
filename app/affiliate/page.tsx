import { Header } from "@/components/header"
import Link from "next/link"

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="affiliate" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 space-y-8">
        <h1 className="text-4xl font-bold">Affiliate & reseller program</h1>
        <div className="rounded-xl border border-amber-600/30 bg-amber-600/10 px-5 py-3 text-amber-300 text-sm">
          🚧 This program is coming soon. We are a new business and will be launching our affiliate program shortly. Get in touch to express your interest.
        </div>
        <p className="text-white/70 leading-relaxed">
          Know creators, boutiques, or print shops who could use ChromaCrew? We plan to offer a referral commission program for those who help grow our community.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-red-500">How to sign up</h2>
          <ol className="list-decimal pl-5 text-white/75 space-y-2">
            <li>Create an account via{" "}
              <Link href="/login" className="text-red-400 underline">
                Login
              </Link>
              .
            </li>
            <li>Email abiesivan@gmail.com with your site or social handle (placeholder).</li>
            <li>We send tracking links and a short brand kit within 2 business days.</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-red-500">Commission structure</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-2">
            <li>
              <strong className="text-white">Retail referrals:</strong> 8% on eligible product subtotal (excl. shipping).
            </li>
            <li>
              <strong className="text-white">Wholesale introductions:</strong> 3% on first invoice for deals you originate.
            </li>
            <li>Payouts monthly over $50; tax forms required where applicable.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-red-500">Promo materials</h2>
          <p className="text-white/75 leading-relaxed">
            Approved partners receive lifestyle images, DTF explainer copy, file-requirement one-pagers, and seasonal banners. Custom co-branded landing pages available for high-volume affiliates.
          </p>
        </section>

        <p className="text-white/50 text-sm">
          For volume pricing on your own SKUs, see our{" "}
          <Link href="/shop" className="text-red-400 underline">
            shop page
          </Link>{" "}
          — bulk discounts apply automatically at checkout.
        </p>
      </div>
    </main>
  )
}

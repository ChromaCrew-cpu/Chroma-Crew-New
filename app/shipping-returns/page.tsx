import { Header } from "@/components/header"
import Link from "next/link"

export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="shipping-returns" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 space-y-8">
        <h1 className="text-4xl font-bold">Shipping & returns</h1>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-red-500">Turnaround time</h2>
          <p className="text-white/75 leading-relaxed">
            Most orders are processed and shipped within <strong className="text-white">3–5 business days</strong> after your file is approved and your order is confirmed. You will receive a status update via your{" "}
            <Link href="/account" className="text-red-400 underline">Account page</Link>.
          </p>
          <p className="text-white/60 text-sm">
            Need it faster? Contact us before placing your order and we will do our best to accommodate.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-red-500">Where we ship</h2>
          <p className="text-white/75 leading-relaxed">
            We currently deliver island-wide within <strong className="text-white">Sri Lanka only</strong>. ChromaCrew is an online-only business — there is no physical walk-in location.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-red-500">File issues</h2>
          <p className="text-white/75 leading-relaxed">
            If your file does not meet our{" "}
            <Link href="/file-requirements" className="text-red-400 underline">print requirements</Link>,
            we will pause your order and contact you with clear instructions before printing anything. No surprises.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-red-500">Damaged or misprinted orders</h2>
          <p className="text-white/75 leading-relaxed">
            If there is a defect in our printing or your garment arrives damaged, contact us within{" "}
            <strong className="text-white">7 days</strong> of delivery with photos of the issue. We will reprint or issue a credit. We cannot cover issues caused by incorrect files that were already approved by you.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-red-500">Returns & cancellations</h2>
          <p className="text-white/75 leading-relaxed">
            Because every item is custom-printed to order, we do not accept returns for change of mind. If you need to cancel, contact us as soon as possible — cancellations are only possible before printing has started.
          </p>
        </section>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center space-y-2">
          <p className="text-white/70">Have a specific question about your order?</p>
          <Link href="/contacts" className="inline-flex px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 font-semibold text-sm transition-colors">
            Contact us
          </Link>
        </div>

      </div>
    </main>
  )
}

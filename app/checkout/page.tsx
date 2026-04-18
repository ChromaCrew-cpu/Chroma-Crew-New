"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { getCartItemKey, useShop } from "@/components/shop-provider"

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart, addOrder, addDownloads } = useShop()
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "bank">("cod")

  // Volume discount tiers
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0)
  const discountPct = totalQty >= 50 ? 20 : totalQty >= 25 ? 15 : totalQty >= 10 ? 10 : totalQty >= 5 ? 5 : 0
  const discountAmt = cartTotal * (discountPct / 100)
  const finalTotal = cartTotal - discountAmt
  const [submitted, setSubmitted] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [shipping, setShipping] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postal: "",
  })

  if (submitted && orderId) {
    return (
      <main className="min-h-screen bg-background text-white flex-1">
        <Header currentPage="shop" />
        <div className="max-w-3xl mx-auto px-6 py-16 text-center space-y-4">
          <h1 className="text-4xl mb-2">Order Confirmed</h1>
          <p className="text-white/70">
            Thanks for your order. Your reference:{" "}
            <strong className="text-white">{orderId}</strong>
          </p>
          <p className="text-white/60 text-sm">
            We will review your order and contact you if we need anything. Track your progress any time from your account page.
          </p>
          <div className="mt-4 rounded-xl border border-green-600/30 bg-green-600/10 px-5 py-4 text-sm text-green-300 text-left">
            <p className="font-semibold mb-1">📲 Next step: Confirm on WhatsApp</p>
            <p className="text-green-400/80">We will reach out to confirm your order details and arrange delivery. You can also message us directly:</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <a
              href="https://wa.me/94763425409?text=Hi%2C+I+just+placed+an+order+on+ChromaCrew+and+want+to+confirm+it!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 font-semibold flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Confirm on WhatsApp
            </a>
            <Link href="/account" className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 font-medium">
              My account
            </Link>
            <Link href="/shop" className="px-5 py-2.5 rounded-xl border border-white/25 hover:bg-white/10">
              Continue shopping
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="shop" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            if (cart.length === 0) return
            const id = addOrder({
              items: cart.map((c) => ({ ...c })),
              total: finalTotal,
              paymentMethod,
              shipping: { ...shipping },
              status: "received",
            })
            addDownloads([
              { title: "DTF file checklist", href: "/faq#files" },
              { title: "Heat press quick reference", href: "/size-guide#press" },
            ])
            clearCart()
            setOrderId(id)
            setSubmitted(true)
          }}
        >
          <h1 className="text-4xl mb-2">Checkout</h1>
          <p className="text-white/70 mb-6">Enter shipping details and choose payment method.</p>

          <input
            required
            placeholder="Full Name"
            value={shipping.fullName}
            onChange={(e) => setShipping((s) => ({ ...s, fullName: e.target.value }))}
            className="w-full rounded-xl bg-white/10 border border-white/20 p-3"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={shipping.email}
            onChange={(e) => setShipping((s) => ({ ...s, email: e.target.value }))}
            className="w-full rounded-xl bg-white/10 border border-white/20 p-3"
          />
          <input
            required
            placeholder="Phone Number"
            value={shipping.phone}
            onChange={(e) => setShipping((s) => ({ ...s, phone: e.target.value }))}
            className="w-full rounded-xl bg-white/10 border border-white/20 p-3"
          />
          <textarea
            required
            placeholder="Shipping Address"
            value={shipping.address}
            onChange={(e) => setShipping((s) => ({ ...s, address: e.target.value }))}
            className="w-full rounded-xl bg-white/10 border border-white/20 p-3 min-h-24"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              required
              placeholder="City"
              value={shipping.city}
              onChange={(e) => setShipping((s) => ({ ...s, city: e.target.value }))}
              className="rounded-xl bg-white/10 border border-white/20 p-3"
            />
            <input
              required
              placeholder="State"
              value={shipping.state}
              onChange={(e) => setShipping((s) => ({ ...s, state: e.target.value }))}
              className="rounded-xl bg-white/10 border border-white/20 p-3"
            />
            <input
              required
              placeholder="Postal Code"
              value={shipping.postal}
              onChange={(e) => setShipping((s) => ({ ...s, postal: e.target.value }))}
              className="rounded-xl bg-white/10 border border-white/20 p-3"
            />
          </div>

          <div className="rounded-xl border border-white/20 p-4 space-y-3">
            <p className="font-semibold">Payment Method</p>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery (COD)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
              />
              Bank Transfer
            </label>
            {paymentMethod === "bank" && (
              <p className="text-sm text-white/70">
                Bank transfer details will be shared after order confirmation.
              </p>
            )}
          </div>

          <button type="submit" className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 font-semibold">
            Place Order
          </button>
        </form>

        <aside className="rounded-2xl border border-white/15 p-5 h-fit">
          <h2 className="text-2xl mb-4">Order Summary</h2>
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={getCartItemKey(item)} className="flex justify-between text-sm">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          {discountPct > 0 && (
            <div className="flex justify-between text-sm text-green-400 mt-2">
              <span>Volume discount ({discountPct}% off)</span>
              <span>-${discountAmt.toFixed(2)}</span>
            </div>
          )}
          <div className="border-t border-white/20 mt-4 pt-4 text-xl flex justify-between">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
          {discountPct > 0 && (
            <p className="text-green-400/70 text-xs text-right mt-1">🎉 {discountPct}% volume discount applied!</p>
          )}
        </aside>
      </div>
    </main>
  )
}

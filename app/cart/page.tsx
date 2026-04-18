"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { getCartItemKey, useShop } from "@/components/shop-provider"

export default function CartPage() {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useShop()

  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="cart" />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center space-y-5">
            <p className="text-white/70">Your cart is empty. Add products to continue checkout.</p>
            <Link
              href="/shop"
              className="inline-flex px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors font-semibold"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => {
              const rowKey = getCartItemKey(item)
              return (
              <div key={rowKey} className="border border-white/10 rounded-xl p-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl">{item.name}</h2>
                    <p className="text-white/60 text-sm">
                      {item.color ?? "Default"} / {item.size ?? "Default"}
                      {item.dtfSize ? ` / ${item.dtfSize}` : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-1 bg-white/10 rounded"
                      onClick={() => updateQuantity(rowKey, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-white/10 rounded"
                      onClick={() => updateQuantity(rowKey, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                  <button className="text-red-500" onClick={() => removeFromCart(rowKey)}>
                    Remove
                  </button>
                </div>
              </div>
            )})}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <button className="px-4 py-2 border border-white/20 rounded" onClick={clearCart}>
                Clear Cart
              </button>
              <div className="text-2xl">Total: ${cartTotal.toFixed(2)}</div>
              <Link href="/checkout" className="px-6 py-3 bg-red-600 rounded-xl hover:bg-red-700">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

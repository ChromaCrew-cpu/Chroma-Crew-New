"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { useShop } from "@/components/shop-provider"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist, addToCart } = useShop()

  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="wishlist" />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h1 className="text-4xl font-bold tracking-wide">Wishlist</h1>
          {wishlist.length > 0 && (
            <button className="px-4 py-2 border border-white/30 rounded-lg" onClick={clearWishlist}>
              Clear Wishlist
            </button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center space-y-6">
            <p className="text-white/70">No saved products yet. Browse the catalog and add items you like.</p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/shop"
                className="inline-flex px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors font-semibold"
              >
                Explore Shop
              </Link>
              <Link
                href="/"
                className="inline-flex px-6 py-3 rounded-full border border-white/30 hover:border-white/60 transition-colors font-semibold"
              >
                Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div key={item.id} className="border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl">{item.name}</h2>
                  <p className="text-red-500 font-semibold">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
                    onClick={() => addToCart({ id: item.id, name: item.name, price: item.price }, 1)}
                  >
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 border border-white/20 rounded-lg" onClick={() => removeFromWishlist(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

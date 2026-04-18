"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus, Heart, Check } from "lucide-react"
import { useShop } from "@/components/shop-provider"
import type { Product } from "@/lib/products"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop()
  const [selectedView, setSelectedView] = useState<"front" | "back" | "detail">("front")
  const [selectedColor, setSelectedColor] = useState(product.colors[0] ?? "Black")
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "M")
  const [selectedDtfSize, setSelectedDtfSize] = useState<"A4" | "A3">("A4")
  const [quantity, setQuantity] = useState(1)
  const [cartPressed, setCartPressed] = useState(false)
  const [showAddedPopup, setShowAddedPopup] = useState(false)

  const wished = isWishlisted(product.id)
  const dtfSurcharge = selectedDtfSize === "A3" ? 8 : 0
  const finalPrice = product.price + dtfSurcharge
  const viewOptions: Array<{ key: "front" | "back" | "detail"; label: string }> = [
    { key: "front", label: "Front View" },
    { key: "back", label: "Back View" },
    { key: "detail", label: "Detail View" },
  ]

  return (
    <>
      {showAddedPopup && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="bg-green-600 text-white px-5 py-3 rounded-xl shadow-xl border border-green-400/40">
            Added to cart successfully!
          </div>
        </div>
      )}
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 py-8">
      <div className="space-y-4">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-red-600/70 bg-white/5">
          <Image src={product.images[selectedView]} alt={`${product.name} ${selectedView}`} fill className="object-cover" />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 text-white text-xs">
            {viewOptions.find((v) => v.key === selectedView)?.label}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {viewOptions.map((view) => (
            <button
              key={view.key}
              type="button"
              onClick={() => setSelectedView(view.key)}
              className={`rounded-xl border px-3 py-2 text-sm transition-all ${
                selectedView === view.key
                  ? "border-red-600 bg-red-600/20 text-white"
                  : "border-white/20 text-white/70 hover:border-red-500"
              }`}
            >
              {view.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl text-white">{product.name}</h1>
          <p className="text-red-500 text-2xl mt-2">${finalPrice.toFixed(2)}</p>
          <p className="text-white/60 text-sm mt-1">
            DTF Size: {selectedDtfSize} {selectedDtfSize === "A3" ? "(+ $8.00)" : "(base price)"}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-600/15 border border-green-600/30 text-green-400 text-xs">
              🎨 Made to order — ships in 3–5 days
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/60 text-xs">
              🇱🇰 Sri Lanka delivery
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-white/80 text-sm">Color</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full rounded-xl bg-black/60 border border-red-600 px-3 py-3 text-white"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-white/80 text-sm">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full rounded-xl bg-black/60 border border-red-600 px-3 py-3 text-white"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-white/80 text-sm">DTF Print Size</label>
            <select
              value={selectedDtfSize}
              onChange={(e) => setSelectedDtfSize(e.target.value as "A4" | "A3")}
              className="w-full rounded-xl bg-black/60 border border-red-600 px-3 py-3 text-white"
            >
              <option value="A4">A4</option>
              <option value="A3">A3</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/15 p-3">
          <span className="text-white/80">Quantity</span>
          <div className="flex items-center bg-red-600 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 flex items-center justify-center text-white hover:bg-red-700 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center text-white font-semibold">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 flex items-center justify-center text-white hover:bg-red-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() =>
              toggleWishlist({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
            className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all ${
              wished ? "bg-red-600 border-red-600 text-white" : "border-red-600 text-red-500 hover:bg-red-600/10"
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-5 h-5 ${wished ? "fill-current" : ""}`} />
          </button>
          <button
            className={`flex-1 py-4 font-bold text-lg rounded-lg transition-all ${
              cartPressed ? "bg-green-600 text-white scale-[0.98]" : "bg-white text-black hover:bg-gray-100"
            }`}
            onClick={() => {
              addToCart(
                {
                  id: product.id,
                  name: product.name,
                    price: finalPrice,
                  color: selectedColor,
                  size: selectedSize,
                    dtfSize: selectedDtfSize,
                },
                quantity,
              )
              setCartPressed(true)
              setShowAddedPopup(true)
              setTimeout(() => setCartPressed(false), 700)
              setTimeout(() => setShowAddedPopup(false), 2200)
            }}
          >
            {cartPressed ? (
              <span className="inline-flex items-center gap-2">
                <Check className="w-5 h-5" />
                Added!
              </span>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

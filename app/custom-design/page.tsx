"use client"

import { useCallback, useMemo, useState } from "react"
import { Header } from "@/components/header"
import Image from "next/image"
import { useShop } from "@/components/shop-provider"
import { Heart, Check } from "lucide-react"

export default function CustomDesignPage() {
  const { addToCart, toggleWishlist, isWishlisted } = useShop()
  const [selectedColor, setSelectedColor] = useState("Red")
  const [selectedSize, setSelectedSize] = useState("XL")
  const [selectedDtfSize, setSelectedDtfSize] = useState<"A4" | "A3">("A4")
  const [quantity, setQuantity] = useState(1)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [cartPressed, setCartPressed] = useState(false)
  const [showAddedPopup, setShowAddedPopup] = useState(false)

  const colors = ["Red", "Black", "White", "Navy", "Grey"]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const customPrice = 49.99
  const dtfSurcharge = selectedDtfSize === "A3" ? 8 : 0
  const finalPrice = customPrice + dtfSurcharge
  const previewUrl = useMemo(() => uploadedImage || "/placeholder.svg", [uploadedImage])
  const wished = isWishlisted("custom-dtf")

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (!file || !file.type.startsWith("image/")) return
    const reader = new FileReader()
    reader.onload = (event) => setUploadedImage((event.target?.result as string) || null)
    reader.readAsDataURL(file)
  }, [])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !file.type.startsWith("image/")) return
    const reader = new FileReader()
    reader.onload = (event) => setUploadedImage((event.target?.result as string) || null)
    reader.readAsDataURL(file)
  }

  return (
    <main className="min-h-screen bg-background flex-1">
      <Header currentPage="custom-design" />
      {showAddedPopup && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="bg-green-600 text-white px-5 py-3 rounded-xl shadow-xl border border-green-400/40">
            Added to cart successfully!
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="space-y-4">
            <div className="relative w-full aspect-[4/5] rounded-2xl border border-red-600/70 overflow-hidden bg-white/5">
              <Image src="/products/custom-front.svg" alt="Custom shirt mockup" fill className="object-cover" />
              <div className="absolute inset-[28%_27%_22%_27%]">
                <Image src={previewUrl} alt="DTF design preview" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="space-y-5 max-w-md mx-auto w-full">
            <h1 className="text-3xl text-white text-center">Custom DTF T-Shirt Builder</h1>
            <p className="text-white/70 text-center">
              Upload your print-ready design, pick color and size, then add to cart.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/55">🎨 Made to order — 3–5 days</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/55">✅ File checked before printing</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/55">🇱🇰 Sri Lanka delivery</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-white text-xs mb-1">Colour</label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full bg-black/80 border-2 border-red-600 rounded-xl px-3 py-2 text-white"
                >
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white text-xs mb-1">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full bg-black/80 border-2 border-red-600 rounded-xl px-3 py-2 text-white"
                >
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white text-xs mb-1">DTF Print Size</label>
                <select
                  value={selectedDtfSize}
                  onChange={(e) => setSelectedDtfSize(e.target.value as "A4" | "A3")}
                  className="w-full bg-black/80 border-2 border-red-600 rounded-xl px-3 py-2 text-white"
                >
                  <option value="A4">A4</option>
                  <option value="A3">A3</option>
                </select>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center bg-red-600 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 text-white"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-white">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-8 h-8 text-white"
                  >
                    +
                  </button>
                </div>
                <div className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm">
                  $ {finalPrice.toFixed(2)}
                </div>
              </div>
              <p className="text-white/60 text-xs text-center">
                DTF Size: {selectedDtfSize} {selectedDtfSize === "A3" ? "(+ $8.00)" : "(base price)"}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-white/80 text-sm">Upload Design</p>
              <div
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`relative rounded-xl border-2 border-red-600 ${
                isDragging ? "bg-red-600/20" : "bg-red-600/90"
              }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="px-3 py-2 text-center text-white text-sm">
                {uploadedImage ? "Design uploaded. Click to replace." : "Drag & Drop your design or Browse"}
              </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  toggleWishlist({
                    id: "custom-dtf",
                    name: "Custom DTF T-Shirt",
                    price: finalPrice,
                    image: uploadedImage ?? "/placeholder.svg",
                  })
                }
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all ${
                  wished ? "bg-red-600 border-red-600 text-white" : "border-red-600 text-red-500 hover:bg-red-600/10"
                }`}
                aria-label="Add custom tee to wishlist"
              >
                <Heart className={`w-5 h-5 ${wished ? "fill-current" : ""}`} />
              </button>
              <button
                type="button"
                className={`flex-1 rounded-xl py-3 font-semibold transition-all ${
                  cartPressed ? "bg-green-600 text-white scale-[0.98]" : "bg-white text-black"
                }`}
                onClick={() => {
                  addToCart(
                    {
                      id: "custom-dtf",
                      name: "Custom DTF T-Shirt",
                      price: finalPrice,
                      color: selectedColor,
                      size: selectedSize,
                      dtfSize: selectedDtfSize,
                      customImage: uploadedImage ?? undefined,
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
      </div>

    </main>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { useShop } from "@/components/shop-provider"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image?: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { toggleWishlist, isWishlisted } = useShop()
  const wished = isWishlisted(id)

  return (
    <Link
      href={`/product/${id}`}
      className="group relative block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative bg-card aspect-[3/4] rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-red-600/20">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleWishlist({ id, name, price, image })
          }}
          className={`absolute top-3 right-3 z-20 w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
            wished ? "bg-red-600 border-red-600 text-white" : "bg-black/55 border-white/30 text-white hover:border-red-500"
          }`}
          aria-label="Toggle wishlist"
        >
          <Heart className={`w-4 h-4 ${wished ? "fill-current" : ""}`} />
        </button>
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-600 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-600 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-600 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-600 rounded-br-lg" />

        {/* Product Image */}
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-background flex items-center justify-center">
            <span className="text-muted-foreground text-sm">No Image</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white font-semibold text-lg">{name}</span>
          <span className="text-red-500 font-bold text-xl mt-2">
            ${price.toFixed(2)}
          </span>
          <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
            View Details
          </button>
        </div>
      </div>

      {/* Product Info (visible when not hovered) */}
      <div
        className={`mt-4 text-center transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <h3 className="text-white font-medium">{name}</h3>
        <span className="inline-block px-2 py-0.5 rounded-full bg-red-600/20 border border-red-600/30 text-red-400 text-[10px] mt-1">New</span>
        <p className="text-red-500 font-semibold">${price.toFixed(2)}</p>
      </div>
    </Link>
  )
}

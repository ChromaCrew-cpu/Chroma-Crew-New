"use client"

import { Header } from "@/components/header"
import Link from "next/link"

const categories = [
  { name: "T-Shirts", count: 24, href: "/shop?category=tshirts" },
  { name: "Custom Tees", count: 12, href: "/custom-design" },
  { name: "Hoodies", count: 18, href: "/shop?category=hoodies" },
  { name: "Tank Tops", count: 8, href: "/shop?category=tanktops" },
  { name: "Long Sleeves", count: 15, href: "/shop?category=longsleeves" },
  { name: "Accessories", count: 6, href: "/shop?category=accessories" },
]

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-background flex-1">
      <Header currentPage="categories" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Categories</h1>
          <p className="text-white/60">Browse our collection by category</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative bg-card p-8 rounded-xl border border-white/10 hover:border-red-600 transition-all duration-300"
            >
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-600 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-600 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-600 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-600 rounded-br opacity-0 group-hover:opacity-100 transition-opacity" />

              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                {category.name}
              </h2>
              <p className="text-white/60">{category.count} products</p>

              <div className="mt-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                View Collection →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

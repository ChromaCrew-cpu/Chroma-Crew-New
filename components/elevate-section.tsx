"use client"

import Link from "next/link"

export function ElevateSection() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white mb-6">
          ELEVATE YOUR STYLE
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Discover premium quality that matches your ambition
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/shop"
            className="group relative px-8 py-3 bg-red-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/40 hover:scale-105"
          >
            <span className="relative z-10">Shop Now</span>
          </Link>
          <Link
            href="/custom-design"
            className="group px-8 py-3 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            Custom Design
          </Link>
        </div>
      </div>
    </section>
  )
}

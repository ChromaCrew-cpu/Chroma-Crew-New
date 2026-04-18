"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background subtle pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 100 Q 200 50, 300 150 T 500 100" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
        <path d="M700 80 Q 800 150, 900 100" stroke="white" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
        <circle cx="900" cy="450" r="200" stroke="rgba(220,38,38,0.15)" strokeWidth="1" />
        <circle cx="100" cy="500" r="150" stroke="rgba(220,38,38,0.1)" strokeWidth="1" />
      </svg>

      <div
        className={`text-center transition-all duration-1000 max-w-5xl mx-auto ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Trust line above logo */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8">
          <span className="flex items-center gap-1.5 text-white/50 text-xs sm:text-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-red-500">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Custom DTF T-Shirts
          </span>
          <span className="text-white/20 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5 text-white/50 text-xs sm:text-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-red-500">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            Cash on Delivery Available
          </span>
          <span className="text-white/20 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5 text-white/50 text-xs sm:text-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-red-500">
              <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/>
              <rect x="9" y="11" width="14" height="10" rx="1"/>
              <path d="M13 11v10M17 11v10"/>
            </svg>
            Islandwide Delivery 🇱🇰
          </span>
        </div>

        {/* Logo wordmark */}
        <div className="mb-4">
          <Image
            src="/api/design-assets/wordmark"
            alt="ChromaCrew"
            width={1024}
            height={207}
            className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] h-auto mx-auto"
            priority
            unoptimized
          />
        </div>

        {/* Tagline */}
        <p className="text-white/60 text-base sm:text-lg mt-2 mb-10">
          Premium DTF printed t-shirts — your design or ours. Made to order in Colombo, Sri Lanka.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="group relative w-full sm:w-auto px-10 py-4 bg-red-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 hover:scale-105 text-base"
          >
            <span className="relative z-10">🛍 Shop Now</span>
          </Link>
          <Link
            href="/custom-design"
            className="group w-full sm:w-auto px-10 py-4 border-2 border-white/60 text-white font-bold rounded-full transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:scale-105 text-base"
          >
            ✏️ Custom Design
          </Link>
        </div>

        {/* WhatsApp quick order */}
        <div className="mt-8">
          <a
            href="https://wa.me/94763425409?text=Hi%2C+I%27m+interested+in+ordering+from+ChromaCrew!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-green-400 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Or order via WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

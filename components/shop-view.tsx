"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import {
  DESIGN_THEME_OPTIONS,
  products,
  type DesignTheme,
  type Product,
} from "@/lib/products"
import { Search } from "lucide-react"

const ALL_SIZES = Array.from(new Set(products.flatMap((p) => p.sizes))).sort((a, b) => {
  const order = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]
  return order.indexOf(a) - order.indexOf(b)
})

function productMatches(
  p: Product,
  opts: { search: string; category: string; theme: string; garmentSize: string },
) {
  const q = opts.search.toLowerCase()
  const matchesSearch =
    !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
  const matchesCategory = !opts.category || p.category === opts.category
  const matchesTheme =
    !opts.theme || p.designThemes.includes(opts.theme as DesignTheme)
  const matchesSize =
    !opts.garmentSize || p.sizes.includes(opts.garmentSize)
  return matchesSearch && matchesCategory && matchesTheme && matchesSize
}

export function ShopView() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchInput, setSearchInput] = useState("")
  const [theme, setTheme] = useState("")
  const [garmentSize, setGarmentSize] = useState("")
  const [category, setCategory] = useState("")
  const [suggestOpen, setSuggestOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  const syncFromUrl = useCallback(() => {
    setSearchInput(searchParams.get("search") ?? "")
    setCategory(searchParams.get("category") ?? "")
    setTheme(searchParams.get("theme") ?? "")
    setGarmentSize(searchParams.get("size") ?? "")
  }, [searchParams])

  useEffect(() => {
    syncFromUrl()
  }, [syncFromUrl])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setSuggestOpen(false)
    }
    document.addEventListener("click", onDoc)
    return () => document.removeEventListener("click", onDoc)
  }, [])

  const pushFilters = (next: {
    search?: string
    category?: string
    theme?: string
    size?: string
  }) => {
    const params = new URLSearchParams(searchParams.toString())
    const setOrDelete = (key: string, val: string) => {
      if (val) params.set(key, val)
      else params.delete(key)
    }
    if (next.search !== undefined) setOrDelete("search", next.search.trim())
    if (next.category !== undefined) setOrDelete("category", next.category)
    if (next.theme !== undefined) setOrDelete("theme", next.theme)
    if (next.size !== undefined) setOrDelete("size", next.size)
    const q = params.toString()
    router.push(q ? `/shop?${q}` : "/shop")
  }

  const suggestions = useMemo(() => {
    const q = searchInput.trim().toLowerCase()
    if (q.length < 2) return []
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q),
      )
      .slice(0, 6)
  }, [searchInput])

  const filtered = useMemo(
    () =>
      products.filter((p) =>
        productMatches(p, {
          search: searchInput,
          category,
          theme,
          garmentSize,
        }),
      ),
    [searchInput, category, theme, garmentSize],
  )

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">Shop Collection</h1>
        <p className="text-white/60">
          {filtered.length} product{filtered.length === 1 ? "" : "s"} found
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-10 items-stretch lg:items-end">
        <div className="flex-1 relative" ref={wrapRef}>
          <label className="sr-only">Search products</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value)
                setSuggestOpen(true)
              }}
              onFocus={() => setSuggestOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  pushFilters({ search: searchInput })
                  setSuggestOpen(false)
                }
              }}
              placeholder="Search designs…"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40"
              autoComplete="off"
            />
          </div>
          {suggestOpen && suggestions.length > 0 && (
            <ul className="absolute z-30 mt-1 w-full rounded-xl border border-white/15 bg-card shadow-xl overflow-hidden">
              {suggestions.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                    onClick={() => {
                      setSearchInput(p.name)
                      pushFilters({ search: p.name })
                      setSuggestOpen(false)
                    }}
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:max-w-2xl w-full">
          <div>
            <label className="block text-xs text-white/50 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => {
                const v = e.target.value
                setCategory(v)
                pushFilters({ category: v })
              }}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white [&>option]:text-black [&>option]:bg-white"
            >
              <option value="">All categories</option>
              <option value="featured">Featured</option>
              <option value="tshirts">T-shirts</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Design theme</label>
            <select
              value={theme}
              onChange={(e) => {
                const v = e.target.value
                setTheme(v)
                pushFilters({ theme: v })
              }}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white [&>option]:text-black [&>option]:bg-white"
            >
              <option value="">All themes</option>
              {DESIGN_THEME_OPTIONS.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Garment size</label>
            <select
              value={garmentSize}
              onChange={(e) => {
                const v = e.target.value
                setGarmentSize(v)
                pushFilters({ size: v })
              }}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white [&>option]:text-black [&>option]:bg-white"
            >
              <option value="">Any size</option>
              {ALL_SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}

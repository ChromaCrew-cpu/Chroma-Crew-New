import { Suspense } from "react"
import { Header } from "@/components/header"
import { ShopView } from "@/components/shop-view"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background flex-1">
      <Header currentPage="shop" />
      <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-24 text-white/60">Loading shop…</div>}>
        <ShopView />
      </Suspense>
    </main>
  )
}

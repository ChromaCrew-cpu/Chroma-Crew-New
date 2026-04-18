import { Header } from "@/components/header"
import { ProductDetail } from "@/components/product-detail"
import { getProductById } from "@/lib/products"
import { notFound } from "next/navigation"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()

  return (
    <main className="min-h-screen bg-background flex-1">
      <Header currentPage="shop" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <ProductDetail product={product} />
      </div>
    </main>
  )
}

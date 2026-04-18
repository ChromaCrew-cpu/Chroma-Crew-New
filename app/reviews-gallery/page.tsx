"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { galleryItems } from "@/lib/gallery-items"
import { Star } from "lucide-react"

type UserShot = {
  id: string
  src: string
  stars: number
  caption: string
}

export default function ReviewsGalleryPage() {
  const [userShots, setUserShots] = useState<UserShot[]>([])
  const [stars, setStars] = useState(5)
  const [caption, setCaption] = useState("")

  const onFile = useCallback(
    (file: File | undefined) => {
      if (!file || !file.type.startsWith("image/")) return
      const reader = new FileReader()
      reader.onload = () => {
        const src = reader.result as string
        setUserShots((prev) => [
          {
            id: `u-${Date.now()}`,
            src,
            stars,
            caption: caption.trim() || "Customer photo",
          },
          ...prev,
        ])
        setCaption("")
      }
      reader.readAsDataURL(file)
    },
    [stars, caption],
  )

  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="reviews-gallery" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 space-y-10">
        <div>
          <h1 className="text-4xl font-bold mb-3">Reviews & gallery</h1>
          <p className="text-white/65">
            Be the first to share your ChromaCrew print! Upload a photo of your order — it helps other customers see real results.
          </p>
        </div>

        <section className="rounded-2xl border border-white/15 p-6 space-y-4 max-w-xl">
          <h2 className="text-lg font-semibold">Share a customer photo</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/60">Rating</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-label={`${n} stars`}
                  onClick={() => setStars(n)}
                  className="p-0.5"
                >
                  <Star
                    className={`w-6 h-6 ${n <= stars ? "fill-amber-400 text-amber-400" : "text-white/25"}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <input
            placeholder="Short caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full rounded-lg bg-white/10 border border-white/20 p-2 text-sm"
          />
          <label className="block">
            <span className="text-sm text-white/60">Upload image</span>
            <input
              type="file"
              accept="image/*"
              className="mt-1 w-full text-sm text-white/70"
              onChange={(e) => onFile(e.target.files?.[0])}
            />
          </label>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Customer photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {userShots.map((u) => (
              <figure key={u.id} className="rounded-xl overflow-hidden border border-white/12 bg-white/5">
                <div className="relative aspect-square">
                  <Image src={u.src} alt={u.caption} fill className="object-cover" unoptimized />
                </div>
                <figcaption className="p-3 text-sm">
                  <div className="flex text-amber-400 gap-0.5 mb-1">
                    {Array.from({ length: u.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  {u.caption}
                </figcaption>
              </figure>
            ))}
            {galleryItems.map((g) => (
              <figure key={g.id} className="rounded-xl overflow-hidden border border-white/12 bg-white/5">
                <div className="relative aspect-square">
                  <Image src={g.src} alt={g.caption} fill className="object-cover" />
                </div>
                <figcaption className="p-3 text-sm">
                  <div className="flex text-amber-400 gap-0.5 mb-1">
                    {Array.from({ length: g.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

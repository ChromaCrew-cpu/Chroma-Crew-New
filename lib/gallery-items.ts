export type GalleryItem = {
  id: string
  src: string
  caption: string
  stars: number
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g-001",
    src: "/placeholder.svg",
    caption: "Custom logo tee — great quality print!",
    stars: 5,
  },
  {
    id: "g-002",
    src: "/placeholder.svg",
    caption: "Ordered 3 pieces, all came out perfect.",
    stars: 5,
  },
  {
    id: "g-003",
    src: "/placeholder.svg",
    caption: "Fast delivery, colours are very vibrant.",
    stars: 5,
  },
]

export type DesignTheme =
  | "streetwear"
  | "graphic"
  | "minimalist"
  | "anime"
  | "nature"
  | "typography"
  | "abstract"

export const DESIGN_THEME_OPTIONS: { value: DesignTheme; label: string }[] = [
  { value: "streetwear", label: "Streetwear" },
  { value: "graphic", label: "Graphic" },
  { value: "minimalist", label: "Minimalist" },
  { value: "anime", label: "Anime" },
  { value: "nature", label: "Nature" },
  { value: "typography", label: "Typography" },
  { value: "abstract", label: "Abstract" },
]

export type Product = {
  id: string
  name: string
  price: number
  category: "featured" | "tshirts" | "custom"
  designThemes: DesignTheme[]
  colors: string[]
  sizes: string[]
  description: string
  image: string
  images: {
    front: string
    back: string
    detail: string
  }
}

export const products: Product[] = [
  {
    id: "tee-001",
    name: "Classic Black DTF Tee",
    price: 34.99,
    category: "featured",
    designThemes: ["streetwear", "minimalist"],
    colors: ["Black", "White", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "A clean everyday tee with premium DTF print. Vibrant colours, soft feel, built to last.",
    image: "/placeholder.svg",
    images: {
      front: "/placeholder.svg",
      back: "/placeholder.svg",
      detail: "/placeholder.svg",
    },
  },
  {
    id: "tee-002",
    name: "Graphic Street Tee",
    price: 39.99,
    category: "tshirts",
    designThemes: ["streetwear", "graphic"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Bold streetwear graphic printed with precision DTF technology. Stand out from the crowd.",
    image: "/placeholder.svg",
    images: {
      front: "/placeholder.svg",
      back: "/placeholder.svg",
      detail: "/placeholder.svg",
    },
  },
  {
    id: "tee-003",
    name: "Minimalist Logo Tee",
    price: 32.99,
    category: "tshirts",
    designThemes: ["minimalist", "typography"],
    colors: ["White", "Black", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Clean lines, simple design, maximum impact. The everyday minimalist tee.",
    image: "/placeholder.svg",
    images: {
      front: "/placeholder.svg",
      back: "/placeholder.svg",
      detail: "/placeholder.svg",
    },
  },
  {
    id: "tee-004",
    name: "Abstract Art Tee",
    price: 42.99,
    category: "featured",
    designThemes: ["abstract", "graphic"],
    colors: ["Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "Unique abstract artwork DTF-printed on premium cotton. One-of-a-kind wearable art.",
    image: "/placeholder.svg",
    images: {
      front: "/placeholder.svg",
      back: "/placeholder.svg",
      detail: "/placeholder.svg",
    },
  },
  {
    id: "tee-005",
    name: "Nature Vibes Tee",
    price: 36.99,
    category: "tshirts",
    designThemes: ["nature", "graphic"],
    colors: ["White", "Green", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Inspired by Sri Lanka's natural beauty. DTF printed with rich, fade-resistant colours.",
    image: "/placeholder.svg",
    images: {
      front: "/placeholder.svg",
      back: "/placeholder.svg",
      detail: "/placeholder.svg",
    },
  },
  {
    id: "tee-006",
    name: "Custom Design Tee",
    price: 49.99,
    category: "custom",
    designThemes: ["streetwear", "graphic"],
    colors: ["Black", "White", "Navy", "Red", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Upload your own design and we'll DTF print it on your chosen garment. Fully custom.",
    image: "/placeholder.svg",
    images: {
      front: "/placeholder.svg",
      back: "/placeholder.svg",
      detail: "/placeholder.svg",
    },
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getUtils() {
  return { cn: (...args: string[]) => args.filter(Boolean).join(" ") }
}

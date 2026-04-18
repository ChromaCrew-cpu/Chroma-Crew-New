"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  color?: string
  size?: string
  dtfSize?: "A4" | "A3"
  customImage?: string
}

export type WishlistItem = {
  id: string
  name: string
  price: number
  image?: string
}

export type OrderStatus = "received" | "processing" | "printed" | "shipped" | "delivered"

export const ORDER_STATUS_STEPS: OrderStatus[] = [
  "received",
  "processing",
  "printed",
  "shipped",
  "delivered",
]

export type OrderRecord = {
  id: string
  createdAt: string
  items: CartItem[]
  total: number
  paymentMethod: "cod" | "bank"
  shipping: {
    fullName: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    postal: string
  }
  status: OrderStatus
}

export type DigitalDownload = {
  id: string
  title: string
  createdAt: string
  /** Link to downloadable resource */
  href: string
}

function cartItemKey(item: Pick<CartItem, "id" | "color" | "size" | "dtfSize">) {
  return [item.id, item.color ?? "", item.size ?? "", item.dtfSize ?? ""].join("::")
}

type ShopContextType = {
  cart: CartItem[]
  wishlist: WishlistItem[]
  orders: OrderRecord[]
  downloads: DigitalDownload[]
  cartCount: number
  wishlistCount: number
  cartTotal: number
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void
  updateQuantity: (key: string, quantity: number) => void
  removeFromCart: (key: string) => void
  clearCart: () => void
  toggleWishlist: (item: WishlistItem) => void
  isWishlisted: (id: string) => boolean
  removeFromWishlist: (id: string) => void
  clearWishlist: () => void
  isLoggedIn: boolean
  userName: string | null
  login: (name: string) => void
  logout: () => void
  addOrder: (
    order: Pick<OrderRecord, "items" | "total" | "paymentMethod" | "shipping"> & { status?: OrderStatus },
  ) => string
  addDownloads: (items: Omit<DigitalDownload, "id" | "createdAt">[]) => void
  updateOrderStatus: (id: string, status: OrderStatus) => void
}

const ShopContext = createContext<ShopContextType | null>(null)

const CART_KEY = "chromacrew_cart"
const WISHLIST_KEY = "chromacrew_wishlist"
const USER_KEY = "chromacrew_user"
const ORDERS_KEY = "chromacrew_orders"
const DOWNLOADS_KEY = "chromacrew_downloads"

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [userName, setUserName] = useState<string | null>(null)
  const [orders, setOrders] = useState<OrderRecord[]>([])
  const [downloads, setDownloads] = useState<DigitalDownload[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY)
    const storedWishlist = localStorage.getItem(WISHLIST_KEY)
    const storedUser = localStorage.getItem(USER_KEY)
    const storedOrders = localStorage.getItem(ORDERS_KEY)
    const storedDownloads = localStorage.getItem(DOWNLOADS_KEY)
    if (storedCart) setCart(JSON.parse(storedCart))
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist))
    if (storedUser) setUserName(storedUser)
    if (storedOrders) setOrders(JSON.parse(storedOrders))
    if (storedDownloads) setDownloads(JSON.parse(storedDownloads))
  }, [])

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders))
  }, [orders])

  useEffect(() => {
    localStorage.setItem(DOWNLOADS_KEY, JSON.stringify(downloads))
  }, [downloads])

  const addToCart = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find(
        (p) =>
          p.id === item.id &&
          p.color === item.color &&
          p.size === item.size &&
          p.dtfSize === item.dtfSize,
      )
      if (existing) {
        return prev.map((p) =>
          p === existing ? { ...p, quantity: p.quantity + quantity } : p,
        )
      }
      return [...prev, { ...item, quantity }]
    })
  }

  const updateQuantity = (key: string, quantity: number) => {
    setCart((prev) =>
      prev
        .map((item) => (cartItemKey(item) === key ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (key: string) => {
    setCart((prev) => prev.filter((item) => cartItemKey(item) !== key))
  }

  const clearCart = () => setCart([])

  const toggleWishlist = (item: WishlistItem) => {
    setWishlist((prev) =>
      prev.some((w) => w.id === item.id)
        ? prev.filter((w) => w.id !== item.id)
        : [...prev, item],
    )
  }

  const isWishlisted = (id: string) => wishlist.some((w) => w.id === id)
  const removeFromWishlist = (id: string) => setWishlist((prev) => prev.filter((w) => w.id !== id))
  const clearWishlist = () => setWishlist([])

  const login = (name: string) => {
    setUserName(name)
    localStorage.setItem(USER_KEY, name)
  }

  const logout = () => {
    setUserName(null)
    localStorage.removeItem(USER_KEY)
  }

  const addOrder: ShopContextType["addOrder"] = (orderInput) => {
    const id = `CC-${Date.now().toString(36).toUpperCase()}`
    const createdAt = new Date().toISOString()
    const { status: inputStatus, ...rest } = orderInput
    const record: OrderRecord = {
      ...rest,
      id,
      createdAt,
      status: inputStatus ?? "received",
    }
    setOrders((prev) => [record, ...prev])
    return id
  }

  const addDownloads: ShopContextType["addDownloads"] = (items) => {
    const now = new Date().toISOString()
    setDownloads((prev) => [
      ...items.map((d, i) => ({
        ...d,
        id: `dl-${Date.now()}-${i}`,
        createdAt: now,
      })),
      ...prev,
    ])
  }

  const updateOrderStatus: ShopContextType["updateOrderStatus"] = (id, status) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)))
  }

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      orders,
      downloads,
      cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
      wishlistCount: wishlist.length,
      cartTotal: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      toggleWishlist,
      isWishlisted,
      removeFromWishlist,
      clearWishlist,
      isLoggedIn: Boolean(userName),
      userName,
      login,
      logout,
      addOrder,
      addDownloads,
      updateOrderStatus,
    }),
    [cart, wishlist, userName, orders, downloads],
  )

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) throw new Error("useShop must be used within ShopProvider")
  return context
}

export function getCartItemKey(item: CartItem) {
  return cartItemKey(item)
}

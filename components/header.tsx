"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Heart, Search, ShoppingCart, User, Menu, X } from "lucide-react"
import { useShop } from "@/components/shop-provider"

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const { cartCount, isLoggedIn, userName, logout } = useShop()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [currentPage])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "Shop", href: "/shop", key: "shop" },
    { name: "Custom Design", href: "/custom-design", key: "custom-design" },
    { name: "About", href: "/about", key: "about" },
    { name: "Blog", href: "/blog", key: "blog" },
    { name: "FAQ", href: "/faq", key: "faq" },
    { name: "Account", href: "/account", key: "account" },
    { name: "Contacts", href: "/contacts", key: "contacts" },
  ]

  const isActive = (key: string) => currentPage === key

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <div className={`relative ${isLoaded ? "logo-animate" : "opacity-0"}`}>
                <Image
                  src="/api/design-assets/logo"
                  alt="ChromaCrew"
                  width={1024}
                  height={768}
                  className="w-12 h-auto md:w-16"
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5 flex-1 justify-center">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-item-animate text-sm font-medium transition-all duration-300 relative group whitespace-nowrap ${
                    isActive(item.key) ? "text-red-500" : "text-white/80 hover:text-red-500"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4 shrink-0">
              {/* Search */}
              <div className="flex items-center gap-2">
                {showSearch && (
                  <form
                    className="flex items-center"
                    onSubmit={(e) => {
                      e.preventDefault()
                      const query = searchQuery.trim()
                      router.push(query ? `/shop?search=${encodeURIComponent(query)}` : "/shop")
                      setShowSearch(false)
                    }}
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search…"
                      autoFocus
                      className="w-32 sm:w-48 bg-white text-black px-3 py-2 rounded-md focus:outline-none text-sm"
                    />
                  </form>
                )}
                <button
                  type="button"
                  aria-label="Toggle search"
                  onClick={() => setShowSearch((prev) => !prev)}
                  className="text-white/80 hover:text-red-500 transition-colors p-1"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* User — hidden on small mobile, shown md+ */}
              <div className="hidden md:flex">
                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={logout}
                    className="flex items-center gap-1.5 text-white/80 hover:text-red-500 transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span className="text-sm hidden lg:inline max-w-[100px] truncate">{userName}</span>
                  </button>
                ) : (
                  <Link href="/login" className="flex items-center gap-1.5 text-white/80 hover:text-red-500 transition-colors">
                    <User className="w-5 h-5" />
                    <span className="text-sm hidden lg:inline">Login</span>
                  </Link>
                )}
              </div>

              {/* Wishlist — hidden on small mobile */}
              <Link href="/wishlist" className="hidden md:flex items-center gap-1.5 text-white/80 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative text-white/80 hover:text-red-500 transition-colors p-1"
                aria-label={`Shopping cart, ${cartCount} items`}
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[1.1rem] h-[1.1rem] px-1 bg-red-600 rounded-full text-white text-[10px] flex items-center justify-center font-medium">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>

              {/* Hamburger — mobile only */}
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden text-white/80 hover:text-red-500 transition-colors p-1"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop nav row removed — now inside the flex row above */}
        </div>
      </header>

      {/* Mobile slide-in menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background border-l border-white/10 shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="text-white/60 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-4 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive(item.key)
                  ? "bg-red-600/15 text-red-400 border border-red-600/30"
                  : "text-white/75 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Extra links in mobile menu */}
        <div className="px-4 pt-2 border-t border-white/10 mx-4 flex flex-col gap-1">
          <Link
            href="/wishlist"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3"
          >
            <Heart className="w-4 h-4" /> Wishlist
          </Link>
          {isLoggedIn ? (
            <button
              type="button"
              onClick={() => { logout(); setMenuOpen(false) }}
              className="px-4 py-3 rounded-xl text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3 w-full text-left"
            >
              <User className="w-4 h-4" /> Logout ({userName})
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3"
            >
              <User className="w-4 h-4" /> Login
            </Link>
          )}
        </div>
      </aside>
    </>
  )
}

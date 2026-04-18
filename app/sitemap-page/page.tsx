import Link from "next/link"
import { Header } from "@/components/header"

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/custom-design", label: "Custom Design" },
  { href: "/about", label: "About Us" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/account", label: "My Account" },
  { href: "/login", label: "Login" },
  { href: "/contacts", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/file-requirements", label: "File Requirements" },
  { href: "/reviews-gallery", label: "Reviews & Gallery" },
  { href: "/blog", label: "Blog & Tips" },
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/affiliate", label: "Affiliate / Reseller" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
]

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="sitemap-page" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        <ul className="space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-red-400 hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-white/50 text-sm mt-10">
          Blog posts: see individual URLs under /blog/[slug] from the blog index.
        </p>
      </div>
    </main>
  )
}

"use client"

import Link from "next/link"

const footerLinks = {
  shop: [
    { href: "/shop", label: "Shop All" },
    { href: "/custom-design", label: "Custom Design" },
    { href: "/cart", label: "My Cart" },
    { href: "/checkout", label: "Checkout" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/file-requirements", label: "File Requirements" },
    { href: "/shipping-returns", label: "Shipping & Returns" },
    { href: "/contacts", label: "Contact Us" },
    { href: "/reviews-gallery", label: "Reviews & Gallery" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog & Tips" },
    { href: "/affiliate", label: "Affiliate / Reseller" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column — 2 cols wide */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-white font-bold text-xl">ChromaCrew</p>
            <p className="text-white/55 text-sm leading-relaxed">
              Premium custom DTF t-shirts, made to order. Based in Colombo, Sri Lanka. Online orders only — we deliver island-wide.
            </p>

            {/* COD badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-green-600/30 bg-green-600/10 text-green-400 text-xs font-semibold">
              💵 Cash on Delivery Available
            </div>

            {/* Contact info */}
            <div className="space-y-2 pt-1">
              <a
                href="https://wa.me/94763425409"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/55 hover:text-green-400 text-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                076 342 5409
              </a>
              <a
                href="tel:+94751297637"
                className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                075 129 7637
              </a>
              <a
                href="mailto:abiesivan@gmail.com"
                className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                abiesivan@gmail.com
              </a>
              <p className="flex items-center gap-2 text-white/40 text-xs pt-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                115 2nd Lane, Mt Lavinia, Colombo, Sri Lanka
              </p>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <p className="text-white font-semibold mb-4">Shop</p>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 hover:text-red-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <p className="text-white font-semibold mb-4">Support</p>
            <ul className="space-y-2.5">
              {footerLinks.support.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 hover:text-red-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className="text-white font-semibold mb-4">Company</p>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 hover:text-red-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-white/35 text-xs">
            <span>🇱🇰 Islandwide delivery</span>
            <span className="text-white/15">·</span>
            <span>💵 Cash on Delivery</span>
            <span className="text-white/15">·</span>
            <span>Made to order</span>
          </div>
          <p className="text-white/30 text-xs text-center sm:text-right">
            &copy; {new Date().getFullYear()} ChromaCrew. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

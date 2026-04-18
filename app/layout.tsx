import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Poppins } from "next/font/google"
import { Providers } from "@/components/providers"
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: 'ChromaCrew - Custom DTF T-Shirts | Sri Lanka',
  description: 'Premium DTF printed custom t-shirts delivered island-wide in Sri Lanka. Upload your design or shop our collection. Based in Colombo.',
  keywords: ['DTF printing', 'custom t-shirts', 'Sri Lanka', 'Colombo', 'custom apparel', 'heat transfer'],
  openGraph: {
    title: 'ChromaCrew - Custom DTF T-Shirts',
    description: 'Premium DTF printed custom t-shirts delivered island-wide in Sri Lanka.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

"use client"

import { Header } from "@/components/header"
import Link from "next/link"

const faqs = [
  {
    q: "What is DTF printing?",
    a: "Direct-to-Film (DTF) printing transfers your artwork onto a special film using adhesive powder, which is then heat-pressed onto fabric. It works on almost any colour garment and produces bright, vibrant prints with a soft feel.",
  },
  {
    q: "What file format do you need?",
    a: "PNG at 300 DPI with a transparent background is ideal. We also accept PDF and SVG. Avoid JPG files as they don\'t support transparency. Not sure about your file? Contact us and we\'ll check it for free before printing.",
  },
  {
    q: "What is your turnaround time?",
    a: "Most orders are ready and shipped within 3–5 business days after your order is confirmed and your file is approved. If you need it faster, contact us before ordering and we\'ll do our best.",
  },
  {
    q: "Do you have a minimum order quantity?",
    a: "No minimum! You can order just one custom tee or one DTF transfer. Volume discounts apply automatically when you order more.",
  },
  {
    q: "Where do you ship?",
    a: "We currently ship island-wide within Sri Lanka. We are an online-only business — there is no physical walk-in shop.",
  },
  {
    q: "How do I care for my DTF-printed garment?",
    a: "Wait 24 hours after pressing before washing. Turn inside out, wash in cold or warm water with a mild detergent. Tumble dry on low or hang dry. Avoid bleach or fabric softener directly on the print.",
  },
  {
    q: "What if my file isn\'t print-ready?",
    a: "We\'ll pause your order and contact you with a clear list of what needs fixing. No file will be printed until you\'ve approved it. Simple fixes are done free; complex redraws may incur a small charge.",
  },
  {
    q: "Can I get a refund or reprint?",
    a: "If there is a defect in our printing, contact us within 7 days of delivery with photos. We will reprint or issue a credit. We can\'t cover issues caused by incorrect file submissions after approval.",
  },
  {
    q: "How do I track my order?",
    a: "After placing an order, you can track its status (Received → Processing → Printed → Shipped → Delivered) from your Account page.",
  },
]

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="faq" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-3">Frequently asked questions</h1>
          <p className="text-white/65">Everything you need to know before placing your first order.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl border border-white/12 p-5">
              <h2 className="text-lg font-semibold text-red-400 mb-2">{item.q}</h2>
              <p className="text-white/75 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center space-y-2">
          <p className="text-white/70">Still have a question?</p>
          <Link href="/contacts" className="inline-flex px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 font-semibold text-sm transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  )
}

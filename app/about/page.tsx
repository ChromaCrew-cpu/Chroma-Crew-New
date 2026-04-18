import { Header } from "@/components/header"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="about" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 space-y-16">

        <section className="text-center space-y-4">
          <span className="inline-block px-4 py-1 rounded-full border border-red-600/50 bg-red-600/10 text-red-400 text-xs uppercase tracking-widest">
            Who we are
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            A new kind of <span className="text-red-500">DTF print</span> shop.
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            ChromaCrew is a brand-new DTF printing business based in Colombo, Sri Lanka. We&apos;re just getting started — and we&apos;re building this the right way, with real quality, honest pricing, and no shortcuts.
          </p>
        </section>

        <section className="rounded-2xl border border-red-600/30 bg-red-600/5 p-8 md:p-10 space-y-4">
          <h2 className="text-2xl font-semibold text-red-400">Our mission</h2>
          <p className="text-white/75 leading-relaxed">
            We started ChromaCrew because we believe great DTF prints should be accessible to everyone — from a single custom tee to a small batch run. Every order we receive is handled personally. We check every file, press every transfer with care, and only send it when we&apos;re happy with it.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { step: "01", title: "Place your order", desc: "Browse our shop or use the custom design builder to upload your own artwork. Pick your colour, size, and DTF print size." },
              { step: "02", title: "We print & press", desc: "Your order is printed on premium DTF film and heat-pressed onto your chosen garment with care." },
              { step: "03", title: "Delivered to you", desc: "We ship directly to your door. You can track your order status any time from your account page." },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-3">
                <span className="text-5xl font-bold text-red-600/30">{item.step}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What we promise</h2>
          <div className="space-y-4">
            {[
              { title: "No minimum orders", desc: "Order just one piece. We treat every order — big or small — with the same attention." },
              { title: "File support included", desc: "Not sure if your file is print-ready? Send it to us and we&apos;ll check it before we print anything." },
              { title: "Transparent pricing", desc: "The price you see is what you pay. No hidden fees." },
              { title: "Direct contact", desc: "You&apos;re talking to the people actually running the shop — not a call centre." },
            ].map((val) => (
              <div key={val.title} className="flex gap-4 p-4 rounded-xl border border-white/10">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <div>
                  <p className="font-semibold">{val.title}</p>
                  <p className="text-white/60 text-sm mt-0.5">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-3 text-center">
          <p className="text-white/60 text-sm">Based in Colombo, Sri Lanka · Online orders only · Questions? We&apos;re here.</p>
          <Link href="/contacts" className="inline-flex px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 font-semibold text-sm transition-colors">
            Get in touch
          </Link>
        </section>

      </div>
    </main>
  )
}

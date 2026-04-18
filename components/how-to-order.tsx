import Link from "next/link"

const steps = [
  {
    num: "01",
    title: "Choose Your Design",
    desc: "Browse our shop for ready-made designs, or go to Custom Design to upload your own artwork.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 16.5V20h3.5L18 9.5 14.5 6 4 16.5z"/><path d="M13 7.5L16.5 11"/>
      </svg>
    ),
    action: { label: "Browse Shop", href: "/shop" },
  },
  {
    num: "02",
    title: "Add to Cart",
    desc: "Pick your colour, size, and quantity. Add to cart — no account needed to place an order.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    action: null,
  },
  {
    num: "03",
    title: "Select Payment",
    desc: "Choose Cash on Delivery (pay when it arrives) or Bank Transfer. No card needed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    action: null,
  },
  {
    num: "04",
    title: "Confirm via WhatsApp",
    desc: "We'll confirm your order details on WhatsApp and keep you updated until delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    action: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/94763425409?text=Hi%2C+I%27d+like+to+confirm+my+ChromaCrew+order!",
      external: true,
    },
  },
]

export function HowToOrderSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full border border-red-600/40 bg-red-600/10 text-red-400 text-xs uppercase tracking-widest mb-3">
            Simple process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">How to order</h2>
          <p className="text-white/50 mt-3 text-sm md:text-base">From design to delivery — four easy steps.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center gap-4">
              {/* Step number circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-red-600/60 flex flex-col items-center justify-center text-red-500 shrink-0 shadow-lg shadow-red-600/10">
                {step.icon}
              </div>

              <div className="space-y-2">
                <span className="text-red-600/50 text-xs font-bold tracking-widest">STEP {step.num}</span>
                <h3 className="text-white font-semibold text-base">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                {step.action && (
                  step.action.external ? (
                    <a
                      href={step.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-xl bg-green-600/15 border border-green-600/30 text-green-400 text-xs font-semibold hover:bg-green-600/25 transition-colors"
                    >
                      {step.action.label}
                    </a>
                  ) : (
                    <Link
                      href={step.action.href}
                      className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-xl bg-red-600/15 border border-red-600/30 text-red-400 text-xs font-semibold hover:bg-red-600/25 transition-colors"
                    >
                      {step.action.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* COD highlight */}
        <div className="mt-12 rounded-2xl border border-red-600/20 bg-red-600/5 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white font-semibold">💵 Cash on Delivery — pay when it arrives</p>
            <p className="text-white/55 text-sm mt-1">No online payment needed. Bank transfer also accepted. 100% safe.</p>
          </div>
          <Link
            href="/shop"
            className="shrink-0 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Start Ordering
          </Link>
        </div>

      </div>
    </section>
  )
}

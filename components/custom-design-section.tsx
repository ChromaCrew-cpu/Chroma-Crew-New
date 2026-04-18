import Link from "next/link"

export function CustomDesignSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-red-600/25 bg-gradient-to-br from-red-600/8 via-background to-background overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left — text */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full border border-red-600/40 bg-red-600/10 text-red-400 text-xs uppercase tracking-widest mb-4">
                  Custom orders
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Your design.<br />
                  <span className="text-red-500">Our print.</span>
                </h2>
                <p className="text-white/60 mt-4 leading-relaxed">
                  Got a logo, artwork, or idea? Upload your file and we'll print it on a premium t-shirt — exactly as you want it. Great for personal use, events, teams, or small businesses.
                </p>
              </div>

              <ul className="space-y-2.5">
                {[
                  "Upload PNG, PDF or SVG — we check the file for you",
                  "Choose your garment colour and size",
                  "Pay on delivery or via bank transfer",
                  "Delivered island-wide in 3–5 days",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                        <path d="M2 6l3 3 5-5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/custom-design"
                  className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-colors text-center text-sm"
                >
                  ✏️ Start Custom Order
                </Link>
                <a
                  href="https://wa.me/94763425409?text=Hi%2C+I+want+to+place+a+custom+t-shirt+order+with+ChromaCrew!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl border border-green-600/40 bg-green-600/10 text-green-400 hover:bg-green-600/20 font-bold transition-colors text-center text-sm flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Right — visual placeholder */}
            <div className="hidden lg:flex items-center justify-center p-12 border-l border-white/5">
              <div className="w-full max-w-xs aspect-square rounded-2xl border-2 border-dashed border-red-600/25 bg-red-600/5 flex flex-col items-center justify-center gap-4 text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-red-600/15 border border-red-600/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-red-500">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Upload your design</p>
                  <p className="text-white/40 text-xs mt-1">PNG · PDF · SVG · 300 DPI</p>
                </div>
                <Link
                  href="/custom-design"
                  className="mt-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

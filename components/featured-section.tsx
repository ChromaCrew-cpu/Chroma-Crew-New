export function FeaturedSection() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl text-white">Featured Categories</h2>
          <p className="text-white/65 mt-3">Built for DTF quality, comfort, and repeat orders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <a
            href="/shop?category=featured"
            className="rounded-2xl border border-red-600/60 bg-black/40 p-6 min-h-48 flex flex-col justify-between hover:border-red-500 hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/50 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl text-white">Featured</h3>
              <p className="text-white/65 mt-2 text-sm">Top-selling DTF t-shirts selected from current customer favorites.</p>
            </div>
          </a>

          <a
            href="/shop?category=tshirts"
            className="rounded-2xl border border-red-600/60 bg-black/40 p-6 min-h-48 flex flex-col justify-between hover:border-red-500 hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/50 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 4h6l2 3 3 1-2 4-2-1v9H8v-9l-2 1-2-4 3-1 2-3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl text-white">T-Shirts</h3>
              <p className="text-white/65 mt-2 text-sm">Everyday essentials with clean cuts and premium DTF-ready fabrics.</p>
            </div>
          </a>

          <a
            href="/custom-design"
            className="rounded-2xl border border-red-600/60 bg-black/40 p-6 min-h-48 flex flex-col justify-between hover:border-red-500 hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/50 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 16.5V20h3.5L18 9.5 14.5 6 4 16.5z" />
                <path d="M13 7.5 16.5 11" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl text-white">Custom Tees</h3>
              <p className="text-white/65 mt-2 text-sm">Upload your artwork and order personalized DTF prints with confidence.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

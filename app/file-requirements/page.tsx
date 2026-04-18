import { Header } from "@/components/header"
import Link from "next/link"

const specs = [
  {
    title: "File format",
    good: ["PNG (preferred)", "PDF (vector)", "SVG"],
    bad: ["JPG / JPEG", "BMP", "Word / Canva exports without bleed"],
    note: "PNG with transparent background gives the cleanest DTF result.",
  },
  {
    title: "Resolution",
    good: ["300 DPI minimum", "600 DPI for small text or fine detail"],
    bad: ["72 DPI (screen resolution)", "Upscaled low-res images"],
    note: "Always design at final print size, not scaled up later.",
  },
  {
    title: "Colour mode",
    good: ["RGB (our RIP converts for DTF)", "Spot colours fine if in PNG"],
    bad: ["CMYK-only PDFs may shift slightly"],
    note: "We handle colour conversion in-house for accurate DTF output.",
  },
  {
    title: "White underbase",
    good: ["Leave transparent — we add white automatically", "Or mark white areas clearly"],
    bad: ["White-filled backgrounds on white garments"],
    note: "DTF prints a white underbase layer; transparent areas = no ink.",
  },
  {
    title: "Safe zone & bleed",
    good: ["Keep text 5mm inside edge", "No bleed needed for DTF transfers"],
    bad: ["Text right at the edge", "Bleed marks from print PDFs"],
    note: "DTF is cut exactly to your artwork — no bleed required.",
  },
]

export default function FileRequirementsPage() {
  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="file-requirements" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 space-y-10">

        <div>
          <span className="inline-block px-3 py-1 rounded-full border border-red-600/40 bg-red-600/10 text-red-400 text-xs uppercase tracking-widest mb-4">
            Print specs
          </span>
          <h1 className="text-4xl font-bold mb-3">File requirements</h1>
          <p className="text-white/65 leading-relaxed">
            Submitting the right file means faster turnaround and sharper results. Follow these specs and your order ships without delays.
          </p>
        </div>

        {/* Quick checklist */}
        <div className="rounded-2xl border border-red-600/30 bg-red-600/5 p-6 space-y-3">
          <h2 className="text-lg font-semibold text-red-400">Quick checklist</h2>
          <ul className="space-y-2">
            {[
              "PNG or PDF at 300 DPI+",
              "RGB colour mode",
              "Transparent background (no white fill)",
              "Text outlined / embedded",
              "File named clearly (e.g. MyBrand_frontprint.png)",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-xs shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Detailed specs */}
        <div className="space-y-5">
          {specs.map((spec) => (
            <div key={spec.title} className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
              <h3 className="text-lg font-semibold">{spec.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs text-green-400 uppercase tracking-wider">✓ Do this</p>
                  <ul className="space-y-1">
                    {spec.good.map((g) => (
                      <li key={g} className="text-sm text-white/75">{g}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-red-400 uppercase tracking-wider">✗ Avoid this</p>
                  <ul className="space-y-1">
                    {spec.bad.map((b) => (
                      <li key={b} className="text-sm text-white/55">{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-xs text-white/45 border-t border-white/10 pt-3">{spec.note}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold">Not sure about your file?</p>
            <p className="text-white/55 text-sm">Send it through — we&apos;ll check it free before printing.</p>
          </div>
          <Link href="/contacts" className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 font-semibold text-sm transition-colors">
            Contact us
          </Link>
        </div>

      </div>
    </main>
  )
}

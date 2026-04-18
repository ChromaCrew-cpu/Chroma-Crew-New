export function TrustStrip() {
  const badges = [
    { icon: "🎨", text: "Premium DTF prints" },
    { icon: "✅", text: "Quality checked every order" },
    { icon: "📦", text: "Ships in 3–5 business days" },
    { icon: "🇱🇰", text: "Based in Colombo, Sri Lanka" },
    { icon: "💬", text: "Direct support via contact page" },
    { icon: "🔁", text: "Issue with your order? We fix it" },
  ]

  return (
    <div className="w-full border-y border-white/10 bg-white/[0.03] py-3 overflow-hidden">
      <div className="flex items-center gap-8 px-4 overflow-x-auto scrollbar-none">
        {badges.map((b) => (
          <div key={b.text} className="flex items-center gap-2 shrink-0 text-white/65 text-sm">
            <span>{b.icon}</span>
            <span className="whitespace-nowrap">{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

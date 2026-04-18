export function BlogBody({ content }: { content: string }) {
  const lines = content.trim().split("\n")
  return (
    <div className="space-y-4 text-white/80 leading-relaxed">
      {lines.map((line, i) => {
        const t = line.trim()
        if (!t) return null
        if (t.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl font-semibold text-white pt-4">
              {t.replace(/^##\s+/, "")}
            </h2>
          )
        }
        if (t.startsWith("- **")) {
          const rest = t.replace(/^-\s*\*\*([^*]+)\*\*:\s*/, "• $1: ")
          return (
            <p key={i} className="pl-2">
              {rest}
            </p>
          )
        }
        if (t.startsWith("- ")) {
          return (
            <p key={i} className="pl-2">
              {t}
            </p>
          )
        }
        return (
          <p key={i} className="">
            {t}
          </p>
        )
      })}
    </div>
  )
}

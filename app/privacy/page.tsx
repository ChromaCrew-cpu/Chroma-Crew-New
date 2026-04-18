import { Header } from "@/components/header"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="privacy" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 space-y-6 text-white/75 leading-relaxed">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        <p>Last updated: April 14, 2026</p>
        <p>
          ChromaCrew (&quot;we&quot;) respects your privacy. This demo storefront stores cart, wishlist, and order data in your browser (localStorage) for prototyping — there is no production backend in this build.
        </p>
        <h2 className="text-xl font-semibold text-white pt-4">Data we process</h2>
        <p>
          When you use checkout or forms, information you type is used only inside this session/demo unless you connect a real API. Newsletter and chat widgets (e.g. Crisp) would be governed by their respective policies when enabled.
        </p>
        <h2 className="text-xl font-semibold text-white pt-4">Cookies</h2>
        <p>
          The cookie banner records your consent choice in localStorage. Analytics may use cookies in production deployments.
        </p>
        <h2 className="text-xl font-semibold text-white pt-4">Contact</h2>
        <p>Questions: use the contact page or your deployed support email.</p>
      </div>
    </main>
  )
}

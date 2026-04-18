import { Header } from "@/components/header"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="terms" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 space-y-6 text-white/75 leading-relaxed">
        <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        <p>Last updated: April 14, 2026</p>
        <p>
          These terms apply to use of the ChromaCrew demo site. Products, prices, and SLAs are illustrative until connected to your live commerce stack.
        </p>
        <h2 className="text-xl font-semibold text-white pt-4">Orders & payment</h2>
        <p>
          Placing an order through this demo confirms you understand fulfillment is simulated. Production sites should integrate real payment processors and tax rules.
        </p>
        <h2 className="text-xl font-semibold text-white pt-4">Artwork & IP</h2>
        <p>
          You warrant you have rights to upload designs. We may refuse jobs that infringe third-party rights.
        </p>
        <h2 className="text-xl font-semibold text-white pt-4">Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, ChromaCrew is not liable for indirect damages arising from use of this demo software.
        </p>
      </div>
    </main>
  )
}

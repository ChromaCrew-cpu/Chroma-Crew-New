import Link from "next/link"
import { Header } from "@/components/header"
import { blogPosts } from "@/lib/blog-posts"
import { format } from "date-fns"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="blog" />
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 space-y-10">
        <div>
          <h1 className="text-4xl font-bold mb-3">Blog & tips</h1>
          <p className="text-white/65">SEO-friendly guides on applying DTF, choosing fabrics, and prepping files.</p>
        </div>
        <ul className="space-y-6">
          {blogPosts.map((post) => (
            <li key={post.slug} className="rounded-xl border border-white/12 p-5 hover:border-red-500/40 transition-colors">
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-xl font-semibold text-white group-hover:text-red-400 mb-2">{post.title}</h2>
                <p className="text-white/60 text-sm mb-2">{format(new Date(post.date), "MMMM d, yyyy")}</p>
                <p className="text-white/75">{post.description}</p>
                <span className="inline-block mt-3 text-red-500 text-sm font-medium">Read more →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

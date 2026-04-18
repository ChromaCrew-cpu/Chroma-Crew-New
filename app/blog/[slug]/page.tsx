import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { BlogBody } from "@/components/blog-body"
import { getPostBySlug } from "@/lib/blog-posts"
import { format } from "date-fns"

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="blog" />
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12">
        <Link href="/blog" className="text-red-400 text-sm hover:underline mb-6 inline-block">
          ← All posts
        </Link>
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-white/50 text-sm mb-8">{format(new Date(post.date), "MMMM d, yyyy")}</p>
        <BlogBody content={post.content} />
      </article>
    </main>
  )
}

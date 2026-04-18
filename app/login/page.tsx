"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { useShop } from "@/components/shop-provider"

export default function LoginPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, isLoggedIn, userName } = useShop()
  const router = useRouter()

  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="login" />
      <div className="max-w-xl mx-auto px-6 py-16">
        <h1 className="text-4xl mb-6">Login</h1>

        {isLoggedIn ? (
          <p className="text-white/70">You are signed in as {userName}.</p>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              const displayName = name.trim() || email.split("@")[0] || "Customer"
              if (!email || !password) return
              login(displayName)
              router.push("/shop")
            }}
          >
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded bg-white/10 border border-white/20"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-white/10 border border-white/20"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-white/10 border border-white/20"
            />
            <button className="w-full py-3 rounded bg-red-600 hover:bg-red-700 font-semibold">
              Sign In
            </button>
          </form>
        )}
      </div>
    </main>
  )
}

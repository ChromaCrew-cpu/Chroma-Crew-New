"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import {
  getCartItemKey,
  ORDER_STATUS_STEPS,
  type OrderStatus,
  useShop,
} from "@/components/shop-provider"
import { useMemo, useState } from "react"
import { format } from "date-fns"

const STEP_LABELS: Record<OrderStatus, string> = {
  received: "Received",
  processing: "Processing",
  printed: "Printed",
  shipped: "Shipped",
  delivered: "Delivered",
}

function OrderTimeline({ status }: { status: OrderStatus }) {
  const activeIndex = ORDER_STATUS_STEPS.indexOf(status)
  return (
    <ol className="flex flex-wrap gap-2 md:gap-0 md:justify-between mt-4">
      {ORDER_STATUS_STEPS.map((step, i) => {
        const done = i <= activeIndex
        return (
          <li key={step} className="flex items-center gap-2 text-xs sm:text-sm">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold ${
                done ? "bg-red-600 text-white" : "bg-white/15 text-white/40"
              }`}
            >
              {i + 1}
            </span>
            <span className={done ? "text-white" : "text-white/45"}>{STEP_LABELS[step]}</span>
            {i < ORDER_STATUS_STEPS.length - 1 && (
              <span className="hidden md:inline text-white/25 mx-1">→</span>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default function AccountPage() {
  const { orders, downloads, updateOrderStatus, isLoggedIn, userName } = useShop()
  const [tab, setTab] = useState<"orders" | "downloads">("orders")

  const sortedOrders = useMemo(
    () => [...orders].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [orders],
  )

  return (
    <main className="min-h-screen bg-background text-white flex-1">
      <Header currentPage="account" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <h1 className="text-4xl font-bold mb-2">My account</h1>
        {!isLoggedIn ? (
          <div className="rounded-xl border border-white/15 p-6 mt-6 space-y-4">
            <p className="text-white/70">Sign in to save your name. Your orders are stored in this browser — sign in on the same device to view them.</p>
            <Link href="/login" className="inline-flex px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 font-medium">
              Login
            </Link>
          </div>
        ) : (
          <p className="text-white/60 mb-6">Welcome back, {userName}.</p>
        )}

        <div className="flex gap-2 border-b border-white/15 mb-6">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
              tab === "orders" ? "border-red-500 text-white" : "border-transparent text-white/50"
            }`}
            onClick={() => setTab("orders")}
          >
            Order tracking
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
              tab === "downloads" ? "border-red-500 text-white" : "border-transparent text-white/50"
            }`}
            onClick={() => setTab("downloads")}
          >
            Download history
          </button>
        </div>

        {tab === "orders" && (
          <div className="space-y-6">
            {sortedOrders.length === 0 ? (
              <p className="text-white/60">
                No orders yet.{" "}
                <Link href="/shop" className="text-red-500 underline">
                  Browse the shop
                </Link>
                .
              </p>
            ) : (
              sortedOrders.map((order) => {
                const idx = ORDER_STATUS_STEPS.indexOf(order.status)
                const canAdvance = idx < ORDER_STATUS_STEPS.length - 1
                return (
                  <div key={order.id} className="rounded-2xl border border-white/12 p-5 space-y-3">
                    <div className="flex flex-wrap justify-between gap-2">
                      <div>
                        <p className="font-semibold text-lg">{order.id}</p>
                        <p className="text-white/50 text-sm">
                          {format(new Date(order.createdAt), "MMM d, yyyy HH:mm")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-red-400 font-semibold">${order.total.toFixed(2)}</p>
                        <p className="text-white/45 text-xs capitalize">{order.paymentMethod}</p>
                      </div>
                    </div>
                    <OrderTimeline status={order.status} />

                    <ul className="text-sm text-white/65 space-y-1 pt-2 border-t border-white/10">
                      {order.items.map((item) => (
                        <li key={`${order.id}-${getCartItemKey(item)}`}>
                          {item.name} × {item.quantity}
                          {item.dtfSize ? ` (${item.dtfSize})` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })
            )}
          </div>
        )}

        {tab === "downloads" && (
          <div className="space-y-3">
            {downloads.length === 0 ? (
              <p className="text-white/60">
                Purchase includes digital guides — they appear here after checkout.
              </p>
            ) : (
              downloads.map((d) => (
                <div
                  key={d.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/12 px-4 py-3"
                >
                  <div>
                    <p className="font-medium">{d.title}</p>
                    <p className="text-white/45 text-xs">{format(new Date(d.createdAt), "MMM d, yyyy")}</p>
                  </div>
                  <Link href={d.href} className="text-sm text-red-500 hover:underline">
                    Open
                  </Link>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  )
}

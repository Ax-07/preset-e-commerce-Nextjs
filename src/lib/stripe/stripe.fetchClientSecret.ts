// @/src/lib/stripe/stripe.fetchClientSecret.ts

import { CartItem } from "@/src/stores/cart.store"

export const fetchClientSecret = async (items: CartItem[]) => {
  const res = await fetch("/api/checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  })

  const data = await res.json()
  return data.clientSecret
}

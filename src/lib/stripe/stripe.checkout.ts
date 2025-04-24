// @/src/lib/stripe/stripe.checkout.ts

import { CartItem } from "@/src/stores/cart.store";

export const handleCheckout = async (items: CartItem[]) => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
  
      if (!res.ok) throw new Error("Erreur lors du paiement");
  
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // Redirige vers Stripe Checkout
      }
    } catch (error) {
      console.error("Erreur pendant le paiement :", error);
      alert("Erreur pendant le paiement.");
    }
  };
  
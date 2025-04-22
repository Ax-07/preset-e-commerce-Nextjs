"use client";
// @/src/app/panier/page.tsx
import { useCartStore } from "@/src/stores/cart.store";
import React from "react";

const pagePanier: React.FC = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());
  return (
    <section id="panier-page" className="flex flex-col p-4">
      <h2 className="text-xl font-bold">Mon Panier</h2>
        <div className="flex-1 mt-4">
            {items.length === 0 ? (
            <p>Votre panier est vide</p>
            ) : (
            <ul className="space-y-2 mb-4">
                {items.map((item) => (
                <li key={item.id} className="flex justify-between">
                    <span>
                    {item.name} x {item.quantity}g
                    </span>
                    <div>
                    <span className="mr-2">{(item.unitPrice * item.quantity).toFixed(2)}€</span>
                    </div>
                </li>
                ))}
            </ul>
            )}
            {items.length > 0 && (
            <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{totalPrice.toFixed(2)}€</span>
            </div>
            )}
        </div>
    </section>
  );
};

export default pagePanier;

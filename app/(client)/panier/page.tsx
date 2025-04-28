"use client";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { handleCheckout } from "@/src/lib/stripe/stripe.checkout";
import { useCartStore } from "@/src/stores/cart.store";
import { DeleteIcon, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";

const CommandePage: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-muted-foreground">Chargement du panier...</p>
        <FaSpinner className="animate-spin ml-2 size-5" />
      </div>
    );
  }
  return (
<div className="flex flex-col max-w-2xl w-full mx-auto p-6 rounded-2xl shadow-lg space-y-6">
  <h2 className="text-2xl font-bold text-center">🛒 Votre Panier</h2>

  {items.length === 0 ? (
    <p className="text-center text-muted-foreground">Votre panier est vide</p>
  ) : (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center border rounded-xl p-4 shadow-sm"
        >
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-base font-medium">{item.name}</span>
              <span className="font-semibold">
                {(item.unitPrice * item.quantity).toFixed(2)}€
              </span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="rounded-full"
                >
                  −
                </Button>
                <Input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-16 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  style={{ MozAppearance: "textfield" }}
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="rounded-full"
                >
                  +
                </Button>
                <span className="text-sm">g</span>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
                className=""
              >
                <Trash2Icon size={18} className="" />
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )}
  <Separator className="my-4" />
  {items.length > 0 && (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>{totalPrice?.toFixed(2)}€</span>
      </div>
      <Button className="w-full">
        <a href="/panier/commande">Commander maintenant</a>
      </Button>
    </div>
  )}
</div>

  );
};
export default CommandePage;

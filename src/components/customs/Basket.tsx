import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { ShoppingBasket } from "lucide-react";
import { useCartStore } from "@/src/stores/cart.store";
import { Badge } from "../ui/badge";

const Basket = () => {
  const items = useCartStore(state => state.items);
  const totalPrice = useCartStore(state => state.totalPrice());
  const removeItem = useCartStore(state => state.removeItem);
  const clearCart = useCartStore(state => state.clearCart);
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className="relative cursor-pointer">
        <div className="relative">
          <ShoppingBasket className="size-7" />
          <Badge variant="rounded" size={"xs"} className="absolute -top-2 -right-2">
            {items.length}
          </Badge>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Mon panier</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            {items.length === 0 ? (
              <DropdownMenuItem>
                Votre panier est vide
              </DropdownMenuItem>
            ) : (
              <ul className="space-y-2 mb-4">
                {items.map(item => (
                <DropdownMenuItem>
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <div>
                      <span className="mr-2">{(item.price * item.quantity).toFixed(2)}€</span>
                      <button
                        className="text-red-500 hover:underline"
                        onClick={(e) => {
                          e.stopPropagation(); // Empêche la propagation de l'événement de clic
                          e.preventDefault(); // Empêche le comportement par défaut du bouton
                          removeItem(item.id);
                        }}
                      >
                        Supprimer
                      </button>
                    </div>
                  </li>
                </DropdownMenuItem>
                ))}
              </ul>
            )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Basket;

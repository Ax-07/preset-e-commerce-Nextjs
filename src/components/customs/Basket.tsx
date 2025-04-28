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
import { ShoppingBasket, X } from "lucide-react";
import { useCartStore } from "@/src/stores/cart.store";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

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
      <DropdownMenuContent className="w-100 mr-8">
        <DropdownMenuLabel>
          <h4 className="w-fit mx-auto text-base">Mon panier</h4>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            {items.length === 0 ? (
              <DropdownMenuItem>
                Votre panier est vide
              </DropdownMenuItem>
            ) : (
              <ul className="space-y-2 mb-4">
                {items.map(item => (
                <DropdownMenuItem key={item.id}>
                  <li className="inline-flex items-center justify-between w-full">
                    <p className="">{item.name} x {item.quantity}g</p>
                    <div className="inline-flex items-center">
                      <p className="mr-2">{(item.unitPrice * item.quantity).toFixed(2)}€</p>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-red-500 hover:text-red-500 size-6"
                        onClick={(e) => {
                          e.stopPropagation(); // Empêche la propagation de l'événement de clic
                          e.preventDefault(); // Empêche le comportement par défaut du bouton
                          removeItem(item.id);
                        }}
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  </li>
                </DropdownMenuItem>
                ))}
              </ul>
            )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="flex justify-between px-2 py-1.5">
          <span>Total</span>
          <span>{totalPrice.toFixed(2)}€</span>
        </div>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-2 px-2 py-1.5">
          <Button className="w-full" asChild>
            <a href="/panier">Voir mon Panier</a>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Basket;

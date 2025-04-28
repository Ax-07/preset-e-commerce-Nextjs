import { create } from "zustand";
import { CartItem, useCartStore } from "./cart.store";
import { useDeliveryStore } from "./delivery.store";

type CheckoutState = {
  total: () => number;
  items: () => CartItem[]; // tu peux adapter ça à ton type
  deliveryPrice: () => number;
};

export const useCheckoutStore = create<CheckoutState>((set, get) => ({
  total: () => {
    const cartTotal = useCartStore.getState().totalPrice();
    const delivery = useDeliveryStore.getState().delivery?.price ?? 0;
    return +(cartTotal + delivery).toFixed(2);
  },
  items: () => useCartStore.getState().items,
  deliveryPrice: () => useDeliveryStore.getState().delivery?.price ?? 0,
}));

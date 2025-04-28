import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum DeliveryMethod {
  Colissimo_relais = "colissimo-relais",
  Colissimo_home_without_signature = "colissimo-home-without-signature",
  Colissimo_home_with_signature = "colissimo-home-with-signature",
  Chronopost_home_with_signature_24h = "chronopost-home-with-signature-24h",
  Chronopost_relais = "chronopost-relais",
}
interface Delivery {
  method: DeliveryMethod;
  price: number;
}

interface DeliveryAddress {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    postalCode: string;
    city: string;
    country: string;
    phone: string;
    email: string;
}

interface DeliveryState {
  delivery: Delivery | null;
  address: DeliveryAddress | null;
  setDelivery: (delivery: Delivery) => void;
  setAddress: (address: DeliveryAddress) => void;
  clearDelivery: () => void;
}

export const useDeliveryStore = create<DeliveryState>()(
  persist<DeliveryState>(
    (set) => ({
      delivery: null,
      address: null,
      setDelivery: (delivery) => set({ delivery }),
      setAddress: (address) => set({ address }),
      clearDelivery: () => set({ delivery: null, address: null }),
    }),
    {
      name: 'delivery-storage', // clé dans localStorage
    }
  )
);
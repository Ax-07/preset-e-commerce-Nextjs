import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Définition des types pour les articles du panier
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  // État et actions du store
  interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    totalItems: () => number;
    totalPrice: () => number;
  }

  // Création du store avec persistance locale
export const useCartStore = create<CartState>()(
    persist<CartState>(
      (set, get) => ({
        items: [],
        addItem: (item) => {
          const existing = get().items.find(i => i.id === item.id);
          if (existing) {
            // Si déjà dans le panier, on incrémente la quantité
            set({
              items: get().items.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            });
          } else {
            // Sinon, on ajoute l'article
            set({ items: [...get().items, item] });
          }
        },
        removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
        clearCart: () => set({ items: [] }),
        totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
        totalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      }),
      {
        name: 'cart-storage', // clé dans localStorage
      }
    )
  );
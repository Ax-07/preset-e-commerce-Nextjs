import { useCartStore } from '@/src/stores/cart.store';
import React from 'react';

const CommandePage: React.FC = () => {
    const items = useCartStore((state) => state.items);
    const totalItems = useCartStore((state) => state.totalItems());
    const totalPrice = useCartStore((state) => state.totalPrice());
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);

return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl mb-4">Votre Panier</h2>
      {items.length === 0 ? (
        <p>Panier vide</p>
      ) : (
        <ul className="space-y-2 mb-4">
          {items.map(item => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <div>
                <span className="mr-2">{(item.unitPrice * item.quantity).toFixed(2)}€</span>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeItem(item.id)}
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="font-bold mb-4">Total: {totalPrice.toFixed(2)}€</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={clearCart}
      >
        Vider le panier
      </button>
    </div>
  );
};
export default CommandePage;
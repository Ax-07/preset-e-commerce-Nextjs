import React from 'react';
import { Button } from './button';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/src/stores/cart.store';
import { Product } from '@/src/types/product';

interface AddToCartProps {
    product: Product;
    onAddToCart: () => void;
}
const AddToCartButton: React.FC<AddToCartProps> = ({product, onAddToCart}) => {
    if (!product) return null; // Si le produit n'est pas défini, on ne rend rien
    const addItem = useCartStore(state => state.addItem);
    
    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); // Empêche la propagation de l'événement de clic
        e.preventDefault(); // Empêche le comportement par défaut du bouton
        console.log("Ajout au panier pour le produit :", product.id);
        addItem({ id: product.id!, name: "Produit", price: product.price!, quantity: 1 });
    };

    return (
        <Button 
        variant="outline" 
        onClick={handleAddToCart}>
        <ShoppingCart className="size-4" />
        Add to Cart
      </Button>
    );
};

export default AddToCartButton;
import React from 'react';
import { Button } from './button';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/src/stores/cart.store';
import { Product } from '@/src/types/product';
import toast from 'react-hot-toast';

interface AddToCartProps {
    type?: "button" | "submit" | "reset";
    product: Product;
    quantity?: number;
    price?: number;
    onAddToCart: () => void;
    className?: string;
    disabled?: boolean;
}
const AddToCartButton: React.FC<AddToCartProps> = ({type, product,quantity, onAddToCart, className, disabled=false}) => {
    if (!product) return null; // Si le produit n'est pas défini, on ne rend rien
    const addItem = useCartStore(state => state.addItem);
    
    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); // Empêche la propagation de l'événement de clic
        e.preventDefault(); // Empêche le comportement par défaut du bouton
        console.log("Ajout au panier pour le produit :", product.id);
        addItem({ id: product.id!, name: product.name, unitPrice: product.price!, quantity: quantity || 1 }); // Ajoute le produit au panier avec la quantité spécifiée
        toast.success("Produit ajouté au panier !"); // Affiche un message de succès
        onAddToCart(); // Appelle la fonction de rappel pour gérer l'ajout au panier
    };

    return (
        <Button 
        type={type}
        onClick={handleAddToCart}
        className={`${className}`}
        disabled={disabled}
        >
        <ShoppingCart className="size-4" />
        Ajouter au panier
      </Button>
    );
};

export default AddToCartButton;
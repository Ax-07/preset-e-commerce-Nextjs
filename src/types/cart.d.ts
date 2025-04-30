// --- TYPES POUR LA GESTION DU PANIER (ADMIN & CLIENT) ---

/**
 * Élément d'un panier (produit + variante + quantité).
 * 
 * Cas d'utilisation :
 * - Construction du panier utilisateur
 * - Préparation de la commande
 */
export interface CartItem {
    productId: string;
    variantId?: string;           // identifiant de la variante choisie
    quantity: number;             // quantité choisie
    price: number;                // prix unitaire
    name: string;                 // nom du produit
    image?: string;               // miniature d’illustration (optionnel)
  }
  
  /**
   * Représente un panier d’achat en cours.
   * 
   * Cas d'utilisation :
   * - Session utilisateur (localStorage ou DB)
   * - Transition panier → commande
   */
  export interface Cart {
    userId?: string;              // null si session anonyme
    items: CartItem[];
    couponCode?: string;          // code promotionnel appliqué
    total: number;                // montant total du panier (TTC)
    updatedAt: Date;              // dernière mise à jour du panier
  }
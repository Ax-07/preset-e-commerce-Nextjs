// @/src/types/product.d.ts

/**
 * @file product.d.ts
 * Définitions des types pour les produits, options, médias, catégories, stock, promotions et avis.
 */

/**
 * Représente un produit dans le catalogue.
 * 
 * Cas d'utilisation :
 * - Affichage de fiche produit
 * - Construction de cartes produit (listing)
 * - Intégration panier, wishlist, etc.
 */
export interface Product extends Partial<Entity> {
  name: string;
  description: string;
  price?: number;
  unit?: Unit;
  category?: ProductCategory;
  options?: Option[];
  media?: Partial<Media> | Partial<Media>[];
  primaryMedia?: Partial<Media>;
  isWishlisted?: boolean;
  stock: Stock;
  promotion?: Promotion;
  attributes?: ProductAttribute;
  marketingStatus?: MarketingStatus;
  reviewSummary?: Partial<ReviewSummary>;
  reviews?: Review[];
}

export type Unit = 'g' | 'ml' | 'l' | 'kg' | 'oz' | 'lb' | 'pcs';

/**
 * Définit une option personnalisable pour un produit (taille, couleur...).
 * 
 * Cas d'utilisation :
 * - Déclinaisons de produits
 * - Construction d'interfaces de sélection (menus déroulants, radio, etc.)
 */
export interface Option {
  id: string;
  name: string;
  values: OptionValue[];
}

/**
 * Représente une valeur d’option disponible pour un produit.
 * 
 * Cas d'utilisation :
 * - Sélection de variantes par l'utilisateur
 * - Calcul de prix et affichage conditionnel
 */
export interface OptionValue {
  id: string;
  name: string;
  quantity?: number;
  unit?: string;
  unitPrice?: number;
  totalPrice?: number;
  priceModifier?: number;
  stock?: Stock;
  isDefault?: boolean;
}

/**
 * Enumération des types de médias possibles pour un produit.
 * 
 * Cas d'utilisation :
 * - Gestion dynamique de galeries produits
 */
export type MediaType = 'image'| 'video'| 'audio';


/**
 * Représente un média rattaché à un produit (image, vidéo, audio).
 * 
 * Cas d'utilisation :
 * - Galerie visuelle
 * - Miniature dans les listings produits
 */
export interface Media extends Partial<Entity> {
  productId: string;
  url: string;
  type?: MediaType;
  alt?: string;
  thumbnail?: string;
  isPrimary?: boolean;
}

/**
 * Représente une catégorie de produit, avec support des sous-catégories.
 * 
 * Cas d'utilisation :
 * - Navigation dans l'arborescence produit
 * - Filtres sur pages catalogue
 */
export interface ProductCategory extends Partial<Entity> {
  name: string;
  description?: string;
  media?: Partial<Media>;
  parentCategoryId?: number | null;
  subcategories?: ProductCategory[];
}

/**
 * Informations de stock associées à un produit ou une déclinaison.
 * 
 * Cas d'utilisation :
 * - Contrôle de disponibilité
 * - Gestion de seuils de stock
 */
export interface Stock extends Partial<Entity> {
  productId?: string;
  quantity: number;
  min?: number;
  max?: number;
  location?: string;
}

/**
 * Représente les données promotionnelles liées à un produit.
 * 
 * Cas d'utilisation :
 * - Affichage de prix barrés / remisés
 * - Gestion de périodes promotionnelles
 */
export interface Promotion {
  isOnSale?: boolean;
  discountPercentage?: number | null;
  discountAmount?: number | null;
  salePrice?: number | null;
  saleStartDate?: Date | null;
  saleEndDate?: Date | null;
}

/**
 * Représente les caractéristiques descriptives d’un produit.
 * 
 * Cas d'utilisation :
 * - Affichage de détails dans les fiches produits
 * - Recherche/filtres avancés
 */
export interface ProductAttribute {
  tags?: string[];
  brand?: string;
  dimensions?: string;
  weight?: string;
  color?: string;
  material?: string;
  warranty?: string;
  careInstructions?: string;
}

/**
 * Donne le statut marketing d’un produit pour affichage promotionnel.
 * 
 * Cas d'utilisation :
 * - Mise en avant sur la page d'accueil ou les filtres
 */
export interface MarketingStatus {
  isFeatured?: boolean; // Produit en avant sur la page d'accueil
  isBestSeller?: boolean; // Produit le plus vendu dans sa catégorie
  isTrending?: boolean; // Produit en forte croissance de ventes
  isPopular?: boolean; // Produit populaire dans les recherches
  isNew?: boolean; // Produit récemment ajouté au catalogue
  isLimitedEdition?: boolean; // Produit en édition limitée
}

/**
 * Représente un avis client laissé sur un produit.
 * 
 * Cas d'utilisation :
 * - Affichage d’avis sur la fiche produit
 * - Calcul d’une note moyenne
 */
export interface Review extends Partial<Entity> {
  productId: string;
  userId: string;
  rating: number;
  comment?: string;
  isVerifiedPurchase?: boolean;
}

/**
 * Donne un aperçu statistique des avis reçus pour un produit.
 * 
 * Cas d'utilisation :
 * - Affichage résumé (ex: étoiles, nombre total)
 * - SEO et snippets
 */
export interface ReviewSummary {
  productId: string;
  averageRating: number;
  totalReviews: number;
}

/**
 * Interface de base ajoutant les dates système de création et modification.
 */
export interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

/**
 * Entité de base avec identifiant unique et horodatage.
 * 
 * Cas d'utilisation :
 * - Héritée par tous les objets persistés (produits, avis, etc.)
 */
export interface Entity<ID = string> extends Timestamped {
  id: ID;
}

export interface Product extends Partial<Entity> {   
    name: string;                               // nom du produit
    description: string;                        // description détaillée du produit
    price?: number;                              // prix du produit
    category?: ProductCategory;                 // catégorie du produit
    options?: Option[];                          // options disponibles pour le produit (ex: taille, couleur, etc.)

    media?: Media[];                             // tableau de médias associés au produit (images, vidéos, etc.)
    primaryMedia?: Partial<Media>;              // image principale du produit pour la carte d'affichage

    isWishlisted?: boolean;                     // indique si le produit est dans la liste de souhaits de l'utilisateur

    stock: Stock;                              // informations sur le stock du produit
    promotion?: Promotion;                      // informations sur la promotion du produit
    attributes?: ProductAttribute;              // attributs du produit (ex: taille, couleur, etc.)
    marketingStatus?: MarketingStatus;          // informations sur le statut marketing du produit
    reviewSummary?: Partial<ReviewSummary>;     // résumé des avis et notes sur le produit
    reviews?: Review[];                         // tableau d'avis sur le produit
}

export interface Option {
    id: string;                               // identifiant unique de l'option
    name: string;                             // nom de l'option (ex: "Taille", "Couleur")
    values: OptionValue[];                    // valeurs possibles pour cette option
}

export interface OptionValue {
    id: string;                               // identifiant unique de la valeur d'option
    name: string;                             // nom de la valeur d'option (ex: "S", "M", "L" pour taille)
    priceModifier?: number;                   // modification du prix associée à cette valeur (optionnel)
    stock?: Stock;                            // informations sur le stock pour cette valeur d'option (optionnel)
    isDefault?: boolean;                      // indique si c'est la valeur par défaut (optionnel)
}

export interface Media extends Partial<Entity> {
    productId: string;                  // identifiant du produit associé
    url: string;                        // URL du média (image, vidéo, etc.)
    type: 'image' | 'video';            // type de média (image ou vidéo)
    alt?: string;                       // texte alternatif pour l'image (optionnel)
    thumbnail?: string;                 // URL de la miniature (optionnel)
    isPrimary?: boolean;                // indique si c'est le média principal du produit (optionnel)
}

export interface ProductCategory extends Partial<Entity> {
    name: string;                        // Nom de la catégorie
    description?: string;                // Description (optionnelle)
    parentCategoryId?: number | null;    // Identifiant de la catégorie parente (null pour les catégories principales)
    subcategories?: ProductCategory[];   // Sous-catégories éventuelles (structure récursive)
  }

export interface Stock extends Partial<Entity> {
    productId?: string;                  // identifiant du produit associé
    quantity: number;                   // quantité en stock
    min?: number;                        // quantité minimum du stock
    max?: number;                        // quantité maximum du stock
    location?: string;                  // emplacement du stock (optionnel)
}

export interface Promotion {
    isOnSale?: boolean;                 // indique si le produit est en promotion
    discountPercentage?: number | null; // pourcentage de réduction (null si pas en promotion)
    discountAmount?: number | null;     // montant de la réduction (null si pas en promotion)   
    salePrice?: number | null;          // prix de vente (null si pas en promotion)
    saleStartDate?: Date | null;        // date de début de la promotion (null si pas en promotion)
    saleEndDate?: Date | null;          // date de fin de la promotion (null si pas en promotion)
}

export interface ProductAttribute {
    tags?: string[];                    // étiquettes associées au produit
    brand?: string;                     // marque du produit
    dimensions?: string;                // dimensions du produit (ex: "10x20x30 cm") 
    weight?: string;                    // poids du produit (ex: "1 kg")
    color?: string;                     // couleur du produit (ex: "rouge")
    material?: string;                  // matériau du produit (ex: "coton")
    warranty?: string;                  // garantie du produit (ex: "2 ans")
    careInstructions?: string;          // instructions d'entretien du produit (ex: "lavage à la main")
}

export interface MarketingStatus {
    isFeatured?: boolean;               // indique si le produit est en vedette
    isBestSeller?: boolean;             // indique si le produit est un best-seller
    isTrending?: boolean;               // indique si le produit est tendance
    isPopular?: boolean;                // indique si le produit est populaire
    isNew?: boolean;                    // indique si le produit est nouveau
}

export interface Review extends Partial<Entity> {
    productId: string;                  // identifiant du produit associé
    userId: string;                     // identifiant de l'utilisateur ayant laissé l'avis
    rating: number;                     // note donnée par l'utilisateur (de 1 à 5)
    comment?: string;                   // commentaire de l'utilisateur (optionnel)
    isVerifiedPurchase?: boolean;       // indique si l'avis provient d'un achat vérifié
}

export interface ReviewSummary {
    productId: string;    // identifiant du produit associé
    averageRating: number;// moyenne des notes
    totalReviews: number; // nombre total d'avis
}

export interface Timestamped {
    createdAt: Date;                    // date de création de l'entité
    updatedAt: Date;                    // date de dernière mise à jour de l'entité
    deletedAt?: Date | null;            // date de suppression de l'entité (null si pas supprimée)
}

export interface Entity<ID = string> extends Timestamped {
    id: ID;                             // identifiant unique de l'entité
}